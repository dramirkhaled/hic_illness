
import React, { useState } from 'react';
import { DISEASES } from '../constants';

const ComparisonLab: React.FC = () => {
  const [d1Id, setD1Id] = useState(DISEASES[0].id);
  const [d2Id, setD2Id] = useState(DISEASES[1].id);

  const d1 = DISEASES.find(d => d.id === d1Id)!;
  const d2 = DISEASES.find(d => d.id === d2Id)!;

  const ComparisonRow = ({ label, val1, val2, highlight = false }: { label: string, val1: any, val2: any, highlight?: boolean }) => (
    <div className={`grid grid-cols-3 border-b border-slate-800/50 py-6 hover:bg-slate-800/20 transition-colors px-6 ${highlight ? 'bg-pink-500/10' : ''}`}>
      <div className="text-xs font-black uppercase text-slate-500 tracking-widest flex items-center pr-4">{label}</div>
      <div className="text-slate-100 text-base font-medium border-l border-slate-800 pl-6 py-2">{val1}</div>
      <div className="text-slate-100 text-base font-medium border-l border-slate-800 pl-6 py-2">{val2}</div>
    </div>
  );

  return (
    <section className="space-y-12 pb-20">
      <div className="mb-10">
        <h2 className="text-5xl font-black mb-3 tracking-tighter italic text-white">Differential Lab</h2>
        <p className="text-slate-400 text-lg font-medium">Detailed side-by-side comparison for clinical decision making.</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-center bg-slate-900/50 p-10 rounded-[2.5rem] border border-slate-800 shadow-3xl">
         <div className="space-y-3">
            <label className="text-xs uppercase font-black text-pink-500 ml-4 tracking-widest">Suspect Alpha</label>
            <select 
              value={d1Id} 
              onChange={(e) => setD1Id(e.target.value)}
              className="w-full glass bg-slate-950 p-6 rounded-2xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-pink-500 text-white font-bold text-lg"
            >
              {DISEASES.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
            </select>
         </div>
         <div className="space-y-3">
            <label className="text-xs uppercase font-black text-blue-500 ml-4 tracking-widest">Suspect Beta</label>
            <select 
              value={d2Id} 
              onChange={(e) => setD2Id(e.target.value)}
              className="w-full glass bg-slate-950 p-6 rounded-2xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white font-bold text-lg"
            >
              {DISEASES.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
            </select>
         </div>
      </div>

      <div className="glass rounded-[3rem] border border-slate-800 overflow-hidden shadow-3xl">
        <div className="grid grid-cols-3 bg-slate-800/90 p-8 sticky top-0 z-10 backdrop-blur-xl border-b border-slate-700">
          <div className="text-sm uppercase font-black text-pink-400 tracking-widest flex items-center">Diagnostic Matrix</div>
          <div className="text-2xl font-black text-white border-l border-slate-700 pl-6">{d1.name}</div>
          <div className="text-2xl font-black text-white border-l border-slate-700 pl-6">{d2.name}</div>
        </div>
        
        <div className="bg-slate-900/30">
          <ComparisonRow label="Management (First-Line)" 
            val1={<span className="text-green-400 font-black text-lg">💊 {d1.management}</span>} 
            val2={<span className="text-green-400 font-black text-lg">💊 {d2.management}</span>} 
            highlight
          />
          <ComparisonRow label="Primary Investigation" val1={<span className="text-blue-300 font-bold">{d1.investigations}</span>} val2={<span className="text-blue-300 font-bold">{d2.investigations}</span>} />
          
          <ComparisonRow label="Pathognomonic Clues" 
            val1={<ul className="space-y-2">{d1.keyFeatures.map((f, i) => <li key={i} className="text-slate-200 flex gap-3 text-sm"><span>•</span>{f}</li>)}</ul>} 
            val2={<ul className="space-y-2">{d2.keyFeatures.map((f, i) => <li key={i} className="text-slate-200 flex gap-3 text-sm"><span>•</span>{f}</li>)}</ul>} 
          />

          <ComparisonRow label="Common Complications" 
            val1={<div className="flex flex-wrap gap-2">{d1.complications.map((c, i) => <span key={i} className="bg-red-500/10 text-red-400 text-xs px-3 py-1 rounded-lg border border-red-500/20">{c}</span>)}</div>} 
            val2={<div className="flex flex-wrap gap-2">{d2.complications.map((c, i) => <span key={i} className="bg-red-500/10 text-red-400 text-xs px-3 py-1 rounded-lg border border-red-500/20">{c}</span>)}</div>} 
          />

          <ComparisonRow label="Scientific Agent" val1={<span className="italic text-slate-400 text-sm mono">{d1.scientificName}</span>} val2={<span className="italic text-slate-400 text-sm mono">{d2.scientificName}</span>} />
          <ComparisonRow label="Mortality Risk" 
            val1={<div className="w-full bg-slate-800 h-2 rounded-full mt-2"><div className="bg-red-500 h-full rounded-full" style={{width: `${d1.severityMetrics.mortalityRate}%`}}></div></div>} 
            val2={<div className="w-full bg-slate-800 h-2 rounded-full mt-2"><div className="bg-red-500 h-full rounded-full" style={{width: `${d2.severityMetrics.mortalityRate}%`}}></div></div>} 
          />
        </div>
      </div>
    </section>
  );
};

export default ComparisonLab;
