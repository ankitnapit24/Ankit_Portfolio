import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import FadeIn from './FadeIn'
import './Achievements.css'

const achievements = [
  {
    id: 'scholarship',
    icon: '🎓',
    title: 'Reliance Foundation Scholarship',
    subtitle: 'Undergraduate Merit-Based',
    desc: 'Awarded the Reliance Foundation Undergraduate Scholarship through national merit-based selection — recognizing academic excellence and potential.',
    stat: null,
  },
  {
    id: 'problems',
    icon: '💡',
    title: '400+ Problems Solved',
    subtitle: 'Competitive Programming',
    desc: 'Solved over 400 coding problems across platforms, building strong problem-solving skills in Data Structures & Algorithms.',
    stat: '400+',
  },
  {
    id: 'streak',
    icon: '🔥',
    title: '100-Day Coding Streak',
    subtitle: 'CodeChef',
    desc: 'Maintained a 100-day continuous coding streak on CodeChef, demonstrating discipline and consistent practice.',
    stat: '100',
  },
  {
    id: 'rating',
    icon: '⭐',
    title: 'CodeChef Rating ~1100',
    subtitle: 'Competitive Rating',
    desc: 'Achieved a CodeChef rating of approximately 1100, actively competing and improving through contests.',
    stat: '1100',
  },
  {
    id: 'internshala',
    icon: '🤝',
    title: 'Internshala Student Partner \'26',
    subtitle: 'Campus Leadership',
    desc: 'Selected as an Internshala Student Partner for 2026, representing the platform on campus.',
    stat: null,
  },
  {
    id: 'hackwave',
    icon: '🏆',
    title: 'HackWave 3.0 — Rank 24',
    subtitle: 'CDGI, Indore',
    desc: 'Selected among 1,500+ registered teams for HackWave 3.0 and secured Rank 24, building SehatSaarthi under hackathon conditions.',
    stat: '#24',
  },
]

const AchievementCard = ({ item, delay }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      className="achievement-card glass-card"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ borderColor: 'rgba(255,255,255,0.1)', y: -3 }}
    >
      <div className="ach-header">
        <div className="ach-icon">{item.icon}</div>
        {item.stat && (
          <div className="ach-stat">{item.stat}</div>
        )}
      </div>
      <div className="ach-body">
        <h3 className="ach-title">{item.title}</h3>
        <p className="ach-subtitle">{item.subtitle}</p>
        <p className="ach-desc">{item.desc}</p>
      </div>
    </motion.div>
  )
}

const Achievements = () => {
  return (
    <section id="achievements" className="achievements-section">
      <div className="section-container">
        <FadeIn>
          <div className="section-header">
            <span className="section-label">04 / Achievements</span>
            <h2 className="section-title">What I've <span>Accomplished</span></h2>
          </div>
        </FadeIn>

        <div className="achievements-grid">
          {achievements.map((item, i) => (
            <AchievementCard key={item.id} item={item} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
