// 'use client';

// import { useEffect, useState } from 'react';
// import Link from 'next/link';

// export default function Navbar() {
//   const [showNavbar, setShowNavbar] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY > lastScrollY) {
//         setShowNavbar(false); // Scrolling down - hide
//       } else {
//         setShowNavbar(true); // Scrolling up - show
//       }

//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [lastScrollY]);

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
//         showNavbar ? 'translate-y-0' : '-translate-y-full'
//       } backdrop-blur-md bg-black/30 border-b border-gray-700 text-white`}
//     >
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         <h1 className="text-xl font-bold">Sam</h1>
//         <div className="space-x-6 text-sm hidden md:flex">
//           <Link href="/">Home</Link>
//           <Link href="/writing">Writing</Link>
//           <Link href="/blogs">Blogs</Link>
//           <Link href="/experience">Experience</Link>
//         </div>
//       </div>
//     </nav>
//   );
// }


// 'use client'

// import { useEffect, useState } from 'react'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'

// const NAV_LINKS = [
//   { label: 'Home',       href: '/' },
//   { label: 'Writing',    href: '/writing' },
//   { label: 'Blogs',      href: '/blogs' },
//   { label: 'Projects',   href: '/projects' },
//   { label: 'Experience', href: '/experience' },
//   { label: 'Updates',    href: '/updates' },
// ]

// export default function Navbar() {
//   const [visible, setVisible] = useState(true)
//   const [lastY, setLastY]     = useState(0)
//   const pathname              = usePathname()

//   useEffect(() => {
//     const onScroll = () => {
//       const y = window.scrollY
//       setVisible(y < lastY || y < 10)
//       setLastY(y)
//     }
//     window.addEventListener('scroll', onScroll, { passive: true })
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [lastY])

//   return (
//     <nav className={`
//       fixed top-0 left-0 w-full z-50
//       backdrop-blur-md bg-black/30 border-b border-gray-800 text-white
//       transition-transform duration-300
//       ${visible ? 'translate-y-0' : '-translate-y-full'}
//     `}>
//       <div className="max-w-2xl mx-auto px-0 py-4 flex justify-between items-center">
//         <Link href="/" className="text-base font-bold tracking-tight hover:text-gray-300 transition-colors">
//           Sam
//         </Link>
//         <div className="flex gap-6 text-sm">
//           {NAV_LINKS.map(({ label, href }) => (
//             <Link
//               key={href}
//               href={href}
//               className={`transition-colors hover:text-white ${
//                 pathname === href ? 'text-white font-medium' : 'text-gray-400'
//               }`}
//             >
//               {label}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </nav>
//   )
// }






// 'use client'

// import { useEffect, useRef, useState } from 'react'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'

// const NAV_LINKS = [
//   { label: 'Home',       href: '/' },
//   { label: 'Writing',    href: '/writing' },
//   { label: 'Blogs',      href: '/blogs' },
//   { label: 'Projects',   href: '/projects' },
//   { label: 'Experience', href: '/experience' },
//   { label: 'Updates',    href: '/updates' },
// ]

// export default function Navbar() {
//   const [visible,  setVisible]  = useState(true)
//   const [menuOpen, setMenuOpen] = useState(false)
//   const lastY                   = useRef(0)
//   const pathname                = usePathname()

//   useEffect(() => {
//     const onScroll = () => {
//       const y = window.scrollY
//       setVisible(y < lastY.current || y < 10)
//       lastY.current = y
//     }
//     window.addEventListener('scroll', onScroll, { passive: true })
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   useEffect(() => { setMenuOpen(false) }, [pathname])

//   return (
//     <>
//       <nav className={`
//         fixed top-0 left-0 w-full z-50
//          text-white
//         transition-transform duration-300
//         ${visible ? 'translate-y-0' : '-translate-y-full'}
//       `}
//         style={{
//           backdropFilter:       'blur(20px)',
//           WebkitBackdropFilter: 'blur(20px)',
//           backgroundColor:      'rgba(0, 0, 0, 0.5)',
//         }}
//       >
//         <div className="max-w-2xl mx-auto px-6 md:px-0 py-4 flex justify-between items-center">

//           <Link href="/" className="text-base font-bold tracking-tight hover:text-gray-300 transition-colors">
//             Sam
//           </Link>

//           {/* Desktop */}
//           <div className="hidden md:flex gap-6 text-sm">
//             {NAV_LINKS.map(({ label, href }) => (
//               <Link key={href} href={href}
//                 className={`transition-colors hover:text-white ${
//                   pathname === href ? 'text-white font-medium' : 'text-gray-400'
//                 }`}>
//                 {label}
//               </Link>
//             ))}
//           </div>

//           {/* Hamburger */}
//           <button
//             type="button"
//             onClick={() => setMenuOpen(o => !o)}
//             className="md:hidden text-white p-2"
//             aria-label="Toggle menu"
//           >
//             {menuOpen ? (
//               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             ) : (
//               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             )}
//           </button>
//         </div>

//         {/* Mobile menu — outer div handles height animation */}
//         <div className={`md:hidden overflow-hidden transition-all duration-300 ${
//           menuOpen ? 'max-h-96' : 'max-h-0'
//         }`}>
//           {/* inner div handles blur + rounded corners */}
//           <div
//             style={{
//               backdropFilter:          'blur(20px)',
//               WebkitBackdropFilter:    'blur(20px)',
//               backgroundColor:         'rgba(0, 0, 0, 0.1)',
//               borderBottomLeftRadius:  '20px',
//               borderBottomRightRadius: '20px',
//               borderTop: '1px solid rgba(255,255,255,0.1)',
//               // borderRadius: '20px',
//             }}
//           >
//             <div className="flex flex-col px-6 py-4 gap-4">
//               {NAV_LINKS.map(({ label, href }) => (
//                 <Link key={href} href={href}
//                   className={`text-sm transition-colors hover:text-white ${
//                     pathname === href ? 'text-white font-medium' : 'text-gray-400'
//                   }`}>
//                   {label}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   )
// }














// 'use client'

// import { useEffect, useRef, useState } from 'react'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { useSession, signIn, signOut } from 'next-auth/react'

// const NAV_LINKS = [
//   { label: 'Home',       href: '/' },
//   { label: 'Writing',    href: '/writing' },
//   { label: 'Blogs',      href: '/blogs' },
//   { label: 'Projects',   href: '/projects' },
//   { label: 'Experience', href: '/experience' },
//   { label: 'Updates',    href: '/updates' },
// ]

// export default function Navbar() {
//   const [visible,  setVisible]  = useState(true)
//   const [menuOpen, setMenuOpen] = useState(false)
//   const lastY                   = useRef(0)
//   const pathname                = usePathname()
//   const { data: session }       = useSession()

//   useEffect(() => {
//     const onScroll = () => {
//       const y = window.scrollY
//       setVisible(y < lastY.current || y < 10)
//       lastY.current = y
//     }
//     window.addEventListener('scroll', onScroll, { passive: true })
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   useEffect(() => { setMenuOpen(false) }, [pathname])

//   return (
//     <>
//       <nav
//         className={`
//           fixed top-0 left-0 w-full z-50 text-white
//           transition-transform duration-300
//           ${visible ? 'translate-y-0' : '-translate-y-full'}
//         `}
//         style={{
//           backdropFilter:       'blur(20px)',
//           WebkitBackdropFilter: 'blur(20px)',
//           backgroundColor:      'rgba(0, 0, 0, 0.5)',
//         }}
//       >
//         <div className="max-w-2xl mx-auto px-6 md:px-0 py-4 flex justify-between items-center">

//           <Link href="/" className="text-base font-bold tracking-tight hover:text-gray-300 transition-colors">
//             Sam
//           </Link>

//           {/* Desktop links */}
//           <div className="hidden md:flex items-center gap-6 text-sm">
//             {NAV_LINKS.map(({ label, href }) => (
//               <Link key={href} href={href}
//                 className={`transition-colors hover:text-white ${
//                   pathname === href ? 'text-white font-medium' : 'text-gray-400'
//                 }`}>
//                 {label}
//               </Link>
//             ))}

//             {/* Desktop auth */}
//             {session ? (
//               <div className="flex items-center gap-2 ml-2">
//                 {session.user?.image && (
//                   <img
//                     src={session.user.image}
//                     alt={session.user.name ?? 'avatar'}
//                     className="w-7 h-7 rounded-full ring-1 ring-gray-600"
//                   />
//                 )}
//                 <button
//                   type="button"
//                   onClick={() => signOut()}
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   Sign out
//                 </button>
//               </div>
//             ) : (
//               <button
//                 type="button"
//                 onClick={() => signIn('google')}
//                 className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors ml-2"
//               >
//                 {/* Google icon */}
//                 <svg width="16" height="16" viewBox="0 0 24 24">
//                   <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
//                   <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
//                   <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
//                   <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
//                 </svg>
//                 Sign in
//               </button>
//             )}
//           </div>

//           {/* Hamburger */}
//           <button
//             type="button"
//             onClick={() => setMenuOpen(o => !o)}
//             className="md:hidden text-white p-2"
//             aria-label="Toggle menu"
//           >
//             {menuOpen ? (
//               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             ) : (
//               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             )}
//           </button>
//         </div>

//         {/* Mobile menu */}
//         <div className={`md:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-300 ${
//           menuOpen ? 'max-h-96' : 'max-h-0'
//         }`}>
//           <div
//             style={{
//               backdropFilter:          'blur(24px)',
//               WebkitBackdropFilter:    'blur(24px)',
//               backgroundColor:         'rgba(0, 0, 0, 0.45)',
//               borderTop:               '1px solid rgba(255,255,255,0.08)',
//               borderBottomLeftRadius:  '16px',
//               borderBottomRightRadius: '16px',
//             }}
//           >
//             <div className="flex flex-col px-6 py-4 gap-4">
//               {NAV_LINKS.map(({ label, href }) => (
//                 <Link key={href} href={href}
//                   className={`text-sm transition-colors hover:text-white ${
//                     pathname === href ? 'text-white font-medium' : 'text-gray-400'
//                   }`}>
//                   {label}
//                 </Link>
//               ))}

//               {/* Mobile auth */}
//               <div className="pt-2 border-t border-gray-800">
//                 {session ? (
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-2">
//                       {session.user?.image && (
//                         <img
//                           src={session.user.image}
//                           alt={session.user.name ?? 'avatar'}
//                           className="w-7 h-7 rounded-full ring-1 ring-gray-600"
//                         />
//                       )}
//                       <span className="text-sm text-gray-300">{session.user?.name}</span>
//                     </div>
//                     <button
//                       type="button"
//                       onClick={() => signOut()}
//                       className="text-sm text-gray-400 hover:text-white transition-colors"
//                     >
//                       Sign out
//                     </button>
//                   </div>
//                 ) : (
//                   <button
//                     type="button"
//                     onClick={() => signIn('google')}
//                     className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
//                   >
//                     <svg width="16" height="16" viewBox="0 0 24 24">
//                       <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
//                       <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
//                       <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
//                       <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
//                     </svg>
//                     Sign in with Google
//                   </button>
//                 )}
//               </div>

//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   )
// }














// 'use client'

// import { useEffect, useRef, useState } from 'react'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { useSession, signIn, signOut } from 'next-auth/react'

// const NAV_LINKS = [
//   { label: 'Home',       href: '/' },
//   { label: 'Writing',    href: '/writing' },
//   { label: 'Blogs',      href: '/blogs' },
//   { label: 'Projects',   href: '/projects' },
//   { label: 'Experience', href: '/experience' },
//   { label: 'Updates',    href: '/updates' },
// ]

// export default function Navbar() {
//   const [visible,  setVisible]  = useState(true)
//   const [menuOpen, setMenuOpen] = useState(false)
//   const lastY                   = useRef(0)
//   const pathname                = usePathname()
//   const { data: session }       = useSession()

//   useEffect(() => {
//     const onScroll = () => {
//       const y = window.scrollY
//       setVisible(y < lastY.current || y < 10)
//       lastY.current = y
//     }
//     window.addEventListener('scroll', onScroll, { passive: true })
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   useEffect(() => { setMenuOpen(false) }, [pathname])

//   return (
//     <>
//       <nav
//         className={`
//           fixed top-0 left-0 w-full z-50 text-white
//           transition-transform duration-300
//           ${visible ? 'translate-y-0' : '-translate-y-full'}
//         `}
//         style={{
//           backdropFilter:       'blur(20px)',
//           WebkitBackdropFilter: 'blur(20px)',
//           backgroundColor:      'rgba(0, 0, 0, 0.5)',
//         }}
//       >
//         <div className="max-w-2xl mx-auto px-6 md:px-0 py-4 flex justify-between items-center">

//           <Link href="/" className="text-base font-bold tracking-tight hover:text-gray-300 transition-colors">
//             Sam
//           </Link>

//           {/* Desktop links */}
//           <div className="hidden md:flex items-center gap-6 text-sm">
//             {NAV_LINKS.map(({ label, href }) => (
//               <Link key={href} href={href}
//                 className={`transition-colors hover:text-white ${
//                   pathname === href ? 'text-white font-medium' : 'text-gray-400'
//                 }`}>
//                 {label}
//               </Link>
//             ))}

//             {/* Desktop auth */}
//             {session ? (
//               <div className="flex items-center gap-2 ml-2">
//                 {session.user?.image && (
//                   <img
//                     src={session.user.image}
//                     alt={session.user.name ?? 'avatar'}
//                     className="w-7 h-7 rounded-full ring-1 ring-gray-600"
//                   />
//                 )}
//                 <button
//                   type="button"
//                   onClick={() => signOut()}
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   Sign out
//                 </button>
//               </div>
//             ) : (
//               <button
//                 type="button"
//                 onClick={() => signIn('google')}
//                 className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors ml-2"
//               >
//                 {/* Google icon */}
//                 <svg width="16" height="16" viewBox="0 0 24 24">
//                   <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
//                   <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
//                   <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
//                   <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
//                 </svg>
//                 Sign in
//               </button>
//             )}
//           </div>

//           {/* Hamburger */}
//           <button
//             type="button"
//             onClick={() => setMenuOpen(o => !o)}
//             className="md:hidden text-white p-2"
//             aria-label="Toggle menu"
//           >
//             {menuOpen ? (
//               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             ) : (
//               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             )}
//           </button>
//         </div>

//         {/* Mobile menu */}
//         <div className={`md:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-300 ${
//           menuOpen ? 'max-h-96' : 'max-h-0'
//         }`}>
//           <div
//             style={{
//               backdropFilter:          'blur(24px)',
//               WebkitBackdropFilter:    'blur(24px)',
//               backgroundColor:         'rgba(0, 0, 0, 0.45)',
//               borderTop:               '1px solid rgba(255,255,255,0.08)',
//               borderBottomLeftRadius:  '16px',
//               borderBottomRightRadius: '16px',
//             }}
//           >
//             <div className="flex flex-col px-6 py-4 gap-4">
//               {NAV_LINKS.map(({ label, href }) => (
//                 <Link key={href} href={href}
//                   className={`text-sm transition-colors hover:text-white ${
//                     pathname === href ? 'text-white font-medium' : 'text-gray-400'
//                   }`}>
//                   {label}
//                 </Link>
//               ))}

//               {/* Mobile auth */}
//               <div className="pt-2 border-t border-gray-800">
//                 {session ? (
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-2">
//                       {session.user?.image && (
//                         <img
//                           src={session.user.image}
//                           alt={session.user.name ?? 'avatar'}
//                           className="w-7 h-7 rounded-full ring-1 ring-gray-600"
//                         />
//                       )}
//                       <span className="text-sm text-gray-300">{session.user?.name}</span>
//                     </div>
//                     <button
//                       type="button"
//                       onClick={() => signOut()}
//                       className="text-sm text-gray-400 hover:text-white transition-colors"
//                     >
//                       Sign out
//                     </button>
//                   </div>
//                 ) : (
//                   <button
//                     type="button"
//                     onClick={() => signIn('google')}
//                     className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
//                   >
//                     <svg width="16" height="16" viewBox="0 0 24 24">
//                       <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
//                       <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
//                       <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
//                       <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
//                     </svg>
//                     Sign in with Google
//                   </button>
//                 )}
//               </div>

//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   )
// }









// 'use client'

// import { useEffect, useRef, useState } from 'react'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { useSession, signIn, signOut } from 'next-auth/react'
// import Image from 'next/image'

// const NAV_LINKS = [
//   { label: 'Home',       href: '/' },
//   { label: 'Writing',    href: '/writing' },
//   { label: 'Blogs',      href: '/blogs' },
//   { label: 'Projects',   href: '/projects' },
//   { label: 'Experience', href: '/experience' },
//   { label: 'Updates',    href: '/updates' },
// ]

// const GoogleIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24">
//     <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
//     <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
//     <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
//     <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
//   </svg>
// )

// export default function Navbar() {
//   const [visible, setVisible] = useState(true)
//   const [menuOpen, setMenuOpen] = useState(false)
//   const lastY = useRef(0)
//   const pathname = usePathname()
//   const { data: session } = useSession()

