"use client"

import { profile } from "@/app/data"
import { useLang, ui } from "@/app/i18n"

export default function Footer() {
  const { t } = useLang()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-text-secondary/10 bg-background py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm font-medium text-text-secondary">
            &copy; {currentYear} {profile.name}. {t(ui.footer.rights)}
          </p>
          <p className="text-xs font-medium text-text-secondary/70 mt-1">{t(ui.footer.built)}</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary transition-colors text-xs font-bold uppercase tracking-widest">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary transition-colors text-xs font-bold uppercase tracking-widest">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="text-text-secondary hover:text-text-primary transition-colors text-xs font-bold uppercase tracking-widest">
            {t(ui.contact.email)}
          </a>
        </div>
      </div>
    </footer>
  )
}
