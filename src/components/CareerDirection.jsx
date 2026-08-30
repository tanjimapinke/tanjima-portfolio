import Section from './Section.jsx'
import { careerDirection } from '../data/profile.js'

export default function CareerDirection() {
  return (
    <Section
      id="career"
      eyebrow="Career direction"
      title="Where I'm heading"
      lead="Not a fixed plan, but the direction I am working towards after graduation in December 2026."
    >
      <ul className="direction">
        {careerDirection.map((item) => (
          <li className="direction__item" key={item.title} data-reveal>
            <h3 className="direction__title">{item.title}</h3>
            <p className="direction__body">{item.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
