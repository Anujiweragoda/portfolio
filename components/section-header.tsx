import { Reveal } from '@/components/reveal'

export function SectionHeader({
  index,
  label,
  title,
  description,
}: {
  index: string
  label: string
  title: string
  description?: string
}) {
  return (
    <Reveal className="max-w-2xl">
      <div className="flex items-center gap-3 font-mono text-xs tracking-wider text-muted-foreground uppercase">
        <span className="text-brand">{index}</span>
        <span className="h-px w-8 bg-border" />
        <span>{label}</span>
      </div>
      <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </Reveal>
  )
}
