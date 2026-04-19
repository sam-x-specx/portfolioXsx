'use client'

import { useEffect, useState, useRef } from 'react'
import { useParams } from 'next/navigation'
import { getBlogBySlug } from '@/sanity/lib/queries'
import type { Blog } from '@/sanity/lib/queries'
import MarkdownContent from '@/app/components/MarkdownContent'

function fmtViews(n: number) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `${Math.floor(n / 1_000)}K`
  return String(n)
}

function ImageCarousel({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0)
  const [dragging, setDragging] = useState(false)
  const startX = useRef(0)
  const total = images.length

  const prev = () => setCurrent(i => (i - 1 + total) % total)
  const next = () => setCurrent(i => (i + 1) % total)

  const onMouseDown = (e: React.MouseEvent) => {
    setDragging(true)
    startX.current = e.clientX
  }
  const onMouseUp = (e: React.MouseEvent) => {
    if (!dragging) return
    setDragging(false)
    const diff = startX.current - e.clientX
    if (diff > 40) next()
    else if (diff < -40) prev()
  }

  return (
    <div className="flex flex-col gap-3">

      {/* Main image */}
      <div
        className="relative w-full aspect-[4/3] overflow-hidden cursor-grab active:cursor-grabbing select-none"
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
      >
        {images.map((url, i) => (
          <img
            key={i}
            src={url}
            alt={`img ${i + 1}`}
            draggable={false}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              i === current ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        {/* Prev / Next arrows */}
        {total > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Counter badge */}
        <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-0.5 rounded-full">
          {current + 1} / {total}
        </div>
      </div>

      {/* Dot indicators */}
      {total > 1 && (
        <div className="flex justify-center gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-5 h-1.5 bg-white'
                  : 'w-1.5 h-1.5 bg-gray-600 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      )}

      {/* Thumbnail strip */}
      {total > 1 && (
        <div className="flex gap-2 overflow-x-auto scrollbar-none pb-1">
          {images.map((url, i) => (
            <button type='button'
              key={i}
              onClick={() => setCurrent(i)}
              className={`flex-shrink-0 w-14 h-14 overflow-hidden rounded transition-all duration-200 ${
                i === current
                  ? 'ring-2 ring-white opacity-100'
                  : 'opacity-40 hover:opacity-70'
              }`}
            >
              <img src={url} alt={`thumb ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}

    </div>
  )
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const [blog, setBlog]   = useState<Blog | null>(null)
  const [views, setViews] = useState('')

  useEffect(() => {
    getBlogBySlug(slug).then(data => {
      if (data) { setBlog(data); setViews(fmtViews(data.views ?? 0)) }
    })
    fetch(`/api/views/blog/${slug}`, { method: 'POST' })
      .then(r => r.json()).then(d => { if (d.views) setViews(d.views) }).catch(() => {})
  }, [slug])

  if (!blog) return (
    <main className="min-h-screen bg-[#030712] text-white font-sans flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-5 h-5 rounded-full border-2 border-gray-700 border-t-gray-400 animate-spin" />
        {/* <p className="text-gray-600 text-xs">Loading...</p> */}
      </div>
    </main>

  )

  return (
    <main className="min-h-screen bg-[#030712] text-white font-sans px-6 py-24">
      <div className="max-w-2xl mx-auto flex flex-col gap-6">

        {/* Cover image */}
        {blog.coverImageUrl && (
          <img src={blog.coverImageUrl} alt={blog.title}
            className="w-full object-cover max-h-[480px]" />
        )}

        {/* Title + meta */}
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold tracking-tight">{blog.title}</h1>
          <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
            <span>
              {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                month: 'long', day: 'numeric', year: 'numeric',
              })}
            </span>
            <span>·</span>
            <span>👁 {views} views</span>
          </div>
        </div>

        {/* Additional images */}
        {blog.imageUrls && blog.imageUrls.length > 0 && (
          <div className="flex gap-3 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {blog.imageUrls.map((url, i) => (
              <img key={i} src={url} alt={`img ${i + 1}`}
                className="h-48 w-auto object-cover flex-shrink-0 rounded-lg" />
            ))}
          </div>
        )}

        <hr className="border-gray-800" />

        {/* Markdown content */}
        {blog.content
          ? <MarkdownContent content={blog.content} />
          : <p className="text-gray-600 text-sm italic">No content added yet.</p>
        }

      </div>
    </main>
  )
}
