"use client"

import Image from "next/image"
import ScrollVelocity from "@/components/ScrollVelocity"
import FadeDown from "@/components/animations/FadeDown"
import Fade from "@/components/animations/Fade"
import FadeLeft from "@/components/animations/FadeLeft"
import { profile, personalDetails, aboutText } from "./data"
import { useLang, ui } from "./i18n"

export default function About() {
  const { t } = useLang()

  return (
    <section id="about" className="w-full max-w-7xl mx-auto py-24 md:py-32 cursor-default bg-background overflow-hidden border-t border-text-secondary/10">
      <FadeDown>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24 w-full text-left">
          <h2 className="text-sm font-bold tracking-[0.2em] text-text-secondary uppercase mb-4">{t(ui.about.eyebrow)}</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary tracking-tighter">{t(ui.about.title)}</h3>
        </div>
      </FadeDown>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 px-6 md:px-12">
        <div className="lg:col-span-5 hidden lg:flex flex-col items-center justify-center relative">
          <div className="w-full max-w-[350px] lg:max-w-[450px] relative">
            <Fade>
              <div className="relative z-10 p-2 bg-background border border-text-secondary/10 rounded-3xl shadow-2xl overflow-hidden aspect-[4/5] w-full group transition-all duration-500 hover:shadow-[0_20px_40px_-5px_rgb(0,0,0,0.15)] dark:hover:shadow-[0_20px_40px_-5px_rgba(255,255,255,0.05)] hover:-translate-y-1">
                <Image
                  src={profile.photoUrl}
                  alt={profile.name}
                  fill
                  className="object-cover transition-all duration-700 scale-100 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl" />
              </div>
              <div className="absolute -bottom-8 -left-8 text-8xl lg:text-9xl font-black text-text-secondary/5 select-none pointer-events-none tracking-tighter mix-blend-multiply dark:mix-blend-screen z-0">
                {t(ui.brand)}.
              </div>
            </Fade>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div className="flex flex-col">
              <Fade>
                <h4 className="text-lg md:text-xl font-bold text-text-primary mb-4 flex items-center border-b border-text-secondary/20 pb-4">{t(ui.about.whoAmI)}</h4>
                <p className="text-base text-text-secondary leading-relaxed font-medium">{t(aboutText.whoAmI)}</p>
              </Fade>
            </div>

            <div className="flex flex-col">
              <Fade>
                <h4 className="text-lg md:text-xl font-bold text-text-primary mb-4 flex items-center border-b border-text-secondary/20 pb-4">{t(ui.about.approach)}</h4>
                <p className="text-base text-text-secondary leading-relaxed font-medium">{t(aboutText.approach)}</p>
              </Fade>
            </div>
          </div>

          <div className="mt-16 md:mt-20">
            <Fade>
              <h4 className="text-lg md:text-xl font-bold text-text-primary mb-8 border-b border-text-secondary/20 pb-4 border-l-4 border-l-text-primary pl-4">{t(ui.about.details)}</h4>
            </Fade>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10">
              {personalDetails.map((item, i) => (
                <FadeLeft key={t(item.label)} delay={0.1 * (i + 1)}>
                  <div className="flex flex-col p-2 -m-2 rounded-xl transition-colors duration-300 hover:bg-thirdary/40">
                    <span className="text-xs uppercase tracking-widest font-bold text-text-secondary mb-1">{t(item.label)}</span>
                    {item.href ? (
                      <a href={item.href} className="text-base font-semibold text-text-primary hover:text-text-secondary transition-colors underline decoration-text-secondary/30 underline-offset-4">
                        {t(item.value)}
                      </a>
                    ) : (
                      <span className="text-base font-semibold text-text-primary">{t(item.value)}</span>
                    )}
                  </div>
                </FadeLeft>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Fade>
        <div className="mt-24 md:mt-32 pb-6">
          <ScrollVelocity texts={[t(ui.about.marquee1), t(ui.about.marquee2)]} velocity={50} className="font-black tracking-tighter text-thirdary dark:text-button-hover opacity-50" />
        </div>
      </Fade>
    </section>
  )
}
