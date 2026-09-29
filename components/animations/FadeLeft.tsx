"use client"

import { motion } from "motion/react"
import { useInView } from "react-intersection-observer"

export default function FadeLeft({
  children,
  delay = 0,
  duration = 0.8,
  className,
}: {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
      animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
      transition={{ duration, delay, type: "spring", stiffness: 100, damping: 20, mass: 1 }}
    >
      {children}
    </motion.div>
  )
}
