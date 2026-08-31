'use client'

import { useState } from 'react'
import { projects } from '@/lib/data'
import { SectionHeader } from '@/components/section-header'
import { ProjectCard } from '@/components/project-card'
import { Reveal } from '@/components/reveal'
import { MediaLightbox } from '@/components/media-lightbox'

export function Projects() {
  const [openProjectId, setOpenProjectId] = useState<string | null>(null)
  const activeProject = projects.find((project) => project.id === openProjectId) ?? null

  return (
    <>
      <section id="work" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeader
          index="01"
          label="Selected work"
          title="Projects I'm proud of"
          description="A few things I've designed, built, and shipped end to end — from systems work to applied machine learning."
        />

        <div className="mt-12 flex flex-col gap-6 sm:mt-16 sm:gap-8">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 60}>
              <ProjectCard
                project={project}
                index={i}
                isOpen={activeProject?.id === project.id}
                onOpen={() => setOpenProjectId(project.id)}
                onClose={() => setOpenProjectId(null)}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {activeProject && (
        <MediaLightbox project={activeProject} onClose={() => setOpenProjectId(null)} />
      )}
    </>
  )
}
