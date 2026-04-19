import Link from 'next/link'
import { getAllPosts } from '@/sanity/lib/queries'
import type { Post } from '@/sanity/lib/queries'

export const metadata = {
  title: "Writing",
  description: "Thoughts, insights, and tutorials on software engineering, technology, and development.",
  icons: {
    icon: "/favicon.ico", // or /icon.png
  },
};

export default async function Writing() {
  const posts = await getAllPosts()

  return (
    <main className="min-h-screen bg-[#030712] text-white font-sans px-6 py-24">
      <div className="w-full max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight mb-8">Writing</h1>
        <ul className="flex flex-col divide-y divide-gray-800">
          {posts.map((post: Post) => (
            <li key={post._id} className="py-5">
              <Link
                href={`/writing/${post.slug?.current ?? post._id}`}
                className="text-blue-400 font-medium text-base hover:text-blue-300 transition-colors"
              >
                {post.title}
              </Link>
              <p className="text-gray-400 text-sm mt-1 leading-6">{post.description}</p>
              <span className="text-gray-500 text-xs">
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  month: 'long', day: 'numeric', year: 'numeric',
                })}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
