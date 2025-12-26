import React from 'react';
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

const App: React.FC = () => {
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