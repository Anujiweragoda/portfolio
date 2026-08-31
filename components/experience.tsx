import { experience } from '@/lib/data'
import { SectionHeader } from '@/components/section-header'
import { Reveal } from '@/components/reveal'

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-border bg-card/30"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeader
          index="02"
          label="Experience"
          title="Where I've worked"
        />

        <div className="mt-12 sm:mt-16">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 60}>
              <div className="grid gap-4 border-t border-border py-8 md:grid-cols-[minmax(0,240px)_1fr] md:gap-10 md:py-10">
                <div>
                  <p className="font-mono text-xs text-muted-foreground">
                    {job.period}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight">
                    {job.company}
                  </h3>
                  <p className="text-sm text-muted-foreground">{job.location}</p>
                </div>

                <div>
                  <p className="text-base font-medium text-brand">{job.role}</p>
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-pretty leading-relaxed text-muted-foreground"
                      >
                        <span
                          aria-hidden
                          className="mt-2.5 size-1 shrink-0 rounded-full bg-border"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {job.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-md border border-border bg-background px-2 py-1 font-mono text-xs text-muted-foreground"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
