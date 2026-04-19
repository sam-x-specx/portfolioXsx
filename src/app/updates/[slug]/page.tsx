'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { getUpdateBySlug } from '@/sanity/lib/queries'
import type { Update } from '@/sanity/lib/queries'
import MarkdownContent from '@/app/components/MarkdownContent'

function fmtViews(n: number) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `${Math.floor(n / 1_000)}K`
  return String(n)
}

export default function UpdatePost() {
  const { slug } = useParams<{ slug: string }>()
  const [update, setUpdate]   = useState<Update | null>(null)
  const [views,  setViews]    = useState('')
  const [missing, setMissing] = useState(false)

  useEffect(() => {
    getUpdateBySlug(slug).then(data => {
      if (!data) { setMissing(true); return }
      setUpdate(data)
      setViews(fmtViews(data.views ?? 0))
    })
    fetch(`/api/views/update/${slug}`, { method: 'POST' })
      .then(r => r.json()).then(d => { if (d.views) setViews(d.views) }).catch(() => {})
  }, [slug])

  if (missing) return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
      <p className="text-gray-500">Update not found.</p>
    </main>
  )
  if (!update) return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
      <p className="text-gray-500 text-sm">Loading...</p>
    </main>
  )

  return (
    <main className="min-h-screen bg-[#030712] text-white font-sans">
      <div className="max-w-2xl mx-auto px-6 py-24 flex flex-col gap-10">

        {/* ── 1. Date ── */}
        <p className="text-xs text-gray-500 tracking-widest uppercase">
          {new Date(update.publishedAt).toLocaleDateString('en-US', {
            month: 'long', day: 'numeric', year: 'numeric',
          })}
        </p>

        {/* ── 2. Big title ── */}
        <h1 className="text-5xl font-bold tracking-tight leading-tight -mt-6">
          {update.heading ?? update.title}
        </h1>

        {/* ── 3. Subtitle / description ── */}
        {update.description && (
          <p className="text-gray-300 text-xl leading-8 -mt-4">
            {update.description}
          </p>
        )}

        {/* ── 4. Views + tags ── */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 -mt-4">
          <span>👁 {views} views</span>
          {update.tags && update.tags.length > 0 && (
            <>
              <span>·</span>
              {update.tags.map((tag: string) => (
                <span key={tag} className="bg-gray-800 text-gray-400 px-2 py-0.5 rounded-full">
                  {tag}
                </span>
              ))}
            </>
          )}
        </div>

        {/* ── 5. Divider ── */}
        <hr className="border-gray-800" />

        {/* ── 6. Markdown content (images, text, etc.) ── */}
        {update.content
          ? <MarkdownContent content={update.content} />
          : <p className="text-gray-600 text-sm italic">No content added yet.</p>
        }

      </div>
    </main>
  )
}
