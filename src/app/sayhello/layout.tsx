// app/sayhello/layout.tsx

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Say Hello',
  description: 'Get in touch — find me across the web.',
  openGraph: {
    title: 'Say Hello',
    description: 'Get in touch — find me across the web.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Say Hello',
    description: 'Get in touch — find me across the web.',
  },
}

export default function SayHelloLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
