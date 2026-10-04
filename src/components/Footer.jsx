import { FiGithub, FiLinkedin, FiArrowUp } from 'react-icons/fi'
import { SiCodechef } from 'react-icons/si'
import './Footer.css'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-line" />
      <div className="footer-inner section-container">
        <div className="footer-left">
          <span className="footer-logo">AN</span>
          <p className="footer-tagline">Building the web, one commit at a time.</p>
        </div>

        <div className="footer-socials">
          <a href="https://github.com/ankitnapit24" target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/ankit-napit/" target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href="https://www.codechef.com/users/ankitnapit24" target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label="CodeChef">
            <SiCodechef />
          </a>
        </div>

        <div className="footer-right">
          <p className="footer-copy">&copy; {new Date().getFullYear()} Ankit Napit. All rights reserved.</p>
          <button className="back-top" onClick={scrollToTop} aria-label="Back to top">
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
