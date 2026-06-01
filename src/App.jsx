import { useState, useEffect, useRef, createContext, useContext } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import Github from '@iconscout/react-unicons/icons/uil-github';
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin';
import Me from './Assets/img/Me1.png';
import HemmingsLogo from './Assets/img/hemmingsLogo.png';
import Digiheart from './Assets/img/Digiheart.png';
import VibeList from './Assets/img/vibelist.jpg';
import KonstantinImg from './Assets/img/KonstantineHamilton.jpeg';
import BrianImg from './Assets/img/Brian.png';
import OnyxImg from './Assets/img/Onyx.jpg';
import CodyImg from './Assets/img/Cody.jpg';
import WaveImg from './Assets/img/musicWave.jpeg';
import CV from './Assets/EAskew_Cover_Letter_2026_v2.pdf';

const ThemeCtx = createContext(true);

/* ─── Typewriter Hook ─────────────────────────────────────── */
function useTypewriter(words, { typeMs = 75, deleteMs = 40, pauseMs = 1800 } = {}) {
  const [text, setText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [phase, setPhase] = useState('typing');
  const t = useRef(null);
  useEffect(() => {
    const word = words[wordIdx];
    if (phase === 'typing') {
      if (text.length < word.length) t.current = setTimeout(() => setText(word.slice(0, text.length + 1)), typeMs);
      else t.current = setTimeout(() => setPhase('pausing'), pauseMs);
    } else if (phase === 'pausing') {
      t.current = setTimeout(() => setPhase('deleting'), 0);
    } else {
      if (text.length > 0) t.current = setTimeout(() => setText(s => s.slice(0, -1)), deleteMs);
      else { setWordIdx(i => (i + 1) % words.length); setPhase('typing'); }
    }
    return () => clearTimeout(t.current);
  }, [text, phase, wordIdx, words, typeMs, deleteMs, pauseMs]);
  return text;
}

/* ─── Count-Up Component ──────────────────────────────────── */
function CountUp({ to, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    if (!isNaN(parseInt(to))) {
      const ctrl = animate(0, parseInt(to), {
        duration: 1.6, ease: 'easeOut',
        onUpdate: v => { if (ref.current) ref.current.textContent = Math.round(v) + suffix; }
      });
      return () => ctrl.stop();
    }
  }, [inView, to, suffix]);
  return <span ref={ref}>{isNaN(parseInt(to)) ? to : '0' + suffix}</span>;
}

/* ─── Theme Toggle Icon ───────────────────────────────────── */
function ThemeToggle({ isDark, onToggle }) {
  return (
    <motion.button
      onClick={onToggle}
      whileTap={{ scale: 0.85, rotate: 15 }}
      whileHover={{ scale: 1.1 }}
      className="flex items-center justify-center w-8 h-8 transition-all duration-200 cursor-pointer"
      style={{ border: '1px solid var(--b10)', color: 'var(--txt-50)', borderRadius: 0 }}
      aria-label="Toggle theme"
    >
      {isDark ? (
        /* Sun */
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      ) : (
        /* Moon */
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      )}
    </motion.button>
  );
}

