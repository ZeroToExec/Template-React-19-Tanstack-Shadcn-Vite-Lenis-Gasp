import { createFileRoute } from '@tanstack/react-router'

import { ScrollDemoPage } from '@/features/scroll-demo/scroll-demo-page'

export const Route = createFileRoute('/')({
  component: ScrollDemoPage,
})
