
export interface AINode {
  id: string;
  label: string;
  category: NodeCategory;
  description: string;
  importance: number; // 1 to 5
  level: number; // 0 for root, 1 for domain, 2 for sub-domain
  parent?: string;
  details?: string;
  // D3 simulation properties added to resolve TypeScript errors during force simulation
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;
}

export enum NodeCategory {
  ROOT = 'AI Universe',
  SYMBOLIC = 'Symbolic AI',
  MACHINE_LEARNING = 'Machine Learning',
  DEEP_LEARNING = 'Deep Learning',
  FOUNDATION = 'Foundation Models',
  MULTIMODAL = 'Multimodal AI',
  GENERATIVE = 'Generative AI',
  REASONING = 'Reasoning Models',
  AGENTIC = 'Agentic & Compound',
  EMBODIED = 'Physical & Embodied'
}

export interface Link {
  source: string;
  target: string;
}

export interface GraphData {
  nodes: AINode[];
  links: Link[];
}
