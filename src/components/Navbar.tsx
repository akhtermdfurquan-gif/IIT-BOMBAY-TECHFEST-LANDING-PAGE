import { useEffect, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Logo } from './Logo'

export const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Workshops', href: '#workshops' },
  { label: 'Lectures', href: '#lectures' },
  { label: 'Exhibitions', href: '#exhibitions' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    const ids = ['home', 'about', 'events', 'workshops', 'exhibitions', 'schedule', 'sponsors', 'contact']
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`))
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => {
      window.removeEventListener('scroll', onScroll)
      io.disconnect()
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ${scrolled || open ? 'glass border-b border-cyan/15 shadow-[0_10px_40px_-20px_rgb(0_229_255/0.4)]' : 'border-b border-transparent'}`}
      >
        <nav className="mx-auto flex h-[72px] max-w-[1376px] items-center justify-between px-5 sm:px-8" aria-label="Primary">
          <Logo />
          <ul className="hidden items-center gap-7 xl:flex">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  aria-current={active === n.href}
                  className="nav-link font-mono text-[12px] uppercase tracking-[0.18em] text-mist transition-colors hover:text-white aria-[current=true]:text-white"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <a href="#register" className="btn btn-primary cut-sm hidden h-11 px-5 text-[11px] sm:inline-flex">
              Register Now <ArrowUpRight className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="relative flex h-11 w-11 items-center justify-center border border-cyan/30 bg-cyan/5 xl:hidden"
            >
              <span className={`absolute h-[2px] w-5 bg-cyan transition-all duration-300 ${open ? 'rotate-45' : '-translate-y-[6px]'}`} />
              <span className={`absolute h-[2px] bg-cyan transition-all duration-300 ${open ? 'w-0 opacity-0' : 'w-3.5 translate-x-[3px]'}`} />
              <span className={`absolute h-[2px] w-5 bg-cyan transition-all duration-300 ${open ? '-rotate-45' : 'translate-y-[6px]'}`} />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`grid-bg fixed inset-x-0 bottom-0 top-[72px] bg-void/97 backdrop-blur-xl transition-all duration-500 xl:hidden ${open ? 'visible opacity-100' : 'invisible opacity-0'}`}
      >
        <ul className="flex flex-col gap-1 px-5 pt-6 sm:px-8">
          {NAV.map((n, i) => (
            <li
              key={n.href}
              className={`transition-all duration-500 ${open ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'}`}
              style={{ transitionDelay: open ? `${80 + i * 45}ms` : '0ms' }}
            >
              <a
                href={n.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 border-b border-white/5 py-4 font-display text-2xl font-bold uppercase tracking-[0.12em] text-white/90 hover:text-cyan"
              >
                <span className="font-mono text-[11px] text-cyan">0{i + 1}</span>
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="px-5 pt-8 sm:px-8">
          <a href="#register" onClick={() => setOpen(false)} className="btn btn-primary cut-sm h-14 w-full text-xs">
            Register Now <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  )
}
