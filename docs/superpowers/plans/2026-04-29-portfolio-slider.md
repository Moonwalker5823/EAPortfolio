# Portfolio Slider Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the static 2-column portfolio grid with a Swiper.js carousel showing 2 tiles on desktop/tablet and 1 on mobile, with clickable dot pagination and infinite loop.

**Architecture:** Swiper is already installed (`swiper@12.1.3`). `Portfolio.jsx` swaps its `.portfolio-cards` wrapper div for a `<Swiper>` component, with each existing `portfolioCard` anchor wrapped in a `<SwiperSlide>`. `Portfolio.css` drops the grid rules and adds dot theme overrides.

**Tech Stack:** React 18, Swiper.js 12 (`swiper/react`, `swiper/modules`), Vite

---

### Task 1: Update Portfolio.css

**Files:**
- Modify: `src/Components/Portfolio/Portfolio.css`

- [ ] **Step 1: Replace `.portfolio-cards` block**

Open `src/Components/Portfolio/Portfolio.css`. Find the `.portfolio-cards` rule (lines 17–23) and replace it entirely with:

```css
.portfolio-cards {
  margin-top: 3rem;
  width: min(46rem, 90vw);
  padding-bottom: 2.5rem;
}
```

The removed properties are `display: grid`, `grid-template-columns: 1fr 1fr`, and `gap: 5px` — Swiper owns layout now. `padding-bottom` gives dots space below the cards.

- [ ] **Step 2: Add Swiper dot theme overrides**

Append these rules at the bottom of `src/Components/Portfolio/Portfolio.css`, before the existing `@media` blocks:

```css
.swiper-pagination-bullet {
  background: #ccc;
  opacity: 1;
}
.swiper-pagination-bullet-active {
  background: #409FF6;
}
```

- [ ] **Step 3: Remove `.portfolio-cards` overrides from the 900px media query**

Find the `@media screen and (max-width: 900px)` block. Remove the `.portfolio-cards` rule inside it (the one setting `grid-template-columns: 1fr`, `width: 90%`, and `gap: 2rem`) and the `.portfolioCard` rule (setting `max-width: 22rem` and `margin: 0 auto`). Swiper's `breakpoints` prop handles responsive column count — these overrides are no longer needed.

The 900px block should be left with only `.portfolio` styles and the `.p-blur1, .p-blur2` display rule:

```css
@media screen and (max-width: 900px) {
  .portfolio {
    height: auto;
    min-height: 100vh;
    justify-content: center;
    margin-top: 0;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  .p-blur1, .p-blur2 {
    display: none;
  }
}
```

- [ ] **Step 4: Commit**

```bash
git add src/Components/Portfolio/Portfolio.css
git commit -m "style: prep Portfolio.css for Swiper slider"
```

---

### Task 2: Update Portfolio.jsx

**Files:**
- Modify: `src/Components/Portfolio/Portfolio.jsx`

- [ ] **Step 1: Add Swiper imports**

At the top of `src/Components/Portfolio/Portfolio.jsx`, after the existing imports, add:

```jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
```

- [ ] **Step 2: Replace the `.portfolio-cards` div with a Swiper component**

Find the opening `<div className="portfolio-cards">` and its closing `</div>`. Replace that entire wrapper (keeping all five `<a>` card elements inside) with the Swiper component. Each `<a className="portfolioCard">` must be wrapped in a `<SwiperSlide>`.

The result should look like this:

```jsx
<Swiper
  className="portfolio-cards"
  modules={[Pagination]}
  pagination={{ clickable: true }}
  loop={true}
  spaceBetween={20}
  slidesPerView={1}
  breakpoints={{
    768: { slidesPerView: 2 },
  }}
>
  <SwiperSlide>
    <a href="https://hemmings.com" target="_blank" rel="noreferrer" className="portfolioCard">
      <img src={Hemmings} alt="Hemmings" style={{aspectRatio: '1', objectFit: 'cover'}} />
      <span id='title'>Hemmings</span>
      <span id='subtitle'>Contact Page | Membership (One Page Checkout) | Checkout Flows | Bidding System</span>
    </a>
  </SwiperSlide>
  <SwiperSlide>
    <a href="https://digiheart.vercel.app/" target="_blank" rel="noreferrer" className="portfolioCard">
      <img src={Digiheart} alt="Digiheart" />
      <span id='title'>Digiheart</span>
      <span id='subtitle'>Digital Keepsake for Precious Memories</span>
    </a>
  </SwiperSlide>
  <SwiperSlide>
    <a href="https://erictruckstarfoodfinder.vercel.app/" target="_blank" rel="noreferrer" className="portfolioCard">
      <img src={TruckStar} alt="TruckStar" style={{aspectRatio: '1', objectFit: 'cover'}} />
      <span id='title'>TruckStar</span>
      <span id='subtitle'>Food Truck Finder</span>
    </a>
  </SwiperSlide>
  <SwiperSlide>
    <a href="https://vibelist-psi.vercel.app/" target="_blank" rel="noreferrer" className="portfolioCard">
      <img src={VibeList} alt="VibeList" style={{aspectRatio: '1', objectFit: 'cover'}} />
      <span id='title'>VibeList</span>
      <span id='subtitle'>Mood curated playlist</span>
    </a>
  </SwiperSlide>
  <SwiperSlide>
    <a href="https://github.com/Moonwalker5823" target="_blank" rel="noreferrer" className="portfolioCard">
      <img src={Beamql} alt="beamql" />
      <span id='title'>BeamQl</span>
      <span id='subtitle'>Streamline migration to GraphQL</span>
    </a>
  </SwiperSlide>
</Swiper>
```

- [ ] **Step 3: Commit**

```bash
git add src/Components/Portfolio/Portfolio.jsx
git commit -m "feat: convert portfolio grid to Swiper slider"
```

---

### Task 3: Visual Verification

**Files:** none modified

- [ ] **Step 1: Start the dev server**

```bash
npm run dev
```

Open the URL printed in the terminal (typically `http://localhost:5173`). Navigate to the Portfolio section.

- [ ] **Step 2: Verify desktop layout (≥768px browser width)**

- 2 tiles are visible side-by-side
- Dot pagination appears below the tiles
- No grid layout visible (no gap artifacts)

- [ ] **Step 3: Verify infinite loop**

- Click the last dot — confirm the last slide shows
- Swipe/drag forward — confirm it wraps to the first slide
- Swipe/drag backward from the first slide — confirm it wraps to the last slide

- [ ] **Step 4: Verify mobile layout (<768px browser width)**

Resize the browser below 768px (or use DevTools device emulation).

- 1 tile is visible
- Dots update correctly as you swipe
- Touch swipe works

- [ ] **Step 5: Verify dark mode**

Toggle dark mode in the site. Confirm tile titles and subtitles still use the correct dark mode colors (`#409FF6` for title, white for subtitle).

- [ ] **Step 6: Commit verification note and stop dev server**

If everything looks correct, stop the dev server (`Ctrl+C`) and commit the plan as complete:

```bash
git add docs/superpowers/plans/2026-04-29-portfolio-slider.md
git commit -m "docs: mark portfolio slider plan complete"
```
