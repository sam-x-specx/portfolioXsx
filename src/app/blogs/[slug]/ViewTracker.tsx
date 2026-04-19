'use client'

import { useEffect, useState } from 'react'

interface Props {
  slug: string
  type: 'blog' | 'update'
  initialViews: string
}

export default function ViewTracker({ slug, type, initialViews }: Props) {
  const [views, setViews] = useState(initialViews)

  useEffect(() => {
    fetch(`/api/views/${type}/${slug}`, { method: 'POST' })
      .then(r => r.json())
      .then(d => { if (d.views) setViews(d.views) })
      .catch(() => {})
  }, [slug, type])

  return <span>👁 {views} views</span>
}
