// import Link from 'next/link'
// import { getAllUpdates } from '@/sanity/lib/queries'
// import type { Update } from '@/sanity/lib/queries'

// function fmtViews(n: number) {
//   if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
//   if (n >= 1_000) return `${Math.floor(n / 1_000)}K`
//   return String(n)
// }

// export default async function UpdatesPage() {
//   const updates = await getAllUpdates()

//   return (
//     <main className="min-h-screen bg-[#030712] text-white font-sans px-6 py-24">
//       <div className="max-w-2xl mx-auto">
//         <h1 className="text-3xl font-bold tracking-tight mb-2">Updates</h1>
//         <p className="text-gray-500 text-sm mb-10">Journals, notes, and links.</p>

//         {updates.length === 0 && (
//           <p className="text-gray-500 text-sm">No updates yet.</p>
//         )}

//         <div className="flex flex-col divide-y divide-gray-800">
//           {updates.map((u: Update) => (
//             <Link
//               key={u._id}
//               href={`/updates/${u.slug?.current ?? u._id}`}
//               className="group flex items-center gap-4 py-4 hover:bg-gray-900/50 px-3 -mx-3 rounded-lg transition-colors"
//             >
//               {/* Thumbnail */}
//               <div className="flex-shrink-0 w-14 h-14 rounded overflow-hidden bg-gray-800">
//                 {u.coverImageUrl ? (
//                   <img
//                     src={u.coverImageUrl}
//                     alt={u.title}
//                     className="w-full h-full object-cover"
//                   />
//                 ) : (
//                   <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-600 text-xs">
//                     —
//                   </div>
//                 )}
//               </div>

//               {/* Content */}
//               <div className="flex flex-col gap-0.5 flex-1 min-w-0">
//                 <p className="text-white font-medium text-sm group-hover:text-blue-300 transition-colors truncate">
//                   {u.title}
//                 </p>
//                 <p className="text-gray-500 text-xs">
//                   {new Date(u.publishedAt).toLocaleDateString('en-US', {
//                     month: 'long', day: 'numeric', year: 'numeric',
//                   })}
//                   {u.tags && u.tags.length > 0 && (
//                     <span className="ml-2 text-gray-600">· {u.tags.join(', ')}</span>
//                   )}
//                 </p>
//               </div>

//               {/* Views */}
//               <span className="flex-shrink-0 text-xs text-gray-600">
//                 👁 {fmtViews(u.views ?? 0)}
//               </span>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </main>
//   )
// }





// Update

'use client'

import { useSession, signIn } from 'next-auth/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getAllUpdates } from '@/sanity/lib/queries'
import type { Update } from '@/sanity/lib/queries'

function fmtViews(n: number) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `${Math.floor(n / 1_000)}K`
  return String(n)
}

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
)

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
        <h1 className="text-xl font-semibold text-white">Sign in to view Updates</h1>
        <p className="text-gray-500 text-sm max-w-xs">
          Journals, notes, and links — for signed-in readers only.
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

function LoadingState() {
  return (
    <main className="min-h-screen bg-[#030712] text-white font-sans flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-5 h-5 rounded-full border-2 border-gray-700 border-t-gray-400 animate-spin" />
        {/* <p className="text-gray-600 text-xs">Loading...</p> */}
      </div>
    </main>
  )
}


export default function UpdatesPage() {
  const { data: session, status } = useSession()
  const [updates, setUpdates]     = useState<Update[]>([])
  const [fetching, setFetching]   = useState(false)

  useEffect(() => {
    if (!session) return
    setFetching(true)
    getAllUpdates()
      .then(setUpdates)
      .finally(() => setFetching(false))
  }, [session])

  if (status === 'loading') return <LoadingState />
  if (!session)             return <AuthGate />
  if (fetching)             return <LoadingState />

  return (
    <main className="min-h-screen bg-[#030712] text-white font-sans px-6 py-24">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Updates</h1>
        <p className="text-gray-500 text-sm mb-10">Journals, notes, and links.</p>

        {updates.length === 0 && (
          <p className="text-gray-500 text-sm">No updates yet.</p>
        )}

        <div className="flex flex-col divide-y divide-gray-800">
          {updates.map((u: Update) => (
            <Link
              key={u._id}
              href={`/updates/${u.slug?.current ?? u._id}`}
              className="group flex items-center gap-4 py-4 hover:bg-gray-900/50 px-3 -mx-3 rounded-lg transition-colors"
            >
              {/* Thumbnail */}
              <div className="flex-shrink-0 w-14 h-14 rounded overflow-hidden bg-gray-800">
                {u.coverImageUrl ? (
                  <img
                    src={u.coverImageUrl}
                    alt={u.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-600 text-xs">
                    —
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                <p className="text-white font-medium text-sm group-hover:text-blue-300 transition-colors truncate">
                  {u.title}
                </p>
                <p className="text-gray-500 text-xs">
                  {new Date(u.publishedAt).toLocaleDateString('en-US', {
                    month: 'long', day: 'numeric', year: 'numeric',
                  })}
                  {u.tags && u.tags.length > 0 && (
                    <span className="ml-2 text-gray-600">· {u.tags.join(', ')}</span>
                  )}
                </p>
              </div>

              {/* Views */}
              <span className="flex-shrink-0 text-xs text-gray-600">
                👁 {fmtViews(u.views ?? 0)}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
