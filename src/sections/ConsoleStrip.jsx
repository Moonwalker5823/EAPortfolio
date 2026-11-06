import { work } from '../content';

// Fixed, slightly uneven angles so the labels look written by hand
// but render the same on every load.
const tilts = [-1.4, 1, -0.6, 1.3, -1.1, 0.7, -0.9, 1.1];

export default function ConsoleStrip() {
  return (
    <nav className="console" aria-label="Work, one channel per project">
      <div className="console-scroll">
        <ol className="console-channels">
          {work.map((item, i) => (
            <li className="channel" key={item.id}>
              <a className="channel-link" href={`#${item.id}`}>
                <span className="channel-head" aria-hidden="true">
                  <span className={item.now ? 'led led-on' : 'led'} />
                  {i + 1}
                </span>
                <span className="channel-label" style={{ '--tilt': `${tilts[i % tilts.length]}deg`, '--i': i }}>
                  {item.label}
                </span>
                {item.now && <span className="sr-only">, current job</span>}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
