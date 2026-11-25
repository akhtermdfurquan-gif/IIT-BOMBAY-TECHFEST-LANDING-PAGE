import { useState } from 'react'
import { Container, MonoLabel, Reveal, SectionHeader } from './ui'

const DAYS = [
  {
    day: '01',
    date: 'Dec 18',
    name: 'Initialise',
    items: [
      ['09:00', 'Opening Ceremony', 'Convocation Hall'],
      ['10:30', 'Robowars — League Rounds', 'Arena, SAC'],
      ['13:00', 'Keynote: The Last Interface', 'Main Auditorium'],
      ['15:00', 'Codeathon 36 Kick-off', 'Lecture Hall Complex'],
      ['20:30', 'Drone Light Show', 'Powai Lakefront'],
    ],
  },
  {
    day: '02',
    date: 'Dec 19',
    name: 'Augment',
    items: [
      ['09:30', 'Workshops Block A', 'Dept. Labs'],
      ['11:00', 'Neural Forge — Finals', 'KReSIT'],
      ['14:00', 'Humanoid Robotics Demos', 'Pavilion A'],
      ['16:30', 'Panel: Who Owns an Augmented Mind?', 'LT-PCSA'],
      ['21:00', 'Technoholix Night', 'Open Air Theatre'],
    ],
  },
  {
    day: '03',
    date: 'Dec 20',
    name: 'Transcend',
    items: [
      ['09:00', 'Aerial Synapse — Drone Racing', 'Gymkhana Grounds'],
      ['11:30', 'Robowars — Grand Finale', 'Arena, SAC'],
      ['14:00', 'Lecture: Crossing the Uncanny Valley', 'Main Auditorium'],
      ['17:00', 'Prize Distribution', 'Convocation Hall'],
      ['19:00', 'Closing Ceremony', 'Convocation Hall'],
    ],
  },
]

export function Timeline() {
  const [d, setD] = useState(0)
  const day = DAYS[d]
  return (
    <section id="schedule" className="relative overflow-hidden bg-deep py-24 md:py-32">
      <div aria-hidden className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan/10 blur-[120px]" />
      <Container className="relative">
        <SectionHeader index="05" label="Schedule" title="Mission" accent="Timeline" align="center" description="Three days. Three phases of the transformation." />

        {/* Day selector on a circuit trace */}
        <Reveal delay={100} className="relative mx-auto mt-14 max-w-3xl">
          <div aria-hidden className="absolute left-[16.66%] right-[16.66%] top-[22px] h-px bg-white/10">
            <div className="h-full bg-cyan shadow-[0_0_10px_var(--color-cyan)] transition-all duration-500" style={{ width: `${d * 50}%` }} />
          </div>
          <div role="tablist" aria-label="Festival day" className="relative grid grid-cols-3">
            {DAYS.map((x, i) => {
              const on = i === d
              const past = i <= d
              return (
                <button key={x.day} role="tab" aria-selected={on} onClick={() => setD(i)} className="group flex flex-col items-center gap-4">
                  <span
                    className={`relative flex h-11 w-11 rotate-45 items-center justify-center border transition-all duration-300 ${on ? 'border-cyan bg-cyan shadow-[0_0_24px_var(--color-cyan)]' : past ? 'border-cyan bg-deep' : 'border-white/20 bg-deep group-hover:border-cyan/60'}`}
                  >
                    <span className={`-rotate-45 font-display text-xs font-bold ${on ? 'text-void' : 'text-white'}`}>{x.day}</span>
                  </span>
                  <span className="text-center">
                    <span className={`block font-display text-sm font-bold uppercase tracking-[0.16em] transition-colors sm:text-base ${on ? 'text-cyan' : 'text-white'}`}>
                      {x.name}
                    </span>
                    <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.25em] text-mist">{x.date}</span>
                  </span>
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* Vertical circuit timeline */}
        <div key={d} className="relative mx-auto mt-14 max-w-3xl" role="tabpanel">
          <div aria-hidden className="absolute bottom-4 left-[94px] top-4 w-px bg-gradient-to-b from-cyan via-violet/60 to-transparent sm:left-[126px]" />
          <ol className="flex flex-col gap-3">
            {day.items.map(([time, title, venue], i) => (
              <Reveal as="li" key={title} delay={i * 80} className="relative flex items-center gap-6 sm:gap-10">
                <span className="w-[64px] shrink-0 text-right font-display text-sm font-bold tabular-nums text-white sm:w-[80px] sm:text-base">{time}</span>
                <span aria-hidden className="relative z-10 h-3 w-3 shrink-0 rotate-45 border border-cyan bg-void shadow-[0_0_12px_var(--color-cyan)]">
                  <span className="absolute inset-[2px] bg-cyan" style={{ animation: `twinkle 2s ease-in-out ${i * 300}ms infinite` }} />
                </span>
                <div className="glass cut-sm group flex flex-1 flex-col gap-1 px-5 py-4 ring-1 ring-inset ring-white/5 transition-all duration-300 hover:ring-cyan/40 sm:flex-row sm:items-center sm:justify-between">
                  <span className="font-medium text-white">{title}</span>
                  <MonoLabel className="text-[10px] text-mist group-hover:text-cyan">{venue}</MonoLabel>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
