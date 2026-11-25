import type { ReactNode } from 'react'
import { ArrowUpRight, Glasses, Hand, Rocket } from 'lucide-react'
import expo from '../assets/expo.webp'
import vr from '../assets/vr.webp'
import { Container, Glitch, HudBrackets, MonoLabel, Reveal, SectionHeader } from './ui'

function DroneSwarm() {
  // Deterministic constellation forming a stylised eye
  const pts = Array.from({ length: 46 }, (_, i) => {
    const a = (i / 46) * Math.PI * 2
    const ring = i % 2 ? 0.55 : 1
    return { x: 50 + Math.cos(a) * 38 * ring, y: 50 + Math.sin(a) * 20 * ring, d: (i * 137) % 3000 }
  })
  return (
    <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      {pts.map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r="0.9"
          fill={i % 3 ? '#00E5FF' : '#B026FF'}
          style={{ animation: `twinkle 2.4s ease-in-out ${p.d}ms infinite`, filter: 'drop-shadow(0 0 1.5px #00E5FF)' }}
        />
      ))}
      <circle cx="50" cy="50" r="6" fill="#00E5FF" style={{ animation: 'twinkle 2s ease-in-out infinite', filter: 'drop-shadow(0 0 4px #00E5FF)' }} />
    </svg>
  )
}

function Tile({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <Reveal delay={delay} className={className}>
      <div className="cut group relative h-full min-h-[240px] overflow-hidden bg-panel ring-1 ring-inset ring-white/10 transition-shadow duration-300 hover:shadow-[0_0_40px_-10px_rgb(0_229_255/0.6)]">
        {children}
        <HudBrackets size={14} className="inset-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
    </Reveal>
  )
}

export function Exhibitions() {
  return (
    <section id="exhibitions" className="relative py-24 md:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            index="04"
            label="Exhibitions & Highlights"
            title="Witness the"
            accent="Future"
            description="Walk among humanoids, step inside virtual worlds and watch the night sky come alive."
          />
        </div>

        <div className="mt-12 grid auto-rows-[minmax(240px,auto)] gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Tile className="md:col-span-2 lg:row-span-2">
            <img src={expo} alt="A towering humanoid robot on display in a neon-lit exhibition hall" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-void via-void/30 to-transparent" />
            <div className="relative flex h-full min-h-[420px] flex-col justify-end p-6 md:p-8">
              <MonoLabel>Pavilion A · Flagship</MonoLabel>
              <h3 className="mt-3 font-display text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold uppercase leading-tight tracking-[0.06em]">
                <Glitch text="Humanoid" />
                <br />
                Robotics Showcase
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-mist md:text-base">
                20+ international humanoids, quadrupeds and social robots — live demos, every hour.
              </p>
              <a href="#schedule" className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-cyan hover:text-white">
                See demo slots <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </Tile>

          <Tile delay={80} className="lg:col-span-2">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgb(176_38_255/0.25),transparent_70%)]" />
            <DroneSwarm />
            <div className="relative flex h-full flex-col justify-between p-6">
              <div className="flex items-center justify-between">
                <MonoLabel>Night Sky · 8:30 PM</MonoLabel>
                <Rocket className="h-5 w-5 text-cyan" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold uppercase tracking-[0.1em]">
                  <Glitch text="Drone Light Show" />
                </h3>
                <p className="mt-2 max-w-sm text-sm text-mist">500 synchronised drones paint a cyborg awakening above Powai lake.</p>
              </div>
            </div>
          </Tile>

          <Tile delay={140}>
            <img src={vr} alt="A student in a VR headset surrounded by holographic panels" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent" />
            <div className="relative flex h-full flex-col justify-between p-6">
              <Glasses className="h-5 w-5 text-cyan" />
              <div>
                <MonoLabel>Zone C</MonoLabel>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-[0.1em]">
                  <Glitch text="AR / VR Realm" />
                </h3>
              </div>
            </div>
          </Tile>

          <Tile delay={200}>
            <div className="grid-bg absolute inset-0 opacity-60" />
            <div className="relative flex h-full flex-col justify-between p-6">
              <MonoLabel>Tech Expo</MonoLabel>
              <div>
                <div className="font-display text-5xl font-black text-white [text-shadow:0_0_30px_rgb(0_229_255/0.6)]">
                  120<span className="text-cyan">+</span>
                </div>
                <p className="mt-2 text-sm text-mist">Startups and labs demoing deep-tech products across two halls.</p>
              </div>
            </div>
          </Tile>

          <Tile delay={120} className="md:col-span-2 lg:col-span-4">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan/10 via-transparent to-violet/15" />
            <svg aria-hidden viewBox="0 0 800 200" preserveAspectRatio="none" className="absolute inset-0 h-full w-full opacity-40" fill="none" stroke="#00E5FF" strokeWidth="1">
              <path d="M0 140 H180 L220 100 H420 L460 60 H800" strokeDasharray="6 6" />
              <path d="M0 170 H260 L300 130 H560 L600 170 H800" strokeOpacity="0.5" />
              <circle cx="220" cy="100" r="3" fill="#00E5FF" />
              <circle cx="460" cy="60" r="3" fill="#00E5FF" />
              <circle cx="600" cy="170" r="3" fill="#B026FF" />
            </svg>
            <div className="relative flex h-full flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between md:p-8">
              <div className="flex items-start gap-5">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center bg-cyan/10 text-cyan ring-1 ring-cyan/40">
                  <Hand className="h-7 w-7" strokeWidth={1.5} />
                </span>
                <div>
                  <MonoLabel>Zone D · New for 2026</MonoLabel>
                  <h3 className="mt-2 font-display text-xl font-bold uppercase tracking-[0.1em] md:text-2xl">
                    <Glitch text="The Cyborg Lab" />
                  </h3>
                  <p className="mt-2 max-w-xl text-sm text-mist md:text-base">
                    Try on exoskeletons, bionic limbs and neural wearables. Feel what it’s like to be augmented.
                  </p>
                </div>
              </div>
              <a href="#register" className="btn btn-primary cut-sm h-12 shrink-0 self-start px-6 text-[11px] md:self-auto">
                Get expo pass <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Tile>
        </div>
      </Container>
    </section>
  )
}
