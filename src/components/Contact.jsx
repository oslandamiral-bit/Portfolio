import { profile } from '../data/portfolio.js'

export default function Contact() {
  return (
    <section id="contact" className="py-20 max-w-6xl mx-auto px-6">
      <div className="max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Me <span className="text-primary">contacter</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mb-10 rounded" />
        <p className="text-slate-400 mb-10">
          Une question, un projet, une opportunité ? Écrivez-moi, je vous
          répondrai rapidement.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center text-primary">
              📧
            </div>
            <div>
              <p className="text-sm text-slate-400">Email</p>
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-primary transition-colors"
              >
                {profile.email}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center text-primary">
              📱
            </div>
            <div>
              <p className="text-sm text-slate-400">Téléphone</p>
              <span>{profile.phone}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center text-primary">
              📍
            </div>
            <div>
              <p className="text-sm text-slate-400">Localisation</p>
              <span>{profile.location}</span>
            </div>
          </div>
        </div>

        <form
          action="https://formsubmit.co/oslandamiral@gmail.com"
          method="POST"
          className="space-y-4"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value={`${window.location.origin}/#contact`} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-primary transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <input
            type="text"
            name="_subject"
            placeholder="Sujet"
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-primary transition-colors"
          />
          <textarea
            name="message"
            placeholder="Votre message"
            rows={5}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-primary transition-colors resize-none"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-primary hover:bg-primary-dark transition-colors font-medium"
          >
            Envoyer le message
          </button>
          <p className="text-sm text-slate-500">
            Votre message sera envoyé directement dans ma boîte mail.
          </p>
        </form>
      </div>
    </section>
  )
}