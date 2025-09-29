import React, { useMemo, useState } from "react";
import { Calendar, TrendingUp, Download, Filter, ChevronDown, ChevronUp } from "lucide-react";

export default function RenopTemplate() {
  const [expandedRows, setExpandedRows] = useState({});
  
  const [activities, setActivities] = useState([
    {
      id: 1,
      name: "Penyusunan Rencana Program Bagian EMIS dan PDDikti",
      weight: 6,
      target: "1 dokumen Renop disahkan",
      targetDetail: "1 dokumen Renop lengkap mencakup 29 kegiatan dengan bobot, jadwal, dan indikator kinerja yang terukur",
      schedule: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      achievement: 0,
      achievementDesc: "",
      mitigation: "",
      pelaksana: "Kepala Bagian EMIS & Staf",
      indicator: "Dokumen Renop disahkan pimpinan maksimal 31 Januari 2025",
      category: "Perencanaan",
    },
    {
      id: 14,
      name: "Pembentukan Satuan Tugas Pengelola Data (Sesuai Kepmendikbudristek 133/2023)",
      weight: 5,
      target: "SK Satgas diterbitkan + job desc lengkap",
      targetDetail: "1 SK Satgas + job description untuk minimal 5 anggota (koordinator, operator PDDikti, operator EMIS, operator SISTER, verifikator)",
      schedule: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      achievement: 0,
      achievementDesc: "",
      mitigation: "",
      pelaksana: "Pimpinan PT & Kepala Bagian",
      indicator: "SK Satgas terbit dengan penugasan jelas untuk data pendidikan, penelitian, dan pengabdian",
      category: "Perencanaan",
    },
    {
      id: 15,
      name: "Peningkatan Kompetensi & Etika Digital Operator",
      weight: 7,
      target: "2 kali pelatihan (100% operator hadir)",
      targetDetail: "2 sesi pelatihan: (1) Februari: Teknis PDDikti & EMIS, (2) Juni: Etika Digital & Keamanan Data. Target peserta: 8 operator",
      schedule: [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
      achievement: 0,
      achievementDesc: "",
      mitigation: "",
      pelaksana: "Kepala Bagian & Operator",
      indicator: "Operator lulus pelatihan dengan nilai ≥80, memahami etika digital & integritas data",
      category: "Pengembangan SDM",
    },
    {
      id: 2,
      name: "Sosialisasi Program kepada Semua Unit",
      weight: 8,
      target: "2 kali sosialisasi (100% unit hadir)",
      targetDetail: "2 sosialisasi: (1) Februari: Sosialisasi Renop ke 6 Prodi + Unit Penunjang, (2) Juli: Sosialisasi Mid-Year Review. Target peserta: 25 orang per sesi",
      schedule: [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      achievement: 0,
      achievementDesc: "",
      mitigation: "",
      pelaksana: "Kepala Bagian & TU Unit",
      indicator: "Minimal 90% peserta hadir dan memahami prosedur (nilai post-test ≥75)",
      category: "Koordinasi",
    },
    {
      id: 16,
      name: "Transformasi Digital & Digital Mindset di PT",
      weight: 6,
      target: "1 roadmap transformasi digital + 2 workshop",
      targetDetail: "1 roadmap transformasi digital (Februari-Maret) + 2 workshop (Februari: Pimpinan, Agustus: Staf). Total peserta: 40 orang",
      schedule: [0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
      achievement: 0,
      achievementDesc: "",
      mitigation: "",
      pelaksana: "Tim ICT & Kepala Bagian",
      indicator: "Roadmap disahkan, 2 workshop terlaksana untuk pimpinan & staff tentang budaya digital",
      category: "Pengembangan SDM",
    },
    {
      id: 3,
      name: "Koordinasi Penjadwalan Data EMIS dan PDDikti",
      weight: 10,
      target: "16 kali koordinasi (4x/triwulan)",
      targetDetail: "16 rapat koordinasi sepanjang tahun: 4 rapat per triwulan melibatkan TU Prodi, Operator, dan Kepala Bagian. Durasi per rapat: 2 jam",
      schedule: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      achievement: 0,
      achievementDesc: "",
      mitigation: "",
      pelaksana: "Kepala Bagian & TU Unit",
      indicator: "16 kali rapat koordinasi terlaksana dengan minimal 80% unit hadir",
      category: "Koordinasi",
    },
    {
      id: 17,
      name: "Integrasi SIAKAD dengan PDDikti & EMIS",
      weight: 8,
      target: "Sistem terintegrasi mengurangi duplikasi 80%",
      targetDetail: "Integrasi SIAKAD dengan API PDDikti dan EMIS: (1) Mapping data selesai Februari, (2) Testing Maret-April, (3) Go-Live Mei. Target: reduce manual entry 80%",
      schedule: [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
      achievement: 0,
      achievementDesc: "",
      mitigation: "",
      pelaksana: "Tim ICT & Operator",
      indicator: "SIAKAD terintegrasi dengan PDDikti/EMIS, duplikasi data berkurang minimal 80%",
      category: "Pengembangan Sistem",
      refs: ["BAN-PT IAPS 5.0 Butir 26"],
    },
    {
      id: 4,
      name: "Penyusunan SOP Pengumpulan Data EMIS & PDDikti",
      weight: 6,
      target: "Minimal 5 SOP disahkan",
      targetDetail: "5 SOP: (1) Pengumpulan data, (2) Verifikasi & validasi data, (3) Sinkronisasi ke PDDikti/EMIS, (4) Prosedur mutasi mahasiswa, (5) Registrasi dosen baru",
      schedule: [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      achievement: 0,
      achievementDesc: "",
      mitigation: "",
      pelaksana: "Kepala Bagian & Staf",
      indicator: "5 SOP disahkan: (1) Pengumpulan data, (2) Verifikasi data, (3) Sinkronisasi, (4) Mutasi mahasiswa, (5) Registrasi dosen",
      category: "Perencanaan",
    },
    {
      id: 18,
      name: "Penyusunan Regulasi Internal PT untuk Kelengkapan Data",
      weight: 4,
      target: "3 regulasi internal ditetapkan",
      targetDetail: "3 regulasi: (1) SK Kewajiban dosen input nilai (deadline H-7 setelah UAS), (2) SK Deadline pengumpulan data unit, (3) SK Sanksi keterlambatan pelaporan",
      schedule: [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      achievement: 0,
      achievementDesc: "",
      mitigation: "",
      pelaksana: "Kepala Bagian & Tim Hukum",
      indicator: "3 regulasi: (1) Kewajiban dosen input nilai, (2) Deadline pengumpulan data unit, (3) Sanksi keterlambatan",
      category: "Perencanaan",
    },
    {
      id: 5,
      name: "Pelaporan PDDikti - Checkpoint 1 (KRS)",
      weight: 15,
      target: "6 prodi 100% data KRS terkirim",
      targetDetail: "100% data KRS dari 6 prodi (estimasi 2.500 mahasiswa aktif) tersinkronisasi ke PDDikti sebelum deadline Mei 2025",
      schedule: [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
      achievement: 0,
      achievementDesc: "",
      mitigation: "",
      pelaksana: "Kepala Bagian & TU Unit",
      indicator: "100% data KRS 6 prodi tersinkronisasi ke PDDikti sebelum deadline",
      category: "Pelaporan Utama",
      refs: ["BAN-PT IAPS 5.0 Butir 15"],
    },
    {
      id: 6,
      name: "Pelaporan PDDikti - Checkpoint 2 (KHS & AKM)",
      weight: 15,
      target: "6 prodi 100% data KHS terkirim",
      targetDetail: "100% data KHS & AKM dari 6 prodi (estimasi 2.500 mahasiswa) tersinkronisasi ke PDDikti sebelum deadline November 2025",
      schedule: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
      achievement: 0,
      achievementDesc: "",
      mitigation: "",
      pelaksana: "Kepala Bagian & TU Unit",
      indicator: "100% data KHS & AKM 6 prodi tersinkronisasi sebelum deadline",
      category: "Pelaporan Utama",
      refs: ["BAN-PT IAPS 5.0 Butir 12", "BAN-PT IAPS 5.0 Butir 15"],
    },
    {
      id: 7,
      name: "Pelaporan EMIS Kemenag",
      weight: 8,
      target: "2 periode EMIS terlapor 100%",
      targetDetail: "2 periode pelaporan EMIS: (1) Maret: Data semester ganjil, (2) September: Data semester genap. Coverage: 6 prodi + data kelembagaan",
      schedule: [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      achievement: 0,
      achievementDesc: "",
      mitigation: "",
      pelaksana: "Kepala Bagian & TU Unit",
      indicator: "BAP EMIS 2 periode disahkan tepat waktu sesuai deadline Kemenag",
      category: "Pelaporan Utama",
    },
    {
      id: 19,
      name: "Pengelolaan Data SISTER (Dosen & Tendik)",
      weight: 7,
      target: "100% dosen terregistrasi + update berkala",
      targetDetail: "100% dosen aktif (estimasi 85 dosen) terregistrasi di SISTER dengan dokumen lengkap: SK, surat sehat, foto 4x6, SPTJM. Update setiap bulan",
      schedule: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      achievement: 0,
      achievementDesc: "",
      mitigation: "",
      pelaksana: "Operator SISTER & SDM",
      indicator: "100% dosen aktif terregistrasi, dokumen lengkap (SK, surat sehat, foto, SPTJM), update rutin",
      category: "Pelaporan Utama",
      refs: ["BAN-PT IAPS 5.0 Butir 6"],
    },
    {
      id: 8,
      name: "Evaluasi Program Triwulanan",
      weight: 6,
      target: "4 kali evaluasi + 1 evaluasi tahunan",
      targetDetail: "4 evaluasi triwulanan (Maret, Juni, September, Desember) + 1 evaluasi tahunan (Desember). Setiap evaluasi menghasilkan 1 laporan progress + rekomendasi",
      schedule: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
      achievement: 0,
      achievementDesc: "",
      mitigation: "",
      pelaksana: "Kepala Bagian & Staf",
      indicator: "4 laporan evaluasi triwulan + 1 laporan tahunan tersusun",
      category: "Monitoring & Evaluasi",
      refs: ["BAN-PT IAPS 5.0 Butir 3"],
    },
    {
      id: 20,
      name: "Persiapan Monev Kopertais (Oktober 2025)",
      weight: 5,
      target: "Dokumen lengkap + presentasi siap",
      targetDetail: "Persiapan monev: (1) Kompilasi 12 dokumen bukti, (2) Presentasi PowerPoint 30 slide, (3) Mock presentasi 2 kali, (4) Koordinasi dengan pimpinan 3 kali",
      schedule: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
      achievement: 0,
      achievementDesc: "",
      mitigation: "",
      pelaksana: "Seluruh Tim + Pimpinan",
      indicator: "Dokumen monev lengkap, pimpinan hadir, hasil AMI terdokumentasi",
      category: "Monitoring & Evaluasi",
    },
    {
      id: 9,
      name: "Pengendalian dan Perbaikan Data",
      weight: 6,
      target: "Maksimal 5% error rate",
      targetDetail: "Monitoring error rate setiap bulan: Target ≤5% untuk setiap checkpoint. Perbaikan error maksimal H+3 setelah identifikasi. Review bulanan dengan unit",
      schedule: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      achievement: 0,
      achievementDesc: "",
      mitigation: "",
      pelaksana: "Kepala Bagian & Staf",
      indicator: "Error rate data ≤5% setiap checkpoint",
      category: "Monitoring & Evaluasi",
    },
    {
      id: 10,
      name: "Peningkatan Sistem dan Kapasitas",
      weight: 4,
      target: "2 program peningkatan",
      targetDetail: "2 program inovasi: (1) Juni: Dashboard real-time monitoring data, (2) Desember: Sistem notifikasi otomatis untuk deadline",
      schedule: [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
      achievement: 0,
      achievementDesc: "",
      mitigation: "",
      pelaksana: "Kepala Bagian & Staf",
      indicator: "2 inovasi/perbaikan sistem terimplementasi",
      category: "Pengembangan",
    },
    {
      id: 11,
      name: "Konsultasi ke Kopertais/Pusat",
      weight: 3,
      target: "Minimal 4 kali konsultasi",
      targetDetail: "4 konsultasi: (1) Februari: Teknis pelaporan, (2) Mei: Klarifikasi data, (3) Agustus: Update regulasi, (4) November: Persiapan monev. Setiap konsultasi terdokumentasi",
      schedule: [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
      achievement: 0,
      achievementDesc: "",
      mitigation: "",
      pelaksana: "Kepala Bagian",
      indicator: "Minimal 4 kali konsultasi terdokumentasi dengan rekomendasi",
      category: "Koordinasi",
    },
    {
      id: 21,
      name: "Partisipasi Rakor Pimpinan PT (November 2025)",
      weight: 3,
      target: "Pimpinan hadir + laporan dibawa",
      targetDetail: "Partisipasi Rakor: (1) Pimpinan + 2 staf hadir, (2) Laporan capaian 2025 (30 halaman), (3) Presentasi 15 menit, (4) Follow-up rekomendasi",
      schedule: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      achievement: 0,
      achievementDesc: "",
      mitigation: "",
      pelaksana: "Pimpinan & Kepala Bagian",
      indicator: "Pimpinan hadir Rakor, membawa laporan capaian EMIS & PDDikti 2025",
      category: "Koordinasi",
    },
    {
      id: 12,
      name: "Pengelolaan Administrasi dan Kearsipan",
      weight: 6,
      target: "100% dokumen terarsip (akses ≤5 menit)",
      targetDetail: "Sistem kearsipan: (1) Digital: Google Drive terstruktur, (2) Fisik: Filing cabinet 6 kategori. Target: 500+ dokumen tersimpan rapi, akses cepat ≤5 menit",
      schedule: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      achievement: 0,
      achievementDesc: "",
      mitigation: "",
      pelaksana: "Staf Administrasi",
      indicator: "100% dokumen fisik & digital tersimpan rapi, akses ≤5 menit",
      category: "Administrasi",
    },
    {
      id: 13,
      name: "Pelaporan Hasil Pelaksanaan Program",
      weight: 4,
      target: "12 laporan bulanan + 1 laporan tahunan",
      targetDetail: "13 laporan: 12 laporan bulanan (masing-masing 5-10 halaman, deadline H+7) + 1 laporan tahunan komprehensif (50+ halaman, Desember)",
      schedule: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      achievement: 0,
      achievementDesc: "",
      mitigation: "",
      pelaksana: "Kepala Bagian & Staf",
      indicator: "13 laporan tepat waktu (maksimal H+7 setiap bulan)",
      category: "Administrasi",
    },
    {
      id: 22,
      name: "Koordinasi Pengumpulan Data Tabel SAPTO untuk LPMI",
      weight: 8,
      target: "15 tabel SAPTO terkumpul tepat waktu",
      targetDetail: "15 tabel SAPTO dari PDDikti: (1) Rasio Dosen-Mahasiswa (6 prodi), (2) Jabatan Akademik Dosen, (3) Kelulusan Tepat Waktu, (4) Trend Lulusan 3 tahun, (5) Trend Maba 3 tahun. Koordinasi dengan 6 Prodi + LPMI",
      schedule: [0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0],
      achievement: 0,
      achievementDesc: "",
      mitigation: "",
      pelaksana: "Operator EMIS & Koordinator Unit",
      indicator: "15 tabel SAPTO dari PDDikti terkoordinasi: Rasio Dosen-Mhs, Jabatan Akademik, Kelulusan Tepat Waktu, Trend Lulusan & Mahasiswa Baru",
      category: "Pelaporan Utama",
    },
    {
      id: 23,
      name: "Verifikasi & Validasi Data SAPTO Akreditasi PT",
      weight: 6,
      target: "100% data SAPTO tervalidasi akurat",
      targetDetail: "Verifikasi 15 tabel SAPTO: Cross-check dengan data LPMI, verifikasi per prodi, validasi oleh tim. Target error rate ≤3%. Laporan verifikasi 2 kali (April dan Oktober)",
      schedule: [0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
      achievement: 0,
      achievementDesc: "",
      mitigation: "",
      pelaksana: "Kepala Bagian & Tim Verifikasi",
      indicator: "Cross-check data PDDikti dengan LPMI untuk 15 tabel SAPTO, error rate ≤3%",
      category: "Monitoring & Evaluasi",
    },
    {
      id: 24,
      name: "Asistensi Pengisian Data Prodi untuk Tabel SAPTO",
      weight: 5,
      target: "6 Prodi terbantu pengisian tabel",
      targetDetail: "Asistensi teknis ke 6 Kaprodi: (1) Workshop pengisian tabel (2 jam per prodi), (2) Konsultasi individual (minimal 2 kali per prodi), (3) Review hasil pengisian",
      schedule: [0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0],
      achievement: 0,
      achievementDesc: "",
      mitigation: "",
      pelaksana: "Operator PDDikti & TU Prodi",
      indicator: "Asistensi teknis ke 6 Kaprodi untuk tabel: Rasio Dosen-Mhs, Kecukupan Dosen, Trend Lulusan, Kelulusan Tepat Waktu",
      category: "Koordinasi",
    },
    {
      id: 25,
      name: "Pelaporan Implementasi & Luaran SPMI ke PDDIKTI (Triwulanan)",
      weight: 6,
      target: "4 laporan SPMI terunggah & tervalidasi",
      targetDetail: "4 laporan SPMI triwulanan ke PDDIKTI: Maret, Juni, September, Desember. Setiap laporan mencakup: (1) Implementasi standar, (2) Luaran terukur, (3) Evidence lengkap",
      schedule: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
      achievement: 0,
      achievementDesc: "",
      mitigation: "",
      pelaksana: "Staf EMIS & PDDikti",
      indicator: "Pelaporan implementasi & luaran SPMI triwulan ke PDDIKTI tervalidasi (evidence lengkap)",
      category: "Monitoring & Evaluasi",
      refs: ["BAN-PT IAPS 5.0 Butir 3"],
    },
    {
      id: 26,
      name: "Pelaporan Publikasi Ilmiah Dosen di PDDIKTI",
      weight: 4,
      target: "100% publikasi terlapor oleh dosen aktif",
      targetDetail: "Target: Minimal 50 publikasi dari 85 dosen aktif terlapor di PDDIKTI. Koordinasi dengan LPPM untuk data DOI/ISSN. Update 4 kali per tahun (Maret, Mei, September, November)",
      schedule: [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0],
      achievement: 0,
      achievementDesc: "",
      mitigation: "",
      pelaksana: "Operator PDDikti & LPPM",
      indicator: "Publikasi artikel dosen tercatat di PDDIKTI sesuai bukti (DOI/ISSN)",
      category: "Pelaporan Utama",
      refs: ["BAN-PT IAPS 5.0 Butir 18"],
    },
    {
      id: 27,
      name: "Pelaporan Luaran Penelitian: kolaborasi, sitasi, rekognisi (PDDIKTI)",
      weight: 4,
      target: "Seluruh luaran penelitian dosen terlapor",
      targetDetail: "Pelaporan luaran: (1) Kolaborasi penelitian (minimal 20 kolaborasi), (2) Sitasi (tracking Sinta/Scholar), (3) Rekognisi (penghargaan, narasumber). Update 4 kali per tahun",
      schedule: [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0],
      achievement: 0,
      achievementDesc: "",
      mitigation: "",
      pelaksana: "Operator PDDikti & LPPM",
      indicator: "Data kolaborasi, sitasi, rekognisi dosen terekam di PDDIKTI",
      category: "Pelaporan Utama",
      refs: ["BAN-PT IAPS 5.0 Butir 19"],
    },
    {
      id: 28,
      name: "Rekognisi Kepakaran & Karya Dosen Diterapkan Masyarakat (PDDIKTI)",
      weight: 3,
      target: "100% rekognisi & karya terdata",
      targetDetail: "Target pelaporan: (1) Rekognisi kepakaran dosen (minimal 15 kegiatan), (2) HKI (minimal 5 HKI), (3) Penerapan karya di masyarakat (minimal 10 kegiatan). Update 3 kali per tahun",
      schedule: [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
      achievement: 0,
      achievementDesc: "",
      mitigation: "",
      pelaksana: "Operator PDDikti & LPPM",
      indicator: "Rekognisi kepakaran, HKI, dan penerapan karya dosen terlapor di PDDIKTI",
      category: "Pelaporan Utama",
      refs: ["BAN-PT IAPS 5.0 Butir 23"],
    },
    {
      id: 29,
      name: "Dashboard Tren Maba & Keterserapan Lulusan (PDDIKTI + Tracer)",
      weight: 5,
      target: "2 rilis dashboard (mid & akhir tahun)",
      targetDetail: "2 dashboard interaktif: (1) Mei: Dashboard Tren Maba 3 tahun (2023-2025) untuk 6 prodi, (2) Oktober: Dashboard Keterserapan Lulusan dari data Tracer Study. Integrasi dengan data PDDIKTI",
      schedule: [0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0],
      achievement: 0,
      achievementDesc: "",
      mitigation: "",
      pelaksana: "Staf EMIS & PDDikti",
      indicator: "Dashboard menampilkan tren Maba (PDDIKTI) & keterserapan lulusan (Tracer) untuk semua prodi",
      category: "Pengembangan Sistem",
      refs: ["BAN-PT IAPS 5.0 Butir 15"],
    },
  ]);

  const [search, setSearch] = useState("");
  const months = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agt", "Sep", "Okt", "Nov", "Des"];
  const monthOrder = [9, 10, 11, 0, 1, 2, 3, 4, 5, 6, 7, 8];
  const monthsDisplay = ["Okt", "Nov", "Des", "Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agt", "Sep"];

  const categories = useMemo(() => ["Semua", ...new Set(activities.map((a) => a.category))], [activities]);
  const [categoryFilter, setCategoryFilter] = useState("Semua");
  const [useNormalizedWeights, setUseNormalizedWeights] = useState(false);
  const [scopeOnlyEMISPDDIKTI, setScopeOnlyEMISPDDIKTI] = useState(true);

  const getCategoryColor = (category) => {
    const colors = {
      Perencanaan: "bg-blue-100 text-blue-800",
      Koordinasi: "bg-purple-100 text-purple-800",
      "Pelaporan Utama": "bg-red-100 text-red-800",
      "Monitoring & Evaluasi": "bg-green-100 text-green-800",
      "Pengembangan SDM": "bg-orange-100 text-orange-800",
      "Pengembangan Sistem": "bg-cyan-100 text-cyan-800",
      Administrasi: "bg-gray-100 text-gray-800",
      Pengembangan: "bg-amber-100 text-amber-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  const filteredActivities = useMemo(() => {
    return activities.filter((a) => {
      const text = `${a.name} ${a.target} ${a.pelaksana} ${a.indicator} ${a.category}`.toLowerCase();
      const okText = text.includes(search.toLowerCase());
      const okCat = categoryFilter === "Semua" || a.category === categoryFilter;
      const okScope = !scopeOnlyEMISPDDIKTI || /(EMIS|PDDikti)/i.test(a.pelaksana);
      return okText && okCat && okScope;
    });
  }, [activities, search, categoryFilter, scopeOnlyEMISPDDIKTI]);

  const totals = useMemo(() => {
    const totalWeightRaw = activities.reduce((s, a) => s + a.weight, 0);
    const simpleAvgAchievement = activities.reduce((s, a) => s + a.achievement, 0) / activities.length || 0;

    const normFactor = totalWeightRaw === 0 ? 0 : 100 / totalWeightRaw;
    const getW = (w) => (useNormalizedWeights ? w * normFactor : w);

    const weightedScore = activities.reduce((s, a) => s + (a.achievement * getW(a.weight)) / 100, 0);
    const sumWeightsForAvg = activities.reduce((s, a) => s + getW(a.weight), 0);
    const weightedAvgAchievement =
      sumWeightsForAvg === 0 ? 0 : activities.reduce((s, a) => s + a.achievement * getW(a.weight), 0) / sumWeightsForAvg;

    return {
      totalWeightRaw,
      simpleAvgAchievement,
      weightedScore,
      weightedAvgAchievement,
      normFactor,
    };
  }, [activities, useNormalizedWeights]);

  const updateAchievement = (id, value) => {
    const num = Math.max(0, Math.min(100, Number(value) || 0));
    setActivities((prev) => prev.map((a) => (a.id === id ? { ...a, achievement: num } : a)));
  };

  const updateField = (id, field, value) => {
    setActivities((prev) => prev.map((a) => (a.id === id ? { ...a, [field]: value } : a)));
  };

  const toggleExpand = (id) => {
    setExpandedRows(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const getScheduleDot = (value) => {
    if (value === 1) return <div className="w-3.5 h-3.5 mx-auto rounded bg-green-500" />;
    if (value === 2) return <div className="w-3.5 h-3.5 mx-auto rounded bg-blue-500" />;
    return <div className="w-3.5 h-3.5 mx-auto rounded bg-gray-200" />;
  };

  const exportCSV = () => {
    const headers = [
      "No",
      "Kegiatan",
      "Bobot",
      "Target",
      "Rincian Target",
      ...monthsDisplay,
      "Capaian (%)",
      "Deskripsi Capaian",
      "Mitigasi",
      "Skor",
    ];

    const rows = filteredActivities.map((a, idx) => {
      const skor = ((a.achievement * a.weight) / 100).toFixed(2);
      return [
        idx + 1,
        a.name,
        a.weight,
        a.target,
        a.targetDetail,
        ...monthOrder.map((mi) => (a.schedule?.[mi] ? "✓" : "")),
        a.achievement,
        a.achievementDesc,
        a.mitigation,
        skor,
      ];
    });

    const csv = [headers, ...rows]
      .map((r) => r.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `renop-detail-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-1">Rencana Operasional (Renop) - Detail</h1>
              <p className="text-lg text-gray-600">Bagian EMIS & PDDikti – IAI AL-AZIS</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={exportCSV}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white shadow hover:bg-indigo-700"
              >
                <Download className="w-4 h-4" />
                Ekspor CSV
              </button>
              <Calendar className="w-12 h-12 text-indigo-600" />
            </div>
          </div>
        </div>

        {/* Audience Banner */}
        <div className="bg-indigo-50 border border-indigo-200 text-indigo-800 rounded-lg p-3 mb-4">
          📌 Dokumen ini diperuntukkan <b>khusus Staf EMIS & PDDikti</b>. Periode siklus: <b>Oktober → Oktober</b> (12 bulan). Dengan rincian target dan kolom monitoring.
        </div>

        {/* Dashboard Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Kegiatan</p>
                <p className="text-2xl font-bold text-gray-800">{activities.length}</p>
                <p className="text-xs text-gray-500 mt-1">Bobot total: {totals.totalWeightRaw}</p>
              </div>
              <Calendar className="w-10 h-10 text-indigo-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Progress Tertimbang</p>
                <p className="text-2xl font-bold text-gray-800">{totals.weightedAvgAchievement.toFixed(1)}%</p>
                <div className="mt-2 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-2 bg-indigo-600"
                    style={{ width: `${Math.min(100, totals.weightedAvgAchievement)}%` }}
                  />
                </div>
              </div>
              <TrendingUp className="w-10 h-10 text-purple-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Skor Total</p>
                <p className="text-2xl font-bold text-gray-800">{totals.weightedScore.toFixed(1)}</p>
                <p className="text-xs text-gray-500 mt-1">dari {useNormalizedWeights ? "100" : totals.totalWeightRaw}</p>
              </div>
              <TrendingUp className="w-10 h-10 text-green-500" />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-gray-500" />
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="border rounded-lg px-3 py-2"
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari kegiatan/target/pelaksana..."
                className="border rounded-lg px-3 py-2 flex-1"
              />
            </div>
            <div className="flex flex-wrap gap-3 text-sm">
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" checked={useNormalizedWeights} onChange={(e) => setUseNormalizedWeights(e.target.checked)} />
                Gunakan bobot ternormalisasi (Σ=100)
              </label>
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" checked={scopeOnlyEMISPDDIKTI} onChange={(e) => setScopeOnlyEMISPDDIKTI(e.target.checked)} />
                Khusus Staf EMIS & PDDikti
              </label>
            </div>
          </div>
        </div>

        {/* Activities Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-indigo-600 text-white sticky top-0 z-10">
                <tr>
                  <th className="px-2 py-3"></th>
                  <th className="px-4 py-3 text-left">No</th>
                  <th className="px-4 py-3 text-left min-w-64">Kegiatan</th>
                  <th className="px-4 py-3 text-center">Bobot</th>
                  <th className="px-4 py-3 text-left min-w-48">Target</th>
                  {monthsDisplay.map((month) => (
                    <th key={month} className="px-2 py-3 text-center">{month}</th>
                  ))}
                  <th className="px-4 py-3 text-center">Capaian</th>
                  <th className="px-4 py-3 text-center">Skor</th>
                </tr>
              </thead>
              <tbody>
                {filteredActivities.map((activity, index) => {
                  const score = ((activity.achievement * activity.weight) / 100).toFixed(1);
                  const isExpanded = expandedRows[activity.id];
                  
                  return (
                    <React.Fragment key={activity.id}>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-2 py-3">
                          <button
                            onClick={() => toggleExpand(activity.id)}
                            className="text-indigo-600 hover:text-indigo-800"
                          >
                            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                          </button>
                        </td>
                        <td className="px-4 py-3 text-center font-medium">{index + 1}</td>
                        <td className="px-4 py-3">
                          <div className="font-medium text-gray-800">{activity.name}</div>
                          <div className="text-xs text-gray-500 mt-1">{activity.pelaksana}</div>
                          <span className={`inline-block mt-1 px-2 py-0.5 rounded text-xs ${getCategoryColor(activity.category)}`}>
                            {activity.category}
                          </span>
                          {activity.refs && activity.refs.length > 0 && (
                            <div className="mt-1 flex flex-wrap gap-1">
                              {activity.refs.map((r, i) => (
                                <span key={i} className="px-1.5 py-0.5 rounded bg-indigo-100 text-indigo-700 text-[11px]">{r}</span>
                              ))}
                            </div>
                          )}
                        </td>
                        <td className="px-4 py-3 text-center font-semibold">{activity.weight}</td>
                        <td className="px-4 py-3 text-sm">{activity.target}</td>
                        {monthOrder.map((mi, idx) => {
                          const val = activity.schedule?.[mi] ?? 0;
                          return (
                            <td key={idx} className="px-2 py-3 text-center">{getScheduleDot(val)}</td>
                          );
                        })}
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <input
                              type="number"
                              min={0}
                              max={100}
                              value={activity.achievement}
                              onChange={(e) => updateAchievement(activity.id, e.target.value)}
                              className="w-20 px-2 py-1 border rounded text-center"
                            />
                            <span className="text-xs">%</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-center font-semibold text-indigo-600">{score}</td>
                      </tr>
                      
                      {isExpanded && (
                        <tr className="bg-gray-50 border-b">
                          <td colSpan="3"></td>
                          <td colSpan="15" className="px-4 py-4">
                            <div className="space-y-4">
                              <div>
                                <label className="block text-xs font-semibold text-gray-700 mb-1">
                                  📋 Rincian Target Detail:
                                </label>
                                <p className="text-sm text-gray-800 bg-blue-50 p-3 rounded border border-blue-200">
                                  {activity.targetDetail}
                                </p>
                              </div>
                              
                              <div>
                                <label className="block text-xs font-semibold text-gray-700 mb-1">
                                  ✅ Deskripsi Capaian Target:
                                </label>
                                <textarea
                                  value={activity.achievementDesc}
                                  onChange={(e) => updateField(activity.id, 'achievementDesc', e.target.value)}
                                  placeholder="Jelaskan capaian yang sudah dicapai, progress terkini, dan bukti-bukti pendukung..."
                                  className="w-full px-3 py-2 border rounded-lg text-sm min-h-24 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                />
                              </div>
                              
                              <div>
                                <label className="block text-xs font-semibold text-gray-700 mb-1">
                                  ⚠️ Mitigasi & Rencana Tindak Lanjut:
                                </label>
                                <textarea
                                  value={activity.mitigation}
                                  onChange={(e) => updateField(activity.id, 'mitigation', e.target.value)}
                                  placeholder="Jelaskan kendala yang dihadapi, risiko yang teridentifikasi, dan rencana mitigasi/solusi yang akan dilakukan..."
                                  className="w-full px-3 py-2 border rounded-lg text-sm min-h-24 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                />
                              </div>

                              <div>
                                <label className="block text-xs font-semibold text-gray-700 mb-1">
                                  🎯 Indikator Keberhasilan:
                                </label>
                                <p className="text-sm text-gray-700 bg-green-50 p-3 rounded border border-green-200">
                                  {activity.indicator}
                                </p>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })}
              </tbody>
              <tfoot className="bg-gray-100 font-semibold">
                <tr>
                  <td className="px-2 py-3"></td>
                  <td className="px-4 py-3 text-right" colSpan={4}>TOTAL</td>
                  <td className="px-2 py-3 text-center" colSpan={12} />
                  <td className="px-4 py-3 text-center">{totals.weightedAvgAchievement.toFixed(1)}%</td>
                  <td className="px-4 py-3 text-center text-indigo-600">{totals.weightedScore.toFixed(1)}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Legend */}
        <div className="bg-white rounded-lg shadow p-4 mt-6">
          <h3 className="font-semibold text-gray-700 mb-3">Keterangan:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="mb-2"><span className="inline-block w-4 h-4 bg-green-500 rounded mr-2" />Pelaksanaan Utama</p>
              <p className="mb-2"><span className="inline-block w-4 h-4 bg-blue-500 rounded mr-2" />Persiapan/Evaluasi</p>
              <p className="mb-2"><ChevronDown className="w-4 h-4 inline mr-2 text-indigo-600" />Klik untuk melihat detail & input capaian</p>
            </div>
            <div>
              <p className="mb-2"><strong>Skor</strong> = Capaian (%) × Bobot</p>
              <p className="mb-2"><strong>Progress Tertimbang</strong> = rata-rata capaian berbobot</p>
              <p className="mb-2"><strong>Rincian Target</strong> = detail kuantitatif setiap target</p>
            </div>
          </div>
        </div>

        {/* Referensi */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6 rounded">
          <h3 className="font-semibold text-blue-800 mb-2">📚 Referensi & Dasar Hukum:</h3>
          <ul className="list-disc list-inside text-sm text-blue-700 space-y-1">
            <li>Peraturan BAN-PT Nomor 13 Tahun 2025 (IAPS 5.0) – Lampiran 3g (Butir: 3, 6, 12, 15, 18, 19, 23, 26)</li>
            <li>Kepmendikbudristek No. 133 Tahun 2023 tentang Juknis Data Dikti</li>
            <li>Workshop Peningkatan Akreditasi via EMIS & PDDikti - Kopertais W2 Jabar (23-24 Sept 2024)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}