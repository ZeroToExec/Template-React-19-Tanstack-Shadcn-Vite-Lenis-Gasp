import { createContext } from 'react'
import type Lenis from 'lenis'

/**
 * Holds the single Lenis instance created by `LenisProvider`.
 * `null` until the provider has mounted the instance on the client.
 */
export const LenisContext = createContext<Lenis | null>(null)
