import type { Text } from "./i18n"

export const profile = {
  name: "João Pedro de Matos Gomes",
  shortName: "João Pedro",
  roles: [{ pt: "Jovem Aprendiz Apple", en: "Apple Apprentice" }, "Data Analyst", "Frontend Developer"] as Text[],
  bio: {
    pt: "Estudante de Engenharia de Software na FIAP, atuando no canal digital da Apple Brasil com análise de dados e Customer Experience na região ALAC. Venho de uma base técnica em Informática e Administração, com passagem por UI/UX e suporte de TI.",
    en: "Software Engineering student at FIAP, working in Apple Brazil's digital channel on data analysis and Customer Experience across the ALAC region. I come from a technical background in IT and Business Administration, with experience in UI/UX and IT support.",
  } as Text,
  location: { pt: "São Paulo, SP — Brasil", en: "São Paulo, SP — Brazil" } as Text,
  email: "joaopedrogomes2007@gmail.com",
  linkedin: "https://www.linkedin.com/in/joaopedrodematosgomes",
  github: "https://github.com/jpdemg",
  resumeUrl: "/cv/Joao-Pedro-Matos-Gomes-CV.pdf",
  photoUrl: "/images/joao-pedro.png",
}

export const quickStats: { message: Text }[] = [
  { message: { pt: "Jovem Aprendiz na Apple", en: "Apprentice at Apple" } },
  { message: { pt: "Python como linguagem principal", en: "Python as main language" } },
  { message: { pt: "Estudante de Engenharia de Software", en: "Software Engineering student" } },
]

export const personalDetails: { label: Text; value: Text; href?: string }[] = [
  { label: { pt: "Nome", en: "Name" }, value: profile.name },
  { label: { pt: "Localização", en: "Location" }, value: profile.location },
  {
    label: { pt: "Cargo atual", en: "Current role" },
    value: { pt: "Jovem Aprendiz — Apple Brasil", en: "Apprentice — Apple Brazil" },
  },
  {
    label: { pt: "Formação", en: "Education" },
    value: { pt: "Engenharia de Software — FIAP", en: "Software Engineering — FIAP" },
  },
  { label: { pt: "E-mail", en: "Email" }, value: profile.email, href: `mailto:${profile.email}` },
  { label: { pt: "Inglês", en: "English" }, value: "Cambridge B2" },
]

export const aboutText: { whoAmI: Text; approach: Text } = {
  whoAmI: {
    pt: "Atuo no canal digital da Apple Brasil, com análise de dados e Customer Experience na região ALAC. Venho de uma base técnica em Informática e Administração, com passagem por UI/UX e suporte de TI, o que me deixa confortável tanto no dado quanto na interface.",
    en: "I work in Apple Brazil's digital channel, focused on data analysis and Customer Experience across the ALAC region. I come from a technical background in IT and Business Administration, with experience in UI/UX and IT support, which keeps me comfortable with both the data and the interface.",
  },
  approach: {
    pt: "Gosto de resolver problema real: transformar planilha manual em processo automatizado, e transformar dado em decisão. Estudo Engenharia de Software na FIAP e me aprofundo em Python e ciência de dados no meu tempo livre.",
    en: "I like solving real problems: turning manual spreadsheets into automated processes, and data into decisions. I study Software Engineering at FIAP and dive deeper into Python and data science in my free time.",
  },
}

export type Experience = {
  company: string
  role: Text
  period: Text
  current?: boolean
  description: Text
  skills: Text[]
  photos?: { src: string; alt: Text }[]
}

