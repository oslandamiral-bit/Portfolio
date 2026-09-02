import { useState } from 'react'
import { profile } from '../data/portfolio.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'À propos', href: '#a-propos' },
    { label: 'Compétences', href: '#competences' },
    { label: 'Projets', href: '#projets' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#accueil" className="text-xl font-bold tracking-tight">
          <span className="text-primary">{profile.firstName}</span>
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-slate-300 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden -mr-2 p-2 text-slate-200 active:scale-95 transition-transform"
          aria-label="Menu"
          aria-expanded={open}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <ul
          className="md:hidden bg-darker/95 backdrop-blur-md border-t border-white/10 px-6 pb-6 pt-4 space-y-1"
          style={{ maxHeight: open ? '200px' : '0', overflow: 'hidden', transition: 'height 0.3s ease' }}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-slate-300 hover:text-primary hover:bg-white/5 rounded-lg px-4 transition-colors active:bg-white/10"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
