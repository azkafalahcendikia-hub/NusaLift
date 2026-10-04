import React from 'react';
import { ShieldCheck, HardHat, Award, CheckCircle2, TrendingUp, Users } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Company Story & Values */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/25 text-brand-accent text-xs font-bold uppercase tracking-wider mb-4">
              <HardHat className="w-3.5 h-3.5" />
              <span>Tentang NusaLift Heavy Equipment</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-dark tracking-tight mb-6">
              {COMPANY_INFO.aboutHeadline}
            </h2>

            <p className="text-sm sm:text-base text-brand-muted leading-relaxed mb-6">
              {COMPANY_INFO.aboutDescription}
            </p>

            {/* Strategic Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-lg bg-brand-bg border border-brand-border">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <ShieldCheck className="w-5 h-5 text-brand-accent" />
                  <span className="font-heading font-bold text-sm text-brand-dark">K3 & Keselamatan Kerja</span>
                </div>
                <p className="text-xs text-brand-muted">
                  Semua unit lulus uji kelayakan SILO/Depnaker dan operator mengantongi SIO resmi.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-brand-bg border border-brand-border">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <Award className="w-5 h-5 text-brand-accent" />
                  <span className="font-heading font-bold text-sm text-brand-dark">Transparansi Kontrak</span>
                </div>
                <p className="text-xs text-brand-muted">
                  Tarif transparan, terms perjanjian tegas, tanpa biaya siluman di tengah pekerjaan.
                </p>
              </div>
            </div>

            {/* Bullet Proof Points */}
            <div className="space-y-2.5 border-t border-brand-border pt-6">
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Teknisi dan suku cadang orisinal ready stock di setiap depo</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Monitoring telemetri alat berat 24 jam real-time</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Penggantian unit cadangan jika terjadi kendala mayoritas lapangan</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase & Stats Panel */}
          <div className="lg:col-span-6">
            <div className="relative">

              {/* Main Image */}
              <div className="rounded-card overflow-hidden border border-brand-border shadow-2xl relative aspect-[4/3] bg-gray-900 group">
                <img
                  src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1000&q=80"
                  alt="Teknisi NusaLift melakukan inspeksi presisi alat berat di workshop"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
                    Quality & Maintenance Assurance
                  </span>
                  <p className="text-sm font-medium text-gray-200">
                    Standar inspeksi berkala di central workshop kami sebelum unit dikirim ke proyek mitra.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
