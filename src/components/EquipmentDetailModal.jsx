import React, { useEffect } from 'react';
import { X, Check, Shield, Wrench, Clock, FileText, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

export default function EquipmentDetailModal({ equipment, onClose, onRentNow }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!equipment) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-white rounded-card shadow-2xl border border-gray-200 overflow-hidden z-10 my-8">
        
        {/* Header bar */}
        <div className="bg-brand-dark text-white px-6 py-4 flex items-center justify-between border-b border-brand-dark-border">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider bg-brand-accent text-white">
              {equipment.category}
            </span>
            <span className="text-xs text-gray-400">Unit ID: {equipment.id.toUpperCase()}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-accent"
            aria-label="Tutup Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {/* Main Title & Image Header */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative rounded-lg overflow-hidden bg-gray-100 aspect-[4/3] border border-gray-200">
              <img
                src={equipment.image}
                alt={equipment.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = equipment.fallbackImage;
                }}
              />
              <div className="absolute top-3 left-3 bg-brand-dark/80 backdrop-blur text-white text-[11px] font-semibold px-2.5 py-1 rounded">
                {equipment.tag}
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-heading font-bold text-brand-dark leading-snug mb-2">
                  {equipment.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {equipment.shortDescription}
                </p>
              </div>

              {/* Pricing Box */}
              <div className="bg-brand-bg rounded-lg p-4 border border-brand-border">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1">
                  Tarif Sewa Dasar Mulai Dari
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-heading font-extrabold text-brand-accent">
                    {equipment.pricePerDay}
                  </span>
                  <span className="text-sm font-medium text-gray-600">/ hari</span>
                </div>
                <p className="text-[11px] text-gray-500 mt-1">
                  * Belum termasuk mob-demob & solar (opsional include operator SIO)
                </p>
              </div>
            </div>
          </div>

          {/* Technical Specifications Grid */}
          <div className="mb-6">
            <h4 className="text-sm font-heading font-bold uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-2 mb-3 flex items-center gap-2">
              <Wrench className="w-4 h-4 text-brand-accent" />
              <span>Spesifikasi Teknis Lengkap</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="flex justify-between py-1.5 px-3 bg-gray-50 rounded border border-gray-100">
                <span className="text-gray-500">Operating Weight</span>
                <span className="font-semibold text-brand-dark">{equipment.specs.operatingWeight}</span>
              </div>
              <div className="flex justify-between py-1.5 px-3 bg-gray-50 rounded border border-gray-100">
                <span className="text-gray-500">Engine Output</span>
                <span className="font-semibold text-brand-dark">{equipment.specs.enginePower}</span>
              </div>
              <div className="flex justify-between py-1.5 px-3 bg-gray-50 rounded border border-gray-100">
                <span className="text-gray-500">Bucket / Kapasitas</span>
                <span className="font-semibold text-brand-dark">{equipment.specs.bucketCapacity}</span>
              </div>
              <div className="flex justify-between py-1.5 px-3 bg-gray-50 rounded border border-gray-100">
                <span className="text-gray-500">Jangkauan Kerja / Kedalaman</span>
                <span className="font-semibold text-brand-dark">{equipment.specs.maxDiggingDepth}</span>
              </div>
              <div className="flex justify-between py-1.5 px-3 bg-gray-50 rounded border border-gray-100">
                <span className="text-gray-500">Kapasitas Tangki BBM</span>
                <span className="font-semibold text-brand-dark">{equipment.specs.fuelCapacity}</span>
              </div>
              <div className="flex justify-between py-1.5 px-3 bg-gray-50 rounded border border-gray-100">
                <span className="text-gray-500">Standar Emisi Mesin</span>
                <span className="font-semibold text-brand-dark">{equipment.specs.emissionStandard}</span>
              </div>
            </div>
          </div>

          {/* Applications & Inclusions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-gray-900 mb-2 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-brand-accent" />
                <span>Rekomendasi Aplikasi Proyek</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-gray-700">
                {equipment.applications.map((app, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-gray-900 mb-2 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-brand-accent" />
                <span>Paket Sewa & Jaminan NusaLift</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-gray-700">
                {equipment.includes.map((inc, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent mt-0.5 flex-shrink-0" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-gray-500 flex items-center gap-2">
            <Clock className="w-4 h-4 text-brand-accent" />
            <span>Unit tersedia untuk sewa harian, bulanan & kontrak tahunan</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-200 rounded-btn transition-colors w-1/2 sm:w-auto text-center"
            >
              Tutup
            </button>
            <button
              onClick={() => {
                onClose();
                onRentNow(equipment.name);
              }}
              className="px-5 py-2.5 text-sm font-semibold bg-brand-accent hover:bg-brand-accent-hover text-white rounded-btn shadow-card transition-all flex items-center justify-center gap-2 w-1/2 sm:w-auto"
            >
              <span>Sewa Sekarang</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