export const experience: Experience[] = [
  {
    company: "Apple Computer Brasil",
    role: { pt: "Jovem Aprendiz em Digital Channel", en: "Digital Channel Apprentice" },
    period: { pt: "2026 — atual", en: "2026 — present" },
    current: true,
    description: {
      pt: "Apoio às atividades do canal digital com foco em Customer Experience no ambiente B2B. Análise e report de dados dos países da região ALAC, elaboração de relatórios recorrentes de performance e automação de etapas manuais de coleta e consolidação de dados.",
      en: "Supporting digital channel activities with a focus on Customer Experience in a B2B environment. Data analysis and reporting for countries in the ALAC region, building recurring performance reports and automating manual data collection and consolidation steps.",
    },
    skills: ["Customer Experience", "Data Analysis", "B2B", "Reporting", "Excel", "Automation", "Salesforce", "Looker Studio"],
    photos: [
      {
        src: "/images/experience/apple-3.jpg",
        alt: { pt: "Estação de trabalho com MacBook, monitor e teclado", en: "Workstation with a MacBook, monitor and keyboard" },
      },
      {
        src: "/images/experience/apple-5.jpg",
        alt: { pt: "Letreiro luminoso do Apple Music no escritório", en: "Illuminated Apple Music sign in the office" },
      },
      {
        src: "/images/experience/apple-4.jpg",
        alt: { pt: "Quadro em mosaico com o logo da Apple", en: "Mosaic artwork of the Apple logo" },
      },
    ],
  },
  {
    company: "Cronus",
    role: "UI/UX Designer",
    period: "2025",
    description: {
      pt: "Desenvolvimento da experiência do usuário, da pesquisa à prototipação de interfaces. Criação de wireframes, protótipos e componentes visuais com foco em usabilidade e acessibilidade, em colaboração com produto e tecnologia.",
      en: "User experience work from research to interface prototyping. Creating wireframes, prototypes and visual components focused on usability and accessibility, in collaboration with product and engineering.",
    },
    skills: [
      "UI/UX",
      "Figma",
      { pt: "Prototipação", en: "Prototyping" },
      "Design System",
      "Photoshop",
      "Motion Design",
      { pt: "Acessibilidade", en: "Accessibility" },
    ],
    photos: [
      {
        src: "/images/experience/cronus-1.jpg",
        alt: {
          pt: "Arte do evento O Grande Começo com os parceiros Growthway, Cronus, Newhack e Sagaz Club",
          en: "Artwork for the event O Grande Começo with partners Growthway, Cronus, Newhack and Sagaz Club",
        },
      },
      {
        src: "/images/experience/cronus-3.jpg",
        alt: { pt: "Plataforma de agendamentos e reuniões aberta em um monitor", en: "Scheduling and meetings platform open on a monitor" },
      },
    ],
  },
  {
    company: "Accerttech",
    role: { pt: "Assistente de TI Júnior", en: "Junior IT Assistant" },
    period: "2020 — 2023",
    description: {
      pt: "Controle de estoque de equipamentos, configuração e manutenção de computadores, tablets e outros dispositivos. Apoio técnico em atividades operacionais e resolução de problemas de hardware e software.",
      en: "Equipment inventory control, setup and maintenance of computers, tablets and other devices. Technical support for day-to-day operations and troubleshooting of hardware and software issues.",
    },
    skills: [
      { pt: "Suporte de TI", en: "IT Support" },
      "Hardware",
      { pt: "Infraestrutura", en: "Infrastructure" },
      { pt: "Eventos", en: "Events" },
      { pt: "Manutenção de Computadores", en: "Computer Maintenance" },
      { pt: "Redes", en: "Networking" },
      { pt: "Administração de Inventário", en: "Inventory Management" },
    ],
  },
]

export const education: { title: Text; place: string; period: Text }[] = [
  {
    title: { pt: "Engenharia de Software", en: "Software Engineering" },
    place: "FIAP",
    period: { pt: "Conclusão prevista em 2029", en: "Expected graduation in 2029" },
  },
  {
    title: { pt: "Técnico em Informática", en: "Technical Diploma in IT" },
    place: "Colégio Cruzeiro do Sul",
    period: { pt: "Concluído em 2025", en: "Completed in 2025" },
  },
  {
    title: { pt: "Técnico em Administração", en: "Technical Diploma in Business Administration" },
    place: "ETEC Itaquera II",
    period: { pt: "Concluído em 2025", en: "Completed in 2025" },
  },
]

export type Course = { title: Text; provider: string; status: Text; ongoing?: boolean }

const inProgress = { pt: "Em andamento", en: "In progress" }

