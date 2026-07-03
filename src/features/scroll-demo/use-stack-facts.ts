import { useQuery } from '@tanstack/react-query'

export interface StackFact {
  id: string
  name: string
  role: string
}

const STACK_FACTS: StackFact[] = [
  { id: 'router', name: 'TanStack Router', role: 'Type-safe, file-based routing' },
  { id: 'query', name: 'TanStack Query', role: 'Async state & server cache' },
  { id: 'lenis', name: 'Lenis', role: 'Smooth virtual scrolling' },
  { id: 'gsap', name: 'GSAP + ScrollTrigger', role: 'Scroll-driven animation' },
]

/**
 * Stand-in async source so the template proves QueryClientProvider works
 * without depending on a live API. Swap `queryFn` for a real fetch later.
 */
function fetchStackFacts(): Promise<StackFact[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(STACK_FACTS), 600)
  })
}

export function useStackFacts() {
  return useQuery({
    queryKey: ['stack-facts'],
    queryFn: fetchStackFacts,
  })
}
