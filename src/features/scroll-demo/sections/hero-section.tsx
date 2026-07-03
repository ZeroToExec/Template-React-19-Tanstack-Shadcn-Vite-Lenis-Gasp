import { ChevronDown } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { useLenis } from '@/hooks/use-lenis'
import { useParallax } from '@/hooks/use-parallax'

/**
 * Full-height hero. The gradient blob drifts via GSAP ScrollTrigger (parallax)
 * and the CTA uses Lenis' programmatic `scrollTo` for a smooth jump.
 */
export function HeroSection() {
  const lenis = useLenis()
  const blobRef = useParallax<HTMLDivElement>(60)

  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div
        ref={blobRef}
        aria-hidden
        className="pointer-events-none absolute -z-10 size-[46rem] rounded-full bg-gradient-to-br from-primary/15 via-primary/5 to-transparent blur-3xl"
      />

      <p className="text-muted-foreground mb-4 text-sm font-medium tracking-widest uppercase">
        React 19 · Vite · TanStack
      </p>
      <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
        Smooth scrolling, done right.
      </h1>
      <p className="text-muted-foreground mt-6 max-w-xl text-lg text-pretty">
        Lenis drives the scroll, GSAP&nbsp;ScrollTrigger drives the animation —
        both share a single render loop. Scroll to see it work.
      </p>

      <Button
        size="lg"
        className="mt-10"
        onClick={() => lenis?.scrollTo('#reveal', { offset: 0 })}
      >
        Explore the stack
        <ChevronDown className="animate-bounce" />
      </Button>
    </section>
  )
}
