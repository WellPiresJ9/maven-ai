import React from 'react';

export const Testimonial: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden p-10 md:p-16 border border-cyan-500/20 shadow-[0_0_50px_rgba(8,51,68,0.5)]">
            {/* Darker Cyan Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-950 to-sky-900"></div>
            {/* Glass Overlay */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
                <div className="md:col-span-1 flex justify-center md:justify-start">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-br from-cyan-300 to-transparent shadow-[0_0_30px_rgba(34,211,238,0.3)]">
                        <img 
                            src="https://picsum.photos/seed/ceo/400/400" 
                            alt="Cliente Satisfeito" 
                            className="w-full h-full object-cover rounded-full border-4 border-cyan-950"
                        />
                    </div>
                </div>
                <div className="md:col-span-2 text-center md:text-left">
                    <blockquote className="font-serif text-2xl md:text-3xl font-medium text-cyan-50 leading-relaxed mb-6 italic">
                        "A Maven AI transformou nosso atendimento. O que levava horas para ser triado, hoje é resolvido em segundos. <span className="text-white font-semibold drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">É como ter um time sênior trabalhando 24h sem parar.</span>"
                    </blockquote>
                    <div>
                        <div className="text-white font-bold text-lg">Ricardo Mendes</div>
                        <div className="text-cyan-200">COO @ TechLog Logistics</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};