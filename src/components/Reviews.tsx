import React from 'react';
import { Star, MessageSquareQuote, CheckCircle2, ExternalLink } from 'lucide-react';
import { GARAGE_DATA, ReviewItem } from '../config/garageData';

export const Reviews: React.FC = () => {
  return (
    <section className="w-full bg-garage-secondary py-20 border-b border-garage-border/40" id="reviews">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-garage-card border border-garage-border mb-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span className="font-mono text-xs text-garage-yellow font-semibold uppercase">
                VERIFIED GOOGLE MAPS REVIEWS
              </span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl uppercase font-bold text-garage-text tracking-tight">
              WHAT CUSTOMERS SAY
            </h2>
            <p className="font-body text-base text-garage-muted max-w-xl mt-2 leading-relaxed">
              Read feedback from local drivers who have brought their vehicles to Beetle Garage in Corby.
            </p>
          </div>

          <a
            href={GARAGE_DATA.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-garage-card border border-garage-border hover:border-garage-yellow text-garage-text hover:text-garage-yellow font-mono text-xs transition-colors shrink-0"
          >
            <span>VIEW ON GOOGLE MAPS</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GARAGE_DATA.reviews.map((rev: ReviewItem) => (
            <div
              key={rev.id}
              className="bg-garage-card border border-garage-border p-6 rounded-lg relative flex flex-col justify-between hover:border-garage-yellow/40 transition-all"
            >
              <div>
                {/* Header: Author & Star Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-1.5 font-heading text-lg font-bold uppercase text-garage-text">
                      <span>{rev.author}</span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    </div>
                    <span className="font-mono text-[11px] text-garage-muted block mt-0.5">
                      {rev.date}
                    </span>
                  </div>
                  
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-garage-yellow bg-garage-elevated px-2 py-1 rounded border border-garage-border">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-garage-yellow text-garage-yellow" />
                    ))}
                  </div>
                </div>

                {/* Review Quote Body */}
                <div className="relative pt-2 pb-4">
                  <MessageSquareQuote className="w-8 h-8 text-garage-yellow/20 absolute -top-1 -left-2" />
                  <p className="font-body text-sm text-garage-muted leading-relaxed relative z-10 pl-2">
                    {rev.comment}
                  </p>
                </div>
              </div>

              {/* Verified Footer Badge */}
              <div className="pt-4 border-t border-garage-border/50 flex items-center justify-between text-xs font-mono">
                <span className="text-garage-yellow flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Google Review
                </span>
                <span className="text-garage-muted">Corby Garage</span>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Google Reviews */}
        <div className="mt-8 p-4 rounded bg-garage-card/60 border border-garage-border/50 text-center">
          <p className="font-mono text-xs text-garage-muted">
            💡 Customer experience feedback is sourced from public Google Maps reviews for Beetle Garage, Unit 10 Brunel Road, Corby.
          </p>
        </div>

      </div>
    </section>
  );
};
