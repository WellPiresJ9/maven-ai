import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Button } from './ui/Button';
import { CALENDLY_LINK } from '../constants';

export const Hero: React.FC = () => {
  return (
    // Section Dark base
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden section-dark">
      
      {/* Atmosphere Glow Effects - PURE CYAN/WHITE */}
      <div className="absolute top-[-20%] left-0 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-[-10%] right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none mix-blend-overlay"></div>

      {/* Abstract Liquid Metal Video Layer */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
         <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover scale-110 opacity-50 mix-blend-luminosity filter contrast-125 brightness-75"
         >
            <source src="https://cdn.pixabay.com/video/2025/12/26/324289.mp4" type="video/mp4" />
         </video>
        
        {/* Gradient overlays to tint the video Cyan/Dark Steel */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#083344]/30 via-[#083344]/80 to-[#020617] mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#083344]/60 via-transparent to-[#083344]/60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full flex flex-col items-center text-center">
        
        {/* Headline */}
        <h1 className="max-w-4xl font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-8 drop-shadow-2xl">
            Cresça <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-cyan-200 drop-shadow-[0_0_25px_rgba(34,211,238,0.4)]">sem gargalos</span>,<br/> com Agentes de IA.
        </h1>
        
        {/* Subhead */}
        <h2 className="text-xl text-cyan-100/80 font-light mb-10 leading-relaxed max-w-2xl text-shadow-sm">
            Criamos automações com Agentes de IA que trabalham no seu negócio sem parar, enquanto você foca no que realmente importa.
        </h2>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 mb-16 justify-center w-full sm:w-auto">
            <Button href={CALENDLY_LINK}>
            Agendar consultoria
            <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="secondary" href="#cases">
            <PlayCircle className="mr-2 w-4 h-4" />
            Ver cases de estudo
            </Button>
        </div>

        {/* Client Logos - Infinite scrolling carousel */}
        <div className="pt-8 border-t border-cyan-500/20 w-full">
            <p className="text-xs font-semibold text-cyan-300/50 uppercase tracking-[0.2em] mb-6 text-center">
                Empresas que confiam na Maven AI
            </p>
            <div className="relative overflow-hidden">
                <div className="flex animate-scroll-logos gap-12 items-center">
                    {/* First set of logos - all logos from hero-logos folder */}
                    {[
                        '/assets/hero-logos/emb-logo.png',
                        '/assets/hero-logos/helioplast-logo.png',
                        '/assets/hero-logos/hunters-logo.png',
                        '/assets/hero-logos/inframetro-logo.png',
                        '/assets/hero-logos/long-logo.png',
                        '/assets/hero-logos/rony-logo.png',
                        '/assets/hero-logos/tecfil-logo.png',
                        '/assets/hero-logos/tiohuli-logo.png',
                        '/assets/hero-logos/wittel-logo.png',
                    ].map((logoUrl, idx) => (
                        <div key={`first-${idx}`} className="flex-shrink-0 h-10 flex items-center justify-center px-8">
                            <img 
                                src={logoUrl} 
                                alt={`Logo ${idx + 1}`}
                                className="h-full w-auto object-contain opacity-70 brightness-0 invert hover:opacity-100 transition-all duration-300"
                                style={{ filter: 'brightness(0) invert(1)' }}
                            />
                        </div>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {[
                        '/assets/hero-logos/emb-logo.png',
                        '/assets/hero-logos/helioplast-logo.png',
                        '/assets/hero-logos/hunters-logo.png',
                        '/assets/hero-logos/inframetro-logo.png',
                        '/assets/hero-logos/long-logo.png',
                        '/assets/hero-logos/rony-logo.png',
                        '/assets/hero-logos/tecfil-logo.png',
                        '/assets/hero-logos/tiohuli-logo.png',
                        '/assets/hero-logos/wittel-logo.png',
                    ].map((logoUrl, idx) => (
                        <div key={`second-${idx}`} className="flex-shrink-0 h-10 flex items-center justify-center px-8">
                            <img 
                                src={logoUrl} 
                                alt={`Logo ${idx + 1}`}
                                className="h-full w-auto object-contain opacity-70 brightness-0 invert hover:opacity-100 transition-all duration-300"
                                style={{ filter: 'brightness(0) invert(1)' }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>

    </section>
  );
};