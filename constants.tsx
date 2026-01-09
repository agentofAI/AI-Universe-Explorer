
import { AINode, NodeCategory, GraphData } from './types';

export const INITIAL_NODES: AINode[] = [
  { id: 'root', label: 'Artificial Intelligence', category: NodeCategory.ROOT, importance: 5, level: 0, description: 'The complete landscape of intelligent systems.' },
  
  // I. Symbolic AI
  { id: 'symbolic', label: 'Symbolic AI', category: NodeCategory.SYMBOLIC, importance: 4, level: 1, parent: 'root', description: 'Logic-based AI focusing on high-level symbolic representations.' },
  { id: 'logic', label: 'Logic & Planning', category: NodeCategory.SYMBOLIC, importance: 3, level: 2, parent: 'symbolic', description: 'A*, Constraint Satisfaction, and formal logic.' },
  { id: 'knowledge', label: 'Knowledge Systems', category: NodeCategory.SYMBOLIC, importance: 3, level: 2, parent: 'symbolic', description: 'Expert Systems and Knowledge Graphs.' },

  // II. Machine Learning
  { id: 'ml', label: 'Machine Learning', category: NodeCategory.MACHINE_LEARNING, importance: 4, level: 1, parent: 'root', description: 'Algorithms that improve through experience and data.' },
  { id: 'classic_ml', label: 'Supervised/Unsupervised', category: NodeCategory.MACHINE_LEARNING, importance: 3, level: 2, parent: 'ml', description: 'SVM, Random Forest, Clustering algorithms.' },
  { id: 'rl', label: 'Reinforcement Learning', category: NodeCategory.MACHINE_LEARNING, importance: 4, level: 2, parent: 'ml', description: 'Learning through trial and error to maximize rewards.' },
  { id: 'rlhf', label: 'RLHF & Alignment', category: NodeCategory.MACHINE_LEARNING, importance: 3, level: 2, parent: 'rl', description: 'Reinforcement Learning from Human Feedback.' },

  // III. Deep Learning
  { id: 'dl', label: 'Deep Learning', category: NodeCategory.DEEP_LEARNING, importance: 4, level: 1, parent: 'root', description: 'Neural networks with complex layered architectures.' },
  { id: 'vision_dl', label: 'Vision (CNN/ViT)', category: NodeCategory.DEEP_LEARNING, importance: 3, level: 2, parent: 'dl', description: 'Convolutional Networks and Vision Transformers.' },
  { id: 'seq_dl', label: 'Sequence (RNN/Transformer)', category: NodeCategory.DEEP_LEARNING, importance: 4, level: 2, parent: 'dl', description: 'LSTMs and the Transformer revolution.' },
  { id: 'moe', label: 'MoE Architecture', category: NodeCategory.DEEP_LEARNING, importance: 3, level: 2, parent: 'dl', description: 'Mixture of Experts for scaling efficiency.' },

  // IV. Foundation Models
  { id: 'foundation', label: 'Foundation Models', category: NodeCategory.FOUNDATION, importance: 4, level: 1, parent: 'root', description: 'Large-scale models pre-trained on vast data.' },
  { id: 'llms', label: 'LLMs & SLMs', category: NodeCategory.FOUNDATION, importance: 4, level: 2, parent: 'foundation', description: 'GPT-4, Claude, Llama, and Small Language Models like Phi.' },
  { id: 'foundation_v_a', label: 'Vision & Audio (SAM)', category: NodeCategory.FOUNDATION, importance: 3, level: 2, parent: 'foundation', description: 'Segment Anything (SAM), Whisper, DINOv2.' },

  // V. Multimodal AI
  { id: 'multimodal', label: 'Multimodal AI', category: NodeCategory.MULTIMODAL, importance: 4, level: 1, parent: 'root', description: 'Systems that process and relate information from multiple modalities.' },
  { id: 'vlm_contrast', label: 'VLM (CLIP)', category: NodeCategory.MULTIMODAL, importance: 3, level: 2, parent: 'multimodal', description: 'Contrastive learning like CLIP and ALIGN.' },
  { id: 'vlm_gen', label: 'Generative VLM', category: NodeCategory.MULTIMODAL, importance: 3, level: 2, parent: 'multimodal', description: 'LLaVA, GPT-4V, and Gemini multimodal capabilities.' },

  // VI. Generative AI
  { id: 'generative', label: 'Generative AI', category: NodeCategory.GENERATIVE, importance: 4, level: 1, parent: 'root', description: 'AI capable of creating novel content across media types.' },
  { id: 'gen_media', label: 'Visual & Video (Sora)', category: NodeCategory.GENERATIVE, importance: 4, level: 2, parent: 'generative', description: 'Diffusion models, Sora, DALL-E, Midjourney.' },
  { id: 'gen_code', label: 'Code & Audio', category: NodeCategory.GENERATIVE, importance: 3, level: 2, parent: 'generative', description: 'Codex, Devin, MusicGen, AudioLM.' },

  // VII. Reasoning Models
  { id: 'reasoning', label: 'Reasoning Models', category: NodeCategory.REASONING, importance: 4, level: 1, parent: 'root', description: 'Models focused on logical chain-of-thought and deliberation.' },
  { id: 'cot', label: 'Chain-of-Thought (CoT)', category: NodeCategory.REASONING, importance: 3, level: 2, parent: 'reasoning', description: 'Prompting techniques and inference-time scaling.' },
  { id: 'reasoning_llms', label: 'Reasoning LLMs (o1)', category: NodeCategory.REASONING, importance: 4, level: 2, parent: 'reasoning', description: 'o1, o3, and DeepSeek R1 architectures.' },

  // VIII. Agentic & Compound
  { id: 'agentic', label: 'Agentic & Compound', category: NodeCategory.AGENTIC, importance: 4, level: 1, parent: 'root', description: 'Systems of models interacting with tools and each other.' },
  { id: 'rag', label: 'RAG & Tool-Use', category: NodeCategory.AGENTIC, importance: 3, level: 2, parent: 'agentic', description: 'Retrieval-Augmented Generation and Function Calling.' },
  { id: 'orchestration', label: 'Orchestration (LangChain)', category: NodeCategory.AGENTIC, importance: 3, level: 2, parent: 'agentic', description: 'Multi-agent systems and workflow automation.' },

  // IX. Physical & Embodied AI
  { id: 'embodied', label: 'Physical & Embodied', category: NodeCategory.EMBODIED, importance: 4, level: 1, parent: 'root', description: 'AI with a physical presence or operating in the real world.' },
  { id: 'robotics', label: 'Robotics (RT-2/PaLM-E)', category: NodeCategory.EMBODIED, importance: 4, level: 2, parent: 'embodied', description: 'Robot transformers and embodied visual-language models.' },
  { id: 'digital_twins', label: 'Digital Twins & Sim', category: NodeCategory.EMBODIED, importance: 3, level: 2, parent: 'embodied', description: 'Nvidia Omniverse and simulation-to-real transfer.' }
];

export const CATEGORY_COLORS: Record<NodeCategory, string> = {
  [NodeCategory.ROOT]: '#ffffff', 
  [NodeCategory.SYMBOLIC]: '#94a3b8', 
  [NodeCategory.MACHINE_LEARNING]: '#10b981', 
  [NodeCategory.DEEP_LEARNING]: '#3b82f6', 
  [NodeCategory.FOUNDATION]: '#8b5cf6', 
  [NodeCategory.MULTIMODAL]: '#ec4899', 
  [NodeCategory.GENERATIVE]: '#f59e0b', 
  [NodeCategory.REASONING]: '#ef4444', 
  [NodeCategory.AGENTIC]: '#06b6d4', 
  [NodeCategory.EMBODIED]: '#84cc16', 
};

export const RAW_GRAPH_DATA: GraphData = {
  nodes: INITIAL_NODES,
  links: INITIAL_NODES
    .filter(n => n.parent)
    .map(n => ({ source: n.parent!, target: n.id }))
};
