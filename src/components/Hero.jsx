import photo from '../assets/photo.png'
import { profile } from '../data/portfolio.js'

export default function Hero() {
  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center pt-20 pb-16 max-w-6xl mx-auto px-6"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        <div>
<div className="md:hidden flex justify-center mb-6">
              <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent p-1">
                <img
                  src={photo}
                  alt={`Photo de ${profile.name}`}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          <p className="text-primary font-medium mb-4">Bonjour, je m'appelle</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            {profile.name}
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-slate-300">
            <span className="text-accent">Développeur Web</span> React
          </h2>
          <p className="text-slate-400 mb-8 max-w-md">{profile.tagline}</p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projets"
              className="px-6 py-3 rounded-lg bg-primary hover:bg-primary-dark active:bg-primary-dark transition-colors font-medium active:scale-95"
            >
              Voir mes projets
            </a>
            <a
              href={profile.resumeUrl}
              className="px-6 py-3 rounded-lg border border-white/20 hover:border-primary hover:text-primary transition-colors font-medium active:scale-95"
            >
              Me contacter
            </a>
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-lg border border-white/20 hover:border-white/40 active:border-white/40 transition-colors font-medium inline-flex items-center gap-2 active:scale-95"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Mon CV
            </a>
          </div>

          <div className="flex gap-4 mt-10">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.17-1.11-1.48-1.11-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.36 9.36 0 012.5-.34c.85 0 1.7.11 2.5.34 1.9-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.83c0 .27.18.59.69.48A10.03 10.03 0 0022 12.2C22 6.58 17.52 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-primary transition-colors"
              aria-label="WhatsApp"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35zM12.04 21.5h-.01a9.5 9.5 0 01-4.84-1.32l-.35-.2-3.6.94.96-3.5-.23-.36a9.46 9.46 0 01-1.45-5.06c0-5.23 4.26-9.49 9.52-9.49a9.4 9.4 0 016.7 2.78 9.4 9.4 0 012.79 6.71c0 5.23-4.26 9.48-9.49 9.48zm8.44-17.93A11.34 11.34 0 0012.03 0C5.5 0 .2 5.3.2 11.83c0 2.09.55 4.13 1.59 5.93L0 24l6.37-1.67a11.8 11.8 0 005.65 1.44c6.53 0 11.84-5.3 11.84-11.83 0-3.16-1.23-6.13-3.38-8.37z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="relative w-72 h-72 mx-auto rounded-full bg-gradient-to-br from-primary to-accent p-1">
            <img
              src={photo}
              alt={`Photo de ${profile.name}`}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
