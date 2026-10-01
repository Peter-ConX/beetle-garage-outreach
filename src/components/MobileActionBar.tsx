import React from 'react';
import { Phone, MessageSquare, Navigation, Calendar } from 'lucide-react';
import { GARAGE_DATA } from '../config/garageData';

export const MobileActionBar: React.FC = () => {
  return (
    <aside aria-label="Quick action bar" className="fixed bottom-0 left-0 right-0 z-40 bg-garage-secondary/95 backdrop-blur-lg border-t border-garage-yellow/50 shadow-[0_-4px_20px_rgba(0,0,0,0.6)] md:hidden">
      <div className="grid grid-cols-4 h-16 max-w-md mx-auto items-center px-1">
        
        {/* CALL */}
        <a
          href={GARAGE_DATA.phoneTelLink}
          className="flex flex-col items-center justify-center gap-1 h-full text-garage-text hover:text-garage-yellow active:text-garage-yellow transition-colors"
        >
          <Phone className="w-5 h-5 text-garage-yellow" />
          <span className="font-mono text-[10px] font-semibold uppercase">CALL</span>
        </a>

        {/* WHATSAPP */}
        <a
          href={GARAGE_DATA.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 h-full text-emerald-400 hover:text-emerald-300 active:text-emerald-300 transition-colors"
        >
          <MessageSquare className="w-5 h-5 text-emerald-400" />
          <span className="font-mono text-[10px] font-semibold uppercase">WHATSAPP</span>
        </a>

        {/* DIRECTIONS */}
        <a
          href={GARAGE_DATA.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 h-full text-garage-text hover:text-garage-yellow active:text-garage-yellow transition-colors"
        >
          <Navigation className="w-5 h-5 text-garage-yellow" />
          <span className="font-mono text-[10px] font-semibold uppercase">DIRECTIONS</span>
        </a>

        {/* BOOK */}
        <a
          href="#contact"
          className="flex flex-col items-center justify-center gap-1 h-full bg-garage-yellow text-garage-bg font-bold active:bg-garage-gold transition-colors my-1 rounded"
        >
          <Calendar className="w-5 h-5" />
          <span className="font-heading text-xs uppercase tracking-wider font-bold">BOOK</span>
        </a>

      </div>
    </aside>
  );
};
