import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { CASES } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const CaseStudies: React.FC = () => {
  const { isVisible, elementRef } = useScrollAnimation(0.1, 200);

  return (
    <section id="cases" ref={elementRef} className="py-24 relative">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-white mb-6">
            Grandes empresas escalando com Agentes de IA
          </h2>
          <p className="text-lg text-slate-400">
            Veja como líderes de mercado estão usando a nossa tecnologia para automatizar processos complexos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {CASES.map((study, idx) => (
            <a 
              key={idx} 
              href={study.href}
              className={`flex flex-col h-full rounded-[32px] overflow-hidden group transition-all duration-700 ease-out hover:-translate-y-2 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${300 + idx * 100}ms` }}
            >
              {/* Top Half: Logo Area (White Background) - Fixed size for all cards */}
              <div className="h-64 bg-white flex items-center justify-center p-12 relative overflow-hidden">
                {/* Subtle pattern overlay on white background */}
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#083344_1px,transparent_1px)] [background-size:16px_16px]"></div>
                
                {/* Fixed size container for all logos */}
                <div className="w-[240px] h-[100px] flex items-center justify-center relative z-10">
                  <img 
                    src={study.logoUrl} 
                    alt={`Logo ${study.company}`} 
                    className={`max-w-full max-h-full w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 ${
                      study.company === 'Hunters' ? 'scale-125' : ''
                    }`}
                  />
                </div>
              </div>

              {/* Bottom Half: Content Area (Glass Dark) */}
              <div className="glass-card flex-1 p-8 flex flex-col border-t-0 rounded-t-none">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wide mb-4 shadow-[0_0_10px_rgba(34,211,238,0.1)]">
                    {study.category}
                  </span>
                  <h3 className="font-serif text-xl font-medium text-white leading-snug">
                    {study.title}
                  </h3>
                </div>
                
                <div className="flex-grow space-y-4 mb-8">
                  {study.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="flex items-start text-sm text-slate-300 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 mr-3 shadow-[0_0_8px_rgba(34,211,238,0.5)] flex-shrink-0"></div>
                      {metric}
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-cyan-500/10">
                  <span className="inline-flex items-center text-white font-semibold text-sm group-hover:text-cyan-400 transition-colors">
                    Saber mais
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center ml-3 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                        <ChevronRight className="w-4 h-4" />
                    </div>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

    </section>
  );
};