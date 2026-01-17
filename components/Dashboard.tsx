
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DISEASES } from '../constants';
import { Disease, Category } from '../types';

const CategoryBadge: React.FC<{ category: Category }> = ({ category }) => {
  const styles = {
    Viral: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    Bacterial: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    Zoonotic: 'bg-green-500/10 text-green-400 border-green-500/20',
    Parasitic: 'bg-red-500/10 text-red-400 border-red-500/20'
  };
  return (
    <span className={`px-2.5 py-1 rounded-md text-[8px] font-black border uppercase tracking-[0.15em] ${styles[category]}`}>
      {category}
    </span>
  );
};

const ClinicalModal: React.FC<{ disease: Disease; onClose: () => void }> = ({ disease, onClose }) => {
  const [activeTab, setActiveTab] = useState<'details' | 'medical' | 'case'>('details');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="glass w-full max-w-6xl rounded-[3rem] overflow-hidden border border-slate-700 shadow-[0_0_60px_rgba(0,0,0,0.6)]"
      >
        <div className="h-2 bg-gradient-to-r from-pink-600 via-purple-600 to-emerald-500" />
        
        <div className="p-8 lg:p-12 overflow-y-auto max-h-[90vh]">
          <div className="flex justify-between items-start mb-10">
            <div className="flex gap-8 items-center">
              <div className="w-20 h-20 rounded-3xl bg-slate-900 flex items-center justify-center text-4xl border border-slate-700 shadow-inner">
                {disease.category === 'Viral' ? '🧬' : disease.category === 'Bacterial' ? '🧫' : '🐾'}
              </div>
              <div>
                <h2 className="text-5xl font-black text-white tracking-tight">{disease.name}</h2>
                <p className="text-emerald-400 text-xl font-bold italic tracking-wide">{disease.scientificName}</p>
              </div>
            </div>
            <button onClick={onClose} className="w-12 h-12 rounded-full glass hover:bg-red-500 transition-all flex items-center justify-center text-white text-xl border-slate-700">✕</button>
          </div>

          <div className="flex gap-10 border-b border-slate-800 mb-10 overflow-x-auto pb-4 no-scrollbar">
            {[
              { id: 'details', label: 'Clinical Hallmark', icon: '🧠' },
              { id: 'medical', label: 'Workup & RX', icon: '🏥' },
              { id: 'case', label: 'Case Scenario', icon: '📝' }
            ].map((t) => (
              <button 
                key={t.id}
                onClick={() => setActiveTab(t.id as any)}
                className={`pb-4 px-2 font-black uppercase text-[11px] tracking-[0.25em] transition-all relative flex items-center gap-3 whitespace-nowrap ${activeTab === t.id ? 'text-emerald-400' : 'text-slate-500 hover:text-slate-300'}`}
              >
                <span className="text-xl">{t.icon}</span> {t.label}
                {activeTab === t.id && <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-1 bg-emerald-500" />}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {activeTab === 'details' && (
                <div className="space-y-12">
                  <div className="grid grid-cols-1 gap-5">
                    <h4 className="text-[11px] uppercase text-slate-500 font-black tracking-[0.3em] flex items-center gap-3">
                      <span className="w-8 h-[2px] bg-pink-500"></span> Pathognomonic Signs
                    </h4>
                    {disease.keyFeatures.map((f, i) => (
                      <div key={i} className="p-6 bg-slate-900/60 rounded-2xl border border-slate-800 text-xl text-slate-100 flex gap-5 items-center font-bold">
                        <span className="w-3 h-3 rounded-full bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.5)]"></span> {f}
                      </div>
                    ))}
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-[11px] uppercase text-red-500 font-black tracking-[0.3em] flex items-center gap-3">
                      <span className="w-8 h-[2px] bg-red-600"></span> Major Complications (Exam Focus)
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {disease.complications.map((c, i) => (
                        <div key={i} className="p-6 bg-red-500/10 border border-red-500/20 rounded-3xl flex items-center gap-4">
                           <span className="text-2xl">⚠️</span>
                           <span className="text-lg font-black text-red-200 tracking-tight">{c}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 'medical' && (
                <div className="space-y-8">
                   <div className="p-10 glass rounded-[3rem] border-l-[12px] border-blue-500 bg-blue-500/5">
                    <h5 className="text-blue-400 font-black text-xs uppercase tracking-[0.3em] mb-4">Investigation Gold Standard</h5>
                    <p className="text-slate-100 text-3xl leading-relaxed font-black">{disease.investigations}</p>
                  </div>
                  <div className="p-10 glass rounded-[3rem] border-l-[12px] border-emerald-500 bg-emerald-500/5">
                    <h5 className="text-emerald-400 font-black text-xs uppercase tracking-[0.3em] mb-4">Specific Management Protocol</h5>
                    <p className="text-emerald-50 text-3xl leading-relaxed font-black italic">"{disease.management}"</p>
                  </div>
                </div>
              )}
              {activeTab === 'case' && (
                <div className="space-y-8 italic">
                  <div className="bg-slate-900/80 p-12 rounded-[3rem] text-slate-50 border border-slate-800 shadow-2xl relative">
                    <span className="absolute -top-4 left-12 bg-emerald-600 text-white px-6 py-1.5 rounded-full not-italic text-[10px] font-black uppercase tracking-widest">Clinical Presentation</span>
                    <p className="text-2xl font-medium leading-loose">"{disease.clinicalCase.presentation}"</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 not-italic">
                    <div className="p-10 bg-slate-800/30 rounded-[2.5rem] border border-slate-700">
                      <p className="text-[11px] uppercase text-pink-500 mb-4 font-black tracking-widest">The "Buzzword" finding</p>
                      <p className="text-2xl font-black text-white leading-tight">{disease.clinicalCase.finding}</p>
                    </div>
                    <div className="p-10 bg-slate-800/30 rounded-[2.5rem] border border-slate-700">
                      <p className="text-[11px] uppercase text-blue-400 mb-4 font-black tracking-widest">Key Exposure History</p>
                      <p className="text-2xl font-black text-white leading-tight">{disease.clinicalCase.history}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <aside className="space-y-8 h-fit">
              <div className="bg-gradient-to-br from-slate-900 to-black p-8 rounded-[3rem] border-2 border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                <h4 className="text-[12px] uppercase text-emerald-400 font-black text-center tracking-[0.4em] mb-10 border-b border-slate-800 pb-5 flex items-center justify-center gap-3">
                  <span className="text-2xl">🎓</span> EXAM MASTER
                </h4>
                
                <div className="space-y-10">
                  <div className="bg-emerald-500/5 p-6 rounded-3xl border border-emerald-500/20">
                    <h5 className="text-emerald-400 font-black text-[11px] uppercase mb-4 flex items-center gap-3">
                      🎯 Key Exam Buzzwords
                    </h5>
                    <div className="flex flex-wrap gap-2">
                       {disease.keyFeatures[0].split(' ').slice(0,3).map((w, i) => (
                         <span key={i} className="bg-emerald-500/10 text-emerald-300 text-[10px] font-black px-3 py-1 rounded-md border border-emerald-500/10 uppercase">{w}</span>
                       ))}
                       <span className="bg-pink-500/10 text-pink-300 text-[10px] font-black px-3 py-1 rounded-md border border-pink-500/10 uppercase">{disease.incubation.split(' ')[0]} INCUBATION</span>
                    </div>
                  </div>

                  <div className="bg-blue-500/5 p-6 rounded-3xl border border-blue-500/20">
                    <h5 className="text-blue-400 font-black text-[11px] uppercase mb-4 flex items-center gap-3">
                      ⚡ Differential Match
                    </h5>
                    <p className="text-xs text-slate-300 font-bold leading-relaxed">
                      If the patient has <span className="text-white underline decoration-blue-500">{disease.keyFeatures[0].split('(')[0]}</span> + <span className="text-white underline decoration-blue-500">{disease.transmission[0].split(' ')[0]} history</span>, don't pick anything but <span className="text-emerald-400 font-black">{disease.name}</span>.
                    </p>
                  </div>

                  <div className="pt-6 space-y-6 border-t border-slate-800">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Incubation Time</span>
                      <span className="text-white font-black bg-slate-800 px-4 py-1.5 rounded-xl border border-white/5">{disease.incubation}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Compulsory Vaccine</span>
                      <span className={`px-4 py-1.5 rounded-xl font-black text-[11px] ${disease.vaccine ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/20' : 'bg-red-500/20 text-red-400 border border-red-500/20'}`}>
                        {disease.vaccine ? 'YES' : 'NONE'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

const Dashboard: React.FC = () => {
  const [selectedDisease, setSelectedDisease] = useState<Disease | null>(null);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<Category | 'All'>('All');

  const filteredDiseases = useMemo(() => {
    return DISEASES.filter(d => {
      const matchesSearch = d.name.toLowerCase().includes(search.toLowerCase()) || 
                          d.keyFeatures.some(f => f.toLowerCase().includes(search.toLowerCase())) ||
                          d.management.toLowerCase().includes(search.toLowerCase());
      const matchesFilter = filter === 'All' || d.category === filter;
      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  return (
    <section className="space-y-12 pb-24">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
        <div>
          <h2 className="text-6xl font-black tracking-tighter text-white mb-2">Epi-Dashboard</h2>
          <p className="text-slate-500 font-bold text-2xl tracking-tight">The Core Pathogen Database for Medical Exams.</p>
        </div>
        <div className="flex flex-wrap gap-4 w-full lg:w-auto">
           <input
             type="text"
             placeholder="Search Sign, Rx, or Pathogen..."
             value={search}
             onChange={(e) => setSearch(e.target.value)}
             className="glass bg-slate-950 px-8 py-5 rounded-2xl border border-slate-800 text-lg w-full lg:w-[400px] focus:outline-none focus:neon-border-pink transition-all font-bold"
           />
           <select 
             value={filter}
             onChange={(e) => setFilter(e.target.value as any)}
             className="glass bg-slate-950 px-6 py-5 rounded-2xl border border-slate-800 text-[11px] font-black text-slate-400 tracking-[0.2em] cursor-pointer outline-none uppercase"
           >
             <option value="All">All Categories</option>
             <option value="Viral">Viral</option>
             <option value="Bacterial">Bacterial</option>
             <option value="Zoonotic">Zoonotic</option>
             <option value="Parasitic">Parasitic</option>
           </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredDiseases.map(d => (
          <motion.div 
            layout
            key={d.id} 
            onClick={() => setSelectedDisease(d)}
            className="glass p-8 rounded-[2.5rem] cursor-pointer group hover:neon-border-pink hover:-translate-y-2 transition-all border border-slate-800 relative overflow-hidden flex flex-col min-h-[420px]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-[50px] group-hover:bg-emerald-500/10 transition-colors"></div>
            
            <div className="flex justify-between items-start mb-6">
              <CategoryBadge category={d.category} />
              <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center border border-slate-800 text-xl group-hover:scale-110 transition-transform shadow-inner">
                {d.category === 'Viral' ? '🧬' : d.category === 'Bacterial' ? '🧫' : '🐾'}
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-3xl font-black text-white group-hover:text-emerald-400 transition-colors leading-tight">{d.name}</h3>
              <p className="text-sm text-slate-500 font-bold mt-2 italic line-clamp-1 border-l-2 border-emerald-500 pl-3">{d.scientificName}</p>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                 <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Incubation</p>
                    <p className="text-xs text-slate-200 font-bold">{d.incubation.split('(')[0]}</p>
                 </div>
                 <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Main Rx</p>
                    <p className="text-[10px] text-emerald-400 font-black truncate">{d.management.split(' ')[0]}</p>
                 </div>
              </div>

              <div className="mt-6 p-4 bg-emerald-500/5 rounded-2xl border border-emerald-500/10">
                <p className="text-[9px] font-black text-emerald-500/60 uppercase tracking-widest mb-2">The Golden Hallmarks</p>
                <p className="text-xs text-slate-300 font-bold leading-relaxed line-clamp-2 italic">
                  "{d.keyFeatures[0]}"
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
               <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{d.vaccine ? "🛡️ Vaccine Protocol" : "⚠️ No Routine Vaccine"}</span>
               <div className="flex items-center gap-2 text-emerald-500 font-black text-[10px] uppercase tracking-[0.2em] group-hover:translate-x-1 transition-transform">
                  Master Study <span>→</span>
               </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedDisease && (
          <ClinicalModal 
            disease={selectedDisease} 
            onClose={() => setSelectedDisease(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Dashboard;
