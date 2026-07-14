import { createFileRoute } from '@tanstack/react-router'
import {
  FaAward,
  FaBuilding,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa6'
import { SectionHeading } from '@/components/molecules/SectionHeading'
import {KodeinLogo} from '@/components/atoms/KodeinLogo'
import { experience, certifications } from '@/content/experience'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      {
        title: 'Tentang — koDein',
      },
      {
        name: 'description',
        content:
          'Faiz Ivan Tama — Software Engineer yang berpengalaman dalam React, React Native, Flutter, dan AI on-device. Bekerja di PT Circle K Indonesia Utama.',
      },
    ],
  }),
  component: About,
})

const highlights = [
  { Icon: FaBuilding, label: 'Sekarang di', value: 'PT Circle K Indonesia Utama' },
  { Icon: FaAward, label: 'Karya', value: 'HAKI Terdaftar' },
]

const contacts = [
  { Icon: FaEnvelope, label: 'Email', href: 'mailto:faizivantama01@gmail.com' },
  { Icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/faizivantama' },
  { Icon: FaGithub, label: 'GitHub', href: 'https://github.com/faizivntm' },
]

function About() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-16">
      <SectionHeading
        title="Tentang"
        subtitle="Siapa di balik koDein. , dan kenapa situs ini ada."
      />

      {/* Intro */}
      <div className="pt-6 grid items-center gap-10 lg:grid-cols-[1fr_auto]">
        <div className="space-y-5 leading-relaxed text-mist">
          <p>
            Halo, gue <span className="font-semibold text-foam">Faiz Ivan Tama</span> —
            Software Engineer dari Depok. Sehari-hari bikin aplikasi di <span className="text-foam">PT Circkle K Indonesia Utama</span>, dan sebelumnya ngoding buat <span className="text-foam">PT United Tractors Tbk</span> dan buat riset &amp; proyek pemerintah bareng{' '}
            <span className="text-foam">BRIN</span> dan{' '}
            <span className="text-foam">KLHK</span>.
          </p>
          <p>
            Stack utama gue React, React Native, dan Flutter — dari aplikasi enterprise
            sampai fitur AI on-device. Salah satu karya gue, SIPEKA, sampai terdaftar Hak
            Cipta.
          </p>
          <p>
            <span className="font-semibold text-foam">kodein</span> lahir dari kebiasaan
            gue nyatet biar nggak lupa. Ternyata nyatet itu cara belajar paling jujur —
            jadi gue rapihin, publikasikan, siapa tahu berguna buat yang lain juga.
          </p>
          <p>
            <span className="inline-block bg-surf px-2 py-1 font-bold text-foam">
              Pelan-pelan aja, kalau buru-buru bisa kecelakaan.
            </span>
          </p>
        </div>

        <KodeinLogo cry className="order-first mx-auto h-100 w-auto sm:h-72 lg:order-last"
        />
      </div>

      {/* Trust signals */}
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {highlights.map((h) => (
          <div
            key={h.value}
            className="brutal flex items-center gap-3 p-4"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-line bg-surf text-foam">
              <h.Icon className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-mist">{h.label}</p>
              <p className="truncate font-semibold text-foam">{h.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pengalaman (timeline) */}
      <h2 className="mt-14 text-2xl font-bold text-foam">Pengalaman</h2>
      <ol className="mt-6 space-y-8 border-l-2 border-line pl-6">
        {experience.map((e) => (
          <li key={`${e.org}-${e.period}`} className="relative">
            <span className="absolute left-[-1.6rem] top-1.5 h-3 w-3 border-2 border-line bg-surf" />
            <p className="text-xs text-mist">{e.period}</p>
            <h3 className="mt-0.5 font-semibold text-foam">
              {e.role} <span className="font-bold text-mist">· {e.org}</span>
            </h3>
            <ul className="mt-2 space-y-1.5">
              {e.highlights.map((h) => (
                <li key={h} className="flex gap-2 text-sm text-mist">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-line" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      {/* Pendidikan & sertifikasi */}
      <div className="mt-14 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-foam">Sertifikasi</h2>
          <ul className="mt-4 space-y-2">
            {certifications.map((c) => (
              <li
                key={c}
                className="flex items-start gap-2 border-2 border-line bg-tide px-4 py-3 text-sm text-mist"
              >
                <FaAward className="mt-0.5 h-4 w-4 shrink-0 text-sun" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Kontak / CTA */}
      <div className="mt-14 border-2 border-line bg-surf p-8 text-center shadow-brutal-lg">
        <h2 className="text-2xl font-bold text-foam">Tertarik kerja bareng?</h2>
        <p className="mx-auto mt-2 max-w-md text-sm font-medium text-foam">
          Terbuka untuk peluang full-time maupun freelance. Langsung sapa gue lewat email
          atau sosial media di bawah.
        </p>
        <a
          href="mailto:faizivantama01@gmail.com"
          className="mt-6 inline-flex items-center gap-2 border-2 border-line bg-tide px-5 py-2.5 text-sm font-bold text-foam shadow-brutal brutal-press"
        >
          <FaEnvelope className="h-4 w-4" /> Hire Me
        </a>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-line bg-tide px-4 py-2 text-sm font-bold text-foam transition-transform hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              <c.Icon className="h-4 w-4" /> {c.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
