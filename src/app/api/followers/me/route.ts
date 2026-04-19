// app/api/followers/me/route.ts
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'   // adjust path
import { sanityClient } from '@/sanity/lib/queries'

const DOC_ID = 'followers-singleton'

// Helper: ensure the singleton document exists
async function ensureDoc() {
  const existing = await sanityClient.fetch(
    `*[_type == "followers" && _id == $id][0]._id`,
    { id: DOC_ID }
  )
  if (!existing) {
    await sanityClient.createIfNotExists({
      _id:   DOC_ID,
      _type: 'followers',
      fakeBoost: 0,
      followers: [],
    })
  }
}

// POST  → follow
export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  await ensureDoc()

  const userId = session.user.email   // use email as stable ID

  // Check not already following
  const doc = await sanityClient.fetch(
    `*[_type == "followers" && _id == $id][0]`,
    { id: DOC_ID }
  )
  const already = (doc?.followers ?? []).some((f: any) => f.userId === userId)
  if (already) return NextResponse.json({ message: 'Already following' })

  await sanityClient
    .patch(DOC_ID)
    .setIfMissing({ followers: [] })
    .append('followers', [{
      _key:       userId.replace(/[^a-zA-Z0-9]/g, '_'),
      userId,
      name:       session.user.name  ?? '',
      email:      session.user.email ?? '',
      image:      session.user.image ?? '',
      followedAt: new Date().toISOString(),
    }])
    .commit()

  return NextResponse.json({ message: 'Followed' })
}

// DELETE → unfollow
export async function DELETE() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const userId = session.user.email

  await sanityClient
    .patch(DOC_ID)
    .unset([`followers[userId == "${userId}"]`])
    .commit()

  return NextResponse.json({ message: 'Unfollowed' })
}
