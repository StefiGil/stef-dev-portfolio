const projects = [
  {
    id: 1,
    tag: 'Data Visualization',
    title: 'Carbon Footprint Tracker',
    description: [
      'Developed a comprehensive data visualization platform designed to calculate and analyze carbon emissions for educational institutions. The application transforms complex environmental data into actionable insights through dynamic charts and automated professional reporting.',
      'It features real-time URL state synchronization, dynamic data charts, and a custom PDF engine for professional sustainability reporting. Collaboration with UNCPBA — Faculty of Exact Sciences.',
    ],
    image: '/carbon.png',
    imageAlt: 'Carbon Footprint Tracker — dashboard showing emission analysis for educational institutions',
    imageLeft: false,
  },
]

function ProjectCard({ project }) {
  return (
    <article className="grid grid-cols-12 gap-6 items-center">
      {/* Text — 5 cols, order swaps on mobile */}
      <div
        className={`col-span-12 lg:col-span-5 flex flex-col justify-center
          ${project.imageLeft
            ? 'order-2 lg:order-2 lg:pl-10'
            : 'order-2 lg:order-1 lg:pr-10'
          }`}
      >
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[11px] font-semibold tracking-widest uppercase mb-4 w-fit">
          {project.tag}
        </div>
        <h3 className="text-[36px] font-semibold text-on-surface mb-4 leading-[1.2] tracking-[-0.02em]">
          {project.title}
        </h3>
        {project.description.map((para, i) => (
          <p key={i} className="text-base text-on-surface-variant leading-relaxed mb-4 last:mb-0">
            {para}
          </p>
        ))}
      </div>

      {/* Image — 7 cols */}
      <div
        className={`col-span-12 lg:col-span-7 mb-6 lg:mb-0
          ${project.imageLeft ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}`}
      >
        <div className="relative rounded-xl overflow-hidden bg-surface-container-lowest border border-primary-fixed-dim/50 ring-1 ring-primary-container/10" style={{ aspectRatio: '16/10' }}>
          <img
            src={project.image}
            alt={project.imageAlt}
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="work" className="max-w-[1440px] mx-auto px-6 mt-32 mb-32 lg:px-24 xl:px-40">
      <h2 className="text-[60px] font-semibold text-on-surface tracking-[-0.03em] leading-[1.1] mb-16">
        Featured Projects
      </h2>
      <div className="flex flex-col gap-32">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
