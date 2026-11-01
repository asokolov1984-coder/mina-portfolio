import { useEffect } from 'react';
import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import { startLivingPortrait } from './portrait/engine';

export default function App() {
  // The engine binds to the portrait markup and every .contact-btn, so it starts once the whole page is in the DOM.
  useEffect(() => {
    startLivingPortrait();
  }, []);

  return (
    <main style={{ background: '#0C0C0C', overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  );
}
