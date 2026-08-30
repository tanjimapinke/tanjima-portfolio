import Section from './Section.jsx'
import { researchEntries, researchInterests } from '../data/research.js'

export default function Research() {
  return (
    <Section
      id="research"
      eyebrow="Research"
      title="What I am researching"
      lead="Both projects sit in the same line of enquiry: models that predict clinical risk and can explain why."
    >
      <div className="research">
        <ol className="research__list">
          {researchEntries.map((entry) => (
            <li className="research__item" key={entry.id} data-reveal>
              <p className="tag tag--quiet">{entry.kind}</p>
              <h3 className="research__title">
                <a href={entry.link}>{entry.title}</a>
              </h3>
              <ul className="chips chips--dense">
                {entry.focus.map((item) => (
                  <li className="chip" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <aside className="research__interests" data-reveal aria-labelledby="research-interests">
          <h3 className="micro-title" id="research-interests">
            Research interests
          </h3>
          <ul className="research__interest-list">
            {researchInterests.map((interest) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  )
}
