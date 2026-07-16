import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

// Baca tema awal dari kelas <html> yang sudah dipasang script anti-flash di
// index.html (fallback ke sistem). Toggle memutakhirkan kelas + localStorage.
function current(): Theme {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(current)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  return { theme, toggle }
}
