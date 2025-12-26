import React from 'react';
import { Check } from 'lucide-react';
import { COMPARISON_DATA } from '../constants';

export const ComparisonTable: React.FC = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-4">
            Compare suas opções
          </h2>
          <p className="text-lg text-slate-400">
            Por que Agentes de IA são a escolha mais eficiente para o seu negócio.
          </p>
        </div>

        <div className="glass-panel rounded-[32px] overflow-hidden shadow-2xl overflow-x-auto border border-cyan-500/10">
          <table className="w-full min-w-[800px] border-collapse">
            <thead>
              <tr>
                <th className="p-6 text-left text-slate-400 font-medium w-1/5 border-b border-white/5">Critério</th>
                <th className="p-6 text-left w-1/5 bg-cyan-900/40 backdrop-blur-md text-white relative border-b border-cyan-500/20">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lg text-cyan-100">Maven AI</span>
                    <div className="bg-cyan-500 rounded-full p-0.5 shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                        <Check className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  {/* Highlight effect top */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-cyan-400/50"></div>
                </th>
                <th className="p-6 text-left text-slate-300 font-semibold w-1/5 border-b border-white/5">Freelancers</th>
                <th className="p-6 text-left text-slate-300 font-semibold w-1/5 border-b border-white/5">In-house</th>
                <th className="p-6 text-left text-slate-300 font-semibold w-1/5 border-b border-white/5">Outras Agências</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_DATA.map((row, idx) => (
                <tr key={idx} className="group hover:bg-white/[0.02] transition-colors">
                  <td className="p-6 font-medium text-slate-200 border-b border-white/5">{row.criteria}</td>
                  <td className="p-6 bg-cyan-900/20 text-cyan-300 font-bold border-x border-cyan-500/10 border-b border-cyan-500/10 shadow-[inset_0_0_20px_rgba(34,211,238,0.05)]">
                    {row.maven}
                  </td>
                  <td className="p-6 text-slate-500 border-b border-white/5">{row.freelancers}</td>
                  <td className="p-6 text-slate-500 border-b border-white/5">{row.inHouse}</td>
                  <td className="p-6 text-slate-500 border-b border-white/5">{row.agencies}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-center text-slate-500 text-sm mt-6 md:hidden">
            Deslize para o lado para ver a tabela completa →
        </p>
      </div>
    </section>
  );
};