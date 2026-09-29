import Image from "next/image"
import FadeDown from "@/components/animations/FadeDown"
import FadeUp from "@/components/animations/FadeUp"
import GlareHover from "@/components/GlareHover"
import { projects, profile, type Project } from "./data"

function LockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  )
}

function ProjectCardInner({ project }: { project: Project }) {
  const bestLink = project.liveDemoUrl || project.githubUrl

  return (
    <GlareHover className="group flex flex-col h-full bg-background border border-text-secondary/20 group-hover:border-text-primary/50 rounded-xl overflow-hidden transition-all duration-500 shadow-sm group-hover:shadow-2xl">
      <div className="relative overflow-hidden aspect-[16/10] bg-thirdary/40 border-b border-text-secondary/10">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 1024px) 85vw, 33vw"
          className={`object-cover object-top transition-all duration-700 ${project.confidential ? "grayscale opacity-40 blur-[1px]" : "group-hover:scale-105"}`}
        />

        {project.confidential && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-background/50 backdrop-blur-[1px]">
            <div className="p-3 rounded-full bg-background border border-text-secondary/20 shadow-lg">
              <LockIcon className="w-6 h-6 text-text-primary" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-text-primary bg-background/90 px-3 py-1 rounded-full border border-text-secondary/20">
              Acesso restrito
            </span>
          </div>
        )}
      </div>

      <div className="p-6 md:p-7 flex flex-col flex-grow relative">
        <div className="flex justify-between items-start mb-3 gap-3">
          <h4 className="text-xl font-black text-text-primary tracking-tight leading-tight">{project.title}</h4>
          {!project.confidential && bestLink && (
            <span className="p-2 border border-text-secondary/20 rounded-full text-text-secondary group-hover:text-background group-hover:bg-text-primary group-hover:border-text-primary transition-all duration-300 shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
          )}
        </div>

        {project.confidential && (
          <span className="self-start text-[10px] font-bold uppercase tracking-widest text-text-secondary bg-thirdary px-2.5 py-1 rounded-full border border-text-secondary/10 mb-3 flex items-center gap-1.5">
            <LockIcon className="w-3 h-3" />
            Projeto interno · Apple
          </span>
        )}

        <p className="text-sm text-text-secondary font-medium leading-relaxed mb-4 flex-grow line-clamp-3">{project.shortDescription}</p>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-text-secondary/10">
          {project.tech.map((tech) => (
            <span key={tech} className="text-[10px] font-bold bg-thirdary text-text-primary px-2.5 py-1 rounded-lg border border-text-secondary/10 uppercase tracking-wider">
              {tech}
            </span>
          ))}
        </div>

        {!project.confidential && !bestLink && (
          <span className="mt-4 text-[10px] font-bold uppercase tracking-widest text-text-secondary">Em breve, código público</span>
        )}
      </div>
    </GlareHover>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const bestLink = project.liveDemoUrl || project.githubUrl

  if (!project.confidential && bestLink) {
    return (
      <a href={bestLink} target="_blank" rel="noopener noreferrer" className="group block h-full cursor-pointer hover:-translate-y-1 transition-transform duration-300">
        <ProjectCardInner project={project} />
      </a>
    )
  }

  return (
    <div className={`group h-full ${project.confidential ? "cursor-not-allowed" : ""}`}>
      <ProjectCardInner project={project} />
    </div>
  )
}

export default function Project() {
  return (
    <section id="projects" className="w-full max-w-7xl mx-auto py-24 md:py-32 cursor-default bg-background relative border-t border-text-secondary/10">
      <FadeDown>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24 w-full text-left">
          <h2 className="text-sm font-bold tracking-[0.2em] text-text-secondary uppercase mb-4">Portfólio</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary tracking-tighter">Trabalhos selecionados</h3>
          <p className="mt-4 text-text-secondary max-w-2xl font-medium">
            Projetos pessoais levam direto ao site ou repositório ao clicar no card. Os projetos internos da Apple ficam com acesso restrito: não expõem dados reais, parceiros ou métricas, só o escopo e as tecnologias usadas.
          </p>
        </div>
      </FadeDown>

      <div className="hidden lg:grid max-w-7xl mx-auto grid-cols-3 gap-8 px-6 md:px-12">
        {projects.map((project) => (
          <FadeUp key={project.title}>
            <ProjectCard project={project} />
          </FadeUp>
        ))}
      </div>

      <div className="lg:hidden w-full overflow-hidden relative py-4">
        <div className="flex w-max animate-infinite-scroll">
          {[0, 1].map((copy) => (
            <div className="flex gap-6 px-3" key={copy}>
              {projects.map((project) => (
                <div key={`${copy}-${project.title}`} className="w-[85vw] sm:w-[400px] flex-shrink-0">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <FadeUp>
        <div className="mt-16 flex justify-center w-full px-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-background border border-text-secondary/20 text-text-primary hover:border-text-primary hover:bg-text-primary hover:text-background rounded-xl font-bold tracking-widest text-sm uppercase transition-all duration-300 ease-out group hover:-translate-y-1.5 hover:scale-[1.02] shadow-sm hover:shadow-xl"
          >
            <span>Ver mais no GitHub</span>
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </FadeUp>
    </section>
  )
}
