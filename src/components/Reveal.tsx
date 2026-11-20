import type { ReactNode } from 'react'
import { motion } from 'motion/react'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}

/**
 * Quiet editorial scroll reveal. Automatically respects OS reduced-motion
 * preferences via <MotionConfig reducedMotion="user"> in App.tsx.
 */
export default function Reveal({
  children,
  className = '',
  delay = 0,
  y = 18,
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
