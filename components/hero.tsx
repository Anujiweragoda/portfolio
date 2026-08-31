import { ArrowUpRight, Mail } from 'lucide-react'
import { profile } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { GithubIcon, LinkedinIcon } from '@/components/icons'
import { ParticleNetwork } from '@/components/Particle-network-contained'

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate mx-auto max-w-6xl px-5 pt-36 pb-20 sm:px-8 sm:pt-44 sm:pb-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-[420px] max-w-5xl rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(109,94,252,0.28),transparent_42%)] blur-3xl" />

      <div className="pointer-events-none absolute right-0 top-40 z-0 hidden h-[320px] w-[320px] sm:block lg:h-[380px] lg:w-[380px]">
        <ParticleNetwork
          particleCount={42}
          maxDistance={140}
          speed={0.18}
          particleRadius={1.8}
        />
      </div>

      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/8 px-3 py-1 font-mono text-xs text-muted-foreground shadow-[0_0_0_1px_rgba(109,94,252,0.06)]">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand/70 opacity-75" />
            <span className="relative inline-flex size-1.5 rounded-full bg-brand" />
          </span>
          {profile.availability}
        </span>
      </Reveal>

      <Reveal delay={80}>
        <h1 className="mt-8 max-w-4xl text-balance bg-gradient-to-r from-foreground via-foreground to-brand bg-clip-text text-5xl font-semibold tracking-tight text-transparent sm:text-7xl">
          {profile.name}
        </h1>
      </Reveal>

      <Reveal delay={140}>
        <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-sm text-muted-foreground sm:text-base">
          <span className="text-foreground">{profile.role}</span>
          <span className="text-border">/</span>
          <span>{profile.location}</span>
        </p>
      </Reveal>

      <Reveal delay={200}>
        <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
          {profile.intro}
        </p>
      </Reveal>

      <Reveal delay={260}>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border border-transparent bg-foreground px-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/85"
          >
            View selected work
            <ArrowUpRight className="size-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex h-9 items-center justify-center rounded-lg border border-border/70 bg-background/80 px-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            Contact
          </a>

          <div className="ml-1 flex items-center gap-1">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <GithubIcon className="size-[18px]" />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <LinkedinIcon className="size-[18px]" />
            </a>
            <a
              href={profile.socials.email}
              aria-label="Email"
              className="inline-flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Mail className="size-[18px]" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}