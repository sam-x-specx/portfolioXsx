// import Link from 'next/link'
// import { getAllProjects } from '@/sanity/lib/queries'
// import type { Project } from '@/sanity/lib/queries'

// export default async function ProjectsPage() {
//   const projects = await getAllProjects()

//   return (
//     <>
//       <main className="min-h-screen bg-[#030712] text-white font-sans px-6 py-24">
//         <div className="max-w-2xl mx-auto">
//           <h1 className="text-3xl font-bold tracking-tight mb-8">Projects</h1>
//           <div className="flex flex-col gap-8">
//             {projects.map((project: Project) => (
//               <div key={project._id} className="flex flex-col gap-1">
//                 <Link
//                   href={project.liveUrl ?? `/projects/${project.slug.current}`}
//                   target={project.liveUrl ? '_blank' : undefined}
//                   rel={project.liveUrl ? 'noopener noreferrer' : undefined}
//                   className="text-blue-400 font-medium text-lg hover:text-blue-300 transition-colors"
//                 >
//                   {project.title}
//                 </Link>
//                 <p className="text-gray-400 text-sm">{project.description}</p>
//                 <div className="flex flex-wrap gap-2 mt-1 text-xs text-gray-500">
//                   {project.techStack?.map((t: string) => (
//                     <span key={t}
//                       className="bg-gray-800 px-2 py-0.5 rounded text-gray-400">
//                       {t}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="flex gap-4 mt-1 text-xs">
//                   {project.liveUrl && (
//                     <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
//                       className="text-blue-400 hover:text-blue-300 transition-colors">
//                       Live ↗
//                     </a>
//                   )}
//                   {project.githubUrl && (
//                     <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
//                       className="text-gray-400 hover:text-gray-200 transition-colors">
//                       GitHub ↗
//                     </a>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>
//     </>
//   )
// }





// 'use client'

// import { useSession, signIn } from 'next-auth/react'
// import Link from 'next/link'
// import { useEffect, useState } from 'react'
// import { getAllProjects } from '@/sanity/lib/queries'
// import type { Project } from '@/sanity/lib/queries'

// const GoogleIcon = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24">
//     <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
//     <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
//     <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
//     <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
//   </svg>
// )

// function AuthGate() {
//   return (
//     <main className="min-h-screen bg-[#030712] text-white font-sans flex flex-col items-center justify-center px-6 gap-6 text-center">
//       <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24"
//         fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
//         className="text-gray-600">
//         <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
//         <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
//       </svg>
//       <div className="flex flex-col gap-2">
//         <h1 className="text-xl font-semibold text-white">Sign in to view Projects</h1>
//         <p className="text-gray-500 text-sm max-w-xs">
//           A curated list of things I've built — for signed-in readers only.
//         </p>
//       </div>
//       <button
//         onClick={() => signIn('google')}
//         className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-black text-sm font-medium hover:bg-gray-100 transition-colors"
//       >
//         <GoogleIcon />
//         Sign in with Google
//       </button>
//     </main>
//   )
// }

// function LoadingState() {
//   return (
//     <main className="min-h-screen bg-[#030712] text-white font-sans flex items-center justify-center">
//       <div className="flex flex-col items-center gap-3">
//         <div className="w-5 h-5 rounded-full border-2 border-gray-700 border-t-gray-400 animate-spin" />
//         {/* <p className="text-gray-600 text-xs">Loading...</p> */}
//       </div>
//     </main>
//   )
// }

// export default function ProjectsPage() {
//   const { data: session, status } = useSession()
//   const [projects, setProjects]   = useState<Project[]>([])
//   const [fetching, setFetching]   = useState(false)

//   useEffect(() => {
//     if (!session) return
//     setFetching(true)
//     getAllProjects()
//       .then(setProjects)
//       .finally(() => setFetching(false))
//   }, [session])

