import Section from './Section.jsx'
import { about } from '../data/profile.js'

const quickFacts = [
  { k: 'Studying', v: 'B.Sc. in Computer Science and Engineering' },
  { k: 'CGPA', v: '3.88 / 4.00' },
  { k: 'Working on', v: 'Explainable AI for clinical risk prediction' },
  { k: 'Next', v: 'Higher studies abroad, then research and teaching' },
]

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A student who likes explainable models">
      <div className="about">
        <div className="about__text" data-reveal>
          {about.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <aside className="about__facts" data-reveal aria-label="Quick facts">
          <dl>
            {quickFacts.map((fact) => (
              <div key={fact.k}>
                <dt>{fact.k}</dt>
                <dd>{fact.v}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </Section>
  )
}
