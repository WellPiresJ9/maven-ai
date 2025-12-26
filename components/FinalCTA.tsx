import React from 'react';
import { Button } from './ui/Button';
import { CALENDLY_LINK } from '../constants';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent -z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-600/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <div className="glass-card p-12 md:p-20 rounded-[48px] shadow-2xl border border-cyan-500/20 relative overflow-hidden">
                
                {/* Shine effect */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-200/40 to-transparent"></div>

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