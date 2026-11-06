import { profile } from '../content';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <p>&copy; {new Date().getFullYear()} {profile.name}</p>
        <ul className="footer-links">
          <li><a href={profile.github} rel="noopener noreferrer" target="_blank">GitHub</a></li>
          <li><a href={profile.linkedin} rel="noopener noreferrer" target="_blank">LinkedIn</a></li>
          <li><a href={profile.resume}>Resume</a></li>
        </ul>
      </div>
    </footer>
  );
}
