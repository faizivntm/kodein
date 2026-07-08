import { Link } from '@tanstack/react-router'

// Organism: footer 4 kolom, senada dengan tema laut.
export function Footer() {
  return (
    <footer className="border-t border-line bg-deep">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-2">
          <span className="text-lg font-bold text-foam">
            paiss<span className="text-surf">Paus</span>.
          </span>
          <p className="text-sm text-mist">
            Catatan & materi belajar coding. Just keep swimming.
          </p>
        </div>

        <div className="space-y-2 text-sm">
          <h3 className="font-semibold text-foam">Popular Journey</h3>
          <p className="text-mist">Java</p>
          <p className="text-mist">Python</p>
        </div>

        <div className="space-y-2 text-sm">
          <h3 className="font-semibold text-foam">Social Media</h3>
          <p className="text-mist">Instagram: @faizivntm_</p>
          <p className="text-mist">LinkedIn: Faiz Ivan Tama</p>
        </div>

        <div className="space-y-2 text-sm">
          <h3 className="font-semibold text-foam">paissPaus</h3>
          <Link to="/about" className="block text-mist hover:text-surf">
            About
          </Link>
          <Link to="/materials" className="block text-mist hover:text-surf">
            Materi
          </Link>
        </div>
      </div>

      <div className="border-t border-line py-5 text-center text-xs text-mist">
        © {new Date().getFullYear()} paissPaus — dibuat oleh Faiz Ivan Tama.
      </div>
    </footer>
  )
}
