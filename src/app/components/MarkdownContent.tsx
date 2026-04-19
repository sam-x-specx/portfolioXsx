// // app/components/MarkdownContent.tsx
// import ReactMarkdown from 'react-markdown'
// import remarkGfm from 'remark-gfm'
// import rehypeHighlight from 'rehype-highlight'
// import 'highlight.js/styles/github-dark.css'

// export default function MarkdownContent({ content }: { content: string }) {
//   return (
//     <div className="prose prose-invert max-w-none prose-sm
//       prose-headings:text-white prose-headings:font-bold
//       prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
//       prose-h2:border-b prose-h2:border-gray-800 prose-h2:pb-4
//       prose-p:text-gray-300 prose-p:leading-7 my-6
//       prose-strong:text-white prose-strong:font-semibold
//       prose-a:text-blue-400 hover:prose-a:text-blue-300
//       prose-code:bg-gray-800 prose-code:text-green-400 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
//       prose-pre:bg-[#0d1117] prose-pre:border prose-pre:border-gray-800 prose-pre:rounded-xl prose-pre:p-4
//       prose-blockquote:border-l-4 prose-blockquote:border-gray-600 prose-blockquote:text-gray-400 prose-blockquote:pl-6 prose-blockquote:italic
//       prose-ul:my-6 prose-ol:my-6 prose-li:text-gray-300 prose-li:marker:text-gray-400
//       prose-img:rounded-xl prose-img:my-8
//     ">
//       <ReactMarkdown 
//         remarkPlugins={[remarkGfm]} 
//         rehypePlugins={[rehypeHighlight]}
//       >
//         {content}
//       </ReactMarkdown>
//     </div>
//   )
// }


import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function MarkdownContent({ content }: { content: string }) {
  return (
    <div className="prose prose-invert prose-sm max-w-none
      prose-headings:text-white prose-headings:font-bold
      prose-p:text-gray-300 prose-p:leading-7
      prose-li:text-gray-300
      prose-strong:text-white
      prose-a:text-blue-400
      prose-code:text-green-400 prose-code:bg-gray-800
    ">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  )
}