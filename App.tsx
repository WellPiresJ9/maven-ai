import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { VideoGallery } from './components/VideoGallery';
import { CaseStudies } from './components/CaseStudies';
import { Testimonial } from './components/Testimonial';
import { ComparisonTable } from './components/ComparisonTable';
import { HowItWorks } from './components/HowItWorks';
import { FinalCTA } from './components/FinalCTA';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { WittelCaseStudy } from './components/WittelCaseStudy';
import { TecfilCaseStudy } from './components/TecfilCaseStudy';
import { HuntersCaseStudy } from './components/HuntersCaseStudy';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#case-wittel') {
        setCurrentPage('wittel-case');
        window.scrollTo(0, 0);
      } else if (hash === '#case-tecfil') {
        setCurrentPage('tecfil-case');
        window.scrollTo(0, 0);
      } else if (hash === '#case-hunters') {
        setCurrentPage('hunters-case');
        window.scrollTo(0, 0);
      } else {
        setCurrentPage('home');
        // Only scroll to cases section if hash is explicitly #cases (user clicked a link)
        if (hash === '#cases') {
          setTimeout(() => {
            const casesSection = document.getElementById('cases');
            if (casesSection) {
              casesSection.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        } else if (hash === '') {
          // When no hash, scroll to top
          window.scrollTo(0, 0);
        }
      }
    };

    // Check initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  if (currentPage === 'wittel-case') {
    return <WittelCaseStudy />;
  }

  if (currentPage === 'tecfil-case') {
    return <TecfilCaseStudy />;
  }

  if (currentPage === 'hunters-case') {
    return <HuntersCaseStudy />;
  }

  return (
    <div className="min-h-screen font-sans selection:bg-blue-500/30 selection:text-blue-100 relative">
      {/* Global Noise Overlay */}
      <div className="bg-noise"></div>
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <VideoGallery />
          <CaseStudies />
          <Testimonial />
          <ComparisonTable />
          <HowItWorks />
          <FinalCTA />
          <FAQ />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;