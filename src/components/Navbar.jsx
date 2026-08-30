import { useEffect, useRef, useState } from 'react'
import { MenuIcon, CloseIcon } from './Icons.jsx'
import { useActiveSection, useScrolled } from '../hooks/useScroll.js'

const links = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'featured-work', label: 'Work' },
  { id: 'research', label: 'Research' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

const sectionIds = links.map((link) => link.id)

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark'
  })
  const active = useActiveSection(sectionIds)
  const scrolled = useScrolled(16)
  const panelRef = useRef(null)
  const toggleRef = useRef(null)
  useEffect(() => {
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
}, [theme])

  // Close the mobile menu on Escape and return focus to the toggle.
  useEffect(() => {
    if (!open) return
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  // Prevent the page behind the mobile menu from scrolling.
  useEffect(() => {
    document.body.classList.toggle('is-locked', open)
    return () => document.body.classList.remove('is-locked')
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a className="nav__brand" href="#top">
          <span className="nav__mark" aria-hidden="true">
            TP
          </span>
          <span className="nav__brand-text">
            Tanjima Abbas Pinke
            <span className="nav__brand-sub">CSE · AI/ML · Research</span>
          </span>
        </a>

        <nav className="nav__links" aria-label="Section navigation">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav__link ${active === link.id ? 'is-active' : ''}`}
              aria-current={active === link.id ? 'true' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
  type="button"
  className="theme-toggle"
  aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
  onClick={() => setTheme((value) => (value === 'dark' ? 'light' : 'dark'))}
>
  {theme === 'dark' ? '☀️' : '🌙'}
</button>

        <button
          ref={toggleRef}
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div
        id="mobile-menu"
        ref={panelRef}
        className={`nav__panel ${open ? 'is-open' : ''}`}
        hidden={!open}
      >
        <nav aria-label="Section navigation, mobile">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav__panel-link ${active === link.id ? 'is-active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
