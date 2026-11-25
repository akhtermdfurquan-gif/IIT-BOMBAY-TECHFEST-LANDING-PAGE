import { useEffect, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

export function MobileRegister() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      const cta = document.getElementById('register')?.getBoundingClientRect()
      const inCta = cta ? cta.top < window.innerHeight && cta.bottom > 0 : false
      setShow(window.scrollY > window.innerHeight * 0.7 && !inCta)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div
      className={`fixed inset-x-4 bottom-4 z-40 transition-all duration-500 md:hidden ${show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-24 opacity-0'}`}
    >
      <a href="#register" className="btn btn-primary cut-sm h-14 w-full text-xs">
        Register for Techfest 2026 <ArrowUpRight className="h-4 w-4" />
      </a>
    </div>
  )
}
