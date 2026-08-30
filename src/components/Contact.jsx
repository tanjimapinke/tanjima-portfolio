import Section from './Section.jsx'
import { profile, assets } from '../data/profile.js'
import {
  MailIcon,
  PhoneIcon,
  PinIcon,
  GitHubIcon,
  LinkedInIcon,
  DownloadIcon,
  ArrowUpRightIcon,
} from './Icons.jsx'

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's connect"
      lead="Open to research collaboration, graduate study opportunities and questions about any of the work above."
    >
      <div className="contact">
        <ul className="contact__list" data-reveal>
          <li>
            <a className="contact__row" href={`mailto:${profile.email}`}>
              <MailIcon />
              <span>
                <span className="contact__label">Email</span>
                <span className="contact__value">{profile.email}</span>
              </span>
            </a>
          </li>
          <li>
            <a className="contact__row" href={`tel:${profile.phoneHref}`}>
              <PhoneIcon />
              <span>
                <span className="contact__label">Phone</span>
                <span className="contact__value">{profile.phone}</span>
              </span>
            </a>
          </li>
          <li>
            <a
              className="contact__row"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
            >
              <LinkedInIcon />
              <span>
                <span className="contact__label">LinkedIn</span>
                <span className="contact__value">Tanjima Abbas Pinke</span>
              </span>
              <ArrowUpRightIcon width="16" height="16" />
            </a>
          </li>
          <li>
            <a
              className="contact__row"
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
            >
              <GitHubIcon />
              <span>
                <span className="contact__label">GitHub</span>
                <span className="contact__value">tanjimapinke</span>
              </span>
              <ArrowUpRightIcon width="16" height="16" />
            </a>
          </li>
          <li>
            <p className="contact__row contact__row--static">
              <PinIcon />
              <span>
                <span className="contact__label">Location</span>
                <span className="contact__value">{profile.location}</span>
              </span>
            </p>
          </li>
        </ul>

        <aside className="contact__cta" data-reveal>
          <h3 className="contact__cta-title">Reviewing my application?</h3>
          <p className="contact__cta-body">
            My CV has the full detail: coursework, thesis scope and contact information.
          </p>
          <a className="btn btn--primary" href={assets.cv} download="Tanjima-Abbas-Pinke-CV.pdf">
            Download CV
            <DownloadIcon width="17" height="17" />
          </a>
          <a className="btn btn--ghost" href={`mailto:${profile.email}`}>
            Send an email
            <MailIcon width="17" height="17" />
          </a>
        </aside>
      </div>
    </Section>
  )
}
