import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, Navigation, ExternalLink, Building2 } from 'lucide-react';
import { GARAGE_DATA } from '../config/garageData';

export const Location: React.FC = () => {
  return (
    <section className="w-full bg-garage-bg py-20 border-b border-garage-border/40" id="location">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="font-mono text-xs text-garage-yellow uppercase tracking-widest block mb-2 font-semibold">
            VISIT THE WORKSHOP
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl uppercase font-bold text-garage-text tracking-tight">
            FIND BEETLE GARAGE
          </h2>
          <p className="font-body text-base text-garage-muted max-w-xl mt-2 leading-relaxed">
            We are located at Unit 10 Brunel Road, Corby. Get directions or contact us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Address, Phone, Hours */}
          <div className="lg:col-span-5 bg-garage-card border border-garage-border p-6 sm:p-8 rounded-xl flex flex-col gap-6 shadow-xl">
            
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded bg-garage-elevated text-garage-yellow shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-xs text-garage-yellow uppercase font-semibold block mb-1">
                  WORKSHOP ADDRESS
                </span>
                <h3 className="font-heading text-2xl font-bold text-garage-text uppercase">
                  BEETLE GARAGE
                </h3>
                <p className="font-body text-sm text-garage-text mt-1 leading-snug font-medium">
                  {GARAGE_DATA.address.unit}, {GARAGE_DATA.address.street}<br />
                  {GARAGE_DATA.address.town}<br />
                  {GARAGE_DATA.address.postcode}<br />
                  {GARAGE_DATA.address.country}
                </p>
                <div className="mt-2 inline-flex items-center gap-1.5 font-mono text-[11px] text-garage-muted bg-garage-elevated px-2.5 py-1 rounded">
                  <Building2 className="w-3.5 h-3.5 text-garage-yellow" />
                  <span>Plus Code: {GARAGE_DATA.address.plusCode}</span>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="pt-4 border-t border-garage-border/50 flex items-start gap-4">
              <div className="p-3 rounded bg-garage-elevated text-garage-yellow shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-xs text-garage-yellow uppercase font-semibold block mb-1">
                  OPENING HOURS
                </span>
                <p className="font-heading text-xl font-bold text-garage-text uppercase">
                  {GARAGE_DATA.openingHours.days}
                </p>
                <p className="font-mono text-sm text-garage-yellow font-semibold mt-0.5">
                  {GARAGE_DATA.openingHours.times}
                </p>
                <p className="font-body text-xs text-garage-muted mt-1">
                  Saturday & Sunday: Closed
                </p>
              </div>
            </div>

            {/* Direct Contact Buttons */}
            <div className="pt-4 border-t border-garage-border/50 flex flex-col gap-3">
              <a
                href={GARAGE_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded bg-garage-yellow hover:bg-garage-gold text-garage-bg font-heading text-base font-bold uppercase tracking-wider transition-all shadow flex items-center justify-center gap-2"
              >
                <Navigation className="w-5 h-5" />
                <span>GET DIRECTIONS ON GOOGLE MAPS</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={GARAGE_DATA.phoneTelLink}
                  className="py-3 rounded bg-garage-elevated hover:bg-garage-card border border-garage-border text-garage-text font-mono text-xs font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-garage-yellow" />
                  <span>07522 574716</span>
                </a>

                <a
                  href={GARAGE_DATA.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 rounded bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-600/50 text-emerald-400 font-mono text-xs font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps iFrame Container */}
          <div className="lg:col-span-7 bg-garage-card border border-garage-border rounded-xl overflow-hidden shadow-xl h-[420px] relative">
            <iframe
              title="Beetle Garage Location Map"
              src={GARAGE_DATA.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.6) contrast(1.2) invert(0.9) hue-rotate(180deg)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
            
            {/* Map Overlay Badge */}
            <div className="absolute top-4 left-4 bg-garage-bg/95 backdrop-blur-md px-3.5 py-2 rounded border border-garage-border shadow-lg flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-garage-yellow animate-ping" />
              <span className="font-mono text-xs text-garage-text font-semibold">
                Unit 10, Brunel Rd, Corby NN17 4AU
              </span>
            </div>

            <a
              href={GARAGE_DATA.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 bg-garage-yellow text-garage-bg font-mono text-xs font-bold uppercase px-4 py-2.5 rounded shadow-lg flex items-center gap-2 hover:bg-garage-gold transition-colors"
            >
              <span>Open in Maps</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
