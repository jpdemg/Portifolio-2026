"use client"

import { useState, useEffect } from "react"
import FadeDown from "./animations/FadeDown"
import { useLang, ui, type Lang } from "@/app/i18n"

const shortCut = [
  { name: ui.nav.home, link: "home" },
  { name: ui.nav.about, link: "about" },
  { name: ui.nav.experience, link: "experience" },
  { name: ui.nav.education, link: "education" },
  { name: ui.nav.projects, link: "projects" },
  { name: ui.nav.contacts, link: "contacts" },
]

export default function Header() {
  const { lang, setLang, t } = useLang()
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)

    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark)

    setIsDark(shouldBeDark)
    document.documentElement.classList.toggle("dark", shouldBeDark)
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    localStorage.setItem("theme", newTheme ? "dark" : "light")
    document.documentElement.classList.toggle("dark", newTheme)
  }

  useEffect(() => {
    const sections = document.querySelectorAll("section")
    const onScroll = () => {
      let current = ""
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).clientHeight
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id") || ""
        }
      })
      setActiveSection(current)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed top-3 md:top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none w-full">
      <div className="w-full max-w-4xl pointer-events-auto">
        <FadeDown>
          <div className="relative flex items-center justify-between py-2 md:py-2.5 px-4 md:px-6 bg-background/80 backdrop-blur-md border border-text-secondary/20 rounded-full shadow-lg transition-colors duration-300">
            <span className="text-base md:text-lg font-black text-text-primary tracking-tighter">{t(ui.brand)}</span>

            <nav className="flex-row md:gap-6 lg:gap-7 hidden lg:flex items-center">
              {shortCut.map((item) => (
                <button
                  key={item.link}
                  onClick={() => handleScroll(item.link)}
                  className={`${
                    activeSection === item.link ? "text-text-primary font-bold" : "text-text-secondary font-medium hover:text-text-primary"
                  } cursor-pointer text-xs md:text-sm tracking-wide transition-colors duration-200 ease-in-out`}
                >
                  {t(item.name)}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <div role="group" aria-label={t(ui.langLabel)} className="flex items-center rounded-full border border-text-secondary/20 p-0.5 text-[11px] font-bold tracking-wider">
                {(["pt", "en"] as Lang[]).map((code) => (
                  <button
                    key={code}
                    onClick={() => setLang(code)}
                    aria-pressed={lang === code}
                    className={`cursor-pointer rounded-full px-2 py-0.5 uppercase transition-colors duration-200 ${
                      lang === code ? "bg-text-primary text-background" : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {code}
                  </button>
                ))}
              </div>

              <button className="cursor-pointer text-text-secondary hover:text-text-primary transition-colors" onClick={toggleTheme} aria-label={t(ui.themeToggle)}>
                {isDark ? (
                  <svg className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
                  </svg>
                )}
              </button>

              <button className="lg:hidden text-text-secondary" onClick={() => setIsOpen(!isOpen)} aria-label={t(ui.menuToggle)}>
                <svg className="w-5 md:w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
                </svg>
              </button>
            </div>

            <div className={`${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"} lg:hidden transform absolute top-14 right-4 z-50 origin-top-right transition-all duration-300 ease-in-out`}>
              <div className="flex flex-col gap-5 bg-background/95 backdrop-blur-md border border-text-secondary/10 p-5 rounded-2xl shadow-xl w-44">
                {shortCut.map((item) => (
                  <button
                    key={item.link}
                    onClick={() => {
                      handleScroll(item.link)
                      setIsOpen(false)
                    }}
                    className={`${
                      activeSection === item.link ? "text-text-primary font-bold" : "text-text-secondary font-medium"
                    } cursor-pointer text-sm hover:text-text-primary transition-colors duration-200 ease-in-out text-left`}
                  >
                    {t(item.name)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </FadeDown>
      </div>
    </div>
  )
}
