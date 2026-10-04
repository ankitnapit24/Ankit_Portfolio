import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import FadeIn from './FadeIn'
import './Skills.css'

const skillGroups = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML5', icon: '🌐' },
      { name: 'CSS3', icon: '🎨' },
      { name: 'JavaScript', icon: '⚡' },
      { name: 'React.js', icon: '⚛' },
      { name: 'Vite', icon: '🚀' },
      { name: 'Tailwind CSS', icon: '💨' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'Express.js', icon: '🛤' },
      { name: 'REST APIs', icon: '🔗' },
    ],
  },
  {
    category: 'Database & Cloud',
    skills: [
      { name: 'MongoDB', icon: '🍃' },
      { name: 'Mongoose', icon: '📦' },
      { name: 'Cloudinary', icon: '☁' },
    ],
  },
  {
    category: 'Programming',
    skills: [
      { name: 'Java', icon: '☕' },
      { name: 'C', icon: '🔧' },
      { name: 'DSA', icon: '📐' },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', icon: '🌿' },
      { name: 'GitHub', icon: '🐙' },
      { name: 'VS Code', icon: '💻' },
      { name: 'IntelliJ IDEA', icon: '🧠' },
    ],
  },
]

const SkillCard = ({ skill, delay }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      className="skill-card glass-card"
      initial={{ opacity: 0, scale: 0.9, y: 16 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.1)', boxShadow: '0 8px 30px rgba(0,0,0,0.3)' }}
    >
      <span className="skill-icon" aria-hidden="true">{skill.icon}</span>
      <span className="skill-name">{skill.name}</span>
    </motion.div>
  )
}

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <FadeIn>
          <div className="section-header">
            <span className="section-label">03 / Skills</span>
            <h2 className="section-title">My <span>Tech Stack</span></h2>
          </div>
        </FadeIn>

        <div className="skill-groups">
          {skillGroups.map((group, gi) => (
            <div key={group.category} className="skill-group">
              <FadeIn delay={gi * 0.05}>
                <h3 className="skill-category">{group.category}</h3>
              </FadeIn>
              <div className="skill-grid">
                {group.skills.map((skill, si) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    delay={gi * 0.05 + si * 0.06}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
