import { useEffect, useState } from 'react'
import { ArrowUpRight, CalendarDays, MapPin } from 'lucide-react'
import hero from '../assets/hero.webp'
import { useCountdown } from '../lib/hooks'
import { Container, Glitch, HudBrackets } from './ui'

const FEST_START = new Date('2026-12-18T09:00:00+05:30')
// Image is 16:9; width covers the viewport by height or width, whichever is larger.
const W = 'max(100%, 177.78svh)'

// Eye position inside the source image (fractions of width/height).
const EYE = { x: 61.7, y: 28.9 }

function Countdown() {
  const t = useCountdown(FEST_START)
  const units = [
    ['Days', t.days],
    ['Hrs', t.hours],
    ['Min', t.minutes],
    ['Sec', t.seconds],
  ] as const
  return (
    <div className="flex flex-col gap-3">
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">
        <span className="mr-2 inline-block h-1.5 w-1.5 animate-[blink_1s_steps(1)_infinite] bg-ember align-middle" />
        T-minus to system online
      </span>
      <div className="flex items-stretch gap-2 sm:gap-3" role="timer" aria-label="Countdown to Techfest 2026">
        {units.map(([label, v], i) => (
          <div key={label} className="flex items-center gap-2 sm:gap-3">
            <div className="glass cut-sm relative flex w-[68px] flex-col items-center py-3 sm:w-[84px]">
              <HudBrackets size={8} color="border-cyan/50" />
              <span className="font-display text-2xl font-bold tabular-nums text-white [text-shadow:0_0_18px_rgb(0_229_255/0.6)] sm:text-3xl">
                {String(v).padStart(2, '0')}
              </span>
              <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.3em] text-cyan">{label}</span>
            </div>
            {i < 3 && <span className="hidden font-display text-xl text-cyan/50 sm:block">:</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

function DataReadout() {
  const [v, setV] = useState({ sync: 98.2, bio: 76, net: 1204 })
  useEffect(() => {
    const id = setInterval(
      () =>
        setV({
          sync: +(97 + Math.random() * 2.9).toFixed(1),
          bio: Math.round(70 + Math.random() * 25),
          net: Math.round(1150 + Math.random() * 120),
        }),
      1400,
    )
    return () => clearInterval(id)
  }, [])
  const rows = [
    ['Neural sync', `${v.sync}%`, v.sync],
    ['Bio-mech load', `${v.bio}%`, v.bio],
    ['Mesh nodes', v.net.toLocaleString('en-IN'), (v.net / 1300) * 100],
  ] as const
  return (
    <div className="glass cut relative w-64 p-5">
      <HudBrackets size={10} />
      <div className="mb-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em]">
        <span className="text-cyan">Unit // TF-26</span>
        <span className="flex items-center gap-1.5 text-acid">
          <span className="h-1.5 w-1.5 rounded-full bg-acid shadow-[0_0_8px_var(--color-acid)]" /> Live
        </span>
      </div>
      <div className="flex flex-col gap-3.5">
        {rows.map(([k, label, pct]) => (
          <div key={k}>
            <div className="mb-1.5 flex justify-between font-mono text-[11px] text-mist">
              <span>{k}</span>
              <span className="tabular-nums text-white">{label}</span>
            </div>
            <div className="h-[3px] bg-white/10">
              <div
                className="h-full bg-gradient-to-r from-cyan to-violet transition-[width] duration-1000"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-void">
      {/* Visual layer with parallax */}
      <div
        aria-hidden
        className="absolute top-1/2 -z-10 aspect-video will-change-transform"
        style={{
          width: W,
          left: `min(0px, max(calc(100% - ${W}), calc(60% - 0.617 * ${W})))`,
          transform: 'translateY(calc(-50% + var(--sy, 0) * 0.3px))',
        }}
      >
        <img src={hero} alt="" className="h-full w-full object-cover" fetchPriority="high" />
        {/* Circuit traces radiating from the eye */}
        <svg viewBox="0 0 1536 864" className="absolute inset-0 h-full w-full" fill="none">
          {[
            'M948 250 H1080 L1130 200 H1536',
            'M948 250 L1010 312 H1200 L1260 372 H1536',
            'M948 250 L1040 158 V40 H1300',
            'M948 250 H700 L640 190 H0',
            'M948 250 L900 400 V620 L960 680 H1180',
          ].map((d, i) => (
            <g key={i}>
              <path d={d} stroke="#00E5FF" strokeOpacity="0.18" strokeWidth="1.2" />
              <path
                d={d}
                stroke={i % 2 ? '#B026FF' : '#00E5FF'}
                strokeWidth="2"
                strokeDasharray="40 160"
                style={{ animation: `flow ${3 + i * 0.7}s linear infinite` }}
                className="drop-shadow-[0_0_6px_#00E5FF]"
              />
            </g>
          ))}
        </svg>
        {/* Glowing eye + reticle */}
        <div className="absolute" style={{ left: `${EYE.x}%`, top: `${EYE.y}%` }}>
          <span
            className="absolute left-0 top-0 h-16 w-16 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgb(120 245 255 / 0.95), rgb(0 229 255 / 0.4) 35%, transparent 70%)',
              animation: 'eye-pulse 2.6s ease-in-out infinite',
              mixBlendMode: 'screen',
            }}
          />
          <div className="absolute left-0 top-0 hidden -translate-x-1/2 -translate-y-1/2 md:block">
            <span className="block h-40 w-40 animate-[hud-spin_14s_linear_infinite] rounded-full border border-dashed border-cyan/40" />
            <span className="absolute inset-5 animate-[hud-spin_9s_linear_infinite_reverse] rounded-full border-2 border-transparent border-l-cyan/70 border-t-cyan/70" />
            <span className="absolute left-full top-1/2 ml-3 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.25em] text-cyan">
              Optic // Lock <span className="text-acid">●</span>
            </span>
          </div>
        </div>
      </div>

      {/* Readability overlays */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-void/55 lg:bg-transparent" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-void via-void/70 to-transparent" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-void via-void/60 to-transparent" />
      <div aria-hidden className="grid-bg absolute inset-0 -z-10 opacity-40 [mask-image:linear-gradient(to_right,black,transparent_60%)]" />

      <Container className="flex flex-1 flex-col justify-center pb-28 pt-28 md:pt-32">
        <div className="max-w-[760px]">
          <div
            className="glass cut-sm relative inline-flex flex-wrap items-center gap-x-4 gap-y-1.5 px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-white/90"
            style={{ animation: 'none' }}
          >
            <HudBrackets size={7} />
            <span className="flex items-center gap-2">
              <CalendarDays className="h-3.5 w-3.5 text-cyan" /> Dec 18 — 20, 2026
            </span>
            <span className="hidden h-3 w-px bg-cyan/40 sm:block" />
            <span className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-cyan" /> IIT Bombay, Powai
            </span>
          </div>

          <h1 className="mt-7 font-display font-black uppercase leading-[0.92]">
            <span className="sr-only">Techfest 2026 · IIT Bombay</span>
            <span aria-hidden className="block text-[clamp(2.75rem,9vw,6.75rem)] tracking-[0.04em]">
              <Glitch auto text="TECHFEST" className="metal-text" />
            </span>
            <span aria-hidden className="mt-2 flex flex-wrap items-baseline gap-x-5 gap-y-2">
              <span className="stroke-text text-[clamp(2.75rem,9vw,6.75rem)] tracking-[0.04em]">2026</span>
              <span className="font-display text-[clamp(0.85rem,1.8vw,1.35rem)] font-bold tracking-[0.42em] text-white/90">
                <span className="text-cyan">·</span> IIT BOMBAY
              </span>
            </span>
          </h1>

          <p className="mt-7 font-display text-[clamp(1.1rem,2.2vw,1.6rem)] font-semibold uppercase tracking-[0.14em] text-white">
            Where Human <span className="text-cyan [text-shadow:0_0_20px_rgb(0_229_255/0.6)]">Meets</span> Machine.
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-mist md:text-lg">
            Asia’s largest science & technology festival returns — three days of robotics, AI, lectures and exhibitions
            built around the fusion of mind and metal.
          </p>

          <div className="mt-9 flex flex-wrap gap-3 sm:gap-4">
            <a href="#register" className="btn btn-primary cut-sm h-14 px-7 text-xs sm:px-9">
              Register Now <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#events" className="btn btn-outline cut-sm h-14 px-7 text-xs sm:px-9">
              Explore Events
            </a>
          </div>

          <div className="mt-11">
            <Countdown />
          </div>
        </div>
      </Container>

      <div className="absolute bottom-28 right-8 hidden xl:block">
        <DataReadout />
      </div>

      {/* Scroll indicator: scanning line */}
      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-mist">Scroll</span>
        <span className="relative h-14 w-px overflow-hidden bg-cyan/20">
          <span className="absolute inset-x-0 top-0 h-1/3 animate-[scan-down_1.8s_ease-in-out_infinite] bg-cyan shadow-[0_0_10px_var(--color-cyan)]" />
        </span>
      </a>
    </section>
  )
}

export function Ticker() {
  const items = ['Robotics', 'Artificial Intelligence', 'Hackathons', 'Neural Interfaces', 'Drone Racing', 'Bionics', 'Cyber Security', 'AR / VR']
  const row = [...items, ...items]
  return (
    <div className="relative overflow-hidden border-y border-cyan/15 bg-deep py-4" aria-hidden>
      <div className="flex w-max animate-[marquee_40s_linear_infinite] gap-10">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-sm font-bold uppercase tracking-[0.3em] text-white/70">
            {t}
            <span className="h-1.5 w-1.5 rotate-45 bg-cyan shadow-[0_0_8px_var(--color-cyan)]" />
          </span>
        ))}
      </div>
    </div>
  )
}
