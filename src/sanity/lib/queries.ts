// import { client } from './client'

// // ── Types ──────────────────────────────────────────────────────

// export interface Profile {
//   _id: string; name: string; role: string; bio: string
//   github?: string; twitter?: string
// }

// export interface Post {
//   _id: string; title: string; slug: { current: string }
//   description: string; publishedAt: string; featured?: boolean
// }

// export interface Project {
//   _id: string; title: string; slug: { current: string }
//   description: string; techStack?: string[]
//   liveUrl?: string; githubUrl?: string
//   featured?: boolean; imageUrl?: string
// }

// export interface Experience {
//   _id: string; role: string; company?: string; description: string
//   startDate: string; endDate?: string; current?: boolean; order?: number
// }

// export interface Blog {
//   _id: string; title: string; slug: { current: string }
//   publishedAt: string; coverImageUrl?: string
//   imageUrls?: string[]; body?: unknown[]; views: number
// }

// export interface Update {
//   _id: string; title: string; heading?: string
//   slug: { current: string }
//   publishedAt: string; body?: unknown[]
//   tags?: string[]; views: number
//   coverImageUrl?: string
// }

// // ── Profile ────────────────────────────────────────────────────

// export async function getProfile(): Promise<Profile | null> {
//   return client.fetch(`*[_type == "profile"][0]`)
// }

// // ── Posts (Writing) ────────────────────────────────────────────

// export async function getAllPosts(): Promise<Post[]> {
//   return client.fetch(`
//     *[_type == "post"] | order(publishedAt desc) {
//       _id, title, slug, description, publishedAt, featured
//     }
//   `)
// }

// // Latest 3 posts for home page — no featured flag needed
// export async function getFeaturedPosts(): Promise<Post[]> {
//   return client.fetch(`
//     *[_type == "post"] | order(coalesce(publishedAt, _createdAt) desc)[0..2] {
//       _id,
//       "title": coalesce(title, "Untitled"),
//       "slug": coalesce(slug, {"current": _id}),
//       description,
//       "publishedAt": coalesce(publishedAt, _createdAt)
//     }
//   `)
// }

// export async function getPostBySlug(slug: string): Promise<Post & { body: unknown[] } | null> {
//   return client.fetch(`
//     *[_type == "post" && slug.current == $slug][0] {
//       _id, title, slug, description, publishedAt, body
//     }
//   `, { slug })
// }

// // ── Projects ───────────────────────────────────────────────────

// export async function getAllProjects(): Promise<Project[]> {
//   return client.fetch(`
//     *[_type == "project"] | order(_createdAt desc) {
//       _id, title, slug, description, techStack, liveUrl, githubUrl, featured,
//       "imageUrl": image.asset->url
//     }
//   `)
// }

// export async function getFeaturedProjects(): Promise<Project[]> {
//   return client.fetch(`
//     *[_type == "project" && featured == true] | order(_createdAt desc)[0..2] {
//       _id, title, slug, description, techStack, liveUrl, githubUrl,
//       "imageUrl": image.asset->url
//     }
//   `)
// }

// // ── Experience ─────────────────────────────────────────────────

// export async function getExperiences(): Promise<Experience[]> {
//   return client.fetch(`
//     *[_type == "experience"] | order(order asc) {
//       _id, role, company, description, startDate, endDate, current
//     }
//   `)
// }

// // Featured = 3 most recent (no boolean needed, just slice)
// export async function getFeaturedExperiences(): Promise<Experience[]> {
//   return client.fetch(`
//     *[_type == "experience"] | order(order asc)[0..2] {
//       _id, role, company, description, startDate, endDate, current
//     }
//   `)
// }

// // ── Blogs ──────────────────────────────────────────────────────

// export async function getAllBlogs(): Promise<Blog[]> {
//   return client.fetch(`
//     *[_type == "blog"] | order(coalesce(publishedAt, _createdAt) desc) {
//       _id,
//       "title": coalesce(title, "Untitled"),
//       "slug": coalesce(slug, {"current": _id}),
//       "publishedAt": coalesce(publishedAt, _createdAt),
//       "views": coalesce(views, 0),
//       "coverImageUrl": coverImage.asset->url,
//       "imageUrls": images[].asset->url
//     }
//   `)
// }

