export const COMPANY_INFO = {
  name: 'NusaLift Heavy Equipment',
  shortName: 'NusaLift',
  tagline: 'Heavy Equipment, Ready for Your Project.',
  heroHeadline: 'Reliable Heavy Equipment for Every Project',
  heroDescription: 'Penyedia sewa alat berat modern berstandar industri tertinggi di Indonesia. Kami mendukung kelancaran proyek konstruksi, pertambangan, perkebunan, dan infrastruktur dengan unit prima serta dukungan teknis profesional 24/7.',
  aboutHeadline: 'Mitra Andal Pengadaan Alat Berat Skala Nasional',
  aboutDescription: 'Didirikan untuk menjawab tantangan logistik dan infrastruktur tanah air, NusaLift Heavy Equipment menyediakan armada alat berat terlengkap dengan perawatan bersertifikasi pabrikan. Kami memastikan setiap unit yang dikirim ke lapangan siap kerja maksimal tanpa kendala waktu (zero unexpected downtime). Dari proyek jalan tol di Jawa hingga pembukaan lahan pertambangan di Kalimantan, keandalan armada kami telah dipercaya oleh ratusan kontraktor nasional.',
  
  phone: '(021) 5890-4321',
  phoneDisplay: '+62 21 5890 4321',
  whatsapp: '+62 811-9876-5432',
  whatsappNumber: '6281198765432',
  email: 'quotation@nusalift.co.id',
  address: 'Kawasan Industri Pulogadung, Jl. Rawa Gelam IV No. 18, Jakarta Timur 13930, Indonesia',
  
  operatingHours: 'Senin - Sabtu: 07.00 - 18.00 WIB (Layanan Darurat & Support 24/7)',
  
  stats: [
    { value: '10+', label: 'Equipment Types', detail: 'Varian unit lengkap dari 15 ton hingga 60 ton' },
    { value: '500+', label: 'Projects Supported', detail: 'Sukses melayani proyek infrastruktur strategis' },
    { value: '24/7', label: 'Customer Support', detail: 'Mekanik standby dan respon darurat cepat' },
    { value: '99.2%', label: 'Uptime Reliability', detail: 'Inspeksi ketat 50 titik sebelum mobilisasi' }
  ]
};

export const WHY_CHOOSE_US = [
  {
    id: 'well-maintained',
    title: 'Well-Maintained Equipment',
    titleId: 'Unit Prima & Terawat',
    description: 'Seluruh armada menjalani jadwal servis rutin berbasis telemetri dan inspeksi 50-titik sebelum mobilisasi ke lokasi proyek Anda. Jaminan performa mesin tanpa kendala teknis.',
    iconName: 'Wrench',
    badge: 'Zero Downtime Target'
  },
  {
    id: 'flexible-period',
    title: 'Flexible Rental Period',
    titleId: 'Jangka Waktu Sewa Fleksibel',
    description: 'Skema rental yang menyesuaikan durasi proyek Anda: harian, bulanan, hingga sewa tahunan dengan tarif khusus korporasi dan opsi perpanjangan yang mudah.',
    iconName: 'CalendarCheck',
    badge: 'Harian / Bulanan / Kontrak'
  },
  {
    id: 'professional-support',
    title: 'Professional Support',
    titleId: 'Dukungan Mekanik & Operator SIO',
    description: 'Didukung teknisi bersertifikasi agen tunggal serta opsi operator berlisensi SIO resmi yang teruji dalam standar keselamatan kerja K3 tambang dan konstruksi.',
    iconName: 'ShieldCheck',
    badge: 'Mekanik Standby 24/7'
  },
  {
    id: 'fast-delivery',
    title: 'Fast Delivery',
    titleId: 'Mobilisasi Cepat Antarpulau',
    description: 'Didukung armada lowbed trailer milik sendiri dan jaringan depo logistik strategis di Jawa & Kalimantan untuk memastikan alat berat tiba tepat waktu di lokasi kerja.',
    iconName: 'Truck',
    badge: 'Depo Tersebar Luas'
  }
];

export const RENTAL_PROCESS = [
  {
    step: 1,
    title: 'Choose Equipment',
    titleId: 'Pilih Alat Sesuai Kebutuhan',
    description: 'Eksplorasi katalog armada kami, tentukan kapasitas, spesifikasi hidrolik, dan jumlah unit yang diperlukan untuk target proyek Anda.',
    highlight: 'Katalog Lengkap 10+ Varian'
  },
  {
    step: 2,
    title: 'Request a Quote',
    titleId: 'Ajukan Permintaan Penawaran',
    description: 'Kirimkan detail lokasi proyek, estimasi durasi sewa, dan tanggal mobilisasi melalui formulir online atau WhatsApp tim penawaran kami.',
    highlight: 'Respon Cepat < 30 Menit'
  },
  {
    step: 3,
    title: 'Confirm Rental',
    titleId: 'Konfirmasi & Verifikasi Kontrak',
    description: 'Tim kami menyiapkan surat penawaran resmi, kesepakatan terms, serta jadwal inspeksi bersama sebelum penandatanganan SPK.',
    highlight: 'Kontrak Transparan & Jelas'
  },
  {
    step: 4,
    title: 'Equipment Delivered',
    titleId: 'Unit Dimobilisasi ke Lokasi',
    description: 'Unit diangkut menggunakan lowbed terpercaya, dilakukan handover checklist di lapangan, dan alat langsung siap beroperasi di proyek.',
    highlight: 'Tepat Waktu & Bergaransi'
  }
];

