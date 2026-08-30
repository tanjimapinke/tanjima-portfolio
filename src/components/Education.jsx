import Section from './Section.jsx'
import { education } from '../data/education.js'

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Where I study">
      <article className="degree" data-reveal>
        <div className="degree__head">
          <div>
            <h3 className="degree__title">{education.degree}</h3>
            <p className="degree__school">
              {education.institution} · {education.location}
            </p>
          </div>
          <p className="degree__session">{education.session}</p>
        </div>

        <dl className="degree__stats">
          <div>
            <dt>CGPA</dt>
            <dd className="degree__cgpa">{education.cgpa}</dd>
          </div>
          <div>
            <dt>Expected graduation</dt>
            <dd>{education.graduation}</dd>
          </div>
          <div>
            <dt>Session</dt>
            <dd>{education.session}</dd>
          </div>
        </dl>

        <div className="degree__courses">
          <h4 className="micro-title">Relevant coursework</h4>
          <ul className="chips">
            {education.coursework.map((course) => (
              <li className="chip" key={course}>
                {course}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Section>
  )
}
