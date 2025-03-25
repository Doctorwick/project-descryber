
import { bypassPatterns, bypassTechniques } from './patterns';

export const detectBypassAttempt = (originalText: string, normalizedText: string): boolean => {
  // Check for intentional letter spacing
  if (bypassPatterns.letterSpacing.test(originalText)) {
    return true;
  }

  // Check for excessive special characters
  const specialCharCount = (originalText.match(bypassPatterns.specialChars) || []).length;
  const textLength = originalText.replace(/\s/g, '').length;
  if (specialCharCount > 0 && (specialCharCount / textLength) > 0.15) {
    return true;
  }

  // Check for number substitutions
  const numberCount = (originalText.match(bypassPatterns.numbers) || []).length;
  if (numberCount > 0 && /[a-zA-Z]/.test(originalText)) {
    return true;
  }

  // Check for repeated characters
  if (bypassPatterns.repeatedChars.test(originalText)) {
    return true;
  }

  // Check for advanced bypass techniques
  if (checkAdvancedBypassTechniques(originalText)) {
    return true;
  }

  // Check if normalization significantly changed the text
  const similarityScore = calculateSimilarity(originalText, normalizedText);
  if (similarityScore < 0.7) { // Text changed significantly after normalization
    return true;
  }

  // Check if any banned words appear after normalization but not in the original
  for (const word of extractPotentialBannedWords(normalizedText)) {
    if (!wordExistsInText(originalText, word) && isBannedWord(word)) {
      return true;
    }
  }

  return false;
};

// Check for advanced bypass techniques
function checkAdvancedBypassTechniques(text: string): boolean {
  // Check for zero-width spaces and other invisible characters
  if (bypassTechniques.zeroWidthSpaces.test(text)) {
    return true;
  }

  // Check for Cyrillic lookalikes and other homoglyphs
  if (bypassTechniques.homoglyphs.test(text)) {
    return true;
  }

  // Check for excessive leet speak
  const leetCharCount = (text.match(bypassTechniques.leetspeak) || []).length;
  if (leetCharCount > 2 && leetCharCount / text.length > 0.1) {
    return true;
  }

  // Check for unusual Unicode characters that could be used for obfuscation
  const unicodeCharCount = (text.match(bypassPatterns.unicodeReplacements) || []).length;
  if (unicodeCharCount > 0) {
    return true;
  }

  // Check for excessive punctuation padding between letters
  if (bypassTechniques.punctuationPadding.test(text)) {
    return true;
  }

  // Check for mirrored letters and special unicode blocks
  if (bypassTechniques.mirroredLetters.test(text) || bypassTechniques.unicodeArt.test(text)) {
    return true;
  }

  // Check for text within code marks or brackets (potential obfuscation)
  if (bypassTechniques.codeBlocks.test(text)) {
    return true;
  }

  // Check for morse code-like patterns
  if (bypassTechniques.morseCode.test(text.replace(/\s/g, ''))) {
    return true;
  }

  // Check for character mixing (inserting special chars between normal chars)
  if (bypassTechniques.wordMixing.test(text) || bypassTechniques.charSubstitution.test(text)) {
    return true;
  }

  return false;
}

// Extract potential banned words from normalized text
function extractPotentialBannedWords(text: string): string[] {
  return text.toLowerCase().split(/\s+/);
}

// Check if a word exists in the original text (accounting for spacing and special chars)
function wordExistsInText(text: string, word: string): boolean {
  const pattern = new RegExp(word.split('').join('[^a-zA-Z0-9]*'), 'i');
  return pattern.test(text);
}

// Check if a word is in our banned words list
function isBannedWord(word: string): boolean {
  const commonBannedWords = [
    'fuck', 'shit', 'ass', 'bitch', 'cunt', 'dick', 'cock', 'pussy', 
    'nigger', 'nigga', 'fag', 'faggot', 'retard', 'kill', 'die', 'hate',
    'gay', 'lesbian', 'trans', 'jew', 'muslim', 'nazi', 'kkk', 'chink',
    'spic', 'wetback', 'beaner', 'midget', 'dwarf', 'cripple', 'homo',
    'dyke', 'tranny'
  ];
  
  return commonBannedWords.includes(word.toLowerCase());
}

// Helper function to calculate text similarity using Levenshtein distance
function calculateSimilarity(text1: string, text2: string): number {
  // For very long texts, use a subset comparison
  if (text1.length > 100 || text2.length > 100) {
    const subset1 = text1.substring(0, 100);
    const subset2 = text2.substring(0, 100);
    
    const set1 = new Set(subset1.toLowerCase().split(''));
    const set2 = new Set(subset2.toLowerCase().split(''));
    const intersection = new Set([...set1].filter(x => set2.has(x)));
    const union = new Set([...set1, ...set2]);
    return intersection.size / union.size;
  }
  
  // Use edit distance for shorter texts
  const distance = levenshteinDistance(text1.toLowerCase(), text2.toLowerCase());
  const maxLength = Math.max(text1.length, text2.length);
  return 1 - (distance / maxLength);
}

// Levenshtein distance calculation
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
