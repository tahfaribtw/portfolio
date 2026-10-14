"use client"

import { AnimatePresence, motion } from "motion/react"
import { useEffect, useState } from "react"
import LiquidWaveSpinner from "@/components/ui/liquid-wave-spinner"

export function PageLoader() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(false), 2400)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <LiquidWaveSpinner
            className="max-w-xs"
            role="status"
            aria-label="Loading page"
            aria-live="polite"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}