import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, Linkedin, Facebook, Instagram, Youtube, ExternalLink } from 'lucide-react';
import { COMPANY_INFO, SERVICE_AREAS } from '../data/companyData';
import { EQUIPMENT_CATEGORIES } from '../data/equipmentData';

export default function Footer({ onCategoryClick }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 text-gray-400 text-sm border-t border-brand-dark-border">
      {/* Upper Footer: Branding & Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Col 1: Logo & Company Desc */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-btn bg-brand-accent flex items-center justify-center text-brand-dark font-heading font-black text-xl shadow-card">
                NL
              </div>
              <div>
                <span className="font-heading font-bold text-2xl text-white tracking-tight">
                  Nusa<span className="text-brand-accent">Lift</span>
                </span>
                <span className="text-[10px] ml-1.5 uppercase font-bold tracking-widest bg-brand-dark-border text-amber-400 px-1.5 py-0.5 rounded">
                  HEAVY
                </span>
                <p className="text-[11px] text-gray-500 tracking-wider uppercase font-medium">
                  Heavy Equipment Rental
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
              Penyedia solusi sewa alat berat andal dan terpercaya untuk mendukung percepatan proyek konstruksi, pertambangan, dan infrastruktur strategis di seluruh Indonesia.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-btn bg-brand-dark-surface hover:bg-brand-accent hover:text-white text-gray-400 flex items-center justify-center transition-colors"
                aria-label="LinkedIn NusaLift"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-btn bg-brand-dark-surface hover:bg-brand-accent hover:text-white text-gray-400 flex items-center justify-center transition-colors"
                aria-label="Facebook NusaLift"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-btn bg-brand-dark-surface hover:bg-brand-accent hover:text-white text-gray-400 flex items-center justify-center transition-colors"
                aria-label="Instagram NusaLift"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-btn bg-brand-dark-surface hover:bg-brand-accent hover:text-white text-gray-400 flex items-center justify-center transition-colors"
                aria-label="YouTube NusaLift"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider mb-4">
              Navigasi
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#home" className="hover:text-brand-accent transition-colors">Home</a></li>
              <li><a href="#fleet" className="hover:text-brand-accent transition-colors">Armada Alat Berat</a></li>
              <li><a href="#services" className="hover:text-brand-accent transition-colors">Keunggulan Layanan</a></li>
              <li><a href="#process" className="hover:text-brand-accent transition-colors">Alur Sewa (Process)</a></li>
              <li><a href="#about" className="hover:text-brand-accent transition-colors">Tentang Perusahaan</a></li>
              <li><a href="#coverage" className="hover:text-brand-accent transition-colors">Cakupan Wilayah Depo</a></li>
              <li><a href="#contact" className="hover:text-brand-accent transition-colors">Request Quote</a></li>
            </ul>
          </div>

          {/* Col 3: Equipment Categories */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider mb-4">
              Kategori Alat Berat
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {EQUIPMENT_CATEGORIES.filter(c => c !== 'Semua').map((category) => (
                <li key={category}>
                  <a
                    href="#fleet"
                    onClick={(e) => {
                      e.preventDefault();
                      const fleetSec = document.getElementById('fleet');
                      if (fleetSec) fleetSec.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-brand-accent transition-colors flex items-center justify-between group"
                  >
                    <span>Sewa {category}</span>
                    <span className="text-[10px] text-gray-600 group-hover:text-brand-accent">&rarr;</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Depots */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider mb-4">
              Kontak Kantor Pusat
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <span>{COMPANY_INFO.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </div>

              <div className="pt-3 border-t border-gray-800 text-[11px] text-gray-500">
                <span className="block font-semibold text-gray-400 mb-1">Depo Operasional:</span>
                Jakarta • Surabaya • Balikpapan • Samarinda • Pontianak
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright & Back to Top */}
      <div className="border-t border-brand-dark-border/80 bg-black/60 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            &copy; {new Date().getFullYear()} NusaLift Heavy Equipment. Fictional Company Portfolio Showcase. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden sm:inline">Professional Industrial Equipment Rental</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-btn bg-brand-dark-surface hover:bg-brand-dark hover:text-white transition-colors border border-brand-dark-border"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-brand-accent" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
