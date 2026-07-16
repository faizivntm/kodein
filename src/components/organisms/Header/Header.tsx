import { Link } from '@tanstack/react-router'
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa'
import { NavLink } from '@/components/molecules/NavLink'
import { KodeinLogo } from '@/components/atoms/KodeinLogo'
import { useToggle } from '@/hooks/useToggle'
import { useTheme } from '@/hooks/useTheme'

// Organism: header sticky dengan blur di langit malam.
// Desktop: nav inline. Mobile: nav collapse jadi menu hamburger.
export function Header() {
  const [open, toggle] = useToggle(false)
  const { theme, toggle: toggleTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 border-b-2 border-line bg-deep">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link
          to="/"
          onClick={() => open && toggle()}
          className="flex shrink-0 items-center gap-2 text-lg font-bold text-foam"
        >
          <KodeinLogo className="h-9 w-auto" />
          ko<span className="bg-surf px-1">Dein</span>.
        </Link>

        {/* Nav desktop */}
        <nav className="hidden gap-6 text-sm sm:flex">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/materials">Materi</NavLink>
          <NavLink to="/projects">Project</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>

        <div className="flex items-center gap-4">
          {/* Toggle tema */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Mode terang' : 'Mode gelap'}
            className="text-foam hover:text-surf-deep"
          >
            {theme === 'dark' ? <FaSun className="h-5 w-5" /> : <FaMoon className="h-5 w-5" />}
          </button>

          {/* Tombol hamburger (mobile) for header */}
          <button
            type="button"
            onClick={toggle}
            aria-label="Menu"
            aria-expanded={open}
            className="text-foam sm:hidden"
          >
            {open ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Menu dropdown (mobile) */}
      {open && (
        <nav className="flex flex-col border-t-2 border-line bg-deep px-6 py-2 text-sm sm:hidden">
          <NavLink to="/" onClick={toggle} className="py-2">
            Home
          </NavLink>
          <NavLink to="/materials" onClick={toggle} className="py-2">
            Materi
          </NavLink>
          <NavLink to="/projects" onClick={toggle} className="py-2">
            Project
          </NavLink>
          <NavLink to="/about" onClick={toggle} className="py-2">
            About
          </NavLink>
        </nav>
      )}
    </header>
  )
}
