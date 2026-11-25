import { useEffect, useState } from 'react'
import { ArrowUpRight, Clock, Users } from 'lucide-react'
import { Container, HudBrackets, MonoLabel, Reveal, SectionHeader } from './ui'

type Person = { name: string; role: string; topic: string; meta: [string, string]; hue: number }

const WORKSHOPS: Person[] = [
  { name: 'Humanoid Robotics', role: 'Led by Dr. Kavya Iyer · Mechatronics Lab', topic: 'Build & program a bipedal gait with ROS 2', meta: ['2 days', '60 seats'], hue: 190 },
  { name: 'Brain–Computer Interfaces', role: 'Led by Arjun Mehta · NeuroSignal Labs', topic: 'Decode EEG signals to control a robotic arm', meta: ['1 day', '40 seats'], hue: 280 },
  { name: 'LLM Agents from Scratch', role: 'Led by Sana Qureshi · Applied AI Group', topic: 'Design tool-using agents with memory & planning', meta: ['1 day', '120 seats'], hue: 200 },
  { name: 'Edge AI on Silicon', role: 'Led by Rohan Das · Embedded Systems', topic: 'Deploy quantised vision models on microcontrollers', meta: ['1 day', '80 seats'], hue: 170 },
  { name: 'Drone Autonomy', role: 'Led by Meera Pillai · Aerospace Dept.', topic: 'SLAM and path planning for indoor quadcopters', meta: ['2 days', '50 seats'], hue: 300 },
  { name: 'Bio-Mechatronics', role: 'Led by Dr. Vikram Sethi · Rehab Robotics', topic: 'Prototype a myoelectric prosthetic hand', meta: ['1 day', '40 seats'], hue: 220 },
]

const LECTURES: Person[] = [
  { name: 'Dr. Ananya Rao', role: 'Chief Scientist, Neural Systems Institute', topic: 'The Last Interface: When Thought Becomes Input', meta: ['Dec 18', 'Main Auditorium'], hue: 190 },
  { name: 'Prof. Daniel Okafor', role: 'Director, Centre for Synthetic Cognition', topic: 'Machines That Learn Like Children', meta: ['Dec 18', 'Convocation Hall'], hue: 280 },
  { name: 'Ishaan Kapoor', role: 'Founder, Exo Dynamics', topic: 'Exoskeletons for 100 Million Workers', meta: ['Dec 19', 'Main Auditorium'], hue: 170 },
  { name: 'Dr. Lena Novak', role: 'Space Robotics Lead, Orbital Research Agency', topic: 'Cyborgs in Orbit: Autonomy at 400 km', meta: ['Dec 19', 'Convocation Hall'], hue: 210 },
  { name: 'Priya Nair', role: 'Head of Ethics, Global AI Council', topic: 'Who Owns an Augmented Mind?', meta: ['Dec 20', 'LT-PCSA'], hue: 300 },
  { name: 'Prof. Hiroshi Tanaka', role: 'Android Science Laboratory', topic: 'Crossing the Uncanny Valley', meta: ['Dec 20', 'Main Auditorium'], hue: 230 },
]

function initials(n: string) {
  return n
    .replace(/^(Dr\.|Prof\.)\s/, '')
    .split(/[\s–-]+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
}

/** Stylised portrait placeholder: wireframe head over a tinted gradient. */
function Portrait({ p, workshop }: { p: Person; workshop: boolean }) {
  return (
    <div
      className="cut-sm relative h-full w-full overflow-hidden"
      style={{ background: `linear-gradient(150deg, hsl(${p.hue} 90% 22%), #070b14 75%)` }}
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full opacity-70" fill="none" stroke={`hsl(${p.hue} 100% 65%)`} strokeWidth="0.6">
        {workshop ? (
          <>
            <circle cx="50" cy="50" r="22" strokeDasharray="2 2" />
            <circle cx="50" cy="50" r="12" />
            <path d="M50 10v18M50 72v18M10 50h18M72 50h18M22 22l12 12M66 66l12 12M78 22 66 34M22 78l12-12" />
          </>
        ) : (
          <>
            <ellipse cx="50" cy="42" rx="17" ry="21" />
            <path d="M33 42h34M50 21v42M36 30q14 6 28 0M36 54q14 -6 28 0" strokeOpacity="0.6" />
            <path d="M18 100q4-26 32-30q28 4 32 30" />
            <circle cx="57" cy="40" r="2.4" fill={`hsl(${p.hue} 100% 65%)`} />
          </>
        )}
      </svg>
      <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgb(255_255_255/0.04)_0_1px,transparent_1px_3px)]" />
      <span className="absolute bottom-1.5 left-2 font-display text-lg font-bold text-white/90">{initials(p.name)}</span>
      <span className="absolute right-1.5 top-1.5 font-mono text-[7px] tracking-[0.2em] text-white/50">IMG</span>
    </div>
  )
}

