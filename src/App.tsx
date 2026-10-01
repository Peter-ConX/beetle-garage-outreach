import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { HowItWorks } from './components/HowItWorks';
import { Reviews } from './components/Reviews';
import { Gallery } from './components/Gallery';
import { ContactForm } from './components/ContactForm';
import { Location } from './components/Location';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';

export function App() {
  const [selectedServiceTitle, setSelectedServiceTitle] = useState<string>('Vehicle Servicing');
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('beetle-garage-theme');
    return saved === 'light' ? 'light' : 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('beetle-garage-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleSelectService = (title: string) => {
    setSelectedServiceTitle(title);
  };

  return (
    <div className="min-h-screen bg-garage-bg text-garage-text flex flex-col selection:bg-garage-yellow selection:text-garage-bg pb-16 md:pb-0 transition-colors duration-300">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <Services onSelectService={handleSelectService} />
        <WhyUs />
        <HowItWorks />
        <Reviews />
        <Gallery />
        <ContactForm selectedServiceTitle={selectedServiceTitle} />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}

export default App;
