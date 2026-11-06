import { words } from '../content';

export default function Words() {
  return (
    <section className="section" id="kind-words" aria-labelledby="words-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="words-title">Kind words</h2>
        </div>
        <div className="quotes">
          {words.map((w) => (
            <figure className="quote" key={w.name}>
              <blockquote>
                <p>{w.quote}</p>
              </blockquote>
              <figcaption>
                <img src={w.photo} alt="" width="48" height="48" loading="lazy" />
                <span>
                  <span className="quote-name">{w.name}</span>
                  <span className="quote-title">{w.title}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