export const SERVICE_AREAS = [
  {
    city: 'Jakarta',
    province: 'DKI Jakarta & Banten',
    depotName: 'Central Depot Jabodetabek',
    address: 'Kawasan Industri Pulogadung, Jakarta Timur',
    unitsAvailable: '45+ Unit Siap Kerja',
    specialties: 'Infrastruktur Jalan Tol, Gedung Bertingkat, Pematangan Kawasan',
    phoneDirect: '+62 21 5890 4321',
    isHQ: true
  },
  {
    city: 'Surabaya',
    province: 'Jawa Timur',
    depotName: 'Jawa Timur Logistics Hub',
    address: 'Kawasan Industri Rungkut Industri Raya, Surabaya',
    unitsAvailable: '30+ Unit Siap Kerja',
    specialties: 'Konstruksi Pelabuhan, Pabrik Industri, Perluasan Bandara',
    phoneDirect: '+62 31 8432 9901',
    isHQ: false
  },
  {
    city: 'Balikpapan',
    province: 'Kalimantan Timur',
    depotName: 'Balikpapan IKN Staging Depot',
    address: 'Jl. Mulawarman, Batakan, Balikpapan Timur',
    unitsAvailable: '50+ Unit Siap Kerja',
    specialties: 'Pembangunan Koridor IKN, Dermaga Logistik, Hauling Tambang',
    phoneDirect: '+62 542 765 890',
    isHQ: false
  },
  {
    city: 'Samarinda',
    province: 'Kalimantan Timur',
    depotName: 'Mahakam Mining & Fleet Depot',
    address: 'Jl. Poros Samarinda - Palaran, Kota Samarinda',
    unitsAvailable: '35+ Unit Siap Kerja',
    specialties: 'Perkebunan Kelapa Sawit, Jetty Batubara, Cut & Fill Perbukitan',
    phoneDirect: '+62 541 688 231',
    isHQ: false
  },
  {
    city: 'Pontianak',
    province: 'Kalimantan Barat',
    depotName: 'Kalbar Agro & Infra Depot',
    address: 'Jl. Khatulistiwa KM 8, Siantan, Pontianak',
    unitsAvailable: '25+ Unit Siap Kerja',
    specialties: 'Pematangan Lahan Gambut, Jembatan Antarwilayah, Pabrik PKS',
    phoneDirect: '+62 561 742 559',
    isHQ: false
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Ir. Bambang Triharto',
    role: 'Project Director',
    company: 'PT Adhi Megah Konstruksi',
    project: 'Proyek Tol Ruas Jawa Barat',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&h=160&q=80',
    comment: 'Kami menyewa 6 unit excavator EX-210 dan 3 motor grader untuk penyiapan subgrade jalan tol. Kondisi mesin sangat prima dengan response time mekanik luar biasa saat maintenance 250 jam. Sangat direkomendasikan untuk proyek dengan deadline ketat.',
    rating: 5,
    equipmentRented: 'Excavator EX-210 & Motor Grader MG-140'
  },
  {
    id: 2,
    name: 'Hendrawan Kusuma, S.T.',
    role: 'Operational General Manager',
    company: 'PT Borneo Mineral Mandiri',
    project: 'Site Hauling & Stockpile Balikpapan',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80',
    comment: 'Fleksibilitas NusaLift dalam menyediakan dump truck 30 ton dan bulldozer untuk hauling overburden sangat membantu efisiensi operasional kami di Kalimantan Timur. Komunikasi cepat dan penagihan transparan tanpa hidden cost.',
    rating: 5,
    equipmentRented: 'Dump Truck DT-420 & Bulldozer BD-165'
  },
  {
    id: 3,
    name: 'Siti Rahmawati, S.T., M.Eng.',
    role: 'Head of Infrastructure Division',
    company: 'PT Nusantara Citra Engineering',
    project: 'Pembangunan Terminal Logistik Pelabuhan',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&h=160&q=80',
    comment: 'Crane 55 Ton dari NusaLift memiliki sertifikasi keselamatan K3 dan Depnaker lengkap yang lolos audit safety klien multinasional kami tanpa revisi. Rigger dan peralatannya sangat profesional.',
    rating: 5,
    equipmentRented: 'Rough Terrain Crane CR-550'
  }
];
