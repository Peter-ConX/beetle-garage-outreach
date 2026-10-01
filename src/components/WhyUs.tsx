import React from 'react';
import { MessageSquare, CheckCircle2, Building2, MapPin } from 'lucide-react';
import { GARAGE_DATA, WhyUsItem } from '../config/garageData';

export const WhyUs: React.FC = () => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare': return <MessageSquare className="w-6 h-6 text-garage-yellow" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-6 h-6 text-garage-yellow" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-garage-yellow" />;
      case 'MapPin': return <MapPin className="w-6 h-6 text-garage-yellow" />;
      default: return <CheckCircle2 className="w-6 h-6 text-garage-yellow" />;
    }
  };

  return (
    <section className="w-full bg-garage-secondary py-20 border-b border-garage-border/40" id="why-us">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <span className="font-mono text-xs text-garage-yellow uppercase tracking-widest block mb-2 font-semibold">
            WHY BEETLE GARAGE
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl uppercase font-bold text-garage-text tracking-tight">
            A GARAGE THAT KEEPS THINGS SIMPLE.
          </h2>
          <p className="font-body text-base sm:text-lg text-garage-muted mt-3 leading-relaxed">
            When your car has a problem, you want to know what is wrong, what needs doing and what happens next. Beetle Garage is built around straightforward communication and practical vehicle care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GARAGE_DATA.whyUs.map((pillar: WhyUsItem) => (
            <div
              key={pillar.num}
              className="bg-garage-card border border-garage-border p-6 rounded-lg transition-all hover:border-garage-yellow/60 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded bg-garage-elevated">
                    {getPillarIcon(pillar.iconName)}
                  </div>
                  <span className="font-mono text-xs text-garage-yellow font-bold">
                    PILLAR {pillar.num}
                  </span>
                </div>

                <h3 className="font-heading text-xl uppercase font-bold text-garage-text mb-2">
                  {pillar.title}
                </h3>

                <p className="font-body text-xs text-garage-muted leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-garage-border/40 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-garage-yellow" />
                <span className="font-mono text-[10px] text-garage-muted uppercase">CORBY GARAGE</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
