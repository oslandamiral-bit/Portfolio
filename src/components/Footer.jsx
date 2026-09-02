import { profile } from '../data/portfolio.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-400">
          © {year} {profile.name}. Tous droits réservés.
        </p>
        <p className="text-sm text-slate-500">
          Créé avec
          <span className="text-primary"> React </span>
          &amp;
          <span className="text-accent"> Tailwind CSS </span>
        </p>
      </div>
    </footer>
  )
}
