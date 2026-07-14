import type { Block } from '@/content/materials'

// Organism: render body materi (array Block) jadi elemen HTML.
// Nambah tipe blok? Tambah case di sini + tipe di content/materials.ts.
export function ContentBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'heading':
            return (
              <h2 key={i} className="break-words font-display text-2xl font-bold text-foam">
                {block.text}
              </h2>
            )
          case 'paragraph':
            return (
              <p key={i} className="break-words leading-relaxed text-mist">
                {block.text}
              </p>
            )
          case 'list':
            return (
              <ul key={i} className="list-disc space-y-1 break-words pl-6 text-mist marker:text-line">
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            )
          case 'code':
            return (
              <pre
                key={i}
                className="overflow-x-auto border-2 border-line bg-[#12100e] p-4 text-sm text-[#f5e6c8] shadow-brutal"
              >
                <code>{block.code}</code>
              </pre>
            )
          case 'html':
            // Konten rich-text dari editor. HTML dibatasi skema TipTap (tanpa <script>),
            // ditulis hanya oleh admin terautentikasi.
            // ponytail: cukup untuk single-admin; tambah DOMPurify kalau kontennya jadi multi-author/untrusted.
            return (
              <div
                key={i}
                className="rich"
                dangerouslySetInnerHTML={{ __html: block.html }}
              />
            )
        }
      })}
    </div>
  )
}
