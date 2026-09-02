import { skills } from '../data/portfolio.js'

export default function Skills() {
  return (
    <section id="competences" className="py-20 max-w-6xl mx-auto px-6">
      <div className="max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Mes <span className="text-primary">compétences</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mb-10 rounded" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-2">
              <span className="font-medium">{skill.name}</span>
              <span className="text-slate-400 text-sm">{skill.level}%</span>
            </div>
            <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
