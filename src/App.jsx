import { useEffect, useState } from 'react'
import Projects from './components/Projects'
import './index.css'

const technologies = [
  // Frontend & UI
  'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Vite',
  // Backend & DB
  'Node.js', 'Prisma', 'Spring Boot', 'Java', 'PostgreSQL', 'MySQL',
  // Tools & OS
  'Docker', 'Linux', 'Git/GitHub', 'Postman'
];

const C = 'max-w-[1200px] mx-auto px-8'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function App() {
  const [copied, setCopied] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 120
      let currentSection = 'home'

      navItems.forEach(({ id }) => {
        const section = document.getElementById(id)

        if (section && section.offsetTop <= scrollPosition) {
          currentSection = id
        }
      })

      const isAtBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8

      setActiveSection(isAtBottom ? 'contact' : currentSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('sgilstefania@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const getNavLinkClass = (sectionId) =>
    `pb-1 border-b-2 transition-colors duration-200 ${
      activeSection === sectionId
        ? 'text-primary border-primary'
        : 'text-on-surface-variant border-transparent hover:text-primary'
    }`

  return (
    <div className="bg-surface text-on-surface font-sans antialiased selection:bg-primary-container selection:text-on-primary-container">

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/90 backdrop-blur-md border-b border-outline-variant shadow-[0_4px_20px_-5px_rgba(99,102,241,0.08)]">
        <div className={`${C} flex justify-between items-center h-16`}>
          <div className="text-xl font-black tracking-tighter text-on-surface">
            STEF DEV
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-tight">
            {navItems.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={getNavLinkClass(id)}
                aria-current={activeSection === id ? 'page' : undefined}
                onClick={() => setActiveSection(id)}
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href="/example.pdf"
            download
            className="bg-primary text-on-primary px-6 py-2 rounded-lg text-sm font-semibold hover:bg-primary-container transition-all active:scale-95 duration-100"
          >
            Resume
          </a>
        </div>
      </header>

      <main className="pt-16">

        {/* Hero */}
        <section id="home" className="relative isolate overflow-hidden bg-[#fbfaff] scroll-mt-16">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_88%_0%,rgba(70,72,212,0.24)_0%,rgba(124,119,255,0.18)_24%,rgba(224,225,255,0.42)_42%,rgba(251,250,255,0)_70%)]" />
          <div className={`${C} pt-24 pb-32`}>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <span className="inline-block py-1 px-3 rounded-full bg-surface-container-high text-primary text-[12px] font-semibold tracking-widest uppercase mb-6">
                  Available for new opportunities
                </span>
                <h1 className="text-[38px] font-bold text-on-surface leading-[1.1] tracking-[-0.02em] mb-6">
                  Full-Stack Developer. Creating modern solutions for real problem real problems.
                </h1>
                <p className="text-[18px] text-on-surface-variant leading-relaxed mb-10 max-w-2xl">
                  With over 2+ years of experience in building scalable web applications,
                  I bridge the gap between complex backend logic and intuitive frontend experiences.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#projects"
                    className="bg-primary text-on-primary px-8 py-4 rounded-xl text-sm font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
                  >
                    View My Work
                  </a>
                  <a
                    href="#contact"
                    className="border border-outline bg-white text-on-surface px-8 py-4 rounded-xl text-sm font-semibold hover:bg-surface-container-low transition-all duration-200"
                  >
                    Get In Touch
                  </a>
                </div>
              </div>
              <div className="flex-shrink-0">
                <img
                  src="/perfil.png"
                  alt="Stefania Gil"
                  className="w-72 h-72 object-cover rounded-3xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="bg-surface-container-lowest">
          <div className={C}>
            <Projects />
          </div>
        </section>

        {/* What I Do */}
        <section id="about" className="bg-white scroll-mt-16">
          <div className={`${C} py-24`}>
            <div className="text-center mb-16">
              <h2 className="text-[38px] font-semibold text-on-surface tracking-[-0.02em] leading-tight mb-4">
                What I Do
              </h2>
              <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: 'language',
                  title: 'Web Development',
                  description: 'Building responsive, performant, and accessible websites using modern frontend frameworks and best practices.',
                },
                {
                  icon: 'layers',
                  title: 'Full-Stack Solutions',
                  description: 'Architecting complex systems from database design to API development and seamless frontend integration.',
                },
                {
                  icon: 'palette',
                  title: 'UI/UX Design',
                  description: 'Designing user-centric interfaces with a focus on usability, visual hierarchy, and clean technical aesthetics.',
                },
              ].map(({ icon, title, description }) => (
                <div key={title} className="group p-10 rounded-xl bg-surface-container-low hover:bg-surface-container-lowest border border-transparent hover:border-outline-variant hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 bg-surface-container-lowest rounded-lg flex items-center justify-center mb-8 shadow-sm group-hover:bg-primary transition-colors duration-300">
                    <span
                      className="material-symbols-outlined text-primary group-hover:text-white transition-colors duration-300"
                      style={{ fontSize: '28px' }}
                    >
                      {icon}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-on-surface mb-3 tracking-tight">{title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="bg-surface-container-low/30">
          <div className={`${C} py-24`}>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/3">
                <h2 className="text-[38px] font-semibold text-on-surface tracking-[-0.02em] leading-tight mb-4">
                  Technologies I Work With
                </h2>
                <p className="text-base text-on-surface-variant leading-relaxed">
                  A modern stack enables me to build robust, scalable solutions.
                  I'm constantly evolving my toolkit to include the latest industry standards.
                </p>
              </div>
              <div className="md:w-2/3">
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-5 py-2.5 bg-surface-container-lowest border border-outline-variant rounded-full text-sm text-on-surface hover:border-primary hover:text-primary transition-colors shadow-sm cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-primary scroll-mt-16">
          <div className={`${C} py-24 text-center`}>
            <h2 className="text-[48px] font-bold text-white leading-[1.1] tracking-[-0.02em] mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-primary-fixed max-w-2xl mx-auto mb-12">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            <div className="flex justify-center items-center gap-6 flex-wrap">
              <div className="relative">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary rounded-xl text-sm font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-200 border border-white/10 cursor-pointer"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>mail</span>
                  sgilstefania@gmail.com
                </button>
                {copied && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-zinc-900 text-white text-xs rounded whitespace-nowrap">
                    Copied!
                  </div>
                )}
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/StefiGil"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-200"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/stefania-gil/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-200"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-outline-variant bg-surface-container-low py-12">
        <div className={`${C} flex flex-col md:flex-row justify-between items-center gap-6`}>
          <div className="text-sm font-semibold text-on-surface">
            © 2026 Stef Dev. Built with precision.
          </div>
          <nav className="flex gap-8">
            <a
              href="https://www.linkedin.com/in/stefania-gil/"
              target="_blank"
              rel="noreferrer"
              className="text-xs tracking-widest uppercase text-outline hover:text-on-surface transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/StefiGil"
              target="_blank"
              rel="noreferrer"
              className="text-xs tracking-widest uppercase text-outline hover:text-on-surface transition-colors duration-300"
            >
              GitHub
            </a>
          </nav>
        </div>
      </footer>

    </div>
  )
}
