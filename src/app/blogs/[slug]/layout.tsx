import type { Metadata } from 'next'
import { getBlogBySlug } from '@/sanity/lib/queries'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const blog = await getBlogBySlug(slug)

  if (!blog) return { title: 'Post Not Found' }

  return {
    title: blog.title,
    description: blog.excerpt ?? 'Read the latest post.',
    openGraph: {
      title: blog.title,
      description: blog.excerpt ?? '',
      images: blog.coverImageUrl ? [{ url: blog.coverImageUrl }] : [],
      type: 'article',
      publishedTime: blog.publishedAt,
    },
    twitter: {
      card: blog.coverImageUrl ? 'summary_large_image' : 'summary',
      title: blog.title,
      description: blog.excerpt ?? '',
      images: blog.coverImageUrl ? [blog.coverImageUrl] : [],
    },
  }
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
