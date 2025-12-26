import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { NAV_ITEMS, CALENDLY_LINK } from '../constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isInHero, setIsInHero] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      // Check if we're still in the hero section (first viewport)
      setIsInHero(scrollY < viewportHeight * 0.8);
      setIsScrolled(scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-3 bg-[#083344]/80 backdrop-blur-xl border-b border-cyan-500/20' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo(0,0)}>
            <div className={`flex items-center justify-center transition-all duration-500 ${
              isInHero ? 'w-10 h-10' : 'w-8 h-8'
            }`}>
              <img 
                src="/assets/logos/maven-logo.png" 
                alt="Maven AI Logo"
                className="h-full w-auto object-contain brightness-0 invert transition-all duration-500"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <span className={`font-bold tracking-tight text-white transition-all duration-500 ${
              isInHero ? 'text-xl' : 'text-lg'
            }`}>
              <span className="text-white drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">Maven</span>{' '}
              <span className="text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.8)] font-extrabold">AI</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="px-4 py-2 text-cyan-100/70 hover:text-white font-medium transition-all duration-300 rounded-full hover:bg-cyan-400/10 text-sm hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button href={CALENDLY_LINK} className="!py-2.5 !px-6 text-sm">
              Agendar
            </Button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-cyan-100 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#083344]/95 backdrop-blur-2xl border-b border-cyan-500/20 shadow-2xl p-6 flex flex-col space-y-4">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-lg font-medium text-cyan-100 py-3 border-b border-cyan-500/20"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button href={CALENDLY_LINK} className="w-full mt-4 justify-center">
            Agendar consultoria
          </Button>
        </div>
      )}
    </nav>
  );
};