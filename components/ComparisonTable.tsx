import React from 'react';
import { COMPARISON_DATA } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const ComparisonTable: React.FC = () => {
  const { isVisible, elementRef } = useScrollAnimation(0.1, 300);

  return (
    <section ref={elementRef} className="py-24 relative">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-4">
            Compare as suas Opções:
          </h2>
        </div>

        <div className="glass-panel rounded-[32px] overflow-hidden shadow-2xl overflow-x-auto border border-cyan-500/10 bg-white/5">
          <table className="w-full min-w-[900px] border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-700/50">
                <th className="p-6 text-left text-slate-300 font-semibold w-[20%] border-r border-slate-700/30">Critério</th>
                <th className="p-6 text-left w-[20%] bg-cyan-500/10 text-white relative border-r border-slate-700/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <img 
                        src="/assets/logos/maven-logo.png" 
                        alt="Maven AI Logo" 
                        className="w-full h-full object-contain brightness-0 invert"
                        style={{ filter: 'brightness(0) invert(1)' }}
                      />
                    </div>
                    <span className="font-bold text-lg text-white">
                      <span className="text-white drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">Maven</span>{' '}
                      <span className="text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.8)] font-extrabold">AI</span>
                    </span>
                    <span className="text-green-400 text-2xl ml-auto">✓</span>
                  </div>
                </th>
                <th className="p-6 text-left text-slate-300 font-semibold w-[20%] border-r border-slate-700/30">
                  <div className="flex items-center gap-2">
                    <span>FREELANCERS</span>
                    <span className="text-red-400 text-2xl ml-auto">✗</span>
                  </div>
                </th>
                <th className="p-6 text-left text-slate-300 font-semibold w-[20%] border-r border-slate-700/30">
                  <div className="flex items-center gap-2">
                    <span>IN-HOUSE</span>
                    <span className="text-red-400 text-2xl ml-auto">✗</span>
                  </div>
                </th>
                <th className="p-6 text-left text-slate-300 font-semibold w-[20%]">
                  <div className="flex items-center gap-2">
                    <span>OUTRAS AGÊNCIAS</span>
                    <span className="text-red-400 text-2xl ml-auto">✗</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_DATA.map((row, idx) => (
                <tr key={idx} className="border-b border-slate-700/30 hover:bg-white/[0.02] transition-colors">
                  <td className="p-6 font-semibold text-slate-200 border-r border-slate-700/30">{row.criteria}</td>
                  <td className="p-6 bg-cyan-500/10 border-r border-slate-700/30">
                    <span className="inline-block px-4 py-2 bg-cyan-400/25 text-cyan-100 font-semibold rounded-md border border-cyan-400/40 shadow-[0_0_10px_rgba(34,211,238,0.1)]">
                      {row.maven}
                    </span>
                  </td>
                  <td className="p-6 text-slate-400 border-r border-slate-700/30">{row.freelancers}</td>
                  <td className="p-6 text-slate-400 border-r border-slate-700/30">{row.inHouse}</td>
                  <td className="p-6 text-slate-400">{row.agencies}</td>
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