export const courses: Course[] = [
  { title: "Data Science: Machine Learning", provider: "HarvardX", status: inProgress, ongoing: true },
  { title: "CS50: Web Programming with Python and JavaScript", provider: "HarvardX", status: inProgress, ongoing: true },
  { title: "Power BI", provider: "Alura", status: { pt: "Concluído em Agosto/2026", en: "Completed in August 2026" } },
  { title: "Python", provider: "FIAP", status: { pt: "Concluído em abril/2026", en: "Completed in April 2026" } },
  { title: "Customer Experience Management", provider: "FIAP", status: { pt: "Concluído em março/2026", en: "Completed in March 2026" } },
  { title: "Agile Explorer", provider: "IBM SkillsBuild", status: { pt: "Concluído em 2025", en: "Completed in 2025" } },
  { title: "Foundations of Cybersecurity", provider: "Coursera / Google", status: { pt: "Concluído em 2025", en: "Completed in 2025" } },
  {
    title: { pt: "Pacote Office Intermediário", en: "Intermediate Office Suite" },
    provider: "Fundação Bradesco",
    status: { pt: "Concluído em 2024", en: "Completed in 2024" },
  },
  {
    title: { pt: "Inglês, nível avançado", en: "English, advanced level" },
    provider: "Cultura Inglesa",
    status: "2018 — 2023",
  },
]

export type TechItem = { name: string; icon: string; whiteSource?: boolean }
export type TechCategory = { title: Text; description: Text; technologies: TechItem[] }

const simpleIcon = (slug: string, color = "000000") => `https://cdn.simpleicons.org/${slug}/${color}`

