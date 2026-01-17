
import React, { useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { DISEASES } from '../constants';

const TransmissionDynamics: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const current = DISEASES[selectedIndex];

  const chartData = [
    { subject: 'Virulence', A: current.severityMetrics.virulence, fullMark: 100 },
    { subject: 'Transmission', A: current.severityMetrics.transmissionSpeed, fullMark: 100 },
    { subject: 'Mortality', A: current.severityMetrics.mortalityRate, fullMark: 100 },
    { subject: 'Diagnosis Ease', A: current.severityMetrics.diagnosticEase, fullMark: 100 },
    { subject: 'Outbreak Potential', A: current.severityMetrics.outbreakPotential, fullMark: 100 },
  ];

  return (
    <section>
      <div className="mb-10">
        <h2 className="text-4xl font-extrabold mb-2 tracking-tight">Pathogen Dynamics</h2>
        <p className="text-slate-400">Statistical risk analysis based on clinical virulence and transmission vectors.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Radar Chart */}
        <div className="lg:col-span-2 glass p-8 rounded-3xl h-[500px] flex items-center justify-center relative">
          <h3 className="absolute top-8 left-8 text-xl font-bold text-purple-400 uppercase tracking-widest flex items-center gap-3">
             <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping"></span>
             Risk Radar: {current.name}
          </h3>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="75%" data={chartData}>
              <PolarGrid stroke="#334155" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
              <Radar
                name={current.name}
                dataKey="A"
                stroke="#d946ef"
                fill="#d946ef"
                fillOpacity={0.3}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '12px' }}
                itemStyle={{ color: '#d946ef' }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Pathogen Selector */}
        <div className="space-y-4">
          <h3 className="text-xs uppercase font-bold text-slate-500 mb-4 tracking-widest">Select Pathogen</h3>
          {DISEASES.map((d, i) => (
            <button
              key={d.id}
              onClick={() => setSelectedIndex(i)}
              className={`w-full text-left p-4 rounded-xl border transition-all ${
                selectedIndex === i 
                ? 'glass neon-border-pink bg-pink-500/10' 
                : 'border-slate-800 hover:border-slate-700 bg-slate-900/40'
              }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className={`font-bold ${selectedIndex === i ? 'text-pink-400' : 'text-slate-200'}`}>{d.name}</p>
                  <p className="text-[10px] text-slate-500 uppercase">{d.category}</p>
                </div>
                {selectedIndex === i && <span className="text-pink-500">▶</span>}
              </div>
            </button>
          ))}

          <div className="glass p-6 rounded-2xl mt-8 border-l-4 border-purple-500">
             <p className="text-xs text-slate-400 uppercase font-bold mb-2">Dynamic Insight</p>
             <p className="text-sm leading-relaxed text-slate-300">
                {current.name} displays an outbreak potential of {current.severityMetrics.outbreakPotential}%. 
                Primary transmission route via {current.transmission[0]} necessitates immediate quarantine protocol.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransmissionDynamics;
