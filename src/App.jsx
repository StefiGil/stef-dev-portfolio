import Projects from './components/Projects'
import './index.css'

export default function App() {
  return (
    <div className="bg-surface text-on-surface font-sans text-body-md antialiased selection:bg-primary-container selection:text-on-primary-container">
      <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100 transition-opacity duration-300">
        <div className="max-w-screen-xl mx-auto px-12 flex justify-between items-center h-24 lg:px-24 xl:px-40">
          <div className="text-xl font-bold tracking-tighter text-zinc-900">
            STEF DEV
          </div>

          <nav className="hidden md:flex gap-8">
            <a
              href="#work"
              className="font-sans tracking-tight text-sm uppercase font-medium text-zinc-900 border-b border-zinc-900 pb-1"
            >
              Work
            </a>
          </nav>

          <a
            href="mailto:sgilstefania@gmail.com"
            className="font-sans tracking-tight text-sm uppercase font-medium text-[#6750A4] hover:text-[#4f378a] transition-colors duration-300 flex items-center gap-2"
          >
            Contact
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'wght' 400", fontSize: '20px' }}
            >
              arrow_forward
            </span>
          </a>
        </div>
      </header>

      <main className="pt-32 pb-xl px-12">
        <section className="max-w-[1440px] mx-auto px-gutter mb-xl mt-md lg:px-24 xl:px-40">
          <div className="grid grid-cols-12 gap-gutter items-end min-h-[409px]">
            <div className="col-span-12 md:col-span-9 lg:col-span-8">
              <h1 className="text-display-xl font-bold text-on-surface mb-md leading-[1.1] tracking-[-0.04em]">
                Full-Stack Developer. Creating modern solutions for real problems.
              </h1>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 md:pb-sm">
              <p className="text-body-lg text-on-surface-variant leading-relaxed">
                Specializing in high-performance web applications and design systems.
                5+ years translating complex requirements into refined, accessible interfaces.
              </p>
            </div>
          </div>
        </section>

        <Projects />
      </main>
    </div>
  )
}
