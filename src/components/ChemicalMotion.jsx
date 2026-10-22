import { motion, useReducedMotion } from 'framer-motion'

const atoms = [
  { x: 70, y: 82, r: 10, delay: 0 },
  { x: 228, y: 66, r: 13, delay: 0.5 },
  { x: 276, y: 169, r: 9, delay: 1 },
  { x: 203, y: 257, r: 12, delay: 0.25 },
  { x: 75, y: 221, r: 8, delay: 0.75 },
]

function ChemicalMotion({ light = false }) {
  const reduceMotion = useReducedMotion()
  const stroke = light ? '#348921' : '#FFFFFF'
  const fill = light ? '#FFFFFF' : '#348921'

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute right-[5%] top-1/2 z-0 hidden -translate-y-1/2 md:block"
      animate={reduceMotion ? undefined : { y: [0, -10, 0], rotate: [0, 3, 0] }}
      transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg viewBox="0 0 340 340" className="h-[250px] w-[250px] opacity-60 lg:h-[320px] lg:w-[320px]">
        <circle cx="170" cy="170" r="122" fill="none" stroke={stroke} strokeOpacity="0.28" strokeWidth="1.5" strokeDasharray="4 9" />
        <g stroke={stroke} strokeOpacity="0.58" strokeWidth="2">
          <path d="M78 90 160 157 230 74 267 166 205 252 79 219 78 90" fill="none" />
          <path d="m160 157 107 9m-107-9 45 95" fill="none" />
        </g>
        {atoms.map(({ x, y, r, delay }) => (
          <motion.circle
            key={x}
            cx={x}
            cy={y}
            r={r}
            fill={fill}
            stroke={stroke}
            strokeWidth="3"
            animate={reduceMotion ? undefined : { scale: [1, 1.35, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay }}
            style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          />
        ))}
        <motion.circle
          cx="160"
          cy="157"
          r="22"
          fill={fill}
          stroke={stroke}
          strokeWidth="4"
          animate={reduceMotion ? undefined : { scale: [1, 1.12, 1] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
        />
        <circle cx="160" cy="157" r="7" fill={stroke} />
      </svg>
    </motion.div>
  )
}

export default ChemicalMotion
