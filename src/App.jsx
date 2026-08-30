import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import FeaturedWork from './components/FeaturedWork.jsx'
import Research from './components/Research.jsx'
import AcademicProjects from './components/AcademicProjects.jsx'
import Achievements from './components/Achievements.jsx'
import CareerDirection from './components/CareerDirection.jsx'
import Hobbies from './components/Hobbies.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { useScrollReveal } from './hooks/useScroll.js'

export default function App() {
  useScrollReveal()

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <FeaturedWork />
        <Research />
        <AcademicProjects />
        <Achievements />
        <CareerDirection />
        <Hobbies />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
