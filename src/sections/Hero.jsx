import { intro, profile, status } from '../content';
import portrait from '../media/photos/eric.jpg';
import ConsoleStrip from './ConsoleStrip';

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <figure className="hero-photo">
          <img src={portrait} alt="Eric Askew in a light gray suit" width="640" height="800" />
        </figure>
        <div className="hero-text">
          <h1 id="hero-title">{profile.name}</h1>
          <div className="hero-intro">
            {intro.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <p className="hero-status">
            <span className="led led-on" aria-hidden="true" />
            {status}
          </p>
          <div className="hero-actions">
            <a className="button" href={`mailto:${profile.email}`}>Email me</a>
            <a href={profile.resume}>Resume (PDF)</a>
            <a href={profile.github} rel="noopener noreferrer" target="_blank">GitHub</a>
            <a href={profile.linkedin} rel="noopener noreferrer" target="_blank">LinkedIn</a>
          </div>
        </div>
      </div>
      <ConsoleStrip />
    </section>
  );
}
