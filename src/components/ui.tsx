import type { CSSProperties, ElementType, ReactNode } from 'react'
import { useInView } from '../lib/hooks'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  as?: ElementType
  style?: CSSProperties
}

export function Reveal({ children, className = '', delay = 0, as: Tag = 'div', style }: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>()
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  )
}

export function Glitch({ text, className = '', auto = false }: { text: string; className?: string; auto?: boolean }) {
  return (
    <span data-text={text} className={`glitch ${auto ? 'glitch-auto' : 'glitch-hover'} ${className}`}>
      {text}
    </span>
  )
}

/** Thin HUD corner brackets around a positioned parent. */
export function HudBrackets({ size = 16, color = 'border-cyan/70', className = '' }: { size?: number; color?: string; className?: string }) {
  const s = { width: size, height: size }
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 ${className}`}>
      <span style={s} className={`absolute left-0 top-0 border-l border-t ${color}`} />
      <span style={s} className={`absolute right-0 top-0 border-r border-t ${color}`} />
      <span style={s} className={`absolute bottom-0 left-0 border-b border-l ${color}`} />
      <span style={s} className={`absolute bottom-0 right-0 border-b border-r ${color}`} />
    </div>
  )
}

export function MonoLabel({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span className={`font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-cyan ${className}`}>{children}</span>
  )
}

export function SectionHeader({
  index,
  label,
  title,
  accent,
  description,
  align = 'left',
}: {
  index: string
  label: string
  title: string
  accent?: string
  description?: string
  align?: 'left' | 'center'
}) {
  const center = align === 'center'
  return (
    <Reveal className={`flex flex-col gap-5 ${center ? 'items-center text-center' : ''}`}>
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-cyan shadow-[0_0_8px_var(--color-cyan)]" />
        <MonoLabel>
          {index} // {label}
        </MonoLabel>
      </div>
      <h2 className="font-display text-[clamp(1.75rem,4vw,3.25rem)] font-extrabold uppercase leading-[1.05] tracking-[0.06em]">
        <span className="metal-text">{title}</span>{' '}
        {accent && <span className="text-cyan [text-shadow:0_0_28px_rgb(0_229_255/0.5)]">{accent}</span>}
      </h2>
      {description && (
        <p className={`max-w-xl text-base leading-relaxed text-mist md:text-lg ${center ? 'mx-auto' : ''}`}>{description}</p>
      )}
    </Reveal>
  )
}

/** Clipped-corner panel with a 1px neon border. */
export function CutPanel({
  children,
  className = '',
  innerClassName = '',
  border = 'bg-cyan/25',
}: {
  children: ReactNode
  className?: string
  innerClassName?: string
  border?: string
}) {
  return (
    <div className={`cut p-px ${border} ${className}`}>
      <div className={`cut h-full bg-deep/95 ${innerClassName}`}>{children}</div>
    </div>
  )
}

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1312px] px-5 sm:px-8 ${className}`}>{children}</div>
}
