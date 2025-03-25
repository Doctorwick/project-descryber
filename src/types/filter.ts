
export interface FilterResult {
  isHarmful: boolean;
  categories: string[];
  severity: "low" | "medium" | "high";
  confidence: number;
  bypassAttempted?: boolean;
  aiAnalysis?: {
    toxicity: number;
    identity_attack: number;
    insult: number;
    threat: number;
  };
  [key: string]: any; // Add index signature to satisfy Json type
}

export interface PatternMatch {
  category: string;
  matches: string[];
  severity?: "low" | "medium" | "high";
  confidence?: number;
}

export interface BypassDetectionResult {
  detected: boolean;
  technique: string;
  confidence: number;
  originalText: string;
  normalizedText: string;
}
