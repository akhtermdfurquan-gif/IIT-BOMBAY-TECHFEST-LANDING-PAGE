import { Cpu, Globe2, Sparkles } from 'lucide-react'
import hands from '../assets/hands.webp'
import { useCountUp, useInView } from '../lib/hooks'
import { Container, HudBrackets, MonoLabel, Reveal, SectionHeader } from './ui'

const STATS = [
  { value: 175000, suffix: '+', label: 'Footfall', note: 'visitors across 3 days' },
  { value: 2500, suffix: '+', label: 'Colleges', note: 'participating nationwide' },
  { value: 50, suffix: '+', label: 'Competitions', note: 'tech & innovation' },
  { value: 80, prefix: '₹', suffix: 'L', label: 'Prize Pool', note: 'up for grabs' },
]

function Stat({ s, delay }: { s: (typeof STATS)[number]; delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4)
  const v = useCountUp(s.value, inView)
  return (
    <Reveal delay={delay}>
      <div ref={ref} className="glass cut group relative h-full p-5 transition-shadow duration-300 hover:shadow-[0_0_30px_-6px_rgb(0_229_255/0.5)] sm:p-6">
        <HudBrackets size={10} className="transition-opacity group-hover:opacity-100 opacity-60" />
        <MonoLabel className="text-[10px]">{s.label}</MonoLabel>
        <div className="mt-3 font-display text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold tabular-nums text-white [text-shadow:0_0_24px_rgb(0_229_255/0.45)]">
          {s.prefix}
          {v.toLocaleString('en-IN')}
          <span className="text-cyan">{s.suffix}</span>
        </div>
        <p className="mt-1 text-sm text-mist">{s.note}</p>
      </div>
    </Reveal>
  )
}

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32">
      <Container className="grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
        {/* Visual */}
        <Reveal className="relative lg:col-span-5">
          <div className="relative mx-auto max-w-[480px]">
            <div className="cut relative aspect-[4/5] overflow-hidden bg-deep">
              <img
                src={hands}
                alt="A human hand and a robotic hand reaching toward each other, joined by a spark of light"
                className="h-full w-full scale-105 object-cover"
                loading="lazy"
                style={{ transform: 'translateY(calc((var(--sy, 0) - 900) * -0.05px)) scale(1.1)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent" />
              <div className="grid-bg absolute inset-0 opacity-30" />
            </div>
            <HudBrackets size={22} className="-inset-3" />
            <div className="glass cut-sm absolute -bottom-5 left-4 right-4 flex items-center justify-between gap-3 px-4 py-3 sm:left-auto sm:right-[-24px] sm:w-64">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan">Interface // 01</div>
                <div className="mt-1 font-display text-sm font-bold uppercase tracking-[0.12em]">Synapse Bridge</div>
              </div>
              <span className="flex h-9 w-9 items-center justify-center border border-cyan/40 text-cyan">
                <Sparkles className="h-4 w-4" />
              </span>
            </div>
            <span className="absolute -left-3 top-8 hidden -rotate-90 origin-left font-mono text-[10px] uppercase tracking-[0.35em] text-mist sm:block">
              Since 1998 · Powai
            </span>
          </div>
        </Reveal>

        {/* Copy */}
        <div className="lg:col-span-7 lg:pl-6">
          <SectionHeader
            index="01"
            label="About"
            title="Augment"
            accent="Everything"
            description="Techfest is IIT Bombay’s annual science and technology festival — a 28-year legacy where students, researchers and industry converge. This year, we explore the frontier where biology and silicon become one."
          />
          <Reveal delay={120} className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { icon: Cpu, title: 'Machine Precision', text: 'Competitions judged on engineering rigour, built by teams from 30+ countries.' },
              { icon: Globe2, title: 'Human Intelligence', text: 'Lectures from scientists, founders and Nobel-calibre minds shaping tomorrow.' },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4 border-l border-cyan/30 pl-4">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-cyan" />
                <div>
                  <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em]">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-mist">{text}</p>
                </div>
              </div>
            ))}
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
            {STATS.map((s, i) => (
              <Stat key={s.label} s={s} delay={i * 90} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
