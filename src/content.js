// Everything the site says lives here, so copy changes never touch layout.

import commodShot from './media/work/commod.jpg';
import hemmingsShot from './media/work/hemmings.jpg';
import veganishShot from './media/work/veganish.jpg';
import digiheartShot from './media/work/digiheart.jpg';
import vibelistShot from './media/work/vibelist.jpg';
import truckstarShot from './media/work/truckstar.jpg';
import traderootsShot from './media/work/traderoots.jpg';
import konstantinPhoto from './media/photos/konstantin.jpg';
import brianPhoto from './media/photos/brian.jpg';

export const profile = {
  name: 'Eric Askew',
  email: 'easkew81@yahoo.com',
  github: 'https://github.com/Moonwalker5823',
  linkedin: 'https://www.linkedin.com/in/easkew51/',
  resume: '/eric-askew-resume.pdf',
};

export const intro = [
  "I'm a full-stack engineer at Commod, where I work on the deal side of a platform for physical commodity trade: negotiation, contracts, compliance checks and settlement.",
  'Before software I spent five years as an audio engineer at Quad Recording Studios in New York, running sessions for artists like Jamie Foxx, T.I. and KRS-One. I still work the way a good session runs: plan it before anyone hits record, get the take right, and label everything.',
];

export const status = "At Commod full time. Always happy to talk shop.";

// Order here is the channel order on the console strip.
export const work = [
  {
    id: 'commod',
    label: 'Commod',
    name: 'Commod',
    years: '2026 to now',
    now: true,
    role: 'Full-stack engineer',
    url: 'https://commod.ai',
    urlLabel: 'commod.ai',
    shot: commodShot,
    shotAlt: 'The Commod homepage',
    summary:
      'Commod is where buyers and sellers of physical commodities negotiate a deal, agree a contract, clear compliance and settle, in one place. I work on that deal lifecycle end to end, from the React screens traders use to the NestJS services that decide when a deal is allowed to move forward.',
    points: [
      'Settlement that reconciles a short delivery against the contract terms the deal was agreed under.',
      'Gates that hold a deal at the right step and tell both sides exactly what is blocking it.',
      'Most of it built spec-first, with the AI workflow described below.',
    ],
    stack: ['React 19', 'TypeScript', 'NestJS', 'PostgreSQL', 'Redis', 'Socket.IO'],
  },
  {
    id: 'hemmings',
    label: 'Hemmings',
    name: 'Hemmings',
    years: '2022 to 2026',
    role: 'Software engineer, American City Business Journals',
    url: 'https://www.hemmings.com',
    urlLabel: 'hemmings.com',
    shot: hemmingsShot,
    shotAlt: 'The Hemmings logo',
    summary:
      'Hemmings is the classic-car marketplace, and its auctions run every day. I built features across the auction platform for four years.',
    points: [
      'A max-bid system: bidders set a ceiling and the platform bids for them in increments.',
      'The bidding and checkout modals, and the contact page.',
      'A membership upsell inside checkout that raised conversion.',
    ],
    stack: ['Laravel', 'Vue.js', 'PHP', 'MySQL'],
  },
  {
    id: 'veganish',
    label: 'Veganish',
    name: 'Veganish Cafe',
    years: '2026',
    role: 'Client site',
    url: 'https://veganish-one.vercel.app/',
    urlLabel: 'veganish-one.vercel.app',
    shot: veganishShot,
    shotAlt: 'The Veganish Cafe homepage',
    summary:
      'A site for a Black-owned plant-based cafe in downtown Bridgeport, Connecticut. I built it with the owners: the menu, catering, meal prep and juice cleanse pages, online ordering, and structured data so the cafe shows up properly in local search.',
    stack: ['JavaScript', 'Vite', 'Vercel'],
  },
  {
    id: 'digiheart',
    label: 'DigiHeart',
    name: 'DigiHeart',
    role: 'Side project',
    url: 'https://digiheart.vercel.app/',
    urlLabel: 'digiheart.vercel.app',
    shot: digiheartShot,
    shotAlt: 'The DigiHeart homepage',
    summary:
      "A private place for families to keep photos, videos and memories of someone they've lost. Profiles are protected, media lives in S3, and new memorials wait for admin approval.",
    stack: ['React', 'Express', 'MongoDB', 'AWS S3'],
  },
  {
    id: 'vibelist',
    label: 'VibeList',
    name: 'VibeList',
    role: 'Side project',
    url: 'https://vibelist-psi.vercel.app/',
    urlLabel: 'vibelist-psi.vercel.app',
    shot: vibelistShot,
    shotAlt: 'The VibeList mood prompt',
    summary:
      'Type how you feel. Claude reads the mood, Last.fm turns it into a playlist, and the whole interface re-themes to match.',
    stack: ['React', 'Node.js', 'Claude API', 'Last.fm API'],
  },
  {
    id: 'truckstar',
    label: 'TruckStar',
    name: 'TruckStar',
    role: 'Side project',
    url: 'https://erictruckstarfoodfinder.vercel.app/',
    urlLabel: 'erictruckstarfoodfinder.vercel.app',
    shot: truckstarShot,
    shotAlt: 'The TruckStar map of nearby food trucks',
    summary: 'Food trucks near you on a live map, with Google Places for search and Leaflet for the map.',
    stack: ['React', 'Express', 'Google Places', 'Leaflet'],
  },
  {
    id: 'traderoots',
    label: 'TradeRoots',
    name: 'TradeRoots',
    role: 'Side project',
    url: 'https://traderoots.vercel.app',
    urlLabel: 'traderoots.vercel.app',
    shot: traderootsShot,
    shotAlt: 'The TradeRoots market categories',
    summary:
      'A way to learn how global commodity markets work: metals, energy, agriculture and livestock, with the history behind each trade.',
    stack: ['React', 'Recharts', 'Tailwind CSS'],
  },
];

