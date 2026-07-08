# 🐋 paissPaus

Website catatan & materi belajar coding pribadi — plus etalase karya (template & library) open-source. Tema laut, dengan filosofi _just keep swimming_.

**Live:** https://faizivntm.github.io/frontend-learning/

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — dev server & build
- **TanStack Router** — routing berbasis file (`src/routes`)
- **Tailwind CSS v4** — styling
- **react-icons** — ikon

## Menjalankan secara lokal

```bash
npm install
npm run dev      # http://localhost:5173
```

Perintah lain:

```bash
npm run build    # type-check (tsc) + build produksi ke dist/
npm run preview  # preview hasil build
npm run lint     # ESLint
```

## Struktur

```
src/
├── routes/          # halaman (file-based routing TanStack)
│   ├── index.tsx        # home
│   ├── materials/       # daftar & detail materi
│   ├── projects.tsx     # daftar karya
│   └── about.tsx
├── content/         # SUMBER KONTEN (edit di sini)
│   ├── materials.ts     # materi & catatan belajar
│   └── projects.ts      # karya / repository
├── components/      # atoms / molecules / organisms / templates
├── lib/             # util kecil (cn, formatDate)
└── index.css        # design token tema laut (@theme)
```

## Menambah konten

Cukup edit file di `src/content/` — semua halaman baca dari sini, tidak perlu sentuh komponen.

**Materi baru** → tambah objek di `src/content/materials.ts`:

```ts
{
  slug: 'judul-materi',      // dipakai di URL /materials/<slug>
  title: 'Judul Materi',
  summary: 'Ringkasan singkat untuk kartu.',
  category: 'Java',
  date: '2026-07-08',        // materi terbaru tampil paling atas
  tags: ['java', 'dasar'],
  body: [
    { type: 'heading', text: 'Sub-judul' },
    { type: 'paragraph', text: 'Paragraf biasa.' },
    { type: 'list', items: ['poin a', 'poin b'] },
    { type: 'code', lang: 'java', code: 'System.out.println("hi");' },
  ],
}
```

**Karya baru** → tambah objek di `src/content/projects.ts`:

```ts
{
  title: 'Nama Library',
  description: 'Deskripsi singkat.',
  repo: 'https://github.com/faizivntm/...',
  tech: ['Python', 'FastAPI'],
  category: 'Template',      // atau 'Library', 'Tools'
  date: '2026-07-08',
}
```

## Deployment

Otomatis via **GitHub Actions** (`.github/workflows/deploy.yml`): setiap push/merge ke `main` akan build lalu deploy ke **GitHub Pages**.

Syarat sekali setup: di **Settings → Pages → Build and deployment**, pilih **Source: GitHub Actions**.

> Situs dilayani di sub-path `/<nama-repo>/`, jadi `base` Vite & `basepath` router diisi otomatis dari nama repo saat build (lihat `vite.config.ts` dan `src/main.tsx`).
