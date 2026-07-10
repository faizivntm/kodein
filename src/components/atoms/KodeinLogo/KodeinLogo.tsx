import cryImg from '@/assets/kodein-cry.png'
import happyImg from '@/assets/kodein-happy.png'
import headImg from '@/assets/kodein-head.png'

// Atom: maskot kodein (anak Indonesia jenius, sandal jepit + kaus kutang).
// `full` → seluruh badan (hero); default → potongan wajah untuk logo kompak.
// Kontrol ukuran lewat className: tinggi + w-auto, mis. "h-9 w-auto".
export function KodeinLogo({
  className,
  full = false,
  cry = false,
}: {
  className?: string
  full?: boolean
  cry?: boolean
}) {
  return (
    <img
      src={full ? happyImg : cry ? cryImg: headImg}
      alt="kodein"
      draggable={false}
      className={className}
    />
  )
}
