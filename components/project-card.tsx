'use client'

import { ArrowUpRight, Maximize2, Play } from 'lucide-react'
import type { Project } from '@/lib/data'
import { cn } from '@/lib/utils'

export function ProjectCard({
  project,
  index,
  isOpen,
  onOpen,
  onClose,
}: {
  project: Project
  index: number
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}) {
  const hasVideo = project.media?.type === 'video'

  return (
    <article
      className={cn(
        'group grid overflow-hidden rounded-2xl border border-border bg-card/50 transition-colors duration-300 hover:border-foreground/25',
        'lg:grid-cols-2',
        index % 2 === 1 && 'lg:[&>figure]:order-last',
        isOpen && 'ring-1 ring-foreground/10',
      )}
    >
      <figure className="relative border-b border-border lg:border-b-0 lg:border-r">
        <button
          type="button"
          onClick={onOpen}
          aria-label={`Open ${project.name} ${hasVideo ? 'demo' : 'preview'}`}
          className="relative block aspect-[16/10] w-full overflow-hidden"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image || '/placeholder.svg'}
            alt={`${project.name} interface`}
            className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            onError={(e) => {
              e.currentTarget.src = '/placeholder.svg'
            }}
          />
          <span className="absolute inset-0 bg-background/0 transition-colors duration-300 group-hover:bg-background/10" />
          <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1.5 text-xs font-medium backdrop-blur-md">
            {hasVideo ? (
              <>
                <Play className="size-3.5 fill-current" /> Watch demo
              </>
            ) : (
              <>
                <Maximize2 className="size-3.5" /> View screenshot
              </>
            )}
          </span>
        </button>
      </figure>

      <div className="flex flex-col justify-between gap-8 p-6 sm:p-8">
        <div>
          <div className="flex items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight">
            {project.name}
          </h3>
          <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </div>

        <div>
          <ul className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-md border border-border bg-background px-2 py-1 font-mono text-xs text-muted-foreground"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="group/link inline-flex items-center gap-1 text-sm font-medium text-foreground"
              >
                {link.label}
                <ArrowUpRight className="size-4 text-muted-foreground transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:text-foreground" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
