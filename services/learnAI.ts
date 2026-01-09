
import { NODE_INSIGHTS } from '../data/nodeInsights';

export interface NodeInsights {
  summary: string;
  keyConcepts: string[];
  historicalContext: string;
  futureOutlook: string;
  learningPath: string[];
}

/**
 * Retrieves AI insights from the pre-computed static knowledge base.
 * This approach is cost-effective, high-performance, and ensures 100% availability.
 */
export const getAIInsights = async (topic: string): Promise<NodeInsights> => {
  // Simulate a slight network delay for a more 'natural' feel, though results are instant
  await new Promise(resolve => setTimeout(resolve, 600));

  const data = NODE_INSIGHTS[topic];
  
  if (data) {
    return data;
  }

  // Fallback / Default error handling
  throw new Error(`Knowledge base entry for "${topic}" not found.`);
};
