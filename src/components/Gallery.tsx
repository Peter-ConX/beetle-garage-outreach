import React from 'react';
import { Camera, MapPin, Wrench } from 'lucide-react';
import { GARAGE_DATA, GalleryItem } from '../config/garageData';

export const Gallery: React.FC = () => {
  return (
    <section className="w-full bg-garage-bg py-20 border-b border-garage-border/40" id="gallery">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="font-mono text-xs text-garage-yellow uppercase tracking-widest block mb-2 font-semibold">
              WORKSHOP & PREMISES
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl uppercase font-bold text-garage-text tracking-tight">
              INSIDE BEETLE GARAGE
            </h2>
            <p className="font-body text-base text-garage-muted max-w-xl mt-2 leading-relaxed">
              Take a look at our workshop location at Unit 10 Brunel Road, Corby, and the everyday vehicle repair environment.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3 py-2 rounded bg-garage-secondary border border-garage-border font-mono text-xs text-garage-yellow">
            <Camera className="w-4 h-4 text-garage-yellow" />
            <span>CORBY WORKSHOP BAY</span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GARAGE_DATA.gallery.map((item: GalleryItem) => (
            <div
              key={item.id}
              className="group bg-garage-card border border-garage-border rounded-lg overflow-hidden flex flex-col justify-between hover:border-garage-yellow/60 transition-all duration-200 shadow-md"
            >
              <div className="relative h-56 w-full overflow-hidden bg-garage-secondary">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-garage-card via-transparent to-transparent opacity-80" />
                
                {item.isRealLocation && (
                  <div className="absolute top-3 left-3 bg-garage-yellow text-garage-bg font-mono text-[10px] uppercase font-bold px-2.5 py-1 rounded shadow">
                    ACTUAL PREMISES
                  </div>
                )}
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-garage-yellow uppercase mb-1">
                    {item.isRealLocation ? (
                      <MapPin className="w-3.5 h-3.5" />
                    ) : (
                      <Wrench className="w-3.5 h-3.5" />
                    )}
                    <span>{item.category}</span>
                  </div>

                  <h3 className="font-heading text-lg font-bold uppercase text-garage-text group-hover:text-garage-yellow transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-garage-border/40 flex items-center justify-between text-xs font-mono text-garage-muted">
                  <span>Unit 10 Brunel Rd</span>
                  <span>Corby</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
