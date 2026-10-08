export const profile = {
  name: "João Pedro de Matos Gomes",
  shortName: "João Pedro",
  initials: "Portifólio",
  roles: ["Jovem Aprendiz Apple", "Data Analyst", "Frontend Developer"],
  bio: "Estudante de Engenharia de Software na FIAP, atuando no canal digital da Apple Brasil com análise de dados e Customer Experience na região ALAC. Venho de uma base técnica em Informática e Administração, com passagem por UI/UX e suporte de TI.",
  location: "São Paulo, SP — Brasil",
  email: "joaopedrogomes2007@gmail.com",
  linkedin: "https://www.linkedin.com/in/joaopedrodematosgomes",
  github: "https://github.com/jpdemg",
  resumeUrl: "/cv/Joao-Pedro-Matos-Gomes-CV.pdf",
  photoUrl: "/images/joao-pedro.png",
}

export const quickStats = [
  { message: "Jovem Aprendiz na Apple" },
  { message: "Python como linguagem principal" },
  { message: "Estudante de Engenharia de Software" },
]

export const personalDetails = [
  { label: "Nome", value: profile.name },
  { label: "Localização", value: profile.location },
  { label: "Cargo atual", value: "Jovem Aprendiz — Apple Brasil" },
  { label: "Formação", value: "Engenharia de Software — FIAP" },
  { label: "E-mail", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Inglês", value: "Cambridge B2" },
]

export const aboutText = {
  whoAmI:
    "Atuo no canal digital da Apple Brasil, com análise de dados e Customer Experience na região ALAC. Venho de uma base técnica em Informática e Administração, com passagem por UI/UX e suporte de TI, o que me deixa confortável tanto no dado quanto na interface.",
  approach:
    "Gosto de resolver problema real: transformar planilha manual em processo automatizado, e transformar dado em decisão. Estudo Engenharia de Software na FIAP e me aprofundo em Python e ciência de dados no meu tempo livre.",
}

export type Experience = {
  company: string
  role: string
  period: string
  current?: boolean
  description: string
  skills: string[]
}

export const experience: Experience[] = [
  {
    company: "Apple Computer Brasil",
    role: "Jovem Aprendiz em Digital Channel",
    period: "2026 — atual",
    current: true,
    description:
      "Apoio às atividades do canal digital com foco em Customer Experience no ambiente B2B. Análise e report de dados dos países da região ALAC, elaboração de relatórios recorrentes de performance e automação de etapas manuais de coleta e consolidação de dados.",
    skills: ["Customer Experience", "Data Analysis", "B2B", "Reporting", "Excel", "Automation", "Salesforce", "Looker Studio"],
  },
  {
    company: "Cronus",
    role: "UI/UX Designer",
    period: "2025",
    description:
      "Desenvolvimento da experiência do usuário, da pesquisa à prototipação de interfaces. Criação de wireframes, protótipos e componentes visuais com foco em usabilidade e acessibilidade, em colaboração com produto e tecnologia.",
    skills: ["UI/UX", "Figma", "Prototipação", "Design System", "Photoshop","Motion Design", "Acessibilidade"],
  },
  {
    company: "Accerttech",
    role: "Assistente de TI Júnior",
    period: "2020 — 2023",
    description:
      "Controle de estoque de equipamentos, configuração e manutenção de computadores, tablets e outros dispositivos. Apoio técnico em atividades operacionais e resolução de problemas de hardware e software.",
    skills: ["Suporte de TI", "Hardware", "Infraestrutura", "Eventos", "Manutenção de Computadores", "Redes", "Administração de Inventário"],
  },
]

export const education = [
  { title: "Engenharia de Software", place: "FIAP", period: "Conclusão prevista em 2029" },
  { title: "Técnico em Informática", place: "Colégio Cruzeiro do Sul", period: "Concluído em 2025" },
  { title: "Técnico em Administração", place: "ETEC Itaquera II", period: "Concluído em 2025" },
]

export const courses = [
  "Data Science: Machine Learning — HarvardX (em andamento)",
  "CS50: Web Programming with Python and JavaScript — HarvardX (em andamento)",
  "Python — FIAP",
  "Customer Experience Management — FIAP",
  "Agile Explorer — IBM SkillsBuild",
  "Foundations of Cybersecurity — Coursera / Google",
]

export type TechItem = { name: string; icon: string; whiteSource?: boolean }
export type TechCategory = { title: string; description: string; technologies: TechItem[] }

const simpleIcon = (slug: string, color = "000000") => `https://cdn.simpleicons.org/${slug}/${color}`

export const techCategories: TechCategory[] = [
  {
    title: "Linguagens & Dados",
    description: "Principais linguagens usadas em análise de dados e automação.",
    technologies: [
      { name: "Python", icon: simpleIcon("python") },
      { name: "JavaScript", icon: simpleIcon("javascript") },
      { name: "SQL", icon: simpleIcon("mysql") },
      { name: "Node.js", icon: simpleIcon("node.js") },
      { name: "FastAPI", icon: simpleIcon("fastapi") },
    ],
  },
  {
    title: "Frontend",
    description: "Construção de interfaces web.",
    technologies: [
      { name: "React", icon: simpleIcon("react") },
      { name: "HTML5", icon: simpleIcon("html5") },
      { name: "CSS3", icon: simpleIcon("css") },
      { name: "Tailwind CSS", icon: simpleIcon("tailwindcss") },
    ],
  },

  {
    title: "Ferramentas",
    description: "Versionamento, design e produtividade.",
    technologies: [
      { name: "Git", icon: simpleIcon("git") },
      { name: "GitHub", icon: simpleIcon("github") },
      { name: "Figma", icon: simpleIcon("figma") },
      { name: "Photoshop", icon: "/icons/photoshop.png" },
      { name: "Excel", icon: "/icons/excel.png" },
      { name: "Power BI", icon: "/icons/power-bi-white.svg", whiteSource: true },
    ],
  },
]

export type Project = {
  title: string
  shortDescription: string
  createdAt: string
  features: string[]
  tech: string[]
  image: string
  liveDemoUrl?: string
  githubUrl?: string
  confidential?: boolean
}

export const projects: Project[] = [
  {
    title: "Dashboard de Performance Digital",
    shortDescription:
      "Painel interno (Apple) para acompanhamento semanal de performance do canal digital por país e parceiro na região ALAC.",
    createdAt: "2026",
    features: ["Substituiu a consolidação manual de planilhas por um fluxo único", "Comparativos período a período e exportação para Excel"],
    tech: ["React", "Data Viz", "Excel"],
    image: "/images/projects/digital-performance-analysis.png",
    confidential: true,
  },
  {
    title: "Plataforma de CX Rating",
    shortDescription:
      "Aplicação interna (Apple) que mede a qualidade da experiência de compra em sites parceiros de cinco países, transformando auditorias em um score comparável por trimestre.",
    createdAt: "2026",
    features: ["Metodologia de pontuação por pilares e pesos configuráveis", "Geração automática do relatório de fechamento por parceiro"],
    tech: ["React", "UX Research", "Reporting"],
    image: "/images/projects/cx-rating.png",
    confidential: true,
  },
  {
    title: "Automação de Relatórios de Parceiros",
    shortDescription:
      "Conjunto de scripts (Apple) que automatiza a extração e consolidação de relatórios semanais de performance de parceiros de varejo na América Latina.",
    createdAt: "2026",
    features: ["Eliminou a montagem manual de relatórios repetida toda semana", "Interface web simples para rodar o processamento"],
    tech: ["Python", "Automação", "Looker Studio"],
    image: "/images/projects/automacao-relatorios-parceiros.png",
    confidential: true,
  },
  {
    title: "Double Check de Inventário",
    shortDescription:
      "Ferramenta web interna (Apple) para conferência cruzada de registros de ativos de TI entre diferentes bases, com histórico compartilhado dos itens já conferidos.",
    createdAt: "2026",
    features: ["Evita reconferir o mesmo item mais de uma vez entre a equipe", "Cruza múltiplas planilhas de origem automaticamente"],
    tech: ["Python", "Automação", "Interface Web"],
    image: "/images/projects/double-check-inventario.png",
    confidential: true,
  },
  {
    title: "Mail Builder",
    shortDescription:
      "Editor de e-mails em blocos arrastáveis, com exportação de HTML compatível com clientes de e-mail exigentes, como o Apple Mail.",
    createdAt: "2026",
    features: ["Interface de montagem por drag-and-drop", "Exportação de HTML dentro das restrições reais de clientes de e-mail"],
    tech: ["React", "Drag & Drop", "HTML Email"],
    image: "/images/projects/mail2.png",
  },
  {
    title: "Laberna Dulce",
    shortDescription:
      "Site de e-commerce para uma confeitaria, com catálogo de produtos, checkout com agendamento de entrega/retirada e painel administrativo.",
    createdAt: "2026",
    features: ["Painel admin para produtos, fotos e pedidos", "Catálogo e pedidos com backend em Supabase"],
    tech: ["React", "Vite", "Supabase", "Stripe"],
    image: "/images/projects/laberna-dulce.png",
    liveDemoUrl: "https://jpdemg.github.io/laberna-dulce/",
    githubUrl: "https://github.com/jpdemg/laberna-dulce",
  },
  {
    title: "Site de Casamento L&M",
    shortDescription:
      "Site de casamento com confirmação de presença RSVP, publicado com deploy automático a cada alteração.",
    createdAt: "2026",
    features: ["RSVP funcional integrado ao site", "Deploy automático via GitHub Actions a cada push"],
    tech: ["React", "GitHub Actions", "GitHub Pages"],
    image: "/images/projects/site-casamento.png",
    liveDemoUrl: "https://jpdemg.github.io/site-casamento",
    githubUrl: "https://github.com/jpdemg/site-casamento",
  },
  {
    title: "Nosso Jardim",
    shortDescription:
      "Aplicação pessoal para organização do dia a dia: rotina, lugares, treino e controle de gastos, com autenticação e dados em tempo real.",
    createdAt: "2026",
    features: [
      "Sete módulos integrados em uma única interface",
      "Persistência de dados e autenticação via Supabase",
    ],
    tech: ["React", "Vite", "Supabase", "Vercel"],
    image: "/images/projects/nosso-jardim.png",
    liveDemoUrl: "https://jj-alpha-ten.vercel.app",
    githubUrl: "https://github.com/jpdemg/nosso-jardim",
  },
  {
    title: "Switch Mode",
    shortDescription:
      "Aplicação pessoal para organização do dia a dia: rotina, lugares, treino e controle de gastos, com autenticação e dados em tempo real.",
    createdAt: "2026",
    features: [
      "Sete módulos integrados em uma única interface",
      "Persistência de dados e autenticação via Supabase",
    ],
    tech: ["React", "Vite", "Supabase", "IA", "Python", "JavaScript"],
    image: "/images/projects/JOVI.png",
    liveDemoUrl: "https://landingpage-iota-indol.vercel.app",
    githubUrl: "https://github.com/CameraJovi/Landingpage",
  },
]
