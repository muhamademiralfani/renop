import React, { useMemo, useState } from "react";
import { Calendar, TrendingUp, Download, Filter } from "lucide-react";

export default function RenopTemplate() {
  const [activities, setActivities] = useState([
    {
      id: 1,
      name: "Penyusunan Rencana Program Bagian EMIS dan PDDikti",
      weight: 6,
      target: "1 dokumen Renop disahkan",
      schedule: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      achievement: 0,
      pelaksana: "Kepala Bagian EMIS & Staf",
      indicator: "Dokumen Renop disahkan pimpinan maksimal 31 Januari 2025",
      category: "Perencanaan",
    },
    {
      id: 14,
      name: "Pembentukan Satuan Tugas Pengelola Data (Sesuai Kepmendikbudristek 133/2023)",
      weight: 5,
      target: "SK Satgas diterbitkan + job desc lengkap",
      schedule: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      achievement: 0,
      pelaksana: "Pimpinan PT & Kepala Bagian",
      indicator:
        "SK Satgas terbit dengan penugasan jelas untuk data pendidikan, penelitian, dan pengabdian",
      category: "Perencanaan",
    },
    {
      id: 15,
      name: "Peningkatan Kompetensi & Etika Digital Operator",
      weight: 7,
      target: "2 kali pelatihan (100% operator hadir)",
      schedule: [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
      achievement: 0,
      pelaksana: "Kepala Bagian & Operator",
      indicator:
        "Operator lulus pelatihan dengan nilai ≥80, memahami etika digital & integritas data",
      category: "Pengembangan SDM",
    },
    {
      id: 2,
      name: "Sosialisasi Program kepada Semua Unit",
      weight: 8,
      target: "2 kali sosialisasi (100% unit hadir)",
      schedule: [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      achievement: 0,
      pelaksana: "Kepala Bagian & TU Unit",
      indicator: "Minimal 90% peserta hadir dan memahami prosedur (nilai post-test ≥75)",
      category: "Koordinasi",
    },
    {
      id: 16,
      name: "Transformasi Digital & Digital Mindset di PT",
      weight: 6,
      target: "1 roadmap transformasi digital + 2 workshop",
      schedule: [0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
      achievement: 0,
      pelaksana: "Tim ICT & Kepala Bagian",
      indicator:
        "Roadmap disahkan, 2 workshop terlaksana untuk pimpinan & staff tentang budaya digital",
      category: "Pengembangan SDM",
    },
    {
      id: 3,
      name: "Koordinasi Penjadwalan Data EMIS dan PDDikti",
      weight: 10,
      target: "16 kali koordinasi (4x/triwulan)",
      schedule: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      achievement: 0,
      pelaksana: "Kepala Bagian & TU Unit",
      indicator: "16 kali rapat koordinasi terlaksana dengan minimal 80% unit hadir",
      category: "Koordinasi",
    },
    {
      id: 17,
      name: "Integrasi SIAKAD dengan PDDikti & EMIS",
      weight: 8,
      target: "Sistem terintegrasi mengurangi duplikasi 80%",
      schedule: [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
      achievement: 0,
      pelaksana: "Tim ICT & Operator",
      indicator:
        "SIAKAD terintegrasi dengan PDDikti/EMIS, duplikasi data berkurang minimal 80%",
      category: "Pengembangan Sistem",
      refs: ["BAN-PT IAPS 5.0 Butir 26"],
    },
    {
      id: 4,
      name: "Penyusunan SOP Pengumpulan Data EMIS & PDDikti",
      weight: 6,
      target: "Minimal 5 SOP disahkan",
      schedule: [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      achievement: 0,
      pelaksana: "Kepala Bagian & Staf",
      indicator:
        "5 SOP disahkan: (1) Pengumpulan data, (2) Verifikasi data, (3) Sinkronisasi, (4) Mutasi mahasiswa, (5) Registrasi dosen",
      category: "Perencanaan",
    },
    {
      id: 18,
      name: "Penyusunan Regulasi Internal PT untuk Kelengkapan Data",
      weight: 4,
      target: "3 regulasi internal ditetapkan",
      schedule: [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      achievement: 0,
      pelaksana: "Kepala Bagian & Tim Hukum",
      indicator:
        "3 regulasi: (1) Kewajiban dosen input nilai, (2) Deadline pengumpulan data unit, (3) Sanksi keterlambatan",
      category: "Perencanaan",
    },
    {
      id: 5,
      name: "Pelaporan PDDikti - Checkpoint 1 (KRS)",
      weight: 15,
      target: "6 prodi 100% data KRS terkirim",
      schedule: [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
      achievement: 0,
      pelaksana: "Kepala Bagian & TU Unit",
      indicator:
        "100% data KRS 6 prodi tersinkronisasi ke PDDikti sebelum deadline",
      category: "Pelaporan Utama",
      refs: ["BAN-PT IAPS 5.0 Butir 15"],
    },
    {
      id: 6,
      name: "Pelaporan PDDikti - Checkpoint 2 (KHS & AKM)",
      weight: 15,
      target: "6 prodi 100% data KHS terkirim",
      schedule: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
      achievement: 0,
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
      schedule: [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      achievement: 0,
      pelaksana: "Kepala Bagian & TU Unit",
      indicator: "BAP EMIS 2 periode disahkan tepat waktu sesuai deadline Kemenag",
      category: "Pelaporan Utama",
    },
    {
      id: 19,
      name: "Pengelolaan Data SISTER (Dosen & Tendik)",
      weight: 7,
      target: "100% dosen terregistrasi + update berkala",
      schedule: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      achievement: 0,
      pelaksana: "Operator SISTER & SDM",
      indicator:
        "100% dosen aktif terregistrasi, dokumen lengkap (SK, surat sehat, foto, SPTJM), update rutin",
      category: "Pelaporan Utama",
      refs: ["BAN-PT IAPS 5.0 Butir 6"],
    },
    {
      id: 8,
      name: "Evaluasi Program Triwulanan",
      weight: 6,
      target: "4 kali evaluasi + 1 evaluasi tahunan",
      schedule: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
      achievement: 0,
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
      schedule: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
      achievement: 0,
      pelaksana: "Seluruh Tim + Pimpinan",
      indicator: "Dokumen monev lengkap, pimpinan hadir, hasil AMI terdokumentasi",
      category: "Monitoring & Evaluasi",
    },
    {
      id: 9,
      name: "Pengendalian dan Perbaikan Data",
      weight: 6,
      target: "Maksimal 5% error rate",
      schedule: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      achievement: 0,
      pelaksana: "Kepala Bagian & Staf",
      indicator: "Error rate data ≤5% setiap checkpoint",
      category: "Monitoring & Evaluasi",
    },
    {
      id: 10,
      name: "Peningkatan Sistem dan Kapasitas",
      weight: 4,
      target: "2 program peningkatan",
      schedule: [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
      achievement: 0,
      pelaksana: "Kepala Bagian & Staf",
      indicator: "2 inovasi/perbaikan sistem terimplementasi",
      category: "Pengembangan",
    },
    {
      id: 11,
      name: "Konsultasi ke Kopertais/Pusat",
      weight: 3,
      target: "Minimal 4 kali konsultasi",
      schedule: [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
      achievement: 0,
      pelaksana: "Kepala Bagian",
      indicator: "Minimal 4 kali konsultasi terdokumentasi dengan rekomendasi",
      category: "Koordinasi",
    },
    {
      id: 21,
      name: "Partisipasi Rakor Pimpinan PT (November 2025)",
      weight: 3,
      target: "Pimpinan hadir + laporan dibawa",
      schedule: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      achievement: 0,
      pelaksana: "Pimpinan & Kepala Bagian",
      indicator:
        "Pimpinan hadir Rakor, membawa laporan capaian EMIS & PDDikti 2025",
      category: "Koordinasi",
    },
    {
      id: 12,
      name: "Pengelolaan Administrasi dan Kearsipan",
      weight: 6,
      target: "100% dokumen terarsip (akses ≤5 menit)",
      schedule: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      achievement: 0,
      pelaksana: "Staf Administrasi",
      indicator:
        "100% dokumen fisik & digital tersimpan rapi, akses ≤5 menit",
      category: "Administrasi",
    },
    {
      id: 13,
      name: "Pelaporan Hasil Pelaksanaan Program",
      weight: 4,
      target: "12 laporan bulanan + 1 laporan tahunan",
      schedule: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      achievement: 0,
      pelaksana: "Kepala Bagian & Staf",
      indicator: "13 laporan tepat waktu (maksimal H+7 setiap bulan)",
      category: "Administrasi",
    },
    // SAPTO items
    {
      id: 22,
      name: "Koordinasi Pengumpulan Data Tabel SAPTO untuk LPMI",
      weight: 8,
      target: "15 tabel SAPTO terkumpul tepat waktu",
      schedule: [0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0],
      achievement: 0,
      pelaksana: "Operator EMIS & Koordinator Unit",
      indicator:
        "15 tabel SAPTO dari PDDikti terkoordinasi: Rasio Dosen-Mhs, Jabatan Akademik, Kelulusan Tepat Waktu, Trend Lulusan & Mahasiswa Baru",
      category: "Pelaporan Utama",
    },
    {
      id: 23,
      name: "Verifikasi & Validasi Data SAPTO Akreditasi PT",
      weight: 6,
      target: "100% data SAPTO tervalidasi akurat",
      schedule: [0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
      achievement: 0,
      pelaksana: "Kepala Bagian & Tim Verifikasi",
      indicator:
        "Cross-check data PDDikti dengan LPMI untuk 15 tabel SAPTO, error rate ≤3%",
      category: "Monitoring & Evaluasi",
    },
    {
      id: 24,
      name: "Asistensi Pengisian Data Prodi untuk Tabel SAPTO",
      weight: 5,
      target: "6 Prodi terbantu pengisian tabel",
      schedule: [0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0],
      achievement: 0,
      pelaksana: "Operator PDDikti & TU Prodi",
      indicator:
        "Asistensi teknis ke 6 Kaprodi untuk tabel: Rasio Dosen-Mhs, Kecukupan Dosen, Trend Lulusan, Kelulusan Tepat Waktu",
      category: "Koordinasi",
    },
    // BAN-PT new items
    {
      id: 25,
      name: "Pelaporan Implementasi & Luaran SPMI ke PDDIKTI (Triwulanan)",
      weight: 6,
      target: "4 laporan SPMI terunggah & tervalidasi",
      schedule: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
      achievement: 0,
      pelaksana: "Staf EMIS & PDDikti",
      indicator:
        "Pelaporan implementasi & luaran SPMI triwulan ke PDDIKTI tervalidasi (evidence lengkap)",
      category: "Monitoring & Evaluasi",
      refs: ["BAN-PT IAPS 5.0 Butir 3"],
    },
    {
      id: 26,
      name: "Pelaporan Publikasi Ilmiah Dosen di PDDIKTI",
      weight: 4,
      target: "100% publikasi terlapor oleh dosen aktif",
      schedule: [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0],
      achievement: 0,
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
      schedule: [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0],
      achievement: 0,
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
      schedule: [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
      achievement: 0,
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
      schedule: [0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0],
      achievement: 0,
      pelaksana: "Staf EMIS & PDDikti",
      indicator:
        "Dashboard menampilkan tren Maba (PDDIKTI) & keterserapan lulusan (Tracer) untuk semua prodi",
      category: "Pengembangan Sistem",
      refs: ["BAN-PT IAPS 5.0 Butir 15"],
    },
  ]);

  const [search, setSearch] = useState("");
  // Data bulan tetap Jan→Des; tampilan diputar Okt→Sep
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

  const getScheduleDot = (value) => {
    if (value === 1) return <div className="w-3.5 h-3.5 mx-auto rounded bg-green-500" />; // Pelaksanaan Utama
    if (value === 2) return <div className="w-3.5 h-3.5 mx-auto rounded bg-blue-500" />; // Persiapan/Evaluasi
    return <div className="w-3.5 h-3.5 mx-auto rounded bg-gray-200" />; // Kosong
  };

  const exportCSV = () => {
    const headers = [
      "No",
      "Kegiatan",
      "Bobot",
      "Target",
      ...monthsDisplay,
      "Capaian (%)",
      "Skor",
      
    ];

    const rows = filteredActivities.map((a, idx) => {
      const skor = ((a.achievement * a.weight) / 100).toFixed(2);
      return [
        idx + 1,
        a.name,
        a.weight,
        a.target,
        ...monthOrder.map((mi) => (a.schedule?.[mi] ? "✓" : "")),
        a.achievement,
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
    a.download = `renop-okt-okt.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-1">Rencana Operasional (Renop)</h1>
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
          📌 Dokumen ini diperuntukkan <b>khusus Staf EMIS & PDDikti</b>. Periode siklus: <b>Oktober → Oktober</b> (12 bulan).
        </div>

        {/* Dashboard Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          
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
                <p className="text-[11px] text-gray-500 mt-1">Rata-rata sederhana: {totals.simpleAvgAchievement.toFixed(1)}%</p>
              </div>
              <TrendingUp className="w-10 h-10 text-purple-500" />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-3 md:items-end md:justify-between">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Kategori Kegiatan (Adaptasi Workshop Kopertais 2024):</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[...new Set(activities.map((a) => a.category))].map((cat) => (
                  <div key={cat} className="flex items-start gap-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ${getCategoryColor(cat)}`}>
                      {cat}
                    </span>
                    <span className="text-xs text-gray-600 mt-1">
                      {(
                        {
                          Perencanaan: "Penyusunan dokumen, SOP, dan regulasi strategis",
                          Koordinasi: "Komunikasi antar unit dan stakeholder eksternal",
                          "Pelaporan Utama": "Pelaporan wajib ke PDDikti, EMIS, dan SISTER",
                          "Monitoring & Evaluasi": "Pengawasan dan penilaian pelaksanaan program",
                          "Pengembangan SDM": "Pelatihan dan peningkatan kompetensi operator",
                          "Pengembangan Sistem": "Integrasi dan perbaikan sistem informasi",
                          Administrasi: "Pengelolaan dokumen dan pelaporan rutin",
                          Pengembangan: "Program peningkatan sistem & kapasitas",
                        }
                      )[cat] || ""}
                    </span>
                  </div>
                ))}
              </div>
            </div>

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
                className="border rounded-lg px-3 py-2 w-full sm:w-72"
              />
              <label className="inline-flex items-center gap-2 text-sm">
                <input type="checkbox" checked={useNormalizedWeights} onChange={(e) => setUseNormalizedWeights(e.target.checked)} />
                Gunakan bobot ternormalisasi (Σ=100) pada ringkasan
              </label>
              <label className="inline-flex items-center gap-2 text-sm">
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
                  return (
                    <tr key={activity.id} className="border-b hover:bg-gray-50">
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
                          <div className="flex-1 hidden md:block">
                            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-2 bg-green-500" style={{ width: `${Math.min(100, activity.achievement)}%` }} />
                            </div>
                          </div>
                          <span className="text-xs ml-1">%</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center font-semibold text-indigo-600">{score}</td>
                                          </tr>
                  );
                })}
              </tbody>
              <tfoot className="bg-gray-100 font-semibold">
                <tr>
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
            </div>
            <div>
              <p className="mb-2"><strong>Skor</strong> = Capaian (%) × Bobot</p>
              <p className="mb-2"><strong>Progress Tertimbang</strong> = rata-rata capaian berbobot (opsional normalisasi bobot Σ=100)</p>
            </div>
          </div>
          <p className="text-[11px] text-gray-500 mt-2">Catatan: Jika opsi normalisasi diaktifkan, ringkasan menggunakan bobot yang diskalakan agar jumlahnya = 100. Nilai di tabel tetap memakai bobot asli.</p>
        </div>

        {/* Referensi */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6 rounded">
          <h3 className="font-semibold text-blue-800 mb-2">📚 Referensi & Dasar Hukum:</h3>
          <ul className="list-disc list-inside text-sm text-blue-700 space-y-1">
            <li>Peraturan BAN-PT Nomor 13 Tahun 2025 (IAPS 5.0) – Lampiran 3g (Butir: 3, 6, 12, 15, 18, 19, 23, 26)</li>
            <li>Kepmendikbudristek No. 133 Tahun 2023 tentang Juknis Data Dikti</li>
            <li>Workshop Peningkatan Akreditasi via EMIS & PDDikti - Kopertais W2 Jabar (23-24 Sept 2024)</li>
            <li>Materi: Prof. Dr. Aan Hasanah, M.Pd. (Transformasi Digital PTKIS)</li>
            <li>Narasumber: Pokja PDDikti & SISTER Kemenag Wilayah 2 Jawa Barat</li>
            <li>Legend jadwal — ✓: Pelaksanaan, •: Persiapan/Evaluasi, kosong: tidak terjadwal</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
