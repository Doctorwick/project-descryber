export const harmfulPatterns = {
  profanity: /\b(f+[^\w]*u+[^\w]*c*[^\w]*k+|f+[^\w]*o+[^\w]*f+|f+[^\w]*u+|s+h+[^\w]*i+[^\w]*t+|a+[^\w]*s+[^\w]*s+|b+[^\w]*i+[^\w]*t+[^\w]*c+[^\w]*h+|d+[^\w]*a+[^\w]*m+[^\w]*n+|c+[^\w]*r+[^\w]*a+[^\w]*p+|p+[^\w]*i+[^\w]*s+[^\w]*s+|d+[^\w]*i+[^\w]*c+[^\w]*k+|c+[^\w]*o+[^\w]*c+[^\w]*k+|p+[^\w]*u+[^\w]*s+[^\w]*s+[^\w]*y+|a+[^\w]*s+[^\w]*s+[^\w]*h+[^\w]*o+[^\w]*l+[^\w]*e+|w+[^\w]*t+[^\w]*f+|s+[^\w]*t+[^\w]*f+[^\w]*u+|f+[^\w]*u+|a+[^\w]*f+|b+[^\w]*s+|p+[^\w]*o+[^\w]*s+|d+[^\w]*o+[^\w]*o+[^\w]*k+[^\w]*i+[^\w]*e+|p+[^\w]*o+[^\w]*o+[^\w]*p+|t+[^\w]*u+[^\w]*r+[^\w]*d+|b+[^\w]*o+[^\w]*l+[^\w]*l+[^\w]*o+[^\w]*c+[^\w]*k+[^\w]*s+|w+[^\w]*a+[^\w]*n+[^\w]*k+[^\w]*e+[^\w]*r+|t+[^\w]*w+[^\w]*a+[^\w]*t+|b+[^\w]*u+[^\w]*l+[^\w]*l+[^\w]*s+[^\w]*h+[^\w]*i+[^\w]*t+|b+[^\w]*u+[^\w]*m+|n+[^\w]*u+[^\w]*t+[^\w]*s+[^\w]*a+[^\w]*c+[^\w]*k+|c+[^\w]*u+[^\w]*n+[^\w]*t+|t+[^\w]*i+[^\w]*t+[^\w]*s+|b+[^\w]*o+[^\w]*o+[^\w]*b+[^\w]*s+|j+[^\w]*i+[^\w]*z+[^\w]*z+)\b/gi,
  harassment: /\b(k+[^\w]*i+[^\w]*l+[^\w]*l+|d+[^\w]*i+[^\w]*e+|h+[^\w]*a+[^\w]*t+[^\w]*e+|s+[^\w]*t+[^\w]*u+[^\w]*p+[^\w]*i+[^\w]*d+|i+[^\w]*d+[^\w]*i+[^\w]*o+[^\w]*t+|d+[^\w]*u+[^\w]*m+[^\w]*b+|r+[^\w]*e+[^\w]*t+[^\w]*a+[^\w]*r+[^\w]*d+|l+[^\w]*o+[^\w]*s+[^\w]*e+[^\w]*r+|f+[^\w]*a+[^\w]*t+|u+[^\w]*g+[^\w]*l+[^\w]*y+|k+[^\w]*y+[^\w]*s+|k+[^\w]*m+[^\w]*s+|g+[^\w]*t+[^\w]*f+[^\w]*o+|s+[^\w]*t+[^\w]*f+[^\w]*u+|f+[^\w]*o+[^\w]*f+[^\w]*f+|f+[^\w]*y+[^\w]*s+|u+[^\w]*r*\s*m+[^\w]*o+[^\w]*m+|y+[^\w]*o+[^\w]*u*[^\w]*r*\s*m+[^\w]*o+[^\w]*m+|y+[^\w]*o*\s*m+[^\w]*o+[^\w]*m+|y+[^\w]*a*\s*m+[^\w]*o+[^\w]*m+|m+[^\w]*o+[^\w]*r+[^\w]*o+[^\w]*n+|p+[^\w]*a+[^\w]*t+[^\w]*h+[^\w]*e+[^\w]*t+[^\w]*i+[^\w]*c+|w+[^\w]*o+[^\w]*r+[^\w]*t+[^\w]*h+[^\w]*l+[^\w]*e+[^\w]*s+[^\w]*s+|i+[^\w]*n+[^\w]*c+[^\w]*e+[^\w]*l+|g+[^\w]*a+[^\w]*r+[^\w]*b+[^\w]*a+[^\w]*g+[^\w]*e+|t+[^\w]*r+[^\w]*a+[^\w]*s+[^\w]*h+|u+[^\w]*s+[^\w]*e+[^\w]*l+[^\w]*e+[^\w]*s+[^\w]*s+|b+[^\w]*r+[^\w]*a+[^\w]*i+[^\w]*n+[^\w]*l+[^\w]*e+[^\w]*s+[^\w]*s+|j+[^\w]*a+[^\w]*c+[^\w]*k+[^\w]*a+[^\w]*s+[^\w]*s+|d+[^\w]*o+[^\w]*u+[^\w]*c+[^\w]*h+[^\w]*e+|f+[^\w]*r+[^\w]*e+[^\w]*a+[^\w]*k+|p+[^\w]*s+[^\w]*y+[^\w]*c+[^\w]*h+[^\w]*o+|c+[^\w]*r+[^\w]*a+[^\w]*z+[^\w]*y+|m+[^\w]*e+[^\w]*n+[^\w]*t+[^\w]*a+[^\w]*l+|s+[^\w]*i+[^\w]*c+[^\w]*k+[^\w]*o+)\b/gi,
  threats: /\b(t+[^\w]*h+[^\w]*r+[^\w]*e+[^\w]*a+[^\w]*t+|k+[^\w]*i+[^\w]*l+[^\w]*l+|m+[^\w]*u+[^\w]*r+[^\w]*d+[^\w]*e+[^\w]*r+|h+[^\w]*u+[^\w]*r+[^\w]*t+|a+[^\w]*t+[^\w]*t+[^\w]*a+[^\w]*c+[^\w]*k+|b+[^\w]*e+[^\w]*a+[^\w]*t+|f+[^\w]*i+[^\w]*g+[^\w]*h+[^\w]*t+|p+[^\w]*u+[^\w]*n+[^\w]*c+[^\w]*h+|s+[^\w]*h+[^\w]*o+[^\w]*t+|k+[^\w]*y+[^\w]*s+|k+[^\w]*m+[^\w]*s+|y+[^\w]*s+|r+[^\w]*i+[^\w]*p+|d+[^\w]*i+[^\w]*e+|s+[^\w]*l+[^\w]*a+[^\w]*p+|s+[^\w]*m+[^\w]*a+[^\w]*c+[^\w]*k+|c+[^\w]*h+[^\w]*o+[^\w]*k+[^\w]*e+|s+[^\w]*t+[^\w]*r+[^\w]*a+[^\w]*n+[^\w]*g+[^\w]*l+[^\w]*e+|s+[^\w]*t+[^\w]*a+[^\w]*b+|c+[^\w]*u+[^\w]*t+|s+[^\w]*l+[^\w]*i+[^\w]*t+|h+[^\w]*a+[^\w]*n+[^\w]*g+|s+[^\w]*u+[^\w]*i+[^\w]*c+[^\w]*i+[^\w]*d+[^\w]*e+|e+[^\w]*n+[^\w]*d+\s+i+[^\w]*t+|e+[^\w]*n+[^\w]*d+\s+a+[^\w]*l+[^\w]*l+|h+[^\w]*u+[^\w]*n+[^\w]*t+\s+y+[^\w]*o+[^\w]*u+|h+[^\w]*u+[^\w]*n+[^\w]*t+\s+d+[^\w]*o+[^\w]*w+[^\w]*n+|t+[^\w]*o+[^\w]*r+[^\w]*t+[^\w]*u+[^\w]*r+[^\w]*e+|s+[^\w]*u+[^\w]*f+[^\w]*f+[^\w]*e+[^\w]*r+|p+[^\w]*a+[^\w]*i+[^\w]*n+|b+[^\w]*l+[^\w]*e+[^\w]*e+[^\w]*d+|b+[^\w]*r+[^\w]*e+[^\w]*a+[^\w]*k+)\b/gi,
  discrimination: /\b(n+[^\w]*a+[^\w]*z+[^\w]*i+|n+[^\w]*i+[^\w]*g+[^\w]*g+[^\w]*e+[^\w]*r+|f+[^\w]*a+[^\w]*g+|f+[^\w]*a+[^\w]*g+[^\w]*g+[^\w]*o+[^\w]*t+|f+[^\w]*a+[^\w]*g+[^\w]*g+[^\w]*i+[^\w]*t+|f+[^\w]*a+[^\w]*g+[^\w]*s+|g+[^\w]*a+[^\w]*y+|l+[^\w]*e+[^\w]*s+[^\w]*b+[^\w]*i+[^\w]*a+[^\w]*n+|t+[^\w]*r+[^\w]*a+[^\w]*n+[^\w]*s+|q+[^\w]*u+[^\w]*e+[^\w]*e+[^\w]*r+|j+[^\w]*e+[^\w]*w+|m+[^\w]*u+[^\w]*s+[^\w]*l+[^\w]*i+[^\w]*m+|i+[^\w]*s+[^\w]*l+[^\w]*a+[^\w]*m+|c+[^\w]*h+[^\w]*r+[^\w]*i+[^\w]*s+[^\w]*t+[^\w]*i+[^\w]*a+[^\w]*n+|n+[^\w]*1+[^\w]*g+|f+[^\w]*4+[^\w]*g+|r+[^\w]*a+[^\w]*c+[^\w]*i+[^\w]*s+[^\w]*t+|w+[^\w]*h+[^\w]*i+[^\w]*t+[^\w]*e+\s+p+[^\w]*o+[^\w]*w+[^\w]*e+[^\w]*r+|w+[^\w]*h+[^\w]*i+[^\w]*t+[^\w]*e+\s+s+[^\w]*u+[^\w]*p+[^\w]*r+[^\w]*e+[^\w]*m+[^\w]*a+[^\w]*c+[^\w]*y+|k+[^\w]*k+[^\w]*k+|r+[^\w]*e+[^\w]*t+[^\w]*a+[^\w]*r+[^\w]*d+|c+[^\w]*h+[^\w]*i+[^\w]*n+[^\w]*k+|s+[^\w]*p+[^\w]*i+[^\w]*c+|w+[^\w]*e+[^\w]*t+[^\w]*b+[^\w]*a+[^\w]*c+[^\w]*k+|b+[^\w]*e+[^\w]*a+[^\w]*n+[^\w]*e+[^\w]*r+|m+[^\w]*i+[^\w]*d+[^\w]*g+[^\w]*e+[^\w]*t+|d+[^\w]*w+[^\w]*a+[^\w]*r+[^\w]*f+|c+[^\w]*r+[^\w]*i+[^\w]*p+[^\w]*p+[^\w]*l+[^\w]*e+|h+[^\w]*o+[^\w]*m+[^\w]*o+|d+[^\w]*y+[^\w]*k+[^\w]*e+|t+[^\w]*r+[^\w]*a+[^\w]*n+[^\w]*n+[^\w]*y+|p+[^\w]*h+[^\w]*a+[^\w]*g+[^\w]*g+[^\w]*o+[^\w]*t+)\b/gi,
  personalInfo: /\b(\d{3}[-.]?\d{3}[-.]?\d{4}|\w+@\w+\.\w{2,3}|(?:\d{1,3}\.){3}\d{1,3}|(?:\d{4}[- ]?){4}|(?:\d{4}[- ]?){3}\d{4})\b/gi,
  selfHarm: /\b(s+[^\w]*u+[^\w]*i+[^\w]*c+[^\w]*i+[^\w]*d+[^\w]*e+|s+[^\w]*e+[^\w]*l+[^\w]*f+[^\w]*h+[^\w]*a+[^\w]*r+[^\w]*m+|k+[^\w]*i+[^\w]*l+[^\w]*l+\s+m+[^\w]*y+[^\w]*s+[^\w]*e+[^\w]*l+[^\w]*f+|e+[^\w]*n+[^\w]*d+\s+m+[^\w]*y+\s+l+[^\w]*i+[^\w]*f+[^\w]*e+|d+[^\w]*o+[^\w]*n+[^\w]*t+\s+w+[^\w]*a+[^\w]*n+[^\w]*t+\s+t+[^\w]*o+\s+l+[^\w]*i+[^\w]*v+[^\w]*e+|c+[^\w]*u+[^\w]*t+[^\w]*t+[^\w]*i+[^\w]*n+[^\w]*g+\s+m+[^\w]*y+[^\w]*s+[^\w]*e+[^\w]*l+[^\w]*f+|h+[^\w]*a+[^\w]*r+[^\w]*m+\s+m+[^\w]*y+[^\w]*s+[^\w]*e+[^\w]*l+[^\w]*f+|n+[^\w]*o+\s+r+[^\w]*e+[^\w]*a+[^\w]*s+[^\w]*o+[^\w]*n+\s+t+[^\w]*o+\s+l+[^\w]*i+[^\w]*v+[^\w]*e+|w+[^\w]*a+[^\w]*n+[^\w]*t+\s+t+[^\w]*o+\s+d+[^\w]*i+[^\w]*e+|e+[^\w]*n+[^\w]*d+\s+i+[^\w]*t+\s+a+[^\w]*l+[^\w]*l+)\b/gi,
  extremism: /\b(t+[^\w]*e+[^\w]*r+[^\w]*r+[^\w]*o+[^\w]*r+[^\w]*i+[^\w]*s+[^\w]*t+|b+[^\w]*o+[^\w]*m+[^\w]*b+\s+m+[^\w]*a+[^\w]*k+[^\w]*i+[^\w]*n+[^\w]*g+|h+[^\w]*o+[^\w]*w+\s+t+[^\w]*o+\s+k+[^\w]*i+[^\w]*l+[^\w]*l+|m+[^\w]*a+[^\w]*s+[^\w]*s+\s+s+[^\w]*h+[^\w]*o+[^\w]*o+[^\w]*t+[^\w]*i+[^\w]*n+[^\w]*g+|j+[^\w]*i+[^\w]*h+[^\w]*a+[^\w]*d+|e+[^\w]*x+[^\w]*t+[^\w]*r+[^\w]*e+[^\w]*m+[^\w]*i+[^\w]*s+[^\w]*t+|r+[^\w]*a+[^\w]*d+[^\w]*i+[^\w]*c+[^\w]*a+[^\w]*l+[^\w]*i+[^\w]*z+[^\w]*a+[^\w]*t+[^\w]*i+[^\w]*o+[^\w]*n+|a+[^\w]*n+[^\w]*a+[^\w]*r+[^\w]*c+[^\w]*h+[^\w]*i+[^\w]*s+[^\w]*t+\s+c+[^\w]*o+[^\w]*o+[^\w]*k+[^\w]*b+[^\w]*o+[^\w]*o+[^\w]*k+|a+[^\w]*t+[^\w]*t+[^\w]*a+[^\w]*c+[^\w]*k+\s+p+[^\w]*l+[^\w]*a+[^\w]*n+)\b/gi,
  illegalSubstances: /\b(c+[^\w]*o+[^\w]*c+[^\w]*a+[^\w]*i+[^\w]*n+[^\w]*e+|h+[^\w]*e+[^\w]*r+[^\w]*o+[^\w]*i+[^\w]*n+|m+[^\w]*e+[^\w]*t+[^\w]*h+|f+[^\w]*e+[^\w]*n+[^\w]*t+[^\w]*a+[^\w]*n+[^\w]*y+[^\w]*l+|o+[^\w]*p+[^\w]*i+[^\w]*o+[^\w]*i+[^\w]*d+[^\w]*s+|w+[^\w]*e+[^\w]*e+[^\w]*d+\s+d+[^\w]*e+[^\w]*a+[^\w]*l+[^\w]*e+[^\w]*r+|d+[^\w]*r+[^\w]*u+[^\w]*g+\s+d+[^\w]*e+[^\w]*a+[^\w]*l+[^\w]*e+[^\w]*r+|b+[^\w]*u+[^\w]*y+\s+d+[^\w]*r+[^\w]*u+[^\w]*g+[^\w]*s+|s+[^\w]*e+[^\w]*l+[^\w]*l+\s+d+[^\w]*r+[^\w]*u+[^\w]*g+[^\w]*s+|m+[^\w]*o+[^\w]*l+[^\w]*l+[^\w]*y+|e+[^\w]*c+[^\w]*s+[^\w]*t+[^\w]*a+[^\w]*s+[^\w]*y+|l+[^\w]*s+[^\w]*d+)\b/gi
};

