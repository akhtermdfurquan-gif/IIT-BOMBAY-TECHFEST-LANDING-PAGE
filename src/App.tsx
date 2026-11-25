import { About } from './components/About'
import { CallToAction } from './components/CallToAction'
import { CursorGlow } from './components/CursorGlow'
import { Events } from './components/Events'
import { Exhibitions } from './components/Exhibitions'
import { Footer } from './components/Footer'
import { Hero, Ticker } from './components/Hero'
import { Loader } from './components/Loader'
import { MobileRegister } from './components/MobileRegister'
import { Navbar } from './components/Navbar'
import { Sponsors } from './components/Sponsors'
import { Talks } from './components/Talks'
import { Timeline } from './components/Timeline'
import { useScrollVar } from './lib/hooks'

const CIRCUIT =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240' fill='none' stroke='%2300E5FF' stroke-width='1'%3E%3Cpath d='M0 40h60l20 20h80l20-20h60M40 0v60l20 20v80M200 240v-60l-20-20H100M0 200h40l20-20'/%3E%3Ccircle cx='80' cy='60' r='3'/%3E%3Ccircle cx='160' cy='60' r='3'/%3E%3Ccircle cx='60' cy='160' r='3'/%3E%3Ccircle cx='100' cy='160' r='3'/%3E%3C/svg%3E\")"

export default function App() {
  useScrollVar()
  return (
    <>
      <Loader />
      <CursorGlow />
      {/* Parallax circuit backdrop */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.07]"
        style={{ backgroundImage: CIRCUIT, backgroundPositionY: 'calc(var(--sy, 0) * -0.15px)' }}
      />
      <Navbar />
      <main className="relative z-[1]">
        <Hero />
        <Ticker />
        <About />
        <Events />
        <Talks />
        <Exhibitions />
        <Timeline />
        <Sponsors />
        <CallToAction />
      </main>
      <div className="relative z-[1]">
        <Footer />
      </div>
      <MobileRegister />
    </>
  )
}
