import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { Logo } from './Logo'
import { NAV } from './Navbar'
import { Container, MonoLabel } from './ui'

const SOCIAL = [
  { label: 'Instagram', d: 'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm5.5-1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z' },
  { label: 'X', d: 'M4 3h4.5l4 5.6L17.5 3H20l-6.3 7.2L21 21h-4.5l-4.4-6.1L6.5 21H4l7-8Z' },
  { label: 'LinkedIn', d: 'M4 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM2.5 9h3v12h-3Zm6 0h3v1.7c.6-1 1.9-2 3.9-2 3.2 0 4.1 2 4.1 5V21h-3v-6.5c0-1.6-.4-2.8-2-2.8s-2.5 1.2-2.5 2.8V21h-3Z' },
  { label: 'YouTube', d: 'M22 8.2a3 3 0 0 0-2-2.1C18.2 5.6 12 5.6 12 5.6s-6.2 0-8 .5a3 3 0 0 0-2 2.1A31 31 0 0 0 1.6 12a31 31 0 0 0 .4 3.8 3 3 0 0 0 2 2.1c1.8.5 8 .5 8 .5s6.2 0 8-.5a3 3 0 0 0 2-2.1 31 31 0 0 0 .4-3.8 31 31 0 0 0-.4-3.8ZM10 15.2V8.8l5.3 3.2Z' },
]

export function Footer() {
  return (
    <footer id="contact" className="relative bg-void pb-28 pt-20 md:pb-12">
      {/* Circuit-line decorative top border */}
      <svg aria-hidden className="absolute inset-x-0 top-0 h-10 w-full" viewBox="0 0 1440 40" preserveAspectRatio="none" fill="none">
        <path d="M0 20 H380 L400 2 H620 L640 20 H800 L820 38 H1040 L1060 20 H1440" stroke="#00E5FF" strokeOpacity="0.5" />
        <path d="M0 20 H380 L400 2 H620 L640 20 H800 L820 38 H1040 L1060 20 H1440" stroke="#00E5FF" strokeWidth="2" strokeDasharray="60 340" style={{ animation: 'flow 6s linear infinite' }} />
        {[400, 640, 820, 1060].map((x, i) => (
          <circle key={x} cx={x} cy={[2, 20, 38, 20][i]} r="3" fill="#00E5FF" />
        ))}
      </svg>
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-mist">
              Asia’s largest science & technology festival, organised by the students of IIT Bombay since 1998.
            </p>
            <div className="mt-6 flex gap-2">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center text-mist ring-1 ring-inset ring-white/10 transition-all hover:text-cyan hover:ring-cyan/60 hover:shadow-[0_0_16px_-2px_rgb(0_229_255/0.7)]"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                    <path d={s.d} fillRule="evenodd" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer" className="lg:col-span-2">
            <MonoLabel className="text-[10px]">Quick links</MonoLabel>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-1">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-sm text-white/80 transition-colors hover:text-cyan">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <MonoLabel className="text-[10px]">Contact</MonoLabel>
            <ul className="mt-5 flex flex-col gap-4 text-sm text-white/80">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                Techfest Office, SAC, IIT Bombay, Powai, Mumbai 400076
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                <a href="mailto:hello@techfest.example" className="hover:text-cyan">hello@techfest.example</a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                +91 22 0000 0000
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <MonoLabel className="text-[10px]">Find us</MonoLabel>
            <a
              href="https://www.google.com/maps/search/?api=1&query=IIT+Bombay+Powai"
              target="_blank"
              rel="noreferrer"
              className="cut group relative mt-5 block h-36 overflow-hidden bg-deep ring-1 ring-inset ring-cyan/20"
            >
              <div className="grid-bg absolute inset-0" />
              <svg aria-hidden viewBox="0 0 200 120" className="absolute inset-0 h-full w-full" fill="none" stroke="#00E5FF" strokeOpacity="0.35">
                <path d="M0 80 Q60 60 100 70 T200 50" />
                <path d="M30 0 L60 120 M140 0 L120 120" />
                <ellipse cx="160" cy="95" rx="30" ry="14" stroke="#B026FF" />
              </svg>
              <span className="absolute left-[48%] top-[42%] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan shadow-[0_0_14px_var(--color-cyan)]">
                <span className="absolute inset-[-8px] animate-ping rounded-full border border-cyan" />
              </span>
              <span className="absolute bottom-3 left-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-white group-hover:text-cyan">
                Open campus map <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-white/8 pt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-mist sm:flex-row">
          <span>© 2026 Techfest, IIT Bombay</span>
          <span>
            System status: <span className="text-acid">Operational</span>
          </span>
        </div>
      </Container>
    </footer>
  )
}
