
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DISEASES } from '../constants';
import { Disease } from '../types';

const CaseCard: React.FC<{ disease: Disease }> = ({ disease }) => {
  const [showDiagnosis, setShowDiagnosis] = useState(false);
  const [showManagement, setShowManagement] = useState(false);

  // Reset local state when disease changes
  useEffect(() => {
    setShowDiagnosis(false);
    setShowManagement(false);
  }, [disease]);

  return (
    <div className="glass rounded-[3rem] border border-slate-800 p-8 lg:p-12 space-y-8 relative overflow-hidden group min-h-[600px] flex flex-col justify-between">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[120px] -z-10"></div>
      
      <div className="space-y-8">
        <div className="flex justify-between items-center border-b border-slate-800 pb-6">
          <div className="flex items-center gap-4">
            <span className="text-3xl bg-slate-900 w-14 h-14 flex items-center justify-center rounded-2xl border border-slate-800 shadow-inner">📝</span>
            <h3 className="text-xl font-black uppercase tracking-[0.2em] text-slate-400">Exam Scenario</h3>
          </div>
          <span className="px-6 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-[10px] font-black text-pink-500 uppercase tracking-widest animate-pulse">
            Analyze Carefully
          </span>
        </div>

        <div className="space-y-10">
          <div className="bg-slate-900/80 p-10 rounded-[2.5rem] border border-slate-800 shadow-2xl relative">
            <span className="absolute -top-3 left-10 bg-emerald-600 text-white px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">The Clinical Lead</span>
            <p className="text-2xl font-medium leading-relaxed italic text-slate-100">
              "{disease.clinicalCase.presentation} {disease.clinicalCase.finding}. {disease.clinicalCase.history}."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="p-8 bg-slate-950/50 border border-slate-800 rounded-[2rem] hover:border-slate-600 transition-colors">
                <h4 className="text-[10px] font-black uppercase text-slate-500 mb-5 tracking-[0.3em] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-pink-500"></span> Clinical Markers
                </h4>
                <ul className="space-y-3">
                  {disease.keyFeatures.map((f, i) => (
                    <li key={i} className="text-sm text-slate-300 font-bold flex gap-3 leading-relaxed">
                      <span className="text-pink-500/50">▶</span> {f}
                    </li>
                  ))}
                </ul>
             </div>
             <div className="p-8 bg-slate-950/50 border border-slate-800 rounded-[2rem] hover:border-slate-600 transition-colors">
                <h4 className="text-[10px] font-black uppercase text-slate-500 mb-5 tracking-[0.3em] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span> Pathological Risks
                </h4>
                <ul className="space-y-3">
                  {disease.complications.map((c, i) => (
                    <li key={i} className="text-sm text-slate-300 font-bold flex gap-3 leading-relaxed">
                      <span className="text-red-500/50">⚠️</span> {c}
                    </li>
                  ))}
                </ul>
             </div>
          </div>
        </div>
      </div>

      <div className="pt-12 space-y-6">
        <div className="space-y-6">
          <p className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 mb-2">Internal Thought Process</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Diagnosis Reveal */}
            <div className="relative">
              <AnimatePresence mode="wait">
                {!showDiagnosis ? (
                  <motion.button 
                    key="btn-diag"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    onClick={() => setShowDiagnosis(true)}
                    className="w-full py-8 rounded-[2rem] bg-emerald-600 hover:bg-emerald-500 text-white font-black uppercase tracking-[0.2em] transition-all shadow-xl shadow-emerald-900/30 flex items-center justify-center gap-4 group"
                  >
                    What is the Diagnosis? <span className="group-hover:translate-x-2 transition-transform">🔍</span>
                  </motion.button>
                ) : (
                  <motion.div 
                    key="val-diag"
                    initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                    className="p-8 rounded-[2rem] bg-emerald-500/10 border-2 border-emerald-500/40 text-center relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500"></div>
                    <p className="text-[10px] font-black uppercase text-emerald-500 mb-2 tracking-widest">Diagnostic Verdict</p>
                    <h4 className="text-4xl font-black text-white tracking-tighter">{disease.name}</h4>
                    <p className="text-sm italic text-emerald-400 mt-2 font-bold">{disease.scientificName}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Management Reveal */}
            <div className="relative">
              <AnimatePresence mode="wait">
                {!showManagement ? (
                  <motion.button 
                    key="btn-mgmt"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    onClick={() => setShowManagement(true)}
                    className="w-full py-8 rounded-[2rem] border-2 border-blue-500/50 hover:bg-blue-500/10 text-blue-400 font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-4 group"
                  >
                    Management & Prevention? <span className="group-hover:rotate-12 transition-transform">💊</span>
                  </motion.button>
                ) : (
                  <motion.div 
                    key="val-mgmt"
                    initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                    className="p-8 rounded-[2rem] bg-blue-500/10 border-2 border-blue-500/40 relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
                    <div className="mb-6">
                      <p className="text-[10px] font-black uppercase text-blue-400 mb-2 tracking-widest">Therapeutic Protocol</p>
                      <p className="text-xl font-black text-white italic leading-tight">"{disease.management}"</p>
                    </div>
                    <div className="pt-4 border-t border-blue-500/20">
                      <p className="text-[10px] font-black uppercase text-purple-400 mb-1 tracking-widest">Public Health (Vaccine)</p>
                      <p className="text-sm font-bold text-slate-300">{disease.vaccine || "No routine vaccination protocol available."}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CaseChallenge: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCase = () => {
    setCurrentIndex((prev) => (prev + 1) % DISEASES.length);
  };

  const prevCase = () => {
    setCurrentIndex((prev) => (prev - 1 + DISEASES.length) % DISEASES.length);
  };

  const randomCase = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * DISEASES.length);
    } while (newIndex === currentIndex);
    setCurrentIndex(newIndex);
  };

  return (
    <section className="max-w-6xl mx-auto space-y-12 pb-24">
      <div className="flex flex-col xl:flex-row justify-between items-center gap-10 mb-16">
        <div className="text-center xl:text-left">
          <h2 className="text-7xl font-black tracking-tighter text-white uppercase italic leading-none">
            Case <span className="text-emerald-500 underline decoration-pink-500 underline-offset-8">Challenge</span>
          </h2>
          <p className="text-slate-500 font-bold text-2xl tracking-tight mt-4">Mastering Pathogens via Randomized Clinical Scenarios.</p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-4 bg-slate-900/50 p-4 rounded-[2.5rem] border border-slate-800 shadow-2xl">
           <button 
             onClick={prevCase}
             className="w-14 h-14 flex items-center justify-center rounded-2xl bg-slate-800 hover:bg-slate-700 hover:text-emerald-400 transition-all border border-slate-700 shadow-inner group"
             title="Previous Case"
           >
             <span className="group-hover:-translate-x-1 transition-transform">←</span>
           </button>
           
           <button 
             onClick={randomCase}
             className="px-10 h-14 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-black uppercase text-xs tracking-[0.2em] transition-all shadow-lg shadow-pink-900/20"
           >
             <span>🎲</span> Random Shuffle
           </button>

           <button 
             onClick={nextCase}
             className="w-14 h-14 flex items-center justify-center rounded-2xl bg-slate-800 hover:bg-slate-700 hover:text-emerald-400 transition-all border border-slate-700 shadow-inner group"
             title="Next Case"
           >
             <span className="group-hover:translate-x-1 transition-transform">→</span>
           </button>
           
           <div className="h-10 w-[2px] bg-slate-800 mx-2 hidden sm:block"></div>
           
           <span className="text-xs font-black text-slate-500 w-28 text-center uppercase tracking-tighter">
             Scenario <span className="text-emerald-500 text-lg">{currentIndex + 1}</span> / {DISEASES.length}
           </span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "circOut" }}
        >
          <CaseCard disease={DISEASES[currentIndex]} />
        </motion.div>
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
        <div className="p-10 glass rounded-[3rem] border border-slate-800 hover:border-emerald-500/30 transition-colors group">
          <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl mb-6 flex items-center justify-center text-emerald-500 text-xl font-black border border-emerald-500/20">1</div>
          <h5 className="text-white font-black text-lg uppercase mb-4 tracking-tight">Read the "Lead"</h5>
          <p className="text-xs text-slate-400 leading-relaxed font-bold italic">
            Exam questions are built around a lead sentence. Isolate the main symptom before looking at the rest.
          </p>
        </div>
        <div className="p-10 glass rounded-[3rem] border border-slate-800 hover:border-blue-500/30 transition-colors group">
          <div className="w-12 h-12 bg-blue-500/10 rounded-2xl mb-6 flex items-center justify-center text-blue-500 text-xl font-black border border-blue-500/20">2</div>
          <h5 className="text-white font-black text-lg uppercase mb-4 tracking-tight">Active Recall</h5>
          <p className="text-xs text-slate-400 leading-relaxed font-bold italic">
            Don't just peek! Try to whisper the diagnosis aloud. This "effortful" retrieval is what builds long-term memory.
          </p>
        </div>
        <div className="p-10 glass rounded-[3rem] border border-slate-800 hover:border-pink-500/30 transition-colors group">
          <div className="w-12 h-12 bg-pink-500/10 rounded-2xl mb-6 flex items-center justify-center text-pink-500 text-xl font-black border border-pink-500/20">3</div>
          <h5 className="text-white font-black text-lg uppercase mb-4 tracking-tight">Complication Check</h5>
          <p className="text-xs text-slate-400 leading-relaxed font-bold italic">
            Always link the complication to the primary disease. Most exam traps involve picking a complication instead of the disease.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseChallenge;
