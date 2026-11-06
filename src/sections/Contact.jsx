import { useEffect, useState } from 'react';
import { profile } from '../content';

const FORM_ENDPOINT = `https://formsubmit.co/${profile.email}`;

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [returnUrl, setReturnUrl] = useState('');

  useEffect(() => {
    const url = new URL(window.location.href);
    if (url.searchParams.get('sent') === '1') {
      setSent(true);
      url.searchParams.delete('sent');
      window.history.replaceState(null, '', url.pathname + url.search + url.hash);
    }
    setReturnUrl(`${window.location.origin}${window.location.pathname}?sent=1#contact`);
  }, []);

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="wrap contact-grid">
        <div>
          <div className="section-head">
            <h2 id="contact-title">Contact</h2>
            <p>
              I&apos;m at Commod full time, but I&apos;m always up for talking shop, comparing AI workflows, or hearing
              about something you&apos;re building.
            </p>
          </div>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </div>

        <form className="form" action={FORM_ENDPOINT} method="POST">
          <input type="hidden" name="_subject" value="New message from your portfolio" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_autoresponse" value="Got your message. I'll get back to you soon. Eric" />
          {returnUrl && <input type="hidden" name="_next" value={returnUrl} />}
          <input className="honeypot" type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />

          <div className="field">
            <label htmlFor="contact-name">Name</label>
            <input id="contact-name" name="name" type="text" autoComplete="name" required />
          </div>
          <div className="field">
            <label htmlFor="contact-email">Email</label>
            <input id="contact-email" name="email" type="email" autoComplete="email" required />
          </div>
          <div className="field">
            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" rows={6} required />
          </div>
          <button className="button" type="submit">Send message</button>
          {sent && (
            <p className="form-note" role="status">
              Thanks, your message is on its way. I&apos;ll reply by email.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
