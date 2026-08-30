import Section from './Section.jsx'
import { hobbies } from '../data/profile.js'

export default function Hobbies() {
  return (
    <Section id="hobbies" eyebrow="Outside study" title="Hobbies">
      <ul className="hobbies" data-reveal>
        {hobbies.map((hobby) => (
          <li className="hobbies__item" key={hobby.name}>
            <span className="hobbies__name">{hobby.name}</span>
            <span className="hobbies__note">{hobby.note}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
