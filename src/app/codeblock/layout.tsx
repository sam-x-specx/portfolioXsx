// app/codeblock/layout.tsx

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Code Blocks',
  description: 'Snippets and code references — for signed-in readers only.',
  openGraph: {
    title: 'Code Blocks',
    description: 'Snippets and code references — for signed-in readers only.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Code Blocks',
    description: 'Snippets and code references — for signed-in readers only.',
  },
}

export default function CodeBlockLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
