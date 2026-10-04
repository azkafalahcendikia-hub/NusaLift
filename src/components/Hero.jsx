import React from 'react';
import { ArrowRight, ChevronRight, CheckCircle2, Shield, Wrench, Clock, Award } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function Hero({ onExploreClick, onQuoteClick }) {
  return (
    <section id="home" className="relative pt-28 lg:pt-36 pb-16 lg:pb-24 overflow-hidden bg-brand-dark text-white border-b border-brand-dark-border">
      {/* Background Subtle Industrial Pattern */}
      <div className="absolute inset-0 opacity-10 industrial-pattern pointer-events-none" />

      {/* Ambient Glow */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-brand-accent/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">

            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-brand-accent/15 border border-brand-accent/30 text-brand-accent text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
              <span>{COMPANY_INFO.tagline}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white leading-[1.15] mb-6">
              Reliable Heavy Equipment for Every Project
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed mb-8 font-normal">
              {COMPANY_INFO.heroDescription}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-btn bg-brand-accent hover:bg-brand-accent-hover text-white text-base font-semibold shadow-card hover:shadow-accent-glow transition-all active:scale-98 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent focus:ring-offset-brand-dark"
              >
                <span>Explore Equipment</span>
                <ChevronRight className="w-5 h-5" />
              </button>

              <button
                onClick={onQuoteClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-btn bg-transparent hover:bg-white/10 text-white text-base font-semibold border border-gray-600 hover:border-gray-400 transition-all active:scale-98 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 text-brand-accent" />
              </button>
            </div>

            {/* Trust Highlights */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-gray-300 pt-6 border-t border-gray-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <span>Unit Siap Mobilisasi Nasional</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <span>Operator SIO & Mekanik Standby</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <span>Tarif B2B Kompetitif & Transparan</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">

              {/* Main Equipment Image with Card Frame */}
              <div className="relative rounded-card overflow-hidden border-2 border-brand-dark-border bg-brand-dark-surface shadow-2xl group">
                <div className="aspect-[4/3] w-full overflow-hidden bg-gray-900 relative">
                  <img
                    src="/images/hero-excavator.jpg"
                    alt="Armada Excavator NusaLift Heavy Equipment siap operasi di proyek"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1200&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />

                  {/* Floating Status Badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 bg-brand-dark/85 backdrop-blur-md border border-brand-dark-border text-white px-3 py-1.5 rounded-full text-xs font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Fleet Ready Stock: 180+ Unit</span>
                  </div>

                  {/* Overlaid specs on image bottom */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs uppercase tracking-wider text-amber-400 font-bold">Standard Heavy Duty Fleet</p>
                    <p className="text-sm font-semibold text-white">NusaLift EX Series & Mining Heavy Fleet</p>
                  </div>
                </div>

                {/* Sub-strip with quick certified tags */}
                <div className="p-4 bg-brand-dark-surface border-t border-brand-dark-border flex items-center justify-between text-xs text-gray-300">
                  <div className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-brand-accent" />
                    <span>ISO 9001 Certified Maintenance</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-emerald-400" />
                    <span>Garansi Respon Cepat</span>
                  </div>
                </div>
              </div>

              {/* Decorative Industrial Stripe Bar */}
              <div />
            </div>
          </div>
        </div>

        {/* Small Statistics Area */}
        <div className="mt-14 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {COMPANY_INFO.stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-brand-dark-surface/60 border border-brand-dark-border/80 rounded-card p-4 sm:p-5 transition-transform hover:-translate-y-1"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-brand-accent mb-1 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-white mb-0.5">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-400 line-clamp-1">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
