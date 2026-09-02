import { profile } from '../data/portfolio.js'

export default function About() {
  return (
    <section
      id="a-propos"
      className="py-20 bg-darker/60 max-w-6xl mx-auto px-6"
    >
      <div className="max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          À propos <span className="text-primary">de moi</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mb-8 rounded" />

        {profile.about.map((paragraph, index) => (
          <p key={index} className="text-slate-400 mb-4 leading-relaxed">
            {paragraph}
          </p>
        ))}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <div className="flex items-center gap-3">
            <span className="text-primary font-medium">📧</span>
            <a
              href={`mailto:${profile.email}`}
              className="text-slate-300 hover:text-primary transition-colors"
            >
              {profile.email}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-primary font-medium">📍</span>
            <span className="text-slate-300">{profile.location}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
