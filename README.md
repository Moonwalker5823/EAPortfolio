# Eric Askew — Portfolio

Personal site for Eric Askew, full-stack engineer at Commod and former audio engineer at Quad Recording Studios, New York.

The design borrows from a recording session: a strip of console tape indexes the work (one channel per project, the red light marks what's current), experience is laid out like a track sheet, and the tools section reads like a studio equipment list.

## Editing

All copy lives in [`src/content.js`](src/content.js): intro, work entries, experience rows, the AI workflow, gear, testimonials. Change text there; the layout picks it up.

- Work order in `content.js` is the channel order on the strip.
- Mark the current job with `now: true` to light its record LED.
- Screenshots are in `src/media/work/` (1200×750 JPEG). Photos are in `src/media/photos/`.
- The resume is served from `public/eric-askew-resume.pdf`. Its source is [`resume/resume.html`](resume/resume.html); edit that, then run `npm run resume` to print a fresh one-page PDF with headless Chrome (macOS path by default, or set `CHROME=/path/to/chrome`).

## Sections

Hero and console strip, Work, Experience, How I work, Gear, Kind words, Off the clock, Contact.

## Stack

- React 18 + Vite
- Plain CSS with custom properties (`src/styles.css`), no CSS framework
- Archivo and Permanent Marker from Google Fonts
- Contact form posts to FormSubmit

## Getting started

```bash
npm install
npm run dev     # http://localhost:3300
npm run lint
npm run build
```

## Contact

- GitHub: [github.com/Moonwalker5823](https://github.com/Moonwalker5823)
- LinkedIn: [linkedin.com/in/easkew51](https://www.linkedin.com/in/easkew51/)
- Email: easkew81@yahoo.com