/* ─── SVG Icons ───────────────────────────────────────────── */
const icons = {
  React: <svg viewBox="0 0 40 40"><ellipse cx="20" cy="20" rx="4" ry="16" stroke="#61DAFB" strokeWidth="1.8" fill="none"/><ellipse cx="20" cy="20" rx="4" ry="16" stroke="#61DAFB" strokeWidth="1.8" fill="none" transform="rotate(60 20 20)"/><ellipse cx="20" cy="20" rx="4" ry="16" stroke="#61DAFB" strokeWidth="1.8" fill="none" transform="rotate(120 20 20)"/><circle cx="20" cy="20" r="2.5" fill="#61DAFB"/></svg>,
  'Vue.js': <svg viewBox="0 0 40 40"><path d="M20 33L6 9h6l8 14 8-14h6L20 33z" fill="#42b883"/><path d="M20 22L12 9h4.5L20 15l3.5-6H28L20 22z" fill="#35495e"/></svg>,
  JavaScript: <svg viewBox="0 0 40 40"><rect x="4" y="4" width="32" height="32" rx="2" fill="#F7DF1E"/><path d="M22 27.5c0 2.2 1.2 3 2.6 3 1.5 0 2.4-.9 2.4-3V18h-2.8v9.2c0 .6-.2.8-.7.8s-.7-.3-.8-.7L22 27.5z" fill="#1a1a1a"/><path d="M14.5 27.3c.3.8.8 1.5 2 1.5 1 0 1.7-.5 1.7-1.3 0-.9-.5-1.3-1.7-1.7l-.6-.3c-1.7-.7-2.8-1.7-2.8-3.6 0-1.8 1.4-3.2 3.6-3.2 1.6 0 2.7.6 3.5 2l-2 1.2c-.4-.7-.7-1-1.6-1-.7 0-1.2.4-1.2 1.1 0 .7.4 1 1.5 1.4l.6.3c2 .8 3.1 1.8 3.1 3.7 0 2.2-1.7 3.4-4 3.4-2.3 0-3.8-1.1-4.5-2.6l2.4-1z" fill="#1a1a1a"/></svg>,
  TypeScript: <svg viewBox="0 0 40 40"><rect x="4" y="4" width="32" height="32" rx="2" fill="#3178C6"/><path d="M22 18h-7.5v-2.5h17V18h-6.5v13H22V18z" fill="white"/><path d="M24.5 26.5c.3.8.8 1.5 2 1.5 1 0 1.7-.5 1.7-1.3 0-.9-.5-1.3-1.7-1.7l-.6-.3c-1.7-.7-2.8-1.7-2.8-3.6 0-1.8 1.4-3.2 3.6-3.2 1.6 0 2.7.6 3.5 2l-2 1.2c-.4-.7-.7-1-1.6-1-.7 0-1.2.4-1.2 1.1 0 .7.4 1 1.5 1.4l.6.3c2 .8 3.1 1.8 3.1 3.7 0 2.2-1.7 3.4-4 3.4-2.3 0-3.8-1.1-4.5-2.6l2.4-1z" fill="white"/></svg>,
  'Node.js': <svg viewBox="0 0 40 40"><path d="M20 4L35 12.5v15L20 36 5 27.5v-15L20 4z" stroke="#8CC84B" strokeWidth="1.5" fill="rgba(140,200,75,0.08)"/><text x="20" y="24" textAnchor="middle" fill="#8CC84B" fontSize="9" fontFamily="monospace" fontWeight="bold">NODE</text></svg>,
  Laravel: <svg viewBox="0 0 40 40"><path d="M34 10L22 16v13l12-6V10z" fill="#FF2D20" opacity="0.9"/><path d="M22 16L10 10v13l12 6V16z" fill="#FF2D20" opacity="0.6"/><path d="M10 10l12-6 12 6-12 6-12-6z" fill="#FF2D20"/></svg>,
  PHP: <svg viewBox="0 0 40 40"><ellipse cx="20" cy="20" rx="16" ry="9" stroke="#777BB4" strokeWidth="1.8" fill="rgba(119,123,180,0.08)"/><text x="20" y="24" textAnchor="middle" fill="#777BB4" fontSize="10" fontFamily="monospace" fontWeight="bold">PHP</text></svg>,
  'Next.js': <svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="15" fill="#111" stroke="#555" strokeWidth="1"/><path d="M14 28V12l14 17h-3.5L14 17.5V28H14z" fill="white"/><path d="M26 12h3.5v8" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/></svg>,
  MySQL: <svg viewBox="0 0 40 40"><ellipse cx="20" cy="11" rx="12" ry="4.5" stroke="#4479A1" strokeWidth="1.5" fill="rgba(68,121,161,0.1)"/><path d="M8 11v6c0 2.5 5.4 4.5 12 4.5S32 19.5 32 17v-6" stroke="#4479A1" strokeWidth="1.5" fill="none"/><path d="M8 17v6c0 2.5 5.4 4.5 12 4.5S32 25.5 32 23v-6" stroke="#4479A1" strokeWidth="1.5" fill="none"/></svg>,
  MongoDB: <svg viewBox="0 0 40 40"><path d="M20 5C20 5 10 16 10 24a10 10 0 0020 0C30 16 20 5 20 5z" fill="#47A248" opacity="0.7"/><line x1="20" y1="13" x2="20" y2="36" stroke="#47A248" strokeWidth="2"/></svg>,
  GraphQL: <svg viewBox="0 0 40 40"><circle cx="20" cy="6" r="3" fill="#E10098"/><circle cx="32" cy="13" r="3" fill="#E10098"/><circle cx="32" cy="27" r="3" fill="#E10098"/><circle cx="20" cy="34" r="3" fill="#E10098"/><circle cx="8" cy="27" r="3" fill="#E10098"/><circle cx="8" cy="13" r="3" fill="#E10098"/><polygon points="20,6 32,13 32,27 20,34 8,27 8,13" stroke="#E10098" strokeWidth="1.2" fill="none"/></svg>,
  Tailwind: <svg viewBox="0 0 40 40"><path d="M20 10c-4 0-6.5 2-7.5 6 1.5-2 3.3-2.75 5.3-2.25 1.15.29 1.97 1.13 2.87 2.05C22.1 17.4 23.8 19 27.5 19c4 0 6.5-2 7.5-6-1.5 2-3.3 2.75-5.3 2.25-1.15-.29-1.97-1.13-2.87-2.05C25.4 11.6 23.7 10 20 10z" fill="#06B6D4"/><path d="M12.5 21c-4 0-6.5 2-7.5 6 1.5-2 3.3-2.75 5.3-2.25 1.15.29 1.97 1.13 2.87 2.05C14.6 28.4 16.3 30 20 30c4 0 6.5-2 7.5-6-1.5 2-3.3 2.75-5.3 2.25-1.15-.29-1.97-1.13-2.87-2.05C17.9 22.6 16.2 21 12.5 21z" fill="#06B6D4"/></svg>,
  Figma: <svg viewBox="0 0 40 40"><rect x="13" y="5" width="7" height="10" rx="3.5" fill="#F24E1E"/><rect x="20" y="5" width="7" height="10" rx="3.5" fill="#FF7262"/><rect x="13" y="15" width="7" height="10" rx="3.5" fill="#A259FF"/><rect x="13" y="25" width="7" height="10" rx="3.5" fill="#0ACF83"/><circle cx="23.5" cy="20" r="3.5" fill="#1ABCFE"/></svg>,
  Git: <svg viewBox="0 0 40 40"><path d="M36 19.3L20.7 4a2.4 2.4 0 00-3.4 0l-3 3 3.8 3.8a2.8 2.8 0 013.5 3.5l3.7 3.7a2.8 2.8 0 11-1.7 1.7l-3.5-3.5v9a2.8 2.8 0 11-2.1 0v-9.4a2.8 2.8 0 01-1.5-3.7l-3.7-3.7-9.8 9.8a2.4 2.4 0 000 3.4L18.3 36a2.4 2.4 0 003.4 0L36 21.7a2.4 2.4 0 000-3.4z" fill="#F05032"/></svg>,
};

