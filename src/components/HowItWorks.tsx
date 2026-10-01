import React from 'react';
import { PhoneCall, ClipboardList, Wrench, CheckCircle, ArrowRight } from 'lucide-react';
import { GARAGE_DATA, ProcessStepItem } from '../config/garageData';

export const HowItWorks: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'PhoneCall': return <PhoneCall className="w-6 h-6 text-garage-yellow" />;
      case 'ClipboardList': return <ClipboardList className="w-6 h-6 text-garage-yellow" />;
      case 'Wrench': return <Wrench className="w-6 h-6 text-garage-yellow" />;
      case 'CheckCircle': return <CheckCircle className="w-6 h-6 text-garage-yellow" />;
      default: return <Wrench className="w-6 h-6 text-garage-yellow" />;
    }
  };

  return (
    <section className="w-full bg-garage-bg py-20 border-b border-garage-border/40" id="how-it-works">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-garage-yellow uppercase tracking-widest block mb-2 font-semibold">
            SIMPLE WORKSHOP PROCESS
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl uppercase font-bold text-garage-text tracking-tight">
            HOW IT WORKS
          </h2>
          <p className="font-body text-base text-garage-muted mt-3 leading-relaxed">
            Getting your vehicle repaired or serviced is simple and straightforward at Beetle Garage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {GARAGE_DATA.howItWorks.map((stepItem: ProcessStepItem, index: number) => (
            <div
              key={stepItem.step}
              className="bg-garage-card border border-garage-border p-6 rounded-lg relative flex flex-col justify-between hover:border-garage-yellow/60 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-garage-yellow/20 text-garage-yellow border border-garage-yellow/30">
                    STEP {stepItem.step}
                  </span>
                  <div className="p-2 rounded bg-garage-elevated">
                    {getStepIcon(stepItem.iconName)}
                  </div>
                </div>

                <h3 className="font-heading text-xl uppercase font-bold text-garage-text mb-2">
                  {stepItem.title}
                </h3>

                <p className="font-body text-xs text-garage-muted leading-relaxed">
                  {stepItem.description}
                </p>
              </div>

              {index < GARAGE_DATA.howItWorks.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-garage-border">
                  <ArrowRight className="w-6 h-6 text-garage-yellow/40" />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
