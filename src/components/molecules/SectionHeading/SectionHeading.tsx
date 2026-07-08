// Molecule: judul section + sub-teks. Dipakai di home & halaman lain.
export function SectionHeading({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <div className="space-y-1">
      <h2 className="text-2xl font-bold tracking-tight text-foam">{title}</h2>
      {subtitle && <p className="text-mist">{subtitle}</p>}
    </div>
  )
}
