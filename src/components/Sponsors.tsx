import { Container, MonoLabel, Reveal, SectionHeader } from './ui'

// Fictional placeholder brands — swap with real partner logos.
const TIERS = [
  { tier: 'Title Sponsor', cols: 'grid-cols-1', h: 'h-32 md:h-40', size: 'text-2xl md:text-4xl', brands: ['NEXACORE'] },
  { tier: 'Platinum', cols: 'grid-cols-2 md:grid-cols-4', h: 'h-24 md:h-28', size: 'text-base md:text-xl', brands: ['QUANTIX', 'HELIOS AI', 'VOLTSPHERE', 'ORBYTE'] },
  {
    tier: 'Gold & Partners',
    cols: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-6',
    h: 'h-20',
    size: 'text-sm',
    brands: ['SYNAPTIQ', 'KINETIC', 'AXONLAB', 'PIXELFORGE', 'TERRAWAVE', 'CIRQIT', 'LUMEN', 'MECHA.IO', 'DATAVEIL', 'NOVAGRID', 'ZEPHYR', 'IONIX'],
  },
]

function Mark({ i }: { i: number }) {
  const shapes = [
    <path key="a" d="M12 2 22 20H2Z" />,
    <rect key="b" x="3" y="3" width="18" height="18" transform="rotate(45 12 12)" />,
    <circle key="c" cx="12" cy="12" r="9" />,
    <path key="d" d="M12 2 21 7v10l-9 5-9-5V7Z" />,
  ]
  return (
    <svg viewBox="0 0 24 24" className="h-[1.1em] w-[1.1em]" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      {shapes[i % shapes.length]}
    </svg>
  )
}

export function Sponsors() {
  return (
    <section id="sponsors" className="relative py-24 md:py-32">
      <Container>
        <SectionHeader
          index="06"
          label="Sponsors & Partners"
          title="Powered"
          accent="By"
          align="center"
          description="The organisations fuelling India’s biggest celebration of technology."
        />
        <div className="mt-14 flex flex-col gap-10">
          {TIERS.map((t, ti) => (
            <Reveal key={t.tier} delay={ti * 100}>
              <div className="mb-4 flex items-center gap-4">
                <MonoLabel className="text-[10px]">{t.tier}</MonoLabel>
                <span className="h-px flex-1 bg-gradient-to-r from-cyan/30 to-transparent" />
              </div>
              <ul className={`grid gap-3 ${t.cols}`}>
                {t.brands.map((b, i) => (
                  <li key={b}>
                    <a
                      href="#contact"
                      aria-label={`${b} (placeholder sponsor)`}
                      className={`cut-sm flex ${t.h} items-center justify-center gap-2.5 bg-white/[0.025] font-display font-bold tracking-[0.18em] text-white/35 ring-1 ring-inset ring-white/8 grayscale transition-all duration-300 hover:bg-cyan/[0.06] hover:text-cyan hover:ring-cyan/50 hover:[text-shadow:0_0_18px_rgb(0_229_255/0.8)] hover:grayscale-0 ${t.size}`}
                    >
                      <Mark i={i + ti} />
                      {b}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <p className="text-mist">
            Interested in partnering with Techfest?{' '}
            <a href="#contact" className="font-medium text-cyan underline-offset-4 hover:underline">
              Download the sponsorship deck
            </a>
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
