
import React from 'react';
import { DISEASES } from '../constants';

const VaccineMatrix: React.FC = () => {
  return (
    <section>
      <div className="mb-10">
        <h2 className="text-4xl font-extrabold mb-2 tracking-tight">Immuno-Matrix</h2>
        <p className="text-slate-400">Interactive mandatory vaccination schedule and viral biology breakdown.</p>
      </div>

      <div className="glass rounded-3xl overflow-hidden border border-slate-800">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-900/50 border-b border-slate-800">
              <th className="p-6 text-xs uppercase text-slate-500 font-bold tracking-widest">Target Pathogen</th>
              <th className="p-6 text-xs uppercase text-slate-500 font-bold tracking-widest">Vaccine Name</th>
              <th className="p-6 text-xs uppercase text-slate-500 font-bold tracking-widest">Vaccine Type</th>
              <th className="p-6 text-xs uppercase text-slate-500 font-bold tracking-widest">Egypt Schedule (Key)</th>
              <th className="p-6 text-xs uppercase text-slate-500 font-bold tracking-widest">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {DISEASES.filter(d => d.vaccine).map(d => (
              <tr key={d.id} className="hover:bg-slate-800/30 transition-colors">
                <td className="p-6">
                  <p className="font-bold text-slate-200">{d.name}</p>
                </td>
                <td className="p-6">
                  <span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-xs font-bold border border-purple-500/20">
                    {d.vaccine}
                  </span>
                </td>
                <td className="p-6">
                  <span className={`text-xs px-2 py-1 rounded border ${
                    d.vaccineType === 'Live Attenuated' 
                    ? 'border-green-500/30 text-green-400' 
                    : 'border-blue-500/30 text-blue-400'
                  }`}>
                    {d.vaccineType}
                  </span>
                </td>
                <td className="p-6 text-sm text-slate-400 italic">
                  {d.id === 'measles' ? '12 & 18 Months' : d.id === 'tb' ? 'Compulsory < 3rd Month' : d.id === 'cholera' ? 'Outbreak/Traveler only' : 'Variable'}
                </td>
                <td className="p-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                    <span className="text-[10px] uppercase font-bold text-slate-500 tracking-tighter">Approved</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass p-6 rounded-2xl border border-blue-500/20">
          <h4 className="text-blue-400 font-bold mb-3 flex items-center gap-2">
            🧬 Live Attenuated Protocol
          </h4>
          <p className="text-sm text-slate-400 leading-relaxed">
            Weakened form of the germ. Provides strong, long-lasting immunity. 
            Contraindicated in severely immunocompromised individuals and sometimes during pregnancy.
          </p>
        </div>
        <div className="glass p-6 rounded-2xl border border-orange-500/20">
          <h4 className="text-orange-400 font-bold mb-3 flex items-center gap-2">
            ⚰️ Killed/Inactivated Protocol
          </h4>
          <p className="text-sm text-slate-400 leading-relaxed">
            Uses the killed version of the germ. Usually doesn't provide immunity as strong as live vaccines. 
            May require several doses over time (booster shots).
          </p>
        </div>
      </div>
    </section>
  );
};

export default VaccineMatrix;
