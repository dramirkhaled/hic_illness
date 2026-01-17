
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ClusterItem {
  name: string;
  diseases: string[];
  tip: string;
}

interface Cluster {
  title: string;
  icon: string;
  color: string;
  items: ClusterItem[];
}

const CLUSTERS: Cluster[] = [
  {
    title: "Pharmacology & Protocols",
    icon: "💊",
    color: "emerald",
    items: [
      { name: "Meningitis Protocol", diseases: ["Meningococcal Meningitis"], tip: "Rx: Ceftriaxone. Prophylaxis: Rifampicin, Ciprofloxacin, or Sulphadiazine." },
      { name: "The Doxycycline Group", diseases: ["Cholera", "Brucellosis", "Leptospirosis", "Anthrax", "Plague"], tip: "Doxycycline is the cornerstone for zoonotic spirochetes and specific vibrios." },
      { name: "The RIPE Regimen", diseases: ["Tuberculosis"], tip: "Rifampin (Red secretions), Isoniazid (Neuritis), Pyrazinamide (Gout), Ethambutol (Eyes)." },
      { name: "Macrolide Choice", diseases: ["Pertussis", "Typhoid", "Shigella"], tip: "Azithromycin is drug of choice for Whooping cough (Pertussis)." }
    ]
  },
  {
    title: "Physical Exam Hallmarks",
    icon: "🔍",
    color: "pink",
    items: [
      { name: "Oropharyngeal Signs", diseases: ["Measles (Koplik's)", "Rubella (Forchheimer)", "Diphtheria (Membrane)", "Scarlet Fever (Strawberry Tongue)"], tip: "Membrane in Diphtheria bleeds if you try to scrap it off." },
      { name: "Pathological Postures", diseases: ["Tetanus (Opisthotonus)", "Meningitis (Nuchal Rigidity)", "Rabies (Laryngeal spasms)"], tip: "Opisthotonus is a toxic-mediated arching of the spine." }
    ]
  },
  {
    title: "The Body Fluids Lab",
    icon: "🧪",
    color: "sky",
    items: [
      { name: "Stool Morphology", diseases: ["Cholera (Rice-water)", "Typhoid (Pea-soup)", "Shigella (Bloody/Mucoid)"], tip: "Rice-water stools are painless and voluminous; Pea-soup stools occur in 2nd week." },
      { name: "Urine Manifestations", diseases: ["Hepatitis A (Tea-colored)", "Malaria (Blackwater fever)", "Schisto (Terminal Hematuria)"], tip: "Dark urine in Hep A is due to conjugated bilirubin." }
    ]
  },
  {
    title: "Vector & Host Registry",
    icon: "🦟",
    color: "amber",
    items: [
      { name: "The Mosquito Gate", diseases: ["Malaria (Anopheles)", "Dengue (Aedes)", "Yellow Fever (Aedes)"], tip: "Aedes mosquitoes bite during the daytime (unlike Anopheles)." },
      { name: "Rodents & Their Fleas", diseases: ["Plague (Rat Flea)", "Leptospirosis (Rat Urine)", "Murine Typhus"], tip: "Leptospira is excreted in rodent urine into water sources." },
      { name: "Livestock Hosts", diseases: ["Brucellosis (Goats/Cows)", "Anthrax (Sheep/Wool)", "Bovine TB"], tip: "Brucella melitensis (Goats) is the most virulent species for humans." },
      { name: "The Canine Factor", diseases: ["Rabies (Dogs/Cats/Bats)"], tip: "Saliva is the vehicle; incubation depends on distance from CNS." },
      { name: "Freshwater Snails", diseases: ["Schistosomiasis"], tip: "Biomphalaria (Mansoni) and Bulinus (Haematobium) snails." }
    ]
  },
  {
    title: "Epidemiological Patterns",
    icon: "🌡️",
    color: "orange",
    items: [
      { name: "Fever Waveforms", diseases: ["Typhoid (Step-ladder)", "Brucellosis (Undulant)", "Malaria (Cyclical spikes)"], tip: "Step-ladder fever rises incrementally over the first 7 days." },
      { name: "Incubation Extremes", diseases: ["Cholera (Hours)", "Rabies (Months)", "Hep B (Months)", "Leprosy (Years)"], tip: "Short incubation usually correlates with explosive outbreaks." }
    ]
  },
  {
    title: "Microbiology Masterclass",
    icon: "🔬",
    color: "indigo",
    items: [
      { name: "Staining & Morphology", diseases: ["TB (Acid-Fast)", "Plague (Safety-pin Wayson)", "Meningitis (G-ve Diplococci)", "Anthrax (Bamboo-stick)"], tip: "AFB (Acid-Fast Bacilli) means they resist decolorization by acid." },
      { name: "Specific Culture Media", diseases: ["Cholera (TCBS)", "Diphtheria (Tellurite)", "Pertussis (Bordet-Gengou)"], tip: "TCBS = Thiosulfate-Citrate-Bile Salts-Sucrose Agar." }
    ]
  },
  {
    title: "Pathological Complications",
    icon: "⚠️",
    color: "red",
    items: [
      { name: "Organ Failures", diseases: ["Leptospirosis (Renal/Liver)", "Shigella (HUS)", "Diphtheria (Myocarditis)"], tip: "HUS (Hemolytic Uremic Syndrome) presents with anemia, low platelets, and renal failure." },
      { name: "Brain & Nervous System", diseases: ["Measles (SSPE)", "Polio (Paralysis)", "Rabies (Encephalitis)"], tip: "SSPE occurs years after the initial measles infection." }
    ]
  }
];

