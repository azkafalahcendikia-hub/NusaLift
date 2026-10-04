import React, { useState, useEffect } from 'react';
import { Send, Phone, Mail, MessageSquare, Clock, MapPin, CheckCircle2, Shield, AlertCircle } from 'lucide-react';
import { COMPANY_INFO, SERVICE_AREAS } from '../data/companyData';
import { EQUIPMENT_DATA } from '../data/equipmentData';

export default function ContactSection({ preselectedEquipment, preselectedLocation }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    equipmentNeeded: '',
    rentalDuration: '1 Bulan',
    projectLocation: 'Jakarta',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Update form if preselected equipment or location changes
  useEffect(() => {
    if (preselectedEquipment) {
      setFormData(prev => ({ ...prev, equipmentNeeded: preselectedEquipment }));
    }
  }, [preselectedEquipment]);

  useEffect(() => {
    if (preselectedLocation) {
      setFormData(prev => ({ ...prev, projectLocation: preselectedLocation }));
    }
  }, [preselectedLocation]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.equipmentNeeded) {
      setErrorMsg('Mohon lengkapi Nama, Nomor Telepon/WhatsApp, dan Pilihan Alat Berat.');
      return;
    }

    setSubmitting(true);
    // Simulate high-speed quotation processing
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      company: '',
      phone: '',
      equipmentNeeded: '',
      rentalDuration: '1 Bulan',
      projectLocation: 'Jakarta',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-brand-dark text-white relative border-t border-brand-dark-border">
      {/* Subtle industrial background pattern */}
      <div className="absolute inset-0 opacity-10 industrial-pattern pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent text-xs font-bold uppercase tracking-wider mb-3">
            <Send className="w-3.5 h-3.5" />
            <span>Permintaan Penawaran Cepat</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight mb-4">
            Dapatkan Penawaran Harga Sewa Resmi
          </h2>

          <p className="text-base text-gray-300 leading-relaxed">
            Isi formulir kebutuhan proyek Anda di bawah ini. Tim fleet consultant NusaLift akan mengirimkan kalkulasi penawaran komprehensif dalam waktu kurang dari 30 menit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Contact Details & SLA Guarantee */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-heading font-bold text-white mb-6">
                Hubungi Fleet Consultant Kami
              </h3>

              <div className="space-y-4 mb-8">
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Halo%20NusaLift,%20saya%20ingin%20konsultasi%20sewa%20alat%20berat`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-card bg-brand-dark-surface border border-brand-dark-border hover:border-brand-accent transition-colors group"
                >
                  <div className="w-10 h-10 rounded-btn bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-gray-400 block mb-0.5">
                      WhatsApp Resmi (Respon Cepat)
                    </span>
                    <span className="text-base font-bold text-white group-hover:text-brand-accent transition-colors">
                      {COMPANY_INFO.whatsapp}
                    </span>
                    <span className="text-xs text-emerald-400 block mt-0.5">Online & Siap Melayani 24/7</span>
                  </div>
                </a>

                {/* Telepon Kantor */}
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-start gap-4 p-4 rounded-card bg-brand-dark-surface border border-brand-dark-border hover:border-brand-accent transition-colors group"
                >
                  <div className="w-10 h-10 rounded-btn bg-brand-accent/20 text-brand-accent flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-gray-400 block mb-0.5">
                      Hotline Kantor Pusat
                    </span>
                    <span className="text-base font-bold text-white group-hover:text-brand-accent transition-colors">
                      {COMPANY_INFO.phoneDisplay}
                    </span>
                    <span className="text-xs text-gray-400 block mt-0.5">{COMPANY_INFO.operatingHours}</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-start gap-4 p-4 rounded-card bg-brand-dark-surface border border-brand-dark-border hover:border-brand-accent transition-colors group"
                >
                  <div className="w-10 h-10 rounded-btn bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-gray-400 block mb-0.5">
                      Email Penawaran Resmi
                    </span>
                    <span className="text-base font-bold text-white group-hover:text-brand-accent transition-colors">
                      {COMPANY_INFO.email}
                    </span>
                    <span className="text-xs text-gray-400 block mt-0.5">Pengiriman dokumen tender & PO resmi</span>
                  </div>
                </a>
              </div>

              {/* Office Address Card */}
              <div className="p-4 rounded-card bg-brand-dark-surface/60 border border-brand-dark-border">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                  <div className="text-xs text-gray-300 leading-relaxed">
                    <span className="font-bold text-white block mb-1">Pusat Operasional & Central Depot:</span>
                    {COMPANY_INFO.address}
                  </div>
                </div>
              </div>
            </div>

            {/* SLA Trust Badge */}
            <div className="mt-8 pt-6 border-t border-brand-dark-border flex items-center gap-3">
              <Shield className="w-6 h-6 text-brand-accent flex-shrink-0" />
              <p className="text-xs text-gray-400">
                Data perusahaan dan kebutuhan tender Anda dijamin kerahasiaannya di bawah standar NDA profesional NusaLift.
              </p>
            </div>
          </div>

          {/* Right Column: Quotation Form */}
          <div className="lg:col-span-7">
            <div className="bg-white text-brand-dark rounded-card p-6 sm:p-8 shadow-2xl border border-gray-200 relative">
              
              {submitted ? (
                /* Success Feedback State */
                <div className="py-8 text-center animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <h3 className="text-2xl font-heading font-extrabold text-brand-dark mb-2">
                    Permintaan Penawaran Berhasil Dikirim!
                  </h3>

                  <p className="text-sm text-gray-600 max-w-md mx-auto mb-6">
                    Terima kasih, <strong>{formData.name}</strong> ({formData.company || 'Perorangan'}). Tim komersial NusaLift sedang menyusun kalkulasi sewa untuk unit <strong>{formData.equipmentNeeded}</strong> di lokasi <strong>{formData.projectLocation}</strong>.
                  </p>

                  <div className="p-4 bg-brand-bg rounded-lg border border-brand-border text-left max-w-md mx-auto mb-6 text-xs space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Estimasi Durasi:</span>
                      <span className="font-semibold text-brand-dark">{formData.rentalDuration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Kontak Follow-Up:</span>
                      <span className="font-semibold text-brand-dark">{formData.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Estimasi Waktu Respon:</span>
                      <span className="font-semibold text-emerald-600">&lt; 30 Menit (Jam Kerja)</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleReset}
                      className="px-5 py-2.5 rounded-btn bg-gray-200 hover:bg-gray-300 text-brand-dark text-xs sm:text-sm font-semibold transition-colors w-full sm:w-auto"
                    >
                      Kirim Permintaan Lain
                    </button>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Halo%20NusaLift,%20saya%20sudah%20kirimkan%20form%20sewa%20untuk%20${encodeURIComponent(formData.equipmentNeeded)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-btn bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2 w-full sm:w-auto shadow-sm"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat WhatsApp Sekarang</span>
                    </a>
                  </div>
                </div>
              ) : (
                /* Form Input State */
                <form onSubmit={handleSubmit} noValidate>
                  <div className="border-b border-gray-200 pb-4 mb-6">
                    <h3 className="text-xl font-heading font-bold text-brand-dark">
                      Formulir Permintaan Penawaran Sewa
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Silakan lengkapi informasi berikut untuk mempermudah perhitungan mobilisasi dan ketersediaan unit.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 flex items-center gap-2 text-xs text-red-700">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Nama Lengkap <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Contoh: Budi Santoso"
                        required
                        className="w-full px-3.5 py-2.5 rounded-btn border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Nama Perusahaan / Kontraktor
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Contoh: PT Bangun Persada"
                        className="w-full px-3.5 py-2.5 rounded-btn border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {/* Phone / WhatsApp */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Nomor Telepon / WhatsApp <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Contoh: 0812-3456-7890"
                        required
                        className="w-full px-3.5 py-2.5 rounded-btn border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all"
                      />
                    </div>

                    {/* Equipment Needed */}
                    <div>
                      <label htmlFor="equipmentNeeded" className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Alat Berat yang Dibutuhkan <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="equipmentNeeded"
                        name="equipmentNeeded"
                        value={formData.equipmentNeeded}
                        onChange={handleChange}
                        required
                        className="w-full px-3.5 py-2.5 rounded-btn border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all bg-white"
                      >
                        <option value="">-- Pilih Jenis / Tipe Unit --</option>
                        {EQUIPMENT_DATA.map((eq) => (
                          <option key={eq.id} value={eq.name}>
                            {eq.name} ({eq.category})
                          </option>
                        ))}
                        <option value="Paket Campuran / Armada Lengkap">Paket Campuran / Multiple Units</option>
                        <option value="Lainnya / Konsultasi Khusus">Lainnya / Konsultasi Khusus</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {/* Rental Duration */}
                    <div>
                      <label htmlFor="rentalDuration" className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Estimasi Durasi Sewa
                      </label>
                      <select
                        id="rentalDuration"
                        name="rentalDuration"
                        value={formData.rentalDuration}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-btn border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all bg-white"
                      >
                        <option value="Harian (3 - 14 Hari)">Harian (3 - 14 Hari)</option>
                        <option value="1 Bulan">1 Bulan</option>
                        <option value="3 Bulan">3 Bulan</option>
                        <option value="6 Bulan">6 Bulan</option>
                        <option value="1 Tahun / Kontrak Panjang">1 Tahun / Kontrak Panjang</option>
                      </select>
                    </div>

                    {/* Project Location */}
                    <div>
                      <label htmlFor="projectLocation" className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Lokasi Proyek
                      </label>
                      <select
                        id="projectLocation"
                        name="projectLocation"
                        value={formData.projectLocation}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-btn border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all bg-white"
                      >
                        {SERVICE_AREAS.map(area => (
                          <option key={area.city} value={area.city}>
                            {area.city} ({area.province})
                          </option>
                        ))}
                        <option value="Wilayah Lain di Luar Depo">Wilayah Lain di Luar Depo</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Catatan / Spesifikasi Khusus (Opsional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Sebutkan detail kebutuhan seperti: butuh operator bersertifikat SIO, tanggal target mobilisasi, atau kondisi medan proyek..."
                      className="w-full px-3.5 py-2.5 rounded-btn border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 px-6 rounded-btn bg-brand-accent hover:bg-brand-accent-hover text-white text-base font-semibold shadow-card hover:shadow-accent-glow transition-all active:scale-98 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent"
                  >
                    {submitting ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Memproses Permintaan Penawaran...</span>
                      </>
                    ) : (
                      <>
                        <span>Request a Quote</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-gray-500 text-center mt-3">
                    Bebas biaya konsultasi. Penawaran resmi akan dikirim via WhatsApp & Email.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
