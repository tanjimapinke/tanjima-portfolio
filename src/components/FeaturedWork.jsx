import Section from './Section.jsx'
import { featuredProjects } from '../data/projects.js'
import { GitHubIcon, ArrowUpRightIcon } from './Icons.jsx'

export default function FeaturedWork() {
  return (
    <Section
      id="featured-work"
      eyebrow="Featured work"
      title="Three pieces of work I care about"
      lead="Two research projects in healthcare AI and one clinical NLP project. Each card lists what the work actually involved."
    >
      <div className="work">
        {featuredProjects.map((project) => (
          <article className="work__card" key={project.id} data-reveal>
            <div className="work__rail">
              <p className="tag">{project.label}</p>
              <dl className="work__meta">
                {project.meta.map((item) => (
                  <div key={item.k}>
                    <dt>{item.k}</dt>
                    <dd>{item.v}</dd>
                  </div>
                ))}
              </dl>
              {project.repo ? (
                <a
                  className="btn btn--ghost btn--sm"
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <GitHubIcon width="16" height="16" />
                  Repository
                  <ArrowUpRightIcon width="15" height="15" />
                </a>
              ) : null}
            </div>

            <div className="work__body">
              <h3 className="work__title">{project.title}</h3>
              <p className="work__summary">{project.summary}</p>

              <div className="work__block">
                <h4 className="micro-title">{project.workTitle}</h4>
                <ul className="chips chips--dense">
                  {project.work.map((item) => (
                    <li className="chip" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {project.evaluation ? (
                <div className="work__block">
                  <h4 className="micro-title">{project.evaluationTitle}</h4>
                  <ul className="chips chips--dense">
                    {project.evaluation.map((item) => (
                      <li className="chip chip--alt" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {project.note ? <p className="work__note">{project.note}</p> : null}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
