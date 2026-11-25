import { useEffect, useRef } from 'react'

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    const el = ref.current
    if (!el) return
    el.style.opacity = '1'
    const move = (e: PointerEvent) => {
      el.style.transform = `translate3d(${e.clientX - 200}px, ${e.clientY - 200}px, 0)`
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [])
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[80] h-[400px] w-[400px] rounded-full opacity-0 mix-blend-screen transition-opacity duration-500"
      style={{ background: 'radial-gradient(circle, rgb(0 229 255 / 0.12), rgb(176 38 255 / 0.05) 40%, transparent 70%)' }}
    />
  )
}
