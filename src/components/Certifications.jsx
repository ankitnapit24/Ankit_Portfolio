import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import FadeIn from './FadeIn'
import './Certifications.css'

const certs = [
  {
    id: 'nptel-java',
    title: 'Programming in Java',
    issuer: 'NPTEL',
    date: 'Issued May 2026',
    icon: '☕',
    category: 'Programming',
  },
  {
    id: 'core-java',
    title: 'Core Java',
    issuer: 'Saksham Digital Technology',
    date: 'Issued Feb 2026',
    icon: '💻',
    category: 'Programming',
  },
  {
    id: 'data-science',
    title: 'Introduction to Data Science',
    issuer: 'Cisco Networking Academy',
    date: 'Issued Nov 2025',
    icon: '📊',
    category: 'Data Science',
  },
]

const CertCard = ({ cert, delay }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <motion.div
      ref={ref}
      className="cert-card glass-card"
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ borderColor: 'rgba(255,255,255,0.1)', y: -2 }}
    >
      <div className="cert-icon">{cert.icon}</div>
      <div className="cert-body">
        <span className="cert-category">{cert.category}</span>
        <h3 className="cert-title">{cert.title}</h3>
        <p className="cert-issuer">{cert.issuer}</p>
      </div>
      <div className="cert-date">{cert.date}</div>
    </motion.div>
  )
}

const Certifications = () => {
  return (
    <section id="certifications" className="certs-section">
      <div className="section-container">
        <FadeIn>
          <div className="section-header">
            <span className="section-label">05 / Certifications</span>
            <h2 className="section-title">Verified <span>Learning</span></h2>
          </div>
        </FadeIn>

        <div className="certs-list">
          {certs.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
