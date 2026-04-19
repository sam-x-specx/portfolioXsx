// // Sayhello

// import { getContactLinks } from '@/sanity/lib/queries'
// import {
//   GlowingStarsBackgroundCard,
//   GlowingStarsDescription,
//   GlowingStarsTitle,
// } from '@/components/ui/glowing-stars'

// export const revalidate = 60   // ISR — refresh every 60 s

// export default async function SayHelloPage() {
//   const links = await getContactLinks()

//   return (
//     <main className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
//         <div className='w-full max-w-2xl mb-12'>
//                   <h1 className="text-3xl font-bold text-white mb-2">Say Hello</h1>
//         </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
//         {links.map((link) => (
//           <a
//             key={link._id}
//             href={link.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group block"
//           >
//             <GlowingStarsBackgroundCard>
//               <GlowingStarsTitle>{link.appName}</GlowingStarsTitle>

//               <div className="flex items-end justify-between mt-2">
//                 <GlowingStarsDescription>
//                   {link.handle && (
//                     <span className="block text-xs text-gray-400 mb-1">
//                       {link.handle}
//                     </span>
//                   )}
//                   {link.description ?? ''}
//                 </GlowingStarsDescription>

//                 {/* Arrow button */}
//                 <div className="ml-4 flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
//                   <ArrowIcon />
//                 </div>
//               </div>
//             </GlowingStarsBackgroundCard>
//           </a>
//         ))}
//       </div>
//     </main>
//   )
// }

// function ArrowIcon() {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth="1.5"
//       stroke="currentColor"
//       className="h-4 w-4 text-white"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
//       />
//     </svg>
//   )
// }





// Sayhello

import { getContactLinks } from '@/sanity/lib/queries'
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from '@/components/ui/glowing-stars'

export const revalidate = 60   // ISR — refresh every 60 s

export default async function SayHelloPage() {
  const links = await getContactLinks()

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
        <div className='w-full max-w-2xl mb-12'>
                  <h1 className="text-3xl font-bold text-white mb-2">Say Hello</h1>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
        {links.map((link) => (
          <a
            key={link._id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
<GlowingStarsBackgroundCard>
  {/* Top row: title + arrow */}
  <div className="flex items-start justify-between">
    <GlowingStarsTitle>
      <span className="line-clamp-1">{link.appName}</span>
    </GlowingStarsTitle>

    <div className="ml-4 flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
      <ArrowIcon />
    </div>
  </div>

  {/* Bottom: handle + description */}
  <div className="mt-2">
    <GlowingStarsDescription>
      {link.handle && (
        <span className="block text-xs text-gray-400 mb-1 truncate">
          {link.handle}
        </span>
      )}
      <span className="line-clamp-2">{link.description ?? ''}</span>
    </GlowingStarsDescription>
  </div>
</GlowingStarsBackgroundCard>
          </a>
        ))}
      </div>
    </main>
  )
}

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-4 w-4 text-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  )
}

// Added Loading State Below (no other changes)
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
