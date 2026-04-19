import Link from 'next/link'
import { getFeaturedPosts, getFeaturedProjects, getFeaturedExperiences, getProfile } from '@/sanity/lib/queries'
import type { Post, Project, Experience } from '@/sanity/lib/queries'
import FeaturedProjects from '@/app/components/FeaturedProjects';

function fmtDate(d?: string, includeDay = false) {
  if (!d) return ''
  return new Date(d).toLocaleDateString('en-US', {
    month: 'long',
    ...(includeDay ? { day: 'numeric' } : {}),
    year: 'numeric',
  })
}

// ── 1. Add this component at the top of page.tsx (or in its own file) ──────

function VerifiedBadge({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Verified"
    >
      {/* Wavy badge shape */}
      <path
        d="M20 2
           C21.5 2 23.2 3.2 24.4 3.8
           C25.6 4.4 27.6 4.2 29 5
           C30.4 5.8 31.2 7.6 32.2 8.8
           C33.2 10 35 10.8 35.8 12.2
           C36.6 13.6 36.2 15.6 36.6 17
           C37 18.4 38.2 20 38.2 20
           C38.2 20 37 21.6 36.6 23
           C36.2 24.4 36.6 26.4 35.8 27.8
           C35 29.2 33.2 30 32.2 31.2
           C31.2 32.4 30.4 34.2 29 35
           C27.6 35.8 25.6 35.6 24.4 36.2
           C23.2 36.8 21.5 38 20 38
           C18.5 38 16.8 36.8 15.6 36.2
           C14.4 35.6 12.4 35.8 11 35
           C9.6 34.2 8.8 32.4 7.8 31.2
           C6.8 30 5 29.2 4.2 27.8
           C3.4 26.4 3.8 24.4 3.4 23
           C3 21.6 1.8 20 1.8 20
           C1.8 20 3 18.4 3.4 17
           C3.8 15.6 3.4 13.6 4.2 12.2
           C5 10.8 6.8 10 7.8 8.8
           C8.8 7.6 9.6 5.8 11 5
           C12.4 4.2 14.4 4.4 15.6 3.8
           C16.8 3.2 18.5 2 20 2Z"
        fill="#1D9BF0"
      />
      {/* Checkmark */}
      <path
        d="M13 20.5L17.5 25L27 15.5"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}


export default async function Home() {
  const [profile, posts, projects, experiences] = await Promise.all([
    getProfile(),
    getFeaturedPosts(),
    getFeaturedProjects(),
    getFeaturedExperiences(),
  ])

  return (
    <>
      <main className="min-h-screen flex items-center justify-center px-6 py-20 bg-[#030712] text-white font-sans">
        <div className="w-full max-w-2xl flex flex-col gap-12">

          {/* Header */}
          <section className="animate-fadeIn">
            <h1 className="text-4xl font-bold tracking-tight">
              {profile?.name ?? 'Sam'}
            </h1>
            <p className="text-gray-400 mt-2 text-lg">
              {profile?.role ?? 'Software Engineer & Technology Enthusiast'}
            </p>
            <p className="max-w-xl mt-4 text-sm leading-6 text-gray-300">
              {profile?.bio}
            </p>
            <div className="flex gap-6 mt-4 text-sm">
              {profile?.github && (
                <a href={profile.github} target="_blank" rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors">
                  GitHub
                </a>
              )}
              {profile?.twitter && (
                <a href={profile.twitter} target="_blank" rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors">
                  Twitter
                </a>
              )}
            </div>
          </section>

          {/* Selected Writing — latest 3 featured posts */}
          <section className="animate-fadeIn">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Selected Writing</h2>
              <Link href="/writing"
                className="text-sm text-gray-400 hover:text-gray-200 transition-colors">
                View All Posts
              </Link>
            </div>
            <ul className="mt-4 flex flex-col gap-6">
              {posts.map((post: Post) => (
                <li key={post._id}>
                  <Link href={`/writing/${post.slug.current}`}
                    className="text-blue-400 font-medium text-base hover:text-blue-300 transition-colors">
                    {post.title}
                  </Link>
                  <p className="text-gray-400 text-sm mt-1">{post.description}</p>
                  <span className="text-gray-500 text-xs">
                    {fmtDate(post.publishedAt, true)}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Featured Projects — latest 3 featured */}
          <section className="animate-fadeIn">
  <div className="flex justify-between items-center">
    <h2 className="text-2xl font-semibold">Featured Projects</h2>
    <Link href="/projects"
      className="text-sm text-gray-400 hover:text-gray-200 transition-colors">
      View All Projects
    </Link>
  </div>
  <FeaturedProjects projects={projects} />
</section>

          {/* Professional Experience — top 3 by order */}
          <section className="animate-fadeIn">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Professional Experience</h2>
              <Link href="/experience"
                className="text-sm text-gray-400 hover:text-gray-200 transition-colors">
                View Full Resume
              </Link>
            </div>
            <div className="mt-4 flex flex-col gap-6">
              {experiences.map((exp: Experience) => (
                <div key={exp._id}>
                  <p className="text-lg font-medium">{exp.role}</p>
                  {exp.company && (
                    <p className="text-blue-200 text-sm mt-0.5">{exp.company}</p>
                  )}
                  <p className="text-gray-400 text-sm mt-1">{exp.description}</p>
                  <p className="text-gray-500 text-xs mt-1">
                    {exp.current
                      ? `${fmtDate(exp.startDate)} – Present`
                      : `${fmtDate(exp.startDate)} – ${fmtDate(exp.endDate)}`}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Footer
          <footer className="text-center text-xs text-gray-500 pt-10 border-t border-gray-800">
            © {new Date().getFullYear()} {profile?.name ?? 'Sam'}. All rights reserved.
          </footer> */}

        </div>
      </main>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 1s ease-out both; }
      `}</style>
    </>
  )
}
