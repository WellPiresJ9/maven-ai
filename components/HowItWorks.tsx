import React from 'react';
import { STEPS } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const HowItWorks: React.FC = () => {
  const { isVisible, elementRef } = useScrollAnimation(0.1, 350);

  return (
    <section id="como-funciona" ref={elementRef} className="py-24 relative">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-white mb-4">
            Como funciona trabalhar com a Maven AI
          </h2>
          <p className="text-lg text-slate-400">
            Um fluxo simples para tirar seus Agentes de IA do slide e colocar na operação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          {STEPS.map((step, idx) => (
            <div 
              key={idx} 
              className="glass-card p-10 rounded-[40px] relative flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500 hover:border-cyan-400/40 animate-fade-in-up z-10"
              style={{
                animationDelay: `${idx * 150}ms`,
                animationFillMode: 'both'
              }}
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-900/50 to-cyan-950/50 border border-cyan-400/20 flex items-center justify-center mb-6 z-20 shadow-[0_0_20px_rgba(34,211,238,0.1)] group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-500 group-hover:scale-110 group-hover:border-cyan-400/40">
                <div className="transition-transform duration-500 group-hover:scale-110">
                  {React.cloneElement(step.icon as React.ReactElement, { className: "w-8 h-8 text-cyan-300 transition-colors duration-500 group-hover:text-cyan-200" })}
                </div>
              </div>
              <span className="absolute top-6 right-8 text-6xl md:text-7xl font-bold text-cyan-500/15 -z-0 select-none transition-opacity duration-500 group-hover:text-cyan-500/25">
                {step.number}
              </span>
              <h3 className="font-serif text-xl font-bold text-white mb-3 transition-colors duration-500 group-hover:text-cyan-100">
                {step.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm transition-colors duration-500 group-hover:text-slate-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};