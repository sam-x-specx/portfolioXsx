// app/updates/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Updates',
  description: 'Journals, notes, and links — for signed-in readers only.',
  openGraph: {
    title: 'Updates',
    description: 'Journals, notes, and links — for signed-in readers only.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Updates',
    description: 'Journals, notes, and links — for signed-in readers only.',
  },
}

export default function UpdatesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
