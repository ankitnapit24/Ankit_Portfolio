import FadeIn from './FadeIn'
import './About.css'

const highlights = [
  { label: 'Current Focus', value: 'Full-Stack Web Development' },
  { label: 'College', value: 'LNCT, Bhopal' },
  { label: 'Batch', value: '2025 – 2029' },
  { label: 'Primary Stack', value: 'React · Node.js · MongoDB' },
]

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <FadeIn>
          <div className="section-header">
            <span className="section-label">01 / About</span>
            <h2 className="section-title">Who I Am</h2>
          </div>
        </FadeIn>

        <div className="about-grid">
          <FadeIn delay={0.1}>
            <div className="about-text">
              <p>
                I'm <strong>Ankit Napit</strong> — a second-year CS student at LNCT, Bhopal,
                who builds things on the web. I don't just study programming; I ship real
                products. My work spans modern frontend with React to backend systems with
                Node.js and Express, and I'm constantly pushing myself deeper into
                Data Structures &amp; Algorithms and systems thinking.
              </p>
              <p>
                I believe in learning by building — every project is a new challenge to solve
                and a new set of decisions to make. I'm driven by the intersection of clean
                code, good design, and real user value.
              </p>
              <p className="about-closing">
                Currently building, learning, and growing as a developer — one commit at a time.
              </p>
            </div>
          </FadeIn>

          <div className="about-highlights">
            {highlights.map((h, i) => (
              <FadeIn key={h.label} delay={0.1 + i * 0.08}>
                <div className="highlight-card glass-card">
                  <span className="highlight-label">{h.label}</span>
                  <span className="highlight-value">{h.value}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
