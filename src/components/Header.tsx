import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Calendar, Menu, X, ChevronRight, Sun, Moon } from 'lucide-react';
import { GARAGE_DATA } from '../config/garageData';

interface HeaderProps {
  theme?: 'dark' | 'light';
  onToggleTheme?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ theme = 'dark', onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-garage-bg/95 backdrop-blur-md py-3 border-b border-garage-border shadow-xl'
          : 'bg-garage-bg/80 backdrop-blur-sm py-5 border-b border-garage-border/50'
      }`}
    >
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* LOGO */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src={GARAGE_DATA.logoUrl}
              alt="Beetle Garage Logo"
              className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-heading text-xl sm:text-2xl font-bold tracking-wider uppercase text-garage-text leading-none group-hover:text-garage-yellow transition-colors">
                BEETLE GARAGE
              </span>
              <span className="font-mono text-[10px] sm:text-[11px] text-garage-yellow uppercase tracking-widest mt-0.5 font-semibold">
                CORBY • INDEPENDENT GARAGE
              </span>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden xl:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-body text-xs lg:text-sm font-medium uppercase tracking-wider text-garage-muted hover:text-garage-yellow transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-garage-yellow hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* DESKTOP ACTION BUTTONS & THEME TOGGLE */}
          <div className="hidden lg:flex items-center gap-3">
            
            {/* Light / Dark Mode Toggle Button */}
            {onToggleTheme && (
              <button
                type="button"
                onClick={onToggleTheme}
                className="p-2 rounded bg-garage-card border border-garage-border text-garage-yellow hover:border-garage-yellow transition-all flex items-center gap-1.5"
                title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
                aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="w-4 h-4 text-garage-yellow" />
                    <span className="font-mono text-[11px] uppercase tracking-wider hidden xl:inline">LIGHT</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4 text-garage-yellow" />
                    <span className="font-mono text-[11px] uppercase tracking-wider hidden xl:inline">DARK</span>
                  </>
                )}
              </button>
            )}

            <a
              href={GARAGE_DATA.phoneTelLink}
              className="flex items-center gap-2 px-3 py-2 rounded bg-garage-card border border-garage-border hover:border-garage-yellow text-garage-text hover:text-garage-yellow transition-all text-xs font-mono"
            >
              <Phone className="w-4 h-4 text-garage-yellow" />
              <span>{GARAGE_DATA.phoneFormatted}</span>
            </a>

            <a
              href={GARAGE_DATA.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded bg-garage-card border border-garage-border hover:border-emerald-500 text-garage-text hover:text-emerald-400 transition-all text-xs font-mono"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 px-4 py-2 rounded bg-garage-yellow hover:bg-garage-gold text-garage-bg font-heading text-sm font-bold uppercase tracking-wider transition-all shadow-md hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Service</span>
            </a>
          </div>

          {/* MOBILE TOGGLES (Theme & Hamburger) */}
          <div className="flex xl:hidden items-center gap-2">
            {onToggleTheme && (
              <button
                type="button"
                onClick={onToggleTheme}
                className="p-2 rounded bg-garage-card border border-garage-border text-garage-yellow"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            )}

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded bg-garage-card border border-garage-border text-garage-text hover:text-garage-yellow focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER MENU */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-garage-secondary border-b border-garage-border px-4 pt-4 pb-6 mt-3 shadow-2xl animate-fadeIn">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between font-heading text-lg uppercase tracking-wider text-garage-text hover:text-garage-yellow py-2 border-b border-garage-border/40"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-garage-muted" />
              </a>
            ))}

            {/* Mobile Theme Switch Button */}
            {onToggleTheme && (
              <button
                type="button"
                onClick={() => {
                  onToggleTheme();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-between font-heading text-lg uppercase tracking-wider text-garage-yellow py-2 border-b border-garage-border/40"
              >
                <span>THEME MODE ({theme === 'dark' ? 'LIGHT' : 'DARK'})</span>
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            )}

            <div className="grid grid-cols-2 gap-3 pt-3">
              <a
                href={GARAGE_DATA.phoneTelLink}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded bg-garage-card border border-garage-border text-garage-text font-mono text-xs font-semibold"
              >
                <Phone className="w-4 h-4 text-garage-yellow" />
                <span>Call Garage</span>
              </a>

              <a
                href={GARAGE_DATA.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded bg-emerald-950/60 border border-emerald-600/50 text-emerald-400 font-mono text-xs font-semibold"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full mt-2 py-3 rounded bg-garage-yellow text-garage-bg font-heading text-base font-bold uppercase tracking-wider text-center"
            >
              <Calendar className="w-5 h-5" />
              <span>Book a Service</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
