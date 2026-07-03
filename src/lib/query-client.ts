import { QueryClient } from '@tanstack/react-query'

/**
 * App-wide TanStack Query client. Also passed into the router context so
 * loaders can prefetch/read the cache (see `src/routes/__root.tsx`).
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 min — avoids refetch storms during navigation
      refetchOnWindowFocus: false,
    },
  },
})
