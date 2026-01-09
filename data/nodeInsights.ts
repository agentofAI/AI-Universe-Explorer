
import { NodeInsights } from '../services/geminiService';

export const NODE_INSIGHTS: Record<string, NodeInsights> = {
  "Artificial Intelligence": {
    summary: "The broad field of computer science dedicated to creating systems capable of performing tasks that typically require human intelligence, such as visual perception, speech recognition, decision-making, and language translation.",
    keyConcepts: ["Heuristic Search", "Pattern Recognition", "Algorithmic Logic", "Cognitive Computing"],
    historicalContext: "Formally founded in 1956 at the Dartmouth Workshop, the field has transitioned from symbolic 'Good Old Fashioned AI' (GOFAI) to modern statistical machine learning.",
    futureOutlook: "Moving toward Artificial General Intelligence (AGI), with increasing focus on alignment, energy efficiency, and cross-domain reasoning.",
    learningPath: ["Introduction to Logic", "Discrete Mathematics", "Data Structures", "Philosophy of Mind"]
  },
  "Symbolic AI": {
    summary: "Also known as 'Classical AI', it represents knowledge using symbols and logic. It operates on the principle that intelligence can be achieved through the manipulation of these symbols based on formal rules.",
    keyConcepts: ["Formal Logic", "Heuristic Search", "Predicate Calculus", "Problem Space"],
    historicalContext: "The dominant paradigm of AI from the 1950s to the 1980s, focusing on human-readable rules and structured data.",
    futureOutlook: "Experiencing a resurgence in 'Neuro-symbolic' systems which combine logic with neural networks for better interpretability.",
    learningPath: ["Propositional Logic", "Search Algorithms", "Constraint Satisfaction", "Rule-based Programming"]
  },
  "Logic & Planning": {
    summary: "The subfield of AI focused on the realization of complex goals through a sequence of actions, using formal logic to ensure the validity of plans.",
    keyConcepts: ["A* Algorithm", "STRIPS Planning", "Constraint Satisfaction", "State-Space Search"],
    historicalContext: "Originated with early robotics and automated theorem proving, essential for autonomous navigation and resource management.",
    futureOutlook: "Integrating with deep reinforcement learning for more robust real-world decision making in dynamic environments.",
    learningPath: ["Algorithm Analysis", "Linear Programming", "Automated Reasoning", "Game Theory"]
  },
  "Knowledge Systems": {
    summary: "Systems designed to capture and apply specialized expertise to solve complex problems, often using large-scale knowledge graphs or expert rule bases.",
    keyConcepts: ["Expert Systems", "Knowledge Graphs", "Ontology Engineering", "Inference Engines"],
    historicalContext: "Rose to prominence in the 1970s (e.g., MYCIN) as the first practical applications of AI in medicine and engineering.",
    futureOutlook: "Transformation into dynamic, LLM-augmented knowledge bases that can self-update from unstructured data.",
    learningPath: ["Database Management Systems", "Semantic Web Technologies", "Data Modeling", "Domain Expert Interviews"]
  },
  "Machine Learning": {
    summary: "A subset of AI that focuses on building systems that learn from data and improve their performance over time without being explicitly programmed for specific tasks.",
    keyConcepts: ["Statistical Inference", "Optimization", "Loss Functions", "Feature Engineering"],
    historicalContext: "Shifted the AI paradigm from rule-based systems to data-driven systems in the 1990s as computational power and data availability increased.",
    futureOutlook: "Focus on 'Small Data' learning, privacy-preserving techniques (Federated Learning), and automated ML (AutoML).",
    learningPath: ["Linear Algebra", "Calculus", "Probability & Statistics", "Python for Data Science"]
  },
  "Supervised/Unsupervised": {
    summary: "The two primary paradigms of learning: using labeled data to predict outcomes (Supervised) and finding hidden patterns in unlabeled data (Unsupervised).",
    keyConcepts: ["Support Vector Machines", "Random Forests", "K-Means Clustering", "Principal Component Analysis"],
    historicalContext: "These formed the bedrock of practical industrial AI for decades, powering everything from spam filters to recommendation engines.",
    futureOutlook: "Greater emphasis on Self-Supervised Learning, where models create their own labels from vast datasets.",
    learningPath: ["Regression Analysis", "Classification Techniques", "Clustering Algorithms", "Dimensionality Reduction"]
  },
  "Reinforcement Learning": {
    summary: "An area of ML concerned with how intelligent agents ought to take actions in an environment to maximize the notion of cumulative reward.",
    keyConcepts: ["Markov Decision Processes", "Q-Learning", "Policy Gradients", "Exploration vs Exploitation"],
    historicalContext: "Inspired by behavioral psychology; famous for milestones like AlphaGo defeating world champions in Go.",
    futureOutlook: "Expanding from games to real-world industrial control, energy grid optimization, and complex robotics.",
    learningPath: ["Dynamic Programming", "Stochastic Processes", "Monte Carlo Methods", "Control Theory"]
  },
  "RLHF & Alignment": {
    summary: "A technique that uses human feedback to fine-tune AI models, ensuring their outputs align with human values, safety requirements, and helpfulness.",
    keyConcepts: ["Reward Modeling", "Proximal Policy Optimization (PPO)", "Preference Ranking", "Constitutional AI"],
    historicalContext: "Became a critical component in the development of ChatGPT to prevent toxic outputs and improve conversational utility.",
    futureOutlook: "Developing more scalable alignment methods like RLAIF (RL from AI Feedback) to reduce human bottleneck.",
    learningPath: ["Ethics in AI", "Optimization for LLMs", "Human-Computer Interaction", "Policy Optimization"]
  },
  "Deep Learning": {
    summary: "A specialized subset of ML based on artificial neural networks with multiple layers (hence 'deep') that can automatically learn representations from data.",
    keyConcepts: ["Backpropagation", "Neural Architectures", "Gradient Descent", "Activation Functions"],
    historicalContext: "The 'Deep Learning Revolution' began around 2012 with AlexNet's victory in the ImageNet competition, sparking the current AI boom.",
    futureOutlook: "Development of more hardware-efficient architectures and moving beyond traditional backpropagation.",
    learningPath: ["Neural Network Foundations", "Matrix Calculus", "Pytorch or TensorFlow", "Optimization Algorithms"]
  },
  "Vision (CNN/ViT)": {
    summary: "The field of deep learning focused on enabling computers to 'see' and interpret visual information using specialized architectures.",
    keyConcepts: ["Convolutional Layers", "Pooling", "Attention Mechanisms", "Object Detection"],
    historicalContext: "Evolved from LeNet in the 90s to modern Vision Transformers (ViT) which apply global attention to image patches.",
    futureOutlook: "Seamless integration with other senses (Multimodality) and real-time high-fidelity scene understanding.",
    learningPath: ["Digital Image Processing", "Convolutional Neural Networks", "Transformer Architectures", "OpenCV"]
  },
  "Sequence (RNN/Transformer)": {
    summary: "Models designed to process sequential data where the order of information matters, such as natural language, time-series, or genetic sequences.",
    keyConcepts: ["Attention Mechanism", "Self-Attention", "Positional Encoding", "Vanishing Gradients"],
    historicalContext: "Transformers (2017) largely replaced RNNs and LSTMs due to their ability to parallelize training and capture long-range dependencies.",
    futureOutlook: "Infinite context windows and more efficient linear-time sequence models (e.g., Mamba/SSMs).",
    learningPath: ["Natural Language Processing", "Attention Mechanisms", "Embedding Techniques", "Recursive Functions"]
  },
  "MoE Architecture": {
    summary: "Mixture of Experts (MoE) is an architecture that uses sparse gating to activate only a subset of its parameters for any given input, enabling massive scale.",
    keyConcepts: ["Sparse Gating", "Expert Networks", "Load Balancing", "Parameter Efficiency"],
    historicalContext: "Used in models like Mixtral and GPT-4 to scale to trillions of parameters while keeping inference costs manageable.",
    futureOutlook: "Standardization across all large-scale models to balance performance and compute power.",
    learningPath: ["Distributed Computing", "Conditional Computation", "Large Scale System Design", "Sparsity in ML"]
  },
  "Foundation Models": {
    summary: "Broad models trained on vast amounts of data that can be adapted (fine-tuned) to a wide range of downstream tasks.",
    keyConcepts: ["Self-Supervised Learning", "Scaling Laws", "In-context Learning", "Generalization"],
    historicalContext: "The term was popularized by the Stanford Institute for Human-Centered AI (HAI) to describe models like BERT and GPT-3.",
    futureOutlook: "Models becoming 'world models' that understand physical laws and complex human social structures.",
    learningPath: ["Large Scale Pre-training", "Transfer Learning", "Dataset Curation", "Fine-tuning Strategies"]
  },
  "LLMs & SLMs": {
    summary: "Large Language Models (LLMs) and their smaller, more efficient counterparts (SLMs) that specialize in language understanding and generation.",
    keyConcepts: ["Tokenization", "Autoregressive Prediction", "Quantization", "Instruction Tuning"],
    historicalContext: "GPT-4 and Claude 3 represent the current state-of-the-art, while models like Phi-3 prove that small models can punch above their weight.",
    futureOutlook: "On-device intelligence where SLMs perform complex tasks locally without cloud dependency.",
    learningPath: ["Transformer Architecture", "Language Modeling", "Model Quantization", "Prompt Engineering"]
  },
  "Vision & Audio (SAM)": {
    summary: "Foundation models specifically for computer vision (Segment Anything) and audio processing (Whisper), providing generic capabilities for these modalities.",
    keyConcepts: ["Zero-shot Segmentation", "Automatic Speech Recognition", "Spectral Analysis", "DINOv2"],
    historicalContext: "Meta's SAM and OpenAI's Whisper transformed their respective fields by providing high-quality, general-purpose open-source tools.",
    futureOutlook: "Full integration into real-time translation and AR glasses that can segment and identify objects in the user's view.",
    learningPath: ["Computer Vision Basics", "Audio Signal Processing", "Zero-shot Learning", "Latent Space Mapping"]
  },
  "Multimodal AI": {
    summary: "AI systems capable of processing and generating multiple types of data (text, images, audio, video) simultaneously.",
    keyConcepts: ["Cross-modal Alignment", "Joint Embeddings", "Fusion Architectures", "Tokenization"],
    historicalContext: "The release of GPT-4V and Gemini marked the 'Multimodal Year,' where models began to truly 'see' and 'hear' as they 'think'.",
    futureOutlook: "Any-to-any generation where models can switch fluidly between speech, text, and visual outputs.",
    learningPath: ["Contrastive Learning", "Multimodal Fusion", "Latent Diffusion", "Neural Signal Processing"]
  },
  "VLM (CLIP)": {
    summary: "Vision-Language Models that use contrastive learning to align images and text in a shared embedding space.",
    keyConcepts: ["Contrastive Loss", "Zero-shot Classification", "Dual-encoder Architecture", "Semantic Search"],
    historicalContext: "OpenAI's CLIP (2021) was the catalyst for the generative image revolution, enabling text-to-image prompts.",
    futureOutlook: "Better grounding of language in physical space and more accurate 'fine-grained' visual reasoning.",
    learningPath: ["Contrastive Pre-training", "Image-Text Datasets", "Embedding Similarity", "Vector Databases"]
  },
  "Generative VLM": {
    summary: "Models that don't just align text and images, but can generate complex linguistic descriptions of visual scenes or vice versa.",
    keyConcepts: ["Visual Question Answering", "Image Captioning", "Spatial Reasoning", "Interleaved Training"],
    historicalContext: "Models like LLaVA and GPT-4V allow users to upload images and have complex conversations about their contents.",
    futureOutlook: "Models that can perform complex visual tasks like UI automation and medical image diagnosis with human-level accuracy.",
    learningPath: ["VQA Systems", "Instruction Tuning for Vision", "Large Scale Visual Transformers", "Image-to-Text Mapping"]
  },
  "Generative AI": {
    summary: "A type of AI system capable of generating text, images, or other media in response to prompts, often using probabilistic sampling.",
    keyConcepts: ["Sampling Methods", "Latent Space", "Prompt Engineering", "Hallucination Control"],
    historicalContext: "Exploded into the mainstream in late 2022 with ChatGPT, DALL-E 2, and Midjourney.",
    futureOutlook: "Generative AI will become a standard interface for all computing, shifting from 'creating content' to 'executing tasks'.",
    learningPath: ["Probability Theory", "Generative Modeling", "Natural Language Generation", "Creative Coding"]
  },
  "Visual & Video (Sora)": {
    summary: "Cutting-edge models that generate high-fidelity static images and temporally consistent video from text descriptions.",
    keyConcepts: ["Diffusion Models", "Denoising", "Temporal Consistency", "Latent Diffusion"],
    historicalContext: "Sora (2024) demonstrated the ability to generate minute-long videos with complex physics and consistent characters.",
    futureOutlook: "Real-time generation of entire virtual worlds and personalized cinema.",
    learningPath: ["Diffusion Probabilistic Models", "Video Processing", "3D Reconstruction", "Physics-based Animation"]
  },
  "Code & Audio": {
    summary: "Generative models specialized in structured data like programming languages (Codex) or complex waveforms (MusicGen/AudioLM).",
    keyConcepts: ["Autoregressive Coding", "Spectrogram Generation", "Symbolic Music", "Abstract Syntax Trees"],
    historicalContext: "GitHub Copilot proved that AI could significantly boost developer productivity, while MusicGen brought high-quality audio creation to the public.",
    futureOutlook: "Fully autonomous 'AI software engineers' and high-fidelity personalized music generation in real-time.",
    learningPath: ["Compiler Construction", "Digital Audio Theory", "Sequence-to-Sequence Models", "Functional Programming"]
  },
  "Reasoning Models": {
    summary: "AI systems designed specifically to handle complex, multi-step logical problems that require deliberation rather than instant prediction.",
    keyConcepts: ["Chain-of-Thought", "Inference Scaling", "Logical Consistency", "System 2 Thinking"],
    historicalContext: "The shift from 'fast' intuition to 'slow' reasoning, exemplified by OpenAI's o1 series and DeepSeek R1.",
    futureOutlook: "Models that can verify their own logic and solve previously unsolvable mathematical and scientific problems.",
    learningPath: ["Formal Logic", "Cognitive Psychology", "Search and Heuristics", "Model Verification"]
  },
  "Chain-of-Thought (CoT)": {
    summary: "A prompting and training technique that encourages models to generate intermediate reasoning steps before arriving at a final answer.",
    keyConcepts: ["Step-by-step Prompting", "Zero-shot CoT", "Few-shot Reasoning", "Self-Consistency"],
    historicalContext: "Discovered that simply asking a model to 'think step by step' dramatically improved performance on math and logic tasks.",
    futureOutlook: "Automated reasoning traces that are completely hidden from the user but verifiable by separate 'monitor' models.",
    learningPath: ["Prompt Engineering", "Evaluation Frameworks", "Cognitive Architectures", "Instruction Tuning"]
  },
  "Reasoning LLMs (o1)": {
    summary: "A new class of models trained with reinforcement learning to spend more time 'thinking' during inference, allowing for deeper problem solving.",
    keyConcepts: ["Test-Time Compute", "Reinforcement Learning for Reasoning", "Verification", "Deliberation"],
    historicalContext: "OpenAI's o1 (Strawberry) marked a major shift by proving that compute spent at 'test time' is as valuable as 'training time'.",
    futureOutlook: "AI models that can spend hours or days thinking through complex research questions to discover new scientific laws.",
    learningPath: ["Advanced RL", "Inference Optimization", "Scientific Computing", "Search Algorithms"]
  },
  "Agentic & Compound": {
    summary: "A paradigm shift from single models to systems of models and tools that can plan, execute, and iterate on complex workflows autonomously.",
    keyConcepts: ["Tool Use", "Memory Systems", "Planning Loops", "Multi-agent Orchestration"],
    historicalContext: "Moving beyond simple chatbots to 'Agents' that can use a browser, write code, and interact with APIs to get work done.",
    futureOutlook: "A world of interconnected agents performing the majority of routine administrative and technical work.",
    learningPath: ["Software Architecture", "API Design", "Autonomous Agents", "Cloud Computing"]
  },
  "RAG & Tool-Use": {
    summary: "Retrieval-Augmented Generation (RAG) combines LLMs with external data sources to provide up-to-date and private information.",
    keyConcepts: ["Vector Search", "Document Indexing", "Function Calling", "Semantic Chunking"],
    historicalContext: "Solves the 'knowledge cutoff' and 'hallucination' problems of standard LLMs by grounding them in real documents.",
    futureOutlook: "Dynamic RAG that can crawl the web in real-time and use any tool discovered in its environment.",
    learningPath: ["Information Retrieval", "Vector Databases", "Embeddings", "System Integration"]
  },
  "Orchestration (LangChain)": {
    summary: "The frameworks and patterns used to connect multiple models, prompts, and tools into a cohesive application.",
    keyConcepts: ["Chains", "State Machines", "Agent Loops", "Observability"],
    historicalContext: "LangChain and AutoGen emerged as the primary libraries for building complex AI applications and multi-agent systems.",
    futureOutlook: "Standardized protocols for AI-to-AI communication and more robust orchestration of thousands of specialized agents.",
    learningPath: ["Framework Design", "Asynchronous Programming", "Event-Driven Architecture", "DevOps for AI"]
  },
  "Physical & Embodied": {
    summary: "AI that is integrated into physical bodies (robots) or operates within simulated physical environments, requiring an understanding of physics and 3D space.",
    keyConcepts: ["Sensorimotor Control", "Spatial Intelligence", "Real-time Inference", "Proprioception"],
    historicalContext: "The 'ImageNet moment' for robotics is currently happening, with foundation models being applied to physical control tasks.",
    futureOutlook: "General-purpose humanoid robots that can perform household chores and work in unstructured factory environments.",
    learningPath: ["Robotics Fundamentals", "Control Theory", "Computer Vision", "Mechanical Engineering"]
  },
  "Robotics (RT-2/PaLM-E)": {
    summary: "The application of Vision-Language Models to robotics, allowing robots to understand complex natural language instructions and visual cues.",
    keyConcepts: ["Action Tokens", "End-to-end Learning", "Visual-Language-Action (VLA)", "Zero-shot Generalization"],
    historicalContext: "Google's RT-2 demonstrated that the same Transformer architecture used for language can be used to output robot arm commands.",
    futureOutlook: "Robots that learn by watching videos of humans and can adapt to new tools and tasks instantly.",
    learningPath: ["VLA Models", "Kinematics", "Deep Reinforcement Learning", "Embedded Systems"]
  },
  "Digital Twins & Sim": {
    summary: "Using high-fidelity physics simulations to train AI agents before deploying them to the real world, reducing risk and speeding up data collection.",
    keyConcepts: ["Sim-to-Real Transfer", "Physics Engines", "Synthetic Data", "Nvidia Omniverse"],
    historicalContext: "Nvidia's Isaac and Omniverse platforms have become the gold standard for training robots in photo-realistic 3D environments.",
    futureOutlook: "The entire world mapped into a live-updating digital twin where AI agents can practice and optimize city-scale logistics.",
    learningPath: ["3D Modeling", "Physics Simulation", "Graphics Programming", "Data Augmentation"]
  }
};
