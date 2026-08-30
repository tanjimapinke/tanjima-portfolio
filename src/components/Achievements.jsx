import Section from './Section.jsx'
import { achievements } from '../data/profile.js'

export default function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="Contests I took part in">
      <ul className="awards">
        {achievements.map((item) => (
          <li className="awards__item" key={item.title} data-reveal>
            <p className="awards__term">{item.term}</p>
            {item.certificate && (
            <a
              className="btn btn--ghost"
              href={item.certificate}
              target="_blank"
              rel="noreferrer"
             >
    View Certificate
  </a>
)}
            <h3 className="awards__title">{item.title}</h3>
            <p className="awards__note">{item.note}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
