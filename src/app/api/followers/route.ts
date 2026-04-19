// app/api/followers/route.ts
import { NextResponse } from 'next/server'
import { sanityClient } from '@/sanity/lib/queries'

const DOC_ID = 'followers-singleton'

export async function GET() {
  const doc = await sanityClient.fetch(
    `*[_type == "followers" && _id == $id][0]`,
    { id: DOC_ID }
  )

  if (!doc) {
    return NextResponse.json({ followers: [], fakeBoost: 0, total: 0 })
  }

  const real  = doc.followers?.length ?? 0
  const boost = doc.fakeBoost ?? 0
  const total = real + boost

  return NextResponse.json({
    followers: doc.followers ?? [],
    fakeBoost: boost,
    total,
  })
}
