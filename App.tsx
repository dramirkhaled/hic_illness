
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TabType } from './types';
import Dashboard from './components/Dashboard';
import ClinicalClusters from './components/ClinicalClusters';
import VaccineMatrix from './components/VaccineMatrix';
import ComparisonLab from './components/ComparisonLab';
import CaseChallenge from './components/CaseChallenge';

const SidebarItem: React.FC<{ 
  id: TabType; 
  active: boolean; 
  onClick: (id: TabType) => void; 
  icon: string; 
  label: string 
}> = ({ id, active, onClick, icon, label }) => (
  <button
    onClick={() => onClick(id)}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
      active 
        ? 'glass border-emerald-500/50 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)] translate-x-2' 
        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
    }`}
  >
    <span className="text-xl">{icon}</span>
    <span className="font-semibold text-[11px] tracking-wide uppercase">{label}</span>
  </button>
);

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>(TabType.DASHBOARD);

  const renderContent = () => {
    switch (activeTab) {
      case TabType.DASHBOARD: return <Dashboard />;
      case TabType.CLUSTERS: return <ClinicalClusters />;
      case TabType.VACCINE_MATRIX: return <VaccineMatrix />;
      case TabType.COMPARISON_LAB: return <ComparisonLab />;
      case TabType.CASE_CHALLENGE: return <CaseChallenge />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-[#020617] text-slate-100 overflow-hidden">
      <aside className="w-64 glass border-r border-slate-800 flex flex-col p-6 z-20">
        <div className="mb-10">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent italic">
            EpiMaster Elite
          </h1>
          <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-widest font-bold">PathoPro System v2.5</p>
        </div>

        <nav className="flex-1 space-y-2">
          <SidebarItem id={TabType.DASHBOARD} active={activeTab === TabType.DASHBOARD} onClick={setActiveTab} icon="📊" label="Epi-Dashboard" />
          <SidebarItem id={TabType.CASE_CHALLENGE} active={activeTab === TabType.CASE_CHALLENGE} onClick={setActiveTab} icon="🧠" label="Case Challenge" />
          <SidebarItem id={TabType.CLUSTERS} active={activeTab === TabType.CLUSTERS} onClick={setActiveTab} icon="🌀" label="Clinical Clusters" />
          <SidebarItem id={TabType.VACCINE_MATRIX} active={activeTab === TabType.VACCINE_MATRIX} onClick={setActiveTab} icon="💉" label="Immuno-Matrix" />
          <SidebarItem id={TabType.COMPARISON_LAB} active={activeTab === TabType.COMPARISON_LAB} onClick={setActiveTab} icon="🧪" label="Comparison Lab" />
        </nav>

        <div className="mt-auto pt-6 border-t border-slate-800/50">
          <div className="flex items-center gap-3 px-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-500 to-blue-500 flex items-center justify-center text-xs font-bold">DR</div>
            <div>
              <p className="text-xs font-bold">Medical Scholar</p>
              <p className="text-[10px] text-slate-500">Exam Mode Active</p>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto relative p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default App;
