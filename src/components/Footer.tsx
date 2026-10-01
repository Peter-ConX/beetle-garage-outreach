import React, { useState } from 'react';
import { Phone, MessageSquare, Navigation, MapPin, Clock, ShieldCheck, X } from 'lucide-react';
import { GARAGE_DATA } from '../config/garageData';

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'cookies' | null>(null);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="w-full bg-garage-secondary border-t border-garage-border text-garage-muted py-16">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-garage-border/50">
          
          {/* Column 1: Brand & Overview (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <a href="#" className="flex items-center gap-3">
              <img
                src={GARAGE_DATA.logoUrl}
                alt="Beetle Garage Logo"
                className="h-9 w-auto object-contain"
              />
              <span className="font-heading text-2xl font-bold uppercase text-garage-text tracking-wider">
                BEETLE GARAGE
              </span>
            </a>
            
            <p className="font-body text-xs text-garage-muted leading-relaxed">
              Independent vehicle servicing and repair garage in Corby. Straightforward car care, vehicle servicing and engine diagnostics.
            </p>

            <div className="flex items-center gap-2 font-mono text-xs text-garage-yellow pt-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Independent Corby Workshop</span>
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-heading text-lg font-bold uppercase text-garage-text tracking-wider">
              NAVIGATION
            </h4>
            <div className="flex flex-col gap-2">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-body text-xs text-garage-muted hover:text-garage-yellow transition-colors w-fit"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Contact Info & Address (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h4 className="font-heading text-lg font-bold uppercase text-garage-text tracking-wider">
              GARAGE CONTACT & LOCATION
            </h4>

            <div className="flex flex-col gap-2 text-xs font-body text-garage-muted">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-garage-yellow shrink-0 mt-0.5" />
                <span>{GARAGE_DATA.address.full}</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-garage-yellow shrink-0" />
                <span>{GARAGE_DATA.openingHours.full}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-garage-yellow shrink-0" />
                <a href={GARAGE_DATA.phoneTelLink} className="hover:text-garage-yellow font-mono">
                  {GARAGE_DATA.phoneFormatted}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={GARAGE_DATA.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 font-mono text-emerald-400"
                >
                  WhatsApp: {GARAGE_DATA.whatsapp}
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href={GARAGE_DATA.phoneTelLink}
                className="px-3 py-2 rounded bg-garage-card border border-garage-border hover:border-garage-yellow text-garage-text font-mono text-xs flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-garage-yellow" />
                <span>Call Garage</span>
              </a>

              <a
                href={GARAGE_DATA.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded bg-emerald-950/60 border border-emerald-600/50 text-emerald-400 font-mono text-xs flex items-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <a
                href={GARAGE_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded bg-garage-card border border-garage-border hover:border-garage-yellow text-garage-text font-mono text-xs flex items-center gap-1.5 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-garage-yellow" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p className="text-garage-muted text-center sm:text-left">
            © {new Date().getFullYear()} Beetle Garage. Unit 10 Brunel Road, Corby, NN17 4AU. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setActiveModal('privacy')}
              className="text-garage-muted hover:text-garage-yellow underline"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => setActiveModal('cookies')}
              className="text-garage-muted hover:text-garage-yellow underline"
            >
              Cookie Policy
            </button>
          </div>
        </div>

      </div>

      {/* PRIVACY / COOKIES MODAL */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-garage-card border border-garage-border max-w-lg w-full p-6 rounded-xl shadow-2xl relative">
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-garage-muted hover:text-garage-text"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-heading text-2xl font-bold uppercase text-garage-text mb-4">
              {activeModal === 'privacy' ? 'Privacy Policy' : 'Cookie Policy'}
            </h3>

            <div className="font-body text-xs text-garage-muted space-y-3 leading-relaxed max-h-80 overflow-y-auto pr-2">
              {activeModal === 'privacy' ? (
                <>
                  <p>
                    Beetle Garage respects your privacy. We collect minimal personal details (such as name, phone number, and vehicle registration) solely to process your repair or servicing enquiry.
                  </p>
                  <p>
                    We do not sell, rent, or share customer data with third parties for marketing purposes. Data provided via phone or WhatsApp is used exclusively for workshop communications.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    This website uses essential browser storage to ensure smooth navigation and user preferences.
                  </p>
                  <p>
                    No invasive tracking cookies or third-party advertising profile trackers are used.
                  </p>
                </>
              )}
            </div>

            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="mt-6 w-full py-2.5 rounded bg-garage-yellow text-garage-bg font-heading font-bold uppercase text-sm"
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
