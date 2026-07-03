import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// No-op if already registered by LenisProvider; safe to call again.
gsap.registerPlugin(ScrollTrigger)

/**
 * Returns a ref to attach to a container. Direct/nested children marked with
 * `data-reveal` fade and slide in (staggered) when the container scrolls into
 * view. Uses `gsap.context` so every tween/trigger is reverted on unmount.
 */
export function useScrollReveal<T extends HTMLElement>() {
  const containerRef = useRef<T>(null)

  useLayoutEffect(() => {
    const container = containerRef.current
    if (!container) return

    const ctx = gsap.context(() => {
      gsap.from('[data-reveal]', {
        opacity: 0,
        y: 64,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: container,
          start: 'top 75%',
        },
      })
    }, container)

    return () => ctx.revert()
  }, [])

  return containerRef
}
