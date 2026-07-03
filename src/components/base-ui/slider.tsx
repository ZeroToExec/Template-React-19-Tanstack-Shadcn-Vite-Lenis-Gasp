import { Slider } from '@base-ui/react/slider'

import { cn } from '@/lib/utils'

interface AppSliderProps {
  value: number
  onValueChange: (value: number) => void
  label?: string
  min?: number
  max?: number
  step?: number
  className?: string
}

/**
 * Single-value slider built on Base UI's unstyled `Slider` primitive.
 *
 * Base UI (not shadcn/Radix) is used here on purpose: it ships an accessible
 * slider that Radix does not, and its "parts" API lets us style each piece with
 * the same Tailwind tokens the shadcn components use, so the two libraries look
 * identical. See the README for the shadcn-vs-Base-UI split.
 */
export function AppSlider({
  value,
  onValueChange,
  label,
  min = 0,
  max = 100,
  step = 1,
  className,
}: AppSliderProps) {
  return (
    <Slider.Root
      value={value}
      min={min}
      max={max}
      step={step}
      onValueChange={(next) => {
        // Single-thumb slider — coerce to a concrete number for our callback.
        const nextValue = Number(Array.isArray(next) ? next[0] : next)
        onValueChange(Number.isFinite(nextValue) ? nextValue : min)
      }}
      className={cn('flex w-full flex-col gap-3', className)}
    >
      <div className="flex items-center justify-between text-sm">
        {label ? <Slider.Label>{label}</Slider.Label> : <span />}
        <Slider.Value className="text-muted-foreground tabular-nums" />
      </div>
      <Slider.Control className="flex h-5 w-full items-center">
        <Slider.Track className="bg-secondary relative h-1.5 w-full rounded-full">
          <Slider.Indicator className="bg-primary absolute h-full rounded-full" />
          <Slider.Thumb className="bg-primary ring-background focus-visible:ring-ring/50 block size-4 rounded-full shadow ring-2 outline-none focus-visible:ring-[3px]" />
        </Slider.Track>
      </Slider.Control>
    </Slider.Root>
  )
}
