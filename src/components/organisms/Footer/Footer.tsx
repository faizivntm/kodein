import { Link } from '@tanstack/react-router'
import { FaCode, FaInstagram, FaJava, FaLinkedin, FaPython, FaMugHot } from 'react-icons/fa'
import { KodeinLogo } from '@/components/atoms/KodeinLogo'

// ponytail: ganti dengan handle Trakteer/Saweria asli kamu.
const TRAKTEER_URL = 'https://trakteer.id/faizivntm'

// Organism: footer 4 kolom, gaya brutalist.
export function Footer() {
  return (
    <footer className="border-t-2 border-line bg-deep">
      {/* CTA dukung — traktir kopi */}
      <div className="border-b-2 border-line bg-surf">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
          <p className="text-lg font-bold text-foam">
            Materi ini gratis. Kalau kebantu, boleh traktir kopi ☕
          </p>
          <a
            href={TRAKTEER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 border-2 border-line bg-tide px-5 py-2.5 text-sm font-bold text-foam shadow-brutal brutal-press"
          >
            <FaMugHot className="h-4 w-4" /> Traktir di Trakteer
          </a>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-2">
          <span className="flex items-center gap-2 text-lg font-bold text-foam">
            <KodeinLogo className="h-9 w-auto" />
            ko<span className="bg-surf px-1">Dein</span>.
          </span>
          <p className="text-sm text-mist">
            Catatan & materi belajar coding dari engineer industri.
          </p>
        </div>

        <div className="space-y-2 text-sm">
          <h3 className="font-bold text-foam">Popular Journey</h3>
          <div className="flex flex-row items-center gap-2 text-mist"><FaCode /> Basic Programming</div>
          <div className="flex flex-row items-center gap-2 text-mist"><FaJava /> Java</div>
          <div className="flex flex-row items-center gap-2 text-mist"><FaPython /> Python</div>
        </div>

        <div className="space-y-2 text-sm">
          <h3 className="font-bold text-foam">Social Media</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-mist hover:text-foam">
              <FaInstagram className="h-6 w-6" />
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/faizivntm_/">@faizivntm_</a>
            </div>
            <div className="flex items-center gap-3 text-mist hover:text-foam">
              <FaLinkedin className="h-6 w-6" />
              <a target="_blank" rel="noopener noreferrer" href="https://id.linkedin.com/in/faizivantama">Faiz Ivan Tama</a>
            </div>
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <h3 className="font-bold text-foam">kodein</h3>
          <Link to="/about" className="block font-medium text-mist underline-offset-4 hover:text-foam hover:underline">
            About
          </Link>
          <Link to="/materials" className="block font-medium text-mist underline-offset-4 hover:text-foam hover:underline">
            Materi
          </Link>
        </div>
      </div>

      <div className="border-t-2 border-line py-5 text-center text-xs font-medium text-mist">
        © {new Date().getFullYear()} kodein — dibuat oleh Faiz Ivan Tama.
      </div>
    </footer>
  )
}