const skills = Object.keys(icons);
const skillBadges = [...skills, ...skills];

/* ─── Projects ────────────────────────────────────────────── */
const projects = [
  {
    name: 'HEMMINGS',
    desc: 'Contact Page · Membership · Checkout Flows · Bidding System',
    url: 'https://hemmings.com',
    thumb: <img src={HemmingsLogo} alt="Hemmings" className="w-full h-full object-cover scale-125" />,
    bg: '#2f5f56',
  },
  {
    name: 'DIGIHEART',
    desc: 'Full-stack memorial app with protected profiles & media galleries',
    url: 'https://digiheart.vercel.app/',
    thumb: <img src={Digiheart} alt="Digiheart" className="w-full h-full object-cover" style={{ background: '#e4d7d7' }} />,
    bg: '#e4d7d7',
  },
  {
    name: 'TRUCKSTAR',
    desc: 'Real-time food trucks near you, powered by Google Maps',
    url: 'https://erictruckstarfoodfinder.vercel.app/',
    thumb: (
      <div className="w-full h-full flex items-center justify-center" style={{ background: '#111827' }}>
        <span className="font-gumela text-4xl font-bold" style={{ background: 'linear-gradient(to right, #fb923c, #fde047)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>TruckStar</span>
      </div>
    ),
    bg: '#111827',
  },
  {
    name: 'VIBELIST',
    desc: 'Claude AI · Last.fm · Mood Detection',
    url: 'https://vibelist-psi.vercel.app/',
    thumb: <img src={VibeList} alt="VibeList" className="w-full h-full object-cover" />,
    bg: '#252464',
  },
  {
    name: 'TRADEROOTS',
    desc: 'Interactive commodity explorer for learning global markets',
    url: 'https://traderoots.vercel.app',
    thumb: (
      <div className="w-full h-full flex items-center justify-center" style={{ background: '#0f1117' }}>
        <svg width="160" height="50" viewBox="0 0 160 50">
          <defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#FFD700"/><stop offset="100%" stopColor="#C9A227"/></linearGradient></defs>
          <circle cx="16" cy="17" r="5" fill="url(#g)"/>
          <path d="M16 22 L10 34 M16 22 L16 36 M16 22 L22 34" stroke="#FFD700" strokeWidth="1.8" strokeLinecap="round"/>
          <path d="M16 11 L21 7 L26 10 L33 4" fill="none" stroke="url(#g)" strokeWidth="2" strokeLinecap="round"/>
          <text x="42" y="32" fontFamily="Inter,sans-serif" fontSize="20" fontWeight="600" fill="#FFF">Trade<tspan fill="#FFD700">Roots</tspan></text>
        </svg>
      </div>
    ),
    bg: '#0f1117',
  },
];

/* ─── Navbar ──────────────────────────────────────────────── */
function Navbar({ isDark, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const nav = ['ABOUT', 'SKILLS', 'WORK', 'CONTACT'];
  const ids = { ABOUT: 'about', SKILLS: 'skills', WORK: 'work', CONTACT: 'contact' };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-10 h-16"
        style={{ background: 'var(--nav-bg)', backdropFilter: 'blur(16px)', borderBottom: '1px solid var(--b5)' }}
      >
        <div className="flex flex-col items-center leading-none">
          <span className="text-gold text-xs">♛</span>
          <span className="font-bebas text-xl tracking-widest" style={{ color: 'var(--txt)' }}>EA</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {nav.map((item, i) => (
            <motion.button
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.07 }}
              onClick={() => scrollTo(ids[item])}
              className="font-barlow font-bold tracking-widest text-sm uppercase transition-colors duration-200 hover:text-gold"
              style={{ color: 'var(--txt-60)' }}
            >
              {item}
            </motion.button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          <motion.a
            href="mailto:Easkew81@yahoo.com"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="hidden sm:block btn-gold text-sm py-2 px-5"
          >
            HIRE ME
          </motion.a>
          <button
            onClick={() => setOpen(v => !v)}
            className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer"
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} style={{ background: 'var(--txt)' }} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${open ? 'opacity-0' : ''}`} style={{ background: 'var(--txt)' }} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} style={{ background: 'var(--txt)' }} />
          </button>
        </div>
      </motion.nav>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10"
          style={{ background: 'var(--overlay-bg)' }}
        >
          {nav.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(ids[item])}
              className="font-bebas text-6xl hover:text-gold transition-colors"
              style={{ color: 'var(--txt)' }}
            >
              {item}
            </button>
          ))}
          <a href="mailto:Easkew81@yahoo.com" className="btn-gold mt-4">HIRE ME</a>
        </motion.div>
      )}
    </>
  );
}

/* ─── Hero ────────────────────────────────────────────────── */
function Hero() {
  const roles = ['FULL STACK ENGINEER', 'REACT / VUE DEVELOPER', 'LARAVEL ARCHITECT', 'EX-AUDIO ENGINEER, NYC'];
  const typed = useTypewriter(roles);

  return (
    <section className="relative min-h-screen flex items-center grid-bg pt-16 overflow-hidden" id="hero">
      <div className="absolute top-1/4 right-10 w-80 h-80 rounded-full animate-float pointer-events-none" style={{ background: 'radial-gradient(circle, var(--orb1) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      <div className="absolute bottom-20 left-0 w-64 h-64 rounded-full animate-float-s pointer-events-none" style={{ background: 'radial-gradient(circle, var(--orb2) 0%, transparent 70%)', filter: 'blur(50px)' }} />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 py-16 flex flex-col md:flex-row items-center gap-12 md:gap-0">
        <div className="flex-1 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="text-gold text-lg">♛</span>
            <span className="font-barlow font-bold tracking-[0.3em] text-xs uppercase" style={{ color: 'var(--txt-40)' }}>Currently Available</span>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="font-bebas leading-none" style={{ fontSize: 'clamp(5rem, 15vw, 12rem)', color: 'var(--txt)' }}>
              ERIC
            </h1>
            <h1
              className="font-bebas leading-none"
              style={{
                fontSize: 'clamp(5rem, 15vw, 12rem)',
                WebkitTextStroke: '2px #F5C518',
                color: 'transparent',
                textShadow: '0 0 60px rgba(245,197,24,0.3)',
              }}
            >
              ASKEW
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 h-8 flex items-center"
          >
            <span className="font-barlow font-bold tracking-widest text-xl text-gold">
              {typed}<span className="animate-pulse">_</span>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-dm text-base mt-4 max-w-md leading-relaxed"
            style={{ color: 'var(--txt-50)' }}
          >
            I build things for the web. Before that, I was behind the console in NYC studios recording sessions with major artists. That ear for detail never left — it just moved to the DOM.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 mt-8"
          >
            <button onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })} className="btn-gold">
              SEE THE WORK
            </button>
            <a href={CV} download className="btn-outline">
              DOWNLOAD CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center gap-4 mt-6"
          >
            <a href="https://github.com/Moonwalker5823" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" style={{ color: 'var(--txt-40)' }}>
              <Github size="1.5rem" />
            </a>
            <a href="https://www.linkedin.com/in/easkew51/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" style={{ color: 'var(--txt-40)' }}>
              <Linkedin size="1.5rem" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex-shrink-0 w-72 md:w-96"
        >
          <div className="relative">
            <div className="absolute -top-3 -left-3 w-full h-full" style={{ border: '1px solid rgba(245,197,24,0.3)' }} />
            <div className="absolute -bottom-3 -right-3 w-full h-full" style={{ border: '1px solid rgba(245,197,24,0.3)' }} />
            <img
              src={Me}
              alt="Eric Askew"
              className="w-full object-cover photo-glow relative z-10"
              style={{ aspectRatio: '3/4', objectPosition: 'center top' }}
            />
            <div className="absolute -top-6 right-4 text-gold text-4xl z-20 opacity-60">♛</div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-y">
        <span className="font-barlow text-xs tracking-widest uppercase" style={{ color: 'var(--txt-30)' }}>Scroll</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          <path d="M8 4v16M2 14l6 6 6-6" stroke="var(--txt-30)" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
    </section>
  );
}

/* ─── Stats ───────────────────────────────────────────────── */
function Stats() {
  const stats = [
    { value: '4', suffix: '+', label: 'YEARS PRODUCTION EXPERIENCE' },
    { value: '20', suffix: '+', label: 'PROJECTS DELIVERED' },
    { value: 'FULL STACK', suffix: '', label: 'FRONTEND + BACKEND' },
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden"
      style={{ borderTop: '1px solid var(--stats-border)', borderBottom: '1px solid var(--stats-border)', background: 'var(--stats-bg)' }}>
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-around gap-10 md:gap-0">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.7, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ type: 'spring', stiffness: 200, damping: 18, delay: i * 0.18 }}
              className="text-center relative"
            >
              <motion.div
                className="font-bebas text-7xl md:text-8xl text-gold leading-none"
                whileInView={{ textShadow: ['0 0 0px rgba(245,197,24,0)', '0 0 40px rgba(245,197,24,0.6)', '0 0 20px rgba(245,197,24,0.3)'] }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.18 + 0.4, duration: 1 }}
              >
                <CountUp to={s.value} suffix={s.suffix} />
              </motion.div>
              <div className="font-barlow font-bold tracking-widest text-sm mt-2 uppercase" style={{ color: 'var(--txt-50)' }}>{s.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="font-dm text-center text-sm mt-12 max-w-xl mx-auto leading-relaxed italic"
          style={{ color: 'var(--txt-35)' }}
        >
          From NYC recording studios to production codebases — every environment demands the same thing: get it right.
        </motion.p>
      </div>
    </section>
  );
}

/* ─── Skills ──────────────────────────────────────────────── */
function Skills() {
  const row1 = skillBadges;
  const row2 = [...skillBadges].reverse();

  return (
    <section id="skills" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-14 overflow-hidden">
          <motion.h2
            className="section-title"
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="crown">♛ </span>WHAT I RUN WITH
          </motion.h2>
          <motion.p
            className="font-barlow tracking-widest text-sm uppercase mt-2"
            style={{ color: 'var(--txt-40)' }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            The stack, the tools, the craft
          </motion.p>
        </div>

        <div className="space-y-3 mb-16">
          <div className="marquee-wrap">
            <div className="marquee-track-l flex gap-3">
              {[...row1, ...row1].map((s, i) => (
                <span key={i}
                  className="flex-shrink-0 font-barlow font-bold tracking-widest text-sm uppercase px-5 py-2 transition-all cursor-default whitespace-nowrap hover:text-gold"
                  style={{ background: 'var(--badge)', border: '1px solid var(--b10)', color: 'var(--txt-60)' }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="marquee-wrap">
            <div className="marquee-track-r flex gap-3">
              {[...row2, ...row2].map((s, i) => (
                <span key={i}
                  className="flex-shrink-0 font-barlow font-bold tracking-widest text-sm uppercase px-5 py-2 transition-all cursor-default whitespace-nowrap hover:text-gold"
                  style={{ background: 'var(--badge)', border: '1px solid var(--b10)', color: 'var(--txt-60)' }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill}
              variants={{
                hidden: { opacity: 0, scale: 0.6, rotate: -8 },
                visible: { opacity: 1, scale: 1, rotate: 0, transition: { type: 'spring', stiffness: 260, damping: 20 } }
              }}
              whileHover={{ y: -6, scale: 1.08, rotate: 2, transition: { type: 'spring', stiffness: 400, damping: 15 } }}
              className="skill-card flex flex-col items-center gap-2.5 p-3 transition-colors duration-200 cursor-default"
              style={{ background: 'var(--card)', border: '1px solid var(--b5)' }}
            >
              <div className="w-10 h-10 flex-shrink-0 rounded-md overflow-hidden flex items-center justify-center p-1"
                style={{ background: 'var(--card-icon)' }}>
                {icons[skill]}
              </div>
              <span className="font-dm text-xs text-center leading-tight" style={{ color: 'var(--txt-50)' }}>{skill}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Projects ────────────────────────────────────────────── */
function Projects() {
  return (
    <section id="work" className="py-24 overflow-hidden" style={{ background: 'var(--bg-alt)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-14 overflow-hidden">
          <motion.h2
            className="section-title"
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="crown">♛ </span>THINGS I'VE BUILT
          </motion.h2>
          <motion.p
            className="font-barlow tracking-widest text-sm uppercase mt-2"
            style={{ color: 'var(--txt-40)' }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Production work, shipped
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {projects.map((p) => (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.96 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 180, damping: 22 } }
              }}
              whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 18 } }}
              className="project-card relative block overflow-hidden group transition-all duration-300 cursor-pointer"
              style={{ background: 'var(--card)', border: '1px solid var(--b5)' }}
            >
              <div className="w-full aspect-video overflow-hidden" style={{ background: p.bg }}>
                {p.thumb}
              </div>
              <div className="overlay absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(8,8,8,0.85)', backdropFilter: 'blur(4px)' }}>
                <span className="font-barlow font-bold tracking-widest text-gold text-lg uppercase" style={{ border: '1px solid rgba(245,197,24,0.5)', padding: '0.75rem 1.5rem' }}>
                  OPEN PROJECT →
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bebas text-2xl tracking-wide" style={{ color: 'var(--txt)' }}>{p.name}</h3>
                <p className="font-dm text-sm mt-1 leading-relaxed" style={{ color: 'var(--txt-40)' }}>{p.desc}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Testimonials ────────────────────────────────────────── */
function Testimonials() {
  const testimonials = [
    {
      name: 'Konstantin Hamilton',
      title: 'Software Engineer',
      img: KonstantinImg,
      quote: "Eric's grasp of algorithmic concepts and design patterns make him a privilege to work with. He is a talented, driven, and empathetic engineer with deep expertise, particularly in node and react.",
    },
    {
      name: 'Brian Grosso',
      title: 'Sr. Engineer, Fin Tech',
      img: BrianImg,
      quote: "Eric is the most perseverant engineer I know, having maintained and improved developer tools we built together for several years while also continuously honing his skills. He has eclectic interests and a diversity of experiences which helped him bring creativity and personality to the user experience we created, and also made the work fun for the entire team. Can't wait to see where he goes next!",
    },
  ];

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="mb-14 overflow-hidden">
          <motion.h2
            className="section-title"
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="crown">♛ </span>THE WORD
          </motion.h2>
          <motion.p
            className="font-barlow tracking-widest text-sm uppercase mt-2"
            style={{ color: 'var(--txt-40)' }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            From people who've seen the work
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, x: i === 0 ? -60 : 60, rotate: i === 0 ? -3 : 3 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 120, damping: 18, delay: i * 0.15 }}
              className="relative p-7 flex flex-col gap-5"
              style={{ background: 'var(--glass-bg)', backdropFilter: 'blur(8px)', border: '1px solid var(--glass-border)' }}
            >
              <div className="font-bebas text-8xl text-gold leading-none opacity-40 absolute top-2 left-5 select-none">"</div>
              <p className="font-dm italic text-sm leading-relaxed relative z-10 mt-8" style={{ color: 'var(--txt-60)' }}>{t.quote}</p>
              <div className="flex items-center gap-3 mt-2">
                <img src={t.img} alt={t.name} className="w-11 h-11 rounded-full object-cover" style={{ border: '1px solid var(--b10)' }} />
                <div>
                  <div className="font-barlow font-bold tracking-wide text-sm" style={{ color: 'var(--txt)' }}>{t.name}</div>
                  <div className="font-dm text-xs" style={{ color: 'var(--txt-35)' }}>{t.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ─────────────────────────────────────────────── */
function Contact() {
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    const name = e.target.elements.name.value.trim();
    const email = e.target.elements.email.value.trim();
    const message = e.target.elements.message.value.trim();
    if (!name || !email || !message) { e.preventDefault(); setError(true); return; }
    setError(false); setDone(true);
  };

  return (
    <section id="contact" className="py-24 overflow-hidden" style={{ background: 'var(--bg-alt)' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="mb-14 overflow-hidden">
          <motion.h2
            className="section-title"
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="crown">♛ </span>LET'S BUILD SOMETHING
          </motion.h2>
          <motion.p
            className="font-barlow tracking-widest text-sm uppercase mt-2"
            style={{ color: 'var(--txt-40)' }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Got a project, an idea, or just want to chop it up? I'm around.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 150, damping: 20 }}
            className="flex-1 w-full"
          >
            <motion.form
              action="https://formsubmit.co/easkew81@yahoo.com"
              method="POST"
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
            >
              {[
                <input key="name" type="text" name="name" placeholder="NAME" className="input-field font-barlow font-bold tracking-widest text-sm uppercase" />,
                <input key="email" type="email" name="email" placeholder="EMAIL" className="input-field font-barlow font-bold tracking-widest text-sm uppercase" />,
                <textarea key="msg" name="message" rows={5} placeholder="MESSAGE" className="input-field font-dm resize-none" />,
              ].map((field, i) => (
                <motion.div key={i} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4 } } }}>
                  {field}
                </motion.div>
              ))}
              <input type="hidden" name="_autoresponse" value="Got your message — Eric will be in touch." />
              <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}>
                <button type="submit" className="btn-gold self-start text-sm py-3 px-8 mt-2">SEND IT</button>
              </motion.div>
              {error && <p className="font-dm text-red-400 text-sm">Fill everything in first 👀</p>}
              {done && <p className="font-dm text-gold text-sm">Sent. I'll be in touch.</p>}
            </motion.form>
            <p className="font-dm text-sm mt-6" style={{ color: 'var(--txt-25)' }}>
              Or just email directly: <a href="mailto:Easkew81@yahoo.com" className="text-gold hover:underline">Easkew81@yahoo.com</a>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 16, delay: 0.2 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex gap-4">
              <div className="flex flex-col items-center gap-2">
                <img src={OnyxImg} alt="Onyx" className="w-28 h-28 rounded-full object-cover" style={{ border: '2px solid rgba(245,197,24,0.3)', objectPosition: 'center top' }} />
                <span className="font-barlow font-bold text-xs tracking-widest uppercase" style={{ color: 'var(--txt-40)' }}>Onyx</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img src={CodyImg} alt="Cody" className="w-28 h-28 rounded-full object-cover" style={{ border: '2px solid rgba(245,197,24,0.3)', objectPosition: 'center top' }} />
                <span className="font-barlow font-bold text-xs tracking-widest uppercase" style={{ color: 'var(--txt-40)' }}>Cody</span>
              </div>
            </div>
            <p className="font-dm italic text-sm text-center" style={{ color: 'var(--txt-25)' }}>🐾 My QA team. They find all the bugs.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ──────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="relative h-36 overflow-hidden flex items-center justify-center">
      <img src={WaveImg} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ filter: 'brightness(0.12) saturate(0.4)' }} />
      <div className="relative z-10 flex flex-col items-center gap-3">
        <p className="font-bebas text-3xl text-white tracking-widest">ERIC ASKEW © 2026</p>
        <p className="font-dm italic text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>Built in the same spirit as the music.</p>
        <div className="flex gap-5 mt-1">
          <a href="https://github.com/Moonwalker5823" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.4)' }}>
            <Github size="1.3rem" />
          </a>
          <a href="https://www.linkedin.com/in/easkew51/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.4)' }}>
            <Linkedin size="1.3rem" />
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ─── App ─────────────────────────────────────────────────── */
export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('light-mode', !isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <ThemeCtx.Provider value={isDark}>
      <div className="font-dm min-h-screen" style={{ background: 'var(--bg)', color: 'var(--txt)' }}>
        <Navbar isDark={isDark} onToggleTheme={() => setIsDark(v => !v)} />
        <Hero />
        <Stats />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </ThemeCtx.Provider>
  );
}
