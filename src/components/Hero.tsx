import React from 'react';
import { Calendar, Phone, MessageSquare, Wrench, ShieldCheck, Cpu, PhoneCall } from 'lucide-react';
import { GARAGE_DATA } from '../config/garageData';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-garage-bg pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-garage-border/40">
      {/* Subtle background tech grid */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(#F5B82E 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Headline & Action Buttons */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            
            {/* Status Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-garage-elevated border border-garage-border w-fit">
              <span className="w-2 h-2 rounded-full bg-garage-yellow animate-pulse" />
              <span className="font-mono text-xs text-garage-yellow uppercase tracking-widest font-semibold">
                INDEPENDENT GARAGE • CORBY
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase tracking-tight text-garage-text leading-[1.05]">
              HONEST GARAGE WORK.<br />
              <span className="text-garage-yellow underline decoration-garage-yellow/40 decoration-4 underline-offset-8">
                WITHOUT THE RUNAROUND.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="font-body text-base sm:text-lg text-garage-muted max-w-2xl leading-relaxed">
              Beetle Garage is an independent vehicle repair and servicing garage in Corby. 
              Get in touch to discuss your vehicle, arrange an inspection or enquire about the work you need.
            </p>

            {/* CTA Group */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#contact"
                className="px-6 py-3.5 rounded bg-garage-yellow hover:bg-garage-gold text-garage-bg font-heading text-base font-bold uppercase tracking-wider transition-all duration-200 shadow-lg hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                <span>BOOK A SERVICE</span>
              </a>

              <a
                href={GARAGE_DATA.phoneTelLink}
                className="px-5 py-3.5 rounded bg-garage-elevated hover:bg-garage-card text-garage-text border border-garage-border font-mono text-xs sm:text-sm font-semibold transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-garage-yellow" />
                <span>CALL 07522 574716</span>
              </a>

              <a
                href={GARAGE_DATA.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded bg-emerald-950/60 hover:bg-emerald-900/80 text-emerald-400 border border-emerald-600/50 font-mono text-xs sm:text-sm font-semibold transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WHATSAPP US</span>
              </a>
            </div>

            {/* Hero Information Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-garage-border/60 mt-2">
              <div className="bg-garage-secondary p-3 rounded border border-garage-border/50">
                <div className="flex items-center gap-1.5 text-garage-yellow mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="font-mono text-[10px] text-garage-muted uppercase">INDEPENDENT</span>
                </div>
                <div className="font-heading text-sm font-bold text-garage-text uppercase">INDEPENDENT GARAGE</div>
                <div className="font-body text-xs text-garage-muted">Corby-based vehicle service</div>
              </div>

              <div className="bg-garage-secondary p-3 rounded border border-garage-border/50">
                <div className="flex items-center gap-1.5 text-garage-yellow mb-1">
                  <Wrench className="w-4 h-4" />
                  <span className="font-mono text-[10px] text-garage-muted uppercase">REPAIRS</span>
                </div>
                <div className="font-heading text-sm font-bold text-garage-text uppercase">SERVICING & REPAIRS</div>
                <div className="font-body text-xs text-garage-muted">For everyday vehicle needs</div>
              </div>

              <div className="bg-garage-secondary p-3 rounded border border-garage-border/50">
                <div className="flex items-center gap-1.5 text-garage-yellow mb-1">
                  <Cpu className="w-4 h-4" />
                  <span className="font-mono text-[10px] text-garage-muted uppercase">DIAGNOSTICS</span>
                </div>
                <div className="font-heading text-sm font-bold text-garage-text uppercase">ENGINE DIAGNOSTICS</div>
                <div className="font-body text-xs text-garage-muted">Fault code & sensor checks</div>
              </div>

              <div className="bg-garage-secondary p-3 rounded border border-garage-border/50">
                <div className="flex items-center gap-1.5 text-garage-yellow mb-1">
                  <PhoneCall className="w-4 h-4" />
                  <span className="font-mono text-[10px] text-garage-muted uppercase">CONTACT</span>
                </div>
                <div className="font-heading text-sm font-bold text-garage-text uppercase">DIRECT CONTACT</div>
                <div className="font-body text-xs text-garage-muted">Call or WhatsApp directly</div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Container */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-garage-card border border-garage-border">
              <img
                src="https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=1200"
                alt="Automotive technician working under bonnet at Beetle Garage workshop Corby"
                className="w-full h-[380px] sm:h-[440px] object-cover filter contrast-105 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-garage-bg via-transparent to-transparent opacity-80" />
              
              {/* Restrained Workshop Tag */}
              <div className="absolute bottom-4 left-4 right-4 bg-garage-bg/90 backdrop-blur-md p-3.5 rounded border border-garage-border flex items-center justify-between">
                <div>
                  <span className="font-mono text-[10px] text-garage-yellow uppercase block font-semibold">BEETLE GARAGE CORBY</span>
                  <span className="font-body text-xs text-garage-text font-medium">Unit 10, Brunel Road, NN17 4AU</span>
                </div>
                <span className="font-mono text-[11px] px-2.5 py-1 rounded bg-garage-yellow/20 text-garage-yellow uppercase font-semibold">
                  MON-FRI 09:00-17:00
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
