import { notFound } from 'next/navigation'
import { getPostBySlug } from '@/sanity/lib/queries'
import { PortableText, PortableTextComponents } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import type { Metadata } from 'next'

const ptComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold mt-10 mb-6 text-white">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold mt-10 mb-4 text-white">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-semibold mt-8 mb-3 text-white">{children}</h3>,
    normal: ({ children }) => <p className="text-gray-300 leading-7 my-5">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-600 pl-6 italic text-gray-400 my-8">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-outside ml-6 my-5 space-y-2 text-gray-300">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-outside ml-6 my-5 space-y-2 text-gray-300">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="pl-2">{children}</li>,
    number: ({ children }) => <li className="pl-2">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="text-white font-semibold">{children}</strong>,
    em: ({ children }) => <em className="italic text-gray-300">{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
      >
        {children}
      </a>
    ),
  },
}

// Dynamic metadata based on the post (slug/topic)
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested writing could not be found.',
    }
  }

  return {
    title: post.title,
    description: post.description || 'Read this insightful writing on my blog.',
    // Optional: Add more SEO fields
    openGraph: {
      title: post.title,
      description: post.description,
      // images: post.image ? [post.image] : [], // uncomment if you have an image field
    },
    // You can also add keywords, authors, etc. if available in your post
    // keywords: post.tags || [],
  }
}

export default async function WritingPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) return notFound()

  return (
    <main className="min-h-screen bg-[#030712] text-white font-sans px-6 py-24">
      <div className="max-w-2xl mx-auto flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>
          <p className="text-gray-400 text-sm">{post.description}</p>
          <span className="text-gray-500 text-xs">
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
        </div>

        <hr className="border-gray-800" />

        {post.body && Array.isArray(post.body) && post.body.length > 0 ? (
          <div className="prose prose-invert prose-sm max-w-none">
            <PortableText 
              value={post.body as PortableTextBlock[]} 
              components={ptComponents} 
            />
          </div>
        ) : (
          <div className="py-20 text-center border border-dashed border-gray-700 rounded-2xl">
            <p className="text-gray-500 italic">No content added yet.</p>
          </div>
        )}
      </div>
    </main>
  )
}
