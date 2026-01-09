
import React, { useState, useEffect } from 'react';
import { AINode, NodeCategory } from '../types';
import { getAIInsights, NodeInsights } from '../services/geminiService';
import { CATEGORY_COLORS } from '../constants';

interface InfoPanelProps {
  node: AINode | null;
  onClose: () => void;
}

const InfoPanel: React.FC<InfoPanelProps> = ({ node, onClose }) => {
  const [insights, setInsights] = useState<NodeInsights | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (node) {
      fetchInsights(node.label);
    } else {
      setInsights(null);
    }
  }, [node]);

  const fetchInsights = async (topic: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getAIInsights(topic);
      setInsights(data);
    } catch (err) {
      setError("Failed to fetch detailed insights from knowledge base.");
    } finally {
      setLoading(false);
    }
  };

  if (!node) return null;

  return (
    <div className="fixed right-0 top-0 h-full w-full md:w-[450px] bg-slate-900/90 backdrop-blur-xl border-l border-slate-700 shadow-2xl z-50 overflow-y-auto p-8 transition-transform transform translate-x-0">
      <div className="flex justify-between items-start mb-6">
        <div>
          <span 
            className="px-2 py-1 rounded text-xs font-bold uppercase tracking-wider mb-2 inline-block"
            style={{ backgroundColor: CATEGORY_COLORS[node.category], color: '#000' }}
          >
            {node.category}
          </span>
          <h2 className="text-4xl font-bold text-white leading-tight">{node.label}</h2>
        </div>
        <button 
          onClick={onClose}
          className="p-2 hover:bg-slate-700 rounded-full transition-colors text-slate-400"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="space-y-8">
        <section>
          <h3 className="text-slate-400 text-sm font-semibold uppercase mb-2 tracking-widest">Base Definition</h3>
          <p className="text-slate-200 text-lg leading-relaxed">{node.description}</p>
        </section>

        {loading && (
          <div className="flex flex-col items-center justify-center py-12 space-y-4">
            <div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-emerald-400 animate-pulse font-mono">Accessing Knowledge Base...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-500/10 border border-red-500/50 p-4 rounded-lg text-red-400 text-sm">
            {error}
          </div>
        )}

        {insights && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <section>
              <h3 className="text-emerald-400 text-sm font-semibold uppercase mb-3 tracking-widest">The Deep Dive</h3>
              <p className="text-slate-300 leading-relaxed">{insights.summary}</p>
            </section>

            <section>
              <h3 className="text-emerald-400 text-sm font-semibold uppercase mb-3 tracking-widest">Key Technical Concepts</h3>
              <div className="flex flex-wrap gap-2">
                {insights.keyConcepts.map((concept, i) => (
                  <span key={i} className="bg-slate-800 border border-slate-700 px-3 py-1 rounded-full text-sm text-slate-300">
                    {concept}
                  </span>
                ))}
              </div>
            </section>

            <div className="grid grid-cols-1 gap-6">
              <section className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <h3 className="text-slate-400 text-xs font-bold uppercase mb-2 tracking-widest flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  Genesis
                </h3>
                <p className="text-sm text-slate-300">{insights.historicalContext}</p>
              </section>

              <section className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <h3 className="text-slate-400 text-xs font-bold uppercase mb-2 tracking-widest flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  Future Horizon
                </h3>
                <p className="text-sm text-slate-300">{insights.futureOutlook}</p>
              </section>
            </div>

            <section>
              <h3 className="text-emerald-400 text-sm font-semibold uppercase mb-4 tracking-widest">Recommended Mastery Path</h3>
              <div className="space-y-3">
                {insights.learningPath.map((step, i) => (
                  <div key={i} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                      {i + 1}
                    </div>
                    <span className="text-slate-300 text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoPanel;
