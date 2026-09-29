"use client"

import React, { useRef, useLayoutEffect, useState } from "react"
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from "motion/react"

interface ScrollVelocityProps {
  texts: string[]
  velocity?: number
  className?: string
  numCopies?: number
}

function useElementWidth<T extends HTMLElement>(ref: React.RefObject<T | null>): number {
  const [width, setWidth] = useState(0)

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) setWidth(ref.current.offsetWidth)
    }
    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [ref])

  return width
}

function VelocityText({
  children,
  baseVelocity,
  className = "",
}: {
  children: React.ReactNode
  baseVelocity: number
  className?: string
}) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false })

  const copyRef = useRef<HTMLSpanElement>(null)
  const copyWidth = useElementWidth(copyRef)

  function wrap(min: number, max: number, v: number): number {
    const range = max - min
    const mod = (((v - min) % range) + range) % range
    return mod + min
  }

  const x = useTransform(baseX, (v) => {
    if (copyWidth === 0) return "0px"
    return `${wrap(-copyWidth, 0, v)}px`
  })

  const directionFactor = useRef<number>(1)
  useAnimationFrame((_t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

    if (velocityFactor.get() < 0) directionFactor.current = -1
    else if (velocityFactor.get() > 0) directionFactor.current = 1

    moveBy += directionFactor.current * moveBy * velocityFactor.get()
    baseX.set(baseX.get() + moveBy)
  })

  const spans = []
  for (let i = 0; i < 6; i++) {
    spans.push(
      <span className={`shrink ${className}`} key={i} ref={i === 0 ? copyRef : null}>
        {children}
      </span>
    )
  }

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap text-center font-sans text-4xl font-bold tracking-[-0.02em] drop-shadow md:text-[5rem] md:leading-20"
        style={{ x }}
      >
        {spans}
      </motion.div>
    </div>
  )
}

export default function ScrollVelocity({ texts = [], velocity = 50, className = "" }: ScrollVelocityProps) {
  return (
    <section>
      {texts.map((text, index) => (
        <VelocityText key={index} className={className} baseVelocity={index % 2 !== 0 ? -velocity : velocity}>
          {text}&nbsp;
        </VelocityText>
      ))}
    </section>
  )
}
