'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react'
import type { Project } from '@/lib/data'

export function MediaLightbox({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKey)

    return () => {
      document.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[120]">
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-xl"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${project.name} preview`}
        className="absolute inset-0 flex items-center justify-center p-3 sm:p-6"
        onClick={onClose}
      >
        <div
          className="relative z-10 w-full max-w-5xl overflow-hidden rounded-2xl border border-border bg-card shadow-[0_30px_80px_rgba(2,6,23,0.8)]"
          style={{ maxHeight: '78vh' }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-foreground">{project.name}</p>
              <p className="truncate font-mono text-xs text-muted-foreground">{project.category}</p>
            </div>

            <button
              type="button"
              aria-label="Close"
              onClick={onClose}
              className="inline-flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <X className="size-4" />
            </button>
          </div>

          <div className="max-h-[calc(78vh-4rem)] overflow-auto bg-muted/20">
            {project.media?.type === 'video' ? (
              <video
                controls
                autoPlay
                playsInline
                poster={project.media.poster ?? project.image}
                className="block max-h-[calc(78vh-6rem)] w-full object-contain"
              >
                <source src={project.media.src} type="video/mp4" />
              </video>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={project.image || '/placeholder.svg'}
                alt={`${project.name} screenshot`}
                className="block max-h-[calc(78vh-6rem)] w-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = '/placeholder.svg'
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
