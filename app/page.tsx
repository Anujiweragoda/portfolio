import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { Experience } from '@/components/experience'
import { Skills } from '@/components/skills'
import { Research } from '@/components/research'
import { Education } from '@/components/education'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Research />
        <Education />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
