import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Testimonial: React.FC = () => {
  const { isVisible, elementRef } = useScrollAnimation(0.1, 250);

  return (
    <section ref={elementRef} className="py-16 px-4 relative">
      <div className={`max-w-6xl mx-auto transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
        <div className="relative rounded-3xl overflow-hidden p-10 md:p-16 border border-cyan-500/20 shadow-[0_0_50px_rgba(8,51,68,0.5)]">
            {/* Darker Cyan Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-950 to-sky-900"></div>
            {/* Glass Overlay */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
                <div className="md:col-span-1 flex justify-center md:justify-start">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-br from-cyan-300 to-transparent shadow-[0_0_30px_rgba(34,211,238,0.3)] overflow-hidden">
                        <img 
                            src="/assets/testimonials/WhatsApp%20Image%202025-12-19%20at%2000.43.08.jpeg" 
                            alt="Júlio César - Diretor @ Hunters Manpower" 
                            className="w-full h-full object-cover object-center rounded-full border-4 border-cyan-950"
                        />
                    </div>
                </div>
                <div className="md:col-span-2 text-center md:text-left">
                    <blockquote className="font-serif text-2xl md:text-3xl font-medium text-cyan-50 leading-relaxed mb-6 italic">
                        "Recomendo o serviço do Well, atendimento de ponta. Ouviu muito bem as minhas dores e me trouxe exatamente a solução que eu precisava. <span className="text-white font-semibold drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">Conhecimento profissional e pessoa incrível. Recomendo 100%.</span>"
                    </blockquote>
                    <div>
                        <div className="text-white font-bold text-lg">Júlio César</div>
                        <div className="text-cyan-200">Diretor @ Hunters Manpower</div>
                    </div>
                </div>
            </div>
        </div>
      </div>

    </section>
  );
};