// export async function getBlogBySlug(slug: string): Promise<Blog | null> {
//   return client.fetch(`
//     *[_type == "blog" && (slug.current == $slug || _id == $slug)][0] {
//       _id,
//       "title": coalesce(title, "Untitled"),
//       "slug": coalesce(slug, {"current": _id}),
//       "publishedAt": coalesce(publishedAt, _createdAt),
//       "views": coalesce(views, 0),
//       body,
//       "coverImageUrl": coverImage.asset->url,
//       "imageUrls": images[].asset->url
//     }
//   `, { slug })
// }

// // ── Updates ────────────────────────────────────────────────────

// export async function getAllUpdates(): Promise<Update[]> {
//   return client.fetch(`
//     *[_type == "update"] | order(coalesce(publishedAt, _createdAt) desc) {
//       _id,
//       "title": coalesce(title, "Untitled"),
//       "slug": coalesce(slug, {"current": _id}),
//       "publishedAt": coalesce(publishedAt, _createdAt),
//       "views": coalesce(views, 0),
//       tags
//     }
//   `)
// }

// export async function getUpdateBySlug(slug: string): Promise<Update | null> {
//   return client.fetch(`
//     *[_type == "update" && (slug.current == $slug || _id == $slug)][0] {
//       _id,
//       "title":      coalesce(title, "Untitled"),
//       "heading":    coalesce(heading, title, "Untitled"),
//       "slug":       coalesce(slug, {"current": _id}),
//       "publishedAt": coalesce(publishedAt, _createdAt),
//       "views":      coalesce(views, 0),
//       "coverImageUrl": coverImage.asset->url,
//       body, tags
//     }
//   `, { slug })
// }




import { client } from './client'

// ── Types ──────────────────────────────────────────────────────

export interface Profile {
  _id: string; name: string; role: string; bio: string
  github?: string; twitter?: string; footerTagline?: string
}
export interface Post {
  _id: string; title: string; slug: { current: string }
  description: string; publishedAt: string; content?: string
}
export interface Project {
  _id: string; title: string; slug: { current: string }
  description: string; techStack?: string[]
  liveUrl?: string; githubUrl?: string
  featured?: boolean; imageUrl?: string
  status?: string; metrics?: { label: string; value: string }[]
  content?: string
}
export interface Experience {
  _id: string; role: string; company?: string; description: string
  startDate: string; endDate?: string; current?: boolean; order?: number
}
export interface Blog {
  _id: string; title: string; slug: { current: string }
  publishedAt: string; coverImageUrl?: string; description?: string
  imageUrls?: string[]; content?: string; views: number
}
export interface Update {
  _id: string; title: string; heading?: string
  slug: { current: string }; publishedAt: string
  coverImageUrl?: string; content?: string
  tags?: string[]; views: number
}

// ── Profile ────────────────────────────────────────────────────

export async function getProfile(): Promise<Profile | null> {
  return client.fetch(`*[_type == "profile"][0]{ _id, name, role, bio, github, twitter, footerTagline }`)
}

// ── Posts ──────────────────────────────────────────────────────

// export async function getAllPosts(): Promise<Post[]> {
//   return client.fetch(`
//     *[_type == "post"] | order(coalesce(publishedAt, _createdAt) desc) {
//       _id,
//       "title": coalesce(title, "Untitled"),
//       "slug": coalesce(slug, {"current": _id}),
//       description,
//       "publishedAt": coalesce(publishedAt, _createdAt)
//     }
//   `)
// }

// export async function getFeaturedPosts(): Promise<Post[]> {
//   return client.fetch(`
//     *[_type == "post"] | order(coalesce(publishedAt, _createdAt) desc)[0..2] {
//       _id,
//       "title": coalesce(title, "Untitled"),
//       "slug": coalesce(slug, {"current": _id}),
//       description,
//       "publishedAt": coalesce(publishedAt, _createdAt)
//     }
//   `)
// }

// export async function getPostBySlug(slug: string): Promise<Post | null> {
//   return client.fetch(`
//     *[_type == "post" && (slug.current == $slug || _id == $slug)][0] {
//       _id,
//       "title": coalesce(title, "Untitled"),
//       "slug": coalesce(slug, {"current": _id}),
//       description,
//       "publishedAt": coalesce(publishedAt, _createdAt),
//       content
//     }
//   `, { slug })
// }





