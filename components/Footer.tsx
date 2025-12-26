import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020617] py-12 text-slate-400 text-sm border-t border-cyan-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-white font-bold text-lg tracking-tight">
            Maven <span className="text-cyan-400">AI</span>
          </span>
          <p className="mt-2">Automating the future of work.</p>
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