import { profile } from '../content';

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap">
        <a className="site-name" href="#top">
          {profile.name}
        </a>
        <nav className="site-nav" aria-label="Sections">
          <ul>
            <li><a href="#work">Work</a></li>
            <li className="nav-extra"><a href="#experience">Experience</a></li>
            <li className="nav-extra"><a href="#how-i-work">How I work</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
