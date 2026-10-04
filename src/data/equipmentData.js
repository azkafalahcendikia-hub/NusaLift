export const EQUIPMENT_CATEGORIES = [
  'Semua',
  'Excavator',
  'Bulldozer',
  'Wheel Loader',
  'Motor Grader',
  'Dump Truck',
  'Crane'
];

export const EQUIPMENT_DATA = [
  {
    id: 'excavator-ex210',
    name: 'NusaLift EX-210 Hydraulic Excavator',
    category: 'Excavator',
    tag: 'Paling Populer',
    image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1000&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb18f15f6?auto=format&fit=crop&w=1000&q=80',
    shortDescription: 'Excavator kelas 20-ton yang sangat fleksibel dan bertenaga tinggi, ideal untuk galian fondasi, pematangan lahan, dan proyek infrastruktur jalan.',
    mainSpec: 'Operating Weight: 21.5 Ton | Bucket: 1.0 m³ | Daya: 160 HP',
    pricePerDay: 'Rp 3.850.000',
    priceNum: 3850000,
    specs: {
      operatingWeight: '21.500 kg',
      enginePower: '160 HP / 2.000 rpm',
      bucketCapacity: '1,0 m³ Heavy Duty',
      maxDiggingDepth: '6.650 mm',
      maxReach: '9.860 mm',
      fuelCapacity: '400 Liter',
      emissionStandard: 'Tier-3 / Euro III Direct Injection',
      transmission: 'Hydrostatic 2-speed'
    },
    applications: [
      'Penggalian fondasi gedung & jembatan',
      'Pematangan lahan perumahan & industri',
      'Pembersihan kanal & drainase perkotaan',
      'Material handling konstruksi'
    ],
    includes: [
      'Operator bersertifikasi SIO aktif (opsional)',
      'Free preventive maintenance berkala',
      'Asuransi peralatan konstruksi',
      'Dukungan mobile mechanic 24/7'
    ]
  },
  {
    id: 'bulldozer-bd165',
    name: 'NusaLift BD-165 Crawler Dozer',
    category: 'Bulldozer',
    tag: 'Heavy Duty',
    image: 'https://images.unsplash.com/photo-1579487785973-74d2ca7abdd5?auto=format&fit=crop&w=1000&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1000&q=80',
    shortDescription: 'Bulldozer perayap tangguh dengan semi-U blade berkapasitas dorong besar, dirancang khusus untuk land clearing perkebunan dan perataan quarry.',
    mainSpec: 'Operating Weight: 17.8 Ton | Blade: 4.5 m³ | Daya: 178 HP',
    pricePerDay: 'Rp 4.400.000',
    priceNum: 4400000,
    specs: {
      operatingWeight: '17.800 kg',
      enginePower: '178 HP Turbocharged',
      bucketCapacity: 'Blade Capacity: 4,5 m³ Semi-U',
      maxDiggingDepth: 'Ground Clearance: 405 mm',
      maxReach: 'Shoe Width: 510 mm Track',
      fuelCapacity: '350 Liter',
      emissionStandard: 'Heavy Industrial Stage III',
      transmission: 'Powershift 3-Forward / 3-Reverse'
    },
    applications: [
      'Land clearing area perkebunan sawit & HTI',
      'Penimbunan dan perataan material tanah urug',
      'Pembuatan jalan akses proyek tambang',
      'Stripping top soil pekerjaan cut & fill'
    ],
    includes: [
      'Kelengkapan Single Shank Ripper belakang',
      'Penggantian spare part cepat di lokasi kerja',
      'Laporan telemetri jam kerja mesin (telematics)'
    ]
  },
  {
    id: 'loader-wl950',
    name: 'NusaLift WL-950 Wheel Loader',
    category: 'Wheel Loader',
    tag: 'High Productivity',
    image: 'https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=1000&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    shortDescription: 'Wheel loader lincah berdaya angkut tinggi dengan siklus hidrolik cepat, sangat efisien untuk batching plant semen, stockpile batubara, dan dermaga.',
    mainSpec: 'Operating Weight: 17.5 Ton | Bucket: 3.1 m³ | Payload: 5.0 Ton',
    pricePerDay: 'Rp 3.600.000',
    priceNum: 3600000,
    specs: {
      operatingWeight: '17.500 kg',
      enginePower: '220 HP / 2.100 rpm',
      bucketCapacity: '3,1 m³ General Purpose Bucket',
      maxDiggingDepth: 'Dump Clearance: 3.120 mm',
      maxReach: 'Dumping Reach: 1.150 mm',
      fuelCapacity: '290 Liter',
      emissionStandard: 'Tier-3 Intercooled',
      transmission: 'Automatic Powershift Transmission'
    },
    applications: [
      'Pengisian agregat ke asphalt & concrete batching plant',
      'Stockpiling batubara, pasir, dan batu split',
      'Bongkar muat komoditas curah pelabuhan',
      'Pekerjaan logistik konstruksi berskala besar'
    ],
    includes: [
      'Kamera mundur & safety sensor aktif',
      'Kabin AC bertekanan positif kedap debu',
      'Jadwal servis berkala oleh mekanik standby'
    ]
  },
  {
    id: 'grader-mg140',
    name: 'NusaLift MG-140 Precision Grader',
    category: 'Motor Grader',
    tag: 'Precision Leveling',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1579487785973-74d2ca7abdd5?auto=format&fit=crop&w=1000&q=80',
    shortDescription: 'Motor grader presisi tinggi dengan bilah blade 3.7 meter dan sistem artikulasi fleksibel, spesialis pembuatan jalan tol, pemeliharaan hauling road tambang.',
    mainSpec: 'Operating Weight: 15.2 Ton | Blade: 3.7 m | Daya: 190 HP',
    pricePerDay: 'Rp 4.250.000',
    priceNum: 4250000,
    specs: {
      operatingWeight: '15.200 kg',
      enginePower: '190 HP Variable Horsepower',
      bucketCapacity: 'Blade Width: 3.710 mm (12 ft)',
      maxDiggingDepth: 'Max Blade Lift: 480 mm',
      maxReach: 'Frame Articulation: 20° Kiri/Kanan',
      fuelCapacity: '340 Liter',
      emissionStandard: 'Common Rail Tier-3 Industrial',
      transmission: 'Direct Drive Power Shift'
    },
    applications: [
      'Grading dan leveling jalan tol & arteri',
      'Pemeliharaan kemiringan hauling road tambang',
      'Penyebaran material base course jalan raya',
      'Pembentukan saluran drainase sisi jalan (ditching)'
    ],
    includes: [
      'Mid-mounted scarifier & front counterweight',
      'Blade control hidrolik responsif',
      'Sertifikat kelayakan operasi alat berat'
    ]
  },
  {
    id: 'dumptruck-dt420',
    name: 'NusaLift DT-420 Heavy Dump Truck',
    category: 'Dump Truck',
    tag: 'Heavy Haulage',
    image: 'https://images.unsplash.com/photo-1580901368919-7738efb0f87e?auto=format&fit=crop&w=1000&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80',
    shortDescription: 'Dump truck 6x4 berdaya muat 30 ton dengan sasis kokoh berkekuatan tinggi, terbukti andal dalam angkutan tanah kupasan (overburden) dan material tambang.',
    mainSpec: 'Kapasitas Bak: 24 m³ | Payload: 30 Ton | Penggerak: 6x4 (420 HP)',
    pricePerDay: 'Rp 2.950.000',
    priceNum: 2950000,
    specs: {
      operatingWeight: '15.400 kg (Tare) / 45.000 kg (Gross)',
      enginePower: '420 HP Turbo Intercooler',
      bucketCapacity: 'Vessel Capacity: 24 m³ Hardox Steel',
      maxDiggingDepth: 'Tipping Angle: 52 Derajat',
      maxReach: 'Wheelbase: 3.800 mm + 1.350 mm',
      fuelCapacity: '400 Liter Heavy Duty Tank',
      emissionStandard: 'Euro IV Emission Compliant',
      transmission: '12-Speed Synchromesh with Crawler'
    },
    applications: [
      'Pengangkutan tanah galian proyek bendungan & bandara',
      'Hauling batubara dan nikel dari pit ke stockpile',
      'Distribusi material agregat dan pasir beton',
      'Transportasi material konstruksi jarak menengah'
    ],
    includes: [
      'Hydraulic hoist high-pressure Hyva system',
      'GPS Fleet Tracking & Fuel Consumption Sensor',
      'Unit siap uji KIR & laik jalan'
    ]
  },
  {
    id: 'crane-cr550',
    name: 'NusaLift CR-550 Rough Terrain Crane',
    category: 'Crane',
    tag: 'Heavy Lifting',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1000&q=80',
    shortDescription: 'Mobile rough terrain crane berkapasitas 55 ton dengan telescopic boom 43 meter, mampu bermanuver di medan sempit dan tanah lunak proyek industri.',
    mainSpec: 'Max Capacity: 55 Ton | Boom Reach: 43 m | Daya: 260 HP',
    pricePerDay: 'Rp 6.750.000',
    priceNum: 6750000,
    specs: {
      operatingWeight: '41.000 kg',
      enginePower: '260 HP Industrial Turbo',
      bucketCapacity: 'Max Lifting Capacity: 55.000 kg',
      maxDiggingDepth: 'Max Hook Height: 44.5 m (58 m with Jib)',
      maxReach: 'Telescopic Boom 5-Section (10.7m - 43m)',
      fuelCapacity: '300 Liter',
      emissionStandard: 'Tier-3 Certified',
      transmission: 'Full Powershift with Torque Converter'
    },
    applications: [
      'Ereksi baja struktural gedung dan jembatan',
      'Pemasangan girder jembatan dan flyover tol',
      'Instalasi mesin pabrik, genset, dan tangki silinder',
      'Lifting kontainer dan material berat proyek energi'
    ],
    includes: [
      'Load Moment Indicator (LMI) digital computer',
      'Rigger bersertifikat & lifting gear lengkap',
      'Sertifikat Depnaker / Migas aktif'
    ]
  },
  {
    id: 'excavator-ex330',
    name: 'NusaLift EX-330 Heavy Mining Excavator',
    category: 'Excavator',
    tag: 'Mining Spec',
    image: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=1000&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1000&q=80',
    shortDescription: 'Excavator kelas berat 33-ton dengan bucket batu karang yang diperkuat, didesain untuk produktivitas nonstop pada penambangan dan quarry.',
    mainSpec: 'Operating Weight: 33.8 Ton | Bucket: 1.9 m³ | Daya: 285 HP',
    pricePerDay: 'Rp 5.900.000',
    priceNum: 5900000,
    specs: {
      operatingWeight: '33.800 kg',
      enginePower: '285 HP High Torque',
      bucketCapacity: '1,9 m³ Rock Heavy Duty',
      maxDiggingDepth: '7.380 mm',
      maxReach: '10.920 mm',
      fuelCapacity: '620 Liter',
      emissionStandard: 'Tier-3 Electronic Common Rail',
      transmission: 'Dual Variable Axial Piston Motors'
    },
    applications: [
      'Pengupasan batuan penutup (overburden stripping)',
      'Loading batuan quarry ke crushing plant',
      'Galian dalam pembangunan bendungan PLTA',
      'Pekerjaan pengerukan volume besar (bulk earthwork)'
    ],
    includes: [
      'Full FOPS/ROPS cabin protection',
      'Lampu kerja LED intensitas tinggi 360°',
      'Perawatan oli & filter berkala ditanggung'
    ]
  },
  {
    id: 'crane-cr250',
    name: 'NusaLift CR-250 All-Terrain Mobile Crane',
    category: 'Crane',
    tag: 'City Crane',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1000&q=80',
    shortDescription: 'Crane kompak serbaguna 25 ton berkecepatan tinggi di jalan raya, sangat praktis untuk bongkar muat alat berat, tiang pancang, dan struktur beton perkotaan.',
    mainSpec: 'Max Capacity: 25 Ton | Boom Reach: 31 m | Daya: 195 HP',
    pricePerDay: 'Rp 4.100.000',
    priceNum: 4100000,
    specs: {
      operatingWeight: '26.500 kg',
      enginePower: '195 HP Common Rail',
      bucketCapacity: 'Max Lifting Capacity: 25.000 kg',
      maxDiggingDepth: 'Max Hook Height: 32.0 m',
      maxReach: 'Telescopic Boom 4-Section (9.5m - 31m)',
      fuelCapacity: '250 Liter',
      emissionStandard: 'Euro III Standard',
      transmission: 'Automatic 6-Speed Forward'
    },
    applications: [
      'Pemasangan tiang pancang dan sheet pile',
      'Bongkar muat mesin pabrik dan genset silent',
      'Konstruksi gedung bertingkat rendah-menengah',
      'Proyek perbaikan utilitas jalan raya'
    ],
    includes: [
      'Outrigger sensor keselamatan otomatis',
      'LMI Screen dengan warning buzzer',
      'Free konsultasi lifting plan proyek'
    ]
  }
];
