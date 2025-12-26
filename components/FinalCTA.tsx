import React from 'react';
import { Button } from './ui/Button';
import { CALENDLY_LINK } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const FinalCTA: React.FC = () => {
  const { isVisible, elementRef } = useScrollAnimation(0.1, 400);

  return (
    <section ref={elementRef} className="py-32 relative overflow-hidden">
        {/* Background Gradient - seamless blend */}
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/5 via-transparent to-transparent -z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>

        <div className={`max-w-4xl mx-auto px-4 text-center relative z-10 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
            <div className="glass-card-seamless p-12 md:p-20 rounded-[48px] shadow-2xl relative overflow-hidden">

                <h2 className="font-serif text-4xl md:text-5xl font-medium text-white mb-8 tracking-tight">
                    Pronto para ter Agentes de IA <br/> trabalhando por você?
                </h2>
                <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-light">
                    Agende uma conversa, conte sobre o seu cenário e receba um plano de automação sob medida.
                </p>
                <div className="flex flex-col items-center">
                    <Button href={CALENDLY_LINK} className="px-12 py-5 text-lg shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:shadow-[0_0_50px_rgba(34,211,238,0.6)] scale-105">
                        Agendar consultoria gratuita
                    </Button>
                    <p className="mt-6 text-sm text-slate-500">
                        Sem compromisso.
                    </p>
                </div>
            </div>
        </div>

    </section>
  );
};