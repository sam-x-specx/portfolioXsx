// // app/codeblock/page.tsx
// import Link from "next/link";
// import { client } from "@/sanity/lib/client";
// import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
// import { ALL_CODEBLOCKS_QUERY } from "@/sanity/lib/queries";

// interface CodeBlock {
//   _id: string;
//   title: string;
//   slug: { current: string };
//   abbreviation: string;
//   shortDescription: string;
//   language: string;
//   topic?: string;
//   fileExtension?: string;
// }



// export const revalidate = 60;

// export default async function CodeBlockPage() {
//   const codeblocks: CodeBlock[] = await client.fetch(ALL_CODEBLOCKS_QUERY);

//   return (
//     <div className="min-h-screen bg-neutral-950 px-6 py-16">
//       <div className="mx-auto max-w-6xl">

//         {/* Header */}
//         <div className="mb-14">
//           <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
//             Snippets
//           </p>
//           <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
//             Code Blocks
//           </h1>
//           <p className="mt-3 text-base text-neutral-500">
//             Curated snippets — copy, learn, ship.
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
//           {codeblocks.map((block) => (
//             <CodeCard key={block._id} block={block} />
//           ))}
//         </div>

//         {codeblocks.length === 0 && (
//           <div className="flex h-64 items-center justify-center rounded-2xl border border-dashed border-white/10">
//             <p className="text-neutral-600">No code blocks yet.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// /* ── Card ── */
// function CodeCard({ block }: { block: CodeBlock }) {
//   return (
//     <Link
//       href={`/codeblock/${block.slug.current}`}
//       className="group block focus:outline-none"
//     >
//       {/* Matches the exact Aceternity DottedGlowBackgroundDemo card shape */}
//       <div
//         className={[
//           "relative flex items-end justify-end overflow-hidden",
//           "size-60 md:size-72",                          // square, responsive
//           "rounded-md rounded-tl-3xl rounded-br-3xl rounded-bl-3xl",
//           "border border-transparent",
//           "shadow shadow-black/10 ring-1 ring-black/5",
//           "dark:shadow-white/10 dark:ring-white/5",
//           "transition-transform duration-300 group-hover:-translate-y-1",
//         ].join(" ")}
//       >
//         {/* ── Centre logo tile — white square with abbreviation ── */}
//         <div className="absolute inset-0 z-20 m-auto flex size-16 md:size-20 items-center justify-center rounded-xl bg-white shadow-md">
//           <span className="font-sans text-xl md:text-2xl font-bold tracking-tight text-neutral-900 select-none">
//             {block.abbreviation}
//           </span>
//         </div>

//         {/* ── Bottom bar ── */}
//         <div className="relative z-20 flex w-full items-center justify-between px-2 py-3 backdrop-blur-[2px] md:px-4">
//           <p className="text-xs font-normal text-neutral-600 dark:text-neutral-400 md:text-sm line-clamp-1">
//             {block.shortDescription}
//           </p>
//           <p className="text-xs font-normal text-neutral-600 dark:text-neutral-400 md:text-sm">
//             &rarr;
//           </p>
//         </div>

//         {/* ── Animated dot background ── */}
//         <DottedGlowBackground
//           className="pointer-events-none mask-radial-to-90% mask-radial-at-center"
//           opacity={1}
//           gap={10}
//           radius={1.6}
//           colorLightVar="--color-neutral-500"
//           glowColorLightVar="--color-neutral-600"
//           colorDarkVar="--color-neutral-500"
//           glowColorDarkVar="--color-sky-800"
//           backgroundOpacity={0}
//           speedMin={0.3}
//           speedMax={1.6}
//           speedScale={1}
//         />
//       </div>

//       {/* Title below card */}
//       <p className="mt-2.5 px-1 text-xs font-medium text-neutral-500 transition-colors group-hover:text-neutral-300 line-clamp-1">
//         {block.title}
//       </p>
//     </Link>
//   );
// }



// // app/codeblock/page.tsx
// import Link from "next/link";
// import { client } from "@/sanity/lib/client";
// import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
// import { ALL_CODEBLOCKS_QUERY } from "@/sanity/lib/queries";

// interface CodeBlock {
//   _id: string;
//   title: string;
//   slug: { current: string };
//   abbreviation: string;
//   shortDescription: string;
//   language: string;
//   topic?: string;
//   fileExtension?: string;
// }

