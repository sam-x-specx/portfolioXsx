// import { getExperiences } from '@/sanity/lib/queries'
// import type { Experience } from '@/sanity/lib/queries'

// function fmtDate(d?: string) {
//   if (!d) return ''
//   return new Date(d).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
// }

// export default async function ExperiencePage() {
//   const experiences = await getExperiences()

//   return (
//     <main className="min-h-screen bg-[#030712] text-white font-sans px-6 py-24">
//       <div className="max-w-2xl mx-auto">
//         <h1 className="text-3xl font-bold tracking-tight mb-8">Experience</h1>
//         <div className="flex flex-col divide-y divide-gray-800">
//           {experiences.map((exp: Experience) => (
//             <div key={exp._id} className="py-6 flex flex-col gap-1">
//               <p className="text-lg font-medium">{exp.role}</p>
//               {exp.company && (
//                 <p className="text-blue-200 text-sm">{exp.company}</p>
//               )}
//               <p className="text-gray-400 text-sm mt-1">{exp.description}</p>
//               <p className="text-gray-500 text-xs mt-1">
//                 {exp.current
//                   ? `${fmtDate(exp.startDate)} – Present`
//                   : `${fmtDate(exp.startDate)} – ${fmtDate(exp.endDate)}`}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </main>
//   )
// }



// import { Suspense } from 'react'
// import { getExperiences } from '@/sanity/lib/queries'
// import type { Experience } from '@/sanity/lib/queries'

// function fmtDate(d?: string) {
//   if (!d) return ''
//   return new Date(d).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
// }

// function LoadingState() {
//   return (
//     <main className="min-h-screen bg-[#030712] text-white font-sans flex items-center justify-center">
//       <div className="flex flex-col items-center gap-3">
//         <div className="w-5 h-5 rounded-full border-2 border-gray-700 border-t-gray-400 animate-spin" />
//       </div>
//     </main>
//   )
// }

// async function ExperienceList() {
//   const experiences = await getExperiences()

//   return (
//     <main className="min-h-screen bg-[#030712] text-white font-sans px-6 py-24">
//       <div className="max-w-2xl mx-auto">
//         <h1 className="text-3xl font-bold tracking-tight mb-8">Experience</h1>
//         <div className="flex flex-col divide-y divide-gray-800">
//           {experiences.map((exp: Experience) => (
//             <div key={exp._id} className="py-6 flex flex-col gap-1">
//               <p className="text-lg font-medium">{exp.role}</p>
//               {exp.company && (
//                 <p className="text-blue-200 text-sm">{exp.company}</p>
//               )}
//               <p className="text-gray-400 text-sm mt-1">{exp.description}</p>
//               <p className="text-gray-500 text-xs mt-1">
//                 {exp.current
//                   ? `${fmtDate(exp.startDate)} – Present`
//                   : `${fmtDate(exp.startDate)} – ${fmtDate(exp.endDate)}`}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </main>
//   )
// }

// export default function ExperiencePage() {
//   return (
//     <Suspense fallback={<LoadingState />}>
//       <ExperienceList />
//     </Suspense>
//   )
// }


// app/experience/page.tsx
import type { Metadata } from 'next'
import { Suspense } from 'react'
import { getExperiences } from '@/sanity/lib/queries'
import type { Experience } from '@/sanity/lib/queries'

export const metadata: Metadata = {
  title: 'Experience',
  description: 'My professional experience and work history.',
  openGraph: {
    title: 'Experience',
    description: 'My professional experience and work history.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Experience',
    description: 'My professional experience and work history.',
  },
}

function fmtDate(d?: string) {
  if (!d) return ''
  return new Date(d).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}

function LoadingState() {
  return (
    <main className="min-h-screen bg-[#030712] text-white font-sans flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-5 h-5 rounded-full border-2 border-gray-700 border-t-gray-400 animate-spin" />
      </div>
    </main>
  )
}

async function ExperienceList() {
  const experiences = await getExperiences()

  return (
    <main className="min-h-screen bg-[#030712] text-white font-sans px-6 py-24">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight mb-8">Experience</h1>
        <div className="flex flex-col divide-y divide-gray-800">
          {experiences.map((exp: Experience) => (
            <div key={exp._id} className="py-6 flex flex-col gap-1">
              <p className="text-lg font-medium">{exp.role}</p>
              {exp.company && (
                <p className="text-blue-200 text-sm">{exp.company}</p>
              )}
              <p className="text-gray-400 text-sm mt-1">{exp.description}</p>
              <p className="text-gray-500 text-xs mt-1">
                {exp.current
                  ? `${fmtDate(exp.startDate)} – Present`
                  : `${fmtDate(exp.startDate)} – ${fmtDate(exp.endDate)}`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default function ExperiencePage() {
  return (
    <Suspense fallback={<LoadingState />}>
      <ExperienceList />
    </Suspense>
  )
}
