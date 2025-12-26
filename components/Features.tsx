import React from 'react';
import { FEATURES } from '../constants';

export const Features: React.FC = () => {
  return (
    <section id="agentes" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Explanation */}
          <div className="sticky top-24">
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-white mb-8 tracking-tight">
              O que são Agentes de IA, <span className="italic text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">na prática?</span>
            </h2>
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed font-light">
              <p>
                Agentes de IA combinam modelos de linguagem avançados, memória persistente e acesso a ferramentas externas (como seu CRM, Email ou Gateway de pagamento) para executar tarefas de ponta a ponta.
              </p>
              <p>
                São verdadeiros "funcionários digitais" que operam 24/7, seguindo regras de negócio estritas, mas com a capacidade cognitiva para tomar decisões adaptativas.
              </p>
              <ul className="space-y-4 mt-6">
                {[
                  "Atendimento ao cliente com contexto total",
                  "Funis de vendas que qualificam e agendam",
                  "Envio de propostas e contratos automáticos",
                  "Design assistido por IA"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-base text-cyan-100/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-4 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Grid of Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FEATURES.map((feature, idx) => (
              <div 
                key={idx} 
                className="glass-card p-8 rounded-[32px] group relative overflow-hidden"
              >
                {/* Glow on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-sky-600 rounded-[32px] blur opacity-0 group-hover:opacity-20 transition duration-500"></div>

                <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(34,211,238,0.15)]">
                    {React.cloneElement(feature.icon as React.ReactElement, { className: "w-7 h-7 text-cyan-300" })}
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-white mb-3">
                    {feature.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                    {feature.description}
                    </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};