import { GraduationCap } from 'lucide-react'
import { education } from '@/lib/data'
import { SectionHeader } from '@/components/section-header'
import { Reveal } from '@/components/reveal'

export function Education() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeader index="05" label="Education" title="Academic background" />

      <div className="mt-12 sm:mt-16">
        {education.map((edu, i) => (
          <Reveal key={edu.school} delay={i * 60}>
            <div className="grid gap-6 rounded-2xl border border-border bg-card/50 p-6 sm:p-8 md:grid-cols-[minmax(0,280px)_1fr] md:gap-10">
              <div>
                <span className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-background text-brand">
                  <GraduationCap className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold tracking-tight">
                  {edu.school}
                </h3>
                <p className="text-sm text-brand">{edu.degree}</p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  {edu.period}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{edu.detail}</p>
              </div>

              <ul className="flex flex-col justify-center gap-3 border-t border-border pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-10">
                {edu.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-3 text-pretty leading-relaxed text-muted-foreground"
                  >
                    <span
                      aria-hidden
                      className="mt-2.5 size-1 shrink-0 rounded-full bg-border"
                    />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
