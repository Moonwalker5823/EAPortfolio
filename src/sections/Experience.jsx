import { experience, talk } from '../content';

export default function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="experience-title">Experience</h2>
          <p>Kept like a track sheet: oldest take first, the one that&apos;s recording at the bottom.</p>
        </div>
        <table className="tracksheet">
          <thead>
            <tr>
              <th scope="col" className="col-track">Track</th>
              <th scope="col" className="col-years">Years</th>
              <th scope="col">Where</th>
              <th scope="col">Role</th>
              <th scope="col">Notes</th>
            </tr>
          </thead>
          <tbody>
            {experience.map((row, i) => (
              <tr key={row.where} className={row.now ? 'is-now' : undefined}>
                <td className="col-track">
                  <span className="track-num">
                    {i + 1}
                    {row.now && <span className="led led-on" aria-hidden="true" />}
                  </span>
                </td>
                <td className="col-years">{row.years}</td>
                <td className="col-where">{row.where}</td>
                <td className="col-role">{row.role}</td>
                <td className="col-notes">{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="talk">
          I also gave a talk, <cite>{talk.title}</cite>, at the {talk.venue}.
        </p>
      </div>
    </section>
  );
}
