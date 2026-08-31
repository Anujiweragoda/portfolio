'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react'
import type { Project } from '@/lib/data'
import { Button } from '@/components/ui/button'

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
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} preview`}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Close preview"
        onClick={onClose}
        className="absolute inset-0 bg-background/85 backdrop-blur-md"
      />
      <div
        className="relative z-10 w-full max-w-5xl overflow-hidden rounded-xl border border-border bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <div className="min-w-0">
            <p className="truncate text-sm font-medium">{project.name}</p>
            <p className="truncate font-mono text-xs text-muted-foreground">
              {project.category}
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Close"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="size-4" />
          </Button>
        </div>

        <div className="bg-muted/40">
          {project.media?.type === 'video' ? (
            <video
              controls
              autoPlay
              playsInline
              poster={project.media.poster ?? project.image}
              className="aspect-video w-full"
            >
              <source src={project.media.src} type="video/mp4" />
            </video>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.image || '/placeholder.svg'}
              alt={`${project.name} screenshot`}
              className="aspect-video w-full object-cover"
            />
          )}
        </div>
      </div>
    </div>
  )
}
