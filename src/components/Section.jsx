export default function Section({ id, eyebrow, title, lead, children, tone = '' }) {
  return (
    <section id={id} className={`section ${tone}`} aria-labelledby={`${id}-title`}>
      <div className="container">
        <header className="section-head" data-reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="section-title" id={`${id}-title`}>
            {title}
          </h2>
          {lead ? <p className="section-lead">{lead}</p> : null}
        </header>
        {children}
      </div>
    </section>
  )
}
