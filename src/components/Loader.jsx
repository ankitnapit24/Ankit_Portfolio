import { motion, AnimatePresence } from 'framer-motion'
import './Loader.css'

const Loader = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <div className="loader-inner">
          <motion.div
            className="loader-ring"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="ring ring-1" />
            <div className="ring ring-2" />
            <div className="ring ring-3" />
          </motion.div>

          <motion.div
            className="loader-text"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <span className="loader-name">LOADING</span>
            <span className="loader-dot" />
          </motion.div>
        </div>

        <motion.div
          className="loader-line"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.6, ease: 'easeInOut' }}
        />
      </motion.div>
    </AnimatePresence>
  )
}

export default Loader
