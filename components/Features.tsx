import React from 'react';
import { FEATURES } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Features: React.FC = () => {
  const { isVisible, elementRef } = useScrollAnimation(0.15, 300);

  return (
    <section 
      id="agentes" 
      ref={elementRef}
      className="py-24 relative overflow-hidden"
    >
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

          {/* Right: Vertical list of agent rectangles */}
          <div className="space-y-4">
            {FEATURES.map((feature, idx) => (
              <div 
                key={idx} 
                className={`glass-card p-6 rounded-2xl group relative overflow-hidden transition-all duration-700 ease-out ${
                  isVisible 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-4 scale-95'
                }`}
                style={{ 
                  transitionDelay: `${300 + idx * 150}ms`,
                  transition: 'opacity 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
              >
                {/* Subtle glow on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600/0 to-sky-600/0 rounded-2xl blur-sm opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

                <div className="relative z-10 flex items-center gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                    {React.cloneElement(feature.icon as React.ReactElement, { className: "w-6 h-6 text-cyan-300" })}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-lg font-semibold text-white mb-1.5">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};