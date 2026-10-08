"use client"

import FadeDown from "@/components/animations/FadeDown"
import FadeUp from "@/components/animations/FadeUp"
import { education, courses } from "./data"
import { useLang, ui } from "./i18n"

export default function Education() {
  const { t } = useLang()

  return (
    <section id="education" className="w-full max-w-7xl mx-auto py-24 md:py-32 cursor-default bg-background relative border-t border-text-secondary/10">
      <FadeDown>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24 w-full text-left">
          <h2 className="text-sm font-bold tracking-[0.2em] text-text-secondary uppercase mb-4">{t(ui.education.eyebrow)}</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary tracking-tighter">{t(ui.education.title)}</h3>
        </div>
      </FadeDown>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <FadeDown>
            <h4 className="text-lg md:text-xl font-bold text-text-primary mb-6 border-b border-text-secondary/20 pb-4">{t(ui.education.academic)}</h4>
          </FadeDown>
          <div className="flex flex-col gap-4">
            {education.map((item, i) => (
              <FadeUp key={t(item.title)} delay={i * 0.1}>
                <div className="p-5 rounded-2xl border border-text-secondary/10 bg-thirdary/20 hover:bg-thirdary/50 hover:border-text-primary/40 transition-all duration-300">
                  <p className="text-xs font-bold tracking-widest text-text-secondary uppercase mb-2">{t(item.period)}</p>
                  <h5 className="text-xl font-bold text-text-primary tracking-tight">{t(item.title)}</h5>
                  <p className="text-sm font-medium text-text-secondary mt-1">{item.place}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

        <div>
          <FadeDown>
            <h4 className="text-lg md:text-xl font-bold text-text-primary mb-6 border-b border-text-secondary/20 pb-4">{t(ui.education.courses)}</h4>
          </FadeDown>
          <ul className="flex flex-col">
            {courses.map((course, i) => (
              <FadeUp key={t(course.title)} delay={i * 0.05}>
                <li className="flex items-start justify-between gap-4 py-4 border-b border-text-secondary/10">
                  <div>
                    <p className="text-base font-bold text-text-primary leading-snug">{t(course.title)}</p>
                    <p className="text-sm font-medium text-text-secondary mt-0.5">{course.provider}</p>
                  </div>
                  <span
                    className={`shrink-0 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${
                      course.ongoing ? "text-text-primary border-text-primary/40 bg-thirdary" : "text-text-secondary border-text-secondary/20"
                    }`}
                  >
                    {t(course.status)}
                  </span>
                </li>
              </FadeUp>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