export const bypassPatterns = {
  letterSpacing: /\b\w+[\s_.,-]+\w+\b/g,
  specialChars: /[^\w\s]|_/g,
  numbers: /\d+/g,
  repeatedChars: /(.)\1{2,}/g,
  reversedText: /\b\w{4,}|(\w{2,})(\w{2,})\b/g, // Detects potential word reversal
  codeWords: /\b(fortnite|roblox|minecraft)\s+(bad|words|language)\b/gi, // Common code words used to disguise profanity
  unicodeReplacements: /[\u00A0-\u9999]/g, // Non-standard unicode characters
  commonSubstitutions: {
    'u': 'you',
    'r': 'are',
    'ur': 'your',
    'y': 'why',
    'k': 'ok',
    'n': 'and',
    'dat': 'that',
    'dis': 'this',
    'da': 'the',
    'f': 'fuck',
    'fk': 'fuck',
    'fck': 'fuck',
    'fu': 'fuck',
    'stfu': 'shut the fuck up',
    'foff': 'fuck off',
    'fuc': 'fuck',
    'fuq': 'fuck',
    'fuk': 'fuck',
    'phuck': 'fuck',
    'phuk': 'fuck',
    'ph': 'f',
    'ph1': 'f',
    'f1': 'f',
    'l1': 'l',
    '1': 'i',
    '!': 'i',
    '@': 'a',
    '4': 'a',
    '3': 'e',
    '0': 'o',
    '5': 's',
    '7': 't',
    '$': 's',
    'kys': 'kill yourself',
    'ky$': 'kill yourself',
    'kms': 'kill myself',
    'km$': 'kill myself',
    'wtf': 'what the fuck',
    'w7f': 'what the fuck',
    'omfg': 'oh my fucking god',
    'pos': 'piece of shit',
    'p0s': 'piece of shit',
    'af': 'as fuck',
    'a55': 'ass',
    'd1ck': 'dick',
    'n1gg': 'nigg',
    'n1g': 'nig',
    'azz': 'ass',
    'b1tch': 'bitch',
    'sh1t': 'shit',
    'a$$': 'ass',
    '$hit': 'shit',
    'b!tch': 'bitch',
    'p0rn': 'porn',
    'h0rny': 'horny',
    's3x': 'sex',
    's3xy': 'sexy',
    'f@g': 'fag',
    'f@gg0t': 'faggot',
    'f@ggot': 'faggot',
    'f*g': 'fag',
    'f*ggot': 'faggot',
    'ph@g': 'fag',
    'ph@ggot': 'faggot'
  },
  advancedSubstitutions: {
    // More complex word replacements that might not be caught by simple char substitution
    'sht': 'shit',
    'fk': 'fuck',
    'fc': 'fuck',
    'dck': 'dick',
    'fck': 'fuck',
    'fux': 'fuck',
    'fuc': 'fuck',
    'fuk': 'fuck',
    'fcking': 'fucking',
    'fking': 'fucking',
    'retrd': 'retard',
    'rtrd': 'retard',
    'bich': 'bitch',
    'btch': 'bitch',
    'bch': 'bitch',
    'stpd': 'stupid',
    'idot': 'idiot',
    'stupd': 'stupid',
    'dmbass': 'dumbass',
    'dmb': 'dumb',
    'jrk': 'jerk',
    'n1g': 'nig',
    'ngga': 'nigga',
    'niga': 'nigga',
    'ngger': 'nigger',
    'niger': 'nigger',
    'fgt': 'faggot',
    'f4g': 'fag',
    'fagg': 'faggot',
    'f4gg0t': 'faggot',
    'fggot': 'faggot',
    'fagot': 'faggot',
    'phag': 'fag',
    'phaggot': 'faggot',
    'fg': 'fag',
    'fggt': 'faggot',
    'ph4g': 'fag',
    'ph4ggot': 'faggot'
  }
};

