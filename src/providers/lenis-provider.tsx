import { useEffect, useState, type ReactNode } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { LenisContext } from './lenis-context'

// ScrollTrigger is a free GSAP plugin — register it once at module load.
gsap.registerPlugin(ScrollTrigger)

/**
 * Owns the app's single Lenis instance and drives it from GSAP's ticker so
 * Lenis and ScrollTrigger share one render loop instead of two competing RAFs.
 *
 * Wrap the app once (see `main.tsx`); consume the instance with `useLenis`.
 */
export function LenisProvider({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null)

  useEffect(() => {
    // `autoRaf: false` — GSAP's ticker below is the only loop driving Lenis.
    const instance = new Lenis({ autoRaf: false })

    // Keep ScrollTrigger's cached positions in sync with Lenis' virtual scroll.
    // Wrapped in an arrow so we don't pass the unbound static method directly.
    instance.on('scroll', () => ScrollTrigger.update())

    // Lenis expects milliseconds; GSAP's ticker reports seconds.
    const raf = (time: number) => instance.raf(time * 1000)
    gsap.ticker.add(raf)
    // Disable GSAP's lag smoothing so scroll velocity stays accurate.
    gsap.ticker.lagSmoothing(0)

    // Publish the instance to consumers. Setting state once on mount to expose
    // an imperative external object is the intended use of an effect here.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLenis(instance)

    return () => {
      gsap.ticker.remove(raf)
      instance.destroy()
      setLenis(null)
    }
  }, [])

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
}
