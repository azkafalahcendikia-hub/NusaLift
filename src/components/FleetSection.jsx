import React, { useState } from 'react';
import { ArrowRight, Eye, Gauge, Shield, Sparkles, Filter } from 'lucide-react';
import { EQUIPMENT_CATEGORIES, EQUIPMENT_DATA } from '../data/equipmentData';

export default function FleetSection({ onSelectDetail, onRentEquipment }) {
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const filteredEquipment = selectedCategory === 'Semua'
    ? EQUIPMENT_DATA
    : EQUIPMENT_DATA.filter((item) => item.category === selectedCategory);

  return (
    <section id="fleet" className="py-20 lg:py-28 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/25 text-brand-accent text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Katalog Armada Siap Kerja</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-dark tracking-tight mb-4">
            Armada Alat Berat Berkualitas Tinggi
          </h2>
          
          <p className="text-base text-brand-muted leading-relaxed">
            Pilihan terlengkap armada alat berat dengan standar pemeliharaan pabrikan, sertifikasi keselamatan K3 aktif, dan jaminan kesiapan operasional prima di lokasi proyek Anda.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12">
          {EQUIPMENT_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 sm:px-5 py-2.5 rounded-btn text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-accent ${
                  isActive
                    ? 'bg-brand-dark text-white shadow-md ring-2 ring-brand-accent/50'
                    : 'bg-white text-gray-700 border border-brand-border hover:border-brand-accent hover:text-brand-accent shadow-sm'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Equipment Cards Grid: 3 cols desktop, 2 cols tablet, 1 col mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredEquipment.map((equipment) => (
            <article
              key={equipment.id}
              className="bg-white rounded-card overflow-hidden border border-brand-border shadow-card hover:shadow-card-hover hover:border-brand-accent/40 transition-all duration-300 flex flex-col group"
            >
              {/* Equipment Image & Badge Header */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  src={equipment.image}
                  alt={`Sewa ${equipment.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = equipment.fallbackImage;
                  }}
                />

                {/* Top Badge: Category */}
                <div className="absolute top-3 left-3 bg-brand-dark/90 backdrop-blur-sm text-white px-2.5 py-1 rounded text-xs font-semibold tracking-wide border border-brand-dark-border">
                  {equipment.category}
                </div>

                {/* Tag pill */}
                {equipment.tag && (
                  <div className="absolute top-3 right-3 bg-brand-accent text-white px-2.5 py-1 rounded text-xs font-bold tracking-wide shadow-sm">
                    {equipment.tag}
                  </div>
                )}
              </div>

              {/* Equipment Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-heading font-bold text-brand-dark group-hover:text-brand-accent transition-colors leading-tight mb-2">
                    {equipment.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-muted line-clamp-2 leading-relaxed mb-4">
                    {equipment.shortDescription}
                  </p>

                  {/* Main Specification Highlight Box */}
                  <div className="bg-brand-bg rounded-lg p-3 border border-brand-border/80 mb-5 flex items-start gap-2.5">
                    <Gauge className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider block">
                        Spesifikasi Utama
                      </span>
                      <p className="text-xs font-semibold text-brand-dark">
                        {equipment.mainSpec}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Price & Action Buttons */}
                <div className="pt-4 border-t border-brand-border">
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      <span className="text-[11px] text-gray-500 uppercase tracking-wider font-semibold block">
                        Tarif Sewa Mulai
                      </span>
                      <span className="text-xl font-heading font-extrabold text-brand-accent">
                        {equipment.pricePerDay}
                      </span>
                    </div>
                    <span className="text-xs font-medium text-gray-500">/ hari</span>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      onClick={() => onSelectDetail(equipment)}
                      className="px-3 py-2.5 rounded-btn bg-gray-100 hover:bg-gray-200 text-brand-dark text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    >
                      <Eye className="w-3.5 h-3.5 text-gray-600" />
                      <span>Lihat Detail</span>
                    </button>

                    <button
                      onClick={() => onRentEquipment(equipment.name)}
                      className="px-3 py-2.5 rounded-btn bg-brand-accent hover:bg-brand-accent-hover text-white text-xs sm:text-sm font-semibold transition-all shadow-sm flex items-center justify-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-brand-accent"
                    >
                      <span>Sewa Sekarang</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

        {/* Empty state safeguard */}
        {filteredEquipment.length === 0 && (
          <div className="text-center py-16 bg-white rounded-card border border-brand-border p-8">
            <p className="text-base text-gray-600 mb-4">
              Tidak ada unit untuk kategori "{selectedCategory}".
            </p>
            <button
              onClick={() => setSelectedCategory('Semua')}
              className="px-5 py-2 rounded-btn bg-brand-accent text-white text-sm font-semibold"
            >
              Lihat Semua Armada
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
