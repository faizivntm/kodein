import headImg from '@/assets/boycode-head.png'
import fullImg from '@/assets/boycode.png'

// Atom: maskot boyCode (anak Indonesia jenius, sandal jepit + kaus kutang).
// `full` → seluruh badan (hero); default → potongan wajah untuk logo kompak.
// Kontrol ukuran lewat className: tinggi + w-auto, mis. "h-9 w-auto".
export function BoyCodeLogo({
  className,
  full = false,
}: {
  className?: string
  full?: boolean
}) {
  return (
    <img
      src={full ? fullImg : headImg}
      alt="boyCode"
      draggable={false}
      className={className}
    />
  )
}
