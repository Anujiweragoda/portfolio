import { ArrowUpRight } from 'lucide-react'
import { research } from '@/lib/data'
import { SectionHeader } from '@/components/section-header'
import { Reveal } from '@/components/reveal'

export function Research() {
  return (
    <section
      id="research"
      className="border-t border-border bg-card/30"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeader
          index="04"
          label="AI / ML research"
          title="Applied machine learning"
          description="Research-adjacent work where I built evaluation tooling, trained models, and measured results carefully."
        />

        <div className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-1">
          {research.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <a
                href={item.href}
                className="group mx-auto flex h-full w-full max-w-5xl flex-col rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-foreground/25 sm:p-8"
              >
                <div className="flex items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
                  <span>{item.venue}</span>
                  <span>{item.year}</span>
                </div>
                <h3 className="mt-4 flex items-start justify-between gap-3 text-xl font-semibold tracking-tight">
                  <span className="text-balance">{item.title}</span>
                  <ArrowUpRight className="mt-1 size-5 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </h3>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  {item.summary}
                </p>

                <div className="mt-5 space-y-4 border-t border-border/80 pt-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Problem
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                      {item.problem}
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Solution
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                      {item.solution}
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Research contribution
                    </p>
                    <ul className="mt-2 space-y-2 text-sm leading-relaxed text-foreground/90">
                      {item.contributions.map((contribution) => (
                        <li key={contribution} className="flex gap-2">
                          <span className="mt-1.5 size-1.5 rounded-full bg-foreground/70" />
                          <span>{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-border bg-background px-2 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
