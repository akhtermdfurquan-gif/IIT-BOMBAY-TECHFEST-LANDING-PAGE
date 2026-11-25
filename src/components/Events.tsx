import { useMemo, useState } from 'react'
import { ArrowRight, Bot, BrainCircuit, CodeXml, Cog, Dna, Plane, ScanEye, ShieldHalf, type LucideIcon } from 'lucide-react'
import { Container, Glitch, HudBrackets, Reveal, SectionHeader } from './ui'

type Event = { title: string; cat: string; icon: LucideIcon; desc: string; prize: string; team: string; tag?: string }

const EVENTS: Event[] = [
  { title: 'Robowars', cat: 'Robotics', icon: Bot, desc: 'Combat robots up to 60 kg clash inside a bulletproof polycarbonate arena.', prize: '₹6,00,000', team: '2–6', tag: 'Flagship' },
  { title: 'Cozmo Clench', cat: 'Robotics', icon: Cog, desc: 'Build an autonomous manipulator that sorts, grips and stacks under pressure.', prize: '₹2,50,000', team: '1–4' },
  { title: 'Neural Forge', cat: 'AI / ML', icon: BrainCircuit, desc: 'Train the sharpest model you can on a strict compute and latency budget.', prize: '₹3,00,000', team: '1–3', tag: 'New' },
  { title: 'Vision Quest', cat: 'AI / ML', icon: ScanEye, desc: 'Real-time computer vision on edge hardware — detect, track, decide.', prize: '₹1,50,000', team: '1–4' },
  { title: 'Codeathon 36', cat: 'Coding', icon: CodeXml, desc: 'A 36-hour hackathon to prototype assistive tech for human augmentation.', prize: '₹4,00,000', team: '2–4', tag: 'Flagship' },
  { title: 'Cipher Siege', cat: 'Coding', icon: ShieldHalf, desc: 'Attack-defence CTF: breach the cyborg mainframe before it adapts.', prize: '₹2,00,000', team: '1–3' },
  { title: 'Aerial Synapse', cat: 'Aero', icon: Plane, desc: 'FPV drone racing through a neon gate course with mind-bending turns.', prize: '₹2,50,000', team: '1–2' },
  { title: 'Bionic Build', cat: 'Bio-Tech', icon: Dna, desc: 'Design a low-cost prosthetic or exoskeleton that restores real function.', prize: '₹2,00,000', team: '2–5', tag: 'New' },
]

const CATS = ['All', 'Robotics', 'AI / ML', 'Coding', 'Aero', 'Bio-Tech']

function EventCard({ e }: { e: Event }) {
  const Icon = e.icon
  return (
    <article className="group relative h-full transition-transform duration-300 hover:-translate-y-2">
      {/* Neon border layer that pulses on hover */}
      <div className="cut absolute inset-0 bg-gradient-to-br from-cyan/25 via-white/5 to-violet/25 transition-all duration-300 group-hover:from-cyan group-hover:to-violet group-hover:[animation:pulse-border_1.4s_ease-in-out_infinite]" />
      <div className="cut relative m-px flex h-[calc(100%-2px)] flex-col bg-deep p-6 transition-shadow duration-300">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgb(0_229_255/0.12),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="flex items-start justify-between">
          <span className="relative flex h-12 w-12 items-center justify-center bg-cyan/5 text-cyan ring-1 ring-cyan/30 transition-all duration-300 group-hover:bg-cyan group-hover:text-void group-hover:shadow-[0_0_24px_var(--color-cyan)]">
            <Icon className="h-6 w-6" strokeWidth={1.6} />
          </span>
          <div className="flex flex-col items-end gap-1.5">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-mist">{e.cat}</span>
            {e.tag && (
              <span className={`font-mono text-[9px] uppercase tracking-[0.22em] ${e.tag === 'New' ? 'text-acid' : 'text-ember'}`}>
                ● {e.tag}
              </span>
            )}
          </div>
        </div>
        <h3 className="mt-7 font-display text-xl font-bold uppercase tracking-[0.1em]">
          <Glitch text={e.title} />
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">{e.desc}</p>
        <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-5">
          <div>
            <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-mist">Prize pool</div>
            <div className="mt-1 font-display text-base font-bold text-cyan">{e.prize}</div>
          </div>
          <div className="text-right">
            <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-mist">Team</div>
            <div className="mt-1 font-mono text-sm text-white">{e.team}</div>
          </div>
        </div>
        <a
          href="#register"
          className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-white transition-colors hover:text-cyan"
          aria-label={`Explore ${e.title}`}
        >
          Explore <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  )
}

export function Events() {
  const [cat, setCat] = useState('All')
  const list = useMemo(() => (cat === 'All' ? EVENTS : EVENTS.filter((e) => e.cat === cat)), [cat])

  return (
    <section id="events" className="relative py-24 md:py-32">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeader
            index="02"
            label="Events & Competitions"
            title="Compete"
            accent="Beyond Human"
            description="50+ competitions across robotics, AI, code and bio-engineering. Pick your arena."
          />
          <Reveal delay={100}>
            <div role="tablist" aria-label="Filter events by category" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0 lg:justify-end">
              {CATS.map((c) => {
                const on = c === cat
                return (
                  <button
                    key={c}
                    role="tab"
                    aria-selected={on}
                    onClick={() => setCat(c)}
                    className={`cut-sm relative shrink-0 px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] transition-all duration-300 ${on ? 'bg-cyan text-void shadow-[0_0_20px_rgb(0_229_255/0.5)]' : 'bg-white/[0.04] text-mist ring-1 ring-inset ring-white/10 hover:text-white hover:ring-cyan/50'}`}
                  >
                    {c}
                  </button>
                )
              })}
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((e, i) => (
            <Reveal key={`${cat}-${e.title}`} delay={i * 70} className="h-full">
              <EventCard e={e} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <a href="#register" className="btn btn-outline cut-sm relative h-12 px-8 text-[11px]">
            <HudBrackets size={6} />
            View all 50+ events <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </Container>
    </section>
  )
}
