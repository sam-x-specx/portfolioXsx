// import { client } from '@/sanity/lib/client'

// async function getFooter() {
//   return client.fetch(`*[_type == "profile"][0]{ name, footerTagline }`)
// }

// export default async function Footer() {
//   const data = await getFooter()

//   return (
//     <footer className="w-full border-t border-gray-800">
//       <div className="max-w-2xl mx-auto px-0 py-6 grid grid-cols-3 items-center">
//         <span className="text-xs text-gray-600 uppercase tracking-widest">
//           {data?.name ?? 'Sam'}
//         </span>
//         <span className="text-xs text-gray-500 text-center tracking-widest uppercase">
//           {data?.footerTagline ?? ''}
//         </span>
//         <span className="text-xs text-gray-600 text-right">
//           © {new Date().getFullYear()} {data?.name ?? 'Sam'}
//         </span>
//       </div>
//     </footer>
//   )
// }












import { client } from '@/sanity/lib/client'

async function getFooter() {
  return client.fetch(`*[_type == "profile"][0]{ name, footerTagline }`)
}

export default async function Footer() {
  const data = await getFooter()
  const name = data?.name ?? 'Sam'

  return (
    <footer className="w-full border-t border-gray-800">
      <div className="max-w-2xl mx-auto px-6 md:px-0 py-6 flex items-center justify-between">

        <span className="text-xs text-gray-600 uppercase tracking-widest">
          {name}
        </span>

        {/* Tagline — only on desktop */}
        {data?.footerTagline && (
          <span className="hidden md:block text-xs text-gray-500 text-center tracking-widest uppercase">
            {data.footerTagline}
          </span>
        )}

        <span className="text-xs text-gray-600 text-right">
          © {new Date().getFullYear()} {name}
        </span>

      </div>
    </footer>
  )
}










// import { client } from '@/sanity/lib/client'

// async function getFooter() {
//   return client.fetch(`*[_type == "profile"][0]{ name, footerTagline }`)
// }

// export default async function Footer() {
//   const data = await getFooter()

//   return (
//     <footer className="w-full border-t border-gray-800 bg-[#030712]">
//       <div className="max-w-2xl mx-auto px-6 py-8 md:py-10">

//         {/* Desktop Layout */}
//         <div className="hidden md:grid grid-cols-3 items-center gap-4">
//           <span className="text-xs text-gray-600 uppercase tracking-widest">
//             {data?.name ?? 'Sam'}
//           </span>

//           <span className="text-xs text-gray-500 text-center tracking-widest uppercase">
//             {data?.footerTagline ?? 'Exploring the frontiers of mind and machine'}
//           </span>

//           <span className="text-xs text-gray-600 text-right">
//             © {new Date().getFullYear()} {data?.name ?? 'Sam'}
//           </span>
//         </div>

//         {/* Mobile Layout */}
//         <div className="md:hidden flex flex-col gap-4 text-center">
//           <span className="text-xs text-gray-600 uppercase tracking-widest">
//             {data?.name ?? 'Sam'}
//           </span>

//           <span className="text-xs text-gray-500 tracking-widest uppercase">
//             {data?.footerTagline ?? 'Exploring the frontiers of mind and machine'}
//           </span>

//           <span className="text-xs text-gray-600">
//             © {new Date().getFullYear()} {data?.name ?? 'Sam'}
//           </span>
//         </div>

//         {/* Optional Divider Line on Mobile */}
//         <div className="md:hidden border-t border-gray-800 mt-6 pt-6" />

//       </div>
//     </footer>
//   )
// }
