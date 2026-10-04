import React from 'react';
import { Wrench, CalendarCheck, ShieldCheck, Truck, CheckCircle2 } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/companyData';

export default function WhyChooseUsSection() {
  const iconMap = {
    Wrench: Wrench,
    CalendarCheck: CalendarCheck,
    ShieldCheck: ShieldCheck,
    Truck: Truck,
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-white border-y border-brand-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/25 text-brand-accent text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Standar Keunggulan NusaLift</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-dark tracking-tight mb-4">
            Mengapa Memilih NusaLift Heavy Equipment?
          </h2>

          <p className="text-base text-brand-muted leading-relaxed">
            Komitmen kami adalah memastikan proyek Anda berjalan tanpa kendala melalui keandalan mesin tertinggi, layanan teknis proaktif, dan integritas bisnis yang kokoh.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {WHY_CHOOSE_US.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || Wrench;
            return (
              <div
                key={item.id}
                className="bg-brand-bg rounded-card p-6 sm:p-7 border border-brand-border/80 hover:border-brand-accent/50 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar with Number & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-btn bg-brand-dark text-brand-accent flex items-center justify-center group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300 shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-heading font-black text-gray-300 group-hover:text-brand-accent/40 transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Feature Title */}
                  <h3 className="text-lg font-heading font-bold text-brand-dark mb-1 group-hover:text-brand-accent transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs font-semibold text-brand-accent mb-3">
                    {item.titleId}
                  </p>

                  {/* Feature Description */}
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Badge at bottom */}
                <div className="pt-4 border-t border-brand-border flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-xs font-medium text-brand-dark">
                    {item.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Operational Assurance Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-card bg-brand-dark text-white border border-brand-dark-border flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <h4 className="text-xl font-heading font-bold text-white">
              Butuh spesifikasi kustom atau armada dalam volume besar?
            </h4>
            <p className="text-sm text-gray-300">
              Tim engineering rental kami siap memberikan kalkulasi teknis dan penjadwalan fleet management khusus proyek Anda.
            </p>
          </div>

          <a
            href="#contact"
            className="px-6 py-3 rounded-btn bg-brand-accent hover:bg-brand-accent-hover text-white text-sm font-semibold whitespace-nowrap transition-colors shadow-card"
          >
            Konsultasi Teknis Gratis
          </a>
        </div>

      </div>
    </section>
  );
}
