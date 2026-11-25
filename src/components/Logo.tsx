export function LogoMark({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <defs>
        <linearGradient id="lm" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#00E5FF" />
          <stop offset="1" stopColor="#B026FF" />
        </linearGradient>
      </defs>
      <path d="M20 2 36 11v18L20 38 4 29V11Z" fill="none" stroke="url(#lm)" strokeWidth="1.6" />
      <path d="M20 8 30.5 14v12L20 32 9.5 26V14Z" fill="#00E5FF" fillOpacity="0.08" stroke="#00E5FF" strokeOpacity="0.4" />
      <circle cx="20" cy="20" r="4.2" fill="#00E5FF" />
      <circle cx="20" cy="20" r="7.5" fill="none" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2.5" />
      <path d="M20 2v6M36 11l-5.5 3M4 11l5.5 3" stroke="#00E5FF" strokeWidth="1" />
    </svg>
  )
}

export function Logo() {
  return (
    <a href="#home" className="flex items-center gap-3" aria-label="Techfest IIT Bombay home">
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[15px] font-extrabold tracking-[0.22em]">TECHFEST</span>
        <span className="mt-1 font-mono text-[9px] tracking-[0.34em] text-mist">IIT BOMBAY · 26</span>
      </span>
    </a>
  )
}
