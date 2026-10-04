import { useCallback } from 'react'
import Particles from 'react-particles'
import { loadSlim } from 'tsparticles-slim'
import './Background.css'

const Background = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <div className="bg-wrapper" aria-hidden="true">
      {/* Grid overlay */}
      <div className="grid-overlay" />

      {/* Ambient glows */}
      <div className="ambient-glow glow-1" />
      <div className="ambient-glow glow-2" />

      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: 'transparent' },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'grab' },
              resize: true,
            },
            modes: {
              grab: { distance: 120, links: { opacity: 0.08 } },
            },
          },
          particles: {
            color: { value: '#888' },
            links: {
              color: '#555',
              distance: 140,
              enable: true,
              opacity: 0.06,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.4,
              direction: 'none',
              random: true,
              straight: false,
              outModes: { default: 'out' },
            },
            number: { value: 50, density: { enable: true, area: 900 } },
            opacity: { value: 0.18 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 2 } },
          },
          detectRetina: true,
        }}
        className="particles-canvas"
      />
    </div>
  )
}

export default Background
