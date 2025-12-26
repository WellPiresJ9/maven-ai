import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020617] py-12 text-slate-400 text-sm border-t border-cyan-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center">
            <img 
              src="/assets/logos/maven-logo.png" 
              alt="Maven AI Logo"
              className="h-full w-auto object-contain brightness-0 invert"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>
          <div>
            <span className="text-white font-bold text-lg tracking-tight block">
              <span className="text-white drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">Maven</span>{' '}
              <span className="text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.8)] font-extrabold">AI</span>
            </span>
            <p className="mt-2 text-slate-500">Automating the future of work.</p>
          </div>
        </div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-cyan-300 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-cyan-300 transition-colors">Twitter</a>
          <a href="#" className="hover:text-cyan-300 transition-colors">Privacidade</a>
        </div>
        <div className="mt-4 md:mt-0 text-slate-600">
          © {new Date().getFullYear()} Maven AI Solutions.
        </div>
      </div>
    </footer>
  );
};