// ── Post Interface (Updated)
export interface Post {
  _id: string
  title: string
  slug: { current: string }
  description: string
  publishedAt: string
  body?: any[]           // ← Important: body is an array
}

// ── Get All Posts
export async function getAllPosts(): Promise<Post[]> {
  return client.fetch(`
    *[_type == "post"] | order(coalesce(publishedAt, _createdAt) desc) {
      _id,
      "title": coalesce(title, "Untitled"),
      "slug": coalesce(slug, {"current": _id}),
      description,
      "publishedAt": coalesce(publishedAt, _createdAt)
      // body not needed here for list page
    }
  `)
}

// ── Get Featured Posts (for homepage)
export async function getFeaturedPosts(): Promise<Post[]> {
  return client.fetch(`
    *[_type == "post"] | order(coalesce(publishedAt, _createdAt) desc)[0..2] {
      _id,
      "title": coalesce(title, "Untitled"),
      "slug": coalesce(slug, {"current": _id}),
      description,
      "publishedAt": coalesce(publishedAt, _createdAt)
    }
  `)
}

// ── Get Single Post by Slug (This is the important one)
export async function getPostBySlug(slug: string): Promise<Post | null> {
  return client.fetch(`
    *[_type == "post" && (slug.current == $slug || _id == $slug)][0] {
      _id,
      "title": coalesce(title, "Untitled"),
      "slug": coalesce(slug, {"current": _id}),
      description,
      "publishedAt": coalesce(publishedAt, _createdAt),
      body                    // ← Must be "body", not "content"
    }
  `, { slug })
}















// ── Projects ───────────────────────────────────────────────────

export async function getAllProjects(): Promise<Project[]> {
  return client.fetch(`
    *[_type == "project"] | order(_createdAt desc) {
      _id,
      "title": coalesce(title, "Untitled"),
      "slug": coalesce(slug, {"current": _id}),
      description, techStack, liveUrl, githubUrl, featured, status, metrics,
      "imageUrl": image.asset->url
    }
  `)
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return client.fetch(`
    *[_type == "project" && featured == true] | order(_createdAt desc)[0..2] {
      _id,
      "title": coalesce(title, "Untitled"),
      "slug": coalesce(slug, {"current": _id}),
      description, techStack, liveUrl, githubUrl, status,
      "imageUrl": image.asset->url
    }
  `)
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return client.fetch(`
    *[_type == "project" && (slug.current == $slug || _id == $slug)][0] {
      _id,
      "title": coalesce(title, "Untitled"),
      "slug": coalesce(slug, {"current": _id}),
      description, techStack, liveUrl, githubUrl, status, metrics,
      "imageUrl": image.asset->url,
      content
    }
  `, { slug })
}

// ── Experience ─────────────────────────────────────────────────

export async function getExperiences(): Promise<Experience[]> {
  return client.fetch(`
    *[_type == "experience"] | order(order asc) {
      _id, role, company, description, startDate, endDate, current
    }
  `)
}

export async function getFeaturedExperiences(): Promise<Experience[]> {
  return client.fetch(`
    *[_type == "experience"] | order(order asc)[0..2] {
      _id, role, company, description, startDate, endDate, current
    }
  `)
}

// ── Blogs ──────────────────────────────────────────────────────

export async function getAllBlogs(): Promise<Blog[]> {
  return client.fetch(`
    *[_type == "blog"] | order(coalesce(publishedAt, _createdAt) desc) {
      _id,
      "title": coalesce(title, "Untitled"),
      "slug": coalesce(slug, {"current": _id}),
      "publishedAt": coalesce(publishedAt, _createdAt),
      "views": coalesce(views, 0),
      description,
      "coverImageUrl": coverImage.asset->url,
      "imageUrls": images[].asset->url
    }
  `)
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  return client.fetch(`
    *[_type == "blog" && (slug.current == $slug || _id == $slug)][0] {
      _id,
      "title": coalesce(title, "Untitled"),
      "slug": coalesce(slug, {"current": _id}),
      "publishedAt": coalesce(publishedAt, _createdAt),
      "views": coalesce(views, 0),
      "coverImageUrl": coverImage.asset->url,
      "imageUrls": images[].asset->url,
      description,
      content
    }
  `, { slug })
}

