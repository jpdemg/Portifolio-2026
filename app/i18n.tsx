"use client"

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"

export type Lang = "pt" | "en"
export type Loc = { pt: string; en: string }
export type Text = string | Loc

const STORAGE_KEY = "lang"

export const ui = {
  brand: { pt: "Portifólio", en: "Portfolio" },
  nav: {
    home: { pt: "Início", en: "Home" },
    about: { pt: "Sobre", en: "About" },
    experience: { pt: "Experiência", en: "Experience" },
    education: { pt: "Formação", en: "Education" },
    projects: { pt: "Projetos", en: "Projects" },
    contacts: { pt: "Contato", en: "Contact" },
  },
  themeToggle: { pt: "Alternar tema", en: "Toggle theme" },
  menuToggle: { pt: "Abrir menu", en: "Open menu" },
  langLabel: { pt: "Idioma", en: "Language" },
  hero: {
    greeting: { pt: "Olá, eu sou", en: "Hi, I'm" },
    viewProjects: { pt: "Ver projetos", en: "View projects" },
    downloadCv: { pt: "Baixar currículo", en: "Download CV" },
    connect: { pt: "Conecte-se", en: "Connect" },
  },
  about: {
    eyebrow: { pt: "Descubra", en: "Discover" },
    title: { pt: "Sobre mim", en: "About me" },
    whoAmI: { pt: "Quem eu sou", en: "Who I am" },
    approach: { pt: "Minha abordagem", en: "My approach" },
    details: { pt: "Detalhes pessoais", en: "Personal details" },
    marquee1: { pt: "Olá, eu sou o João Pedro", en: "Hi, I'm João Pedro" },
    marquee2: { pt: "Dados & Experiência do Cliente", en: "Data & Customer Experience" },
  },
  experience: {
    eyebrow: { pt: "Trajetória", en: "Career path" },
    title: { pt: "Experiência profissional", en: "Work experience" },
  },
  education: {
    eyebrow: { pt: "Aprendizado", en: "Learning" },
    title: { pt: "Formação", en: "Education" },
    academic: { pt: "Formação acadêmica", en: "Academic background" },
    courses: { pt: "Cursos e certificações", en: "Courses & certifications" },
  },
  tech: {
    eyebrow: { pt: "Skills & Ferramentas", en: "Skills & Tools" },
    title: { pt: "Minha Stack", en: "My Tech Stack" },
  },
  projects: {
    eyebrow: { pt: "Portfólio", en: "Portfolio" },
    title: { pt: "Trabalhos selecionados", en: "Selected work" },
    intro: {
      pt: "Projetos pessoais levam direto ao site ou repositório ao clicar no card. Os projetos internos da Apple ficam com acesso restrito: não expõem dados reais, parceiros ou métricas, só o escopo e as tecnologias usadas.",
      en: "Personal projects open the live site or repository when you click the card. Internal Apple projects are restricted: they don't expose real data, partners or metrics, only the scope and the technologies used.",
    },
    restricted: { pt: "Acesso restrito", en: "Restricted access" },
    internal: { pt: "Projeto interno · Apple", en: "Internal project · Apple" },
    soon: { pt: "Em breve, código público", en: "Public code coming soon" },
    more: { pt: "Ver mais no GitHub", en: "See more on GitHub" },
  },
  contact: {
    eyebrow: { pt: "Fale comigo", en: "Get in touch" },
    title: { pt: "Contato", en: "Contact" },
    intro: {
      pt: "Estou aberto a oportunidades de estágio. O formulário abre seu app de e-mail com a mensagem pronta para enviar.",
      en: "I'm open to internship opportunities. The form opens your email app with the message ready to send.",
    },
    name: { pt: "Nome", en: "Name" },
    namePh: { pt: "Seu nome", en: "Your name" },
    email: { pt: "E-mail", en: "Email" },
    emailPh: { pt: "seu@email.com", en: "you@email.com" },
    message: { pt: "Mensagem", en: "Message" },
    messagePh: { pt: "Como posso ajudar?", en: "How can I help?" },
    send: { pt: "Enviar mensagem", en: "Send message" },
    subject: { pt: "Contato pelo portfólio", en: "Contact via portfolio" },
    noName: { pt: "sem nome", en: "no name" },
  },
  footer: {
    rights: { pt: "Todos os direitos reservados.", en: "All rights reserved." },
    built: { pt: "Feito com Next.js & Tailwind CSS", en: "Built with Next.js & Tailwind CSS" },
  },
} as const

type LangContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (text: Text) => string
}

const LangContext = createContext<LangContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt")

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    const initial: Lang = saved === "en" || saved === "pt" ? saved : navigator.language.toLowerCase().startsWith("en") ? "en" : "pt"
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLangState(initial)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang === "en" ? "en" : "pt-BR"
  }, [lang])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    localStorage.setItem(STORAGE_KEY, next)
  }, [])

  const value = useMemo<LangContextValue>(
    () => ({ lang, setLang, t: (text) => (typeof text === "string" ? text : text[lang]) }),
    [lang, setLang]
  )

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider")
  return ctx
}