export function Talks() {
  const [tab, setTab] = useState<'workshops' | 'lectures'>('workshops')

  useEffect(() => {
    const sync = () => {
      if (location.hash === '#lectures') setTab('lectures')
      if (location.hash === '#workshops') setTab('workshops')
    }
    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [])

  const list = tab === 'workshops' ? WORKSHOPS : LECTURES
  const isW = tab === 'workshops'

  return (
    <section id="workshops" className="relative overflow-hidden bg-deep py-24 md:py-32">
      <span id="lectures" className="absolute top-0" aria-hidden />
      <div aria-hidden className="grid-bg absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_70%)]" />
      <div aria-hidden className="absolute -right-40 top-20 h-[480px] w-[480px] rounded-full bg-violet/15 blur-[120px]" />
      <Container className="relative grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeader
              index="03"
              label="Workshops & Lectures"
              title="Upload"
              accent="Knowledge"
              description="Hands-on workshops with lab-grade hardware, and lectures from the people building our augmented future."
            />
            <Reveal delay={120} className="mt-8">
              <div role="tablist" aria-label="Workshops or lectures" className="cut-sm relative grid grid-cols-2 bg-white/[0.04] p-1 ring-1 ring-inset ring-white/10">
                <span
                  aria-hidden
                  className="cut-sm absolute bottom-1 top-1 w-[calc(50%-4px)] bg-cyan shadow-[0_0_20px_rgb(0_229_255/0.5)] transition-transform duration-300"
                  style={{ transform: isW ? 'translateX(0)' : 'translateX(100%)', left: 4 }}
                />
                {(['workshops', 'lectures'] as const).map((t) => (
                  <button
                    key={t}
                    role="tab"
                    aria-selected={tab === t}
                    onClick={() => setTab(t)}
                    className={`relative z-10 py-3 font-display text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ${tab === t ? 'text-void' : 'text-mist hover:text-white'}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {(isW ? [['40+', 'Workshops'], ['6,000', 'Seats']] : [['60+', 'Speakers'], ['12', 'Countries']]).map(([a, b]) => (
                  <div key={b} className="border-l border-cyan/40 pl-4">
                    <div className="font-display text-2xl font-bold">{a}</div>
                    <MonoLabel className="text-[10px] text-mist">{b}</MonoLabel>
                  </div>
                ))}
              </div>
              <a href="#register" className="btn btn-outline cut-sm mt-8 h-12 px-6 text-[11px]">
                {isW ? 'Book a workshop' : 'Reserve a seat'} <ArrowUpRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8" role="tabpanel">
          {list.map((p, i) => (
            <Reveal key={`${tab}-${p.name}`} delay={i * 70}>
              <article className="glass cut group relative flex h-full gap-4 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_-8px_rgb(0_229_255/0.6)] sm:p-5">
                <HudBrackets size={10} className="opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="h-24 w-24 shrink-0 sm:h-28 sm:w-28">
                  <Portrait p={p} workshop={isW} />
                </div>
                <div className="flex min-w-0 flex-1 flex-col">
                  <h3 className="font-display text-[15px] font-bold uppercase leading-snug tracking-[0.08em] text-white">{p.name}</h3>
                  <p className="mt-1 text-xs text-mist">{p.role}</p>
                  <p className="mt-3 text-sm leading-snug text-white/85">“{p.topic}”</p>
                  <div className="mt-auto flex flex-wrap gap-x-4 gap-y-1 pt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-cyan">
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3 w-3" /> {p.meta[0]}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="h-3 w-3" /> {p.meta[1]}
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
