import React from 'react';
import { Building2, Wrench, Calendar, MapPin } from 'lucide-react';
import { GARAGE_DATA } from '../config/garageData';

export const TrustBar: React.FC = () => {
  return (
    <section className="w-full bg-garage-secondary py-10 border-b border-garage-border/50">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-garage-card p-5 rounded-lg border border-garage-border/60 transition-all hover:border-garage-yellow/50">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded bg-garage-elevated text-garage-yellow">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold uppercase text-garage-text">Independent Garage</h3>
            </div>
            <p className="font-body text-xs text-garage-muted leading-relaxed">
              Local mechanics offering dedicated single-workshop service without main dealer overheads.
            </p>
            <div className="mt-3 font-mono text-[10px] text-garage-yellow tracking-widest uppercase">
              CORBY OWNED & OPERATED
            </div>
          </div>

          <div className="bg-garage-card p-5 rounded-lg border border-garage-border/60 transition-all hover:border-garage-yellow/50">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded bg-garage-elevated text-garage-yellow">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold uppercase text-garage-text">Practical Repairs</h3>
            </div>
            <p className="font-body text-xs text-garage-muted leading-relaxed">
              Straightforward diagnostic assessment and honest mechanical repair work for your vehicle.
            </p>
            <div className="mt-3 font-mono text-[10px] text-garage-yellow tracking-widest uppercase">
              CLEAR COMMUNICATION
            </div>
          </div>

          <div className="bg-garage-card p-5 rounded-lg border border-garage-border/60 transition-all hover:border-garage-yellow/50">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded bg-garage-elevated text-garage-yellow">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold uppercase text-garage-text">Vehicle Servicing</h3>
            </div>
            <p className="font-body text-xs text-garage-muted leading-relaxed">
              Routine vehicle servicing, inspections, and preventative maintenance for daily peace of mind.
            </p>
            <div className="mt-3 font-mono text-[10px] text-garage-yellow tracking-widest uppercase">
              ALL MAKES & MODELS
            </div>
          </div>

          <div className="bg-garage-card p-5 rounded-lg border border-garage-border/60 transition-all hover:border-garage-yellow/50">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded bg-garage-elevated text-garage-yellow">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold uppercase text-garage-text">Corby-Based</h3>
            </div>
            <p className="font-body text-xs text-garage-muted leading-relaxed">
              Unit 10 Brunel Road, Corby, NN17 4AU. Open Monday to Friday 09:00 to 17:00.
            </p>
            <div className="mt-3 font-mono text-[10px] text-garage-yellow tracking-widest uppercase">
              {GARAGE_DATA.address.postcode}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
