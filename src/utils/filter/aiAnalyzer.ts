import { pipeline } from '@huggingface/transformers';

let classifier: any = null;

export const initializeClassifier = async () => {
  try {
    // Using a more sophisticated model for better toxicity detection
    classifier = await pipeline(
      'text-classification',
      'martin-ha/toxic-comment-model',
      { 
        device: 'cpu'
      }
    );
    console.log('Enhanced toxicity classifier initialized successfully');
  } catch (error) {
    console.error('Error initializing toxicity classifier:', error);
  }
};

// Initialize the classifier when the module loads
initializeClassifier();

export const analyzeWithAI = async (text: string) => {
  if (!classifier) {
    console.warn('Toxicity classifier not initialized yet');
    return null;
  }

  try {
    // Analyze with enhanced context awareness
    const results = await classifier(text, {
      wait_for_model: true,
      topk: 5 // Get top 5 predictions for better context understanding
    });

    // Calculate weighted score based on multiple predictions
    const weightedScore = results.reduce((acc: number, pred: any, idx: number) => {
      const weight = 1 / (idx + 1); // Higher weight for more confident predictions
      return acc + (pred.score * weight);
    }, 0) / results.reduce((acc: number, _, idx: number) => acc + (1 / (idx + 1)), 0);

    return {
      toxicity: weightedScore,
      identity_attack: /\b(racial|ethnic|religious)\b/i.test(text) ? Math.max(weightedScore, 0.8) : weightedScore * 0.5,
      insult: /\b(you|ur|your|u)\b.*\b(suck|stink|smell|ugly|stupid|dumb)\b/i.test(text) ? Math.max(weightedScore, 0.8) : weightedScore * 0.7,
      threat: /\b(kill|die|hurt|threat|harm)\b/i.test(text) ? Math.max(weightedScore, 0.9) : weightedScore * 0.3
    };
  } catch (error) {
    console.error('Error analyzing text with AI:', error);
    return null;
  }
};