// export const revalidate = 60;

// export default async function CodeBlockPage() {
//   const codeblocks: CodeBlock[] = await client.fetch(ALL_CODEBLOCKS_QUERY);

//   return (
//     <main className="min-h-screen bg-[#030712] px-6 py-28 md:py-24">
//       {/* Header - Fixed at top (this was the main issue) */}
//       <div className="mx-auto w-full max-w-2xl mb-10 md:mb-16">
//         <h1 className="text-3xl font-bold text-white mb-2">Code Blocks</h1>
//       </div>

//       {/* Grid - Only changed layout for better mobile + size */}
//       <div className="mx-auto w-full max-w-2xl">
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
//           {codeblocks.map((block) => (
//             <CodeCard key={block._id} block={block} />
//           ))}
//         </div>

//         {codeblocks.length === 0 && (
//           <div className="w-full max-w-2xl flex h-48 items-center justify-center rounded-2xl border border-dashed border-white/10 mt-12">
//             <p className="text-neutral-600">No code blocks yet.</p>
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }

// /* ── Card — UNCHANGED (only kept your original design) ── */
// function CodeCard({ block }: { block: CodeBlock }) {
//   return (
//     <Link
//       href={`/codeblock/${block.slug.current}`}
//       className="group block focus:outline-none"
//     >
//       <div
//         className={[
//           "relative flex items-end justify-end overflow-hidden",
//           "w-full aspect-square",           // kept square ratio
//           "rounded-md rounded-tl-3xl rounded-br-3xl rounded-bl-3xl",
//           "border border-transparent",
//           "shadow shadow-black/10 ring-1 ring-black/5",
//           "dark:shadow-white/10 dark:ring-white/5",
//           "transition-transform duration-300 group-hover:-translate-y-1",
//         ].join(" ")}
//       >
//         {/* Centre logo tile — unchanged */}
//         <div className="absolute inset-0 z-20 m-auto flex size-14 sm:size-16 md:size-20 items-center justify-center rounded-xl bg-white shadow-md">
//           <span className="font-sans text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-neutral-900 select-none">
//             {block.abbreviation}
//           </span>
//         </div>

//         {/* Bottom bar — unchanged */}
//         <div className="relative z-20 flex w-full items-center justify-between px-2.5 py-2.5 backdrop-blur-[2px] sm:px-3 md:px-4">
//           <p className="text-[11px] sm:text-xs font-normal text-neutral-600 dark:text-neutral-400 md:text-sm line-clamp-1">
//             {block.shortDescription}
//           </p>
//           <p className="text-[11px] sm:text-xs font-normal text-neutral-600 dark:text-neutral-400 md:text-sm ml-1">
//             &rarr;
//           </p>
//         </div>

//         {/* Animated dot background — unchanged */}
//         <DottedGlowBackground
//           className="pointer-events-none mask-radial-to-90% mask-radial-at-center"
//           opacity={1}
//           gap={10}
//           radius={1.6}
//           colorLightVar="--color-neutral-500"
//           glowColorLightVar="--color-neutral-600"
//           colorDarkVar="--color-neutral-500"
//           glowColorDarkVar="--color-sky-800"
//           backgroundOpacity={0}
//           speedMin={0.3}
//           speedMax={1.6}
//           speedScale={1}
//         />
//       </div>

//       {/* Title below card — unchanged */}
//       <p className="mt-2.5 px-1 text-xs font-medium text-neutral-500 transition-colors group-hover:text-neutral-300 line-clamp-1">
//         {block.title}
//       </p>
//     </Link>
//   );
// }


'use client'

import { useSession, signIn } from 'next-auth/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'
import { DottedGlowBackground } from '@/components/ui/dotted-glow-background'
import { ALL_CODEBLOCKS_QUERY } from '@/sanity/lib/queries'

interface CodeBlock {
  _id: string
  title: string
  slug: { current: string }
  abbreviation: string
  shortDescription: string
  language: string
  topic?: string
  fileExtension?: string
}

// ── Shared Google icon ──────────────────────────────────────────────────────
const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
)