const ClinicalClusters: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section className="max-w-6xl mx-auto space-y-12 pb-24">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-6xl font-black tracking-tighter text-white uppercase italic">Clinical Logic Clusters</h2>
        <p className="text-slate-400 text-2xl font-bold tracking-tight">The Definitive Registry for Medical Exams.</p>
      </div>

      <div className="space-y-6">
        {CLUSTERS.map((cluster, idx) => {
          const isExpanded = expandedIndex === idx;
          return (
            <div 
              key={idx} 
              className={`glass rounded-[3rem] border overflow-hidden transition-all duration-500 ${isExpanded ? `border-${cluster.color}-500/40 bg-slate-900/40 shadow-2xl scale-[1.01]` : 'border-slate-800 hover:border-slate-700'}`}
            >
              <button 
                onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                className="w-full p-8 flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-8">
                  <span className="text-4xl bg-slate-900 w-20 h-20 flex items-center justify-center rounded-[2rem] border border-slate-800 shadow-inner group-hover:scale-110 transition-transform">
                    {cluster.icon}
                  </span>
                  <div>
                    <h3 className={`text-2xl font-black uppercase tracking-[0.15em] ${isExpanded ? `text-${cluster.color}-400` : 'text-slate-200 group-hover:text-white'}`}>
                      {cluster.title}
                    </h3>
                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mt-1.5">
                       {cluster.items.length} Essential Comparative Categories
                    </p>
                  </div>
                </div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border border-slate-800 transition-all ${isExpanded ? 'rotate-180 bg-pink-500 border-pink-500 text-white' : 'text-slate-600'}`}>
                  ▼
                </div>
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                  >
                    <div className="p-10 pt-0 grid grid-cols-1 md:grid-cols-2 gap-8">
                      {cluster.items.map((item, i) => (
                        <div key={i} className="bg-black/40 p-8 rounded-[2.5rem] border border-slate-800/50 hover:border-slate-600 transition-all">
                          <h4 className="text-xl font-black text-white mb-5 border-b border-slate-800 pb-4 flex justify-between items-center uppercase tracking-tighter italic">
                            {item.name}
                          </h4>
                          <div className="flex flex-wrap gap-2.5 mb-6">
                            {item.diseases.map((d, di) => (
                              <span key={di} className="text-[10px] bg-slate-800 px-3.5 py-1.5 rounded-xl text-pink-300 font-black border border-pink-500/10 uppercase tracking-tight">
                                {d}
                              </span>
                            ))}
                          </div>
                          <div className="flex gap-5 items-start bg-pink-500/5 p-5 rounded-3xl border border-pink-500/10">
                            <span className="text-2xl">💡</span>
                            <p className="text-xs text-slate-400 leading-relaxed font-bold italic">{item.tip}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ClinicalClusters;
