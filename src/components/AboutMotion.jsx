import { motion, useReducedMotion } from 'framer-motion'

const easing = [0.22, 1, 0.36, 1]

export function Reveal({ children, className = '', direction = 'up', delay = 0 }) {
  const reduceMotion = useReducedMotion()
  const initial = direction === 'left' ? { opacity: 0, x: -28 } : direction === 'right' ? { opacity: 0, x: 28 } : { opacity: 0, y: 24 }

  return (
    <motion.div
      initial={reduceMotion ? false : initial}
      whileInView={reduceMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.62, delay: reduceMotion ? 0 : delay, ease: easing }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerGroup({ children, className = '', delay = 0 }) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      initial={reduceMotion ? false : 'hidden'}
      whileInView={reduceMotion ? undefined : 'show'}
      viewport={{ once: true, amount: 0.12 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: delay } } }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '' }) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.52, ease: easing } } }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

