import { profile } from '../data/profile.js'
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons.jsx'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__name">{profile.name}</p>
          <p className="footer__meta">
            {profile.title} · {profile.location}
          </p>
        </div>

        <ul className="footer__social">
          <li>
            <a
              href={profile.github}
              className="icon-link"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
            >
              <GitHubIcon width="18" height="18" />
            </a>
          </li>
          <li>
            <a
              href={profile.linkedin}
              className="icon-link"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon width="18" height="18" />
            </a>
          </li>
          <li>
            <a href={`mailto:${profile.email}`} className="icon-link" aria-label="Send an email">
              <MailIcon width="18" height="18" />
            </a>
          </li>
        </ul>

        <p className="footer__copy">© {year} {profile.name}. Built with React and Vite.</p>
      </div>
    </footer>
  )
}
