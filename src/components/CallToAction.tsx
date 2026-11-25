import { useState, type FormEvent } from 'react'
import { ArrowUpRight, Check, Send } from 'lucide-react'
import { Container, HudBrackets, MonoLabel, Reveal } from './ui'

export function CallToAction() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const submit = (e: FormEvent) => {
    e.preventDefault()
    if (email) setSent(true)
  }
  return (
    <section id="register" className="relative py-16 md:py-24">
      <Container>
        <Reveal>
          <div className="cut relative overflow-hidden bg-gradient-to-br from-cyan/20 via-deep to-violet/25 p-px">
            <div className="cut relative overflow-hidden bg-deep/90 px-6 py-14 sm:px-10 md:px-16 md:py-20">
              <div aria-hidden className="grid-bg absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
              <div aria-hidden className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-cyan/20 blur-[100px]" />
              <div aria-hidden className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-violet/25 blur-[100px]" />
              <HudBrackets size={24} className="inset-5" />

              <div className="relative grid gap-12 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-7">
                  <MonoLabel>
                    <span className="mr-2 inline-block h-1.5 w-1.5 animate-[blink_1s_steps(1)_infinite] bg-ember align-middle" />
                    Registrations open · Early access
                  </MonoLabel>
                  <h2 className="mt-5 font-display text-[clamp(2rem,5vw,4rem)] font-black uppercase leading-[1] tracking-[0.04em]">
                    <span className="metal-text">Upgrade</span> <span className="text-cyan [text-shadow:0_0_30px_rgb(0_229_255/0.6)]">Yourself.</span>
                  </h2>
                  <p className="mt-5 max-w-lg text-base text-mist md:text-lg">
                    Claim your festival pass before the system locks. Free entry for registered students, priority access to workshops.
                  </p>
                  <a href="#register" className="btn btn-primary cut-sm mt-8 h-14 px-9 text-xs">
                    Register Now <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>

                <form onSubmit={submit} className="lg:col-span-5" aria-label="Newsletter sign-up">
                  <label htmlFor="nl-email" className="font-display text-sm font-bold uppercase tracking-[0.16em]">
                    Join the transmission
                  </label>
                  <p className="mt-2 text-sm text-mist">Event drops, speaker reveals and deadlines — straight to your inbox.</p>
                  {sent ? (
                    <div className="cut-sm mt-5 flex h-14 items-center gap-3 bg-acid/10 px-5 font-mono text-xs uppercase tracking-[0.2em] text-acid ring-1 ring-inset ring-acid/40" role="status">
                      <Check className="h-4 w-4" /> Signal received. Welcome aboard.
                    </div>
                  ) : (
                    <div className="cut-sm mt-5 flex bg-void/70 p-1 ring-1 ring-inset ring-cyan/30 focus-within:ring-cyan focus-within:shadow-[0_0_24px_-4px_rgb(0_229_255/0.6)]">
                      <input
                        id="nl-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@college.edu"
                        className="min-w-0 flex-1 bg-transparent px-4 font-mono text-sm text-white placeholder:text-mist/60 focus:outline-none"
                      />
                      <button type="submit" className="btn btn-primary cut-sm h-12 shrink-0 px-5 text-[11px]">
                        <span className="hidden sm:inline">Subscribe</span> <Send className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
