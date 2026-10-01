import React from 'react';
import { Phone, MessageSquare, Navigation } from 'lucide-react';
import { GARAGE_DATA } from '../config/garageData';

export const FinalCTA: React.FC = () => {
  return (
    <section className="w-full bg-garage-yellow py-16 text-garage-bg relative overflow-hidden">
      {/* Background industrial pattern accent */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(#0D0F10 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />

      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="font-mono text-xs uppercase tracking-widest block mb-2 font-bold opacity-90">
          INDEPENDENT CAR REPAIRS & SERVICING • CORBY
        </span>

        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-none mb-4">
          NEED YOUR CAR LOOKED AT?
        </h2>

        <p className="font-body text-base sm:text-lg max-w-2xl mx-auto mb-8 font-medium opacity-90">
          Tell us what is happening with your vehicle and get in touch with Beetle Garage in Corby.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={GARAGE_DATA.phoneTelLink}
            className="px-6 py-3.5 rounded bg-garage-bg hover:bg-garage-secondary text-garage-text font-mono text-sm font-bold uppercase tracking-wider transition-all shadow-lg flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-garage-yellow" />
            <span>CALL 07522 574716</span>
          </a>

          <a
            href={GARAGE_DATA.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded bg-emerald-950 hover:bg-emerald-900 text-emerald-400 font-mono text-sm font-bold uppercase tracking-wider transition-all shadow-lg flex items-center gap-2 border border-emerald-700/50"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>WHATSAPP US</span>
          </a>

          <a
            href={GARAGE_DATA.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded bg-garage-elevated hover:bg-garage-card text-garage-text font-heading text-base font-bold uppercase tracking-wider transition-all shadow-lg flex items-center gap-2 border border-garage-border"
          >
            <Navigation className="w-4 h-4 text-garage-yellow" />
            <span>GET DIRECTIONS</span>
          </a>
        </div>
      </div>
    </section>
  );
};
