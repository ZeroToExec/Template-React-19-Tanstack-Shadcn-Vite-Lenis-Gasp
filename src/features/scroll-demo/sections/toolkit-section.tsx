import { useState } from 'react'
import { RefreshCw } from 'lucide-react'

import { AppSlider } from '@/components/base-ui/slider'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useStackFacts } from '@/features/scroll-demo/use-stack-facts'

/**
 * Interactive proof-of-life for the two UI libraries and TanStack Query:
 *  - Base UI `Slider` drives the preview scale (unstyled primitive, our styles)
 *  - shadcn `Card` / `Button` provide the surrounding chrome
 *  - `useStackFacts` renders async data through QueryClientProvider
 */
export function ToolkitSection() {
  const [scale, setScale] = useState(60)
  const { data, isFetching, refetch } = useStackFacts()

  return (
    <section className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center gap-8 px-6 py-24 md:flex-row">
      <Card className="flex-1">
        <CardHeader>
          <CardTitle>Base UI · Slider</CardTitle>
          <CardDescription>
            Unstyled primitive, themed with the shadcn tokens.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-8">
          <div className="flex h-40 items-center justify-center">
            <div
              className="bg-primary/15 border-primary/40 size-24 rounded-2xl border transition-transform duration-150"
              style={{ transform: `scale(${0.5 + scale / 100})` }}
            />
          </div>
          <AppSlider label="Preview scale" value={scale} onValueChange={setScale} />
        </CardContent>
      </Card>

      <Card className="flex-1">
        <CardHeader>
          <CardTitle>TanStack Query · Data</CardTitle>
          <CardDescription>Async list served from the query cache.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <ul className="flex flex-col gap-3">
            {data?.map((fact) => (
              <li key={fact.id} className="flex flex-col">
                <span className="font-medium">{fact.name}</span>
                <span className="text-muted-foreground text-sm">{fact.role}</span>
              </li>
            ))}
          </ul>
          <Button
            variant="outline"
            className="self-start"
            disabled={isFetching}
            onClick={() => void refetch()}
          >
            <RefreshCw className={isFetching ? 'animate-spin' : undefined} />
            {isFetching ? 'Loading…' : 'Refetch'}
          </Button>
        </CardContent>
      </Card>
    </section>
  )
}
