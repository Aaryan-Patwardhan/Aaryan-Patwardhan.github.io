import NavBar from '@/components/ui/NavBar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Contact from '@/components/sections/Contact'
import CursorDot from '@/components/layout/CursorDot'

export default function Home() {
  return (
    <>
      <CursorDot />
      <NavBar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="py-8 text-center font-mono text-xs text-[var(--text-dim)]">
        Built with Next.js · Deployed on Vercel
      </footer>
    </>
  )
}
