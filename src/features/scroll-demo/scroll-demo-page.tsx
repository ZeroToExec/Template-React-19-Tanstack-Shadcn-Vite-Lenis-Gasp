import { HeroSection } from './sections/hero-section'
import { RevealSection } from './sections/reveal-section'
import { ToolkitSection } from './sections/toolkit-section'

/** Composes the demo route: ~3–4 screens of Lenis + GSAP + UI-library examples. */
export function ScrollDemoPage() {
  return (
    <main>
      <HeroSection />
      <RevealSection />
      <ToolkitSection />
      <footer className="text-muted-foreground border-t py-10 text-center text-sm">
        Lenis + GSAP ScrollTrigger · TanStack Router &amp; Query · shadcn-ui +
        Base UI
      </footer>
    </main>
  )
}
