// import { notFound } from 'next/navigation'
// import { client } from '@/sanity/lib/client'

// async function getProjectBySlug(slug: string) {
//   return client.fetch(`
//     *[_type == "project" && (slug.current == $slug || _id == $slug)][0] {
//       _id, title, description, techStack, liveUrl, githubUrl,
//       "imageUrl": image.asset->url
//     }
//   `, { slug })
// }

// export default async function ProjectPost({ params }: { params: Promise<{ slug: string }> }) {
//   const { slug } = await params
//   const project = await getProjectBySlug(slug)
//   if (!project) return notFound()

//   return (
//     <main className="min-h-screen bg-[#0a0a0a] text-white font-sans px-6 py-24">
//       <div className="max-w-2xl mx-auto flex flex-col gap-6">

//         {project.imageUrl && (
//           <img
//             src={project.imageUrl}
//             alt={project.title}
//             className="w-full rounded-lg object-cover max-h-[400px]"
//           />
//         )}

//         <div className="flex flex-col gap-2">
//           <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
//           <p className="text-gray-300 text-sm leading-6">{project.description}</p>
//         </div>

//         {project.techStack?.length > 0 && (
//           <div className="flex flex-wrap gap-2">
//             {project.techStack.map((t: string) => (
//               <span key={t} className="text-xs text-gray-400 bg-gray-800 px-2 py-0.5 rounded">
//                 {t}
//               </span>
//             ))}
//           </div>
//         )}

//         <div className="flex gap-4 text-sm">
//           {project.liveUrl && (
//             <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
//               className="text-blue-400 hover:text-blue-300 transition-colors">
//               Live Demo ↗
//             </a>
//           )}
//           {project.githubUrl && (
//             <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
//               className="text-gray-400 hover:text-gray-200 transition-colors">
//               GitHub ↗
//             </a>
//           )}
//         </div>

//       </div>
//     </main>
//   )
// }







// import { notFound } from 'next/navigation'
// import { client } from '@/sanity/lib/client'
// import ReactMarkdown from 'react-markdown'
// import remarkGfm from 'remark-gfm'
// import rehypeHighlight from 'rehype-highlight'
// import 'highlight.js/styles/github-dark.css'

// async function getProject(slug: string) {
//   return client.fetch(`
//     *[_type == "project" && (slug.current == $slug || _id == $slug)][0] {
//       _id, title, description, techStack, liveUrl, githubUrl, status,
//       "imageUrl": image.asset->url,
//       metrics, content
//     }
//   `, { slug })
// }

// const STATUS_STYLES: Record<string, string> = {
//   'active':      'bg-green-900/40 text-green-400 border border-green-800',
//   'completed':   'bg-blue-900/40  text-blue-400  border border-blue-800',
//   'in-progress': 'bg-yellow-900/40 text-yellow-400 border border-yellow-800',
//   'archived':    'bg-red-900/40   text-red-400   border border-red-800',
// }

// const STATUS_LABEL: Record<string, string> = {
//   'active': '🟢 Active', 'completed': '🔵 Completed',
//   'in-progress': '🟡 In Progress', 'archived': '🔴 Archived',
// }

// const CALLOUT_STYLES: Record<string, { wrap: string; icon: string }> = {
//   tip:     { wrap: 'border-l-4 border-green-500  bg-green-950/30',  icon: '💡' },
//   warning: { wrap: 'border-l-4 border-yellow-500 bg-yellow-950/30', icon: '⚠️' },
//   info:    { wrap: 'border-l-4 border-blue-500   bg-blue-950/30',   icon: 'ℹ️' },
//   danger:  { wrap: 'border-l-4 border-red-500    bg-red-950/30',    icon: '🚨' },
// }

// const LINK_ICON: Record<string, string> = {
//   paper: '📄', dataset: '📦', github: '🐙', link: '🔗',
// }

