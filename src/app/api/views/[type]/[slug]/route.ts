// // Increments view count for blog or update documents.
// // Called client-side on page load. Uses a WRITE token stored in env.
// // SANITY_API_WRITE_TOKEN must be set in .env.local

// import { NextRequest, NextResponse } from 'next/server'
// import { createClient } from '@sanity/client'

// const writeClient = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
//   dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET!,
//   apiVersion: '2024-01-01',
//   token:  process.env.SANITY_API_WRITE_TOKEN,   // server-only, never exposed
//   useCdn: false,
// })

// // Format: 1234567 → "1.2M", 234000 → "234K", 999 → "999"
// export function fmtViews(n: number): string {
//   if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
//   if (n >= 1_000)     return `${Math.floor(n / 1_000)}K`
//   return String(n)
// }

// export async function POST(
//   req: Request,
//   { params }: { params: Promise<{ type: string; slug: string }> }
// ) {
//   const { type, slug } = await params

//   // Only allow blog and update types
//   if (!['blog', 'update'].includes(type)) {
//     return NextResponse.json({ error: 'Invalid type' }, { status: 400 })
//   }

//   try {
//     const doc = await writeClient.fetch<{ _id: string; views: number } | null>(
//       `*[_type == $type && slug.current == $slug][0]{ _id, views }`,
//       { type, slug }
//     )

//     if (!doc) return NextResponse.json({ error: 'Not found' }, { status: 404 })

//     const updated = await writeClient
//       .patch(doc._id)
//       .set({ views: (doc.views ?? 0) + 1 })
//       .commit()

//     return NextResponse.json({ views: fmtViews(updated.views as number) })
//   } catch (err) {
//     console.error('View increment error:', err)
//     return NextResponse.json({ error: 'Server error' }, { status: 500 })
//   }
// }



import { NextRequest, NextResponse } from 'next/server'
// Import your Sanity client or database logic here
// import { client } from '@/sanity/lib/client'

export async function POST(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug

  try {
    // TODO: Increment the view count in your database (Sanity, Prisma, etc.)
    // Example with Sanity (you'll need to adjust):
    // await client.patch(slug).inc({ views: 1 }).commit()

    // For now, return current/fake views (replace with real logic)
    const newViews = 42 // ← replace with actual incremented value

    return NextResponse.json({ views: newViews })
  } catch (error) {
    console.error('Error updating views:', error)
    return NextResponse.json({ error: 'Failed to update views' }, { status: 500 })
  }
}
