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
      <h2 className="inline-block bg-surf px-2 py-0.5 text-2xl font-bold tracking-tight text-foam">
        {title}
      </h2>
      {subtitle && <p className="mt-2 max-w-2xl text-mist">{subtitle}</p>}
    </div>
  )
}