export const techCategories: TechCategory[] = [
  {
    title: { pt: "Linguagens & Dados", en: "Languages & Data" },
    description: {
      pt: "Principais linguagens usadas em análise de dados e automação.",
      en: "Main languages used for data analysis and automation.",
    },
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
    description: { pt: "Construção de interfaces web.", en: "Building web interfaces." },
    technologies: [
      { name: "React", icon: simpleIcon("react") },
      { name: "HTML5", icon: simpleIcon("html5") },
      { name: "CSS3", icon: simpleIcon("css") },
      { name: "Tailwind CSS", icon: simpleIcon("tailwindcss") },
    ],
  },
  {
    title: { pt: "Ferramentas", en: "Tools" },
    description: { pt: "Versionamento, design e produtividade.", en: "Version control, design and productivity." },
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
  title: Text
  shortDescription: Text
  createdAt: string
  features: string[]
  tech: Text[]
  image: string
  liveDemoUrl?: string
  githubUrl?: string
  confidential?: boolean
}

export const projects: Project[] = [
  {
    title: { pt: "Dashboard de Performance Digital", en: "Digital Performance Dashboard" },
    shortDescription: {
      pt: "Painel interno (Apple) para acompanhamento semanal de performance do canal digital por país e parceiro na região ALAC.",
      en: "Internal dashboard (Apple) for weekly tracking of digital channel performance by country and partner across the ALAC region.",
    },
    createdAt: "2026",
    features: ["Substituiu a consolidação manual de planilhas por um fluxo único", "Comparativos período a período e exportação para Excel"],
    tech: ["React", "Data Viz", "Excel"],
    image: "/images/projects/digital-performance-analysis.png",
    confidential: true,
  },
  {
    title: { pt: "Plataforma de CX Rating", en: "CX Rating Platform" },
    shortDescription: {
      pt: "Aplicação interna (Apple) que mede a qualidade da experiência de compra em sites parceiros de cinco países, transformando auditorias em um score comparável por trimestre.",
      en: "Internal application (Apple) that measures shopping experience quality on partner sites in five countries, turning audits into a score comparable quarter over quarter.",
    },
    createdAt: "2026",
    features: ["Metodologia de pontuação por pilares e pesos configuráveis", "Geração automática do relatório de fechamento por parceiro"],
    tech: ["React", "UX Research", "Reporting"],
    image: "/images/projects/cx-rating.png",
    confidential: true,
  },
  {
    title: { pt: "Automação de Relatórios de Parceiros", en: "Partner Reports Automation" },
    shortDescription: {
      pt: "Conjunto de scripts (Apple) que automatiza a extração e consolidação de relatórios semanais de performance de parceiros de varejo na América Latina.",
      en: "Set of scripts (Apple) that automates the extraction and consolidation of weekly performance reports from retail partners in Latin America.",
    },
    createdAt: "2026",
    features: ["Eliminou a montagem manual de relatórios repetida toda semana", "Interface web simples para rodar o processamento"],
    tech: ["Python", { pt: "Automação", en: "Automation" }, "Looker Studio"],
    image: "/images/projects/automacao-relatorios-parceiros.png",
    confidential: true,
  },
  {
    title: { pt: "Double Check de Inventário", en: "Inventory Double Check" },
    shortDescription: {
      pt: "Ferramenta web interna (Apple) para conferência cruzada de registros de ativos de TI entre diferentes bases, com histórico compartilhado dos itens já conferidos.",
      en: "Internal web tool (Apple) for cross-checking IT asset records across different databases, with a shared history of items already verified.",
    },
    createdAt: "2026",
    features: ["Evita reconferir o mesmo item mais de uma vez entre a equipe", "Cruza múltiplas planilhas de origem automaticamente"],
    tech: ["Python", { pt: "Automação", en: "Automation" }, { pt: "Interface Web", en: "Web Interface" }],
    image: "/images/projects/double-check-inventario.png",
    confidential: true,
  },
  {
    title: "Mail Builder",
    shortDescription: {
      pt: "Ferramenta interna (Apple) para montar e-mails em blocos arrastáveis, com exportação de HTML compatível com clientes de e-mail exigentes, como o Apple Mail.",
      en: "Internal tool (Apple) for building emails from draggable blocks, exporting HTML compatible with demanding email clients such as Apple Mail.",
    },
    createdAt: "2026",
    features: ["Interface de montagem por drag-and-drop", "Exportação de HTML dentro das restrições reais de clientes de e-mail"],
    tech: ["React", "Drag & Drop", "HTML Email"],
    image: "/images/projects/mail2.png",
    confidential: true,
  },
  {
    title: "Laberna Dulce",
    shortDescription: {
      pt: "Site de e-commerce para uma confeitaria, com catálogo de produtos, checkout com agendamento de entrega/retirada e painel administrativo.",
      en: "E-commerce site for a bakery, with a product catalog, checkout with delivery/pickup scheduling and an admin panel.",
    },
    createdAt: "2026",
    features: ["Painel admin para produtos, fotos e pedidos", "Catálogo e pedidos com backend em Supabase"],
    tech: ["React", "Vite", "Supabase", "Stripe"],
    image: "/images/projects/laberna-dulce.png",
    liveDemoUrl: "https://jpdemg.github.io/laberna-dulce/",
    githubUrl: "https://github.com/jpdemg/laberna-dulce",
  },
  {
    title: { pt: "Site de Casamento L&M", en: "L&M Wedding Website" },
    shortDescription: {
      pt: "Site de casamento com confirmação de presença RSVP, publicado com deploy automático a cada alteração.",
      en: "Wedding website with RSVP confirmation, published with automatic deploys on every change.",
    },
    createdAt: "2026",
    features: ["RSVP funcional integrado ao site", "Deploy automático via GitHub Actions a cada push"],
    tech: ["React", "GitHub Actions", "GitHub Pages"],
    image: "/images/projects/site-casamento.png",
    liveDemoUrl: "https://jpdemg.github.io/site-casamento",
    githubUrl: "https://github.com/jpdemg/site-casamento",
  },
  {
    title: "Nosso Jardim",
    shortDescription: {
      pt: "Aplicação pessoal para organização do dia a dia: rotina, lugares, treino e controle de gastos, com autenticação e dados em tempo real.",
      en: "Personal app for organizing everyday life: routine, places, workouts and spending tracking, with authentication and real-time data.",
    },
    createdAt: "2026",
    features: ["Sete módulos integrados em uma única interface", "Persistência de dados e autenticação via Supabase"],
    tech: ["React", "Vite", "Supabase", "Vercel"],
    image: "/images/projects/nosso-jardim.png",
    liveDemoUrl: "https://jj-alpha-ten.vercel.app",
    githubUrl: "https://github.com/jpdemg/nosso-jardim",
  },
  {
    title: "Switch Mode",
    shortDescription: {
      pt: "Aplicação pessoal para organização do dia a dia: rotina, lugares, treino e controle de gastos, com autenticação e dados em tempo real.",
      en: "Personal app for organizing everyday life: routine, places, workouts and spending tracking, with authentication and real-time data.",
    },
    createdAt: "2026",
    features: ["Sete módulos integrados em uma única interface", "Persistência de dados e autenticação via Supabase"],
    tech: ["React", "Vite", "Supabase", { pt: "IA", en: "AI" }, "Python", "JavaScript"],
    image: "/images/projects/JOVI.png",
    liveDemoUrl: "https://landingpage-iota-indol.vercel.app",
    githubUrl: "https://github.com/CameraJovi/Landingpage",
  },
]
