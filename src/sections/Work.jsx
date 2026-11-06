import { work } from '../content';

const FEATURED = 3;

function Entry({ item, channel }) {
  return (
    <article className="entry" id={item.id} aria-labelledby={`${item.id}-title`}>
      <a className="entry-shot" href={item.url} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden="true">
        <img src={item.shot} alt="" width="1200" height="750" loading="lazy" />
      </a>
      <div className="entry-body">
        <div className="entry-title">
          <span className="entry-num" aria-hidden="true">{channel}</span>
          <h3 id={`${item.id}-title`}>{item.name}</h3>
          {item.now && (
            <span className="now-tag">
              <span className="led led-on" aria-hidden="true" />
              Now
            </span>
          )}
        </div>
        <p className="entry-meta">
          {item.role}
          {item.years && `, ${item.years}`}
        </p>
        <p className="entry-summary">{item.summary}</p>
        {item.points && (
          <ul className="entry-points">
            {item.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}
        <p className="entry-stack">
          <span className="sr-only">Built with </span>
          {item.stack.join(', ')}
        </p>
        <a className="entry-link" href={item.url} target="_blank" rel="noopener noreferrer">
          {item.urlLabel}
        </a>
      </div>
    </article>
  );
}

export default function Work() {
  const featured = work.slice(0, FEATURED);
  const side = work.slice(FEATURED);

  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="work-title">Work</h2>
          <p>The numbers match the channels on the strip above.</p>
        </div>
        <div className="entries">
          {featured.map((item, i) => (
            <Entry item={item} channel={i + 1} key={item.id} />
          ))}
        </div>
        <h3 className="subhead">Side projects</h3>
        <div className="side-grid">
          {side.map((item, i) => (
            <Entry item={item} channel={FEATURED + i + 1} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
