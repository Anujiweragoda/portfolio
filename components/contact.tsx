import { ArrowUpRight, Mail } from 'lucide-react'
import { profile } from '@/lib/data'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import { GithubIcon, LinkedinIcon } from '@/components/icons'

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border bg-card/30"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal className="flex flex-col items-start">
          <div className="flex items-center gap-3 font-mono text-xs tracking-wider text-muted-foreground uppercase">
            <span className="text-brand">06</span>
            <span className="h-px w-8 bg-border" />
            <span>Contact</span>
          </div>

          <h2 className="mt-6 max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            Let&apos;s build something reliable together.
          </h2>
          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {profile.availability}. The fastest way to reach me is email — I read
            everything and reply within a day or two.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/85"
              render={<a href={profile.socials.email} />}
            >
              <Mail className="size-4" />
              {profile.email}
            </Button>
            <Button
              variant="outline"
              size="lg"
              render={
                <a href={profile.socials.github} target="_blank" rel="noreferrer" />
              }
            >
              <GithubIcon className="size-4" />
              GitHub
              <ArrowUpRight className="size-4 text-muted-foreground" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              render={
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                />
              }
            >
              <LinkedinIcon className="size-4" />
              LinkedIn
              <ArrowUpRight className="size-4 text-muted-foreground" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