// ── Updates ────────────────────────────────────────────────────

// export async function getAllUpdates(): Promise<Update[]> {
//   return client.fetch(`
//     *[_type == "update"] | order(coalesce(publishedAt, _createdAt) desc) {
//       _id,
//       "title": coalesce(title, "Untitled"),
//       "slug": coalesce(slug, {"current": _id}),
//       "publishedAt": coalesce(publishedAt, _createdAt),
//       "views": coalesce(views, 0),
//       tags
//     }
//   `)
// }

// export async function getUpdateBySlug(slug: string): Promise<Update | null> {
//   return client.fetch(`
//     *[_type == "update" && (slug.current == $slug || _id == $slug)][0] {
//       _id,
//       "title":      coalesce(title, "Untitled"),
//       "heading":    coalesce(heading, title, "Untitled"),
//       "slug":       coalesce(slug, {"current": _id}),
//       "publishedAt": coalesce(publishedAt, _createdAt),
//       "views":      coalesce(views, 0),
//       "coverImageUrl": coverImage.asset->url,
//       content, tags
//     }
//   `, { slug })
// }



export interface Update {
  _id: string; title: string; heading?: string; description?: string
  slug: { current: string }; publishedAt: string
  coverImageUrl?: string; content?: string
  tags?: string[]; views: number
}

export async function getAllUpdates(): Promise<Update[]> {
  return client.fetch(`
    *[_type == "update"] | order(coalesce(publishedAt, _createdAt) desc) {
      _id,
      "title": coalesce(title, "Untitled"),
      "slug": coalesce(slug, {"current": _id}),
      "publishedAt": coalesce(publishedAt, _createdAt),
      "views": coalesce(views, 0),
      "coverImageUrl": coverImage.asset->url,
      tags
    }
  `)
}

export async function getUpdateBySlug(slug: string): Promise<Update | null> {
  return client.fetch(`
    *[_type == "update" && (slug.current == $slug || _id == $slug)][0] {
      _id,
      "title":      coalesce(title, "Untitled"),
      "heading":    coalesce(heading, title, "Untitled"),
      "slug":       coalesce(slug, {"current": _id}),
      "publishedAt": coalesce(publishedAt, _createdAt),
      "views":      coalesce(views, 0),
      description,
      content,
      tags
    }
  `, { slug })
}

export interface ContactLink {
  _id: string
  appName: string
  handle?: string
  description?: string
  url: string
  order?: number
}

export async function getContactLinks(): Promise<ContactLink[]> {
  return client.fetch(
    `*[_type == "contactLink"] | order(order asc) {
      _id, appName, handle, description, url, order
    }`
  )
}




import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,   // needs write permission
  useCdn: false,
})





// sanity/lib/queries.ts

/**
 * Fetch all published code blocks for the card grid.
 * "Published" = publishedAt is set AND publishedAt <= now()
 */
export const ALL_CODEBLOCKS_QUERY = `
  *[
    _type == "codeblock"
    && defined(publishedAt)
    && publishedAt <= now()
  ] | order(publishedAt desc) {
    _id,
    title,
    slug,
    abbreviation,
    shortDescription,
    language,
    topic,
    fileExtension
  }
`;

/**
 * Fetch a single published code block by slug.
 */
export const CODEBLOCK_BY_SLUG_QUERY = `
  *[
    _type == "codeblock"
    && slug.current == $slug
    && defined(publishedAt)
    && publishedAt <= now()
  ][0] {
    title,
    slug,
    abbreviation,
    shortDescription,
    description,
    code,
    language,
    fileExtension,
    topic,
    author,
    publishedAt
  }
`;

/**
 * Fetch only slugs of published code blocks — used in generateStaticParams.
 */
export const ALL_CODEBLOCK_SLUGS_QUERY = `
  *[
    _type == "codeblock"
    && defined(publishedAt)
    && publishedAt <= now()
  ] {
    "slug": slug.current
  }
`;
