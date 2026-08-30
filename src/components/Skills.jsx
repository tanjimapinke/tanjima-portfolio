import Section from './Section.jsx'
import { skillGroups } from '../data/skills.js'

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Technical skills"
      title="What I work with"
      lead="Tools I have used in coursework, thesis work and personal projects."
    >
      <div className="skills">
        {skillGroups.map((group) => (
          <article className="skills__card" key={group.id} data-reveal>
            <h3 className="micro-title">{group.title}</h3>
            <ul className="chips">
              {group.items.map((item) => (
                <li className="chip" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
