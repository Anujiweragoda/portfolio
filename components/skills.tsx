import { skillGroups } from '@/lib/data'
import { SectionHeader } from '@/components/section-header'
import { Reveal } from '@/components/reveal'

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeader
        index="03"
        label="Technical skills"
        title="Tools I reach for"
        description="Organized by where they sit in the stack. I favor depth in a few areas and enough breadth to work across the whole system."
      />

      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.category} delay={(i % 3) * 60}>
            <div className="flex h-full flex-col bg-card p-6 transition-colors duration-300 hover:bg-card/60">
              <h3 className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md bg-muted px-2.5 py-1 text-sm text-foreground/90"
                  >
                    {skill}
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