// ── Auth gate (same pattern as Updates) ────────────────────────────────────
function AuthGate() {
  return (
    <main className="min-h-screen bg-[#030712] text-white font-sans flex flex-col items-center justify-center px-6 gap-6 text-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        className="text-gray-600">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold text-white">Sign in to view Code Blocks</h1>
        <p className="text-gray-500 text-sm max-w-xs">
          Snippets and code references — for signed-in readers only.
        </p>
      </div>
      <button
        onClick={() => signIn('google')}
        className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-black text-sm font-medium hover:bg-gray-100 transition-colors"
      >
        <GoogleIcon />
        Sign in with Google
      </button>
    </main>
  )
}

// ── Loading spinner (same as Updates) ──────────────────────────────────────
function LoadingState() {
  return (
    <main className="min-h-screen bg-[#030712] text-white font-sans flex items-center justify-center">
      <div className="w-5 h-5 rounded-full border-2 border-gray-700 border-t-gray-400 animate-spin" />
    </main>
  )
}

// ── Card (unchanged from your original) ────────────────────────────────────
function CodeCard({ block }: { block: CodeBlock }) {
  return (
    <Link href={`/codeblock/${block.slug.current}`} className="group block focus:outline-none">
      <div
        className={[
          "relative flex items-end justify-end overflow-hidden",
          "w-full aspect-square",
          "rounded-md rounded-tl-3xl rounded-br-3xl rounded-bl-3xl",
          "border border-transparent",
          "shadow shadow-black/10 ring-1 ring-black/5",
          "dark:shadow-white/10 dark:ring-white/5",
          "transition-transform duration-300 group-hover:-translate-y-1",
        ].join(" ")}
      >
        <div className="absolute inset-0 z-20 m-auto flex size-14 sm:size-16 md:size-20 items-center justify-center rounded-xl bg-white shadow-md">
          <span className="font-sans text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-neutral-900 select-none">
            {block.abbreviation}
          </span>
        </div>

        <div className="relative z-20 flex w-full items-center justify-between px-2.5 py-2.5 backdrop-blur-[2px] sm:px-3 md:px-4">
          <p className="text-[11px] sm:text-xs font-normal text-neutral-600 dark:text-neutral-400 md:text-sm line-clamp-1">
            {block.shortDescription}
          </p>
          <p className="text-[11px] sm:text-xs font-normal text-neutral-600 dark:text-neutral-400 md:text-sm ml-1">
            &rarr;
          </p>
        </div>

        <DottedGlowBackground
          className="pointer-events-none mask-radial-to-90% mask-radial-at-center"
          opacity={1}
          gap={10}
          radius={1.6}
          colorLightVar="--color-neutral-500"
          glowColorLightVar="--color-neutral-600"
          colorDarkVar="--color-neutral-500"
          glowColorDarkVar="--color-sky-800"
          backgroundOpacity={0}
          speedMin={0.3}
          speedMax={1.6}
          speedScale={1}
        />
      </div>

      <p className="mt-2.5 px-1 text-xs font-medium text-neutral-500 transition-colors group-hover:text-neutral-300 line-clamp-1">
        {block.title}
      </p>
    </Link>
  )
}

// ── Page ───────────────────────────────────────────────────────────────────
export default function CodeBlockPage() {
  const { data: session, status } = useSession()
  const [codeblocks, setCodeblocks] = useState<CodeBlock[]>([])
  const [fetching, setFetching]     = useState(false)

  useEffect(() => {
    if (!session) return
    setFetching(true)
    client
      .fetch<CodeBlock[]>(ALL_CODEBLOCKS_QUERY)
      .then(setCodeblocks)
      .finally(() => setFetching(false))
  }, [session])

  if (status === 'loading') return <LoadingState />
  if (!session)             return <AuthGate />
  if (fetching)             return <LoadingState />

  return (
    <main className="min-h-screen bg-[#030712] px-6 py-28 md:py-24">
      <div className="mx-auto w-full max-w-2xl mb-10 md:mb-16">
        <h1 className="text-3xl font-bold text-white mb-2">Code Blocks</h1>
      </div>

      <div className="mx-auto w-full max-w-2xl">
        {codeblocks.length === 0 ? (
          <div className="flex h-48 items-center justify-center rounded-2xl border border-dashed border-white/10 mt-12">
            <p className="text-neutral-600">No code blocks yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {codeblocks.map((block) => (
              <CodeCard key={block._id} block={block} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
