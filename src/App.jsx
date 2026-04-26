import { useState } from 'react'
import Projects from './components/Projects'
import './index.css'

const technologies = [
  'React', 'Next.js', 'TypeScript', 'Node.js',
  'Django', 'Java', 'Firebase', 'MongoDB', 'PostgreSQL', 'Tailwind CSS',
]

const CONTAINER = 'max-w-4xl mx-auto px-6 sm:px-10'

export default function App() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('sgilstefania@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-surface text-on-surface font-sans antialiased selection:bg-primary-container selection:text-on-primary-container">

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100">
        <div className="w-full px-8 sm:px-16 flex justify-between items-center h-14">
          <div className="text-lg font-bold tracking-tighter text-zinc-900">
            STEF DEV
          </div>
          <nav className="hidden md:flex gap-8">
            <a
              href="#work"
              className="text-sm uppercase font-medium tracking-tight text-zinc-900 border-b border-zinc-900 pb-1"
            >
              Work
            </a>
          </nav>
          <div></div>
        </div>
      </header>

      <main className={`${CONTAINER} pt-28 pb-24`}>

        {/* Hero */}
        <section className="py-15">
          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 lg:col-span-8">
              <h1 className="text-[52px] font-semibold text-on-surface leading-[1.15] tracking-[-0.03em]">
                Full-Stack Developer. Creating modern solutions for real problems.
              </h1>
            </div>
            <div className="col-span-12 lg:col-span-4 pb-1">
              <p className="text-base text-on-surface-variant leading-relaxed">
                Specializing in high-performance web applications and design systems.
                5+ years translating complex requirements into refined, accessible interfaces.
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <Projects />

        {/* What I Do */}
        <section className="py-24">
          <div className="text-center mb-12">
            <h2 className="text-[38px] font-semibold text-on-surface tracking-[-0.02em] leading-tight mb-3">
              What I Do
            </h2>
            <p className="text-base text-on-surface-variant">
              I offer comprehensive development services across web platforms
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="p-8 rounded-xl bg-surface-container-lowest border border-outline-variant hover:border-primary-fixed-dim transition-colors">
              <span
                className="material-symbols-outlined mb-5 block"
                style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'opsz' 40", fontSize: '36px', color: '#6750A4' }}
              >
                language
              </span>
              <h3 className="text-xl font-medium text-on-surface mb-3 tracking-tight">Web Development</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Creating modern web applications with Next.js, React, and TypeScript
              </p>
            </div>
            <div className="p-8 rounded-xl bg-surface-container-lowest border border-outline-variant hover:border-primary-fixed-dim transition-colors">
              <span
                className="material-symbols-outlined mb-5 block"
                style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'opsz' 40", fontSize: '36px', color: '#6750A4' }}
              >
                electric_bolt
              </span>
              <h3 className="text-xl font-medium text-on-surface mb-3 tracking-tight">Full-Stack Solutions</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                End-to-end development from backend APIs to frontend interfaces
              </p>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="pb-24">
          <div className="text-center mb-10">
            <h2 className="text-[38px] font-semibold text-on-surface tracking-[-0.02em] leading-tight mb-3">
              Technologies I Work With
            </h2>
            <p className="text-base text-on-surface-variant">
              A diverse toolkit for building scalable and modern applications
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-5 py-2.5 rounded-full bg-surface-container-lowest border border-outline-variant text-on-surface text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-15 text-center">
          <h2 className="text-[38px] font-semibold text-on-surface tracking-[-0.02em] leading-tight mb-3">
            Get in Touch
          </h2>
          <p className="text-base text-on-surface-variant mb-10">
            Let's build something great together.
          </p>
          <div className="relative inline-block">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-on-primary rounded-full hover:bg-primary-container hover:text-on-primary-container transition-colors text-sm font-medium cursor-pointer"
            >
              sgilstefania@gmail.com
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>mail</span>
            </button>
            {copied && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-zinc-900 text-white text-xs rounded whitespace-nowrap">
                Copied!
              </div>
            )}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-100 bg-white py-10">
        <div className={`${CONTAINER} flex flex-col md:flex-row justify-between items-center gap-4`}>
          <div className="text-sm font-semibold text-zinc-900">
            © 2025 Stef Dev. Built with precision.
          </div>
          <nav className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/stefania-gil/"
              target="_blank"
              rel="noreferrer"
              className="text-xs tracking-widest uppercase text-zinc-400 hover:text-accent transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/StefiGil"
              target="_blank"
              rel="noreferrer"
              className="text-xs tracking-widest uppercase text-zinc-400 hover:text-accent transition-colors duration-300"
            >
              GitHub
            </a>
          </nav>
        </div>
      </footer>

    </div>
  )
}
