import React from 'react';
import { ArrowRight, CheckCircle, FileCheck2, Search, Truck } from 'lucide-react';
import { RENTAL_PROCESS } from '../data/companyData';

export default function RentalProcessSection({ onStartProcess }) {
  const stepIcons = [Search, FileCheck2, CheckCircle, Truck];

  return (
    <section id="process" className="py-20 lg:py-28 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/25 text-brand-accent text-xs font-bold uppercase tracking-wider mb-3">
            <span>Alur Sewa Cepat & Praktis</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-dark tracking-tight mb-4">
            Rental Process
          </h2>

          <p className="text-base text-brand-muted leading-relaxed">
            Hanya dalam 4 langkah terstruktur, unit alat berat siap beroperasi dan tiba tepat waktu di lokasi proyek Anda tanpa birokrasi berbelit.
          </p>
        </div>

        {/* 4 Numbered Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {/* Subtle connecting connector on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-8 z-0" />

          {RENTAL_PROCESS.map((item, idx) => {
            const Icon = stepIcons[idx] || Search;
            return (
              <div
                key={item.step}
                className="bg-white rounded-card p-6 border border-brand-border shadow-card relative z-10 flex flex-col justify-between hover:-translate-y-1.5 transition-transform duration-300 group"
              >
                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-btn bg-brand-dark text-white group-hover:bg-brand-accent transition-colors flex items-center justify-center font-heading font-bold text-lg shadow-sm">
                      <Icon className="w-6 h-6 text-brand-accent group-hover:text-white" />
                    </div>

                    <span className="w-8 h-8 rounded-full bg-brand-bg border border-brand-border text-brand-dark font-heading font-bold text-sm flex items-center justify-center">
                      {item.step}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-heading font-bold text-brand-dark mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-brand-accent mb-3">
                    {item.titleId}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Highlight Pill */}
                <div className="pt-4 border-t border-brand-border/60">
                  <span className="inline-block text-[11px] font-bold text-brand-dark bg-brand-bg px-2.5 py-1 rounded border border-brand-border">
                    {item.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Trigger */}
        <div className="mt-12 text-center">
          <button
            onClick={onStartProcess}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-btn bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold text-sm shadow-card hover:shadow-accent-glow transition-all"
          >
            <span>Mulai Sewa Sekarang</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