// const ptComponents: PortableTextComponents = {
//   types: {
//     codeBlock: ({ value }) => (
//       <div className="my-4 rounded-lg overflow-hidden border border-gray-800">
//         {(value.filename || value.language) && (
//           <div className="flex items-center justify-between bg-gray-900 px-4 py-2 border-b border-gray-800">
//             <span className="text-xs text-gray-400 font-mono">{value.filename ?? ''}</span>
//             <span className="text-xs text-gray-500 uppercase tracking-wider">{value.language}</span>
//           </div>
//         )}
//         <pre className="bg-[#0d1117] text-green-300 text-xs font-mono p-4 overflow-x-auto leading-6 whitespace-pre">
//           {value.code}
//         </pre>
//       </div>
//     ),
//     imageBlock: ({ value }) => (
//       <figure className="my-6">
//         {value.imageUrl && (
//           <img src={value.imageUrl} alt={value.alt ?? value.caption ?? ''}
//             className="w-full rounded-lg object-cover" />
//         )}
//         {value.caption && (
//           <figcaption className="text-center text-xs text-gray-500 mt-2 italic">
//             {value.caption}
//           </figcaption>
//         )}
//       </figure>
//     ),
//     callout: ({ value }) => {
//       const s = CALLOUT_STYLES[value.type] ?? CALLOUT_STYLES.info
//       return (
//         <div className={`${s.wrap} rounded-r-lg px-4 py-3 my-4`}>
//           <p className="text-sm text-gray-200 leading-6">
//             <span className="mr-2">{s.icon}</span>{value.text}
//           </p>
//         </div>
//       )
//     },
//     dataTable: ({ value }) => (
//       <div className="my-6 overflow-x-auto">
//         {value.caption && (
//           <p className="text-xs text-gray-500 mb-2 italic">{value.caption}</p>
//         )}
//         <table className="w-full text-sm border-collapse">
//           <thead>
//             <tr>
//               {value.headers?.map((h: string, i: number) => (
//                 <th key={i}
//                   className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 py-2 border-b border-gray-700 bg-gray-900">
//                   {h}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {value.rows?.map((row: { cells: string[] }, ri: number) => (
//               <tr key={ri} className={ri % 2 === 0 ? 'bg-[#0f0f0f]' : 'bg-[#0a0a0a]'}>
//                 {row.cells?.map((cell: string, ci: number) => (
//                   <td key={ci} className="px-3 py-2 text-xs text-gray-300 border-b border-gray-800/50">
//                     {cell}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     ),
//     linkCard: ({ value }) => (
//       <a href={value.url} target="_blank" rel="noopener noreferrer"
//         className="flex items-start gap-3 border border-gray-700 rounded-lg px-4 py-3 my-3 hover:border-gray-500 hover:bg-gray-900/50 transition-all no-underline group">
//         <span className="text-xl mt-0.5">{LINK_ICON[value.kind] ?? '🔗'}</span>
//         <div className="flex flex-col gap-0.5">
//           <span className="text-blue-400 font-medium text-sm group-hover:text-blue-300 transition-colors">
//             {value.label} ↗
//           </span>
//           {value.description && (
//             <span className="text-gray-500 text-xs">{value.description}</span>
//           )}
//         </div>
//       </a>
//     ),
//     mathBlock: ({ value }) => (
//       <div className="my-4 bg-gray-900 border border-gray-800 rounded-lg px-4 py-3">
//         <pre className="text-yellow-300 text-sm font-mono overflow-x-auto">{value.latex}</pre>
//         {value.caption && (
//           <p className="text-xs text-gray-500 mt-1 italic">{value.caption}</p>
//         )}
//       </div>
//     ),
//   },
//   block: {
//     h1:         ({ children }) => <h1 className="text-3xl font-bold mt-10 mb-4 text-white">{children}</h1>,
//     h2:         ({ children }) => <h2 className="text-2xl font-bold mt-8 mb-3 text-white border-b border-gray-800 pb-2">{children}</h2>,
//     h3:         ({ children }) => <h3 className="text-xl font-semibold mt-6 mb-2 text-white">{children}</h3>,
//     h4:         ({ children }) => <h4 className="text-base font-semibold mt-4 mb-1 text-gray-200">{children}</h4>,
//     blockquote: ({ children }) => (
//       <blockquote className="border-l-2 border-blue-500 pl-4 text-gray-400 italic my-4 bg-blue-950/10 py-2 rounded-r">
//         {children}
//       </blockquote>
//     ),
//     normal: ({ children }) => <p className="text-gray-300 text-sm leading-7 my-2">{children}</p>,
//   },
//   list: {
//     bullet:  ({ children }) => <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 my-3 pl-2">{children}</ul>,
//     number:  ({ children }) => <ol className="list-decimal list-inside text-gray-300 text-sm space-y-1 my-3 pl-2">{children}</ol>,
//   },
//   marks: {
//     strong:    ({ children }) => <strong className="text-white font-semibold">{children}</strong>,
//     em:        ({ children }) => <em className="italic text-gray-300">{children}</em>,
//     underline: ({ children }) => <span className="underline underline-offset-2">{children}</span>,
//     s:         ({ children }) => <s className="text-gray-500">{children}</s>,
//     code:      ({ children }) => (
//       <code className="bg-gray-800 text-green-400 text-xs px-1.5 py-0.5 rounded font-mono">{children}</code>
//     ),
//     link: ({ value, children }) => (
//       <a href={value?.href} target={value?.blank ? '_blank' : undefined} rel="noopener noreferrer"
//         className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors">
//         {children}
//       </a>
//     ),
//   },
// }

