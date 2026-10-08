"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion } from "motion/react"
import FadeDown from "@/components/animations/FadeDown"
import { experience } from "./data"
import { useLang, ui } from "./i18n"

export default function Experience() {
  const { t } = useLang()
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section id="experience" className="w-full max-w-7xl mx-auto py-24 md:py-32 cursor-default bg-background relative border-t border-text-secondary/10" ref={containerRef}>
      <FadeDown>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24 w-full text-left">
          <h2 className="text-sm font-bold tracking-[0.2em] text-text-secondary uppercase mb-4">{t(ui.experience.eyebrow)}</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary tracking-tighter">{t(ui.experience.title)}</h3>
        </div>
      </FadeDown>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative group/list flex flex-col">
        {experience.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 40, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group/item relative grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 p-6 md:p-8 -mx-6 md:-mx-8 rounded-2xl transition-all duration-500 hover:!opacity-100 hover:!blur-none group-hover/list:opacity-40 group-hover/list:blur-[2px] hover:bg-text-secondary/5 hover:shadow-lg border border-transparent hover:border-text-secondary/10"
          >
            <div className="md:col-span-1 pt-1 md:pt-2">
              <span className="text-xs font-bold tracking-widest text-text-secondary uppercase">{t(exp.period)}</span>
              {exp.current && <span className="ml-2 inline-block w-1.5 h-1.5 rounded-full bg-text-primary align-middle" />}
            </div>

            <div className="md:col-span-3 flex flex-col">
              <h4 className="text-2xl font-bold text-text-primary tracking-tight mb-1">{t(exp.role)}</h4>
              <h5 className="text-sm font-bold text-text-secondary tracking-wide uppercase mb-6">{exp.company}</h5>

              <p className="text-base text-text-secondary font-medium leading-relaxed mb-6">{t(exp.description)}</p>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span key={t(skill)} className="text-xs font-bold bg-background md:bg-thirdary text-text-primary px-3 py-1.5 rounded-lg border border-text-secondary/10 uppercase tracking-wider group-hover/item:bg-background transition-colors duration-300">
                    {t(skill)}
                  </span>
                ))}
              </div>

              {exp.photos && exp.photos.length > 0 && (
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {exp.photos.map((photo) => (
                    <div key={photo.src} className={`relative aspect-video overflow-hidden rounded-xl border-2 border-text-secondary/20 bg-thirdary/40 group-hover/item:border-text-primary/40 transition-colors duration-300`}>
                      <Image src={photo.src} alt={t(photo.alt)} fill sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw" className="object-cover transition-transform duration-500 hover:scale-105" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
