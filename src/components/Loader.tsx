import { useEffect, useState } from 'react'
import { LogoMark } from './Logo'

const LINES = ['BOOT://cortex.v26', 'LINKING NEURAL MESH', 'CALIBRATING OPTICS', 'SYNC COMPLETE']

export function Loader() {
  const [p, setP] = useState(0)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    document.documentElement.style.overflow = 'hidden'
    const t0 = performance.now()
    let raf = 0
    const tick = (t: number) => {
      const v = Math.min(100, ((t - t0) / 1500) * 100)
      setP(v)
      if (v < 100) raf = requestAnimationFrame(tick)
      else
        setTimeout(() => {
          setGone(true)
          document.documentElement.style.overflow = ''
        }, 250)
    }
    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      document.documentElement.style.overflow = ''
    }
  }, [])

  const line = LINES[Math.min(LINES.length - 1, Math.floor(p / 26))]

  return (
    <div
      aria-hidden={gone}
      className={`grid-bg fixed inset-0 z-[100] flex items-center justify-center bg-void transition-[opacity,visibility] duration-700 ${gone ? 'invisible opacity-0' : 'opacity-100'}`}
    >
      <div className="flex w-[min(320px,80vw)] flex-col items-center gap-6">
        <div className="relative">
          <LogoMark className="h-20 w-20 drop-shadow-[0_0_24px_rgb(0_229_255/0.7)]" />
          <span className="absolute inset-[-14px] animate-[hud-spin_3s_linear_infinite] rounded-full border border-dashed border-cyan/40" />
        </div>
        <div className="w-full">
          <div className="mb-2 flex justify-between font-mono text-[11px] tracking-[0.2em] text-mist">
            <span>{line}</span>
            <span className="text-cyan">{Math.floor(p).toString().padStart(3, '0')}%</span>
          </div>
          <div className="h-[3px] w-full bg-white/10">
            <div className="h-full bg-cyan shadow-[0_0_12px_var(--color-cyan)]" style={{ width: `${p}%` }} />
          </div>
        </div>
      </div>
    </div>
  )
}
