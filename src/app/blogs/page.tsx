// // blogs/page.tsx

// import Link from 'next/link'
// import { getAllBlogs } from '@/sanity/lib/queries'
// import type { Blog } from '@/sanity/lib/queries'

// function fmtDate(d: string) {
//   return new Date(d).toLocaleDateString('en-US', {
//     month: 'long', day: '2-digit', year: 'numeric',
//   }).toUpperCase()
// }

// export default async function BlogsPage() {
//   const blogs = await getAllBlogs()

//   return (
//     <main className="min-h-screen bg-[#030712] text-white font-sans px-6 py-24">
//       <div className="max-w-2xl mx-auto">
//         <h1 className="text-3xl font-bold tracking-tight mb-10">Blogs</h1>

//         {blogs.length === 0 && (
//           <p className="text-gray-500 text-sm">No posts yet.</p>
//         )}

//         <div className="grid grid-cols-2 gap-x-8 gap-y-14">
//           {blogs.map((blog: Blog) => (
//             <div key={blog._id} className="flex flex-col gap-3">

//               {/* Image */}
//               <Link href={`/blogs/${blog.slug?.current ?? blog._id}`} className="block group overflow-hidden">
//                 {blog.coverImageUrl ? (
//                   <img
//                     src={blog.coverImageUrl}
//                     alt={blog.title}
//                     className="w-full aspect-[4/3] object-cover group-hover:opacity-90 transition-opacity duration-300"
//                   />
//                 ) : (
//                   <div className="w-full aspect-[4/3] bg-gray-900 flex items-center justify-center text-gray-600 text-sm">
//                     No image
//                   </div>
//                 )}
//               </Link>

//               {/* Title */}
//               <Link href={`/blogs/${blog.slug?.current ?? blog._id}`}
//                 className="text-white font-semibold text-base leading-snug hover:text-gray-300 transition-colors">
//                 {blog.title}
//               </Link>

//               {/* Description */}
//               {blog.description && (
//                 <p className="text-gray-400 text-sm leading-6 line-clamp-2">
//                   {blog.description}
//                 </p>
//               )}

//               {/* Date + Read button */}
//               <div className="flex items-center justify-between mt-auto pt-2">
//                 <span className="text-gray-600 text-xs tracking-widest">
//                   {fmtDate(blog.publishedAt)}
//                 </span>
//                 <Link
//                   href={`/blogs/${blog.slug?.current ?? blog._id}`}
//                   className="text-xs font-semibold tracking-widest border border-gray-600 text-white px-4 py-1.5 rounded-full hover:border-white transition-colors"
//                 >
//                   READ
//                 </Link>
//               </div>

//             </div>
//           ))}
//         </div>
//       </div>
//     </main>
//   )
// }





// blogs/page.tsx

import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllBlogs } from '@/sanity/lib/queries'
import type { Blog } from '@/sanity/lib/queries'

export const metadata: Metadata = {
  title: 'Blogs',
  description: 'Thoughts, writing, and ideas.',
  openGraph: {
    title: 'Blogs',
    description: 'Thoughts, writing, and ideas.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Blogs',
    description: 'Thoughts, writing, and ideas.',
  },
}

function fmtDate(d: string) {
  return new Date(d).toLocaleDateString('en-US', {
    month: 'long', day: '2-digit', year: 'numeric',
  }).toUpperCase()
}

export default async function BlogsPage() {
  const blogs = await getAllBlogs()

  return (
    <main className="min-h-screen bg-[#030712] text-white font-sans px-6 py-24">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight mb-10">Blogs</h1>

        {blogs.length === 0 && (
          <p className="text-gray-500 text-sm">No posts yet.</p>
        )}

        <div className="grid grid-cols-2 gap-x-8 gap-y-14">
          {blogs.map((blog: Blog) => (
            <div key={blog._id} className="flex flex-col gap-3">

              {/* Image */}
              <Link href={`/blogs/${blog.slug?.current ?? blog._id}`} className="block group overflow-hidden">
                {blog.coverImageUrl ? (
                  <img
                    src={blog.coverImageUrl}
                    alt={blog.title}
                    className="w-full aspect-[4/3] object-cover group-hover:opacity-90 transition-opacity duration-300"
                  />
                ) : (
                  <div className="w-full aspect-[4/3] bg-gray-900 flex items-center justify-center text-gray-600 text-sm">
                    No image
                  </div>
                )}
              </Link>

              {/* Title */}
              <Link href={`/blogs/${blog.slug?.current ?? blog._id}`}
                className="text-white font-semibold text-base leading-snug hover:text-gray-300 transition-colors">
                {blog.title}
              </Link>

              {/* Description */}
              {blog.description && (
                <p className="text-gray-400 text-sm leading-6 line-clamp-2">
                  {blog.description}
                </p>
              )}

              {/* Date + Read button */}
              <div className="flex items-center justify-between mt-auto pt-2">
                <span className="text-gray-600 text-xs tracking-widest">
                  {fmtDate(blog.publishedAt)}
                </span>
                <Link
                  href={`/blogs/${blog.slug?.current ?? blog._id}`}
                  className="text-xs font-semibold tracking-widest border border-gray-600 text-white px-4 py-1.5 rounded-full hover:border-white transition-colors"
                >
                  READ
                </Link>
              </div>

            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
