import { offTheClock } from '../content';
import dogs from '../media/photos/onyx-cody.jpg';

export default function OffTheClock() {
  return (
    <section className="section" id="off-the-clock" aria-labelledby="off-title">
      <div className="wrap offclock">
        <img src={dogs} alt="Onyx, a black pit bull, and Cody, a small black Morkie, resting on a couch" width="960" height="540" loading="lazy" />
        <div>
          <div className="section-head">
            <h2 id="off-title">Off the clock</h2>
          </div>
          <p>{offTheClock}</p>
        </div>
      </div>
    </section>
  );
}
