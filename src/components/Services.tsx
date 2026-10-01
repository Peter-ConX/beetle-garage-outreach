import React from 'react';
import { 
  Wrench, 
  Disc, 
  Cpu, 
  Zap, 
  Wind, 
  Cog, 
  Activity, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';
import { GARAGE_DATA, ServiceItem } from '../config/garageData';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench': return <Wrench className="w-6 h-6" />;
      case 'Disc': return <Disc className="w-6 h-6" />;
      case 'Cpu': return <Cpu className="w-6 h-6" />;
      case 'Zap': return <Zap className="w-6 h-6" />;
      case 'Wind': return <Wind className="w-6 h-6" />;
      case 'Cog': return <Cog className="w-6 h-6" />;
      case 'Activity': return <Activity className="w-6 h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      default: return <Wrench className="w-6 h-6" />;
    }
  };

  const handleEnquire = (serviceTitle: string, e: React.MouseEvent) => {
    e.preventDefault();
    onSelectService(serviceTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-garage-bg py-20 border-b border-garage-border/40" id="services">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="font-mono text-xs text-garage-yellow uppercase tracking-widest block mb-2 font-semibold">
              WORKSHOP SERVICES
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl uppercase font-bold text-garage-text tracking-tight">
              OUR SERVICES
            </h2>
            <p className="font-body text-base text-garage-muted max-w-2xl mt-2 leading-relaxed">
              From routine servicing to investigating an unexpected fault, get in touch with Beetle Garage to discuss what your vehicle needs.
            </p>
          </div>

          <div className="bg-garage-secondary border border-garage-border px-4 py-2.5 rounded text-left md:text-right shrink-0">
            <span className="font-mono text-[10px] text-garage-muted uppercase block">LOCATION</span>
            <span className="font-mono text-xs text-garage-yellow font-medium">Unit 10, Brunel Road, Corby</span>
          </div>
        </div>

        {/* Services Grid (8 cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GARAGE_DATA.services.map((item: ServiceItem) => (
            <div
              key={item.id}
              className="group bg-garage-card border border-garage-border p-6 rounded-lg hover:bg-garage-elevated hover:border-garage-yellow/60 transition-all duration-200 flex flex-col justify-between relative overflow-hidden shadow-sm"
            >
              {/* Subtle yellow hover line indicator */}
              <div className="w-1 absolute top-0 bottom-0 left-0 bg-garage-yellow opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded bg-garage-elevated text-garage-yellow group-hover:bg-garage-yellow group-hover:text-garage-bg transition-colors">
                    {getServiceIcon(item.iconName)}
                  </div>
                  <span className="font-mono text-xs text-garage-muted font-bold tracking-wider">
                    {item.num}
                  </span>
                </div>

                <h3 className="font-heading text-xl uppercase font-bold text-garage-text group-hover:text-garage-yellow transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="font-body text-xs text-garage-muted leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-garage-border/50 flex items-center justify-between">
                <span className="font-mono text-[10px] text-garage-yellow uppercase">
                  {item.tag}
                </span>
                <button
                  type="button"
                  onClick={(e) => handleEnquire(item.title, e)}
                  className="font-mono text-xs text-garage-yellow hover:text-garage-gold flex items-center gap-1 font-semibold group-hover:translate-x-1 transition-transform"
                >
                  <span>ENQUIRE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
