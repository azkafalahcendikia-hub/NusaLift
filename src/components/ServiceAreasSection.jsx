import React from 'react';
import { MapPin, Phone, Building2, Layers, CheckCircle2 } from 'lucide-react';
import { SERVICE_AREAS } from '../data/companyData';

export default function ServiceAreasSection({ onSelectLocation }) {
  return (
    <section id="coverage" className="py-20 lg:py-28 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/25 text-brand-accent text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Jaringan Logistik Nasional</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-dark tracking-tight mb-4">
            Service Coverage & Operational Areas
          </h2>

          <p className="text-base text-brand-muted leading-relaxed">
            Didukung jaringan depo logistik dan pangkalan alat berat strategis di pusat industri dan infrastruktur utama Indonesia untuk memangkas waktu mobilisasi armada.
          </p>
        </div>

        {/* Location Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_AREAS.map((area) => (
            <div
              key={area.city}
              className="bg-white rounded-card p-6 border border-brand-border shadow-card hover:shadow-card-hover hover:border-brand-accent/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header with City & HQ Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-btn bg-brand-accent/15 text-brand-accent flex items-center justify-center font-bold">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold text-brand-dark group-hover:text-brand-accent transition-colors">
                        {area.city}
                      </h3>
                      <span className="text-xs text-brand-muted">{area.province}</span>
                    </div>
                  </div>

                  {area.isHQ ? (
                    <span className="px-2.5 py-1 rounded-full bg-brand-dark text-amber-400 text-[11px] font-bold tracking-wider uppercase">
                      Headquarters
                    </span>
                  ) : (
                    <span className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 text-[11px] font-medium">
                      Regional Depot
                    </span>
                  )}
                </div>

                {/* Depot Details */}
                <div className="space-y-3 mb-6">
                  <div className="bg-brand-bg p-3 rounded-lg border border-brand-border/60">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 mb-0.5">
                      <Building2 className="w-3.5 h-3.5 text-brand-accent" />
                      <span>{area.depotName}</span>
                    </div>
                    <p className="text-xs text-brand-dark font-medium leading-relaxed">
                      {area.address}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs py-1 px-1">
                    <span className="text-gray-500">Ketersediaan Unit:</span>
                    <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {area.unitsAvailable}
                    </span>
                  </div>

                  <div className="text-xs text-gray-600">
                    <span className="text-gray-500 block mb-1">Spesialisasi Proyek Wilayah:</span>
                    <span className="font-medium text-brand-dark">{area.specialties}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer: Fast mobilization CTA */}
              <div className="pt-4 border-t border-brand-border flex items-center justify-between">
                <a
                  href={`tel:${area.phoneDirect}`}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-muted hover:text-brand-dark"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-accent" />
                  <span>{area.phoneDirect}</span>
                </a>

                <button
                  onClick={() => onSelectLocation(area.city)}
                  className="text-xs font-semibold text-brand-accent hover:text-brand-accent-hover hover:underline"
                >
                  Sewa di {area.city} &rarr;
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Coverage Note */}
        <div className="mt-12 text-center text-xs text-brand-muted">
          <p>
            * Membutuhkan mobilisasi ke luar area depo di atas (seperti Sumatera, Sulawesi, atau Papua)?{' '}
            <a href="#contact" className="text-brand-accent font-semibold underline">
              Hubungi tim logistik khusus kami
            </a>{' '}
            untuk perhitungan landing craft tank (LCT) dan lowbed lintas pulau.
          </p>
        </div>

      </div>
    </section>
  );
}
