
import React, { useState } from 'react';
import GraphView from './components/GraphView';
import InfoPanel from './components/InfoPanel';
import { RAW_GRAPH_DATA } from './constants';
import { AINode } from './types';

const App: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<AINode | null>(null);

  return (
    <div className="relative w-screen h-screen bg-[#020617] overflow-hidden font-sans">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1e293b_0%,transparent_70%)] opacity-20 pointer-events-none" />

      {/* Header */}
      <header className="absolute top-0 left-0 p-10 z-10 pointer-events-none">
        <h1 className="text-5xl font-black text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white via-slate-300 to-slate-500">
          AI Universe Explorer
          <span className="block text-xl font-medium tracking-widest text-emerald-400 mt-2">2026 AI ECOSYSTEM MAP</span>
        </h1>
      </header>

      {/* Modern Compact Legend */}
      <div className="absolute bottom-10 left-10 z-10 p-6 bg-slate-900/40 backdrop-blur-xl rounded-3xl border border-white/5 pointer-events-auto shadow-2xl">
        <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4">Domains of Intelligence</h3>
        <div className="grid grid-cols-2 gap-x-6 gap-y-3">
          {Object.entries({
            'Symbolic': '#94a3b8',
            'ML': '#10b981',
            'Deep Learning': '#3b82f6',
            'Foundation': '#8b5cf6',
            'Multimodal': '#ec4899',
            'Generative': '#f59e0b',
            'Reasoning': '#ef4444',
            'Agentic': '#06b6d4',
            'Embodied': '#84cc16'
          }).map(([name, color]) => (
            <div key={name} className="flex items-center space-x-3 group cursor-default">
              <div 
                className="w-3 h-3 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.2)] transition-transform group-hover:scale-125" 
                style={{ backgroundColor: color }}
              ></div>
              <span className="text-[11px] text-slate-400 font-bold uppercase tracking-tight">{name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Visualization */}
      <main className="w-full h-full">
        <GraphView 
          data={RAW_GRAPH_DATA} 
          onNodeClick={setSelectedNode}
          selectedNodeId={selectedNode?.id || null}
        />
      </main>

      {/* Details Sidebar */}
      <InfoPanel 
        node={selectedNode} 
        onClose={() => setSelectedNode(null)} 
      />

      {/* Footer / Interaction Help */}
      <footer className="absolute bottom-10 right-10 z-10 pointer-events-none">
        <div className="flex flex-col items-end space-y-2">
          <div className="flex items-center space-x-4">
             <div className="text-slate-500 text-[10px] uppercase font-black tracking-widest flex items-center space-x-4 bg-slate-900/30 px-4 py-2 rounded-full border border-white/5 backdrop-blur-sm">
              <span className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-500 rounded-full mr-2"></span>Drag to pan</span>
              <span className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-500 rounded-full mr-2"></span>Scroll to zoom</span>
              <span className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-500 rounded-full mr-2"></span>Click to expand</span>
            </div>
          </div>          
        </div>
      </footer>
    </div>
  );
};

export default App;
