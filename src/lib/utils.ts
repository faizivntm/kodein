// Gabungkan className secara kondisional. Minimal & tanpa dependency.
// ponytail: cukup untuk join biasa. Kalau butuh resolusi konflik class Tailwind
// (mis. "p-2" vs "p-4"), install `clsx` + `tailwind-merge` dan ganti fungsi ini.
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ')
}

// Tanggal ISO ("2026-07-08") -> "8 Jul 2026".
export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}
