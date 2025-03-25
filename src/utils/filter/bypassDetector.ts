import { bypassPatterns } from './patterns';

export const detectBypassAttempt = (originalText: string, normalizedText: string): boolean => {
  // Check for intentional letter spacing
  if (bypassPatterns.letterSpacing.test(originalText)) {
    return true;
  }

  // Check for excessive special characters
  const specialCharCount = (originalText.match(bypassPatterns.specialChars) || []).length;
  if (specialCharCount > originalText.length * 0.2) { // Lowered threshold
    return true;
  }

  // Check for number substitutions
  const numberCount = (originalText.match(bypassPatterns.numbers) || []).length;
  if (numberCount > 0 && /[a-zA-Z]/.test(originalText)) { // Only if mixed with letters
    return true;
  }

  // Check for repeated characters
  if (bypassPatterns.repeatedChars.test(originalText)) {
    return true;
  }

  // Check if normalization significantly changed the text
  const similarityScore = calculateSimilarity(originalText, normalizedText);
  if (similarityScore < 0.7) { // Text changed significantly after normalization
    return true;
  }

  return false;
};

// Helper function to calculate text similarity
function calculateSimilarity(text1: string, text2: string): number {
  const set1 = new Set(text1.toLowerCase().split(''));
  const set2 = new Set(text2.toLowerCase().split(''));
  const intersection = new Set([...set1].filter(x => set2.has(x)));
  const union = new Set([...set1, ...set2]);
  return intersection.size / union.size;
}