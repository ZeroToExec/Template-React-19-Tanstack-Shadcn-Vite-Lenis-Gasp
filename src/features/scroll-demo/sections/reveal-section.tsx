import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'

const FEATURES = [
  {
    title: 'One render loop',
    body: 'GSAP’s ticker drives lenis.raf() — no duplicate requestAnimationFrame loops fighting each other.',
  },
  {
    title: 'ScrollTrigger synced',
    body: 'lenis.on("scroll", ScrollTrigger.update) keeps trigger positions accurate against the virtual scroll.',
  },
  {
    title: 'Free GSAP only',
    body: 'Core + ScrollTrigger — both free since 2024, even commercially. No Club GreenSock plugins required.',
  },
]

/**
 * Cards fade + slide in on scroll. Each `data-reveal` child is animated by the
 * `useScrollReveal` hook (GSAP ScrollTrigger, staggered).
 */
export function RevealSection() {
  const containerRef = useScrollReveal<HTMLDivElement>()

  return (
    <section
      id="reveal"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-24"
    >
      <div ref={containerRef}>
        <h2
          data-reveal
          className="mb-3 text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Scroll-triggered reveals
        </h2>
        <p data-reveal className="text-muted-foreground mb-12 max-w-xl text-lg">
          These cards animate in as they enter the viewport — proof that Lenis
          and ScrollTrigger agree on where you are on the page.
        </p>

        <div className="grid gap-6 sm:grid-cols-3">
          {FEATURES.map((feature) => (
            <Card key={feature.title} data-reveal>
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>shadcn-ui · Card</CardDescription>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm">
                {feature.body}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
