import { createFileRoute } from '@tanstack/react-router'
import { SectionHeading } from '@/components/molecules/SectionHeading'
import { BoyCodeLogo } from '@/components/atoms/BoyCodeLogo'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-16">
      <SectionHeading title="About boyCode" subtitle="Semua tentang kita. -peter n fun (si peter is fun)" />
      <div className="pt-5 grid items-center gap-10 lg:grid-cols-[1fr_auto]">
      <div className="space-y-5 leading-relaxed text-mist">
          <p>
            <span className="font-semibold text-foam">boyCode</span> Tadinya gue mau namain webnya baCode, ngambil dari kata "bacot". Tapi terlalu kasar nanti gue dimarahin mamah. Jadi gue buat lah boyCode, itu kepikiran karena disuruh boikot product penjajag sama mamah.
          </p>

          <p>
          Webiste ini isinya dokumentasi belajar gue. Gue sengaja buat ini untuk mempermudah diri gue sendiri, selebihnya semoga bisa bermanfaat juga buat semua. Oiya gue buat ini bukan karena gue jago ngoding, justru karena gue ga jago. Jadi sengaja kyk buat contekan gtu.
          </p>

          <p>
          Walaupun kita belum jago ngoding, jangan berhenti belajar. Iya, sekarang AI makin canggih, bahkan banyak pekerjaan mulai berubah. Tapi bukan berarti kita harus nyerah. Belajar aja. Siapa tahu hasilnya nggak langsung kelihatan hari ini. Kalau pun nanti nggak sesuai harapan, setidaknya kita pulang bawa ilmu, bukan cuma penyesalan.
          </p>

          <p className="font-semibold text-surf">
            Pelan-pelan aja, kalau buru-buru bisa kecelakaan. 
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
