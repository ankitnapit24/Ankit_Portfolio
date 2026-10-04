import FadeIn from './FadeIn'
import './Education.css'

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="section-container">
        <FadeIn>
          <div className="section-header">
            <span className="section-label">06 / Education</span>
            <h2 className="section-title">Where I <span>Study</span></h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="education-card glass-card">
            <div className="edu-left">
              <div className="edu-degree">B.Tech — Computer Science &amp; Engineering</div>
              <div className="edu-college">Lakshmi Narayan College of Technology, Bhopal</div>
            </div>
            <div className="edu-right">
              <div className="edu-batch">2025 – 2029</div>
              <div className="edu-status">Pursuing</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default Education
