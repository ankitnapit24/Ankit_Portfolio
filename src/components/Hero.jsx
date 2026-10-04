import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { FiGithub, FiLinkedin, FiArrowDown, FiDownload, FiEye } from 'react-icons/fi'
import { SiCodechef } from 'react-icons/si'
import { useCallback } from 'react'
import './Hero.css'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

const Hero = () => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 })
  const rotateX = useTransform(springY, [-200, 200], [6, -6])
  const rotateY = useTransform(springX, [-200, 200], [-6, 6])

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }, [mouseX, mouseY])

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0)
    mouseY.set(0)
  }, [mouseX, mouseY])

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        {/* Left side */}
        <motion.div
          className="hero-left"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="hero-label">
            <span className="label-dot" />
            Second-Year Computer Science Student &amp; Developer
          </motion.div>

          <motion.h1 variants={item} className="hero-name">
            Ankit<br />
            <span className="hero-name-accent">Napit</span>
          </motion.h1>

          <motion.p variants={item} className="hero-tagline">
            "Turning ideas into working products."
          </motion.p>

          <motion.p variants={item} className="hero-intro">
            I'm a Computer Science student and developer focused on building modern web
            applications. I work with React, Node.js and backend technologies, while
            strengthening my foundation in Java and Data Structures &amp; Algorithms.
          </motion.p>

          <motion.div variants={item} className="hero-cta">
            <a href="#projects" className="btn-primary" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
              <FiEye /> View My Work
            </a>
            <a href="/resume.pdf" className="btn-outline" download>
              <FiDownload /> Download Resume
            </a>
          </motion.div>

          <motion.div variants={item} className="hero-socials">
            <a href="https://github.com/ankitnapit24" target="_blank" rel="noopener noreferrer" className="hero-social" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/ankit-napit/" target="_blank" rel="noopener noreferrer" className="hero-social" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="https://www.codechef.com/users/ankitnapit24" target="_blank" rel="noopener noreferrer" className="hero-social" aria-label="CodeChef">
              <SiCodechef />
            </a>
          </motion.div>
        </motion.div>

        {/* Right side — Photo */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="photo-wrapper"
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="photo-glow" />
            <div className="photo-ring photo-ring-outer" />
            <div className="photo-ring photo-ring-mid" />
            <div className="photo-frame">
              <img
                src="/ankit.jpeg"
                alt="Ankit Napit"
                className="hero-photo"
                draggable={false}
              />
            </div>
            {/* Floating accent elements */}
            <motion.div
              className="float-badge float-badge-1"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="mono">Java &amp; DSA</span>
            </motion.div>
            <motion.div
              className="float-badge float-badge-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <span className="mono">Full-Stack Development</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FiArrowDown />
        </motion.div>
        <span>Scroll</span>
      </motion.div>
    </section>
  )
}

export default Hero
