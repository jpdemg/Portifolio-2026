"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { useLang, ui } from "@/app/i18n"

export default function PageLoader() {
  const { t } = useLang()
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const start = Date.now()
    const duration = 900

    const frame = () => {
      const elapsed = Date.now() - start
      const pct = Math.min(100, Math.round((elapsed / duration) * 100))
      setProgress(pct)
      if (pct < 100) {
        requestAnimationFrame(frame)
      } else {
        setTimeout(() => setLoading(false), 200)
      }
    }

    const raf = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-black tracking-tighter text-text-primary leading-none">{t(ui.brand)}</p>
            <p className="mt-2 text-sm md:text-base font-bold tracking-[0.3em] text-text-secondary uppercase">João Pedro</p>
          </div>

          <div className="w-40 md:w-56 h-1 rounded-full bg-thirdary overflow-hidden">
            <motion.div
              className="h-full bg-text-primary rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear", duration: 0.1 }}
            />
          </div>

          <span className="text-xs font-bold tracking-widest text-text-secondary tabular-nums">{progress}%</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
