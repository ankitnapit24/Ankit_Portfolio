import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { useCallback } from 'react'
import FadeIn from './FadeIn'
import './Projects.css'

const projects = [
  {
    id: 'sehatsaarthi',
    name: 'SehatSaarthi',
    tagline: 'AI-Powered Healthcare Platform',
    description:
      'A collaborative hackathon project built with a team — SehatSaarthi is a smart healthcare web platform that leverages the Gemini API to provide AI-driven health guidance. Built during HackWave 3.0, the platform delivers intelligent symptom analysis, health information and real-time user support through a clean, accessible interface.',
    tech: ['React.js', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'REST APIs', 'Gemini API'],
    live: 'https://sehatsaarthi.vercel.app/',
    github: 'https://github.com/ankitnapit24/SehatSaarthi',
    type: 'Hackathon · Team Project',
    accent: 'rgba(160,200,180,0.06)',
    accentBorder: 'rgba(160,200,180,0.12)',
    icon: '⚕',
    num: '01',
  },
  {
    id: 'rentonly',
    name: 'RentOnly',
    tagline: 'Full-Stack Rental Marketplace',
    description:
      'A production-grade rental marketplace platform enabling property discovery with location-based search, price range filtering, and multi-image property galleries via Cloudinary. Features include user enquiry management, admin approval workflows, secure REST APIs, and cloud image storage — built end-to-end with the MERN stack.',
    tech: ['React.js', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Cloudinary'],
    live: 'https://rent-only-final-v2.onrender.com/',
    github: 'https://github.com/ankitnapit24/RentOnly',
    type: 'Full-Stack · Solo Project',
    accent: 'rgba(180,160,130,0.06)',
    accentBorder: 'rgba(180,160,130,0.12)',
    icon: '🏠',
    num: '02',
  },
]

const ProjectCard = ({ project }) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 100, damping: 25 })
  const springY = useSpring(mouseY, { stiffness: 100, damping: 25 })
  const rotateX = useTransform(springY, [-120, 120], [5, -5])
  const rotateY = useTransform(springX, [-120, 120], [-5, 5])

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
    <motion.div
      className="project-card glass-card"
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        '--accent': project.accent,
        '--accent-border': project.accentBorder,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.01, boxShadow: '0 24px 80px rgba(0,0,0,0.4)' }}
      transition={{ duration: 0.3 }}
    >
      <div className="project-card-inner">
        {/* Header */}
        <div className="project-header">
          <div className="project-num">{project.num}</div>
          <div className="project-icon">{project.icon}</div>
          <div className="project-type">{project.type}</div>
        </div>

        {/* Name & tagline */}
        <div className="project-title-block">
          <h3 className="project-name">{project.name}</h3>
          <p className="project-tagline">{project.tagline}</p>
        </div>

        {/* Description */}
        <p className="project-description">{project.description}</p>

        {/* Tech */}
        <div className="project-tech">
          {project.tech.map(t => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>

        {/* Links */}
        <div className="project-links">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link project-link--primary"
          >
            <FiExternalLink /> Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link project-link--outline"
          >
            <FiGithub /> GitHub
          </a>
        </div>
      </div>

      {/* Abstract BG visual */}
      <div className="project-abstract" aria-hidden="true">
        <div className="abstract-grid" />
        <div className="abstract-glow" />
      </div>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <FadeIn>
          <div className="section-header">
            <span className="section-label">02 / Projects</span>
            <h2 className="section-title">Things I've <span>Built</span></h2>
          </div>
        </FadeIn>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <FadeIn key={project.id} delay={0.1 + i * 0.12}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
