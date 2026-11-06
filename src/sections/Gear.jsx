import { gear } from '../content';

export default function Gear() {
  return (
    <section className="section" id="gear" aria-labelledby="gear-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="gear-title">Gear</h2>
          <p>What&apos;s in the rack these days.</p>
        </div>
        <dl className="gear">
          {gear.map((row) => (
            <div className="gear-row" key={row.group}>
              <dt>{row.group}</dt>
              <dd>{row.items.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
