import { createFileRoute } from '@tanstack/react-router'
import { SectionHeading } from '@/components/molecules/SectionHeading'
import { BoyCodeLogo } from '@/components/atoms/BoyCodeLogo'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-16">
      <SectionHeading title="About boyCode" subtitle="Filosofi di balik nama." />
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
      <div className="space-y-5 leading-relaxed text-mist">
          <p>
            <span className="font-semibold text-foam">boyCode</span> ada dari keyakinan sederhana: ngoding itu bukan soal laptop mahal, meja estetik, atau setup RGB yang bikin mata silau. Yang penting otaknya mau diajak mikir, tangannya mau ngetik, dan mentalnya kuat pas ketemu bug.
          </p>

          <p>
          Website ini gue bikin buat nyimpen perjalanan belajar gue. Isinya campur-campur: tutorial, catatan, eksperimen, error yang bikin pengen banting laptop (tapi nggak jadi), sampai hal-hal menarik yang gue temuin selama ngoprek.          
          </p>

          <p className="font-semibold text-surf">
            Boleh sederhana, tapi mimpi jangan biasa.
          </p>
      </div>


        <BoyCodeLogo
          full
          className="order-first mx-auto h-72 w-auto drop-shadow-[0_0_30px_rgba(34,211,238,0.3)] sm:h-80 lg:order-last"
        />
      </div>
    </div>
  )
}
