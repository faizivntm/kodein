import { useState } from 'react'
import { FaGithub, FaArrowUpRightFromSquare, FaAward } from 'react-icons/fa6'
import { Button } from '@/components/atoms/Button'
import type { Project } from '@/content/projects'
import { formatDate } from '@/lib/utils'

// Molecule: kartu satu karya. Karya profesional (tanpa repo) menonjolkan
// peran + dampak; karya open-source menonjolkan tombol repo/demo.
export function ProjectCard({ project }: { project: Project }) {
  const [copied, setCopied] = useState(false)
  const link = project.demo ?? project.repo

  async function share() {
    const url = link ?? window.location.href
    const data = { title: project.title, text: project.description, url }
    if (navigator.share) {
      try {
        await navigator.share(data)
      } catch {
        // user membatalkan — abaikan
      }
      return
    }
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard diblokir — abaikan
    }
  }

  return (
    <div className="brutal flex h-full flex-col p-5">
      <div className="flex items-center justify-between gap-2 text-xs text-mist">
        <span className="border-2 border-line bg-surf px-2.5 py-1 font-bold text-foam">
          {project.category}
        </span>
        {project.date && <time dateTime={project.date}>{formatDate(project.date)}</time>}
      </div>

      {project.badge && (
        <span className="mt-3 inline-flex w-fit items-center gap-1.5 border-2 border-line bg-sun px-2.5 py-1 text-xs font-bold text-foam">
          <FaAward className="h-3 w-3" /> {project.badge}
        </span>
      )}

      <h3 className="mt-3 font-display text-lg font-bold text-foam">{project.title}</h3>
      {project.role && (
        <p className="mt-0.5 text-sm font-bold text-mist">{project.role}</p>
      )}
      <p className="mt-2 text-sm text-mist">{project.description}</p>

      {project.highlights && project.highlights.length > 0 && (
        <ul className="mt-3 space-y-1.5">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2 text-sm text-mist">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-line" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="border-2 border-line bg-abyss px-2 py-0.5 text-xs font-medium text-foam">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-3 pt-5">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-line bg-surf px-4 py-2.5 text-sm font-bold text-foam shadow-brutal brutal-press hover:bg-surf-deep"
          >
            <FaArrowUpRightFromSquare className="h-3.5 w-3.5" /> Demo
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 border-2 border-line px-4 py-2.5 text-sm font-bold text-foam shadow-brutal brutal-press ${
              project.demo ? 'bg-tide' : 'bg-surf hover:bg-surf-deep'
            }`}
          >
            <FaGithub className="h-4 w-4" /> Repo
          </a>
        )}
        <Button variant="secondary" onClick={share}>
          {copied ? 'Link tersalin!' : 'Bagikan'}
        </Button>
      </div>
    </div>
  )
}
