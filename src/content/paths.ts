// ┌─────────────────────────────────────────────────────────────────┐
// │  JALUR BELAJAR. Kurasi urutan belajar biar pengunjung nggak       │
// │  bingung mulai dari mana. Tiap jalur nyaring materi lewat          │
// │  `category` (nyambung ke filter /materials?category=…).           │
// │  Edit array `paths` di bawah.                                     │
// └─────────────────────────────────────────────────────────────────┘

export interface LearningPath {
  title: string
  description: string // 1 kalimat, kenapa ambil jalur ini
  category: string // HARUS sama persis dengan `category` di materials.ts
  level: 'Pemula' | 'Menengah' | 'Lanjutan'
}

// ponytail: MVP — jalur = filter kategori. Kalau nanti butuh urutan materi
// per-modul (kurikulum bernomor), tambah field `slugs: string[]` di sini.
export const paths: LearningPath[] = [
  {
    title: 'Dari Nol ke Programming',
    description: 'Fondasi logika & konsep dasar sebelum nyemplung ke bahasa apa pun.',
    category: 'Basic Programming',
    level: 'Pemula',
  },
  {
    title: 'Jalur Java',
    description: 'Java dari sintaks dasar sampai OOP — bahasa favorit di dunia enterprise.',
    category: 'Java',
    level: 'Pemula',
  },
  {
    title: 'Jalur Python',
    description: 'Python buat scripting, data, dan otomasi. Cepat dipelajari, luas dipakai.',
    category: 'Python',
    level: 'Pemula',
  },
]
