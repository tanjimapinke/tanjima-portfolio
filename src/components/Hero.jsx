import { profile, assets } from '../data/profile.js'
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PinIcon,
  DownloadIcon,
  ArrowDownIcon,
} from './Icons.jsx'

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow" data-reveal>
            {profile.title}
          </p>

          <h1 className="hero__name" id="hero-title" data-reveal>
            {profile.name}
          </h1>

          <p className="hero__tagline" data-reveal>
            {profile.tagline}
          </p>

          <p className="hero__location" data-reveal>
            <PinIcon width="16" height="16" />
            {profile.location}
          </p>

          <div className="hero__actions" data-reveal>
            <a className="btn btn--primary" href="#featured-work">
              View my work
              <ArrowDownIcon width="17" height="17" />
            </a>
            <a className="btn btn--ghost" href={assets.cv} download="Tanjima-Abbas-Pinke-CV.pdf">
              Download CV
              <DownloadIcon width="17" height="17" />
            </a>
          </div>

          <ul className="hero__social" data-reveal>
            <li>
              <a
                href={profile.github}
                className="icon-link"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub profile"
              >
                <GitHubIcon />
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
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a href={`mailto:${profile.email}`} className="icon-link" aria-label="Send an email">
                <MailIcon />
              </a>
            </li>
          </ul>
        </div>

        <div className="hero__portrait" data-reveal>
          <div className="portrait">
            <img
              src={assets.photo}
              alt={`Portrait of ${profile.name}`}
              width="440"
              height="520"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>

        <dl className="hero__facts" data-reveal>
          <div>
            <dt>University</dt>
            <dd>Daffodil International University</dd>
          </div>
          <div>
            <dt>Programme</dt>
            <dd>B.Sc. in CSE, 2023 – 2026</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>Explainable AI for healthcare</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
