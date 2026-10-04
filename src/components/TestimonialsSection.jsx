import React from 'react';
import { Star, MessageSquareQuote, Building, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/companyData';

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white border-y border-brand-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/25 text-brand-accent text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Testimoni Klien & Kontraktor</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-dark tracking-tight mb-4">
            Kepercayaan Nyata dari Mitra Lapangan
          </h2>

          <p className="text-base text-brand-muted leading-relaxed">
            Dengar langsung pengalaman para pimpinan proyek konstruksi, tambang, dan infrastruktur yang mengandalkan keandalan armada NusaLift.
          </p>
        </div>

        {/* Testimonials 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-brand-bg rounded-card p-6 sm:p-7 border border-brand-border/80 shadow-card hover:shadow-card-hover hover:border-brand-accent/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Star Ratings */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-500 text-amber-500"
                    />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm text-gray-700 leading-relaxed italic mb-6">
                  "{item.comment}"
                </p>
              </div>

              {/* Author & Company Profile */}
              <div className="pt-4 border-t border-brand-border/80">
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-brand-accent"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="font-heading font-bold text-sm text-brand-dark">
                      {item.name}
                    </h3>
                    <p className="text-xs text-brand-muted">
                      {item.role}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-dark mt-2">
                  <Building className="w-3.5 h-3.5 text-brand-accent flex-shrink-0" />
                  <span className="truncate">{item.company}</span>
                </div>

                <div className="text-[11px] text-gray-500 mt-1">
                  Unit Sewa: <span className="font-medium text-gray-700">{item.equipmentRented}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Trust Badge Strip */}
        <div className="mt-14 pt-8 border-t border-gray-200 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
            Telah Dipercaya oleh Lebih Dari 500+ Kontraktor & Konsorsium Proyek Nasional
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 opacity-65 grayscale hover:grayscale-0 transition-all text-xs font-bold text-gray-600">
            <span className="border border-gray-300 px-4 py-2 rounded">SEKTOR JALAN TOL & INFRA</span>
            <span className="border border-gray-300 px-4 py-2 rounded">PERTAMBANGAN & QUARRY</span>
            <span className="border border-gray-300 px-4 py-2 rounded">PERKEBUNAN & AGRO</span>
            <span className="border border-gray-300 px-4 py-2 rounded">DERMAGA & TERMINAL LOGISTIK</span>
          </div>
        </div>

      </div>
    </section>
  );
}
