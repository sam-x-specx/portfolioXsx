import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description: "A curated list of things I've built — for signed-in readers only.",
  openGraph: {
    title: 'Projects',
    description: "A curated list of things I've built — for signed-in readers only.",
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Projects',
    description: "A curated list of things I've built — for signed-in readers only.",
  },
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
