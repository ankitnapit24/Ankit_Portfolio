import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

/**
 * Wraps children in a scroll-triggered fade+blur+slide animation.
 * @param {object} props
 * @param {ReactNode} props.children
 * @param {number} [props.delay=0]
 * @param {string} [props.className]
 * @param {string} [props.as='div']
 */
const FadeIn = ({ children, delay = 0, className = '', as: Tag = 'div', threshold = 0.15 }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
      animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default FadeIn
