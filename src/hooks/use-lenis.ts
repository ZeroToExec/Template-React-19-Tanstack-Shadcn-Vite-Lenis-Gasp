import { useContext } from 'react'
import type Lenis from 'lenis'

import { LenisContext } from '@/providers/lenis-context'

/**
 * Access the shared Lenis instance (e.g. for programmatic `lenis.scrollTo(...)`).
 * Returns `null` until `LenisProvider` has mounted, so guard before use.
 */
export function useLenis(): Lenis | null {
  return useContext(LenisContext)
}