// export default async function ProjectPost({ params }: { params: Promise<{ slug: string }> }) {
//   const { slug } = await params
//   const project = await getProject(slug)
//   if (!project) return notFound()

//   return (
//     <main className="min-h-screen bg-[#0a0a0a] text-white font-sans px-6 py-24">
//       <div className="max-w-2xl mx-auto flex flex-col gap-6">

//         {/* Cover */}
//         {project.imageUrl && (
//           <img src={project.imageUrl} alt={project.title}
//             className="w-full rounded-lg object-cover max-h-[400px]" />
//         )}

//         {/* Title + status */}
//         <div className="flex flex-col gap-2">
//           <div className="flex items-start justify-between gap-4 flex-wrap">
//             <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
//             {project.status && (
//               <span className={`text-xs px-2.5 py-1 rounded-full font-medium mt-1 ${STATUS_STYLES[project.status]}`}>
//                 {STATUS_LABEL[project.status]}
//               </span>
//             )}
//           </div>
//           <p className="text-gray-400 text-sm leading-6">{project.description}</p>
//         </div>

//         {/* Metrics row */}
//         {project.metrics?.length > 0 && (
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
//             {project.metrics.map((m: { label: string; value: string }, i: number) => (
//               <div key={i} className="flex flex-col gap-1 bg-gray-900 border border-gray-800 rounded-lg px-3 py-2">
//                 <span className="text-xs text-gray-500">{m.label}</span>
//                 <span className="text-base font-semibold text-white">{m.value}</span>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Tech stack */}
//         {project.techStack?.length > 0 && (
//           <div className="flex flex-wrap gap-2">
//             {project.techStack.map((t: string) => (
//               <span key={t} className="text-xs text-gray-400 bg-gray-800 border border-gray-700 px-2 py-0.5 rounded">
//                 {t}
//               </span>
//             ))}
//           </div>
//         )}

//         {/* Links */}
//         <div className="flex gap-4 text-sm">
//           {project.liveUrl && (
//             <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
//               className="text-blue-400 hover:text-blue-300 transition-colors">
//               Live Demo ↗
//             </a>
//           )}
//           {project.githubUrl && (
//             <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
//               className="text-gray-400 hover:text-gray-200 transition-colors">
//               GitHub ↗
//             </a>
//           )}
//         </div>

//         <hr className="border-gray-800" />

//         {/* Notebook body — markdown */}
//         {project.content && (
//           <div className="prose prose-invert prose-sm max-w-none
//             prose-headings:text-white prose-headings:font-bold
//             prose-h2:border-b prose-h2:border-gray-800 prose-h2:pb-2
//             prose-p:text-gray-300 prose-p:leading-7
//             prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300
//             prose-code:bg-gray-800 prose-code:text-green-400 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-xs
//             prose-pre:bg-[#0d1117] prose-pre:border prose-pre:border-gray-800 prose-pre:rounded-lg
//             prose-blockquote:border-l-blue-500 prose-blockquote:text-gray-400
//             prose-strong:text-white prose-li:text-gray-300
//             prose-table:text-sm prose-th:text-gray-400 prose-td:text-gray-300
//             prose-hr:border-gray-800">
//             <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
//               {project.content}
//             </ReactMarkdown>
//           </div>
//         )}

