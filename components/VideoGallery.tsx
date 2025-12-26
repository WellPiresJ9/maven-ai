import React, { useState } from 'react';
import { Play, ArrowRight, CheckCircle2 } from 'lucide-react';
import { VIDEOS } from '../constants';

export const VideoGallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeVideo = VIDEOS[activeIndex];

  return (
    // Section Dark Mode
    <section className="py-24 relative section-dark">
      
      {/* Background Separation Gradient */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#e0f2fe] to-transparent opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-white mb-4">
            Veja nossos Agentes de IA <span className="italic text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">em ação</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Explique para o seu time com vídeos reais: fluxos, integrações e resultados de projetos que já saíram do papel.
          </p>
        </div>

        {/* Master-Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Video List */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {VIDEOS.map((video, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`
                    w-full text-left p-6 rounded-2xl border transition-all duration-300 group relative overflow-hidden
                    ${isActive 
                      ? 'bg-cyan-900/20 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.1)]' 
                      : 'bg-[#083344]/40 border-transparent hover:border-cyan-500/30 hover:bg-[#083344]/60'
                    }
                  `}
                >
                  {/* Subtle hover gradient for inactive items */}
                  {!isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  )}

                  <div className="relative z-10 flex items-center justify-between gap-4">
                    <span className={`font-medium text-lg leading-snug ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>
                      {video.title}
                    </span>
                    
                    {/* Icon Indicator */}
                    <div className={`
                        flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300
                        ${isActive 
                            ? 'bg-cyan-500 text-white border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]' 
                            : 'bg-transparent border-slate-700 text-slate-600 group-hover:border-cyan-500/50 group-hover:text-cyan-400'
                        }
                    `}>
                        {isActive ? <Play className="w-4 h-4 fill-current ml-1" /> : <ArrowRight className="w-5 h-5" />}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Video Preview & Details */}
          <div className="lg:col-span-7">
            {/* Sticky container for desktop scrolling behavior if list gets long */}
            <div className="sticky top-24 space-y-6 animate-fade-in">
                
                {/* Video Player Frame */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-cyan-500/20 bg-black aspect-video group">
                    {/* Glow behind video */}
                    <div className="absolute -inset-1 bg-cyan-500/20 blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    
                    <iframe 
                        width="100%" 
                        height="100%" 
                        src={`https://www.youtube.com/embed/${activeVideo.id}?rel=0`} 
                        title={activeVideo.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                        className="w-full h-full relative z-10"
                    ></iframe>
                </div>

                {/* Description Box (as seen in image reference) */}
                <div className="glass-card p-8 rounded-3xl border border-white/5 bg-[#083344]/30">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wide">
                            {activeVideo.tag}
                        </span>
                        <h3 className="font-serif text-xl font-bold text-white">
                            {activeVideo.title}
                        </h3>
                    </div>
                    
                    <p className="text-slate-300 leading-relaxed text-base border-t border-cyan-500/10 pt-4">
                        {activeVideo.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-sm text-cyan-400 font-medium">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Automação verificada e em produção</span>
                    </div>
                </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};