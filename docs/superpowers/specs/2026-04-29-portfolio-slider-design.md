# Portfolio Slider Design

**Date:** 2026-04-29
**Status:** Approved

## Goal

Convert the static 2-column portfolio grid into a Swiper.js carousel. Two tiles visible on desktop and tablet, one on mobile. User-controlled only with infinite loop and dot pagination.

## Requirements

- 2 slides visible at ≥768px (desktop and tablet)
- 1 slide visible at <768px (mobile)
- Infinite loop: last slide wraps to first, first wraps to last
- Dots pagination below the slider, clickable
- No autoplay — user initiates all movement via swipe, drag, or dot click
- All 5 existing portfolio cards (Hemmings, Digiheart, TruckStar, VibeList, BeamQl) remain unchanged

## Implementation

### Files changed

- `src/Components/Portfolio/Portfolio.jsx` — swap `.portfolio-cards` div for `<Swiper>` with `<SwiperSlide>` wrappers
- `src/Components/Portfolio/Portfolio.css` — remove grid styles, add Swiper dot overrides

### Swiper configuration

```jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

<Swiper
  modules={[Pagination]}
  pagination={{ clickable: true }}
  loop={true}
  spaceBetween={20}
  breakpoints={{
    768: { slidesPerView: 2 },
  }}
  slidesPerView={1}
>
  {/* one <SwiperSlide> per portfolioCard */}
</Swiper>
```

### CSS changes

Remove from `.portfolio-cards`:
- `display: grid`
- `grid-template-columns: 1fr 1fr`
- `gap: 5px`
- `width: min(46rem, 90vw)`

Add Swiper dot overrides to match existing blue theme (`#409FF6`):
```css
.swiper-pagination-bullet-active {
  background: #409FF6;
}
.swiper-pagination-bullet {
  background: #ccc;
  opacity: 1;
}
```

Add bottom padding to `.portfolio-cards` (now the swiper container) so dots don't overlap cards:
```css
.portfolio-cards {
  padding-bottom: 2rem;
}
```

### Responsive

The existing `@media (max-width: 900px)` block overrides for `.portfolio-cards` should be removed since Swiper handles breakpoints. The `@media (max-width: 480px)` block for `.portfolio` margin can stay.

## Out of scope

- Navigation arrows
- Autoplay
- Transition animation customization
- Any changes to card content or styling
