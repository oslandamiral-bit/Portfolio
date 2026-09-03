import { projects } from '../data/portfolio.js'

export default function Projects() {
  return (
    <section id="projets" className="py-20 bg-darker/60 max-w-6xl mx-auto px-6">
      <div className="max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Mes <span className="text-primary">projets</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mb-10 rounded" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="bg-dark rounded-xl border border-white/10 overflow-hidden hover:border-primary/50 transition-colors flex flex-col"
          >
            <div className="h-44 bg-darker overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={`Aperçu de ${project.title}`}
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <div className="h-full flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-white/70"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    />
                  </svg>
                </div>
              )}
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-slate-400 text-sm mb-4 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded bg-primary/15 text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.appOnly ? (
                  <span className="text-sm text-slate-500 font-medium">
                    Application de bureau
                  </span>
                ) : (
                  <>
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-primary hover:text-accent transition-colors font-medium"
                      >
                        Démo →
                      </a>
                    )}
                    {project.previewUrl && (
                      <a
                        href={project.previewUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-primary hover:text-accent transition-colors font-medium"
                      >
                        Voir l'aperçu →
                      </a>
                    )}
                  </>
                )}
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-slate-400 hover:text-primary transition-colors"
                >
                  Code source
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