//       </div>
//     </main>
//   )
// }


// import { notFound } from 'next/navigation'
// import { getProjectBySlug } from '@/sanity/lib/queries'
// import MarkdownContent from '@/app/components/MarkdownContent'

// const STATUS_STYLES: Record<string, string> = {
//   'active':      'text-green-400 bg-green-900/30 border border-green-800',
//   'completed':   'text-blue-400  bg-blue-900/30  border border-blue-800',
//   'in-progress': 'text-yellow-400 bg-yellow-900/30 border border-yellow-800',
//   'archived':    'text-red-400   bg-red-900/30   border border-red-800',
// }

// const STATUS_LABEL: Record<string, string> = {
//   'active': '🟢 Active',
//   'completed': '🔵 Completed',
//   'in-progress': '🟡 In Progress',
//   'archived': '🔴 Archived',
// }

// export default async function ProjectPost({ params }: { params: Promise<{ slug: string }> }) {
//   const { slug } = await params
//   const project = await getProjectBySlug(slug)

//   if (!project) return notFound()

//   return (
//     <main className="min-h-screen bg-[#0a0a0a] text-white font-sans px-6 py-24">
//       <div className="max-w-2xl mx-auto flex flex-col gap-6">

//         {/* Cover Image */}
//         {project.imageUrl && (
//           <img
//             src={project.imageUrl}
//             alt={project.title}
//             className="w-full rounded-xl object-cover max-h-[420px]"
//           />
//         )}

//         {/* Title + Status */}
//         <div className="flex items-start justify-between gap-4 flex-wrap">
//           <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
//           {project.status && (
//             <span className={`text-xs px-3 py-1 rounded-full font-medium mt-1 ${STATUS_STYLES[project.status] || 'bg-gray-800 text-gray-400'}`}>
//               {STATUS_LABEL[project.status] || project.status}
//             </span>
//           )}
//         </div>

//         {/* Short Description */}
//         {project.description && (
//           <p className="text-gray-400 text-lg leading-relaxed">{project.description}</p>
//         )}

//         {/* Tech Stack */}
//         {project.techStack && project.techStack.length > 0 && (
//           <div className="flex flex-wrap gap-2">
//             {project.techStack.map((tech: string) => (
//               <span
//                 key={tech}
//                 className="text-xs bg-gray-800 border border-gray-700 px-3 py-1 rounded-full text-gray-400"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         )}

//         {/* Links */}
//         <div className="flex gap-6 text-sm">
//           {project.liveUrl && (
//             <a
//               href={project.liveUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
//             >
//               Live Demo ↗
//             </a>
//           )}
//           {project.githubUrl && (
//             <a
//               href={project.githubUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-400 hover:text-gray-200 transition-colors flex items-center gap-1"
//             >
//               GitHub ↗
//             </a>
//           )}
//         </div>

//         <hr className="border-gray-800 my-8" />

//         {/* Markdown Content - This is the important part */}
//         {project.content ? (
//           <MarkdownContent content={project.content} />
//         ) : (
//           <p className="text-gray-500 italic text-center py-12">No content added yet.</p>
//         )}

//       </div>
//     </main>
//   )
// }


























// import { notFound } from 'next/navigation'
// import { getProjectBySlug } from '@/sanity/lib/queries'
// import MarkdownContent from '@/app/components/MarkdownContent'

// export default async function ProjectPost({ params }: { params: Promise<{ slug: string }> }) {
//   const { slug } = await params
//   const project = await getProjectBySlug(slug)

//   if (!project) return notFound()

//   return (
//     <main className="min-h-screen bg-[#030712] text-white font-sans px-6 py-24">
//       <div className="max-w-2xl mx-auto flex flex-col gap-6">

//         {/* Cover Image */}
//         {project.imageUrl && (
//           <img
//             src={project.imageUrl}
//             alt={project.title}
//             className="w-full rounded-xl object-cover max-h-[420px]"
//           />
//         )}

//         <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>

//         {project.description && (
//           <p className="text-gray-400 text-lg leading-relaxed">{project.description}</p>
//         )}