//   if (status === 'loading') return <LoadingState />
//   if (!session)             return <AuthGate />
//   if (fetching)             return <LoadingState />

//   return (
//     <main className="min-h-screen bg-[#030712] text-white font-sans px-6 py-24">
//       <div className="max-w-2xl mx-auto">
//         <h1 className="text-3xl font-bold tracking-tight mb-8">Projects</h1>
//         <div className="flex flex-col gap-8">
//           {projects.map((project: Project) => (
//             <div key={project._id} className="flex flex-col gap-1">
//               <Link
//                 href={project.liveUrl ?? `/projects/${project.slug.current}`}
//                 target={project.liveUrl ? '_blank' : undefined}
//                 rel={project.liveUrl ? 'noopener noreferrer' : undefined}
//                 className="text-blue-400 font-medium text-lg hover:text-blue-300 transition-colors"
//               >
//                 {project.title}
//               </Link>
//               <p className="text-gray-400 text-sm">{project.description}</p>
//               <div className="flex flex-wrap gap-2 mt-1 text-xs text-gray-500">
//                 {project.techStack?.map((t: string) => (
//                   <span key={t}
//                     className="bg-gray-800 px-2 py-0.5 rounded text-gray-400">
//                     {t}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex gap-4 mt-1 text-xs">
//                 {project.liveUrl && (
//                   <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
//                     className="text-blue-400 hover:text-blue-300 transition-colors">
//                     Live ↗
//                   </a>
//                 )}
//                 {project.githubUrl && (
//                   <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
//                     className="text-gray-400 hover:text-gray-200 transition-colors">
//                     GitHub ↗
//                   </a>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </main>
//   )
// }













'use client'

import { useSession, signIn } from 'next-auth/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getAllProjects } from '@/sanity/lib/queries'
import type { Project } from '@/sanity/lib/queries'

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
)

function LoadingState() {
  return (
    <main className="min-h-screen bg-[#030712] text-white font-sans flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-5 h-5 rounded-full border-2 border-gray-700 border-t-gray-400 animate-spin" />
      </div>
    </main>
  )
}

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
        <h1 className="text-xl font-semibold text-white">Sign in to view Projects</h1>
        <p className="text-gray-500 text-sm max-w-xs">
          A curated list of things I've built — for signed-in readers only.
        </p>
      </div>
      <button
        type="button"
        onClick={() => signIn('google')}
        className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-black text-sm font-medium hover:bg-gray-100 transition-colors"
      >
        <GoogleIcon />
        Sign in with Google
      </button>
    </main>
  )
}

export default function ProjectsPage() {
  const { data: session, status } = useSession()
  const [projects, setProjects]   = useState<Project[]>([])
  const [fetching, setFetching]   = useState(false)

  useEffect(() => {
    if (!session) return
    setFetching(true)
    getAllProjects()
      .then(setProjects)
      .finally(() => setFetching(false))
  }, [session])

  if (status === 'loading') return <LoadingState />
  if (!session)             return <AuthGate />
  if (fetching)             return <LoadingState />

  return (
    <main className="min-h-screen bg-[#030712] text-white font-sans px-6 py-24">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight mb-8">Projects</h1>
        <div className="flex flex-col gap-8">
          {projects.map((project: Project) => (
            <div key={project._id} className="flex flex-col gap-1">
              <Link
                href={project.liveUrl ?? `/projects/${project.slug.current}`}
                target={project.liveUrl ? '_blank' : undefined}
                rel={project.liveUrl ? 'noopener noreferrer' : undefined}
                className="text-blue-400 font-medium text-lg hover:text-blue-300 transition-colors"
              >
                {project.title}
              </Link>
              <p className="text-gray-400 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-1 text-xs text-gray-500">
                {project.techStack?.map((t: string) => (
                  <span key={t} className="bg-gray-800 px-2 py-0.5 rounded text-gray-400">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-1 text-xs">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors">
                    Live ↗
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-200 transition-colors">
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}








