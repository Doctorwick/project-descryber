import { allowedContexts, bypassPatterns, bypassTechniques, dangerousPatterns } from './patterns';

export const normalizeText = (text: string): string => {
  let normalized = text.toLowerCase();

  // Remove zero-width characters and invisible characters
  normalized = normalized.replace(/[\u200B-\u200D\uFEFF]/g, '');
  
  // Remove homoglyphs (Cyrillic lookalikes)
  normalized = normalized.replace(/\u0430/g, 'a')
    .replace(/\u0435/g, 'e')
    .replace(/\u043E/g, 'o')
    .replace(/\u0440/g, 'p')
    .replace(/\u0441/g, 'c')
    .replace(/\u0445/g, 'x');

  // Replace common letter/number substitutions
  Object.entries({...bypassPatterns.commonSubstitutions, ...bypassPatterns.advancedSubstitutions}).forEach(([short, full]) => {
    // Create a pattern that matches the short form with optional special characters between letters
    const pattern = new RegExp(
      short.split('').join('[^\\w\\s]*'),
      'gi'
    );
    normalized = normalized.replace(pattern, full);
  });

  // Check for reverse text tricks
  const words = normalized.split(/\s+/);
  for (let i = 0; i < words.length; i++) {
    const reversed = words[i].split('').reverse().join('');
    if (Object.values(bypassPatterns.commonSubstitutions).includes(reversed) || 
        Object.values(bypassPatterns.advancedSubstitutions).includes(reversed)) {
      words[i] = reversed;
    }
  }
  normalized = words.join(' ');

  // Handle letter spacing and special characters
  normalized = normalized
    .replace(/\s+/g, ' ')  // Normalize spaces
    .replace(/[^\w\s]/g, '') // Remove special characters
    .trim();

  // Remove repeated characters (but keep at least two if they exist)
  normalized = normalized.replace(/(.)\1{2,}/g, '$1$1');

  // Handle common leetspeak patterns not covered by substitutions
  normalized = normalized
    .replace(/ph/g, 'f')
    .replace(/\$/g, 's')
    .replace(/@/g, 'a')
    .replace(/!/, 'i')
    .replace(/1/g, 'i')
    .replace(/0/g, 'o')
    .replace(/3/g, 'e')
    .replace(/4/g, 'a')
    .replace(/5/g, 's')
    .replace(/7/g, 't')
    .replace(/8/g, 'b')
    .replace(/9/g, 'g');

  return normalized;
};

export const isContextuallyAllowed = (text: string, profanity: string[]): boolean => {
  // Check each context pattern
  for (const context of allowedContexts) {
    if (context.pattern.test(text)) {
      // Check if all found profanity is in the allowed list for this context
      const disallowedProfanity = profanity.filter(word => 
        !context.allowedWords.includes(word.toLowerCase())
      );
      
      // Only allow if all profanity found is in the allowed list
      if (disallowedProfanity.length === 0) {
        // Additional check for mixed harmful content
        const hasOtherHarmfulContent = /\b(kill|die|hate|stupid|idiot|ugly|murder|attack|shoot|stab|hurt|rape|molest|nazi|nigger|faggot|fag|retard|suicide|terrorist|racist|white.+power|extremist)\b/i.test(text);
        return !hasOtherHarmfulContent;
      }
    }
  }
  
  return false;
};

export const detectBypassIntent = (originalText: string, normalizedText: string): boolean => {
  // Check for intentional character manipulation
  const specialCharRatio = (originalText.match(/[^\w\s]/g) || []).length / originalText.length;
  if (specialCharRatio > 0.15) return true;

  // Check for intentional spacing
  const spacingRatio = (originalText.match(/\s/g) || []).length / originalText.length;
  if (spacingRatio > 0.3) return true;

  // Check for leetspeak and number substitution
  const leetCount = (originalText.match(bypassTechniques.leetspeak) || []).length;
  if (leetCount > 3) return true;

  // Check for zero-width spaces
  if (bypassTechniques.zeroWidthSpaces.test(originalText)) return true;

  // Check for homoglyphs
  if (bypassTechniques.homoglyphs.test(originalText)) return true;

  // Check for excessive punctuation to avoid detection
  if (bypassTechniques.punctuationPadding.test(originalText)) return true;

  // Check for suspicious word mixing
  if (bypassTechniques.wordMixing.test(originalText)) return true;

  // Check for significant text transformation
  const similarityScore = calculateSimilarity(originalText, normalizedText);
  return similarityScore < 0.6;
};

function calculateSimilarity(text1: string, text2: string): number {
  // Convert both texts to character sets for comparison
  const set1 = new Set(text1.toLowerCase().split(''));
  const set2 = new Set(text2.toLowerCase().split(''));
  
  // Calculate Jaccard similarity coefficient
  const intersection = new Set([...set1].filter(x => set2.has(x)));
  const union = new Set([...set1, ...set2]);
  const jaccardSimilarity = intersection.size / union.size;
  
  // Calculate edit distance-based similarity
  const editDistance = levenshteinDistance(text1.toLowerCase(), text2.toLowerCase());
  const maxLength = Math.max(text1.length, text2.length);
  const editSimilarity = maxLength > 0 ? 1 - (editDistance / maxLength) : 1;
  
  // Return weighted combination of both similarity measures
  return (jaccardSimilarity * 0.4) + (editSimilarity * 0.6);
}

function levenshteinDistance(str1: string, str2: string): number {
  const m = str1.length;
  const n = str2.length;

  // Create a matrix of size (m+1) x (n+1)
  const dp: number[][] = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));

  // Fill the first row and column
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  // Fill the rest of the matrix
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,       // deletion
        dp[i][j - 1] + 1,       // insertion
        dp[i - 1][j - 1] + cost // substitution
      );
    }
  }

  return dp[m][n];
}
