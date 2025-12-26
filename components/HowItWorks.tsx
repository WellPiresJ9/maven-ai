import React from 'react';
import { STEPS } from '../constants';

export const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-white mb-4">
            Como funciona trabalhar com a Maven AI
          </h2>
          <p className="text-lg text-slate-400">
            Um fluxo simples para tirar seus Agentes de IA do slide e colocar na operação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent -z-10"></div>

          {STEPS.map((step, idx) => (
            <div key={idx} className="glass-card p-10 rounded-[40px] relative flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300 hover:border-cyan-400/40">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-900/50 to-cyan-950/50 border border-cyan-400/20 flex items-center justify-center mb-6 z-10 shadow-[0_0_20px_rgba(34,211,238,0.1)] group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-shadow">
                {React.cloneElement(step.icon as React.ReactElement, { className: "w-8 h-8 text-cyan-300" })}
              </div>
              <span className="absolute top-6 right-8 text-5xl font-bold text-cyan-500/5 -z-0 select-none">
                {step.number}
              </span>
              <h3 className="font-serif text-xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};