// Contexts where profanity might be acceptable
export const allowedContexts = [
  {
    pattern: /\b(game|match|round|server)\s+(crash(ed)?|end(ed)?|fail(ed)?|disconnect(ed)?)\b/i,
    allowedWords: ['fuck', 'shit', 'damn', 'crap']
  },
  {
    pattern: /\b(lost|missed|failed)\s+(save|progress|data|work|connection)\b/i,
    allowedWords: ['fuck', 'shit', 'damn', 'crap']
  },
  {
    pattern: /\b(internet|wifi|connection)\s+(drop(ped)?|fail(ed)?|disconnect(ed)?)\b/i,
    allowedWords: ['fuck', 'shit', 'damn', 'crap']
  },
  {
    pattern: /\b(technical|software|hardware)\s+(issue|problem|error|glitch|bug)\b/i,
    allowedWords: ['fuck', 'shit', 'damn', 'crap', 'hell']
  },
  {
    pattern: /\b(weather|traffic|transport)\s+(terrible|awful|bad|horrible)\b/i,
    allowedWords: ['damn', 'hell', 'crap']
  }
];

// Advanced patterns for detecting bypass attempts
export const bypassTechniques = {
  wordMixing: /\b([a-z])([a-z])([a-z])[^a-z]+([a-z])([a-z])\b/i, // Detects inserting characters between letters
  charSubstitution: /([a-z])\W+([a-z])/g, // Detects non-word chars between letters
  zeroWidthSpaces: /[\u200B-\u200D\uFEFF]/g, // Zero-width spaces
  homoglyphs: /[\u0430\u0435\u043E\u0440\u0441\u0445\u0442\u0444\u0433\u0446\u0431\u043a\u043c\u0437]/g, // Extended Cyrillic lookalikes
  leetspeak: /[0-9@$!#+*]/g, // Common leet speak numbers and symbols
  punctuationPadding: /\w[.,;:!?]{2,}\w/g, // Excessive punctuation between chars
  doubleEncoding: /(%[0-9A-F]{2}){2,}/i, // URL encoding tricks
  mirroredLetters: /[ƨƹƽ]/g, // Mirrored letters
  unicodeArt: /[\u2580-\u259F\u2800-\u28FF]/g, // Unicode block elements & braille
  codeBlocks: /`[^`]+`|\[[^\]]+\]|\{[^}]+\}/g, // Text within code marks or brackets
  morseCode: /[.-]{2,}/g // Potential morse code
};

// Extended detection patterns for self-harm and dangerous content
export const dangerousPatterns = {
  selfHarmIntent: /\b(end(ing)?\s+(my|your)\s+life|kill(ing)?\s+(my|your)self|hurt(ing)?\s+(my|your)self|suicid(e|al))\b/i,
  suicideWarnings: /\b(good\s?bye\s+(forever|cruel\s+world)|last\s+day|no\s+reason\s+to\s+live|better\s+off\s+(dead|without\s+me))\b/i,
  violentThreats: /\b(shoot(ing)?\s+up|bomb(ing)?|attack(ing)?|massacre)\b/i,
  extremistContent: /\b(radical(ization|ize)|jihad(ist)?|terrorist\s+(attack|plan)|recruitment|manifesto)\b/i
};