//         {project.techStack && project.techStack.length > 0 && (
//           <div className="flex flex-wrap gap-2">
//             {project.techStack.map((tech: string) => (
//               <span key={tech} className="text-xs bg-gray-800 px-3 py-1 rounded-full text-gray-400">
//                 {tech}
//               </span>
//             ))}
//           </div>
//         )}

//         <hr className="border-gray-800 my-10" />

//         {/* Markdown Content - Final Version */}
//         {project.content && typeof project.content === 'string' && project.content.trim().length > 10 ? (
//           <div className="prose prose-invert max-w-none">
//             <MarkdownContent content={project.content} />
//           </div>
//         ) : (
//           <p className="text-gray-500 italic py-10">No content found in Sanity.</p>
//         )}

//       </div>
//     </main>
//   )
// }





























import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProjectBySlug } from '@/sanity/lib/queries'
import MarkdownContent from '@/app/components/MarkdownContent'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) return { title: 'Project Not Found' }

  return {
    title: project.title,
    description: project.description ?? 'A project by me.',
    openGraph: {
      title: project.title,
      description: project.description ?? '',
      images: project.imageUrl ? [{ url: project.imageUrl }] : [],
      type: 'article',
    },
    twitter: {
      card: project.imageUrl ? 'summary_large_image' : 'summary',
      title: project.title,
      description: project.description ?? '',
      images: project.imageUrl ? [project.imageUrl] : [],
    },
  }
}

export default async function ProjectPost({ params }: Props) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) return notFound()

  return (
    <main className="min-h-screen bg-[#030712] text-white font-sans px-6 py-24">
      <div className="max-w-2xl mx-auto flex flex-col gap-6">

        {/* Cover Image */}
        {project.imageUrl && (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full rounded-xl object-cover max-h-[420px]"
          />
        )}

        <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>

        {project.description && (
          <p className="text-gray-400 text-lg leading-relaxed">{project.description}</p>
        )}

        {project.techStack && project.techStack.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech: string) => (
              <span key={tech} className="text-xs bg-gray-800 px-3 py-1 rounded-full text-gray-400">
                {tech}
              </span>
            ))}
          </div>
        )}

        <hr className="border-gray-800 my-10" />

        {project.content && typeof project.content === 'string' && project.content.trim().length > 10 ? (
          <div className="prose prose-invert max-w-none">
            <MarkdownContent content={project.content} />
          </div>
        ) : (
          <p className="text-gray-500 italic py-10">No content found in Sanity.</p>
        )}

      </div>
    </main>
  )
}








// import { notFound } from 'next/navigation'
// import { getProjectBySlug } from '@/sanity/lib/queries'
// import MarkdownContent from '@/app/components/MarkdownContent'

// export default async function ProjectPost({ params }: { params: Promise<{ slug: string }> }) {
//   const { slug } = await params
//   const project = await getProjectBySlug(slug)

//   if (!project) return notFound()

//   return (
//     <main className="min-h-screen bg-[#0a0a0a] text-white font-sans px-6 py-24">
//       <div className="max-w-2xl mx-auto flex flex-col gap-6">

//         {/* Cover */}
//         {project.imageUrl && (
//           <img
//             src={project.imageUrl}
//             alt={project.title}
//             className="w-full rounded-xl object-cover max-h-[420px]"
//           />
//         )}

//         {/* Title */}
//         <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>

//         {/* Description */}
//         {project.description && (
//           <p className="text-gray-400 text-lg leading-relaxed">{project.description}</p>
//         )}

//         {/* Tech Stack */}
//         {project.techStack?.length > 0 && (
//           <div className="flex flex-wrap gap-2">
//             {project.techStack.map((tech: string) => (
//               <span key={tech} className="text-xs bg-gray-800 px-3 py-1 rounded-full text-gray-400">
//                 {tech}
//               </span>
//             ))}
//           </div>
//         )}

//         <hr className="border-gray-800 my-8" />

// {/* Markdown Content */}
// {project.content && typeof project.content === 'string' && project.content.trim().length > 0 ? (
//   <MarkdownContent content={project.content} />
// ) : (
//   <p className="text-gray-500 italic">No content added yet.</p>
// )}

//       </div>
//     </main>
//   )
// }