// Oldest first, like a track sheet filling up during a session.
export const experience = [
  {
    years: '2010 to 2015',
    where: 'Quad Recording Studios, New York',
    role: 'Audio engineer',
    notes: 'Resident engineer. Recorded and ran sessions for Jamie Foxx, T.I. and KRS-One.',
  },
  {
    years: '2018 to 2021',
    where: 'FPWA',
    role: 'Facilities coordinator',
    notes: 'Ran the AV for a multi-room conference center and handled hands-on IT support.',
  },
  {
    years: '2021',
    where: 'Codesmith',
    role: 'Software engineering residency',
    notes: 'Where the switch from audio to software happened.',
  },
  {
    years: '2021 to 2022',
    where: 'BeamQL',
    role: 'Co-creator',
    notes: 'Open-source tool that generates a GraphQL layer on top of an existing REST API without touching its endpoints.',
  },
  {
    years: '2022 to 2026',
    where: 'Hemmings, American City Business Journals',
    role: 'Software engineer',
    notes: 'Auction platform: max bids, checkout, memberships.',
  },
  {
    years: '2026 to now',
    where: 'Commod',
    role: 'Full-stack engineer',
    notes: 'Deal lifecycle, contracts and settlement.',
    now: true,
  },
];

export const talk = {
  title: 'Adventures in Deno.land',
  venue: 'Single Sprout Speaker Series',
};

export const workflow = {
  lead:
    'Most of the code I ship now is written with Claude Code. The part I care about is everything around the agent: what it is asked to build, and what it has to get through before a person reviews it.',
  steps: [
    {
      title: 'Write the spec',
      body: "Every change starts as an OpenSpec proposal: what's changing, why, and the scenarios that prove it works. The spec gets reviewed before any code exists.",
    },
    {
      title: 'Build against it',
      body: 'Claude Code works through the task list in the proposal. I steer, read every diff, and push back when the code drifts from what the spec says.',
    },
    {
      title: 'Gate the push',
      body: "I wrote Claude Code skills that act as a pre-push gate. A commit can't leave my machine until lint, types, unit tests and a seeded end-to-end run pass, a review agent has checked it against the team's standards, and the ticket matches what was built.",
    },
    {
      title: 'Archive the spec',
      body: 'When the change merges, its spec merges into the source of truth, so the next change starts from what the system actually does.',
    },
  ],
  extras:
    "Other tools I've built for myself: a reviewer that sweeps every open pull request with one agent per PR, and a recorder that drives a PR in a real browser and renders a narrated walkthrough video.",
};

export const gear = [
  { group: 'Daily', items: ['TypeScript', 'React 19', 'NestJS', 'PostgreSQL', 'Redis', 'TanStack Query'] },
  { group: 'Years of', items: ['Laravel', 'Vue.js', 'PHP', 'MySQL'] },
  { group: 'Also', items: ['Node.js', 'Express', 'MongoDB', 'GraphQL', 'Next.js', 'Tailwind CSS', 'AWS S3', 'Vercel'] },
  { group: 'Testing', items: ['Jest', 'React Testing Library', 'Cucumber'] },
  { group: 'AI', items: ['Claude Code', 'OpenSpec', 'Claude API', 'OpenAI API', 'GitHub Copilot'] },
];

export const words = [
  {
    name: 'Brian Grosso',
    title: 'Sr. Engineer, Fin Tech',
    photo: brianPhoto,
    quote:
      "Eric is the most perseverant engineer I know, having maintained and improved developer tools we built together for several years while also continuously honing his skills. He has eclectic interests and a diversity of experiences which helped him bring creativity and personality to the user experience we created, and also made the work fun for the entire team. Can't wait to see where he goes next!",
  },
  {
    name: 'Konstantin Hamilton',
    title: 'Software Engineer',
    photo: konstantinPhoto,
    quote:
      "Eric's grasp of algorithmic concepts and design patterns make him a privilege to work with. He is a talented, driven, and empathetic engineer with deep expertise, particularly in node and react.",
  },
];

export const offTheClock =
  'Onyx is a pit bull and Cody is a Morkie, and between them they review most of my work. The rest of the time: Giants, Bulls and Mets, more fantasy football than is healthy, and Xbox.';