//   useEffect(() => {
//     const onScroll = () => {
//       const y = window.scrollY
//       setVisible(y < lastY.current || y < 10)
//       lastY.current = y
//     }
//     window.addEventListener('scroll', onScroll, { passive: true })
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   useEffect(() => {
//     setMenuOpen(false)
//   }, [pathname])

//   return (
//     <>
//       <nav
//         className={`
//           fixed top-0 left-0 w-full z-50 text-white
//           transition-transform duration-300
//           ${visible ? 'translate-y-0' : '-translate-y-full'}
//         `}
//         style={{
//           backgroundColor: 'rgba(0, 0, 0, 0.68)', // Light base for header
//         }}
//       >
//         {/* Blur layer using pseudo-element for header */}
//         <div 
//           className="absolute inset-0 -z-10"
//           style={{
//             backdropFilter: 'blur(20px)',
//             WebkitBackdropFilter: 'blur(20px)',
//           }}
//         />

//         <div className="max-w-2xl mx-auto px-6 md:px-0 py-4 flex justify-between items-center relative">
//           <Link href="/" className="text-base font-bold tracking-tight hover:text-gray-300 transition-colors">
//             Sam
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-6 text-sm">
//             {NAV_LINKS.map(({ label, href }) => (
//               <Link 
//                 key={href} 
//                 href={href}
//                 className={`transition-colors hover:text-white ${
//                   pathname === href ? 'text-white font-medium' : 'text-gray-400'
//                 }`}
//               >
//                 {label}
//               </Link>
//             ))}

//             {session ? (
//               <button
//                 type="button"
//                 onClick={() => signOut()}
//                 className="flex items-center gap-2 ml-2 group"
//                 title="Sign out"
//               >
//                 {session.user?.image ? (
//                   <Image
//                     src={session.user.image}
//                     alt={session.user.name ?? 'avatar'}
//                     width={32}
//                     height={32}
//                     className="w-8 h-8 rounded-full ring-2 ring-gray-600 group-hover:ring-red-400 transition-all"
//                   />
//                 ) : (
//                   <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold ring-2 ring-gray-600 group-hover:ring-red-400 transition-all">
//                     {session.user?.name?.[0]?.toUpperCase() ?? '?'}
//                   </div>
//                 )}
//                 <span className="text-gray-400 group-hover:text-red-400 transition-colors text-xs">
//                   Sign out
//                 </span>
//               </button>
//             ) : (
//               <button
//                 type="button"
//                 onClick={() => signIn('google')}
//                 className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors ml-2"
//               >
//                 <GoogleIcon />
//                 Sign in
//               </button>
//             )}
//           </div>

//           {/* Hamburger */}
//           <button
//             type="button"
//             onClick={() => setMenuOpen(o => !o)}
//             className="md:hidden text-white p-2"
//             aria-label="Toggle menu"
//           >
//             {menuOpen ? (
//               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             ) : (
//               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             )}
//           </button>
//         </div>

//         {/* Mobile Menu - Independent Strong Blur */}
//         <div 
//           className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 ease-out overflow-hidden z-[60]
//             ${menuOpen ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'}`}
//         >
//           <div 
//             style={{
//               backgroundColor: 'rgba(10, 10, 10, 0.68)',
//               backdropFilter: 'blur(28px)',
//               WebkitBackdropFilter: 'blur(28px)',
//               borderTop: '1px solid rgba(255, 255, 255, 0.15)',
//               borderBottomLeftRadius: '20px',
//               borderBottomRightRadius: '20px',
//             }}
//           >
//             <div className="flex flex-col px-6 py-7 gap-6 text-base">
//               {NAV_LINKS.map(({ label, href }) => (
//                 <Link 
//                   key={href} 
//                   href={href}
//                   className={`transition-colors hover:text-white ${
//                     pathname === href ? 'text-white font-medium' : 'text-gray-300'
//                   }`}
//                 >
//                   {label}
//                 </Link>
//               ))}

//               <div className="pt-6 border-t border-white/10">
//                 {session ? (
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-3">
//                       {session.user?.image ? (
//                         <Image
//                           src={session.user.image}
//                           alt={session.user.name ?? 'avatar'}
//                           width={42}
//                           height={42}
//                           className="rounded-full ring-2 ring-gray-600"
//                         />
//                       ) : (
//                         <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-base font-bold">
//                           {session.user?.name?.[0]?.toUpperCase() ?? '?'}
//                         </div>
//                       )}
//                       <div>
//                         <div className="text-white">{session.user?.name}</div>
//                         <div className="text-xs text-gray-400">{session.user?.email}</div>
//                       </div>
//                     </div>
//                     <button
//                       onClick={() => signOut()}
//                       className="text-red-400 hover:text-red-500 text-sm font-medium"
//                     >
//                       Sign out
//                     </button>
//                   </div>
//                 ) : (
//                   <button
//                     onClick={() => signIn('google')}
//                     className="flex items-center bg-white justify-center gap-3 w-full py-3.5 border border-white/20 rounded-2xl hover:bg-white/5 transition-all text-black hover:text-white"
//                   >
//                     <GoogleIcon />
//                     Sign in with Google
//                   </button>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   )
// }











































// 'use client'

// import { useEffect, useRef, useState } from 'react'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { useSession, signIn, signOut } from 'next-auth/react'
// import Image from 'next/image'

// const NAV_LINKS = [
//   { label: 'Home',       href: '/' },
//   { label: 'Writing',    href: '/writing' },
//   { label: 'Blogs',      href: '/blogs' },
//   { label: 'Projects',   href: '/projects' },
//   { label: 'Experience', href: '/experience' },
//   { label: 'Updates',    href: '/updates' },
// ]

// const GoogleIcon = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24">
//     <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
//     <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
//     <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
//     <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
//   </svg>
// )

// const GitHubIcon = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
//   </svg>
// )

// function SignOutModal({ onClose }: { onClose: () => void }) {
//   return (
//     <div
//       className="fixed inset-0 z-[100] flex items-center justify-center px-4"
//       style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}
//       onClick={onClose}
//     >
//       <div
//         className="w-full max-w-sm rounded-2xl border border-white/10 shadow-2xl p-6 flex flex-col gap-5"
//         style={{ backgroundColor: 'rgba(15,15,15,0.95)' }}
//         onClick={e => e.stopPropagation()}
//       >
//         <div className="flex items-center justify-between">
//           <div>
//             <h2 className="text-white font-semibold text-lg">Sign out</h2>
//             <p className="text-gray-400 text-xs mt-0.5">Are you sure you want to sign out?</p>
//           </div>
//           <button type="button" onClick={onClose}
//             className="text-gray-500 hover:text-white transition-colors p-1">
//             <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>
//         <div className="flex gap-3">
//           <button type="button" onClick={onClose}
//             className="flex-1 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-white text-sm">
//             Cancel
//           </button>
//           <button type="button" onClick={() => signOut()}
//             className="flex-1 py-2.5 rounded-xl border border-red-500/40 bg-red-500/10 hover:bg-red-500/20 transition-all text-red-400 hover:text-red-300 text-sm font-medium">
//             Yes, sign out
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// // Desktop only popup
// function SignInModal({ onClose }: { onClose: () => void }) {
//   return (
//     <div
//       className="fixed inset-0 z-[100] flex items-center justify-center px-4"
//       style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}
//       onClick={onClose}
//     >
//       <div
//         className="w-full max-w-sm rounded-2xl border border-white/10 shadow-2xl p-6 flex flex-col gap-4"
//         style={{ backgroundColor: 'rgba(15,15,15,0.95)' }}
//         onClick={e => e.stopPropagation()}
//       >
//         <div className="flex items-center justify-between">
//           <div>
//             <h2 className="text-white font-semibold text-lg">Sign in</h2>
//             <p className="text-gray-400 text-xs mt-0.5">Choose a provider to continue</p>
//           </div>
//           <button type="button" onClick={onClose}
//             className="text-gray-500 hover:text-white transition-colors p-1">
//             <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>
//         <div className="flex flex-col gap-3">
//           <button type="button" onClick={() => signIn('google')}
//             className="flex items-center gap-3 w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-white text-sm font-medium">
//             <GoogleIcon /> Continue with Google
//           </button>
//           <button type="button" onClick={() => signIn('github')}
//             className="flex items-center gap-3 w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-white text-sm font-medium">
//             <GitHubIcon /> Continue with GitHub
//           </button>
//         </div>
//         <p className="text-xs text-gray-600 text-center">
//           By signing in you agree to our terms of service.
//         </p>
//       </div>
//     </div>
//   )
// }

// function Avatar({ image, name, size = 32, extraClass = '' }: {
//   image?: string | null; name?: string | null; size?: number; extraClass?: string
// }) {
//   return image ? (
//     <Image src={image} alt={name ?? 'avatar'} width={size} height={size}
//       className={`rounded-full ring-2 ring-gray-600 transition-all ${extraClass}`}
//       style={{ width: size, height: size }} />
//   ) : (
//     <div className={`rounded-full bg-gray-700 flex items-center justify-center font-bold ring-2 ring-gray-600 transition-all ${extraClass}`}
//       style={{ width: size, height: size, fontSize: size * 0.375 }}>
//       {name?.[0]?.toUpperCase() ?? '?'}
//     </div>
//   )
// }

// export default function Navbar() {
//   const [visible,     setVisible]     = useState(true)
//   const [menuOpen,    setMenuOpen]    = useState(false)
//   const [showModal,   setShowModal]   = useState(false)
//   const [showSignOut, setShowSignOut] = useState(false)
//   const lastY    = useRef(0)
//   const pathname = usePathname()
//   const { data: session, status } = useSession()

//   useEffect(() => {
//     const onScroll = () => {
//       const y = window.scrollY
//       setVisible(y < lastY.current || y < 10)
//       lastY.current = y
//     }
//     window.addEventListener('scroll', onScroll, { passive: true })
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   useEffect(() => {
//     setMenuOpen(false)
//     setShowModal(false)
//     setShowSignOut(false)
//   }, [pathname])

//   useEffect(() => {
//     document.body.style.overflow = (showModal || showSignOut) ? 'hidden' : ''
//     return () => { document.body.style.overflow = '' }
//   }, [showModal, showSignOut])

//   return (
//     <>
//       {showModal   && <SignInModal  onClose={() => setShowModal(false)} />}
//       {showSignOut && <SignOutModal onClose={() => setShowSignOut(false)} />}

//       <nav className={`fixed top-0 left-0 w-full z-50 text-white transition-transform duration-300
//         ${visible ? 'translate-y-0' : '-translate-y-full'}`}
//         style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
//       >
//         <div className="absolute inset-0 -z-10"
//           style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }} />

//         <div className="max-w-2xl mx-auto px-7 md:px-0 py-4 flex justify-between items-center relative">
//           <Link href="/" className="text-base font-bold tracking-tight hover:text-gray-300 transition-colors">
//             Sam
//           </Link>

//           {/* Desktop nav */}
//           <div className="hidden md:flex items-center gap-6 text-sm">
//             {NAV_LINKS.map(({ label, href }) => (
//               <Link key={href} href={href}
//                 className={`transition-colors hover:text-white ${
//                   pathname === href ? 'text-white font-medium' : 'text-gray-400'
//                 }`}>
//                 {label}
//               </Link>
//             ))}

//             {/* Desktop auth */}
//             {status === 'loading' ? (
//               <div className="w-8 h-8 ml-2 rounded-full bg-gray-800 animate-pulse" />
//             ) : session ? (
//               <button type="button" onClick={() => setShowSignOut(true)}
//                 className="ml-2 focus:outline-none group">
//                 <Avatar image={session.user?.image} name={session.user?.name} size={32}
//                   extraClass="group-hover:ring-red-500" />
//               </button>
//             ) : (
//               // Desktop → opens popup
//               <button type="button" onClick={() => setShowModal(true)}
//                 className="ml-2 text-sm flex items-center justify-center gap-3 w-full py-2 px-4 rounded-2xl border cursor-pointer border-white/20 bg-white/5 hover:bg-white/10 transition-all text-white text-sm text-gray-400 hover:text-white transition-colors">
//                 Sign in
//               </button>
//             )}
//           </div>

//           {/* Hamburger */}
//           <button type="button" onClick={() => setMenuOpen(o => !o)}
//             className="md:hidden text-white p-2" aria-label="Toggle menu">
//             {menuOpen ? (
//               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             ) : (
//               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             )}
//           </button>
//         </div>

//         {/* Mobile menu */}
//         <div className={`md:hidden absolute top-full px-1 left-0 w-full overflow-hidden transition-all duration-300 ease-out z-[60]
//           ${menuOpen ? 'max-h-[560px] opacity-100' : 'max-h-0 opacity-0'}`}>
//           <div style={{
//             backgroundColor:         'rgba(10,10,10,0.68)',
//             backdropFilter:          'blur(28px)',
//             WebkitBackdropFilter:    'blur(28px)',
//             borderTop:               '1px solid rgba(255,255,255,0.15)',
//             borderBottomLeftRadius:  '20px',
//             borderBottomRightRadius: '20px',
//           }}>
//             <div className="flex flex-col px-6 py-7 gap-6 text-base">
//               {NAV_LINKS.map(({ label, href }) => (
//                 <Link key={href} href={href}
//                   className={`transition-colors hover:text-white ${
//                     pathname === href ? 'text-white font-medium' : 'text-gray-300'
//                   }`}>
//                   {label}
//                 </Link>
//               ))}

//               {/* Mobile auth */}
//               <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
//                 {status === 'loading' ? (
//                   <div className="w-full h-11 rounded-2xl bg-gray-800 animate-pulse" />
//                 ) : session ? (
//                   // Signed in — show avatar + name + sign out
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-3">
//                       <Avatar image={session.user?.image} name={session.user?.name} size={40} />
//                       <div>
//                         <div className="text-white text-sm">{session.user?.name}</div>
//                         <div className="text-xs text-gray-400">{session.user?.email}</div>
//                       </div>
//                     </div>
//                     <button type="button" onClick={() => setShowSignOut(true)}
//                       className="text-red-400 hover:text-red-300 text-sm font-medium">
//                       Sign out
//                     </button>
//                   </div>
//                 ) : (
//                   // Mobile → show buttons directly, no popup
//                   <>
//                     <button type="button" onClick={() => signIn('google')}
//                       className="flex items-center justify-center gap-3 w-full py-3 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 transition-all text-white text-sm">
//                       <GoogleIcon /> Continue with Google
//                     </button>
//                     <button type="button" onClick={() => signIn('github')}
//                       className="flex items-center justify-center gap-3 w-full py-3 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 transition-all text-white text-sm">
//                       <GitHubIcon /> Continue with GitHub
//                     </button>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   )
// }
































































// 'use client'

// import { useEffect, useRef, useState } from 'react'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { useSession } from 'next-auth/react'
// import Image from 'next/image'

// // ── Navigation Data ────────────────────────────────────────────────────────
// const NAV_LINKS = [
//   { label: 'Home',       href: '/' },
//   { label: 'Writing',    href: '/writing' },
//   { label: 'Blogs',      href: '/blogs' },
//   { label: 'Projects',   href: '/projects' },
//   { label: 'Experience', href: '/experience' },
//   { label: 'Updates',    href: '/updates' },
// ]

// const CONTACT_SITES = [
//   {
//     id: 'twitter',
//     name: 'X / Twitter',
//     handle: '@yourhandle',
//     description: 'Thoughts, threads & quick takes.',
//     href: 'https://twitter.com/yourhandle',
//     icon: (
//       <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
//       </svg>
//     ),
//   },
//   // Add more contact sites here...
// ]

// // ── GlowingStarsCard ────────────────────────────────────────────────────────
// function GlowingStarsCard({ children }: { children: React.ReactNode }) {
//   const canvasRef = useRef<HTMLCanvasElement>(null)

//   useEffect(() => {
//     const canvas = canvasRef.current
//     if (!canvas) return
//     const ctx = canvas.getContext('2d')
//     if (!ctx) return

//     const stars: { x: number; y: number; r: number; a: number; speed: number }[] = []
//     const W = canvas.width = canvas.offsetWidth
//     const H = canvas.height = canvas.offsetHeight

//     for (let i = 0; i < 80; i++) {
//       stars.push({ 
//         x: Math.random() * W, 
//         y: Math.random() * H, 
//         r: Math.random() * 1.2 + 0.3, 
//         a: Math.random(), 
//         speed: Math.random() * 0.005 + 0.002 
//       })
//     }

//     let raf: number
//     const draw = () => {
//       ctx.clearRect(0, 0, W, H)
//       stars.forEach(s => {
//         s.a += s.speed
//         const alpha = (Math.sin(s.a) + 1) / 2
//         ctx.beginPath()
//         ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
//         ctx.fillStyle = `rgba(255,255,255,${alpha * 0.8})`
//         ctx.fill()
//       })
//       raf = requestAnimationFrame(draw)
//     }
//     draw()
//     return () => cancelAnimationFrame(raf)
//   }, [])

//   return (
//     <div className="relative rounded-2xl overflow-hidden border border-white/10"
//       style={{ background: 'linear-gradient(135deg, rgba(20,20,30,0.98) 0%, rgba(10,10,20,0.98) 100%)' }}>
//       <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
//       <div className="relative z-10">{children}</div>
//     </div>
//   )
// }

// // ── Placeholder Modals (Replace with your actual modal code) ───────────────
// function SayHelloModal({ onClose }: { onClose: () => void }) {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
//       <div className="bg-zinc-900 p-8 rounded-3xl max-w-md w-full">
//         <h2 className="text-2xl font-bold mb-4">Say Hello</h2>
//         <p className="text-gray-400 mb-6">This is a placeholder modal. Replace with your actual Say Hello form.</p>
//         <button 
//           onClick={onClose}
//           className="px-6 py-3 bg-white text-black rounded-2xl font-medium"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   )
// }

// function SignOutModal({ onClose }: { onClose: () => void }) {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
//       <div className="bg-zinc-900 p-8 rounded-3xl max-w-md w-full">
//         <h2 className="text-2xl font-bold mb-4">Sign Out</h2>
//         <p className="text-gray-400 mb-6">Are you sure you want to sign out?</p>
//         <div className="flex gap-4">
//           <button onClick={onClose} className="flex-1 py-3 border border-white/20 rounded-2xl">Cancel</button>
//           <button onClick={() => {/* signOut() logic here */}} className="flex-1 py-3 bg-red-600 rounded-2xl">Sign Out</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// function SignInModal({ onClose }: { onClose: () => void }) {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
//       <div className="bg-zinc-900 p-8 rounded-3xl max-w-md w-full">
//         <h2 className="text-2xl font-bold mb-4">Sign In</h2>
//         <p className="text-gray-400 mb-6">Choose how you want to sign in.</p>
//         {/* Add your sign in buttons here */}
//         <button onClick={onClose} className="w-full py-3 border border-white/20 rounded-2xl mt-4">Close</button>
//       </div>
//     </div>
//   )
// }

// function Avatar({ image, name, size = 32, extraClass = '' }: any) {
//   return (
//     <div className={`relative rounded-full overflow-hidden ${extraClass}`} style={{ width: size, height: size }}>
//       {image ? (
//         <Image src={image} alt={name || 'User'} width={size} height={size} className="object-cover" />
//       ) : (
//         <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-sm font-medium">
//           {name?.charAt(0) || 'U'}
//         </div>
//       )}
//     </div>
//   )
// }

// // ── MoreSecondNav ───────────────────────────────────────────────────────────
// function MoreSecondNav() {
//   const [isOpen, setIsOpen] = useState(false)
//   const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

//   const open  = () => { 
//     if (closeTimer.current) clearTimeout(closeTimer.current)
//     setIsOpen(true) 
//   }
//   const close = () => { 
//     closeTimer.current = setTimeout(() => setIsOpen(false), 80) 
//   }

//   return (
//     <div className="relative" onMouseEnter={open} onMouseLeave={close}>
//       <button
//         type="button"
//         className={`text-sm transition-colors hover:text-white ${isOpen ? 'text-white' : 'text-gray-400'}`}
//       >
//         More
//       </button>

//       {isOpen && (
//         <div
//           className="absolute left-1/2 -translate-x-1/2"
//           style={{ top: '100%', height: '12px', width: '120px' }}
//           onMouseEnter={open}
//           onMouseLeave={close}
//         />
//       )}

//       <div
//         className={`
//           fixed left-0 right-0 z-40 border-b border-white/10 overflow-hidden
//           transition-all duration-300 ease-out
//           ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}
//         `}
//         style={{
//           top: '63px',
//           backgroundColor: 'rgba(10, 10, 10, 0.15)',
//           backdropFilter: 'blur(28px)',
//           WebkitBackdropFilter: 'blur(24px)',
//         }}
//         onMouseEnter={open}
//         onMouseLeave={close}
//       >
//         <div className="max-w-2xl mx-auto px-7 py-5">
//           <div className="flex justify-end gap-10 text-sm">
//             <Link
//               href="/sayhello"
//               className="text-gray-400 hover:text-white transition-colors py-2"
//               onClick={() => setIsOpen(false)}
//             >
//               Say Hello
//             </Link>
//             <Link
//               href="/say-hello"
//               className="text-gray-400 hover:text-white transition-colors py-2"
//               onClick={() => setIsOpen(false)}
//             >
//               Code block
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// // ── Main Navbar ─────────────────────────────────────────────────────────────
// export default function Navbar() {
//   const [visible, setVisible] = useState(true)
//   const [menuOpen, setMenuOpen] = useState(false)
//   const [showModal, setShowModal] = useState(false)
//   const [showSignOut, setShowSignOut] = useState(false)
//   const [showSayHello, setShowSayHello] = useState(false)

//   const lastY = useRef(0)
//   const pathname = usePathname()
//   const { data: session, status } = useSession()

//   // Scroll hide/show navbar
//   useEffect(() => {
//     const onScroll = () => {
//       const y = window.scrollY
//       setVisible(y < lastY.current || y < 10)
//       lastY.current = y
//     }
//     window.addEventListener('scroll', onScroll, { passive: true })
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   // Close menus when route changes
//   useEffect(() => {
//     setMenuOpen(false)
//     setShowModal(false)
//     setShowSignOut(false)
//     setShowSayHello(false)
//   }, [pathname])

//   // Prevent body scroll when modals are open
//   useEffect(() => {
//     document.body.style.overflow = (showModal || showSignOut || showSayHello) ? 'hidden' : ''
//     return () => { document.body.style.overflow = '' }
//   }, [showModal, showSignOut, showSayHello])

//   return (
//     <>
//       {showModal && <SignInModal onClose={() => setShowModal(false)} />}
//       {showSignOut && <SignOutModal onClose={() => setShowSignOut(false)} />}
//       {showSayHello && <SayHelloModal onClose={() => setShowSayHello(false)} />}

//       <nav
//         className={`fixed top-0 left-0 w-full z-50 text-white transition-transform duration-300
//           ${visible ? 'translate-y-0' : '-translate-y-full'}`}
//         style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
//       >
//         <div className="absolute inset-0 -z-10"
//           style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }} />

//         <div className="max-w-2xl mx-auto px-7 md:px-0 py-4 flex justify-between items-center relative">
//           <Link href="/" className="text-base font-bold tracking-tight hover:text-gray-300 transition-colors">
//             Sam
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-5 text-sm">
//             {NAV_LINKS.map(({ label, href }) => (
//               <Link key={href} href={href}
//                 className={`transition-colors hover:text-white ${
//                   pathname === href ? 'text-white font-medium' : 'text-gray-400'
//                 }`}>
//                 {label}
//               </Link>
//             ))}

//             <MoreSecondNav />

//             {status === 'loading' ? (
//               <div className="w-8 h-8 ml-2 rounded-full bg-gray-800 animate-pulse" />
//             ) : session ? (
//               <button type="button" onClick={() => setShowSignOut(true)} className="ml-2 focus:outline-none group">
//                 <Avatar 
//                   image={session.user?.image} 
//                   name={session.user?.name} 
//                   size={32}
//                   extraClass="group-hover:ring-red-500" 
//                 />
//               </button>
//             ) : (
//               <button 
//                 type="button" 
//                 onClick={() => setShowModal(true)}
//                 className="ml-2 text-sm flex items-center justify-center gap-3 w-full py-2 px-4 rounded-2xl border cursor-pointer border-white/20 bg-white/5 hover:bg-white/10 transition-all text-gray-400 hover:text-white"
//               >
//                 Sign in
//               </button>
//             )}
//           </div>

//           {/* Mobile Hamburger */}
//           <button 
//             type="button" 
//             onClick={() => setMenuOpen(o => !o)}
//             className="md:hidden text-white p-2" 
//             aria-label="Toggle menu"
//           >
//             {menuOpen ? (
//               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             ) : (
//               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             )}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <div className={`md:hidden absolute top-full px-1 left-0 w-full overflow-hidden transition-all duration-300 ease-out z-[60]
//           ${menuOpen ? 'max-h-[620px] opacity-100' : 'max-h-0 opacity-0'}`}>
//           <div style={{
//             backgroundColor: 'rgba(10,10,10,0.68)',
//             backdropFilter: 'blur(28px)',
//             WebkitBackdropFilter: 'blur(28px)',
//             borderTop: '1px solid rgba(255,255,255,0.15)',
//             borderBottomLeftRadius: '20px',
//             borderBottomRightRadius: '20px',
//           }}>
//             <div className="flex flex-col px-6 py-7 gap-6 text-base">
//               {NAV_LINKS.map(({ label, href }) => (
//                 <Link 
//                   key={href} 
//                   href={href}
//                   className={`transition-colors hover:text-white ${
//                     pathname === href ? 'text-white font-medium' : 'text-gray-300'
//                   }`}
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   {label}
//                 </Link>
//               ))}

//               {/* Fixed Say Hello - Now uses Link */}
//               <div className="border-t border-white/10 pt-4">
//                 <Link
//                   href="/sayhello"
//                   className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-base py-1"
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   Say Hello
//                 </Link>
//               </div>

//               {/* Auth Section */}
//               <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
//                 {status === 'loading' ? (
//                   <div className="w-full h-11 rounded-2xl bg-gray-800 animate-pulse" />
//                 ) : session ? (
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-3">
//                       <Avatar image={session.user?.image} name={session.user?.name} size={40} />
//                       <div>
//                         <div className="text-white text-sm">{session.user?.name}</div>
//                         <div className="text-xs text-gray-400">{session.user?.email}</div>
//                       </div>
//                     </div>
//                     <button 
//                       type="button" 
//                       onClick={() => setShowSignOut(true)}
//                       className="text-red-400 hover:text-red-300 text-sm font-medium"
//                     >
//                       Sign out
//                     </button>
//                   </div>
//                 ) : (
//                   <>
//                     <button 
//                       type="button" 
//                       onClick={() => {/* signIn('google') */}}
//                       className="flex items-center justify-center gap-3 w-full py-3 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 transition-all text-white text-sm"
//                     >
//                       Continue with Google
//                     </button>
//                     <button 
//                       type="button" 
//                       onClick={() => {/* signIn('github') */}}
//                       className="flex items-center justify-center gap-3 w-full py-3 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 transition-all text-white text-sm"
//                     >
//                       Continue with GitHub
//                     </button>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   )
// }














// 888888888888888888888888888888888888888888888888888888888
// 'use client'

// import { useEffect, useRef, useState } from 'react'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { useSession, signIn, signOut } from 'next-auth/react'
// import Image from 'next/image'

// // ── Navigation Data ────────────────────────────────────────────────────────
// const NAV_LINKS = [
//   { label: 'Home',       href: '/' },
//   { label: 'Writing',    href: '/writing' },
//   { label: 'Blogs',      href: '/blogs' },
//   { label: 'Projects',   href: '/projects' },
//   { label: 'Experience', href: '/experience' },
//   { label: 'Updates',    href: '/updates' },
// ]

// // ── Icons for Auth Providers ───────────────────────────────────────────────
// const GoogleIcon = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24">
//     <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
//     <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
//     <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
//     <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
//   </svg>
// )

// const GitHubIcon = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
//   </svg>
// )

// // ── GlowingStarsCard (kept for potential future use) ───────────────────────
// function GlowingStarsCard({ children }: { children: React.ReactNode }) {
//   const canvasRef = useRef<HTMLCanvasElement>(null)

//   useEffect(() => {
//     const canvas = canvasRef.current
//     if (!canvas) return
//     const ctx = canvas.getContext('2d')
//     if (!ctx) return

//     const stars: { x: number; y: number; r: number; a: number; speed: number }[] = []
//     const W = canvas.width = canvas.offsetWidth
//     const H = canvas.height = canvas.offsetHeight

//     for (let i = 0; i < 80; i++) {
//       stars.push({ 
//         x: Math.random() * W, 
//         y: Math.random() * H, 
//         r: Math.random() * 1.2 + 0.3, 
//         a: Math.random(), 
//         speed: Math.random() * 0.005 + 0.002 
//       })
//     }

//     let raf: number
//     const draw = () => {
//       ctx.clearRect(0, 0, W, H)
//       stars.forEach(s => {
//         s.a += s.speed
//         const alpha = (Math.sin(s.a) + 1) / 2
//         ctx.beginPath()
//         ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
//         ctx.fillStyle = `rgba(255,255,255,${alpha * 0.8})`
//         ctx.fill()
//       })
//       raf = requestAnimationFrame(draw)
//     }
//     draw()
//     return () => cancelAnimationFrame(raf)
//   }, [])

//   return (
//     <div className="relative rounded-2xl overflow-hidden border border-white/10"
//       style={{ background: 'linear-gradient(135deg, rgba(20,20,30,0.98) 0%, rgba(10,10,20,0.98) 100%)' }}>
//       <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
//       <div className="relative z-10">{children}</div>
//     </div>
//   )
// }

// // ── Sign In Modal (Desktop & Mobile) ───────────────────────────────────────
// function SignInModal({ onClose }: { onClose: () => void }) {
//   return (
//     <div 
//       className="fixed inset-0 z-[100] flex items-center justify-center px-4"
//       style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)' }}
//       onClick={onClose}
//     >
//       <div 
//         className="w-full max-w-sm rounded-2xl border border-white/10 shadow-2xl p-6 flex flex-col gap-4"
//         style={{ backgroundColor: 'rgba(15,15,15,0.95)' }}
//         onClick={e => e.stopPropagation()}
//       >
//         <div className="flex items-center justify-between">
//           <div>
//             <h2 className="text-white font-semibold text-lg">Sign in</h2>
//             <p className="text-gray-400 text-xs mt-0.5">Choose a provider to continue</p>
//           </div>
//           <button type="button" onClick={onClose} className="text-gray-500 hover:text-white transition-colors p-1">
//             ✕
//           </button>
//         </div>
//         <div className="flex flex-col gap-3">
//           <button 
//             type="button" 
//             onClick={() => signIn('google')}
//             className="flex items-center gap-3 w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-white text-sm font-medium"
//           >
//             <GoogleIcon /> Continue with Google
//           </button>
//           <button 
//             type="button" 
//             onClick={() => signIn('github')}
//             className="flex items-center gap-3 w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-white text-sm font-medium"
//           >
//             <GitHubIcon /> Continue with GitHub
//           </button>
//         </div>
//         <p className="text-xs text-gray-600 text-center">By signing in you agree to our terms of service.</p>
//       </div>
//     </div>
//   )
// }

// // ── Sign Out Modal ─────────────────────────────────────────────────────────
// function SignOutModal({ onClose }: { onClose: () => void }) {
//   return (
//     <div 
//       className="fixed inset-0 z-[100] flex items-center justify-center px-4"
//       style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)' }}
//       onClick={onClose}
//     >
//       <div 
//         className="w-full max-w-sm rounded-2xl border border-white/10 shadow-2xl p-6 flex flex-col gap-5"
//         style={{ backgroundColor: 'rgba(15,15,15,0.95)' }}
//         onClick={e => e.stopPropagation()}
//       >
//         <div className="flex items-center justify-between">
//           <div>
//             <h2 className="text-white font-semibold text-lg">Sign out</h2>
//             <p className="text-gray-400 text-xs mt-0.5">Are you sure you want to sign out?</p>
//           </div>
//           <button type="button" onClick={onClose} className="text-gray-500 hover:text-white transition-colors p-1">
//             ✕
//           </button>
//         </div>
//         <div className="flex gap-3">
//           <button 
//             type="button" 
//             onClick={onClose}
//             className="flex-1 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-white text-sm"
//           >
//             Cancel
//           </button>
//           <button 
//             type="button" 
//             onClick={() => signOut()}
//             className="flex-1 py-2.5 rounded-xl border border-red-500/40 bg-red-500/10 hover:bg-red-500/20 transition-all text-red-400 hover:text-red-300 text-sm font-medium"
//           >
//             Yes, sign out
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// // ── Avatar Component ───────────────────────────────────────────────────────
// function Avatar({ image, name, size = 32, extraClass = '' }: {
//   image?: string | null; 
//   name?: string | null; 
//   size?: number; 
//   extraClass?: string
// }) {
//   return image ? (
//     <Image 
//       src={image} 
//       alt={name ?? 'avatar'} 
//       width={size} 
//       height={size}
//       className={`rounded-full ring-2 ring-gray-600 transition-all ${extraClass}`}
//       style={{ width: size, height: size }} 
//     />
//   ) : (
//     <div 
//       className={`rounded-full bg-gray-700 flex items-center justify-center font-bold ring-2 ring-gray-600 transition-all ${extraClass}`}
//       style={{ width: size, height: size, fontSize: size * 0.375 }}
//     >
//       {name?.[0]?.toUpperCase() ?? '?'}
//     </div>
//   )
// }

// // ── MoreSecondNav (Desktop dropdown) ───────────────────────────────────────
// function MoreSecondNav() {
//   const [isOpen, setIsOpen] = useState(false)
//   const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

//   const open  = () => { 
//     if (closeTimer.current) clearTimeout(closeTimer.current)
//     setIsOpen(true) 
//   }
//   const close = () => { 
//     closeTimer.current = setTimeout(() => setIsOpen(false), 80) 
//   }

//   return (
//     <div className="relative" onMouseEnter={open} onMouseLeave={close}>
//       <button
//         type="button"
//         className={`text-sm transition-colors hover:text-white ${isOpen ? 'text-white' : 'text-gray-400'}`}
//       >
//         More
//       </button>

//       {isOpen && (
//         <div
//           className="absolute left-1/2 -translate-x-1/2"
//           style={{ top: '100%', height: '12px', width: '120px' }}
//           onMouseEnter={open}
//           onMouseLeave={close}
//         />
//       )}

//       <div
//         className={`
//           fixed left-0 right-0 z-40 border-b border-white/10 overflow-hidden
//           transition-all duration-300 ease-out
//           ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}
//         `}
//         style={{
//           top: '63px',
//           backgroundColor: 'rgba(10, 10, 10, 0.15)',
//           backdropFilter: 'blur(28px)',
//           WebkitBackdropFilter: 'blur(24px)',
//         }}
//         onMouseEnter={open}
//         onMouseLeave={close}
//       >
//         <div className="max-w-2xl mx-auto px-7 py-5">
//           <div className="flex justify-end gap-10 text-sm">
//             <Link
//               href="/sayhello"
//               className="text-gray-400 hover:text-white transition-colors py-2"
//               onClick={() => setIsOpen(false)}
//             >
//               Say Hello
//             </Link>
//             <Link
//               href="/code"
//               className="text-gray-400 hover:text-white transition-colors py-2"
//               onClick={() => setIsOpen(false)}
//             >
//               Code block
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// // ── Main Navbar ─────────────────────────────────────────────────────────────
// export default function Navbar() {
//   const [visible, setVisible] = useState(true)
//   const [menuOpen, setMenuOpen] = useState(false)
//   const [showModal, setShowModal] = useState(false)
//   const [showSignOut, setShowSignOut] = useState(false)

//   const lastY = useRef(0)
//   const pathname = usePathname()
//   const { data: session, status } = useSession()

//   // Scroll hide/show navbar
//   useEffect(() => {
//     const onScroll = () => {
//       const y = window.scrollY
//       setVisible(y < lastY.current || y < 10)
//       lastY.current = y
//     }
//     window.addEventListener('scroll', onScroll, { passive: true })
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   // Close menus when route changes
//   useEffect(() => {
//     setMenuOpen(false)
//     setShowModal(false)
//     setShowSignOut(false)
//   }, [pathname])

//   // Prevent body scroll when modals are open
//   useEffect(() => {
//     document.body.style.overflow = (showModal || showSignOut) ? 'hidden' : ''
//     return () => { document.body.style.overflow = '' }
//   }, [showModal, showSignOut])

//   return (
//     <>
//       {showModal && <SignInModal onClose={() => setShowModal(false)} />}
//       {showSignOut && <SignOutModal onClose={() => setShowSignOut(false)} />}

//       <nav
//         className={`fixed top-0 left-0 w-full z-50 text-white transition-transform duration-300
//           ${visible ? 'translate-y-0' : '-translate-y-full'}`}
//         style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
//       >
//         <div className="absolute inset-0 -z-10"
//           style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }} />

//         <div className="max-w-2xl mx-auto px-7 md:px-0 py-4 flex justify-between items-center relative">
//           <Link href="/" className="text-base font-bold tracking-tight hover:text-gray-300 transition-colors">
//             Sam
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-5 text-sm">
//             {NAV_LINKS.map(({ label, href }) => (
//               <Link key={href} href={href}
//                 className={`transition-colors hover:text-white ${
//                   pathname === href ? 'text-white font-medium' : 'text-gray-400'
//                 }`}>
//                 {label}
//               </Link>
//             ))}

//             <MoreSecondNav />

//             {status === 'loading' ? (
//               <div className="w-8 h-8 ml-2 rounded-full bg-gray-800 animate-pulse" />
//             ) : session ? (
//               <button type="button" onClick={() => setShowSignOut(true)} className="ml-2 focus:outline-none group">
//                 <Avatar 
//                   image={session.user?.image} 
//                   name={session.user?.name} 
//                   size={32}
//                   extraClass="group-hover:ring-red-500" 
//                 />
//               </button>
//             ) : (
//               <button 
//                 type="button" 
//                 onClick={() => setShowModal(true)}
//                 className="ml-2 text-sm flex items-center justify-center gap-3 w-full py-2 px-4 rounded-2xl border cursor-pointer border-white/20 bg-white/5 hover:bg-white/10 transition-all text-gray-400 hover:text-white"
//               >
//                 Sign in
//               </button>
//             )}
//           </div>

//           {/* Mobile Hamburger */}
//           <button 
//             type="button" 
//             onClick={() => setMenuOpen(o => !o)}
//             className="md:hidden text-white p-2" 
//             aria-label="Toggle menu"
//           >
//             {menuOpen ? (
//               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             ) : (
//               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             )}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <div className={`md:hidden absolute top-full px-1 left-0 w-full overflow-hidden transition-all duration-300 ease-out z-[60]
//           ${menuOpen ? 'max-h-[620px] opacity-100' : 'max-h-0 opacity-0'}`}>
//           <div style={{
//             backgroundColor: 'rgba(10,10,10,0.68)',
//             backdropFilter: 'blur(28px)',
//             WebkitBackdropFilter: 'blur(28px)',
//             borderTop: '1px solid rgba(255,255,255,0.15)',
//             borderBottomLeftRadius: '20px',
//             borderBottomRightRadius: '20px',
//           }}>
//             <div className="flex flex-col px-6 py-7 gap-6 text-base">
//               {NAV_LINKS.map(({ label, href }) => (
//                 <Link 
//                   key={href} 
//                   href={href}
//                   className={`transition-colors hover:text-white ${
//                     pathname === href ? 'text-white font-medium' : 'text-gray-300'
//                   }`}
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   {label}
//                 </Link>
//               ))}

//               {/* Say Hello link (goes to /sayhello page) */}
//               <div className="border-t border-white/10 pt-4">
//                 <Link
//                   href="/sayhello"
//                   className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-base py-1"
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   Say Hello
//                 </Link>
//               </div>

//               {/* Mobile Auth Section */}
//               <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
//                 {status === 'loading' ? (
//                   <div className="w-full h-11 rounded-2xl bg-gray-800 animate-pulse" />
//                 ) : session ? (
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-3">
//                       <Avatar image={session.user?.image} name={session.user?.name} size={40} />
//                       <div>
//                         <div className="text-white text-sm">{session.user?.name}</div>
//                         <div className="text-xs text-gray-400">{session.user?.email}</div>
//                       </div>
//                     </div>
//                     <button 
//                       type="button" 
//                       onClick={() => {
//                         setMenuOpen(false)
//                         setShowSignOut(true)
//                       }}
//                       className="text-red-400 hover:text-red-300 text-sm font-medium"
//                     >
//                       Sign out
//                     </button>
//                   </div>
//                 ) : (
//                   <>
//                     <button 
//                       type="button" 
//                       onClick={() => {
//                         setMenuOpen(false)
//                         signIn('google')
//                       }}
//                       className="flex items-center justify-center gap-3 w-full py-3 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 transition-all text-white text-sm"
//                     >
//                       <GoogleIcon /> Continue with Google
//                     </button>
//                     <button 
//                       type="button" 
//                       onClick={() => {
//                         setMenuOpen(false)
//                         signIn('github')
//                       }}
//                       className="flex items-center justify-center gap-3 w-full py-3 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 transition-all text-white text-sm"
//                     >
//                       <GitHubIcon /> Continue with GitHub
//                     </button>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   )
// }


// // components/Navbar.tsx
// 'use client'

// import { useEffect, useRef, useState, useCallback } from 'react'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { useSession, signIn, signOut } from 'next-auth/react'
// import Image from 'next/image'
// import {
//   Avatar       as SAvatar,
//   AvatarFallback,
//   AvatarGroup,
//   AvatarGroupCount,
//   AvatarImage,
// } from '@/components/ui/avatar'
// import { Button } from '@/components/ui/button'
// import { formatCount } from '@/lib/formatFollowers'

// // ── Navigation Data ────────────────────────────────────────────────────────
// // "Home" removed — the Sam logo already links to /
// const NAV_LINKS = [
//   { label: 'Home',    href: '/' },
//   { label: 'Writing',    href: '/writing' },
//   { label: 'Blogs',      href: '/blogs' },
//   { label: 'Projects',   href: '/projects' },
//   { label: 'Experience', href: '/experience' },
//   { label: 'Updates',    href: '/updates' },
// ]

// // ── Shared blur style helpers ──────────────────────────────────────────────
// const BLUR_BG = {
//   backgroundColor:        'rgba(8, 8, 8, 0.55)',
//   backdropFilter:         'blur(24px) saturate(180%)',
//   WebkitBackdropFilter:   'blur(24px) saturate(180%)',
// } as const

// const DROPDOWN_BLUR_BG = {
//   backgroundColor:        'rgba(8, 8, 8, 0.45)',
//   backdropFilter:         'blur(32px) saturate(180%)',
//   WebkitBackdropFilter:   'blur(32px) saturate(180%)',
// } as const

// // ── Types ──────────────────────────────────────────────────────────────────
// interface Follower {
//   userId:     string
//   name:       string
//   image:      string
//   followedAt: string
// }

// interface FollowersData {
//   followers: Follower[]
//   total:     number
// }

// // ── Icons ──────────────────────────────────────────────────────────────────
// const GoogleIcon = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24">
//     <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
//     <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
//     <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
//     <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
//   </svg>
// )

// const GitHubIcon = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
//   </svg>
// )

// // ── Follower data hook ─────────────────────────────────────────────────────
// function useFollowers(userEmail?: string | null) {
//   const [data,        setData]        = useState<FollowersData>({ followers: [], total: 0 })
//   const [isFollowing, setIsFollowing] = useState(false)
//   const [loading,     setLoading]     = useState(false)

//   const refresh = useCallback(async () => {
//     try {
//       const res  = await fetch('/api/followers')
//       const json = await res.json()
//       setData(json)
//       if (userEmail)
//         setIsFollowing(json.followers.some((f: Follower) => f.userId === userEmail))
//     } catch { /* silently fail */ }
//   }, [userEmail])

//   useEffect(() => { refresh() }, [refresh])

//   const toggleFollow = async () => {
//     if (loading) return
//     setLoading(true)
//     setIsFollowing(v => !v)
//     setData(d => ({ ...d, total: d.total + (isFollowing ? -1 : 1) }))
//     try {
//       await fetch('/api/followers/me', { method: isFollowing ? 'DELETE' : 'POST' })
//       await refresh()
//     } catch {
//       setIsFollowing(v => !v)
//       setData(d => ({ ...d, total: d.total + (isFollowing ? 1 : -1) }))
//     } finally {
//       setLoading(false)
//     }
//   }

//   return { data, isFollowing, loading, toggleFollow }
// }

// // ── Unfollow Confirm Modal ─────────────────────────────────────────────────
// function UnfollowConfirmModal({ onConfirm, onClose }: { onConfirm: () => void; onClose: () => void }) {
//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center px-4"
//       style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)' }}
//       onClick={onClose}>
//       <div className="w-full max-w-sm rounded-2xl border border-white/10 shadow-2xl p-6 flex flex-col gap-5"
//         style={{ backgroundColor: 'rgba(15,15,15,0.95)' }}
//         onClick={e => e.stopPropagation()}>
//         <div className="flex items-center justify-between">
//           <div>
//             <h2 className="text-white font-semibold text-lg">Unfollow?</h2>
//             <p className="text-gray-400 text-xs mt-0.5">Are you sure you want to unfollow?</p>
//           </div>
//           <button type="button" onClick={onClose} className="text-gray-500 hover:text-white transition-colors p-1">✕</button>
//         </div>
//         <div className="flex gap-3">
//           <Button variant="outline"
//             className="flex-1 rounded-xl border-white/10 bg-white/5 hover:bg-white/10 text-white"
//             onClick={onClose}>
//             Cancel
//           </Button>
//           <Button variant="destructive" className="flex-1 rounded-xl"
//             onClick={() => { onConfirm(); onClose() }}>
//             Yes, unfollow
//           </Button>
//         </div>
//       </div>
//     </div>
//   )
// }

// // ── Follow Section (avatar group + button) ─────────────────────────────────
// function FollowSection({ session }: { session: any }) {
//   const { data, isFollowing, loading, toggleFollow } = useFollowers(session?.user?.email)
//   const [showUnfollowConfirm, setShowUnfollowConfirm] = useState(false)

//   const shown    = data.followers.slice(0, 3)
//   const overflow = data.total - shown.length

//   const handleFollowClick = () => isFollowing ? setShowUnfollowConfirm(true) : toggleFollow()

//   return (
//     <>
//       {showUnfollowConfirm && (
//         <UnfollowConfirmModal onConfirm={toggleFollow} onClose={() => setShowUnfollowConfirm(false)} />
//       )}
//       <div className="flex items-center gap-2">
//         {data.followers.length > 0 && (
//           <div className="flex items-center gap-1.5">
//             <AvatarGroup>
//               {shown.map(f => (
//                 <SAvatar key={f.userId} className="w-6 h-6 border border-white/20">
//                   <AvatarImage src={f.image} alt={f.name} />
//                   <AvatarFallback className="text-[10px] bg-gray-700 text-white">
//                     {f.name?.[0]?.toUpperCase() ?? '?'}
//                   </AvatarFallback>
//                 </SAvatar>
//               ))}
//               {overflow > 0 && (
//                 <AvatarGroupCount className="w-6 h-6 text-[10px] bg-gray-700 text-white border border-white/20">
//                   +{formatCount(overflow)}
//                 </AvatarGroupCount>
//               )}
//             </AvatarGroup>
//             <span className="text-gray-400 text-xs font-medium tabular-nums">
//               {formatCount(data.total)}
//             </span>
//           </div>
//         )}
//         <Button type="button" size="sm" disabled={loading} onClick={handleFollowClick}
//           className={`rounded-xl text-xs px-3 py-1.5 font-medium transition-all
//             ${isFollowing
//               ? 'border border-white/20 bg-white/10 text-white hover:bg-red-500/10 hover:border-red-500/40 hover:text-red-400'
//               : 'border border-indigo-500/50 bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 hover:text-indigo-300'
//             } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
//           {isFollowing ? 'Following ✓' : 'Follow +'}
//         </Button>
//       </div>
//     </>
//   )
// }

// // ── Sign In Modal ──────────────────────────────────────────────────────────
// function SignInModal({ onClose }: { onClose: () => void }) {
//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center px-4"
//       style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)' }}
//       onClick={onClose}>
//       <div className="w-full max-w-sm rounded-2xl border border-white/10 shadow-2xl p-6 flex flex-col gap-4"
//         style={{ backgroundColor: 'rgba(15,15,15,0.95)' }}
//         onClick={e => e.stopPropagation()}>
//         <div className="flex items-center justify-between">
//           <div>
//             <h2 className="text-white font-semibold text-lg">Sign in</h2>
//             <p className="text-gray-400 text-xs mt-0.5">Choose a provider to continue</p>
//           </div>
//           <button type="button" onClick={onClose} className="text-gray-500 hover:text-white transition-colors p-1">✕</button>
//         </div>
//         <div className="flex flex-col gap-3">
//           <button type="button" onClick={() => signIn('google')}
//             className="flex items-center gap-3 w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-white text-sm font-medium">
//             <GoogleIcon /> Continue with Google
//           </button>
//           <button type="button" onClick={() => signIn('github')}
//             className="flex items-center gap-3 w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-white text-sm font-medium">
//             <GitHubIcon /> Continue with GitHub
//           </button>
//         </div>
//         <p className="text-xs text-gray-600 text-center">By signing in you agree to our terms of service.</p>
//       </div>
//     </div>
//   )
// }

// // ── Sign Out Modal ─────────────────────────────────────────────────────────
// function SignOutModal({ onClose }: { onClose: () => void }) {
//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center px-4"
//       style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)' }}
//       onClick={onClose}>
//       <div className="w-full max-w-sm rounded-2xl border border-white/10 shadow-2xl p-6 flex flex-col gap-5"
//         style={{ backgroundColor: 'rgba(15,15,15,0.95)' }}
//         onClick={e => e.stopPropagation()}>
//         <div className="flex items-center justify-between">
//           <div>
//             <h2 className="text-white font-semibold text-lg">Sign out</h2>
//             <p className="text-gray-400 text-xs mt-0.5">Are you sure you want to sign out?</p>
//           </div>
//           <button type="button" onClick={onClose} className="text-gray-500 hover:text-white transition-colors p-1">✕</button>
//         </div>
//         <div className="flex gap-3">
//           <Button variant="outline"
//             className="flex-1 rounded-xl border-white/10 bg-white/5 hover:bg-white/10 text-white"
//             onClick={onClose}>
//             Cancel
//           </Button>
//           <Button variant="destructive" className="flex-1 rounded-xl" onClick={() => signOut()}>
//             Yes, sign out
//           </Button>
//         </div>
//       </div>
//     </div>
//   )
// }

// // ── Avatar Component ───────────────────────────────────────────────────────
// function UserAvatar({ image, name, size = 32, extraClass = '' }: {
//   image?: string | null; name?: string | null; size?: number; extraClass?: string
// }) {
//   return image ? (
//     <Image src={image} alt={name ?? 'avatar'} width={size} height={size}
//       className={`rounded-full ring-2 ring-gray-600 transition-all ${extraClass}`}
//       style={{ width: size, height: size }} />
//   ) : (
//     <div className={`rounded-full bg-gray-700 flex items-center justify-center font-bold ring-2 ring-gray-600 transition-all ${extraClass}`}
//       style={{ width: size, height: size, fontSize: size * 0.375 }}>
//       {name?.[0]?.toUpperCase() ?? '?'}
//     </div>
//   )
// }

// // ── MoreSecondNav ──────────────────────────────────────────────────────────
// function MoreSecondNav() {
//   const [isOpen, setIsOpen] = useState(false)
//   const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
//   const open  = () => { if (closeTimer.current) clearTimeout(closeTimer.current); setIsOpen(true) }
//   const close = () => { closeTimer.current = setTimeout(() => setIsOpen(false), 80) }

//   return (
//     <div className="relative" onMouseEnter={open} onMouseLeave={close}>
//       <button type="button"
//         className={`text-sm transition-colors hover:text-white ${isOpen ? 'text-white' : 'text-gray-400'}`}>
//         More
//       </button>
//       {/* Invisible bridge between button and dropdown */}
//       {isOpen && (
//         <div className="absolute left-1/2 -translate-x-1/2"
//           style={{ top: '100%', height: '12px', width: '120px' }}
//           onMouseEnter={open} onMouseLeave={close} />
//       )}
//       {/* ── Secondary nav dropdown — uses shared DROPDOWN_BLUR_BG ── */}
//       <div
//         className={`fixed left-0 right-0 z-40 border-b border-white/10 overflow-hidden transition-all duration-300 ease-out
//           ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
//         style={{ top: '63px', ...DROPDOWN_BLUR_BG }}
//         onMouseEnter={open} onMouseLeave={close}
//       >
//         <div className="max-w-5xl mx-auto px-8 py-5">
//           <div className="flex justify-end gap-10 text-sm">
//             <Link href="/sayhello" className="text-gray-400 hover:text-white transition-colors py-2"
//               onClick={() => setIsOpen(false)}>Say Hello</Link>
//             <Link href="/code" className="text-gray-400 hover:text-white transition-colors py-2"
//               onClick={() => setIsOpen(false)}>Code block</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// // ── Guest preview (avatars + count, no follow button) ─────────────────────
// function GuestFollowPreview() {
//   const [data, setData] = useState<FollowersData>({ followers: [], total: 0 })

//   useEffect(() => {
//     fetch('/api/followers').then(r => r.json()).then(setData).catch(() => {})
//   }, [])

//   if (data.total === 0) return null

//   const shown    = data.followers.slice(0, 3)
//   const overflow = data.total - shown.length

//   return (
//     <div className="flex items-center gap-1.5">
//       <AvatarGroup>
//         {shown.map(f => (
//           <SAvatar key={f.userId} className="w-6 h-6 border border-white/20">
//             <AvatarImage src={f.image} alt={f.name} />
//             <AvatarFallback className="text-[10px] bg-gray-700 text-white">
//               {f.name?.[0]?.toUpperCase() ?? '?'}
//             </AvatarFallback>
//           </SAvatar>
//         ))}
//         {overflow > 0 && (
//           <AvatarGroupCount className="w-6 h-6 text-[10px] bg-gray-700 text-white border border-white/20">
//             +{formatCount(overflow)}
//           </AvatarGroupCount>
//         )}
//       </AvatarGroup>
//       <span className="text-gray-400 text-xs font-medium tabular-nums">
//         {formatCount(data.total)} followers
//       </span>
//     </div>
//   )
// }

// // ── Main Navbar ─────────────────────────────────────────────────────────────
// export default function Navbar() {
//   const [visible,     setVisible]     = useState(true)
//   const [menuOpen,    setMenuOpen]    = useState(false)
//   const [showModal,   setShowModal]   = useState(false)
//   const [showSignOut, setShowSignOut] = useState(false)

//   const lastY    = useRef(0)
//   const pathname = usePathname()
//   const { data: session, status } = useSession()

//   useEffect(() => {
//     const onScroll = () => {
//       const y = window.scrollY
//       setVisible(y < lastY.current || y < 10)
//       lastY.current = y
//     }
//     window.addEventListener('scroll', onScroll, { passive: true })
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   useEffect(() => {
//     setMenuOpen(false); setShowModal(false); setShowSignOut(false)
//   }, [pathname])

//   useEffect(() => {
//     document.body.style.overflow = (showModal || showSignOut) ? 'hidden' : ''
//     return () => { document.body.style.overflow = '' }
//   }, [showModal, showSignOut])

//   return (
//     <>
//       {showModal   && <SignInModal  onClose={() => setShowModal(false)}   />}
//       {showSignOut && <SignOutModal onClose={() => setShowSignOut(false)} />}

//       <nav
//         className={`fixed top-0 left-0 w-full z-50 text-white transition-transform duration-300 border-b border-white/[0.06]
//           ${visible ? 'translate-y-0' : '-translate-y-full'}`}
//         style={BLUR_BG}
//       >
//         {/*
//           ┌─────────────────────────────────────────────────────────────────┐
//           │  max-w-5xl gives plenty of room for logo + links + auth.        │
//           │  Logo is shrink-0 so it never compresses.                        │
//           │  A 12-unit left margin separates logo from the nav link group.  │
//           └─────────────────────────────────────────────────────────────────┘
//         */}
//         <div className="max-w-5xl mx-auto px-6 py-4 flex items-center relative">

//           {/* ── Logo — fixed, never shrinks ── */}
//           <Link href="/"
//             className="shrink-0 text-base font-bold tracking-tight hover:text-gray-300 transition-colors">
//             Sam
//           </Link>

//           {/* ── Desktop nav — pushed right, with generous left gap from logo ── */}
//           <div className="hidden md:flex items-center gap-5 text-sm ml-12">
//             {NAV_LINKS.map(({ label, href }) => (
//               <Link key={href} href={href}
//                 className={`transition-colors hover:text-white whitespace-nowrap
//                   ${pathname === href ? 'text-white font-medium' : 'text-gray-400'}`}>
//                 {label}
//               </Link>
//             ))}

//             <MoreSecondNav />

//             {/* ── Spacer pushes auth to the far right ── */}
//             <div className="flex-1" />

//             {/* ── Auth + Follow area ── */}
//             {status === 'loading' ? (
//               <div className="w-8 h-8 rounded-full bg-gray-800 animate-pulse" />
//             ) : session ? (
//               // Avatar left → followers + follow button right
//               <div className="flex items-center gap-3">
//                 <button type="button" onClick={() => setShowSignOut(true)}
//                   className="focus:outline-none group shrink-0">
//                   <UserAvatar
//                     image={session.user?.image}
//                     name={session.user?.name}
//                     size={32}
//                     extraClass="group-hover:ring-red-500"
//                   />
//                 </button>
//                 <FollowSection session={session} />
//               </div>
//             ) : (
//               <div className="flex items-center gap-3">
//                 <GuestFollowPreview />
//                 <button type="button" onClick={() => setShowModal(true)}
//                   className="text-sm flex items-center justify-center gap-2 py-1.5 px-4 rounded-2xl border cursor-pointer border-white/20 bg-white/5 hover:bg-white/10 transition-all text-gray-400 hover:text-white whitespace-nowrap">
//                   Sign in
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* ── Mobile hamburger ── */}
//           <button type="button" onClick={() => setMenuOpen(o => !o)}
//             className="md:hidden text-white p-2 ml-auto" aria-label="Toggle menu">
//             {menuOpen ? (
//               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             ) : (
//               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             )}
//           </button>
//         </div>

//         {/* ── Mobile menu ── */}
//         <div className={`md:hidden absolute top-full px-1 left-0 w-full overflow-hidden transition-all duration-300 ease-out z-[60]
//           ${menuOpen ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'}`}>
//           <div style={{
//             ...DROPDOWN_BLUR_BG,
//             borderTop:                '1px solid rgba(255,255,255,0.15)',
//             borderBottomLeftRadius:   '20px',
//             borderBottomRightRadius:  '20px',
//           }}>
//             <div className="flex flex-col px-6 py-7 gap-6 text-base">
//               {NAV_LINKS.map(({ label, href }) => (
//                 <Link key={href} href={href}
//                   className={`transition-colors hover:text-white ${pathname === href ? 'text-white font-medium' : 'text-gray-300'}`}
//                   onClick={() => setMenuOpen(false)}>
//                   {label}
//                 </Link>
//               ))}

//               <div className="border-t border-white/10 pt-4">
//                 <Link href="/sayhello"
//                   className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-base py-1"
//                   onClick={() => setMenuOpen(false)}>
//                   Say Hello
//                 </Link>
//               </div>

//               <div className="pt-4 border-t border-white/10 flex flex-col gap-4">
//                 {status === 'loading' ? (
//                   <div className="w-full h-11 rounded-2xl bg-gray-800 animate-pulse" />
//                 ) : session ? (
//                   <>
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-3">
//                         <UserAvatar image={session.user?.image} name={session.user?.name} size={40} />
//                         <div>
//                           <div className="text-white text-sm">{session.user?.name}</div>
//                           <div className="text-xs text-gray-400">{session.user?.email}</div>
//                         </div>
//                       </div>
//                       <button type="button"
//                         onClick={() => { setMenuOpen(false); setShowSignOut(true) }}
//                         className="text-red-400 hover:text-red-300 text-sm font-medium">
//                         Sign out
//                       </button>
//                     </div>
//                     <div className="flex justify-center">
//                       <FollowSection session={session} />
//                     </div>
//                   </>
//                 ) : (
//                   <>
//                     <div className="flex justify-center pb-1">
//                       <GuestFollowPreview />
//                     </div>
//                     <button type="button" onClick={() => { setMenuOpen(false); signIn('google') }}
//                       className="flex items-center justify-center gap-3 w-full py-3 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 transition-all text-white text-sm">
//                       <GoogleIcon /> Continue with Google
//                     </button>
//                     <button type="button" onClick={() => { setMenuOpen(false); signIn('github') }}
//                       className="flex items-center justify-center gap-3 w-full py-3 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 transition-all text-white text-sm">
//                       <GitHubIcon /> Continue with GitHub
//                     </button>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   )
// }













// // components/Navbar.tsx
// 'use client'

// import { useEffect, useRef, useState, useCallback } from 'react'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { useSession, signIn, signOut } from 'next-auth/react'
// import Image from 'next/image'
// import {
//   Avatar       as SAvatar,
//   AvatarFallback,
//   AvatarGroup,
//   AvatarGroupCount,
//   AvatarImage,
// } from '@/components/ui/avatar'
// import { Button } from '@/components/ui/button'
// import { formatCount } from '@/lib/formatFollowers'

// // ── Navigation Data ────────────────────────────────────────────────────────
// const NAV_LINKS = [
//   { label: 'Home',       href: '/' },
//   { label: 'Writing',    href: '/writing' },
//   { label: 'Blogs',      href: '/blogs' },
//   { label: 'Projects',   href: '/projects' },
//   { label: 'Experience', href: '/experience' },
//   { label: 'Updates',    href: '/updates' },
// ]

// // ── Shared blur style helpers ──────────────────────────────────────────────
// const BLUR_BG = {
//   backgroundColor:      'rgba(8, 8, 8, 0.55)',
//   backdropFilter:       'blur(24px) saturate(180%)',
//   WebkitBackdropFilter: 'blur(24px) saturate(180%)',
// } as const

// const DROPDOWN_BLUR_BG = {
//   backgroundColor:      'rgba(8, 8, 8, 0.65)',
//   backdropFilter:       'blur(32px) saturate(180%)',
//   WebkitBackdropFilter: 'blur(32px) saturate(180%)',
// } as const

// // ── Types ──────────────────────────────────────────────────────────────────
// interface Follower {
//   userId:     string
//   name:       string
//   image:      string
//   followedAt: string
// }

// interface FollowersData {
//   followers: Follower[]
//   total:     number
// }

// // ── Icons ──────────────────────────────────────────────────────────────────
// const GoogleIcon = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24">
//     <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
//     <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
//     <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
//     <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
//   </svg>
// )

// const GitHubIcon = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
//   </svg>
// )

// // ── Follower data hook ─────────────────────────────────────────────────────
// function useFollowers(userEmail?: string | null) {
//   const [data,        setData]        = useState<FollowersData>({ followers: [], total: 0 })
//   const [isFollowing, setIsFollowing] = useState(false)
//   const [loading,     setLoading]     = useState(false)

//   const refresh = useCallback(async () => {
//     try {
//       const res  = await fetch('/api/followers')
//       const json = await res.json()
//       setData(json)
//       if (userEmail)
//         setIsFollowing(json.followers.some((f: Follower) => f.userId === userEmail))
//     } catch { /* silently fail */ }
//   }, [userEmail])

//   useEffect(() => { refresh() }, [refresh])

//   const toggleFollow = async () => {
//     if (loading) return
//     setLoading(true)
//     setIsFollowing(v => !v)
//     setData(d => ({ ...d, total: d.total + (isFollowing ? -1 : 1) }))
//     try {
//       await fetch('/api/followers/me', { method: isFollowing ? 'DELETE' : 'POST' })
//       await refresh()
//     } catch {
//       setIsFollowing(v => !v)
//       setData(d => ({ ...d, total: d.total + (isFollowing ? 1 : -1) }))
//     } finally {
//       setLoading(false)
//     }
//   }

//   return { data, isFollowing, loading, toggleFollow }
// }

// // ── Unfollow Confirm Modal — centered fixed overlay ────────────────────────
// function UnfollowConfirmModal({ onConfirm, onClose }: { onConfirm: () => void; onClose: () => void }) {
//   return (
//     <div
//       className="fixed inset-0 z-[100] flex items-center justify-center px-4"
//       style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}
//       onClick={onClose}
//     >
//       <div
//         className="w-full max-w-sm rounded-2xl border border-white/10 shadow-2xl p-6 flex flex-col gap-5"
//         style={{ backgroundColor: 'rgba(15,15,15,0.95)' }}
//         onClick={e => e.stopPropagation()}
//       >
//         <div className="flex items-center justify-between">
//           <div>
//             <h2 className="text-white font-semibold text-lg">Unfollow?</h2>
//             <p className="text-gray-400 text-xs mt-0.5">Are you sure you want to unfollow?</p>
//           </div>
//           <button type="button" onClick={onClose} className="text-gray-500 hover:text-white transition-colors p-1">✕</button>
//         </div>
//         <div className="flex gap-3">
//           <Button
//             variant="outline"
//             className="flex-1 rounded-xl border-white/10 bg-white/5 hover:bg-white/10 text-white"
//             onClick={onClose}
//           >
//             Cancel
//           </Button>
//           <Button
//             variant="destructive"
//             className="flex-1 rounded-xl"
//             onClick={() => { onConfirm(); onClose() }}
//           >
//             Yes, unfollow
//           </Button>
//         </div>
//       </div>
//     </div>
//   )
// }

// // ── Follow Section (avatar group + button) ─────────────────────────────────
// function FollowSection({ session }: { session: any }) {
//   const { data, isFollowing, loading, toggleFollow } = useFollowers(session?.user?.email)
//   const [showUnfollowConfirm, setShowUnfollowConfirm] = useState(false)

//   const shown    = data.followers.slice(0, 3)
//   const overflow = data.total - shown.length

//   const handleFollowClick = () => isFollowing ? setShowUnfollowConfirm(true) : toggleFollow()

//   return (
//     <>
//       {showUnfollowConfirm && (
//         <UnfollowConfirmModal onConfirm={toggleFollow} onClose={() => setShowUnfollowConfirm(false)} />
//       )}
//       <div className="flex items-center gap-2">
//         {data.followers.length > 0 && (
//           <div className="flex items-center gap-1.5">
//             <AvatarGroup>
//               {shown.map(f => (
//                 <SAvatar key={f.userId} className="w-6 h-6 border border-white/20">
//                   <AvatarImage src={f.image} alt={f.name} />
//                   <AvatarFallback className="text-[10px] bg-gray-700 text-white">
//                     {f.name?.[0]?.toUpperCase() ?? '?'}
//                   </AvatarFallback>
//                 </SAvatar>
//               ))}
//               {overflow > 0 && (
//                 <AvatarGroupCount className="w-6 h-6 text-[10px] bg-gray-700 text-white border border-white/20">
//                   +{formatCount(overflow)}
//                 </AvatarGroupCount>
//               )}
//             </AvatarGroup>
//             <span className="text-gray-400 text-xs font-medium tabular-nums">
//               {formatCount(data.total)}
//             </span>
//           </div>
//         )}
//         <Button
//           type="button"
//           size="sm"
//           disabled={loading}
//           onClick={handleFollowClick}
//           className={`rounded-xl text-xs px-3 py-1.5 font-medium transition-all
//             ${isFollowing
//               ? 'border border-white/20 bg-white/10 text-white hover:bg-red-500/10 hover:border-red-500/40 hover:text-red-400'
//               : 'border border-indigo-500/50 bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 hover:text-indigo-300'
//             } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
//         >
//           {isFollowing ? 'Following ✓' : 'Follow +'}
//         </Button>
//       </div>
//     </>
//   )
// }

// // ── Sign In Modal ──────────────────────────────────────────────────────────
// function SignInModal({ onClose }: { onClose: () => void }) {
//   return (
//     <div
//       className="fixed inset-0 z-[100] flex items-center justify-center px-4"
//       style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}
//       onClick={onClose}
//     >
//       <div
//         className="w-full max-w-sm rounded-2xl border border-white/10 shadow-2xl p-6 flex flex-col gap-4"
//         style={{ backgroundColor: 'rgba(15,15,15,0.95)' }}
//         onClick={e => e.stopPropagation()}
//       >
//         <div className="flex items-center justify-between">
//           <div>
//             <h2 className="text-white font-semibold text-lg">Sign in</h2>
//             <p className="text-gray-400 text-xs mt-0.5">Choose a provider to continue</p>
//           </div>
//           <button type="button" onClick={onClose} className="text-gray-500 hover:text-white transition-colors p-1">✕</button>
//         </div>
//         <div className="flex flex-col gap-3">
//           <button type="button" onClick={() => signIn('google')}
//             className="flex items-center gap-3 w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-white text-sm font-medium">
//             <GoogleIcon /> Continue with Google
//           </button>
//           <button type="button" onClick={() => signIn('github')}
//             className="flex items-center gap-3 w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-white text-sm font-medium">
//             <GitHubIcon /> Continue with GitHub
//           </button>
//         </div>
//         <p className="text-xs text-gray-600 text-center">By signing in you agree to our terms of service.</p>
//       </div>
//     </div>
//   )
// }

// // ── Sign Out Modal ─────────────────────────────────────────────────────────
// function SignOutModal({ onClose }: { onClose: () => void }) {
//   return (
//     <div
//       className="fixed inset-0 z-[100] flex items-center justify-center px-4"
//       style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}
//       onClick={onClose}
//     >
//       <div
//         className="w-full max-w-sm rounded-2xl border border-white/10 shadow-2xl p-6 flex flex-col gap-5"
//         style={{ backgroundColor: 'rgba(15,15,15,0.95)' }}
//         onClick={e => e.stopPropagation()}
//       >
//         <div className="flex items-center justify-between">
//           <div>
//             <h2 className="text-white font-semibold text-lg">Sign out</h2>
//             <p className="text-gray-400 text-xs mt-0.5">Are you sure you want to sign out?</p>
//           </div>
//           <button type="button" onClick={onClose} className="text-gray-500 hover:text-white transition-colors p-1">✕</button>
//         </div>
//         <div className="flex gap-3">
//           <Button
//             variant="outline"
//             className="flex-1 rounded-xl border-white/10 bg-white/5 hover:bg-white/10 text-white"
//             onClick={onClose}
//           >
//             Cancel
//           </Button>
//           <Button variant="destructive" className="flex-1 rounded-xl" onClick={() => signOut()}>
//             Yes, sign out
//           </Button>
//         </div>
//       </div>
//     </div>
//   )
// }

// // ── Avatar Component ───────────────────────────────────────────────────────
// function UserAvatar({ image, name, size = 32, extraClass = '' }: {
//   image?: string | null; name?: string | null; size?: number; extraClass?: string
// }) {
//   return image ? (
//     <Image src={image} alt={name ?? 'avatar'} width={size} height={size}
//       className={`rounded-full ring-2 ring-gray-600 transition-all ${extraClass}`}
//       style={{ width: size, height: size }} />
//   ) : (
//     <div
//       className={`rounded-full bg-gray-700 flex items-center justify-center font-bold ring-2 ring-gray-600 transition-all ${extraClass}`}
//       style={{ width: size, height: size, fontSize: size * 0.375 }}
//     >
//       {name?.[0]?.toUpperCase() ?? '?'}
//     </div>
//   )
// }

// // ── MoreSecondNav ──────────────────────────────────────────────────────────
// function MoreSecondNav() {
//   const [isOpen, setIsOpen] = useState(false)
//   const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
//   const open  = () => { if (closeTimer.current) clearTimeout(closeTimer.current); setIsOpen(true) }
//   const close = () => { closeTimer.current = setTimeout(() => setIsOpen(false), 80) }

//   return (
//     <div className="relative" onMouseEnter={open} onMouseLeave={close}>
//       <button
//         type="button"
//         className={`text-sm transition-colors hover:text-white ${isOpen ? 'text-white' : 'text-gray-400'}`}
//       >
//         More
//       </button>

//       {/* Invisible bridge between button and dropdown */}
//       {isOpen && (
//         <div
//           className="absolute left-1/2 -translate-x-1/2"
//           style={{ top: '100%', height: '12px', width: '120px' }}
//           onMouseEnter={open}
//           onMouseLeave={close}
//         />
//       )}

//       {/* ── Secondary nav dropdown — centered content, blur bg ── */}
//       <div
//         className={`fixed left-0 right-0 z-40 border-b border-white/10 overflow-hidden transition-all duration-300 ease-out
//           ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
//         style={{ top: '63px', ...DROPDOWN_BLUR_BG }}
//         onMouseEnter={open}
//         onMouseLeave={close}
//       >
//         {/* ── Centered container matching navbar width ── */}
//         <div className="max-w-5xl mx-auto px-6 py-5">
//           <div className="flex justify-center gap-10 text-sm">
//             <Link
//               href="/sayhello"
//               className="text-gray-400 hover:text-white transition-colors py-2"
//               onClick={() => setIsOpen(false)}
//             >
//               Say Hello
//             </Link>
//             <Link
//               href="/code"
//               className="text-gray-400 hover:text-white transition-colors py-2"
//               onClick={() => setIsOpen(false)}
//             >
//               Code block
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// // ── Guest preview (avatars + count, no follow button) ─────────────────────
// function GuestFollowPreview() {
//   const [data, setData] = useState<FollowersData>({ followers: [], total: 0 })

//   useEffect(() => {
//     fetch('/api/followers').then(r => r.json()).then(setData).catch(() => {})
//   }, [])

//   if (data.total === 0) return null

//   const shown    = data.followers.slice(0, 3)
//   const overflow = data.total - shown.length

//   return (
//     <div className="flex items-center gap-1.5">
//       <AvatarGroup>
//         {shown.map(f => (
//           <SAvatar key={f.userId} className="w-6 h-6 border border-white/20">
//             <AvatarImage src={f.image} alt={f.name} />
//             <AvatarFallback className="text-[10px] bg-gray-700 text-white">
//               {f.name?.[0]?.toUpperCase() ?? '?'}
//             </AvatarFallback>
//           </SAvatar>
//         ))}
//         {overflow > 0 && (
//           <AvatarGroupCount className="w-6 h-6 text-[10px] bg-gray-700 text-white border border-white/20">
//             +{formatCount(overflow)}
//           </AvatarGroupCount>
//         )}
//       </AvatarGroup>
//       <span className="text-gray-400 text-xs font-medium tabular-nums">
//         {formatCount(data.total)} followers
//       </span>
//     </div>
//   )
// }

// // ── Mobile Followers Strip — shown between logo and hamburger ──────────────
// function MobileFollowersStrip({ session }: { session: any }) {
//   // Signed-in: show FollowSection (avatars + follow/unfollow button)
//   if (session) {
//     return (
//       <div className="flex items-center justify-center flex-1">
//         <FollowSection session={session} />
//       </div>
//     )
//   }
//   // Guest: show GuestFollowPreview (avatars + count only)
//   return (
//     <div className="flex items-center justify-center flex-1">
//       <GuestFollowPreview />
//     </div>
//   )
// }

// // ── Main Navbar ─────────────────────────────────────────────────────────────
// export default function Navbar() {
//   const [visible,     setVisible]     = useState(true)
//   const [menuOpen,    setMenuOpen]    = useState(false)
//   const [showModal,   setShowModal]   = useState(false)
//   const [showSignOut, setShowSignOut] = useState(false)

//   const lastY    = useRef(0)
//   const pathname = usePathname()
//   const { data: session, status } = useSession()

//   useEffect(() => {
//     const onScroll = () => {
//       const y = window.scrollY
//       setVisible(y < lastY.current || y < 10)
//       lastY.current = y
//     }
//     window.addEventListener('scroll', onScroll, { passive: true })
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   useEffect(() => {
//     setMenuOpen(false); setShowModal(false); setShowSignOut(false)
//   }, [pathname])

//   useEffect(() => {
//     document.body.style.overflow = (showModal || showSignOut) ? 'hidden' : ''
//     return () => { document.body.style.overflow = '' }
//   }, [showModal, showSignOut])

//   return (
//     <>
//       {showModal   && <SignInModal  onClose={() => setShowModal(false)}   />}
//       {showSignOut && <SignOutModal onClose={() => setShowSignOut(false)} />}

//       <nav
//         className={`fixed top-0 left-0 w-full z-50 text-white transition-transform duration-300 border-b border-white/[0.06]
//           ${visible ? 'translate-y-0' : '-translate-y-full'}`}
//         style={BLUR_BG}
//       >
//         {/* ── Desktop navbar ── */}
//         <div className="max-w-5xl mx-auto px-6 py-4 flex items-center">

//           {/* Logo */}
//           <Link
//             href="/"
//             className="shrink-0 text-base font-bold tracking-tight hover:text-gray-300 transition-colors"
//           >
//             Sam
//           </Link>

//           {/* ── Desktop nav: centered links ── */}
//           <div className="hidden md:flex flex-1 items-center justify-center gap-5 text-sm">
//             {NAV_LINKS.map(({ label, href }) => (
//               <Link
//                 key={href}
//                 href={href}
//                 className={`transition-colors hover:text-white whitespace-nowrap
//                   ${pathname === href ? 'text-white font-medium' : 'text-gray-400'}`}
//               >
//                 {label}
//               </Link>
//             ))}
//             <MoreSecondNav />
//           </div>

//           {/* ── Desktop Auth + Follow (far right) ── */}
//           <div className="hidden md:flex items-center gap-3 shrink-0">
//             {status === 'loading' ? (
//               <div className="w-8 h-8 rounded-full bg-gray-800 animate-pulse" />
//             ) : session ? (
//               <div className="flex items-center gap-3">
//                 <button type="button" onClick={() => setShowSignOut(true)}
//                   className="focus:outline-none group shrink-0">
//                   <UserAvatar
//                     image={session.user?.image}
//                     name={session.user?.name}
//                     size={32}
//                     extraClass="group-hover:ring-red-500"
//                   />
//                 </button>
//                 <FollowSection session={session} />
//               </div>
//             ) : (
//               <div className="flex items-center gap-3">
//                 <GuestFollowPreview />
//                 <button
//                   type="button"
//                   onClick={() => setShowModal(true)}
//                   className="text-sm flex items-center justify-center gap-2 py-1.5 px-4 rounded-2xl border cursor-pointer border-white/20 bg-white/5 hover:bg-white/10 transition-all text-gray-400 hover:text-white whitespace-nowrap"
//                 >
//                   Sign in
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* ── Mobile: logo | followers strip (center) | hamburger ── */}
//           <div className="flex md:hidden flex-1 items-center justify-between">
//             {/* Followers centered between logo and hamburger */}
//             {status !== 'loading' && (
//               <MobileFollowersStrip session={session ?? null} />
//             )}
//             {status === 'loading' && <div className="flex-1" />}

//             {/* Hamburger */}
//             <button
//               type="button"
//               onClick={() => setMenuOpen(o => !o)}
//               className="text-white p-2 shrink-0"
//               aria-label="Toggle menu"
//             >
//               {menuOpen ? (
//                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               ) : (
//                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>

//         {/* ── Mobile menu ── */}
//         <div
//           className={`md:hidden absolute top-full px-1 left-0 w-full overflow-hidden transition-all duration-300 ease-out z-[60]
//             ${menuOpen ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'}`}
//         >
//           <div style={{
//             ...DROPDOWN_BLUR_BG,
//             borderTop:               '1px solid rgba(255,255,255,0.15)',
//             borderBottomLeftRadius:  '20px',
//             borderBottomRightRadius: '20px',
//           }}>
//             <div className="flex flex-col px-6 py-7 gap-6 text-base">
//               {NAV_LINKS.map(({ label, href }) => (
//                 <Link
//                   key={href}
//                   href={href}
//                   className={`transition-colors hover:text-white ${pathname === href ? 'text-white font-medium' : 'text-gray-300'}`}
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   {label}
//                 </Link>
//               ))}

//               <div className="border-t border-white/10 pt-4">
//                 <Link
//                   href="/sayhello"
//                   className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-base py-1"
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   Say Hello
//                 </Link>
//               </div>

//               <div className="pt-4 border-t border-white/10 flex flex-col gap-4">
//                 {status === 'loading' ? (
//                   <div className="w-full h-11 rounded-2xl bg-gray-800 animate-pulse" />
//                 ) : session ? (
//                   <>
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-3">
//                         <UserAvatar image={session.user?.image} name={session.user?.name} size={40} />
//                         <div>
//                           <div className="text-white text-sm">{session.user?.name}</div>
//                           <div className="text-xs text-gray-400">{session.user?.email}</div>
//                         </div>
//                       </div>
//                       <button
//                         type="button"
//                         onClick={() => { setMenuOpen(false); setShowSignOut(true) }}
//                         className="text-red-400 hover:text-red-300 text-sm font-medium"
//                       >
//                         Sign out
//                       </button>
//                     </div>
//                   </>
//                 ) : (
//                   <>
//                     <button
//                       type="button"
//                       onClick={() => { setMenuOpen(false); signIn('google') }}
//                       className="flex items-center justify-center gap-3 w-full py-3 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 transition-all text-white text-sm"
//                     >
//                       <GoogleIcon /> Continue with Google
//                     </button>
//                     <button
//                       type="button"
//                       onClick={() => { setMenuOpen(false); signIn('github') }}
//                       className="flex items-center justify-center gap-3 w-full py-3 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 transition-all text-white text-sm"
//                     >
//                       <GitHubIcon /> Continue with GitHub
//                     </button>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   )
// }




















































































// // components/Navbar.tsx
// 'use client'

// import { useEffect, useRef, useState, useCallback } from 'react'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { useSession, signIn, signOut } from 'next-auth/react'
// import Image from 'next/image'
// import {
//   Avatar       as SAvatar,
//   AvatarFallback,
//   AvatarGroup,
//   AvatarGroupCount,
//   AvatarImage,
// } from '@/components/ui/avatar'
// import { Button } from '@/components/ui/button'
// import { formatCount } from '@/lib/formatFollowers'

// // ── Shared blur style helpers ──────────────────────────────────────────────
// const BLUR_BG = {
//   backgroundColor:      'rgba(8, 8, 8, 0.55)',
//   backdropFilter:       'blur(24px) saturate(180%)',
//   WebkitBackdropFilter: 'blur(24px) saturate(180%)',
// } as const

// const DROPDOWN_BLUR_BG = {
//   backgroundColor:      'rgba(8, 8, 8, 0.65)',
//   backdropFilter:       'blur(32px) saturate(180%)',
//   WebkitBackdropFilter: 'blur(32px) saturate(180%)',
// } as const

// // ── Navigation Data ────────────────────────────────────────────────────────
// const NAV_LINKS = [
//   { label: 'Home',       href: '/' },
//   { label: 'Writing',    href: '/writing' },
//   { label: 'Blogs',      href: '/blogs' },
//   { label: 'Projects',   href: '/projects' },
//   { label: 'Experience', href: '/experience' },
//   { label: 'Updates',    href: '/updates' },
// ]

// // ── Types ──────────────────────────────────────────────────────────────────
// interface Follower {
//   userId:     string
//   name:       string
//   image:      string
//   followedAt: string
// }

// interface FollowersData {
//   followers: Follower[]
//   total:     number
// }

// // ── Icons ──────────────────────────────────────────────────────────────────
// const GoogleIcon = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24">
//     <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
//     <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
//     <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
//     <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
//   </svg>
// )

// const GitHubIcon = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
//   </svg>
// )

// // ── Follower data hook ─────────────────────────────────────────────────────
// function useFollowers(userEmail?: string | null) {
//   const [data,        setData]        = useState<FollowersData>({ followers: [], total: 0 })
//   const [isFollowing, setIsFollowing] = useState(false)
//   const [loading,     setLoading]     = useState(false)

//   const refresh = useCallback(async () => {
//     try {
//       const res  = await fetch('/api/followers')
//       const json = await res.json()
//       setData(json)
//       if (userEmail)
//         setIsFollowing(json.followers.some((f: Follower) => f.userId === userEmail))
//     } catch { /* silently fail */ }
//   }, [userEmail])

//   useEffect(() => { refresh() }, [refresh])

//   const toggleFollow = async () => {
//     if (loading) return
//     setLoading(true)
//     setIsFollowing(v => !v)
//     setData(d => ({ ...d, total: d.total + (isFollowing ? -1 : 1) }))
//     try {
//       await fetch('/api/followers/me', { method: isFollowing ? 'DELETE' : 'POST' })
//       await refresh()
//     } catch {
//       setIsFollowing(v => !v)
//       setData(d => ({ ...d, total: d.total + (isFollowing ? 1 : -1) }))
//     } finally {
//       setLoading(false)
//     }
//   }

//   return { data, isFollowing, loading, toggleFollow }
// }

// // ── Unfollow Confirm Modal — centered, with visible button ─────────────────
// function UnfollowConfirmModal({ onConfirm, onClose }: { onConfirm: () => void; onClose: () => void }) {
//   return (
//     <div
//       className="fixed inset-0 z-[100] flex items-center justify-center px-4"
//       style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}
//       onClick={onClose}
//     >
//       <div
//         className="w-full max-w-sm rounded-2xl border border-white/10 shadow-2xl p-6 flex flex-col gap-5"
//         style={{ backgroundColor: 'rgba(15,15,15,0.95)' }}
//         onClick={e => e.stopPropagation()}
//       >
//         <div className="flex items-center justify-between">
//           <div>
//             <h2 className="text-white font-semibold text-lg">Unfollow?</h2>
//             <p className="text-gray-400 text-xs mt-0.5">Are you sure you want to unfollow?</p>
//           </div>
//           <button type="button" onClick={onClose} className="text-gray-500 hover:text-white transition-colors p-1">✕</button>
//         </div>
//         <div className="flex gap-3">
//           <Button
//             variant="outline"
//             className="flex-1 rounded-xl border-white/10 bg-white/5 hover:bg-white/10 text-white"
//             onClick={onClose}
//           >
//             Cancel
//           </Button>
//           <Button
//             className="flex-1 rounded-xl bg-red-600 hover:bg-red-700 text-white"
//             onClick={() => { onConfirm(); onClose() }}
//           >
//             Yes, unfollow
//           </Button>
//         </div>
//       </div>
//     </div>
//   )
// }

// // ── Follow Section (avatar group + button) ─────────────────────────────────
// function FollowSection({ session }: { session: any }) {
//   const { data, isFollowing, loading, toggleFollow } = useFollowers(session?.user?.email)
//   const [showUnfollowConfirm, setShowUnfollowConfirm] = useState(false)

//   const shown    = data.followers.slice(0, 3)
//   const overflow = data.total - shown.length

//   const handleFollowClick = () => isFollowing ? setShowUnfollowConfirm(true) : toggleFollow()

//   return (
//     <>
//       {showUnfollowConfirm && (
//         <UnfollowConfirmModal onConfirm={toggleFollow} onClose={() => setShowUnfollowConfirm(false)} />
//       )}
//       <div className="flex items-center gap-2">
//         {data.followers.length > 0 && (
//           <div className="flex items-center gap-1.5">
//             <AvatarGroup>
//               {shown.map(f => (
//                 <SAvatar key={f.userId} className="w-6 h-6 border border-white/20">
//                   <AvatarImage src={f.image} alt={f.name} />
//                   <AvatarFallback className="text-[10px] bg-gray-700 text-white">
//                     {f.name?.[0]?.toUpperCase() ?? '?'}
//                   </AvatarFallback>
//                 </SAvatar>
//               ))}
//               {overflow > 0 && (
//                 <AvatarGroupCount className="w-6 h-6 text-[10px] bg-gray-700 text-white border border-white/20">
//                   +{formatCount(overflow)}
//                 </AvatarGroupCount>
//               )}
//             </AvatarGroup>
//             <span className="text-gray-400 text-xs font-medium tabular-nums">
//               {formatCount(data.total)}
//             </span>
//           </div>
//         )}
//         <Button
//           type="button"
//           size="sm"
//           disabled={loading}
//           onClick={handleFollowClick}
//           className={`rounded-xl text-xs px-3 py-1.5 font-medium transition-all
//             ${isFollowing
//               ? 'border border-white/20 bg-white/10 text-white hover:bg-red-500/10 hover:border-red-500/40 hover:text-red-400'
//               : 'border border-indigo-500/50 bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 hover:text-indigo-300'
//             } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
//         >
//           {isFollowing ? 'Following ✓' : 'Follow +'}
//         </Button>
//       </div>
//     </>
//   )
// }

// // ── Sign In Modal ──────────────────────────────────────────────────────────
// function SignInModal({ onClose }: { onClose: () => void }) {
//   return (
//     <div
//       className="fixed inset-0 z-[100] flex items-center justify-center px-4"
//       style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}
//       onClick={onClose}
//     >
//       <div
//         className="w-full max-w-sm rounded-2xl border border-white/10 shadow-2xl p-6 flex flex-col gap-4"
//         style={{ backgroundColor: 'rgba(15,15,15,0.95)' }}
//         onClick={e => e.stopPropagation()}
//       >
//         <div className="flex items-center justify-between">
//           <div>
//             <h2 className="text-white font-semibold text-lg">Sign in</h2>
//             <p className="text-gray-400 text-xs mt-0.5">Choose a provider to continue</p>
//           </div>
//           <button type="button" onClick={onClose} className="text-gray-500 hover:text-white transition-colors p-1">✕</button>
//         </div>
//         <div className="flex flex-col gap-3">
//           <button type="button" onClick={() => signIn('google')}
//             className="flex items-center gap-3 w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-white text-sm font-medium">
//             <GoogleIcon /> Continue with Google
//           </button>
//           <button type="button" onClick={() => signIn('github')}
//             className="flex items-center gap-3 w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-white text-sm font-medium">
//             <GitHubIcon /> Continue with GitHub
//           </button>
//         </div>
//         <p className="text-xs text-gray-600 text-center">By signing in you agree to our terms of service.</p>
//       </div>
//     </div>
//   )
// }

// // ── Sign Out Modal (fixed button visibility) ───────────────────────────────
// function SignOutModal({ onClose }: { onClose: () => void }) {
//   return (
//     <div
//       className="fixed inset-0 z-[100] flex items-center justify-center px-4"
//       style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}
//       onClick={onClose}
//     >
//       <div
//         className="w-full max-w-sm rounded-2xl border border-white/10 shadow-2xl p-6 flex flex-col gap-5"
//         style={{ backgroundColor: 'rgba(15,15,15,0.95)' }}
//         onClick={e => e.stopPropagation()}
//       >
//         <div className="flex items-center justify-between">
//           <div>
//             <h2 className="text-white font-semibold text-lg">Sign out</h2>
//             <p className="text-gray-400 text-xs mt-0.5">Are you sure you want to sign out?</p>
//           </div>
//           <button type="button" onClick={onClose} className="text-gray-500 hover:text-white transition-colors p-1">✕</button>
//         </div>
//         <div className="flex gap-3">
//           <Button
//             variant="outline"
//             className="flex-1 rounded-xl border-white/10 bg-white/5 hover:bg-white/10 text-white"
//             onClick={onClose}
//           >
//             Cancel
//           </Button>
//           <Button
//             className="flex-1 rounded-xl bg-red-600 hover:bg-red-700 text-white"
//             onClick={() => signOut()}
//           >
//             Yes, sign out
//           </Button>
//         </div>
//       </div>
//     </div>
//   )
// }

// // ── Avatar Component ───────────────────────────────────────────────────────
// function UserAvatar({ image, name, size = 32, extraClass = '' }: {
//   image?: string | null; name?: string | null; size?: number; extraClass?: string
// }) {
//   return image ? (
//     <Image src={image} alt={name ?? 'avatar'} width={size} height={size}
//       className={`rounded-full ring-2 ring-gray-600 transition-all ${extraClass}`}
//       style={{ width: size, height: size }} />
//   ) : (
//     <div
//       className={`rounded-full bg-gray-700 flex items-center justify-center font-bold ring-2 ring-gray-600 transition-all ${extraClass}`}
//       style={{ width: size, height: size, fontSize: size * 0.375 }}
//     >
//       {name?.[0]?.toUpperCase() ?? '?'}
//     </div>
//   )
// }

// // ── MoreSecondNav (blurred secondary navbar) ───────────────────────────────
// function MoreSecondNav() {
//   const [isOpen, setIsOpen] = useState(false)
//   const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
//   const open  = () => { if (closeTimer.current) clearTimeout(closeTimer.current); setIsOpen(true) }
//   const close = () => { closeTimer.current = setTimeout(() => setIsOpen(false), 80) }

//   return (
//     <div className="relative" onMouseEnter={open} onMouseLeave={close}>
//       <button
//         type="button"
//         className={`text-sm transition-colors hover:text-white ${isOpen ? 'text-white' : 'text-gray-400'}`}
//       >
//         More
//       </button>

//       {/* Invisible bridge between button and dropdown */}
//       {isOpen && (
//         <div
//           className="absolute left-1/2 -translate-x-1/2"
//           style={{ top: '100%', height: '12px', width: '120px' }}
//           onMouseEnter={open}
//           onMouseLeave={close}
//         />
//       )}

//       {/* ── Secondary nav dropdown — centered content, blur bg ── */}
//       <div
//         className={`fixed left-0 right-0 z-40 border-b border-white/10 overflow-hidden transition-all duration-300 ease-out
//           ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
//         style={{ top: '63px', ...DROPDOWN_BLUR_BG }}
//         onMouseEnter={open}
//         onMouseLeave={close}
//       >
//         <div className="max-w-5xl mx-auto px-6 py-5">
//           <div className="flex justify-center gap-10 text-sm">
//             <Link
//               href="/sayhello"
//               className="text-gray-400 hover:text-white transition-colors py-2"
//               onClick={() => setIsOpen(false)}
//             >
//               Say Hello
//             </Link>
//             <Link
//               href="/code"
//               className="text-gray-400 hover:text-white transition-colors py-2"
//               onClick={() => setIsOpen(false)}
//             >
//               Code block
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// // ── Guest preview (avatars + count, no follow button) ─────────────────────
// function GuestFollowPreview() {
//   const [data, setData] = useState<FollowersData>({ followers: [], total: 0 })

//   useEffect(() => {
//     fetch('/api/followers').then(r => r.json()).then(setData).catch(() => {})
//   }, [])

//   if (data.total === 0) return null

//   const shown    = data.followers.slice(0, 3)
//   const overflow = data.total - shown.length

//   return (
//     <div className="flex items-center gap-1.5">
//       <AvatarGroup>
//         {shown.map(f => (
//           <SAvatar key={f.userId} className="w-6 h-6 border border-white/20">
//             <AvatarImage src={f.image} alt={f.name} />
//             <AvatarFallback className="text-[10px] bg-gray-700 text-white">
//               {f.name?.[0]?.toUpperCase() ?? '?'}
//             </AvatarFallback>
//           </SAvatar>
//         ))}
//         {overflow > 0 && (
//           <AvatarGroupCount className="w-6 h-6 text-[10px] bg-gray-700 text-white border border-white/20">
//             +{formatCount(overflow)}
//           </AvatarGroupCount>
//         )}
//       </AvatarGroup>
//       <span className="text-gray-400 text-xs font-medium tabular-nums">
//         {formatCount(data.total)} followers
//       </span>
//     </div>
//   )
// }

// // ── Mobile Followers Strip — shown between logo and hamburger ──────────────
// function MobileFollowersStrip({ session }: { session: any }) {
//   if (session) {
//     return (
//       <div className="flex items-center justify-center flex-1">
//         <FollowSection session={session} />
//       </div>
//     )
//   }
//   return (
//     <div className="flex items-center justify-center flex-1">
//       <GuestFollowPreview />
//     </div>
//   )
// }

// // ── Main Navbar ─────────────────────────────────────────────────────────────
// export default function Navbar() {
//   const [visible,     setVisible]     = useState(true)
//   const [menuOpen,    setMenuOpen]    = useState(false)
//   const [showModal,   setShowModal]   = useState(false)
//   const [showSignOut, setShowSignOut] = useState(false)

//   const lastY    = useRef(0)
//   const pathname = usePathname()
//   const { data: session, status } = useSession()

//   useEffect(() => {
//     const onScroll = () => {
//       const y = window.scrollY
//       setVisible(y < lastY.current || y < 10)
//       lastY.current = y
//     }
//     window.addEventListener('scroll', onScroll, { passive: true })
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   useEffect(() => {
//     setMenuOpen(false); setShowModal(false); setShowSignOut(false)
//   }, [pathname])

//   useEffect(() => {
//     document.body.style.overflow = (showModal || showSignOut) ? 'hidden' : ''
//     return () => { document.body.style.overflow = '' }
//   }, [showModal, showSignOut])

//   return (
//     <>
//       {showModal   && <SignInModal  onClose={() => setShowModal(false)}   />}
//       {showSignOut && <SignOutModal onClose={() => setShowSignOut(false)} />}

//       <nav
//         className={`fixed top-0 left-0 w-full z-50 text-white transition-transform duration-300 border-b border-white/[0.06]
//           ${visible ? 'translate-y-0' : '-translate-y-full'}`}
//         style={BLUR_BG}
//       >
//         {/* ── Desktop navbar ── */}
//         <div className="max-w-5xl mx-auto px-6 py-4 flex items-center">

//           {/* Logo */}
//           <Link
//             href="/"
//             className="shrink-0 text-base font-bold tracking-tight hover:text-gray-300 transition-colors"
//           >
//             Sam
//           </Link>

//           {/* ── Desktop nav: centered links ── */}
//           <div className="hidden md:flex flex-1 items-center justify-center gap-5 text-sm">
//             {NAV_LINKS.map(({ label, href }) => (
//               <Link
//                 key={href}
//                 href={href}
//                 className={`transition-colors hover:text-white whitespace-nowrap
//                   ${pathname === href ? 'text-white font-medium' : 'text-gray-400'}`}
//               >
//                 {label}
//               </Link>
//             ))}
//             <MoreSecondNav />
//           </div>

//           {/* ── Desktop Auth + Follow (far right) ── */}
//           <div className="hidden md:flex items-center gap-3 shrink-0">
//             {status === 'loading' ? (
//               <div className="w-8 h-8 rounded-full bg-gray-800 animate-pulse" />
//             ) : session ? (
//               <div className="flex items-center gap-3">
//                 <button type="button" onClick={() => setShowSignOut(true)}
//                   className="focus:outline-none group shrink-0">
//                   <UserAvatar
//                     image={session.user?.image}
//                     name={session.user?.name}
//                     size={32}
//                     extraClass="group-hover:ring-red-500"
//                   />
//                 </button>
//                 <FollowSection session={session} />
//               </div>
//             ) : (
//               <div className="flex items-center gap-3">
//                 <GuestFollowPreview />
//                 <button
//                   type="button"
//                   onClick={() => setShowModal(true)}
//                   className="text-sm flex items-center justify-center gap-2 py-1.5 px-4 rounded-2xl border cursor-pointer border-white/20 bg-white/5 hover:bg-white/10 transition-all text-gray-400 hover:text-white whitespace-nowrap"
//                 >
//                   Sign in
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* ── Mobile: logo | followers strip (center) | hamburger ── */}
//           <div className="flex md:hidden flex-1 items-center justify-between">
//             {/* Followers centered between logo and hamburger */}
//             {status !== 'loading' && (
//               <MobileFollowersStrip session={session ?? null} />
//             )}
//             {status === 'loading' && <div className="flex-1" />}

//             {/* Hamburger */}
//             <button
//               type="button"
//               onClick={() => setMenuOpen(o => !o)}
//               className="text-white p-2 shrink-0"
//               aria-label="Toggle menu"
//             >
//               {menuOpen ? (
//                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               ) : (
//                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>

//         {/* ── Mobile menu (blurred) ── */}
//         <div
//           className={`md:hidden absolute top-full px-1 left-0 w-full overflow-hidden transition-all duration-300 ease-out z-[60]
//             ${menuOpen ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'}`}
//         >
//           <div style={{
//             ...DROPDOWN_BLUR_BG,
//             borderTop:               '1px solid rgba(255,255,255,0.15)',
//             borderBottomLeftRadius:  '20px',
//             borderBottomRightRadius: '20px',
//           }}>
//             <div className="flex flex-col px-6 py-7 gap-6 text-base">
//               {NAV_LINKS.map(({ label, href }) => (
//                 <Link
//                   key={href}
//                   href={href}
//                   className={`transition-colors hover:text-white ${pathname === href ? 'text-white font-medium' : 'text-gray-300'}`}
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   {label}
//                 </Link>
//               ))}

//               <div className="border-t border-white/10 pt-4">
//                 <Link
//                   href="/sayhello"
//                   className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-base py-1"
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   Say Hello
//                 </Link>
//               </div>

//               <div className="pt-4 border-t border-white/10 flex flex-col gap-4">
//                 {status === 'loading' ? (
//                   <div className="w-full h-11 rounded-2xl bg-gray-800 animate-pulse" />
//                 ) : session ? (
//                   <>
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-3">
//                         <UserAvatar image={session.user?.image} name={session.user?.name} size={40} />
//                         <div>
//                           <div className="text-white text-sm">{session.user?.name}</div>
//                           <div className="text-xs text-gray-400">{session.user?.email}</div>
//                         </div>
//                       </div>
//                       <button
//                         type="button"
//                         onClick={() => { setMenuOpen(false); setShowSignOut(true) }}
//                         className="text-red-400 hover:text-red-300 text-sm font-medium"
//                       >
//                         Sign out
//                       </button>
//                     </div>
//                   </>
//                 ) : (
//                   <>
//                     <button
//                       type="button"
//                       onClick={() => { setMenuOpen(false); signIn('google') }}
//                       className="flex items-center justify-center gap-3 w-full py-3 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 transition-all text-white text-sm"
//                     >
//                       <GoogleIcon /> Continue with Google
//                     </button>
//                     <button
//                       type="button"
//                       onClick={() => { setMenuOpen(false); signIn('github') }}
//                       className="flex items-center justify-center gap-3 w-full py-3 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 transition-all text-white text-sm"
//                     >
//                       <GitHubIcon /> Continue with GitHub
//                     </button>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   )
// }






























// // components/Navbar.tsx
// 'use client'

// import { useEffect, useRef, useState, useCallback } from 'react'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { useSession, signIn, signOut } from 'next-auth/react'
// import Image from 'next/image'
// import {
//   Avatar as SAvatar,
//   AvatarFallback,
//   AvatarGroup,
//   AvatarGroupCount,
//   AvatarImage,
// } from '@/components/ui/avatar'
// import { Button } from '@/components/ui/button'
// import { formatCount } from '@/lib/formatFollowers'

// // ── Blur Styles ────────────────────────────────────────────────────────────
// const NAV_BLUR = {
//   backgroundColor: 'rgba(8, 8, 8, 0.75)',
//   backdropFilter: 'blur(28px) saturate(180%)',
//   WebkitBackdropFilter: 'blur(28px) saturate(180%)',
// } as const

// const DROPDOWN_BLUR = {
//   backgroundColor: 'rgba(10, 10, 10, 0.92)',
//   backdropFilter: 'blur(32px) saturate(200%)',
//   WebkitBackdropFilter: 'blur(32px) saturate(200%)',
// } as const

// // ── Navigation Data ────────────────────────────────────────────────────────
// const NAV_LINKS = [
//   { label: 'Home', href: '/' },
//   { label: 'Writing', href: '/writing' },
//   { label: 'Blogs', href: '/blogs' },
//   { label: 'Projects', href: '/projects' },
//   { label: 'Experience', href: '/experience' },
//   { label: 'Updates', href: '/updates' },
// ]

// // ── Types ──────────────────────────────────────────────────────────────────
// interface Follower {
//   userId: string
//   name: string
//   image: string
//   followedAt: string
// }

// interface FollowersData {
//   followers: Follower[]
//   total: number
// }

// // ── Icons ──────────────────────────────────────────────────────────────────
// const GoogleIcon = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24">
//     <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
//     <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
//     <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
//     <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
//   </svg>
// )

// const GitHubIcon = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
//   </svg>
// )

// // ── useFollowers Hook ─────────────────────────────────────────────────────
// function useFollowers(userEmail?: string | null) {
//   const [data, setData] = useState<FollowersData>({ followers: [], total: 0 })
//   const [isFollowing, setIsFollowing] = useState(false)
//   const [loading, setLoading] = useState(false)

//   const refresh = useCallback(async () => {
//     try {
//       const res = await fetch('/api/followers')
//       const json = await res.json()
//       setData(json)
//       if (userEmail) {
//         setIsFollowing(json.followers.some((f: Follower) => f.userId === userEmail))
//       }
//     } catch {}
//   }, [userEmail])

//   useEffect(() => { refresh() }, [refresh])

//   const toggleFollow = async () => {
//     if (loading) return
//     setLoading(true)
//     const wasFollowing = isFollowing
//     setIsFollowing(!wasFollowing)
//     setData(d => ({ ...d, total: d.total + (wasFollowing ? -1 : 1) }))

//     try {
//       await fetch('/api/followers/me', { method: wasFollowing ? 'DELETE' : 'POST' })
//       await refresh()
//     } catch {
//       setIsFollowing(wasFollowing)
//       setData(d => ({ ...d, total: d.total + (wasFollowing ? 1 : -1) }))
//     } finally {
//       setLoading(false)
//     }
//   }

//   return { data, isFollowing, loading, toggleFollow }
// }

// // ── Unfollow Confirm Modal (Perfectly Centered) ───────────────────────────
// function UnfollowConfirmModal({ onConfirm, onClose }: { onConfirm: () => void; onClose: () => void }) {
//   return (
//     <div
//       className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/80 backdrop-blur-lg"
//       onClick={onClose}
//     >
//       <div
//         className="w-full max-w-sm rounded-2xl border border-white/10 shadow-2xl p-6 flex flex-col gap-5"
//         style={{ backgroundColor: 'rgba(15,15,15,0.98)' }}
//         onClick={e => e.stopPropagation()}
//       >
//         <div className="flex items-center justify-between">
//           <div>
//             <h2 className="text-white font-semibold text-lg">Unfollow?</h2>
//             <p className="text-gray-400 text-xs mt-1">Are you sure you want to unfollow this profile?</p>
//           </div>
//           <button
//             type="button"
//             onClick={onClose}
//             className="text-gray-400 hover:text-white text-xl leading-none"
//           >
//             ✕
//           </button>
//         </div>

//         <div className="flex gap-3 pt-2">
//           <Button
//             variant="outline"
//             className="flex-1 rounded-xl border-white/10 bg-white/5 hover:bg-white/10 text-white py-2.5"
//             onClick={onClose}
//           >
//             Cancel
//           </Button>
//           <Button
//             className="flex-1 rounded-xl bg-red-600 hover:bg-red-700 text-white py-2.5"
//             onClick={() => { onConfirm(); onClose() }}
//           >
//             Yes, Unfollow
//           </Button>
//         </div>
//       </div>
//     </div>
//   )
// }

// // ── Sign Out Modal (Fixed - Both buttons clearly visible) ─────────────────
// function SignOutModal({ onClose }: { onClose: () => void }) {
//   return (
//     <div
//       className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/80 backdrop-blur-lg"
//       onClick={onClose}
//     >
//       <div
//         className="w-full max-w-sm rounded-2xl border border-white/10 shadow-2xl p-6 flex flex-col gap-5"
//         style={{ backgroundColor: 'rgba(15,15,15,0.98)' }}
//         onClick={e => e.stopPropagation()}
//       >
//         <div className="flex items-center justify-between">
//           <div>
//             <h2 className="text-white font-semibold text-lg">Sign out</h2>
//             <p className="text-gray-400 text-xs mt-1">Are you sure you want to sign out?</p>
//           </div>
//           <button
//             type="button"
//             onClick={onClose}
//             className="text-gray-400 hover:text-white text-xl leading-none"
//           >
//             ✕
//           </button>
//         </div>

//         <div className="flex gap-3 pt-2">
//           <Button
//             variant="outline"
//             className="flex-1 rounded-xl border-white/10 bg-white/5 hover:bg-white/10 text-white py-2.5"
//             onClick={onClose}
//           >
//             Cancel
//           </Button>
//           <Button
//             className="flex-1 rounded-xl bg-red-600 hover:bg-red-700 text-white py-2.5"
//             onClick={() => signOut()}
//           >
//             Yes, sign out
//           </Button>
//         </div>
//       </div>
//     </div>
//   )
// }

// // ── Follow Section ────────────────────────────────────────────────────────
// function FollowSection({ session }: { session: any }) {
//   const { data, isFollowing, loading, toggleFollow } = useFollowers(session?.user?.email)
//   const [showUnfollowConfirm, setShowUnfollowConfirm] = useState(false)

//   const shown = data.followers.slice(0, 3)
//   const overflow = data.total - shown.length

//   const handleClick = () => isFollowing ? setShowUnfollowConfirm(true) : toggleFollow()

//   return (
//     <>
//       {showUnfollowConfirm && (
//         <UnfollowConfirmModal onConfirm={toggleFollow} onClose={() => setShowUnfollowConfirm(false)} />
//       )}

//       <div className="flex items-center gap-3">
//         {data.followers.length > 0 && (
//           <div className="flex items-center gap-1.5">
//             <AvatarGroup className="-space-x-1.5">
//               {shown.map((f) => (
//                 <SAvatar key={f.userId} className="w-6 h-6 border border-white/20">
//                   <AvatarImage src={f.image} alt={f.name} />
//                   <AvatarFallback className="text-[10px] bg-gray-700 text-white">
//                     {f.name?.[0]?.toUpperCase() ?? '?'}
//                   </AvatarFallback>
//                 </SAvatar>
//               ))}
//               {overflow > 0 && (
//                 <AvatarGroupCount className="w-6 h-6 text-[10px] bg-gray-700 text-white border border-white/20">
//                   +{formatCount(overflow)}
//                 </AvatarGroupCount>
//               )}
//             </AvatarGroup>
//             <span className="text-gray-400 text-xs font-medium tabular-nums">
//               {formatCount(data.total)}
//             </span>
//           </div>
//         )}

//         <Button
//           type="button"
//           size="sm"
//           disabled={loading}
//           onClick={handleClick}
//           className={`rounded-xl text-xs px-4 py-1.5 font-medium transition-all min-w-[92px]
//             ${isFollowing
//               ? 'border border-white/20 bg-white/10 text-white hover:bg-red-500/10 hover:border-red-500/40 hover:text-red-400'
//               : 'border border-indigo-500/50 bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 hover:text-indigo-300'
//             } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
//         >
//           {isFollowing ? 'Following ✓' : 'Follow +'}
//         </Button>
//       </div>
//     </>
//   )
// }

// // ── Sign In Modal ─────────────────────────────────────────────────────────
// function SignInModal({ onClose }: { onClose: () => void }) {
//   return (
//     <div
//       className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/70 backdrop-blur-md"
//       onClick={onClose}
//     >
//       <div
//         className="w-full max-w-sm rounded-2xl border border-white/10 shadow-2xl p-6"
//         style={{ backgroundColor: 'rgba(15,15,15,0.95)' }}
//         onClick={e => e.stopPropagation()}
//       >
//         <div className="flex items-center justify-between mb-6">
//           <div>
//             <h2 className="text-white font-semibold text-lg">Sign in</h2>
//             <p className="text-gray-400 text-xs mt-0.5">Choose a provider to continue</p>
//           </div>
//           <button onClick={onClose} className="text-gray-400 hover:text-white text-xl">✕</button>
//         </div>
//         <div className="flex flex-col gap-3">
//           <button onClick={() => signIn('google')} className="flex items-center gap-3 w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white">
//             <GoogleIcon /> Continue with Google
//           </button>
//           <button onClick={() => signIn('github')} className="flex items-center gap-3 w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white">
//             <GitHubIcon /> Continue with GitHub
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// // ── UserAvatar, MoreSecondNav, GuestFollowPreview, MobileFollowersStrip (kept same as your last version)
// function UserAvatar({ image, name, size = 32, extraClass = '' }: {
//   image?: string | null; name?: string | null; size?: number; extraClass?: string
// }) {
//   return image ? (
//     <Image src={image} alt={name ?? 'avatar'} width={size} height={size}
//       className={`rounded-full ring-2 ring-gray-600 transition-all ${extraClass}`}
//       style={{ width: size, height: size }} />
//   ) : (
//     <div className={`rounded-full bg-gray-700 flex items-center justify-center font-bold ring-2 ring-gray-600 transition-all ${extraClass}`}
//       style={{ width: size, height: size, fontSize: size * 0.375 }}>
//       {name?.[0]?.toUpperCase() ?? '?'}
//     </div>
//   )
// }

// function MoreSecondNav() {
//   const [isOpen, setIsOpen] = useState(false)
//   const closeTimer = useRef<NodeJS.Timeout | null>(null)
//   const open = () => { if (closeTimer.current) clearTimeout(closeTimer.current); setIsOpen(true) }
//   const close = () => { closeTimer.current = setTimeout(() => setIsOpen(false), 100) }

//   return (
//     <div className="relative" onMouseEnter={open} onMouseLeave={close}>
//       <button type="button" className={`text-sm transition-colors hover:text-white ${isOpen ? 'text-white' : 'text-gray-400'}`}>
//         More
//       </button>
//       {isOpen && (
//         <div className="absolute left-1/2 -translate-x-1/2" style={{ top: '100%', height: '12px', width: '120px' }} onMouseEnter={open} onMouseLeave={close} />
//       )}
//       <div
//         className={`fixed left-0 right-0 z-40 border-b border-white/10 overflow-hidden transition-all duration-300 ease-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
//         style={{ top: '63px', ...DROPDOWN_BLUR }}
//         onMouseEnter={open}
//         onMouseLeave={close}
//       >
//         <div className="max-w-5xl mx-auto px-6 py-5">
//           <div className="flex justify-center gap-10 text-sm">
//             <Link href="/sayhello" className="text-gray-400 hover:text-white py-2" onClick={() => setIsOpen(false)}>Say Hello</Link>
//             <Link href="/code" className="text-gray-400 hover:text-white py-2" onClick={() => setIsOpen(false)}>Code block</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// function GuestFollowPreview() {
//   const [data, setData] = useState<FollowersData>({ followers: [], total: 0 })
//   useEffect(() => {
//     fetch('/api/followers').then(r => r.json()).then(setData).catch(() => {})
//   }, [])
//   if (data.total === 0) return null
//   const shown = data.followers.slice(0, 3)
//   const overflow = data.total - shown.length
//   return (
//     <div className="flex items-center gap-1.5">
//       <AvatarGroup>
//         {shown.map(f => (
//           <SAvatar key={f.userId} className="w-6 h-6 border border-white/20">
//             <AvatarImage src={f.image} alt={f.name} />
//             <AvatarFallback className="text-[10px] bg-gray-700 text-white">{f.name?.[0]?.toUpperCase() ?? '?'}</AvatarFallback>
//           </SAvatar>
//         ))}
//         {overflow > 0 && <AvatarGroupCount className="w-6 h-6 text-[10px] bg-gray-700 text-white border border-white/20">+{formatCount(overflow)}</AvatarGroupCount>}
//       </AvatarGroup>
//       <span className="text-gray-400 text-xs font-medium tabular-nums">{formatCount(data.total)} followers</span>
//     </div>
//   )
// }

// function MobileFollowersStrip({ session }: { session: any }) {
//   if (session) return <div className="flex items-center justify-center flex-1"><FollowSection session={session} /></div>
//   return <div className="flex items-center justify-center flex-1"><GuestFollowPreview /></div>
// }

// // ── Main Navbar ───────────────────────────────────────────────────────────
// export default function Navbar() {
//   const [visible, setVisible] = useState(true)
//   const [menuOpen, setMenuOpen] = useState(false)
//   const [showModal, setShowModal] = useState(false)
//   const [showSignOut, setShowSignOut] = useState(false)

//   const lastY = useRef(0)
//   const pathname = usePathname()
//   const { data: session, status } = useSession()

//   useEffect(() => {
//     const onScroll = () => {
//       const y = window.scrollY
//       setVisible(y < lastY.current || y < 10)
//       lastY.current = y
//     }
//     window.addEventListener('scroll', onScroll, { passive: true })
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   useEffect(() => {
//     setMenuOpen(false); setShowModal(false); setShowSignOut(false)
//   }, [pathname])

//   useEffect(() => {
//     document.body.style.overflow = (showModal || showSignOut) ? 'hidden' : ''
//     return () => { document.body.style.overflow = '' }
//   }, [showModal, showSignOut])

//   return (
//     <>
//       {showModal && <SignInModal onClose={() => setShowModal(false)} />}
//       {showSignOut && <SignOutModal onClose={() => setShowSignOut(false)} />}

//       <nav
//         className={`fixed top-0 left-0 w-full z-50 text-white transition-transform duration-300 border-b border-white/[0.06] ${visible ? 'translate-y-0' : '-translate-y-full'}`}
//         style={NAV_BLUR}
//       >
//         <div className="max-w-5xl mx-auto px-6 py-4 flex items-center">
//           <Link href="/" className="shrink-0 text-xl font-bold tracking-tight hover:text-gray-200">Sam</Link>

//           <div className="hidden md:flex flex-1 items-center justify-center gap-6 text-sm">
//             {NAV_LINKS.map(({ label, href }) => (
//               <Link key={href} href={href} className={`transition-colors hover:text-white ${pathname === href ? 'text-white font-medium' : 'text-gray-400'}`}>
//                 {label}
//               </Link>
//             ))}
//             <MoreSecondNav />
//           </div>

//           <div className="hidden md:flex items-center gap-4 shrink-0">
//             {status === 'loading' ? (
//               <div className="w-8 h-8 rounded-full bg-gray-800 animate-pulse" />
//             ) : session ? (
//               <div className="flex items-center gap-4">
//                 <FollowSection session={session} />
//                 <button onClick={() => setShowSignOut(true)} className="focus:outline-none group">
//                   <UserAvatar image={session.user?.image} name={session.user?.name} size={34} extraClass="group-hover:ring-red-500" />
//                 </button>
//               </div>
//             ) : (
//               <div className="flex items-center gap-4">
//                 <GuestFollowPreview />
//                 <button onClick={() => setShowModal(true)} className="text-sm px-5 py-2 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white">
//                   Sign in
//                 </button>
//               </div>
//             )}
//           </div>

//           <div className="md:hidden flex flex-1 items-center justify-between">
//             {status !== 'loading' && <MobileFollowersStrip session={session ?? null} />}
//             {status === 'loading' && <div className="flex-1" />}
//             <button onClick={() => setMenuOpen(o => !o)} className="text-white p-2">
//               {menuOpen ? '✕' : '☰'}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <div className={`md:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-300 z-[60] ${menuOpen ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'}`}>
//           <div style={{ ...DROPDOWN_BLUR, borderTop: '1px solid rgba(255,255,255,0.15)', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px' }}>
//             <div className="flex flex-col px-6 py-8 gap-6 text-base">
//               {NAV_LINKS.map(({ label, href }) => (
//                 <Link key={href} href={href} className={`hover:text-white ${pathname === href ? 'text-white font-medium' : 'text-gray-300'}`} onClick={() => setMenuOpen(false)}>
//                   {label}
//                 </Link>
//               ))}
//               {/* Add your mobile auth section here if needed */}
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   )
// }































































// // components/Navbar.tsx
// 'use client'

// import { useEffect, useRef, useState, useCallback } from 'react'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { useSession, signIn, signOut } from 'next-auth/react'
// import Image from 'next/image'
// import {
//   Avatar as SAvatar,
//   AvatarFallback,
//   AvatarGroup,
//   AvatarGroupCount,
//   AvatarImage,
// } from '@/components/ui/avatar'
// import { Button } from '@/components/ui/button'
// import { formatCount } from '@/lib/formatFollowers'

// // ── Blur Styles ────────────────────────────────────────────────────────────
// const NAV_BLUR = {
//   backgroundColor: 'rgba(8, 8, 8, 0.75)',
//   backdropFilter: 'blur(28px) saturate(180%)',
//   WebkitBackdropFilter: 'blur(28px) saturate(180%)',
// } as const

// const DROPDOWN_BLUR = {
//   backgroundColor: 'rgba(10, 10, 10, 0.92)',
//   backdropFilter: 'blur(32px) saturate(200%)',
//   WebkitBackdropFilter: 'blur(32px) saturate(200%)',
// } as const

// // ── Navigation Data ────────────────────────────────────────────────────────
// const NAV_LINKS = [
//   { label: 'Home', href: '/' },
//   { label: 'Writing', href: '/writing' },
//   { label: 'Blogs', href: '/blogs' },
//   { label: 'Projects', href: '/projects' },
//   { label: 'Experience', href: '/experience' },
//   { label: 'Updates', href: '/updates' },
// ]

// // ── Types ──────────────────────────────────────────────────────────────────
// interface Follower {
//   userId: string
//   name: string
//   image: string
//   followedAt: string
// }

// interface FollowersData {
//   followers: Follower[]
//   total: number
// }

// // ── Icons ──────────────────────────────────────────────────────────────────
// const GoogleIcon = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24">
//     <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
//     <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
//     <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
//     <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
//   </svg>
// )

// const GitHubIcon = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
//   </svg>
// )

// // ── useFollowers Hook ─────────────────────────────────────────────────────
// function useFollowers(userEmail?: string | null) {
//   const [data, setData] = useState<FollowersData>({ followers: [], total: 0 })
//   const [isFollowing, setIsFollowing] = useState(false)
//   const [loading, setLoading] = useState(false)

//   const refresh = useCallback(async () => {
//     try {
//       const res = await fetch('/api/followers')
//       const json = await res.json()
//       setData(json)
//       if (userEmail) {
//         setIsFollowing(json.followers.some((f: Follower) => f.userId === userEmail))
//       }
//     } catch {}
//   }, [userEmail])

//   useEffect(() => { refresh() }, [refresh])

//   const toggleFollow = async () => {
//     if (loading) return
//     setLoading(true)
//     const wasFollowing = isFollowing
//     setIsFollowing(!wasFollowing)
//     setData(d => ({ ...d, total: d.total + (wasFollowing ? -1 : 1) }))

//     try {
//       await fetch('/api/followers/me', { method: wasFollowing ? 'DELETE' : 'POST' })
//       await refresh()
//     } catch {
//       setIsFollowing(wasFollowing)
//       setData(d => ({ ...d, total: d.total + (wasFollowing ? 1 : -1) }))
//     } finally {
//       setLoading(false)
//     }
//   }

//   return { data, isFollowing, loading, toggleFollow }
// }

// // ── Unfollow Confirm Modal ────────────────────────────────────────────────
// function UnfollowConfirmModal({ onConfirm, onClose }: { onConfirm: () => void; onClose: () => void }) {
//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/80 backdrop-blur-lg" onClick={onClose}>
//       <div className="w-full max-w-sm rounded-2xl border border-white/10 shadow-2xl p-6 flex flex-col gap-5" style={{ backgroundColor: 'rgba(15,15,15,0.98)' }} onClick={e => e.stopPropagation()}>
//         <div className="flex items-center justify-between">
//           <div>
//             <h2 className="text-white font-semibold text-lg">Unfollow?</h2>
//             <p className="text-gray-400 text-xs mt-1">Are you sure you want to unfollow this profile?</p>
//           </div>
//           <button type="button" onClick={onClose} className="text-gray-400 hover:text-white text-xl leading-none">✕</button>
//         </div>
//         <div className="flex gap-3 pt-2">
//           <Button variant="outline" className="flex-1 rounded-xl border-white/10 bg-white/5 hover:bg-white/10 text-white py-2.5" onClick={onClose}>Cancel</Button>
//           <Button className="flex-1 rounded-xl bg-red-600 hover:bg-red-700 text-white py-2.5" onClick={() => { onConfirm(); onClose() }}>Yes, Unfollow</Button>
//         </div>
//       </div>
//     </div>
//   )
// }

// // ── Sign Out Modal ────────────────────────────────────────────────────────
// function SignOutModal({ onClose }: { onClose: () => void }) {
//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/80 backdrop-blur-lg" onClick={onClose}>
//       <div className="w-full max-w-sm rounded-2xl border border-white/10 shadow-2xl p-6 flex flex-col gap-5" style={{ backgroundColor: 'rgba(15,15,15,0.98)' }} onClick={e => e.stopPropagation()}>
//         <div className="flex items-center justify-between">
//           <div>
//             <h2 className="text-white font-semibold text-lg">Sign out</h2>
//             <p className="text-gray-400 text-xs mt-1">Are you sure you want to sign out?</p>
//           </div>
//           <button type="button" onClick={onClose} className="text-gray-400 hover:text-white text-xl leading-none">✕</button>
//         </div>
//         <div className="flex gap-3 pt-2">
//           <Button variant="outline" className="flex-1 rounded-xl border-white/10 bg-white/5 hover:bg-white/10 text-white py-2.5" onClick={onClose}>Cancel</Button>
//           <Button className="flex-1 rounded-xl bg-red-600 hover:bg-red-700 text-white py-2.5" onClick={() => signOut()}>Yes, sign out</Button>
//         </div>
//       </div>
//     </div>
//   )
// }

// // ── Follow Section ────────────────────────────────────────────────────────
// function FollowSection({ session }: { session: any }) {
//   const { data, isFollowing, loading, toggleFollow } = useFollowers(session?.user?.email)
//   const [showUnfollowConfirm, setShowUnfollowConfirm] = useState(false)

//   const shown = data.followers.slice(0, 3)
//   const overflow = data.total - shown.length

//   const handleClick = () => isFollowing ? setShowUnfollowConfirm(true) : toggleFollow()

//   return (
//     <>
//       {showUnfollowConfirm && <UnfollowConfirmModal onConfirm={toggleFollow} onClose={() => setShowUnfollowConfirm(false)} />}
//       <div className="flex items-center gap-3">
//         {data.followers.length > 0 && (
//           <div className="flex items-center gap-1.5">
//             <AvatarGroup className="-space-x-1.5">
//               {shown.map((f) => (
//                 <SAvatar key={f.userId} className="w-6 h-6 border border-white/20">
//                   <AvatarImage src={f.image} alt={f.name} />
//                   <AvatarFallback className="text-[10px] bg-gray-700 text-white">{f.name?.[0]?.toUpperCase() ?? '?'}</AvatarFallback>
//                 </SAvatar>
//               ))}
//               {overflow > 0 && <AvatarGroupCount className="w-6 h-6 text-[10px] bg-gray-700 text-white border border-white/20">+{formatCount(overflow)}</AvatarGroupCount>}
//             </AvatarGroup>
//             <span className="text-gray-400 text-xs font-medium tabular-nums">{formatCount(data.total)}</span>
//           </div>
//         )}
//         <Button type="button" size="sm" disabled={loading} onClick={handleClick}
//           className={`rounded-xl text-xs px-4 py-1.5 font-medium transition-all min-w-[92px]
//             ${isFollowing ? 'border border-white/20 bg-white/10 text-white hover:bg-red-500/10 hover:border-red-500/40 hover:text-red-400' : 'border border-indigo-500/50 bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 hover:text-indigo-300'}
//             ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
//           {isFollowing ? 'Following ✓' : 'Follow +'}
//         </Button>
//       </div>
//     </>
//   )
// }

// // ── Sign In Modal ─────────────────────────────────────────────────────────
// function SignInModal({ onClose }: { onClose: () => void }) {
//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/70 backdrop-blur-md" onClick={onClose}>
//       <div className="w-full max-w-sm rounded-2xl border border-white/10 shadow-2xl p-6" style={{ backgroundColor: 'rgba(15,15,15,0.95)' }} onClick={e => e.stopPropagation()}>
//         <div className="flex items-center justify-between mb-6">
//           <div>
//             <h2 className="text-white font-semibold text-lg">Sign in</h2>
//             <p className="text-gray-400 text-xs mt-0.5">Choose a provider to continue</p>
//           </div>
//           <button onClick={onClose} className="text-gray-400 hover:text-white text-xl">✕</button>
//         </div>
//         <div className="flex flex-col gap-3">
//           <button onClick={() => signIn('google')} className="flex items-center gap-3 w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white">
//             <GoogleIcon /> Continue with Google
//           </button>
//           <button onClick={() => signIn('github')} className="flex items-center gap-3 w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white">
//             <GitHubIcon /> Continue with GitHub
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// // ── UserAvatar ────────────────────────────────────────────────────────────
// function UserAvatar({ image, name, size = 34, extraClass = '' }: {
//   image?: string | null; name?: string | null; size?: number; extraClass?: string
// }) {
//   return image ? (
//     <Image src={image} alt={name ?? 'avatar'} width={size} height={size}
//       className={`rounded-full ring-2 ring-gray-600 transition-all ${extraClass}`}
//       style={{ width: size, height: size }} />
//   ) : (
//     <div className={`rounded-full bg-gray-700 flex items-center justify-center font-bold ring-2 ring-gray-600 transition-all ${extraClass}`}
//       style={{ width: size, height: size, fontSize: size * 0.375 }}>
//       {name?.[0]?.toUpperCase() ?? '?'}
//     </div>
//   )
// }

// // ── MoreSecondNav ─────────────────────────────────────────────────────────
// function MoreSecondNav() {
//   const [isOpen, setIsOpen] = useState(false)
//   const closeTimer = useRef<NodeJS.Timeout | null>(null)
//   const open = () => { if (closeTimer.current) clearTimeout(closeTimer.current); setIsOpen(true) }
//   const close = () => { closeTimer.current = setTimeout(() => setIsOpen(false), 100) }

//   return (
//     <div className="relative" onMouseEnter={open} onMouseLeave={close}>
//       <button type="button" className={`text-sm transition-colors hover:text-white ${isOpen ? 'text-white' : 'text-gray-400'}`}>More</button>
//       {isOpen && <div className="absolute left-1/2 -translate-x-1/2" style={{ top: '100%', height: '12px', width: '120px' }} onMouseEnter={open} onMouseLeave={close} />}
//       <div className={`fixed left-0 right-0 z-40 border-b border-white/10 overflow-hidden transition-all duration-300 ease-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`} style={{ top: '63px', ...DROPDOWN_BLUR }} onMouseEnter={open} onMouseLeave={close}>
//         <div className="max-w-5xl mx-auto px-6 py-5">
//           <div className="flex justify-center gap-10 text-sm">
//             <Link href="/sayhello" className="text-gray-400 hover:text-white py-2" onClick={() => setIsOpen(false)}>Say Hello</Link>
//             <Link href="/code" className="text-gray-400 hover:text-white py-2" onClick={() => setIsOpen(false)}>Code block</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// // ── GuestFollowPreview ────────────────────────────────────────────────────
// function GuestFollowPreview() {
//   const [data, setData] = useState<FollowersData>({ followers: [], total: 0 })
//   useEffect(() => {
//     fetch('/api/followers').then(r => r.json()).then(setData).catch(() => {})
//   }, [])
//   if (data.total === 0) return null
//   const shown = data.followers.slice(0, 3)
//   const overflow = data.total - shown.length
//   return (
//     <div className="flex items-center gap-1.5">
//       <AvatarGroup>
//         {shown.map(f => (
//           <SAvatar key={f.userId} className="w-6 h-6 border border-white/20">
//             <AvatarImage src={f.image} alt={f.name} />
//             <AvatarFallback className="text-[10px] bg-gray-700 text-white">{f.name?.[0]?.toUpperCase() ?? '?'}</AvatarFallback>
//           </SAvatar>
//         ))}
//         {overflow > 0 && <AvatarGroupCount className="w-6 h-6 text-[10px] bg-gray-700 text-white border border-white/20">+{formatCount(overflow)}</AvatarGroupCount>}
//       </AvatarGroup>
//       <span className="text-gray-400 text-xs font-medium tabular-nums">{formatCount(data.total)} followers</span>
//     </div>
//   )
// }

// // ── Mobile Menu Auth Section ──────────────────────────────────────────────
// function MobileAuthSection({ session, setMenuOpen, setShowSignOut }: { session: any; setMenuOpen: (open: boolean) => void; setShowSignOut: (show: boolean) => void }) {
//   if (session) {
//     return (
//       <div className="pt-4 border-t border-white/10">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <UserAvatar image={session.user?.image} name={session.user?.name} size={42} />
//             <div>
//               <div className="text-white text-sm">{session.user?.name}</div>
//               <div className="text-xs text-gray-400">{session.user?.email}</div>
//             </div>
//           </div>
//           <button onClick={() => { setMenuOpen(false); setShowSignOut(true) }} className="text-red-400 hover:text-red-300 font-medium">Sign out</button>
//         </div>
//       </div>
//     )
//   }

//   // Not signed in → Show Google & GitHub buttons
//   return (
//     <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
//       <button
//         onClick={() => { setMenuOpen(false); signIn('google') }}
//         className="flex items-center justify-center gap-3 w-full py-3.5 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 transition-all text-white text-sm font-medium"
//       >
//         <GoogleIcon /> Continue with Google
//       </button>
//       <button
//         onClick={() => { setMenuOpen(false); signIn('github') }}
//         className="flex items-center justify-center gap-3 w-full py-3.5 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 transition-all text-white text-sm font-medium"
//       >
//         <GitHubIcon /> Continue with GitHub
//       </button>
//     </div>
//   )
// }

// // ── Main Navbar ───────────────────────────────────────────────────────────
// export default function Navbar() {
//   const [visible, setVisible] = useState(true)
//   const [menuOpen, setMenuOpen] = useState(false)
//   const [showModal, setShowModal] = useState(false)
//   const [showSignOut, setShowSignOut] = useState(false)

//   const lastY = useRef(0)
//   const pathname = usePathname()
//   const { data: session, status } = useSession()

//   useEffect(() => {
//     const onScroll = () => {
//       const y = window.scrollY
//       setVisible(y < lastY.current || y < 10)
//       lastY.current = y
//     }
//     window.addEventListener('scroll', onScroll, { passive: true })
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   useEffect(() => {
//     setMenuOpen(false)
//     setShowModal(false)
//     setShowSignOut(false)
//   }, [pathname])

//   useEffect(() => {
//     document.body.style.overflow = (showModal || showSignOut) ? 'hidden' : ''
//     return () => { document.body.style.overflow = '' }
//   }, [showModal, showSignOut])

//   return (
//     <>
//       {showModal && <SignInModal onClose={() => setShowModal(false)} />}
//       {showSignOut && <SignOutModal onClose={() => setShowSignOut(false)} />}

//       <nav className={`fixed top-0 left-0 w-full z-50 text-white transition-transform duration-300 border-b border-white/[0.06] ${visible ? 'translate-y-0' : '-translate-y-full'}`} style={NAV_BLUR}>
//         <div className="max-w-5xl mx-auto px-6 py-4 flex items-center">
//           <Link href="/" className="shrink-0 text-xl font-bold tracking-tight hover:text-gray-200">Sam</Link>

//           <div className="hidden md:flex flex-1 items-center justify-center gap-6 text-sm">
//             {NAV_LINKS.map(({ label, href }) => (
//               <Link key={href} href={href} className={`transition-colors hover:text-white ${pathname === href ? 'text-white font-medium' : 'text-gray-400'}`}>{label}</Link>
//             ))}
//             <MoreSecondNav />
//           </div>

//           {/* Desktop Right Side */}
//           <div className="hidden md:flex items-center gap-4 shrink-0">
//             {status === 'loading' ? (
//               <div className="w-8 h-8 rounded-full bg-gray-800 animate-pulse" />
//             ) : session ? (
//               <div className="flex items-center gap-4">
//                 <FollowSection session={session} />
//                 <button onClick={() => setShowSignOut(true)} className="focus:outline-none group">
//                   <UserAvatar image={session.user?.image} name={session.user?.name} size={34} extraClass="group-hover:ring-red-500" />
//                 </button>
//               </div>
//             ) : (
//               <div className="flex items-center gap-4">
//                 <GuestFollowPreview />
//                 <button onClick={() => setShowModal(true)} className="text-sm px-5 py-2 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white">Sign in</button>
//               </div>
//             )}
//           </div>

//           {/* Mobile Hamburger */}
//           <div className="md:hidden flex flex-1 items-center justify-between">
//             {status !== 'loading' && <div className="flex-1 flex justify-center"><GuestFollowPreview /></div>}
//             {status === 'loading' && <div className="flex-1" />}
//             <button onClick={() => setMenuOpen(o => !o)} className="text-white p-2 text-xl">{menuOpen ? '✕' : '☰'}</button>
//           </div>
//         </div>

//         {/* Mobile Menu with improved auth section */}
//         <div className={`md:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-300 z-[60] ${menuOpen ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'}`}>
//           <div style={{ ...DROPDOWN_BLUR, borderTop: '1px solid rgba(255,255,255,0.15)', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px' }}>
//             <div className="flex flex-col px-6 py-8 gap-6 text-base">
//               {NAV_LINKS.map(({ label, href }) => (
//                 <Link key={href} href={href} className={`hover:text-white ${pathname === href ? 'text-white font-medium' : 'text-gray-300'}`} onClick={() => setMenuOpen(false)}>
//                   {label}
//                 </Link>
//               ))}

//               <MobileAuthSection session={session} setMenuOpen={setMenuOpen} setShowSignOut={setShowSignOut} />
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   )
// }















// // components/Navbar.tsx
// 'use client'

// import { useEffect, useRef, useState, useCallback } from 'react'
// import { createPortal } from 'react-dom'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { useSession, signIn, signOut } from 'next-auth/react'
// import Image from 'next/image'
// import {
//   Avatar as SAvatar,
//   AvatarFallback,
//   AvatarGroup,
//   AvatarGroupCount,
//   AvatarImage,
// } from '@/components/ui/avatar'
// import { Button } from '@/components/ui/button'
// import { formatCount } from '@/lib/formatFollowers'

// // ── Blur Styles ────────────────────────────────────────────────────────────
// const NAV_BLUR = {
//   backgroundColor: 'rgba(8, 8, 8, 0.75)',
//   backdropFilter: 'blur(28px) saturate(180%)',
//   WebkitBackdropFilter: 'blur(28px) saturate(180%)',
// } as const

// const DROPDOWN_BLUR = {
//   backgroundColor: 'rgba(10, 10, 10, 0.55)',
//   backdropFilter: 'blur(32px) saturate(200%)',
//   WebkitBackdropFilter: 'blur(32px) saturate(200%)',
// } as const

// // ── Navigation Data ────────────────────────────────────────────────────────
// const NAV_LINKS = [
//   { label: 'Home', href: '/' },
//   { label: 'Writing', href: '/writing' },
//   { label: 'Blogs', href: '/blogs' },
//   { label: 'Projects', href: '/projects' },
//   { label: 'Experience', href: '/experience' },
//   { label: 'Updates', href: '/updates' },
// ]

// const MORE_LINKS = [
//   { label: 'Say Hello', href: '/sayhello' },
//   { label: 'Code block', href: '/code' },
// ]

// // ── Types ──────────────────────────────────────────────────────────────────
// interface Follower {
//   userId: string
//   name: string
//   image: string
//   followedAt: string
// }

// interface FollowersData {
//   followers: Follower[]
//   total: number
// }

// // ── Icons ──────────────────────────────────────────────────────────────────
// const GoogleIcon = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24">
//     <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
//     <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
//     <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
//     <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
//   </svg>
// )

// const GitHubIcon = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
//   </svg>
// )

// // ── useFollowers Hook ─────────────────────────────────────────────────────
// function useFollowers(userEmail?: string | null) {
//   const [data, setData] = useState<FollowersData>({ followers: [], total: 0 })
//   const [isFollowing, setIsFollowing] = useState(false)
//   const [loading, setLoading] = useState(false)

//   const refresh = useCallback(async () => {
//     try {
//       const res = await fetch('/api/followers')
//       const json = await res.json()
//       setData(json)
//       if (userEmail) {
//         setIsFollowing(json.followers.some((f: Follower) => f.userId === userEmail))
//       }
//     } catch {}
//   }, [userEmail])

//   useEffect(() => { refresh() }, [refresh])

//   const toggleFollow = async () => {
//     if (loading) return
//     setLoading(true)
//     const wasFollowing = isFollowing
//     setIsFollowing(!wasFollowing)
//     setData(d => ({ ...d, total: d.total + (wasFollowing ? -1 : 1) }))

//     try {
//       await fetch('/api/followers/me', { method: wasFollowing ? 'DELETE' : 'POST' })
//       await refresh()
//     } catch {
//       setIsFollowing(wasFollowing)
//       setData(d => ({ ...d, total: d.total + (wasFollowing ? 1 : -1) }))
//     } finally {
//       setLoading(false)
//     }
//   }

//   return { data, isFollowing, loading, toggleFollow }
// }

// // ── Unfollow Confirm Modal ────────────────────────────────────────────────
// // FIX 3: Rendered via createPortal → always appears centred on screen,
// // never clipped by the navbar's stacking context.
// function UnfollowConfirmModal({ onConfirm, onClose }: { onConfirm: () => void; onClose: () => void }) {
//   return createPortal(
//     <div
//       className="fixed inset-0 z-[200] flex items-center justify-center px-4 bg-black/80 backdrop-blur-lg"
//       onClick={onClose}
//     >
//       <div
//         className="w-full max-w-sm rounded-2xl border border-white/10 shadow-2xl p-6 flex flex-col gap-5"
//         style={{ backgroundColor: 'rgba(15,15,15,0.98)' }}
//         onClick={e => e.stopPropagation()}
//       >
//         <div className="flex items-center justify-between">
//           <div>
//             <h2 className="text-white font-semibold text-lg">Unfollow?</h2>
//             <p className="text-gray-400 text-xs mt-1">Are you sure you want to unfollow this profile?</p>
//           </div>
//           <button type="button" onClick={onClose} className="text-gray-400 hover:text-white text-xl leading-none">✕</button>
//         </div>
//         <div className="flex gap-3 pt-2">
//           <Button variant="outline" className="flex-1 rounded-xl border-white/10 bg-white/5 hover:bg-white/10 text-white py-2.5" onClick={onClose}>Cancel</Button>
//           <Button className="flex-1 rounded-xl bg-red-600 hover:bg-red-700 text-white py-2.5" onClick={() => { onConfirm(); onClose() }}>Yes, Unfollow</Button>
//         </div>
//       </div>
//     </div>,
//     document.body
//   )
// }

// // ── Sign Out Modal ────────────────────────────────────────────────────────
// function SignOutModal({ onClose }: { onClose: () => void }) {
//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/80 backdrop-blur-lg" onClick={onClose}>
//       <div className="w-full max-w-sm rounded-2xl border border-white/10 shadow-2xl p-6 flex flex-col gap-5" style={{ backgroundColor: 'rgba(15,15,15,0.98)' }} onClick={e => e.stopPropagation()}>
//         <div className="flex items-center justify-between">
//           <div>
//             <h2 className="text-white font-semibold text-lg">Sign out</h2>
//             <p className="text-gray-400 text-xs mt-1">Are you sure you want to sign out?</p>
//           </div>
//           <button type="button" onClick={onClose} className="text-gray-400 hover:text-white text-xl leading-none">✕</button>
//         </div>
//         <div className="flex gap-3 pt-2">
//           <Button variant="outline" className="flex-1 rounded-xl border-white/10 bg-white/5 hover:bg-white/10 text-white py-2.5" onClick={onClose}>Cancel</Button>
//           <Button className="flex-1 rounded-xl bg-red-600 hover:bg-red-700 text-white py-2.5" onClick={() => signOut()}>Yes, sign out</Button>
//         </div>
//       </div>
//     </div>
//   )
// }

// // ── Follow Section ────────────────────────────────────────────────────────
// function FollowSection({ session }: { session: any }) {
//   const { data, isFollowing, loading, toggleFollow } = useFollowers(session?.user?.email)
//   const [showUnfollowConfirm, setShowUnfollowConfirm] = useState(false)

//   const shown = data.followers.slice(0, 3)
//   const overflow = data.total - shown.length

//   const handleClick = () => isFollowing ? setShowUnfollowConfirm(true) : toggleFollow()

//   return (
//     <>
//       {/* FIX 3: portal-based modal — always centred, never clipped */}
//       {showUnfollowConfirm && (
//         <UnfollowConfirmModal
//           onConfirm={toggleFollow}
//           onClose={() => setShowUnfollowConfirm(false)}
//         />
//       )}
//       <div className="flex items-center gap-3">
//         {data.followers.length > 0 && (
//           <div className="flex items-center gap-1.5">
//             <AvatarGroup className="-space-x-1.5">
//               {shown.map((f) => (
//                 <SAvatar key={f.userId} className="w-6 h-6 border border-white/20">
//                   <AvatarImage src={f.image} alt={f.name} />
//                   <AvatarFallback className="text-[10px] bg-gray-700 text-white">{f.name?.[0]?.toUpperCase() ?? '?'}</AvatarFallback>
//                 </SAvatar>
//               ))}
//               {overflow > 0 && <AvatarGroupCount className="w-6 h-6 text-[10px] bg-gray-700 text-white border border-white/20">+{formatCount(overflow)}</AvatarGroupCount>}
//             </AvatarGroup>
//             <span className="text-gray-400 text-xs font-medium tabular-nums">{formatCount(data.total)}</span>
//           </div>
//         )}
//         <Button type="button" size="sm" disabled={loading} onClick={handleClick}
//           className={`rounded-xl text-xs px-4 py-1.5 font-medium transition-all min-w-[92px]
//             ${isFollowing ? 'border border-white/20 bg-white/10 text-white hover:bg-red-500/10 hover:border-red-500/40 hover:text-red-400' : 'border border-indigo-500/50 bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 hover:text-indigo-300'}
//             ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
//           {isFollowing ? 'Following ✓' : 'Follow +'}
//         </Button>
//       </div>
//     </>
//   )
// }

// // ── Sign In Modal ─────────────────────────────────────────────────────────
// function SignInModal({ onClose }: { onClose: () => void }) {
//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/70 backdrop-blur-md" onClick={onClose}>
//       <div className="w-full max-w-sm rounded-2xl border border-white/10 shadow-2xl p-6" style={{ backgroundColor: 'rgba(15,15,15,0.95)' }} onClick={e => e.stopPropagation()}>
//         <div className="flex items-center justify-between mb-6">
//           <div>
//             <h2 className="text-white font-semibold text-lg">Sign in</h2>
//             <p className="text-gray-400 text-xs mt-0.5">Choose a provider to continue</p>
//           </div>
//           <button onClick={onClose} className="text-gray-400 hover:text-white text-xl">✕</button>
//         </div>
//         <div className="flex flex-col gap-3">
//           <button onClick={() => signIn('google')} className="flex items-center gap-3 w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white">
//             <GoogleIcon /> Continue with Google
//           </button>
//           <button onClick={() => signIn('github')} className="flex items-center gap-3 w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white">
//             <GitHubIcon /> Continue with GitHub
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// // ── UserAvatar ────────────────────────────────────────────────────────────
// function UserAvatar({ image, name, size = 34, extraClass = '' }: {
//   image?: string | null; name?: string | null; size?: number; extraClass?: string
// }) {
//   return image ? (
//     <Image src={image} alt={name ?? 'avatar'} width={size} height={size}
//       className={`rounded-full ring-2 ring-gray-600 transition-all ${extraClass}`}
//       style={{ width: size, height: size }} />
//   ) : (
//     <div className={`rounded-full bg-gray-700 flex items-center justify-center font-bold ring-2 ring-gray-600 transition-all ${extraClass}`}
//       style={{ width: size, height: size, fontSize: size * 0.375 }}>
//       {name?.[0]?.toUpperCase() ?? '?'}
//     </div>
//   )
// }

// // ── MoreSecondNav ─────────────────────────────────────────────────────────
// // FIX 1: removed overflow-hidden from the dropdown — that was suppressing
// // backdrop-filter in Chromium. Animation is now opacity + translateY only.
// function MoreSecondNav() {
//   const [isOpen, setIsOpen] = useState(false)
//   const closeTimer = useRef<NodeJS.Timeout | null>(null)
//   const open = () => { if (closeTimer.current) clearTimeout(closeTimer.current); setIsOpen(true) }
//   const close = () => { closeTimer.current = setTimeout(() => setIsOpen(false), 100) }

//   return (
//     <div className="relative" onMouseEnter={open} onMouseLeave={close}>
//       <button type="button" className={`text-sm transition-colors hover:text-white ${isOpen ? 'text-white' : 'text-gray-400'}`}>More</button>
//       {/* invisible bridge so mouse can travel to the dropdown */}
//       {isOpen && (
//         <div
//           className="absolute left-1/2 -translate-x-1/2"
//           style={{ top: '100%', height: '12px', width: '120px' }}
//           onMouseEnter={open}
//           onMouseLeave={close}
//         />
//       )}
//       {/* FIX 1: no overflow-hidden → backdrop-filter works correctly */}
//       <div
//         className={`fixed left-0 right-0 z-40 border-b border-white/10 transition-all duration-300 ease-out
//           ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
//         style={{ top: '63px', ...DROPDOWN_BLUR }}
//         onMouseEnter={open}
//         onMouseLeave={close}
//       >
//         <div className="max-w-5xl mx-auto px-6 py-5">
//           <div className="flex justify-center gap-10 text-sm">
//             {MORE_LINKS.map(({ label, href }) => (
//               <Link key={href} href={href} className="text-gray-400 hover:text-white py-2" onClick={() => setIsOpen(false)}>
//                 {label}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// // ── GuestFollowPreview ────────────────────────────────────────────────────
// function GuestFollowPreview() {
//   const [data, setData] = useState<FollowersData>({ followers: [], total: 0 })
//   useEffect(() => {
//     fetch('/api/followers').then(r => r.json()).then(setData).catch(() => {})
//   }, [])
//   if (data.total === 0) return null
//   const shown = data.followers.slice(0, 3)
//   const overflow = data.total - shown.length
//   return (
//     <div className="flex items-center gap-1.5">
//       <AvatarGroup>
//         {shown.map(f => (
//           <SAvatar key={f.userId} className="w-6 h-6 border border-white/20">
//             <AvatarImage src={f.image} alt={f.name} />
//             <AvatarFallback className="text-[10px] bg-gray-700 text-white">{f.name?.[0]?.toUpperCase() ?? '?'}</AvatarFallback>
//           </SAvatar>
//         ))}
//         {overflow > 0 && <AvatarGroupCount className="w-6 h-6 text-[10px] bg-gray-700 text-white border border-white/20">+{formatCount(overflow)}</AvatarGroupCount>}
//       </AvatarGroup>
//       <span className="text-gray-400 text-xs font-medium tabular-nums">{formatCount(data.total)} followers</span>
//     </div>
//   )
// }

// // ── Mobile Menu Auth Section ──────────────────────────────────────────────
// function MobileAuthSection({ session, setMenuOpen, setShowSignOut }: {
//   session: any; setMenuOpen: (open: boolean) => void; setShowSignOut: (show: boolean) => void
// }) {
//   if (session) {
//     return (
//       <>
//         <div className="pt-4 border-t border-white/10">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <UserAvatar image={session.user?.image} name={session.user?.name} size={42} />
//               <div>
//                 <div className="text-white text-sm">{session.user?.name}</div>
//                 <div className="text-xs text-gray-400">{session.user?.email}</div>
//               </div>
//             </div>
//             <button onClick={() => { setMenuOpen(false); setShowSignOut(true) }} className="text-red-400 hover:text-red-300 font-medium">Sign out</button>
//           </div>
//         </div>
//         <div className="flex justify-center pt-2">
//           <FollowSection session={session} />
//         </div>
//       </>
//     )
//   }

//   return (
//     <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
//       <button
//         onClick={() => { setMenuOpen(false); signIn('google') }}
//         className="flex items-center justify-center gap-3 w-full py-3.5 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 transition-all text-white text-sm font-medium"
//       >
//         <GoogleIcon /> Continue with Google
//       </button>
//       <button
//         onClick={() => { setMenuOpen(false); signIn('github') }}
//         className="flex items-center justify-center gap-3 w-full py-3.5 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 transition-all text-white text-sm font-medium"
//       >
//         <GitHubIcon /> Continue with GitHub
//       </button>
//     </div>
//   )
// }

// // ── Main Navbar ───────────────────────────────────────────────────────────
// export default function Navbar() {
//   const [visible, setVisible] = useState(true)
//   const [menuOpen, setMenuOpen] = useState(false)
//   const [showModal, setShowModal] = useState(false)
//   const [showSignOut, setShowSignOut] = useState(false)

//   const lastY = useRef(0)
//   const pathname = usePathname()
//   const { data: session, status } = useSession()

//   useEffect(() => {
//     const onScroll = () => {
//       const y = window.scrollY
//       setVisible(y < lastY.current || y < 10)
//       lastY.current = y
//     }
//     window.addEventListener('scroll', onScroll, { passive: true })
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   useEffect(() => {
//     setMenuOpen(false)
//     setShowModal(false)
//     setShowSignOut(false)
//   }, [pathname])

//   useEffect(() => {
//     document.body.style.overflow = (showModal || showSignOut) ? 'hidden' : ''
//     return () => { document.body.style.overflow = '' }
//   }, [showModal, showSignOut])

//   return (
//     <>
//       {showModal && <SignInModal onClose={() => setShowModal(false)} />}
//       {showSignOut && <SignOutModal onClose={() => setShowSignOut(false)} />}

//       <nav
//         className={`fixed top-0 left-0 w-full z-50 text-white transition-transform duration-300 border-b border-white/[0.06] ${visible ? 'translate-y-0' : '-translate-y-full'}`}
//         style={NAV_BLUR}
//       >
//         <div className="max-w-5xl mx-auto px-6 py-4 flex items-center">
//           <Link href="/" className="shrink-0 text-xl font-bold tracking-tight hover:text-gray-200">Sam</Link>

//           <div className="hidden md:flex flex-1 items-center justify-center gap-6 text-sm">
//             {NAV_LINKS.map(({ label, href }) => (
//               <Link key={href} href={href} className={`transition-colors hover:text-white ${pathname === href ? 'text-white font-medium' : 'text-gray-400'}`}>{label}</Link>
//             ))}
//             <MoreSecondNav />
//           </div>

//           {/* Desktop Right Side */}
//           <div className="hidden md:flex items-center gap-4 shrink-0">
//             {status === 'loading' ? (
//               <div className="w-8 h-8 rounded-full bg-gray-800 animate-pulse" />
//             ) : session ? (
//               <div className="flex items-center gap-4">
//                 <FollowSection session={session} />
//                 <button onClick={() => setShowSignOut(true)} className="focus:outline-none group">
//                   <UserAvatar image={session.user?.image} name={session.user?.name} size={34} extraClass="group-hover:ring-red-500" />
//                 </button>
//               </div>
//             ) : (
//               <div className="flex items-center gap-4">
//                 <GuestFollowPreview />
//                 <button onClick={() => setShowModal(true)} className="text-sm px-5 py-2 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white">Sign in</button>
//               </div>
//             )}
//           </div>

//           {/* Mobile Hamburger */}
//           <div className="md:hidden flex flex-1 items-center justify-between">
//             {status !== 'loading' && <div className="flex-1 flex justify-center"><GuestFollowPreview /></div>}
//             {status === 'loading' && <div className="flex-1" />}
//             <button onClick={() => setMenuOpen(o => !o)} className="text-white p-2 text-xl">{menuOpen ? '✕' : '☰'}</button>
//           </div>
//         </div>

//         {/* ── Mobile Menu ──────────────────────────────────────────────────
//             FIX 2: replaced overflow-hidden + max-h animation with
//             opacity + translateY so backdrop-filter is never clipped.
//             Also added Say Hello & Code block links.
//         ─────────────────────────────────────────────────────────────────── */}
//         <div
//           className={`md:hidden absolute top-full left-0 w-full z-[60] transition-all duration-300
//             ${menuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-3 pointer-events-none'}`}
//           style={{
//             ...DROPDOWN_BLUR,
//             borderTop: '1px solid rgba(255,255,255,0.15)',
//             borderBottomLeftRadius: '20px',
//             borderBottomRightRadius: '20px',
//           }}
//         >
//           <div className="flex flex-col px-6 py-8 gap-6 text-base">
//             {NAV_LINKS.map(({ label, href }) => (
//               <Link
//                 key={href} href={href}
//                 className={`hover:text-white ${pathname === href ? 'text-white font-medium' : 'text-gray-300'}`}
//                 onClick={() => setMenuOpen(false)}
//               >
//                 {label}
//               </Link>
//             ))}

//             {/* FIX 2: Say Hello & Code block in mobile menu */}
//             <div className="flex flex-col gap-6 pt-1 border-t border-white/10">
//               {MORE_LINKS.map(({ label, href }) => (
//                 <Link
//                   key={href} href={href}
//                   className={`hover:text-white ${pathname === href ? 'text-white font-medium' : 'text-gray-300'}`}
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   {label}
//                 </Link>
//               ))}
//             </div>

//             <MobileAuthSection session={session} setMenuOpen={setMenuOpen} setShowSignOut={setShowSignOut} />
//           </div>
//         </div>
//       </nav>
//     </>
//   )
// }







































// 'use client'

// import { useEffect, useRef, useState, useCallback } from 'react'
// import { createPortal } from 'react-dom'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { useSession, signIn, signOut } from 'next-auth/react'
// import Image from 'next/image'
// import {
//   Avatar as SAvatar,
//   AvatarFallback,
//   AvatarGroup,
//   AvatarGroupCount,
//   AvatarImage,
// } from '@/components/ui/avatar'
// import { Button } from '@/components/ui/button'
// import { formatCount } from '@/lib/formatFollowers'

// // ── Navigation Data ────────────────────────────────────────────────────────
// const NAV_LINKS = [
//   { label: 'Home',       href: '/' },
//   { label: 'Writing',    href: '/writing' },
//   { label: 'Blogs',      href: '/blogs' },
//   { label: 'Projects',   href: '/projects' },
//   { label: 'Experience', href: '/experience' },
//   { label: 'Updates',    href: '/updates' },
// ]

// const MORE_LINKS = [
//   { label: 'Say Hello', href: '/sayhello' },
//   { label: 'Code block', href: '/codeblock' },
// ]

// // ── Types ──────────────────────────────────────────────────────────────────
// interface Follower {
//   userId: string
//   name: string
//   image: string
//   followedAt: string
// }

// interface FollowersData {
//   followers: Follower[]
//   total: number
// }

// // ── Icons ──────────────────────────────────────────────────────────────────
// const GoogleIcon = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24">
//     <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
//     <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
//     <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
//     <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
//   </svg>
// )

// const GitHubIcon = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
//   </svg>
// )

// // ── useFollowers Hook ──────────────────────────────────────────────────────
// function useFollowers(userEmail?: string | null) {
//   const [data, setData] = useState<FollowersData>({ followers: [], total: 0 })
//   const [isFollowing, setIsFollowing] = useState(false)
//   const [loading, setLoading] = useState(false)

//   const refresh = useCallback(async () => {
//     try {
//       const res = await fetch('/api/followers')
//       const json = await res.json()
//       setData(json)
//       if (userEmail) {
//         setIsFollowing(json.followers.some((f: Follower) => f.userId === userEmail))
//       }
//     } catch {}
//   }, [userEmail])

//   useEffect(() => { refresh() }, [refresh])

//   const toggleFollow = async () => {
//     if (loading) return
//     setLoading(true)
//     const wasFollowing = isFollowing
//     setIsFollowing(!wasFollowing)
//     setData(d => ({ ...d, total: d.total + (wasFollowing ? -1 : 1) }))
//     try {
//       await fetch('/api/followers/me', { method: wasFollowing ? 'DELETE' : 'POST' })
//       await refresh()
//     } catch {
//       setIsFollowing(wasFollowing)
//       setData(d => ({ ...d, total: d.total + (wasFollowing ? 1 : -1) }))
//     } finally {
//       setLoading(false)
//     }
//   }

//   return { data, isFollowing, loading, toggleFollow }
// }

// // ── Unfollow Confirm Modal ─────────────────────────────────────────────────
// function UnfollowConfirmModal({ onConfirm, onClose }: { onConfirm: () => void; onClose: () => void }) {
//   return createPortal(
//     <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 bg-black/80 backdrop-blur-lg" onClick={onClose}>
//       <div className="w-full max-w-sm rounded-2xl border border-white/10 shadow-2xl p-6 flex flex-col gap-5"
//         style={{ backgroundColor: 'rgba(15,15,15,0.98)' }} onClick={e => e.stopPropagation()}>
//         <div className="flex items-center justify-between">
//           <div>
//             <h2 className="text-white font-semibold text-lg">Unfollow?</h2>
//             <p className="text-gray-400 text-xs mt-1">Are you sure you want to unfollow this profile?</p>
//           </div>
//           <button type="button" onClick={onClose} className="text-gray-400 hover:text-white text-xl leading-none">✕</button>
//         </div>
//         <div className="flex gap-3 pt-2">
//           <Button variant="outline" className="flex-1 rounded-xl border-white/10 bg-white/5 hover:bg-white/10 text-white py-2.5" onClick={onClose}>Cancel</Button>
//           <Button className="flex-1 rounded-xl bg-red-600 hover:bg-red-700 text-white py-2.5" onClick={() => { onConfirm(); onClose() }}>Yes, Unfollow</Button>
//         </div>
//       </div>
//     </div>,
//     document.body
//   )
// }

// // ── Sign Out Modal ─────────────────────────────────────────────────────────
// function SignOutModal({ onClose }: { onClose: () => void }) {
//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/80 backdrop-blur-lg" onClick={onClose}>
//       <div className="w-full max-w-sm rounded-2xl border border-white/10 shadow-2xl p-6 flex flex-col gap-5"
//         style={{ backgroundColor: 'rgba(15,15,15,0.98)' }} onClick={e => e.stopPropagation()}>
//         <div className="flex items-center justify-between">
//           <div>
//             <h2 className="text-white font-semibold text-lg">Sign out</h2>
//             <p className="text-gray-400 text-xs mt-1">Are you sure you want to sign out?</p>
//           </div>
//           <button type="button" onClick={onClose} className="text-gray-400 hover:text-white text-xl leading-none">✕</button>
//         </div>
//         <div className="flex gap-3 pt-2">
//           <Button variant="outline" className="flex-1 rounded-xl border-white/10 bg-white/5 hover:bg-white/10 text-white py-2.5" onClick={onClose}>Cancel</Button>
//           <Button className="flex-1 rounded-xl bg-red-600 hover:bg-red-700 text-white py-2.5" onClick={() => signOut()}>Yes, sign out</Button>
//         </div>
//       </div>
//     </div>
//   )
// }

// // ── Sign In Modal ──────────────────────────────────────────────────────────
// function SignInModal({ onClose }: { onClose: () => void }) {
//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/70 backdrop-blur-md" onClick={onClose}>
//       <div className="w-full max-w-sm rounded-2xl border border-white/10 shadow-2xl p-6"
//         style={{ backgroundColor: 'rgba(15,15,15,0.95)' }} onClick={e => e.stopPropagation()}>
//         <div className="flex items-center justify-between mb-6">
//           <div>
//             <h2 className="text-white font-semibold text-lg">Sign in</h2>
//             <p className="text-gray-400 text-xs mt-0.5">Choose a provider to continue</p>
//           </div>
//           <button onClick={onClose} className="text-gray-400 hover:text-white text-xl">✕</button>
//         </div>
//         <div className="flex flex-col gap-3">
//           <button onClick={() => signIn('google')} className="flex items-center gap-3 w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white">
//             <GoogleIcon /> Continue with Google
//           </button>
//           <button onClick={() => signIn('github')} className="flex items-center gap-3 w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white">
//             <GitHubIcon /> Continue with GitHub
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// // ── UserAvatar ─────────────────────────────────────────────────────────────
// function UserAvatar({ image, name, size = 34, extraClass = '' }: {
//   image?: string | null; name?: string | null; size?: number; extraClass?: string
// }) {
//   return image ? (
//     <Image src={image} alt={name ?? 'avatar'} width={size} height={size}
//       className={`rounded-full ring-2 ring-gray-600 transition-all ${extraClass}`}
//       style={{ width: size, height: size }} />
//   ) : (
//     <div className={`rounded-full bg-gray-700 flex items-center justify-center font-bold ring-2 ring-gray-600 transition-all ${extraClass}`}
//       style={{ width: size, height: size, fontSize: size * 0.375 }}>
//       {name?.[0]?.toUpperCase() ?? '?'}
//     </div>
//   )
// }

// // ── MoreSecondNav ──────────────────────────────────────────────────────────
// function MoreSecondNav({ navVisible }: { navVisible: boolean }) {
//   const [isOpen, setIsOpen] = useState(false)
//   const [mounted, setMounted] = useState(false)
//   const closeTimer = useRef<NodeJS.Timeout | null>(null)

//   useEffect(() => { setMounted(true) }, [])
//   // Close when navbar hides
//   useEffect(() => { if (!navVisible) setIsOpen(false) }, [navVisible])

//   const open  = () => { if (closeTimer.current) clearTimeout(closeTimer.current); setIsOpen(true) }
//   const close = () => { closeTimer.current = setTimeout(() => setIsOpen(false), 100) }

//   return (
//     <div className="relative" onMouseEnter={open} onMouseLeave={close}>
//       <button type="button" className={`text-sm transition-colors hover:text-white ${isOpen ? 'text-white' : 'text-gray-400'}`}>
//         More
//       </button>

//       {mounted && createPortal(
//         <div
//           className={`fixed left-0 right-0 z-40 border-b border-white/10 transition-all duration-300 ease-out
//             ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
//           style={{
//             // Follows navbar: nav top 0px → dropdown at 63px. Nav hidden at -80px → 63-80 = -17px
//             top: navVisible ? '63px' : '-17px',
//             transition: 'top 0.3s ease, opacity 0.3s ease, transform 0.3s ease',
//             backgroundColor: 'rgba(10, 10, 10, 0.58)',
//             backdropFilter: 'blur(40px) saturate(200%)',
//             WebkitBackdropFilter: 'blur(40px) saturate(200%)',
//           }}
//           onMouseEnter={open} onMouseLeave={close}
//         >
//           <div className="max-w-5xl mx-auto px-6 py-5">
//             <div className="flex justify-center gap-10 text-sm">
//               {MORE_LINKS.map(({ label, href }) => (
//                 <Link key={href} href={href} className="text-gray-400 hover:text-white py-2" onClick={() => setIsOpen(false)}>
//                   {label}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>,
//         document.body
//       )}
//     </div>
//   )
// }

// // ── GuestFollowPreview ─────────────────────────────────────────────────────
// function GuestFollowPreview() {
//   const [data, setData] = useState<FollowersData>({ followers: [], total: 0 })
//   useEffect(() => {
//     fetch('/api/followers').then(r => r.json()).then(setData).catch(() => {})
//   }, [])
//   if (data.total === 0) return null
//   const shown    = data.followers.slice(0, 3)
//   const overflow = data.total - shown.length
//   return (
//     <div className="flex items-center gap-1.5">
//       <AvatarGroup>
//         {shown.map(f => (
//           <SAvatar key={f.userId} className="w-6 h-6">
//             <AvatarImage src={f.image} alt={f.name} />
//             <AvatarFallback className="text-[10px] bg-gray-700 text-white">{f.name?.[0]?.toUpperCase() ?? '?'}</AvatarFallback>
//           </SAvatar>
//         ))}
//         {overflow > 0 && (
//           <AvatarGroupCount className="w-6 h-6 text-[10px] bg-gray-700 text-white">
//             +
//           </AvatarGroupCount>
//         )}
//       </AvatarGroup>
//       <span className="text-gray-400 text-xs font-medium tabular-nums">
//         {formatCount(data.total)} followers
//       </span>
//     </div>
//   )
// }

// // ── FollowSection ──────────────────────────────────────────────────────────
// function FollowSection({ session }: { session: any }) {
//   const { data, isFollowing, loading, toggleFollow } = useFollowers(session?.user?.email)
//   const [showUnfollowConfirm, setShowUnfollowConfirm] = useState(false)

//   const shown    = data.followers.slice(0, 3)
//   const overflow = data.total - shown.length
//   const handleClick = () => isFollowing ? setShowUnfollowConfirm(true) : toggleFollow()

//   return (
//     <>
//       {showUnfollowConfirm && (
//         <UnfollowConfirmModal onConfirm={toggleFollow} onClose={() => setShowUnfollowConfirm(false)} />
//       )}
//       <div className="flex items-center gap-3">
//         {data.followers.length > 0 && (
//           <div className="flex items-center gap-1.5">
//             <AvatarGroup className="-space-x-1.5">
//               {shown.map((f) => (
//                 <SAvatar key={f.userId} className="w-6 h-6">
//                   <AvatarImage src={f.image} alt={f.name} />
//                   <AvatarFallback className="text-[10px] bg-gray-700 text-white">{f.name?.[0]?.toUpperCase() ?? '?'}</AvatarFallback>
//                 </SAvatar>
//               ))}
//               {overflow > 0 && (
//                 <AvatarGroupCount className="w-6 h-6 text-[10px] bg-gray-700 text-white">
//                   +
//                 </AvatarGroupCount>
//               )}
//             </AvatarGroup>
//             <span className="text-gray-400 text-xs font-medium tabular-nums">
//               {formatCount(data.total)}
//             </span>
//           </div>
//         )}
//         <Button type="button" size="sm" disabled={loading} onClick={handleClick}
//           className={`rounded-xl text-xs px-4 py-1.5 font-medium transition-all min-w-[92px]
//             ${isFollowing
//               ? 'border border-white/20 bg-white/10 text-white hover:bg-red-500/10 hover:border-red-500/40 hover:text-red-400'
//               : 'border border-indigo-500/50 bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 hover:text-indigo-300'}
//             ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
//           {isFollowing ? 'Following ✓' : 'Follow +'}
//         </Button>
//       </div>
//     </>
//   )
// }


// // ── MobileAuthSection ──────────────────────────────────────────────────────
// function MobileAuthSection({ session, setMenuOpen, setShowSignOut }: {
//   session: any; setMenuOpen: (open: boolean) => void; setShowSignOut: (show: boolean) => void
// }) {
//   if (session) {
//     return (
//       <>
//         <div className="pt-4 border-t border-white/10">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <UserAvatar image={session.user?.image} name={session.user?.name} size={42} />
//               <div>
//                 <div className="text-white text-sm">{session.user?.name}</div>
//                 <div className="text-xs text-gray-400">{session.user?.email}</div>
//               </div>
//             </div>
//             <button
//               onClick={() => { setMenuOpen(false); setShowSignOut(true) }}
//               className="text-red-400 hover:text-red-300 font-medium text-sm"
//             >
//               Sign out
//             </button>
//           </div>
//         </div>
//         <div className="flex justify-center pt-2">
//           <FollowSection session={session} />
//         </div>
//       </>
//     )
//   }
//   return (
//     <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
//       <button
//         onClick={() => { setMenuOpen(false); signIn('google') }}
//         className="flex items-center justify-center gap-3 w-full py-3.5 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 transition-all text-white text-sm font-medium"
//       >
//         <GoogleIcon /> Continue with Google
//       </button>
//       <button
//         onClick={() => { setMenuOpen(false); signIn('github') }}
//         className="flex items-center justify-center gap-3 w-full py-3.5 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 transition-all text-white text-sm font-medium"
//       >
//         <GitHubIcon /> Continue with GitHub
//       </button>
//     </div>
//   )
// }

// // ── Main Navbar ────────────────────────────────────────────────────────────
// export default function Navbar() {
//   const [visible, setVisible]         = useState(true)
//   const [menuOpen, setMenuOpen]       = useState(false)
//   const [showModal, setShowModal]     = useState(false)
//   const [showSignOut, setShowSignOut] = useState(false)
//   const [mounted, setMounted]         = useState(false)

//   const lastY    = useRef(0)
//   const pathname = usePathname()
//   const { data: session, status } = useSession()

//   useEffect(() => { setMounted(true) }, [])

//   // Scroll show/hide — also close menu when hiding
//   useEffect(() => {
//     const onScroll = () => {
//       const y = window.scrollY
//       const nowVisible = y < lastY.current || y < 10
//       setVisible(nowVisible)
//       if (!nowVisible) setMenuOpen(false)
//       lastY.current = y
//     }
//     window.addEventListener('scroll', onScroll, { passive: true })
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   useEffect(() => {
//     setMenuOpen(false)
//     setShowModal(false)
//     setShowSignOut(false)
//   }, [pathname])

//   useEffect(() => {
//     document.body.style.overflow = (showModal || showSignOut) ? 'hidden' : ''
//     return () => { document.body.style.overflow = '' }
//   }, [showModal, showSignOut])

//   // NAV_HEIGHT must match py-4 + content (≈ 63px). Adjust if you change padding.
//   const NAV_HEIGHT = 63

//   return (
//     <>
//       {showModal   && <SignInModal  onClose={() => setShowModal(false)} />}
//       {showSignOut && <SignOutModal onClose={() => setShowSignOut(false)} />}

//       {/*
//         ── BLUR STRATEGY ───────────────────────────────────────────────────
//         • `top` animation (not transform) — transform creates a compositing
//           context that traps children's backdrop-filter.
//         • backdrop-filter lives directly on <nav> — no child wrapper needed.
//         • All floating panels (More dropdown, mobile menu) use createPortal
//           so they render in <body> and are never trapped inside the nav's
//           stacking context.
//         ─────────────────────────────────────────────────────────────────── */}
//       <nav
//         className="fixed left-0 w-full z-50 text-white border-b border-white/[0.06]"
//         style={{
//           top: visible ? '0px' : `-${NAV_HEIGHT + 4}px`,
//           transition: 'top 0.3s ease',
//           backgroundColor: 'rgba(8, 8, 8, 0.75)',
//           backdropFilter: 'blur(28px) saturate(180%)',
//           WebkitBackdropFilter: 'blur(28px) saturate(180%)',
//         }}
//       >
//         <div className="max-w-5xl mx-auto px-6 py-4 flex items-center">
//           <Link href="/" className="shrink-0 text-xl font-bold tracking-tight hover:text-gray-200">
//             Sam
//           </Link>

//           {/* Desktop nav */}
//           <div className="hidden md:flex flex-1 items-center justify-center gap-6 text-sm">
//             {NAV_LINKS.map(({ label, href }) => (
//               <Link key={href} href={href}
//                 className={`transition-colors hover:text-white ${pathname === href ? 'text-white font-medium' : 'text-gray-400'}`}>
//                 {label}
//               </Link>
//             ))}
//             <MoreSecondNav navVisible={visible} />
//           </div>

//           {/* Desktop right */}
//           <div className="hidden md:flex items-center gap-4 shrink-0">
//             {status === 'loading' ? (
//               <div className="w-8 h-8 rounded-full bg-gray-800 animate-pulse" />
//             ) : session ? (
//               <div className="flex items-center gap-4">
//                 <FollowSection session={session} />
//                 <button onClick={() => setShowSignOut(true)} className="focus:outline-none group">
//                   <UserAvatar image={session.user?.image} name={session.user?.name} size={34} extraClass="group-hover:ring-red-500" />
//                 </button>
//               </div>
//             ) : (
//               <div className="flex items-center gap-4">
//                 <GuestFollowPreview />
//                 <button onClick={() => setShowModal(true)}
//                   className="text-sm px-5 py-2 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all">
//                   Sign in
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* Mobile hamburger */}
//           <div className="md:hidden flex flex-1 items-center justify-between">
//             {status !== 'loading' && <div className="flex-1 flex justify-center"><GuestFollowPreview /></div>}
//             {status === 'loading'  && <div className="flex-1" />}
//             <button onClick={() => setMenuOpen(o => !o)} className="text-white p-2 text-xl">
//               {menuOpen ? '✕' : '☰'}
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* ── Mobile menu portal ─────────────────────────────────────────────
//           Outside <nav> in the DOM → backdrop-filter blurs real page content.
//           `top` is synced with the navbar so they slide together on scroll.
//       ──────────────────────────────────────────────────────────────────── */}
//       {mounted && createPortal(
//         <div
//           className={`md:hidden fixed left-0 right-0 z-[60] transition-all duration-300
//             ${menuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
//           style={{
//             top: visible ? `${NAV_HEIGHT}px` : `${NAV_HEIGHT - (NAV_HEIGHT + 4)}px`,
//             transition: 'top 0.3s ease, opacity 0.3s ease, transform 0.3s ease',
//             backgroundColor: 'rgba(0, 0, 0, 0.58)',
//             backdropFilter: 'blur(40px) saturate(200%)',
//             WebkitBackdropFilter: 'blur(40px) saturate(200%)',
//             borderTop: '1px solid rgba(255,255,255,0.10)',
//             borderBottomLeftRadius: '20px',
//             borderBottomRightRadius: '20px',
//           }}
//         >
//           <div className="flex flex-col px-6 py-8 gap-6 text-base">
//             {NAV_LINKS.map(({ label, href }) => (
//               <Link key={href} href={href}
//                 className={`hover:text-white transition-colors ${pathname === href ? 'text-white font-medium' : 'text-gray-300'}`}
//                 onClick={() => setMenuOpen(false)}>
//                 {label}
//               </Link>
//             ))}

//             <div className="flex flex-col gap-6">
//               {MORE_LINKS.map(({ label, href }) => (
//                 <Link key={href} href={href}
//                   className={`hover:text-white transition-colors ${pathname === href ? 'text-white font-medium' : 'text-gray-300'}`}
//                   onClick={() => setMenuOpen(false)}>
//                   {label}
//                 </Link>
//               ))}
//             </div>

//             <MobileAuthSection session={session} setMenuOpen={setMenuOpen} setShowSignOut={setShowSignOut} />
//           </div>
//         </div>,
//         document.body
//       )}
//     </>
//   )
// }




































'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
import {
  Avatar as SAvatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { formatCount } from '@/lib/formatFollowers'

// ── Navigation Data ────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: 'Home',       href: '/' },
  { label: 'Writing',    href: '/writing' },
  { label: 'Blogs',      href: '/blogs' },
  { label: 'Projects',   href: '/projects' },
  { label: 'Experience', href: '/experience' },
  { label: 'Updates',    href: '/updates' },
]

const MORE_LINKS = [
  { label: 'Say Hello', href: '/sayhello' },
  { label: 'Code block', href: '/codeblock' },
]

// ── Types ──────────────────────────────────────────────────────────────────
interface Follower {
  userId: string
  name: string
  image: string
  followedAt: string
}

interface FollowersData {
  followers: Follower[]
  total: number
}

// ── Icons ──────────────────────────────────────────────────────────────────
const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
)

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
  </svg>
)

// ── useFollowers Hook ──────────────────────────────────────────────────────
function useFollowers(userEmail?: string | null) {
  const [data, setData] = useState<FollowersData>({ followers: [], total: 0 })
  const [isFollowing, setIsFollowing] = useState(false)
  const [loading, setLoading] = useState(false)

  const refresh = useCallback(async () => {
    try {
      const res = await fetch('/api/followers')
      const json = await res.json()
      setData(json)
      if (userEmail) {
        setIsFollowing(json.followers.some((f: Follower) => f.userId === userEmail))
      }
    } catch {}
  }, [userEmail])

  useEffect(() => { refresh() }, [refresh])

  const toggleFollow = async () => {
    if (loading) return
    setLoading(true)
    const wasFollowing = isFollowing
    setIsFollowing(!wasFollowing)
    setData(d => ({ ...d, total: d.total + (wasFollowing ? -1 : 1) }))
    try {
      await fetch('/api/followers/me', { method: wasFollowing ? 'DELETE' : 'POST' })
      await refresh()
    } catch {
      setIsFollowing(wasFollowing)
      setData(d => ({ ...d, total: d.total + (wasFollowing ? 1 : -1) }))
    } finally {
      setLoading(false)
    }
  }

  return { data, isFollowing, loading, toggleFollow }
}

// ── Unfollow Confirm Modal ─────────────────────────────────────────────────
function UnfollowConfirmModal({ onConfirm, onClose }: { onConfirm: () => void; onClose: () => void }) {
  return createPortal(
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 bg-black/80 backdrop-blur-lg" onClick={onClose}>
      <div className="w-full max-w-sm rounded-2xl border border-white/10 shadow-2xl p-6 flex flex-col gap-5"
        style={{ backgroundColor: 'rgba(15,15,15,0.98)' }} onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-white font-semibold text-lg">Unfollow?</h2>
            <p className="text-gray-400 text-xs mt-1">Are you sure you want to unfollow this profile?</p>
          </div>
          <button type="button" onClick={onClose} className="text-gray-400 hover:text-white text-xl leading-none">✕</button>
        </div>
        <div className="flex gap-3 pt-2">
          <Button variant="outline" className="flex-1 rounded-xl border-white/10 bg-white/5 hover:bg-white/10 text-white py-2.5" onClick={onClose}>Cancel</Button>
          <Button className="flex-1 rounded-xl bg-red-600 hover:bg-red-700 text-white py-2.5" onClick={() => { onConfirm(); onClose() }}>Yes, Unfollow</Button>
        </div>
      </div>
    </div>,
    document.body
  )
}

// ── Sign Out Modal ─────────────────────────────────────────────────────────
function SignOutModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/80 backdrop-blur-lg" onClick={onClose}>
      <div className="w-full max-w-sm rounded-2xl border border-white/10 shadow-2xl p-6 flex flex-col gap-5"
        style={{ backgroundColor: 'rgba(15,15,15,0.98)' }} onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-white font-semibold text-lg">Sign out</h2>
            <p className="text-gray-400 text-xs mt-1">Are you sure you want to sign out?</p>
          </div>
          <button type="button" onClick={onClose} className="text-gray-400 hover:text-white text-xl leading-none">✕</button>
        </div>
        <div className="flex gap-3 pt-2">
          <Button variant="outline" className="flex-1 rounded-xl border-white/10 bg-white/5 hover:bg-white/10 text-white py-2.5" onClick={onClose}>Cancel</Button>
          <Button className="flex-1 rounded-xl bg-red-600 hover:bg-red-700 text-white py-2.5" onClick={() => signOut()}>Yes, sign out</Button>
        </div>
      </div>
    </div>
  )
}

// ── Sign In Modal ──────────────────────────────────────────────────────────
function SignInModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/70 backdrop-blur-md" onClick={onClose}>
      <div className="w-full max-w-sm rounded-2xl border border-white/10 shadow-2xl p-6"
        style={{ backgroundColor: 'rgba(15,15,15,0.95)' }} onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-white font-semibold text-lg">Sign in</h2>
            <p className="text-gray-400 text-xs mt-0.5">Choose a provider to continue</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-xl">✕</button>
        </div>
        <div className="flex flex-col gap-3">
          <button onClick={() => signIn('google')} className="flex items-center gap-3 w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white">
            <GoogleIcon /> Continue with Google
          </button>
          <button onClick={() => signIn('github')} className="flex items-center gap-3 w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white">
            <GitHubIcon /> Continue with GitHub
          </button>
        </div>
      </div>
    </div>
  )
}

// ── UserAvatar ─────────────────────────────────────────────────────────────
function UserAvatar({ image, name, size = 34, extraClass = '' }: {
  image?: string | null; name?: string | null; size?: number; extraClass?: string
}) {
  return image ? (
    <Image src={image} alt={name ?? 'avatar'} width={size} height={size}
      className={`rounded-full ring-2 ring-gray-600 transition-all ${extraClass}`}
      style={{ width: size, height: size }} />
  ) : (
    <div className={`rounded-full bg-gray-700 flex items-center justify-center font-bold ring-2 ring-gray-600 transition-all ${extraClass}`}
      style={{ width: size, height: size, fontSize: size * 0.375 }}>
      {name?.[0]?.toUpperCase() ?? '?'}
    </div>
  )
}

// ── MoreSecondNav ──────────────────────────────────────────────────────────
function MoreSecondNav({ navVisible }: { navVisible: boolean }) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const closeTimer = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => { setMounted(true) }, [])
  useEffect(() => { if (!navVisible) setIsOpen(false) }, [navVisible])

  const open  = () => { if (closeTimer.current) clearTimeout(closeTimer.current); setIsOpen(true) }
  const close = () => { closeTimer.current = setTimeout(() => setIsOpen(false), 100) }

  return (
    <div className="relative" onMouseEnter={open} onMouseLeave={close}>
      <button type="button" className={`text-sm transition-colors hover:text-white ${isOpen ? 'text-white' : 'text-gray-400'}`}>
        More
      </button>
      {mounted && createPortal(
        <div
          className={`fixed left-0 right-0 z-40 border-b border-white/10 transition-all duration-300 ease-out
            ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
          style={{
            top: navVisible ? '63px' : '-17px',
            transition: 'top 0.3s ease, opacity 0.3s ease, transform 0.3s ease',
            backgroundColor: 'rgba(10, 10, 10, 0.58)',
            backdropFilter: 'blur(40px) saturate(200%)',
            WebkitBackdropFilter: 'blur(40px) saturate(200%)',
          }}
          onMouseEnter={open} onMouseLeave={close}
        >
          <div className="max-w-5xl mx-auto px-6 py-5">
            <div className="flex justify-center gap-10 text-sm">
              {MORE_LINKS.map(({ label, href }) => (
                <Link key={href} href={href} className="text-gray-400 hover:text-white py-2" onClick={() => setIsOpen(false)}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  )
}

// ── GuestFollowPreview ─────────────────────────────────────────────────────
// Shows the 3 most recent followers (last 3 in array) + "+" overflow count
function GuestFollowPreview() {
  const [data, setData] = useState<FollowersData>({ followers: [], total: 0 })
  useEffect(() => {
    fetch('/api/followers').then(r => r.json()).then(setData).catch(() => {})
  }, [])
  if (data.total === 0) return null

  // ↓ last 3 = most recently followed, reversed so newest is first/front
  const shown    = [...data.followers].slice(-3).reverse()
  const overflow = data.total - shown.length

  return (
    <div className="flex items-center gap-1.5">
      <AvatarGroup>
        {shown.map(f => (
          <SAvatar key={f.userId} className="w-6 h-6">
            <AvatarImage src={f.image} alt={f.name} />
            <AvatarFallback className="text-[10px] bg-gray-700 text-white">{f.name?.[0]?.toUpperCase() ?? '?'}</AvatarFallback>
          </SAvatar>
        ))}
        {overflow > 0 && (
          <AvatarGroupCount className="w-6 h-6 text-[10px] bg-gray-700 text-white">
            +
          </AvatarGroupCount>
        )}
      </AvatarGroup>
      <span className="text-gray-400 text-xs font-medium tabular-nums">
        {formatCount(data.total)} followers
      </span>
    </div>
  )
}

// ── FollowSection ──────────────────────────────────────────────────────────
// Shows the 3 most recent followers (last 3 in array) + "+" overflow count
function FollowSection({ session }: { session: any }) {
  const { data, isFollowing, loading, toggleFollow } = useFollowers(session?.user?.email)
  const [showUnfollowConfirm, setShowUnfollowConfirm] = useState(false)

  // ↓ last 3 = most recently followed, reversed so newest is first/front
  const shown    = [...data.followers].slice(-3).reverse()
  const overflow = data.total - shown.length
  const handleClick = () => isFollowing ? setShowUnfollowConfirm(true) : toggleFollow()

  return (
    <>
      {showUnfollowConfirm && (
        <UnfollowConfirmModal onConfirm={toggleFollow} onClose={() => setShowUnfollowConfirm(false)} />
      )}
      <div className="flex items-center gap-3">
        {data.followers.length > 0 && (
          <div className="flex items-center gap-1.5">
            <AvatarGroup className="-space-x-1.5">
              {shown.map((f) => (
                <SAvatar key={f.userId} className="w-6 h-6">
                  <AvatarImage src={f.image} alt={f.name} />
                  <AvatarFallback className="text-[10px] bg-gray-700 text-white">{f.name?.[0]?.toUpperCase() ?? '?'}</AvatarFallback>
                </SAvatar>
              ))}
              {overflow > 0 && (
                <AvatarGroupCount className="w-6 h-6 text-[10px] bg-gray-700 text-white">
                  +
                </AvatarGroupCount>
              )}
            </AvatarGroup>
            <span className="text-gray-400 text-xs font-medium tabular-nums">
              {formatCount(data.total)}
            </span>
          </div>
        )}
        <Button type="button" size="sm" disabled={loading} onClick={handleClick}
          className={`rounded-xl text-xs px-4 py-1.5 font-medium transition-all min-w-[92px]
            ${isFollowing
              ? 'border border-white/20 bg-white/10 text-white hover:bg-red-500/10 hover:border-red-500/40 hover:text-red-400'
              : 'border border-indigo-500/50 bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 hover:text-indigo-300'}
            ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
          {isFollowing ? 'Following ✓' : 'Follow +'}
        </Button>
      </div>
    </>
  )
}

// ── MobileAuthSection ──────────────────────────────────────────────────────
function MobileAuthSection({ session, setMenuOpen, setShowSignOut }: {
  session: any; setMenuOpen: (open: boolean) => void; setShowSignOut: (show: boolean) => void
}) {
  if (session) {
    return (
      <>
        <div className="pt-4 border-t border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <UserAvatar image={session.user?.image} name={session.user?.name} size={42} />
              <div>
                <div className="text-white text-sm">{session.user?.name}</div>
                <div className="text-xs text-gray-400">{session.user?.email}</div>
              </div>
            </div>
            <button
              onClick={() => { setMenuOpen(false); setShowSignOut(true) }}
              className="text-red-400 hover:text-red-300 font-medium text-sm"
            >
              Sign out
            </button>
          </div>
        </div>
        <div className="flex justify-center pt-2">
          <FollowSection session={session} />
        </div>
      </>
    )
  }
  return (
    <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
      <button
        onClick={() => { setMenuOpen(false); signIn('google') }}
        className="flex items-center justify-center gap-3 w-full py-3.5 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 transition-all text-white text-sm font-medium"
      >
        <GoogleIcon /> Continue with Google
      </button>
      <button
        onClick={() => { setMenuOpen(false); signIn('github') }}
        className="flex items-center justify-center gap-3 w-full py-3.5 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 transition-all text-white text-sm font-medium"
      >
        <GitHubIcon /> Continue with GitHub
      </button>
    </div>
  )
}

// ── Main Navbar ────────────────────────────────────────────────────────────
export default function Navbar() {
  const [visible, setVisible]         = useState(true)
  const [menuOpen, setMenuOpen]       = useState(false)
  const [showModal, setShowModal]     = useState(false)
  const [showSignOut, setShowSignOut] = useState(false)
  const [mounted, setMounted]         = useState(false)

  const lastY    = useRef(0)
  const pathname = usePathname()
  const { data: session, status } = useSession()

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const nowVisible = y < lastY.current || y < 10
      setVisible(nowVisible)
      if (!nowVisible) setMenuOpen(false)
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setShowModal(false)
    setShowSignOut(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = (showModal || showSignOut) ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [showModal, showSignOut])

  const NAV_HEIGHT = 63

  return (
    <>
      {showModal   && <SignInModal  onClose={() => setShowModal(false)} />}
      {showSignOut && <SignOutModal onClose={() => setShowSignOut(false)} />}

      <nav
        className="fixed left-0 w-full z-50 text-white border-b border-white/[0.06]"
        style={{
          top: visible ? '0px' : `-${NAV_HEIGHT + 4}px`,
          transition: 'top 0.3s ease',
          backgroundColor: 'rgba(8, 8, 8, 0.75)',
          backdropFilter: 'blur(28px) saturate(180%)',
          WebkitBackdropFilter: 'blur(28px) saturate(180%)',
        }}
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center">
          <Link href="/" className="shrink-0 text-xl font-bold tracking-tight hover:text-gray-200">
            Sam
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-6 text-sm">
            {NAV_LINKS.map(({ label, href }) => (
              <Link key={href} href={href}
                className={`transition-colors hover:text-white ${pathname === href ? 'text-white font-medium' : 'text-gray-400'}`}>
                {label}
              </Link>
            ))}
            <MoreSecondNav navVisible={visible} />
          </div>

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            {status === 'loading' ? (
              <div className="w-8 h-8 rounded-full bg-gray-800 animate-pulse" />
            ) : session ? (
              <div className="flex items-center gap-4">
                <FollowSection session={session} />
                <button onClick={() => setShowSignOut(true)} className="focus:outline-none group">
                  <UserAvatar image={session.user?.image} name={session.user?.name} size={34} extraClass="group-hover:ring-red-500" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <GuestFollowPreview />
                <button onClick={() => setShowModal(true)}
                  className="text-sm px-5 py-2 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all">
                  Sign in
                </button>
              </div>
            )}
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex flex-1 items-center justify-between">
            {status !== 'loading' && <div className="flex-1 flex justify-center"><GuestFollowPreview /></div>}
            {status === 'loading'  && <div className="flex-1" />}
            <button onClick={() => setMenuOpen(o => !o)} className="text-white p-2 text-xl">
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </nav>

      {mounted && createPortal(
        <div
          className={`md:hidden fixed left-0 right-0 z-[60] transition-all duration-300
            ${menuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
          style={{
            top: visible ? `${NAV_HEIGHT}px` : `${NAV_HEIGHT - (NAV_HEIGHT + 4)}px`,
            transition: 'top 0.3s ease, opacity 0.3s ease, transform 0.3s ease',
            backgroundColor: 'rgba(0, 0, 0, 0.58)',
            backdropFilter: 'blur(40px) saturate(200%)',
            WebkitBackdropFilter: 'blur(40px) saturate(200%)',
            borderTop: '1px solid rgba(255,255,255,0.10)',
            borderBottomLeftRadius: '20px',
            borderBottomRightRadius: '20px',
          }}
        >
          <div className="flex flex-col px-6 py-8 gap-6 text-base">
            {NAV_LINKS.map(({ label, href }) => (
              <Link key={href} href={href}
                className={`hover:text-white transition-colors ${pathname === href ? 'text-white font-medium' : 'text-gray-300'}`}
                onClick={() => setMenuOpen(false)}>
                {label}
              </Link>
            ))}
            <div className="flex flex-col gap-6">
              {MORE_LINKS.map(({ label, href }) => (
                <Link key={href} href={href}
                  className={`hover:text-white transition-colors ${pathname === href ? 'text-white font-medium' : 'text-gray-300'}`}
                  onClick={() => setMenuOpen(false)}>
                  {label}
                </Link>
              ))}
            </div>
            <MobileAuthSection session={session} setMenuOpen={setMenuOpen} setShowSignOut={setShowSignOut} />
          </div>
        </div>,
        document.body
      )}
    </>
  )
}



















// 'use client'

// import { useEffect, useRef, useState } from 'react'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { useSession, signIn, signOut } from 'next-auth/react'
// import Image from 'next/image'

// const NAV_LINKS = [
//   { label: 'Home',       href: '/' },
//   { label: 'Writing',    href: '/writing' },
//   { label: 'Blogs',      href: '/blogs' },
//   { label: 'Projects',   href: '/projects' },
//   { label: 'Experience', href: '/experience' },
//   { label: 'Updates',    href: '/updates' },
// ]

// const GoogleIcon = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24">
//     <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
//     <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
//     <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
//     <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
//   </svg>
// )

// const GitHubIcon = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
//   </svg>
// )

// function SignOutModal({ onClose }: { onClose: () => void }) {
//   return (
//     <div
//       className="fixed inset-0 z-[100] flex items-center justify-center px-4"
//       style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}
//       onClick={onClose}
//     >
//       <div
//         className="w-full max-w-sm rounded-2xl border border-white/10 shadow-2xl p-6 flex flex-col gap-5"
//         style={{ backgroundColor: 'rgba(15,15,15,0.95)' }}
//         onClick={e => e.stopPropagation()}
//       >
//         <div className="flex items-center justify-between">
//           <div>
//             <h2 className="text-white font-semibold text-lg">Sign out</h2>
//             <p className="text-gray-400 text-xs mt-0.5">Are you sure you want to sign out?</p>
//           </div>
//           <button type="button" onClick={onClose}
//             className="text-gray-500 hover:text-white transition-colors p-1">
//             <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>
//         <div className="flex gap-3">
//           <button type="button" onClick={onClose}
//             className="flex-1 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-white text-sm">
//             Cancel
//           </button>
//           <button type="button" onClick={() => signOut()}
//             className="flex-1 py-2.5 rounded-xl border border-red-500/40 bg-red-500/10 hover:bg-red-500/20 transition-all text-red-400 hover:text-red-300 text-sm font-medium">
//             Yes, sign out
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// function SignInModal({ onClose }: { onClose: () => void }) {
//   return (
//     <div
//       className="fixed inset-0 z-[100] flex items-center justify-center px-4"
//       style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}
//       onClick={onClose}
//     >
//       <div
//         className="w-full max-w-sm rounded-2xl border border-white/10 shadow-2xl p-6 flex flex-col gap-4"
//         style={{ backgroundColor: 'rgba(15,15,15,0.95)' }}
//         onClick={e => e.stopPropagation()}
//       >
//         <div className="flex items-center justify-between">
//           <div>
//             <h2 className="text-white font-semibold text-lg">Sign in</h2>
//             <p className="text-gray-400 text-xs mt-0.5">Choose a provider to continue</p>
//           </div>
//           <button type="button" onClick={onClose}
//             className="text-gray-500 hover:text-white transition-colors p-1">
//             <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>
//         <div className="flex flex-col gap-3">
//           <button type="button" onClick={() => signIn('google')}
//             className="flex items-center gap-3 w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-white text-sm font-medium">
//             <GoogleIcon /> Continue with Google
//           </button>
//           <button type="button" onClick={() => signIn('github')}
//             className="flex items-center gap-3 w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-white text-sm font-medium">
//             <GitHubIcon /> Continue with GitHub
//           </button>
//         </div>
//         <p className="text-xs text-gray-600 text-center">
//           By signing in you agree to our terms of service.
//         </p>
//       </div>
//     </div>
//   )
// }

// function Avatar({ image, name, size = 32, extraClass = '' }: {
//   image?: string | null; name?: string | null; size?: number; extraClass?: string
// }) {
//   return image ? (
//     <Image src={image} alt={name ?? 'avatar'} width={size} height={size}
//       className={`rounded-full ring-2 ring-gray-600 transition-all ${extraClass}`}
//       style={{ width: size, height: size }} />
//   ) : (
//     <div className={`rounded-full bg-gray-700 flex items-center justify-center font-bold ring-2 ring-gray-600 transition-all ${extraClass}`}
//       style={{ width: size, height: size, fontSize: size * 0.375 }}>
//       {name?.[0]?.toUpperCase() ?? '?'}
//     </div>
//   )
// }

// export default function Navbar() {
//   const [visible,     setVisible]     = useState(true)
//   const [menuOpen,    setMenuOpen]    = useState(false)
//   const [showModal,   setShowModal]   = useState(false)
//   const [showSignOut, setShowSignOut] = useState(false)
//   const lastY    = useRef(0)
//   const pathname = usePathname()
//   const { data: session, status } = useSession()

//   useEffect(() => {
//     const onScroll = () => {
//       const y = window.scrollY
//       setVisible(y < lastY.current || y < 10)
//       lastY.current = y
//     }
//     window.addEventListener('scroll', onScroll, { passive: true })
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   useEffect(() => {
//     setMenuOpen(false)
//     setShowModal(false)
//     setShowSignOut(false)
//   }, [pathname])

//   useEffect(() => {
//     document.body.style.overflow = (showModal || showSignOut) ? 'hidden' : ''
//     return () => { document.body.style.overflow = '' }
//   }, [showModal, showSignOut])

//   // Auth button — shows skeleton while session is loading
//   const AuthButton = ({ mobile = false }: { mobile?: boolean }) => {
//     if (status === 'loading') return (
//       <div className={`rounded-full bg-gray-800 animate-pulse ${mobile ? 'w-full h-11' : 'w-8 h-8 ml-2'}`} />
//     )
//     if (session) return mobile ? (
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           <Avatar image={session.user?.image} name={session.user?.name} size={40} />
//           <div>
//             <div className="text-white text-sm">{session.user?.name}</div>
//             <div className="text-xs text-gray-400">{session.user?.email}</div>
//           </div>
//         </div>
//         <button type="button" onClick={() => setShowSignOut(true)}
//           className="text-red-400 hover:text-red-300 text-sm font-medium">
//           Sign out
//         </button>
//       </div>
//     ) : (
//       <button type="button" onClick={() => setShowSignOut(true)}
//         className="ml-2 focus:outline-none group">
//         <Avatar image={session.user?.image} name={session.user?.name} size={32}
//           extraClass="group-hover:ring-red-500" />
//       </button>
//     )

//     return mobile ? (
//       <button type="button"
//         onClick={() => { setMenuOpen(false); setShowModal(true) }}
//         className="flex items-center justify-center w-full py-3 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 transition-all text-white text-sm">
//         Sign in
//       </button>
//     ) : (
//       <button type="button" onClick={() => setShowModal(true)}
//         className="ml-2 text-sm text-gray-400 hover:text-white transition-colors">
//         Sign in
//       </button>
//     )
//   }

//   return (
//     <>
//       {showModal   && <SignInModal  onClose={() => setShowModal(false)} />}
//       {showSignOut && <SignOutModal onClose={() => setShowSignOut(false)} />}

//       <nav className={`fixed top-0 left-0 w-full z-50 text-white transition-transform duration-300
//         ${visible ? 'translate-y-0' : '-translate-y-full'}`}
//         style={{ backgroundColor: 'rgba(0,0,0,0.68)' }}
//       >
//         <div className="absolute inset-0 -z-10"
//           style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }} />

//         <div className="max-w-2xl mx-auto px-6 md:px-0 py-4 flex justify-between items-center relative">
//           <Link href="/" className="text-base font-bold tracking-tight hover:text-gray-300 transition-colors">
//             Sam
//           </Link>

//           {/* Desktop */}
//           <div className="hidden md:flex items-center gap-6 text-sm">
//             {NAV_LINKS.map(({ label, href }) => (
//               <Link key={href} href={href}
//                 className={`transition-colors hover:text-white ${
//                   pathname === href ? 'text-white font-medium' : 'text-gray-400'
//                 }`}>
//                 {label}
//               </Link>
//             ))}
//             <AuthButton />
//           </div>

//           {/* Hamburger */}
//           <button type="button" onClick={() => setMenuOpen(o => !o)}
//             className="md:hidden text-white p-2" aria-label="Toggle menu">
//             {menuOpen ? (
//               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             ) : (
//               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             )}
//           </button>
//         </div>

//         {/* Mobile menu */}
//         <div className={`md:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-300 ease-out z-[60]
//           ${menuOpen ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'}`}>
//           <div style={{
//             backgroundColor:         'rgba(10,10,10,0.68)',
//             backdropFilter:          'blur(28px)',
//             WebkitBackdropFilter:    'blur(28px)',
//             borderTop:               '1px solid rgba(255,255,255,0.15)',
//             borderBottomLeftRadius:  '20px',
//             borderBottomRightRadius: '20px',
//           }}>
//             <div className="flex flex-col px-6 py-7 gap-6 text-base">
//               {NAV_LINKS.map(({ label, href }) => (
//                 <Link key={href} href={href}
//                   className={`transition-colors hover:text-white ${
//                     pathname === href ? 'text-white font-medium' : 'text-gray-300'
//                   }`}>
//                   {label}
//                 </Link>
//               ))}
//               <div className="pt-4 border-t border-white/10">
//                 <AuthButton mobile />
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   )
// }



















// 'use client'

// import { useEffect, useRef, useState } from 'react'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { useSession, signIn, signOut } from 'next-auth/react'
// import Image from 'next/image'

// const NAV_LINKS = [
//   { label: 'Home',       href: '/' },
//   { label: 'Writing',    href: '/writing' },
//   { label: 'Blogs',      href: '/blogs' },
//   { label: 'Projects',   href: '/projects' },
//   { label: 'Experience', href: '/experience' },
//   { label: 'Updates',    href: '/updates' },
// ]

// const GoogleIcon = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24">
//     <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
//     <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
//     <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
//     <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
//   </svg>
// )

// const GitHubIcon = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
//   </svg>
// )

// // ── Sign-out confirm popup ───────────────────────────────────
// function SignOutModal({ onClose }: { onClose: () => void }) {
//   return (
//     <div
//       className="fixed inset-0 z-[100] flex items-center justify-center px-4"
//       style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}
//       onClick={onClose}
//     >
//       <div
//         className="w-full max-w-sm rounded-2xl border border-white/10 shadow-2xl p-6 flex flex-col gap-5"
//         style={{ backgroundColor: 'rgba(15,15,15,0.95)' }}
//         onClick={e => e.stopPropagation()}
//       >
//         <div className="flex items-center justify-between">
//           <div>
//             <h2 className="text-white font-semibold text-lg">Sign out</h2>
//             <p className="text-gray-400 text-xs mt-0.5">Are you sure you want to sign out?</p>
//           </div>
//           <button type="button" onClick={onClose}
//             className="text-gray-500 hover:text-white transition-colors p-1">
//             <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>
//         <div className="flex gap-3">
//           <button type="button" onClick={onClose}
//             className="flex-1 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-white text-sm">
//             Cancel
//           </button>
//           <button type="button" onClick={() => signOut()}
//             className="flex-1 py-2.5 rounded-xl border border-red-500/40 bg-red-500/10 hover:bg-red-500/20 transition-all text-red-400 hover:text-red-300 text-sm font-medium">
//             Yes, sign out
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// // ── Sign-in popup modal ──────────────────────────────────────
// function SignInModal({ onClose }: { onClose: () => void }) {
//   // close on backdrop click
//   return (
//     <div
//       className="fixed inset-0 z-[100] flex items-center justify-center px-4"
//       style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}
//       onClick={onClose}
//     >
//       <div
//         className="w-full max-w-sm rounded-2xl border border-white/10 shadow-2xl p-6 flex flex-col gap-4"
//         style={{ backgroundColor: 'rgba(15,15,15,0.95)' }}
//         onClick={e => e.stopPropagation()} // prevent close when clicking inside
//       >
//         {/* Header */}
//         <div className="flex items-center justify-between">
//           <div>
//             <h2 className="text-white font-semibold text-lg">Sign in</h2>
//             <p className="text-gray-400 text-xs mt-0.5">Choose a provider to continue</p>
//           </div>
//           <button
//             type="button"
//             onClick={onClose}
//             className="text-gray-500 hover:text-white transition-colors p-1"
//           >
//             <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>

//         {/* Buttons */}
//         <div className="flex flex-col gap-3">
//           <button
//             type="button"
//             onClick={() => signIn('google')}
//             className="flex items-center gap-3 w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-white text-sm font-medium"
//           >
//             <GoogleIcon />
//             Continue with Google
//           </button>
//           <button
//             type="button"
//             onClick={() => signIn('github')}
//             className="flex items-center gap-3 w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-white text-sm font-medium"
//           >
//             <GitHubIcon />
//             Continue with GitHub
//           </button>
//         </div>

//         <p className="text-xs text-gray-600 text-center">
//           By signing in you agree to our terms of service.
//         </p>
//       </div>
//     </div>
//   )
// }

// // ── Avatar ───────────────────────────────────────────────────
// function Avatar({ image, name, size = 32, extraClass = '' }: { image?: string | null; name?: string | null; size?: number; extraClass?: string }) {
//   return image ? (
//     <Image
//       src={image}
//       alt={name ?? 'avatar'}
//       width={size}
//       height={size}
//       className={`rounded-full ring-2 ring-gray-600 transition-all ${extraClass}`}
//       style={{ width: size, height: size }}
//     />
//   ) : (
//     <div
//       className={`rounded-full bg-gray-700 flex items-center justify-center font-bold ring-2 ring-gray-600 transition-all ${extraClass}`}
//       style={{ width: size, height: size, fontSize: size * 0.375 }}
//     >
//       {name?.[0]?.toUpperCase() ?? '?'}
//     </div>
//   )
// }

// // ── Navbar ───────────────────────────────────────────────────
// export default function Navbar() {
//   const [visible,    setVisible]    = useState(true)
//   const [menuOpen,   setMenuOpen]   = useState(false)
//   const [showModal,  setShowModal]  = useState(false)
//   const [showSignOut, setShowSignOut] = useState(false)
//   const lastY    = useRef(0)
//   const pathname = usePathname()
//   const { data: session } = useSession()

//   useEffect(() => {
//     const onScroll = () => {
//       const y = window.scrollY
//       setVisible(y < lastY.current || y < 10)
//       lastY.current = y
//     }
//     window.addEventListener('scroll', onScroll, { passive: true })
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   useEffect(() => {
//     setMenuOpen(false)
//     setShowModal(false)
//   }, [pathname])

//   // prevent body scroll when modal open
//   useEffect(() => {
//     document.body.style.overflow = showModal ? 'hidden' : ''
//     return () => { document.body.style.overflow = '' }
//   }, [showModal])

//   return (
//     <>
//       {/* Sign-in modal */}
//       {showModal && <SignInModal onClose={() => setShowModal(false)} />}
//       {showSignOut && <SignOutModal onClose={() => setShowSignOut(false)} />}

//       <nav
//         className={`
//           fixed top-0 left-0 w-full z-50 text-white
//           transition-transform duration-300
//           ${visible ? 'translate-y-0' : '-translate-y-full'}
//         `}
//         style={{ backgroundColor: 'rgba(0,0,0,0.68)' }}
//       >
//         {/* Blur layer */}
//         <div className="absolute inset-0 -z-10"
//           style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
//         />

//         <div className="max-w-2xl mx-auto px-6 md:px-0 py-4 flex justify-between items-center relative">
//           <Link href="/" className="text-base font-bold tracking-tight hover:text-gray-300 transition-colors">
//             Sam
//           </Link>

//           {/* Desktop */}
//           <div className="hidden md:flex items-center gap-6 text-sm">
//             {NAV_LINKS.map(({ label, href }) => (
//               <Link key={href} href={href}
//                 className={`transition-colors hover:text-white ${
//                   pathname === href ? 'text-white font-medium' : 'text-gray-400'
//                 }`}>
//                 {label}
//               </Link>
//             ))}

//             {/* Desktop auth */}
//             {session ? (
//               <button
//                 type="button"
//                 onClick={() => setShowSignOut(true)}
//                 className="ml-2 focus:outline-none group"
//               >
//                 <Avatar image={session.user?.image} name={session.user?.name} size={32}
//                   extraClass="group-hover:ring-red-500 transition-all" />
//               </button>
//             ) : (
//               <button
//                 type="button"
//                 onClick={() => setShowModal(true)}
//                 className="ml-2 text-sm text-gray-400 hover:text-white transition-colors"
//               >
//                 Sign in
//               </button>
//             )}
//           </div>

//           {/* Hamburger */}
//           <button type="button" onClick={() => setMenuOpen(o => !o)}
//             className="md:hidden text-white p-2" aria-label="Toggle menu">
//             {menuOpen ? (
//               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             ) : (
//               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             )}
//           </button>
//         </div>

//         {/* Mobile menu */}
//         <div className={`md:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-300 ease-out z-[60]
//           ${menuOpen ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'}`}>
//           <div style={{
//             backgroundColor:         'rgba(10,10,10,0.68)',
//             backdropFilter:          'blur(28px)',
//             WebkitBackdropFilter:    'blur(28px)',
//             borderTop:               '1px solid rgba(255,255,255,0.15)',
//             borderBottomLeftRadius:  '20px',
//             borderBottomRightRadius: '20px',
//           }}>
//             <div className="flex flex-col px-6 py-7 gap-6 text-base">
//               {NAV_LINKS.map(({ label, href }) => (
//                 <Link key={href} href={href}
//                   className={`transition-colors hover:text-white ${
//                     pathname === href ? 'text-white font-medium' : 'text-gray-300'
//                   }`}>
//                   {label}
//                 </Link>
//               ))}

//               <div className="pt-4 border-t border-white/10">
//                 {session ? (
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-3">
//                       <Avatar image={session.user?.image} name={session.user?.name} size={40} />
//                       <div>
//                         <div className="text-white text-sm">{session.user?.name}</div>
//                         <div className="text-xs text-gray-400">{session.user?.email}</div>
//                       </div>
//                     </div>
//                     <button type="button" onClick={() => signOut()}
//                       className="text-red-400 hover:text-red-300 text-sm font-medium">
//                       Sign out
//                     </button>
//                   </div>
//                 ) : (
//                   <button
//                     type="button"
//                     onClick={() => { setMenuOpen(false); setShowModal(true) }}
//                     className="flex items-center justify-center w-full py-3 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 transition-all text-white text-sm"
//                   >
//                     Sign in
//                   </button>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   )
// }











// 'use client'

// import { useEffect, useState } from 'react'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'

// const NAV_LINKS = [
//   { label: 'Home',       href: '/' },
//   { label: 'Writing',    href: '/writing' },
//   { label: 'Blogs',      href: '/blogs' },
//   { label: 'Projects',   href: '/projects' },
//   { label: 'Experience', href: '/experience' },
//   { label: 'Updates',    href: '/updates' },
// ]

// export default function Navbar() {
//   const pathname               = usePathname()
//   const [visible,  setVisible] = useState(true)
//   const [lastY,    setLastY]   = useState(0)
//   const [open,     setOpen]    = useState(false)
//   const [isMobile, setIsMobile]= useState(false)

//   // Detect screen size
//   useEffect(() => {
//     const check = () => setIsMobile(window.innerWidth < 768)
//     check()
//     window.addEventListener('resize', check)
//     return () => window.removeEventListener('resize', check)
//   }, [])

//   // Hide navbar on scroll down
//   useEffect(() => {
//     const onScroll = () => {
//       const y = window.scrollY
//       setVisible(y < lastY || y < 10)
//       setLastY(y)
//     }
//     window.addEventListener('scroll', onScroll, { passive: true })
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [lastY])

//   // Close menu on route change
//   useEffect(() => setOpen(false), [pathname])

//   return (
//     <>
//       {/* ── Navbar bar ── */}
//       <nav style={{
//         position:    'fixed',
//         top:         0,
//         left:        0,
//         width:       '100%',
//         zIndex:      50,
//         transform:   visible ? 'translateY(0)' : 'translateY(-100%)',
//         transition:  'transform 0.3s ease',
//         backgroundColor: 'rgba(0,0,0,0.6)',
//         backdropFilter:       'blur(16px)',
//         WebkitBackdropFilter: 'blur(16px)',
//         borderBottom: '1px solid #1f2937',
//         color: 'white',
//       }}>
//         <div style={{
//           maxWidth:       '672px',
//           margin:         '0 auto',
//           padding:        '16px 24px',
//           display:        'flex',
//           justifyContent: 'space-between',
//           alignItems:     'center',
//         }}>

//           {/* Logo */}
//           <Link href="/" style={{ fontSize: 15, fontWeight: 700, color: 'white', textDecoration: 'none' }}>
//             Sam
//           </Link>

//           {/* Desktop links */}
//           {!isMobile && (
//             <div style={{ display: 'flex', gap: 24 }}>
//               {NAV_LINKS.map(({ label, href }) => (
//                 <Link key={href} href={href} style={{
//                   fontSize:       14,
//                   textDecoration: 'none',
//                   color:          pathname === href ? '#ffffff' : '#9ca3af',
//                   fontWeight:     pathname === href ? 500 : 400,
//                   transition:     'color 0.2s',
//                 }}>
//                   {label}
//                 </Link>
//               ))}
//             </div>
//           )}

//           {/* Hamburger */}
//           {isMobile && (
//             <button
//               type="button"
//               onClick={() => setOpen(o => !o)}
//               onTouchEnd={(e) => { e.preventDefault(); setOpen(o => !o) }}
//               style={{
//                 background:               'none',
//                 border:                   'none',
//                 cursor:                   'pointer',
//                 padding:                  8,
//                 display:                  'flex',
//                 flexDirection:            'column',
//                 alignItems:               'center',
//                 justifyContent:           'center',
//                 gap:                      6,
//                 WebkitTapHighlightColor:  'transparent',
//               }}
//               aria-label="Toggle menu"
//             >
//               {[
//                 open ? 'rotate(45deg) translateY(8px)' : 'none',
//                 undefined,
//                 open ? 'rotate(-45deg) translateY(-8px)' : 'none',
//               ].map((transform, i) => (
//                 i === 1 ? (
//                   <span key={i} style={{
//                     display:    'block',
//                     width:      22,
//                     height:     2,
//                     background: 'white',
//                     opacity:    open ? 0 : 1,
//                     transition: 'opacity 0.2s',
//                   }} />
//                 ) : (
//                   <span key={i} style={{
//                     display:    'block',
//                     width:      22,
//                     height:     2,
//                     background: 'white',
//                     transition: 'transform 0.2s',
//                     transform:  transform as string,
//                   }} />
//                 )
//               ))}
//             </button>
//           )}

//         </div>
//       </nav>

//       {/* ── Mobile dropdown ── */}
//       {isMobile && (
//         <div style={{
//           position:             'fixed',
//           top:                  57,
//           left:                 0,
//           width:                '100%',
//           zIndex:               40,
//           backgroundColor:      'rgba(0,0,0,0.6)',
//           backdropFilter:       'blur(20px)',
//           WebkitBackdropFilter: 'blur(20px)',
//           borderBottom:         open ? '1px solid #1f2937' : 'none',
//           opacity:              open ? 1 : 0,
//           pointerEvents:        open ? 'auto' : 'none',
//           transition:           'opacity 0.25s ease',
//         }}>
//           <div style={{ display: 'flex', flexDirection: 'column', padding: '20px 24px', gap: 20 }}>
//             {NAV_LINKS.map(({ label, href }) => (
//               <Link key={href} href={href} style={{
//                 fontSize:       16,
//                 textDecoration: 'none',
//                 color:          pathname === href ? '#ffffff' : '#9ca3af',
//                 fontWeight:     pathname === href ? 500 : 400,
//               }}>
//                 {label}
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

