import { useState } from 'react'

const projects = [
  {
    id: 2,
    tag: 'B2B Solutions',
    role: 'Frontend',
    roleNote: 'Backend with Spring Boot',
    title: 'Sales Management Platform',
    description:
      'A centralized management platform for commercial workflows. It includes an interactive CRM with advanced filtering, a real-time inventory engine with automated stock alerts, and a transactional module featuring a split-view interface for simultaneous catalog browsing and order processing.',
    techs: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'v0'],
    image: '/sales-management.png',
    imageAlt: 'Sales Management Platform — dashboard showing CRM, inventory and order processing modules',
  },
  {
    id: 1,
    tag: 'Data Visualization',
    role: 'Full Stack',
    roleNote: 'Built with Next.js',
    title: 'Carbon Footprint Tracker',
    description:
      'A comprehensive data visualization platform to calculate and analyze carbon emissions for educational institutions. Transforms complex environmental data into actionable insights through dynamic charts and automated professional reporting. Collaboration with UNCPBA — Faculty of Exact Sciences.',
    techs: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'jsPDF', 'sheetJS', 'PostgreSQL', 'Claude', 'Codex'],
    image: '/carbon.png',
    imageAlt: 'Carbon Footprint Tracker — dashboard showing emission analysis for educational institutions',
  },
]

function ProjectCard({ project, onImageClick }) {
  return (
    <article 
      onClick={() => onImageClick(project)}
      className="group bg-surface-container-lowest rounded-xl border border-outline-variant shadow-[0_4px_20px_-5px_rgba(99,102,241,0.08)] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
      {/* Image */}
      <div className="aspect-video relative overflow-hidden bg-surface-container-low">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-1 items-start">
          <span
            className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase backdrop-blur-sm ${
              project.role === 'Full Stack'
                ? 'bg-primary/90 text-on-primary'
                : 'bg-secondary/90 text-on-secondary'
            }`}
          >
            {project.role}
          </span>
          <span className="px-2 py-0.5 rounded-full text-[9px] font-medium tracking-wide bg-black/40 text-white/90 backdrop-blur-sm">
            {project.roleNote}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <span className="inline-block bg-surface-container-high px-3 py-1 rounded-full text-primary text-[10px] font-semibold tracking-widest uppercase mb-4">
          {project.tag}
        </span>
        <h3 className="text-2xl font-semibold text-on-surface tracking-tight leading-snug mb-3">
          {project.title}
        </h3>
        <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.techs.map((tech) => (
            <span
              key={tech}
              className="bg-surface-container-high px-3 py-1 rounded-full text-primary text-[10px] font-semibold tracking-widest uppercase"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="py-24 scroll-mt-16">
      <div className="mb-16">
        <h2 className="text-[38px] font-semibold text-on-surface tracking-[-0.02em] leading-tight mb-4">
          Featured Projects
        </h2>
        <p className="text-base text-on-surface-variant max-w-xl">
          A selection of recent projects that showcase my technical expertise and problem-solving approach.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onImageClick={setSelectedProject} />
        ))}
      </div>

      {/* Modal para imagen completa */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative inline-block"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedProject.image} 
              alt={selectedProject.imageAlt}
              className="w-auto h-auto max-h-[95vh] rounded-lg"
            />
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
