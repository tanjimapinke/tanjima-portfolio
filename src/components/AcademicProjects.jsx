import Section from './Section.jsx'
import { academicProjects } from '../data/projects.js'

export default function AcademicProjects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected academic projects"
      title="Coursework worth showing"
      lead="A short selection from university courses, kept to the three that taught me the most."
    >
      <div className="projects">
        {academicProjects.map((project) => (
          <article className="projects__card" key={project.id} data-reveal>
            <p className="tag tag--quiet">{project.course}</p>
            <h3 className="projects__title">{project.title}</h3>
            <p className="projects__summary">{project.summary}</p>
            <ul className="chips chips--dense">
              {project.tags.map((tag) => (
                <li className="chip" key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
