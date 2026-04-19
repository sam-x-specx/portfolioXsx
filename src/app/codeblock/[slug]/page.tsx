// // // app/codeblock/[slug]/page.tsx
// // import Link from "next/link";
// // import { notFound } from "next/navigation";
// // import { client } from "@/sanity/lib/client";
// // import { CopyButton } from "@/app/components/copy-button";
// // import {
// //   CODEBLOCK_BY_SLUG_QUERY,
// //   ALL_CODEBLOCK_SLUGS_QUERY,
// // } from "@/sanity/lib/queries";

// // interface CodeBlock {
// //   title: string;
// //   slug: { current: string };
// //   abbreviation: string;
// //   shortDescription: string;
// //   description?: string;
// //   code: string;
// //   language: string;
// //   fileExtension?: string;
// //   topic?: string;
// //   author?: string;
// //   publishedAt?: string;
// // }

// // export async function generateStaticParams() {
// //   const slugs: { slug: string }[] = await client.fetch(ALL_CODEBLOCK_SLUGS_QUERY);
// //   return slugs.map((s) => ({ slug: s.slug }));
// // }

// // export const revalidate = 60;

// // export default async function CodeBlockSlugPage({
// //   params,
// // }: {
// //   params: Promise<{ slug: string }>;
// // }) {
// //   const { slug } = await params;
// //   const block: CodeBlock | null = await client.fetch(
// //     CODEBLOCK_BY_SLUG_QUERY,
// //     { slug },
// //     { next: { revalidate: 60 } }
// //   );
// //   if (!block) notFound();

// //   const date = block.publishedAt
// //     ? new Date(block.publishedAt).toLocaleDateString("en-US", {
// //         year: "numeric",
// //         month: "long",
// //         day: "numeric",
// //       })
// //     : null;

// //   const lineCount = block.code.split("\n").length;

// //   return (
// //     <div className="min-h-screen bg-[#111113] text-white antialiased">

// //       {/* ── Nav bar ── */}
// //       <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#111113]/80 backdrop-blur-2xl">
// //         <div className="mx-auto flex max-w-3xl items-center gap-2 px-6 py-4">
// //           <Link
// //             href="/codeblock"
// //             className="text-sm text-neutral-500 transition-colors hover:text-white"
// //           >
// //             Code Blocks
// //           </Link>
// //           <svg className="size-3 text-neutral-700" viewBox="0 0 16 16" fill="currentColor">
// //             <path d="M6.5 3L11 8l-4.5 5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
// //           </svg>
// //           <span className="text-sm text-white">{block.title}</span>
// //         </div>
// //       </header>

// //       <main className="mx-auto max-w-3xl px-6 py-14">

// //         {/* ── Title block ── */}
// //         <div className="mb-10">
// //           <div className="mb-4 flex flex-wrap items-center gap-2">
// //             {block.topic && (
// //               <span className="rounded-full bg-blue-500/12 px-3 py-1 text-xs font-medium text-blue-400 ring-1 ring-blue-500/20">
// //                 {block.topic}
// //               </span>
// //             )}
// //             {block.fileExtension && (
// //               <span className="rounded-full bg-white/6 px-3 py-1 font-mono text-xs text-neutral-400 ring-1 ring-white/8">
// //                 {block.fileExtension}
// //               </span>
// //             )}
// //             {block.language && (
// //               <span className="rounded-full bg-white/6 px-3 py-1 font-mono text-xs text-neutral-400 ring-1 ring-white/8">
// //                 {block.language}
// //               </span>
// //             )}
// //           </div>

// //           <h1 className="text-3xl font-semibold tracking-tight text-white md:text-[2.25rem] md:leading-tight">
// //             {block.title}
// //           </h1>
// //           {block.shortDescription && (
// //             <p className="mt-2 text-[1.05rem] leading-relaxed text-neutral-500">
// //               {block.shortDescription}
// //             </p>
// //           )}
// //         </div>

// //         {/* ── Code Window ── */}
// //         <div className="mb-10 overflow-hidden rounded-2xl shadow-[0_0_0_1px_rgba(255,255,255,0.07),0_24px_48px_rgba(0,0,0,0.6)]">

// //           {/* Window chrome */}
// //           <div className="flex items-center justify-between border-b border-white/[0.06] bg-[#1c1c1e] px-5 py-3.5">
// //             {/* Traffic lights */}
// //             <div className="flex items-center gap-2">
// //               <div className="size-3 rounded-full bg-[#ff5f57] shadow-[0_0_6px_rgba(255,95,87,0.5)]" />
// //               <div className="size-3 rounded-full bg-[#febc2e] shadow-[0_0_6px_rgba(254,188,46,0.5)]" />
// //               <div className="size-3 rounded-full bg-[#28c840] shadow-[0_0_6px_rgba(40,200,64,0.5)]" />
// //             </div>

// //             {/* File info + copy */}
// //             <div className="flex items-center gap-3">
// //               <span className="font-mono text-xs text-neutral-600">
// //                 {block.fileExtension
// //                   ? `${block.abbreviation.toLowerCase()}${block.fileExtension}`
// //                   : block.title.toLowerCase().replace(/\s+/g, "-")}
// //               </span>
// //               <span className="text-xs text-neutral-700">·</span>
// //               <span className="text-xs text-neutral-600">{lineCount} lines</span>
// //               <CopyButton code={block.code} />
// //             </div>
// //           </div>

// //           {/* Code body */}
// //           <div className="overflow-x-auto bg-[#161618]">
// //             <pre className="min-w-full p-6 text-[13px] leading-[1.75] text-neutral-300">
// //               {/* Line numbers + code */}
// //               <code>
// //                 {block.code.split("\n").map((line, i) => (
// //                   <span key={i} className="flex">
// //                     <span className="mr-6 w-8 shrink-0 select-none text-right font-mono text-neutral-700">
// //                       {i + 1}
// //                     </span>
// //                     <span className="font-mono">{line || " "}</span>
// //                   </span>
// //                 ))}
// //               </code>
// //             </pre>
// //           </div>
// //         </div>

// //         {/* ── Description ── */}
// //         {block.description && (
// //           <div className="mb-10 rounded-2xl border border-white/[0.06] bg-[#1c1c1e] p-6">
// //             <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-600">
// //               About
// //             </p>
// //             <p className="text-[0.95rem] leading-relaxed text-neutral-400">
// //               {block.description}
// //             </p>
// //           </div>
// //         )}

// //         {/* ── Metadata footer ── */}
// //         <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/[0.06] pt-8">
// //           {block.author && (
// //             <MetaItem label="Author" value={block.author} />
// //           )}
// //           {date && (
// //             <MetaItem label="Published" value={date} />
// //           )}
// //           {block.language && (
// //             <MetaItem label="Language" value={block.language} mono />
// //           )}
// //           {block.topic && (
// //             <MetaItem label="Topic" value={block.topic} />
// //           )}
// //           {block.fileExtension && (
// //             <MetaItem label="Extension" value={block.fileExtension} mono />
// //           )}
// //         </div>
// //       </main>
// //     </div>
// //   );
// // }

// // /* ── Sub-component ── */
// // function MetaItem({
// //   label,
// //   value,
// //   mono = false,
// // }: {
// //   label: string;
// //   value: string;
// //   mono?: boolean;
// // }) {
// //   return (
// //     <div className="flex flex-col gap-0.5">
// //       <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-700">
// //         {label}
// //       </span>
// //       <span
// //         className={`text-sm text-neutral-300 ${mono ? "font-mono" : "font-normal"}`}
// //       >
// //         {value}
// //       </span>
// //     </div>
// //   );
// // }







// // // app/codeblock/[slug]/page.tsx
// // import Link from "next/link";
// // import { notFound } from "next/navigation";
// // import { client } from "@/sanity/lib/client";
// // import { CopyButton } from "@/app/components/copy-button";
// // import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
// // import {
// //   CODEBLOCK_BY_SLUG_QUERY,
// //   ALL_CODEBLOCK_SLUGS_QUERY,
// // } from "@/sanity/lib/queries";

// // interface CodeBlock {
// //   title: string;
// //   slug: { current: string };
// //   abbreviation: string;
// //   shortDescription: string;
// //   description?: string;
// //   code: string;
// //   language: string;
// //   fileExtension?: string;
// //   topic?: string;
// //   author?: string;
// //   publishedAt?: string;
// // }

// // export async function generateStaticParams() {
// //   const slugs: { slug: string }[] = await client.fetch(ALL_CODEBLOCK_SLUGS_QUERY);
// //   return slugs.map((s) => ({ slug: s.slug }));
// // }

// // export const revalidate = 60;

// // export default async function CodeBlockSlugPage({
// //   params,
// // }: {
// //   params: Promise<{ slug: string }>;
// // }) {
// //   const { slug } = await params;
// //   const block: CodeBlock | null = await client.fetch(
// //     CODEBLOCK_BY_SLUG_QUERY,
// //     { slug },
// //     { next: { revalidate: 60 } }
// //   );
// //   if (!block) notFound();

// //   const date = block.publishedAt
// //     ? new Date(block.publishedAt).toLocaleDateString("en-US", {
// //         year: "numeric",
// //         month: "long",
// //         day: "numeric",
// //       })
// //     : null;

// //   const lineCount = block.code.split("\n").length;

// //   return (
// //     <div className="min-h-screen bg-[#030712] text-white antialiased">

// //       {/* ── Modern Dynamic Navbar (Hide on scroll down, Show on scroll up) ── */}
// //       <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#030712]/95 backdrop-blur-2xl transition-all duration-300 hide-navbar-on-scroll">
// //         <div className="mx-auto flex max-w-3xl items-center gap-2 px-6 py-8">
// //           <Link
// //             href="/codeblock"
// //             className="text-sm text-neutral-400 transition-colors hover:text-white"
// //           >
// //             Code Blocks
// //           </Link>
// //           <svg className="size-3 text-neutral-700" viewBox="0 0 16 16" fill="currentColor">
// //             <path d="M6.5 3L11 8l-4.5 5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
// //           </svg>
// //           <span className="text-sm text-white font-medium truncate">{block.title}</span>
// //         </div>
// //       </header>

// //       {/* ── Dotted Hero Background ── */}
// //       <div className="relative w-full overflow-hidden" style={{ height: "480px" }}>
// //         <DottedGlowBackground
// //           className="pointer-events-none absolute inset-0"
// //           opacity={0.78}
// //           gap={14}
// //           radius={1.9}
// //           colorDarkVar="--color-neutral-600"
// //           glowColorDarkVar="--color-sky-700"
// //           backgroundOpacity={1}
// //           gradientFrom="#0f172a"
// //           gradientTo="#0d1117"
// //           speedMin={0.25}
// //           speedMax={1.3}
// //           speedScale={1}
// //         />

// //         <div
// //           className="pointer-events-none absolute inset-x-0 bottom-0 z-10"
// //           style={{
// //             height: "68%",
// //             background: "linear-gradient(to bottom, transparent, #030712)",
// //           }}
// //         />

// //         {/* Title content */}
// //         <div className="relative z-20 mx-auto max-w-3xl px-6 pt-16">
// //           <div className="mb-4 flex flex-wrap items-center gap-2">
// //             {block.topic && (
// //               <span className="rounded-full bg-blue-500/12 px-3 py-1 text-xs font-medium text-blue-400 ring-1 ring-blue-500/20">
// //                 {block.topic}
// //               </span>
// //             )}
// //             {block.fileExtension && (
// //               <span className="rounded-full bg-white/6 px-3 py-1 font-mono text-xs text-neutral-400 ring-1 ring-white/8">
// //                 {block.fileExtension}
// //               </span>
// //             )}
// //             {block.language && (
// //               <span className="rounded-full bg-white/6 px-3 py-1 font-mono text-xs text-neutral-400 ring-1 ring-white/8">
// //                 {block.language}
// //               </span>
// //             )}
// //           </div>

// //           <h1 className="text-3xl font-semibold tracking-tight text-white md:text-[2.25rem] md:leading-tight">
// //             {block.title}
// //           </h1>
// //           {block.shortDescription && (
// //             <p className="mt-3 text-[1.05rem] leading-relaxed text-neutral-500">
// //               {block.shortDescription}
// //             </p>
// //           )}
// //         </div>
// //       </div>

// //       {/* ── Main Content ── */}
// //       <main className="mx-auto max-w-3xl px-6 -mt-48 pb-14 relative z-30">

// //         {/* ── Code Window ── */}
// //         <div className="mb-10 overflow-hidden rounded-2xl shadow-[0_0_0_1px_rgba(255,255,255,0.07),0_24px_48px_rgba(0,0,0,0.6)]">

// //           {/* Window chrome */}
// //           <div className="flex items-center justify-between border-b border-white/[0.06] bg-[#080C14] px-5 py-3.5">
// //             <div className="flex items-center gap-2">
// //               <div className="size-3 rounded-full bg-[#ff5f57] shadow-[0_0_6px_rgba(255,95,87,0.5)]" />
// //               <div className="size-3 rounded-full bg-[#febc2e] shadow-[0_0_6px_rgba(254,188,46,0.5)]" />
// //               <div className="size-3 rounded-full bg-[#28c840] shadow-[0_0_6px_rgba(40,200,64,0.5)]" />
// //             </div>

// //             <div className="flex items-center gap-3">
// //               <span className="font-mono text-xs text-neutral-600">
// //                 {block.fileExtension
// //                   ? `${block.abbreviation.toLowerCase()}${block.fileExtension}`
// //                   : block.title.toLowerCase().replace(/\s+/g, "-")}
// //               </span>
// //               <span className="text-xs text-neutral-700">·</span>
// //               <span className="text-xs text-neutral-600">{lineCount} lines</span>
// //               <CopyButton code={block.code} />
// //             </div>
// //           </div>

// //           {/* Code body - Vertical scrollbar hidden */}
// //           <div className="overflow-x-auto bg-[#030a15] no-scrollbar">
// //             <pre className="min-w-full p-6 text-[13px] leading-[1.75] text-neutral-300">
// //               <code>
// //                 {block.code.split("\n").map((line, i) => (
// //                   <span key={i} className="flex">
// //                     <span className="mr-6 w-8 shrink-0 select-none text-right font-mono text-neutral-700">
// //                       {i + 1}
// //                     </span>
// //                     <span className="font-mono">{line || " "}</span>
// //                   </span>
// //                 ))}
// //               </code>
// //             </pre>
// //           </div>
// //         </div>

// //         {/* Description */}
// //         {block.description && (
// //           <div className="mb-10 rounded-2xl border border-white/[0.08] bg-[#080C14] p-8">
// //             <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-400">
// //               About
// //             </p>
// //             <p className="text-[0.97rem] leading-relaxed text-neutral-300">
// //               {block.description}
// //             </p>
// //           </div>
// //         )}

// //         {/* Metadata */}
// //         <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/[0.06] pt-8">
// //           {block.author && <MetaItem label="Author" value={block.author} />}
// //           {date && <MetaItem label="Published" value={date} />}
// //           {block.language && <MetaItem label="Language" value={block.language} mono />}
// //           {block.topic && <MetaItem label="Topic" value={block.topic} />}
// //           {block.fileExtension && <MetaItem label="Extension" value={block.fileExtension} mono />}
// //         </div>
// //       </main>
// //     </div>
// //   );
// // }

// // function MetaItem({
// //   label,
// //   value,
// //   mono = false,
// // }: {
// //   label: string;
// //   value: string;
// //   mono?: boolean;
// // }) {
// //   return (
// //     <div className="flex flex-col gap-0.5">
// //       <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-700">
// //         {label}
// //       </span>
// //       <span className={`text-sm text-neutral-300 ${mono ? "font-mono" : "font-normal"}`}>
// //         {value}
// //       </span>
// //     </div>
// //   );
// // }






// // // app/codeblock/[slug]/page.tsx
// // import Link from "next/link";
// // import { notFound } from "next/navigation";
// // import { client } from "@/sanity/lib/client";
// // import { CopyButton } from "@/app/components/copy-button";
// // import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
// // import { codeToHtml } from "shiki";
// // import {
// //   CODEBLOCK_BY_SLUG_QUERY,
// //   ALL_CODEBLOCK_SLUGS_QUERY,
// // } from "@/sanity/lib/queries";

// // interface CodeBlock {
// //   title: string;
// //   slug: { current: string };
// //   abbreviation: string;
// //   shortDescription: string;
// //   description?: string;
// //   code: string;
// //   language: string;
// //   fileExtension?: string;
// //   topic?: string;
// //   author?: string;
// //   publishedAt?: string;
// // }

// // export async function generateStaticParams() {
// //   const slugs: { slug: string }[] = await client.fetch(ALL_CODEBLOCK_SLUGS_QUERY);
// //   return slugs.map((s) => ({ slug: s.slug }));
// // }

// // export const revalidate = 60;

// // const LANG_MAP: Record<string, string> = {
// //   typescript: "typescript",
// //   javascript: "javascript",
// //   tsx: "tsx",
// //   jsx: "jsx",
// //   python: "python",
// //   css: "css",
// //   scss: "scss",
// //   bash: "bash",
// //   sh: "bash",
// //   json: "json",
// //   markdown: "markdown",
// //   md: "markdown",
// //   html: "html",
// //   rust: "rust",
// //   go: "go",
// //   java: "java",
// //   cpp: "cpp",
// //   c: "c",
// //   yaml: "yaml",
// //   toml: "toml",
// //   sql: "sql",
// // };

// // export default async function CodeBlockSlugPage({
// //   params,
// // }: {
// //   params: Promise<{ slug: string }>;
// // }) {
// //   const { slug } = await params;
// //   const block: CodeBlock | null = await client.fetch(
// //     CODEBLOCK_BY_SLUG_QUERY,
// //     { slug },
// //     { next: { revalidate: 60 } }
// //   );
// //   if (!block) notFound();

// //   const date = block.publishedAt
// //     ? new Date(block.publishedAt).toLocaleDateString("en-US", {
// //         year: "numeric",
// //         month: "long",
// //         day: "numeric",
// //       })
// //     : null;

// //   const lineCount = block.code.split("\n").length;
// //   const shikiLang = LANG_MAP[block.language?.toLowerCase()] ?? "text";

// //   const highlightedHtml = await codeToHtml(block.code, {
// //     lang: shikiLang,
// //     theme: "tokyo-night",
// //     transformers: [
// //       {
// //         pre(node) {
// //           node.properties.style =
// //             "background: transparent; padding: 0; margin: 0;";
// //         },
// //         code(node) {
// //           node.properties.style = "counter-reset: line;";
// //         },
// //         line(node) {
// //           node.properties.style =
// //             "counter-increment: line; display: flex; align-items: baseline;";
// //           node.properties.class = "shiki-line";
// //         },
// //       },
// //     ],
// //   });

// //   return (
// //     <div className="min-h-screen bg-[#030712] text-white antialiased">

// //       {/* ── Navbar ── */}
// //       <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#030712]/95 backdrop-blur-2xl transition-all duration-300">
// //         <div className="mx-auto flex max-w-3xl items-center gap-2 px-6 py-8">
// //           <Link
// //             href="/codeblock"
// //             className="text-sm text-neutral-400 transition-colors hover:text-white"
// //           >
// //             Code Blocks
// //           </Link>
// //           <svg
// //             className="size-3 text-neutral-700"
// //             viewBox="0 0 16 16"
// //             fill="currentColor"
// //           >
// //             <path
// //               d="M6.5 3L11 8l-4.5 5"
// //               stroke="currentColor"
// //               strokeWidth="1.5"
// //               fill="none"
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //             />
// //           </svg>
// //           <span className="text-sm text-white font-medium truncate">
// //             {block.title}
// //           </span>
// //         </div>
// //       </header>

// //       {/* ── Dotted Hero ── */}
// //       <div className="relative w-full overflow-hidden" style={{ height: "480px" }}>
// //         <DottedGlowBackground
// //           className="pointer-events-none absolute inset-0"
// //           opacity={0.78}
// //           gap={14}
// //           radius={1.9}
// //           colorDarkVar="--color-neutral-600"
// //           glowColorDarkVar="--color-sky-700"
// //           backgroundOpacity={0}
// //           speedMin={0.25}
// //           speedMax={1.3}
// //           speedScale={1}
// //         />
// //         {/* bottom fade into page bg */}
// //         <div
// //           className="pointer-events-none absolute inset-x-0 bottom-0 z-10"
// //           style={{
// //             height: "68%",
// //             background: "linear-gradient(to bottom, transparent, #030712)",
// //           }}
// //         />
// //         <div className="relative z-20 mx-auto max-w-3xl px-6 pt-16">
// //           <div className="mb-4 flex flex-wrap items-center gap-2">
// //             {block.topic && (
// //               <span className="rounded-full bg-blue-500/12 px-3 py-1 text-xs font-medium text-blue-400 ring-1 ring-blue-500/20">
// //                 {block.topic}
// //               </span>
// //             )}
// //             {block.fileExtension && (
// //               <span className="rounded-full bg-white/6 px-3 py-1 font-mono text-xs text-neutral-400 ring-1 ring-white/8">
// //                 {block.fileExtension}
// //               </span>
// //             )}
// //             {block.language && (
// //               <span className="rounded-full bg-white/6 px-3 py-1 font-mono text-xs text-neutral-400 ring-1 ring-white/8">
// //                 {block.language}
// //               </span>
// //             )}
// //           </div>
// //           <h1 className="text-3xl font-semibold tracking-tight text-white md:text-[2.25rem] md:leading-tight">
// //             {block.title}
// //           </h1>
// //           {block.shortDescription && (
// //             <p className="mt-3 text-[1.05rem] leading-relaxed text-neutral-500">
// //               {block.shortDescription}
// //             </p>
// //           )}
// //         </div>
// //       </div>

// //       {/* ── Main Content ── */}
// //       <main className="relative z-30 mx-auto max-w-3xl -mt-48 px-6 pb-14">

// //         {/* ── Code Window ── */}
// //         <div className="mb-10 overflow-hidden rounded-2xl shadow-[0_0_0_1px_rgba(255,255,255,0.07),0_24px_48px_rgba(0,0,0,0.6)]">

// //           {/* Window chrome */}
// //           <div className="flex items-center justify-between border-b border-white/[0.06] bg-[#080C14] px-5 py-3.5">
// //             {/* Traffic lights */}
// //             <div className="flex items-center gap-2">
// //               <div className="size-3 rounded-full bg-[#ff5f57] shadow-[0_0_6px_rgba(255,95,87,0.5)]" />
// //               <div className="size-3 rounded-full bg-[#febc2e] shadow-[0_0_6px_rgba(254,188,46,0.5)]" />
// //               <div className="size-3 rounded-full bg-[#28c840] shadow-[0_0_6px_rgba(40,200,64,0.5)]" />
// //             </div>
// //             {/* File info + copy */}
// //             <div className="flex items-center gap-3">
// //               <span className="font-mono text-xs text-neutral-600">
// //                 {block.fileExtension
// //                   ? `${block.abbreviation.toLowerCase()}${block.fileExtension}`
// //                   : block.title.toLowerCase().replace(/\s+/g, "-")}
// //               </span>
// //               <span className="text-xs text-neutral-700">·</span>
// //               <span className="text-xs text-neutral-600">{lineCount} lines</span>
// //               <CopyButton code={block.code} />
// //             </div>
// //           </div>

// //           {/* Shiki highlighted code */}
// //           <div className="overflow-x-auto bg-[#0d1117] no-scrollbar">
// //             <style>{`
// //               .shiki-line {
// //                 line-height: 1.6;
// //                 min-height: 1.6em;
// //               }
// //               .shiki-line::before {
// //                 content: counter(line);
// //                 display: inline-block;
// //                 width: 2rem;
// //                 margin-right: 1.5rem;
// //                 text-align: right;
// //                 color: #374151;
// //                 flex-shrink: 0;
// //                 font-size: 13px;
// //                 user-select: none;
// //               }
// //               .shiki code {
// //                 display: block;
// //                 padding: 1rem 1.25rem;
// //                 font-family: ui-monospace, 'Cascadia Code', 'Fira Code', monospace;
// //                 font-size: 13px;
// //               }
// //               .no-scrollbar::-webkit-scrollbar { display: none; }
// //             `}</style>
// //             <div dangerouslySetInnerHTML={{ __html: highlightedHtml }} />
// //           </div>
// //         </div>

// //         {/* ── Description ── */}
// //         {block.description && (
// //           <div className="mb-10 rounded-2xl border border-white/[0.08] bg-[#080C14] p-8">
// //             <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-400">
// //               About
// //             </p>
// //             <p className="text-[0.97rem] leading-relaxed text-neutral-300">
// //               {block.description}
// //             </p>
// //           </div>
// //         )}

// //         {/* ── Metadata footer ── */}
// //         <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/[0.06] pt-8">
// //           {block.author && <MetaItem label="Author" value={block.author} />}
// //           {date && <MetaItem label="Published" value={date} />}
// //           {block.language && (
// //             <MetaItem label="Language" value={block.language} mono />
// //           )}
// //           {block.topic && <MetaItem label="Topic" value={block.topic} />}
// //           {block.fileExtension && (
// //             <MetaItem label="Extension" value={block.fileExtension} mono />
// //           )}
// //         </div>
// //       </main>
// //     </div>
// //   );
// // }

// // function MetaItem({
// //   label,
// //   value,
// //   mono = false,
// // }: {
// //   label: string;
// //   value: string;
// //   mono?: boolean;
// // }) {
// //   return (
// //     <div className="flex flex-col gap-0.5">
// //       <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-700">
// //         {label}
// //       </span>
// //       <span
// //         className={`text-sm text-neutral-300 ${mono ? "font-mono" : "font-normal"}`}
// //       >
// //         {value}
// //       </span>
// //     </div>
// //   );
// // }
















// // // app/codeblock/[slug]/page.tsx
// // import Link from "next/link";
// // import { notFound } from "next/navigation";
// // import { client } from "@/sanity/lib/client";
// // import { CopyButton } from "@/app/components/copy-button";
// // import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
// // import { codeToHtml } from "shiki";
// // import {
// //   CODEBLOCK_BY_SLUG_QUERY,
// //   ALL_CODEBLOCK_SLUGS_QUERY,
// // } from "@/sanity/lib/queries";

// // interface CodeBlock {
// //   title: string;
// //   slug: { current: string };
// //   abbreviation: string;
// //   shortDescription: string;
// //   description?: string;
// //   code: string;
// //   language: string;
// //   fileExtension?: string;
// //   topic?: string;
// //   author?: string;
// //   publishedAt?: string;
// // }

// // export async function generateStaticParams() {
// //   const slugs: { slug: string }[] = await client.fetch(ALL_CODEBLOCK_SLUGS_QUERY);
// //   return slugs.map((s) => ({ slug: s.slug }));
// // }

// // export const revalidate = 60;

// // const LANG_MAP: Record<string, string> = {
// //   typescript: "typescript",
// //   javascript: "javascript",
// //   tsx: "tsx",
// //   jsx: "jsx",
// //   python: "python",
// //   css: "css",
// //   scss: "scss",
// //   bash: "bash",
// //   sh: "bash",
// //   json: "json",
// //   markdown: "markdown",
// //   md: "markdown",
// //   html: "html",
// //   rust: "rust",
// //   go: "go",
// //   java: "java",
// //   cpp: "cpp",
// //   c: "c",
// //   yaml: "yaml",
// //   toml: "toml",
// //   sql: "sql",
// // };

// // export default async function CodeBlockSlugPage({
// //   params,
// // }: {
// //   params: Promise<{ slug: string }>;
// // }) {
// //   const { slug } = await params;
// //   const block: CodeBlock | null = await client.fetch(
// //     CODEBLOCK_BY_SLUG_QUERY,
// //     { slug },
// //     { next: { revalidate: 60 } }
// //   );
// //   if (!block) notFound();

// //   const date = block.publishedAt
// //     ? new Date(block.publishedAt).toLocaleDateString("en-US", {
// //         year: "numeric",
// //         month: "long",
// //         day: "numeric",
// //       })
// //     : null;

// //   const lineCount = block.code.split("\n").length;
// //   const shikiLang = LANG_MAP[block.language?.toLowerCase()] ?? "text";

// //   const highlightedHtml = await codeToHtml(block.code, {
// //     lang: shikiLang,
// //     theme: "tokyo-night",
// //     transformers: [
// //       {
// //         pre(node) {
// //           node.properties.style = "background: transparent; padding: 0; margin: 0;";
// //         },
// //         code(node) {
// //           node.properties.style = "counter-reset: line;";
// //         },
// //         line(node) {
// //           node.properties.style =
// //             "counter-increment: line; display: flex; align-items: baseline;";
// //           node.properties.class = "shiki-line";
// //         },
// //       },
// //     ],
// //   });

// //   return (
// //     <div className="min-h-screen bg-[#030712] text-white antialiased">

// //       {/* Navbar */}
// //       <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#030712]/95 backdrop-blur-2xl transition-all duration-300">
// //         <div className="mx-auto flex max-w-3xl items-center gap-2 px-6 py-8">
// //           <Link
// //             href="/codeblock"
// //             className="text-sm text-neutral-400 transition-colors hover:text-white"
// //           >
// //             Code Blocks
// //           </Link>
// //           <svg
// //             className="size-3 text-neutral-700"
// //             viewBox="0 0 16 16"
// //             fill="currentColor"
// //           >
// //             <path
// //               d="M6.5 3L11 8l-4.5 5"
// //               stroke="currentColor"
// //               strokeWidth="1.5"
// //               fill="none"
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //             />
// //           </svg>
// //           <span className="text-sm text-white font-medium truncate">
// //             {block.title}
// //           </span>
// //         </div>
// //       </header>

// //       {/* Full Width Half-Sphere Hero - Fixed Left & Right Cutting */}
// //       <div className="relative w-full overflow-hidden" style={{ height: "520px" }}>

// //         {/* Full-bleed Half Sphere Container */}
// //         <div
// //           className="pointer-events-none absolute z-[5] left-0 right-0 mx-auto"
// //           style={{
// //             width: "100%",                    // True full width
// //             maxWidth: "none",                 // Removed 1400px limit
// //             height: "720px",
// //             top: "-80px",                     // Slight top adjustment for better curve
// //             // Wider ellipse to cover full left & right sides
// //             clipPath: "ellipse(135% 62% at 50% 0%)",
// //             // Softer mask to prevent hard edges on sides
// //             maskImage: `
// //               linear-gradient(to bottom, black 0%, black 25%, transparent 88%),
// //               radial-gradient(ellipse 100% 75% at 50% 8%, black 0%, black 40%, transparent 85%)
// //             `,
// //             WebkitMaskImage: `
// //               linear-gradient(to bottom, black 0%, black 25%, transparent 88%),
// //               radial-gradient(ellipse 100% 75% at 50% 8%, black 0%, black 40%, transparent 85%)
// //             `,
// //             maskComposite: "intersect",
// //             WebkitMaskComposite: "intersect",
// //           }}
// //         >
// //           <DottedGlowBackground
// //             opacity={1}
// //             gap={14}
// //             radius={2.0}
// //             colorDarkVar="--color-neutral-500"
// //             glowColorDarkVar="--color-sky-800"
// //             backgroundOpacity={0}
// //             speedMin={0.3}
// //             speedMax={1.6}
// //             speedScale={1}
// //           />
// //         </div>

// //         {/* Bottom fade */}
// //         <div
// //           className="pointer-events-none absolute inset-x-0 bottom-0 z-10"
// //           style={{
// //             height: "35%",
// //             background: "linear-gradient(to bottom, transparent, #030712)",
// //           }}
// //         />

// //         {/* Hero Content */}
// //         <div className="relative z-20 mx-auto max-w-3xl px-6 pt-24">
// //           <div className="mb-4 flex flex-wrap items-center gap-2">
// //             {block.topic && (
// //               <span className="rounded-full bg-blue-500/12 px-3 py-1 text-xs font-medium text-blue-400 ring-1 ring-blue-500/20 backdrop-blur-2xl">
// //                 {block.topic}
// //               </span>
// //             )}
// //             {block.fileExtension && (
// //               <span className="rounded-full bg-white/6 backdrop-blur-2xl px-3 py-1 font-mono text-xs text-neutral-400 ring-1 ring-white/8">
// //                 {block.fileExtension}
// //               </span>
// //             )}
// //             {block.language && (
// //               <span className="rounded-full bg-white/6 backdrop-blur-2xl px-3 py-1 font-mono text-xs text-neutral-400 ring-1 ring-white/8">
// //                 {block.language}
// //               </span>
// //             )}
// //           </div>
// //           <h1 className="text-4xl tracking-tight font-bold text-white md:text-[2.75rem] md:leading-tight">
// //             {block.title}
// //           </h1>
// //           {block.shortDescription && (
// //             <p className="mt-4 text-[1.1rem] leading-relaxed text-neutral-300 max-w-2xl">
// //               {block.shortDescription}
// //             </p>
// //           )}
// //         </div>
// //       </div>

// //       {/* Main Content */}
// //       <main className="relative z-30 mx-auto max-w-3xl -mt-48 px-6 pb-14">

// //         {/* Code Window */}
// //         <div className="mb-10 overflow-hidden rounded-2xl shadow-[0_0_0_1px_rgba(255,255,255,0.07),0_24px_48px_rgba(0,0,0,0.6)]">
// //           {/* Window chrome */}
// //           <div className="flex items-center justify-between border-b border-white/[0.06] bg-[#080C14] px-5 py-3.5">
// //             <div className="flex items-center gap-2">
// //               <div className="size-3 rounded-full bg-[#ff5f57] shadow-[0_0_6px_rgba(255,95,87,0.5)]" />
// //               <div className="size-3 rounded-full bg-[#febc2e] shadow-[0_0_6px_rgba(254,188,46,0.5)]" />
// //               <div className="size-3 rounded-full bg-[#28c840] shadow-[0_0_6px_rgba(40,200,64,0.5)]" />
// //             </div>
// //             <div className="flex items-center gap-3">
// //               <span className="font-mono text-xs text-neutral-600">
// //                 {block.fileExtension
// //                   ? `${block.abbreviation.toLowerCase()}${block.fileExtension}`
// //                   : block.title.toLowerCase().replace(/\s+/g, "-")}
// //               </span>
// //               <span className="text-xs text-neutral-700">·</span>
// //               <span className="text-xs text-neutral-600">{lineCount} lines</span>
// //               <CopyButton code={block.code} />
// //             </div>
// //           </div>

// //           {/* Code */}
// //           <div className="overflow-x-auto bg-[#0d1117] no-scrollbar">
// //             <style>{`
// //               .shiki-line {
// //                 line-height: 1.6;
// //                 min-height: 1.6em;
// //               }
// //               .shiki-line::before {
// //                 content: counter(line);
// //                 display: inline-block;
// //                 width: 2rem;
// //                 margin-right: 1.5rem;
// //                 text-align: right;
// //                 color: #374151;
// //                 flex-shrink: 0;
// //                 font-size: 13px;
// //                 user-select: none;
// //               }
// //               .shiki code {
// //                 display: block;
// //                 padding: 1rem 1.25rem;
// //                 font-family: ui-monospace, 'Cascadia Code', 'Fira Code', monospace;
// //                 font-size: 13px;
// //               }
// //               .no-scrollbar::-webkit-scrollbar { display: none; }
// //             `}</style>
// //             <div dangerouslySetInnerHTML={{ __html: highlightedHtml }} />
// //           </div>
// //         </div>

// //         {/* Description */}
// //         {block.description && (
// //           <div className="mb-10 rounded-2xl border border-white/[0.08] bg-[#080C14] p-8">
// //             <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-400">
// //               About
// //             </p>
// //             <p className="text-[0.97rem] leading-relaxed text-neutral-300">
// //               {block.description}
// //             </p>
// //           </div>
// //         )}

// //         {/* Metadata */}
// //         <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/[0.06] pt-8">
// //           {block.author && <MetaItem label="Author" value={block.author} />}
// //           {date && <MetaItem label="Published" value={date} />}
// //           {block.language && (
// //             <MetaItem label="Language" value={block.language} mono />
// //           )}
// //           {block.topic && <MetaItem label="Topic" value={block.topic} />}
// //           {block.fileExtension && (
// //             <MetaItem label="Extension" value={block.fileExtension} mono />
// //           )}
// //         </div>
// //       </main>
// //     </div>
// //   );
// // }

// // function MetaItem({
// //   label,
// //   value,
// //   mono = false,
// // }: {
// //   label: string;
// //   value: string;
// //   mono?: boolean;
// // }) {
// //   return (
// //     <div className="flex flex-col gap-0.5">
// //       <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-700">
// //         {label}
// //       </span>
// //       <span
// //         className={`text-sm text-neutral-300 ${mono ? "font-mono" : "font-normal"}`}
// //       >
// //         {value}
// //       </span>
// //     </div>
// //   );
// // }





// // app/codeblock/[slug]/page.tsx
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import { client } from "@/sanity/lib/client";
// import { CopyButton } from "@/app/components/copy-button";
// import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
// import { codeToHtml } from "shiki";
// import {
//   CODEBLOCK_BY_SLUG_QUERY,
//   ALL_CODEBLOCK_SLUGS_QUERY,
// } from "@/sanity/lib/queries";

// interface CodeBlock {
//   title: string;
//   slug: { current: string };
//   abbreviation: string;
//   shortDescription: string;
//   description?: string;
//   code: string;
//   language: string;
//   fileExtension?: string;
//   topic?: string;
//   author?: string;
//   publishedAt?: string;
// }

// export async function generateStaticParams() {
//   const slugs: { slug: string }[] = await client.fetch(ALL_CODEBLOCK_SLUGS_QUERY);
//   return slugs.map((s) => ({ slug: s.slug }));
// }

// export const revalidate = 60;

// const LANG_MAP: Record<string, string> = {
//   typescript: "typescript",
//   javascript: "javascript",
//   tsx: "tsx",
//   jsx: "jsx",
//   python: "python",
//   css: "css",
//   scss: "scss",
//   bash: "bash",
//   sh: "bash",
//   json: "json",
//   markdown: "markdown",
//   md: "markdown",
//   html: "html",
//   rust: "rust",
//   go: "go",
//   java: "java",
//   cpp: "cpp",
//   c: "c",
//   yaml: "yaml",
//   toml: "toml",
//   sql: "sql",
// };

// export default async function CodeBlockSlugPage({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;
//   const block: CodeBlock | null = await client.fetch(
//     CODEBLOCK_BY_SLUG_QUERY,
//     { slug },
//     { next: { revalidate: 60 } }
//   );
//   if (!block) notFound();

//   const date = block.publishedAt
//     ? new Date(block.publishedAt).toLocaleDateString("en-US", {
//         year: "numeric",
//         month: "long",
//         day: "numeric",
//       })
//     : null;

//   const lineCount = block.code.split("\n").length;
//   const shikiLang = LANG_MAP[block.language?.toLowerCase()] ?? "text";

//   const highlightedHtml = await codeToHtml(block.code, {
//     lang: shikiLang,
//     theme: "tokyo-night",
//     transformers: [
//       {
//         pre(node) {
//           node.properties.style = "background: transparent; padding: 0; margin: 0;";
//         },
//         code(node) {
//           node.properties.style = "counter-reset: line;";
//         },
//         line(node) {
//           node.properties.style =
//             "counter-increment: line; display: flex; align-items: baseline;";
//           node.properties.class = "shiki-line";
//         },
//       },
//     ],
//   });

//   return (
//     <div className="min-h-screen bg-[#030712] text-white antialiased">

//       {/* Navbar */}
//       <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#030712]/95 backdrop-blur-2xl transition-all duration-300">
//         <div className="mx-auto flex max-w-3xl items-center gap-2 px-6 py-8">
//           <Link
//             href="/codeblock"
//             className="text-sm text-neutral-400 transition-colors hover:text-white"
//           >
//             Code Blocks
//           </Link>
//           <svg
//             className="size-3 text-neutral-700"
//             viewBox="0 0 16 16"
//             fill="currentColor"
//           >
//             <path
//               d="M6.5 3L11 8l-4.5 5"
//               stroke="currentColor"
//               strokeWidth="1.5"
//               fill="none"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//           <span className="text-sm text-white font-medium truncate">
//             {block.title}
//           </span>
//         </div>
//       </header>

//       {/* Full Width Half-Sphere Hero - Fixed Left & Right Cutting */}
//       <div className="relative w-full overflow-hidden" style={{ height: "520px" }}>

//         {/* Full-bleed Half Sphere Container */}
//         <div
//           className="pointer-events-none absolute z-[5] left-0 right-0 mx-auto"
//           style={{
//             width: "100%",                    // True full width
//             maxWidth: "none",                 // Removed 1400px limit
//             height: "720px",
//             top: "-80px",                     // Slight top adjustment for better curve
//             // Wider ellipse to cover full left & right sides
//             clipPath: "ellipse(135% 62% at 50% 0%)",
//             // Softer mask to prevent hard edges on sides
//             maskImage: `
//               linear-gradient(to bottom, black 0%, black 25%, transparent 88%),
//               radial-gradient(ellipse 100% 75% at 50% 8%, black 0%, black 40%, transparent 85%)
//             `,
//             WebkitMaskImage: `
//               linear-gradient(to bottom, black 0%, black 25%, transparent 88%),
//               radial-gradient(ellipse 100% 75% at 50% 8%, black 0%, black 40%, transparent 85%)
//             `,
//             maskComposite: "intersect",
//             WebkitMaskComposite: "intersect",
//           }}
//         >
//           <DottedGlowBackground
//             opacity={1}
//             gap={14}
//             radius={2.0}
//             colorDarkVar="--color-neutral-500"
//             glowColorDarkVar="--color-sky-800"
//             backgroundOpacity={0}
//             speedMin={0.3}
//             speedMax={1.6}
//             speedScale={1}
//           />
//         </div>

//         {/* Bottom fade */}
//         <div
//           className="pointer-events-none absolute inset-x-0 bottom-0 z-10"
//           style={{
//             height: "35%",
//             background: "linear-gradient(to bottom, transparent, #030712)",
//           }}
//         />

//         {/* Hero Content */}
//         <div className="relative z-20 mx-auto max-w-3xl px-6 pt-24">
//           <div className="mb-4 flex flex-wrap items-center gap-2">
//             {block.topic && (
//               <span className="rounded-full bg-blue-500/12 px-3 py-1 text-xs font-medium text-blue-400 ring-1 ring-blue-500/20 backdrop-blur-2xl">
//                 {block.topic}
//               </span>
//             )}
//             {block.fileExtension && (
//               <span className="rounded-full bg-white/6 backdrop-blur-2xl px-3 py-1 font-mono text-xs text-neutral-400 ring-1 ring-white/8">
//                 {block.fileExtension}
//               </span>
//             )}
//             {block.language && (
//               <span className="rounded-full bg-white/6 backdrop-blur-2xl px-3 py-1 font-mono text-xs text-neutral-400 ring-1 ring-white/8">
//                 {block.language}
//               </span>
//             )}
//           </div>
//           <h1 className="text-4xl tracking-tight font-bold text-white md:text-[2.75rem] md:leading-tight">
//             {block.title}
//           </h1>
//           {block.shortDescription && (
//             <p className="mt-4 text-[1.1rem] leading-relaxed text-neutral-300 max-w-2xl">
//               {block.shortDescription}
//             </p>
//           )}
//         </div>
//       </div>

//       {/* Main Content */}
//       <main className="relative z-30 mx-auto max-w-3xl -mt-48 px-6 pb-14">

//         {/* Code Window */}
//         <div className="mb-10 overflow-hidden rounded-2xl shadow-[0_0_0_1px_rgba(255,255,255,0.07),0_24px_48px_rgba(0,0,0,0.6)]">
//           {/* Window chrome */}
//           <div className="flex items-center justify-between border-b border-white/[0.06] bg-[#080C14] px-5 py-3.5">
//             <div className="flex items-center gap-2">
//               <div className="size-3 rounded-full bg-[#ff5f57] shadow-[0_0_6px_rgba(255,95,87,0.5)]" />
//               <div className="size-3 rounded-full bg-[#febc2e] shadow-[0_0_6px_rgba(254,188,46,0.5)]" />
//               <div className="size-3 rounded-full bg-[#28c840] shadow-[0_0_6px_rgba(40,200,64,0.5)]" />
//             </div>
//             <div className="flex items-center gap-3">
//               <span className="font-mono text-xs text-neutral-600">
//                 {block.fileExtension
//                   ? `${block.abbreviation.toLowerCase()}${block.fileExtension}`
//                   : block.title.toLowerCase().replace(/\s+/g, "-")}
//               </span>
//               <span className="text-xs text-neutral-700">·</span>
//               <span className="text-xs text-neutral-600">{lineCount} lines</span>
//               <CopyButton code={block.code} />
//             </div>
//           </div>

//           {/* Code */}
//           <div className="overflow-x-auto bg-[#0d1117] no-scrollbar">
//             <style>{`
//               .shiki-line {
//                 line-height: 1.6;
//                 min-height: 1.6em;
//               }
//               .shiki-line::before {
//                 content: counter(line);
//                 display: inline-block;
//                 width: 2rem;
//                 margin-right: 1.5rem;
//                 text-align: right;
//                 color: #374151;
//                 flex-shrink: 0;
//                 font-size: 13px;
//                 user-select: none;
//               }
//               .shiki code {
//                 display: block;
//                 padding: 1rem 1.25rem;
//                 font-family: ui-monospace, 'Cascadia Code', 'Fira Code', monospace;
//                 font-size: 13px;
//               }
//               .no-scrollbar::-webkit-scrollbar { display: none; }
//             `}</style>
//             <div dangerouslySetInnerHTML={{ __html: highlightedHtml }} />
//           </div>
//         </div>

//         {/* Description */}
//         {block.description && (
//           <div className="mb-10 rounded-2xl border border-white/[0.08] bg-[#080C14] p-8">
//             <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-400">
//               About
//             </p>
//             <p className="text-[0.97rem] leading-relaxed text-neutral-300">
//               {block.description}
//             </p>
//           </div>
//         )}

//         {/* Metadata */}
//         <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/[0.06] pt-8">
//           {block.author && <MetaItem label="Author" value={block.author} />}
//           {date && <MetaItem label="Published" value={date} />}
//           {block.language && (
//             <MetaItem label="Language" value={block.language} mono />
//           )}
//           {block.topic && <MetaItem label="Topic" value={block.topic} />}
//           {block.fileExtension && (
//             <MetaItem label="Extension" value={block.fileExtension} mono />
//           )}
//         </div>
//       </main>
//     </div>
//   );
// }

// function MetaItem({
//   label,
//   value,
//   mono = false,
// }: {
//   label: string;
//   value: string;
//   mono?: boolean;
// }) {
//   return (
//     <div className="flex flex-col gap-0.5">
//       <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-700">
//         {label}
//       </span>
//       <span
//         className={`text-sm text-neutral-300 ${mono ? "font-mono" : "font-normal"}`}
//       >
//         {value}
//       </span>
//     </div>
//   );
// }

// // Added Loading State Below (no other changes to your code)
// function LoadingState() {
//   return (
//     <main className="min-h-screen bg-[#030712] text-white font-sans flex items-center justify-center">
//       <div className="flex flex-col items-center gap-3">
//         <div className="w-5 h-5 rounded-full border-2 border-gray-700 border-t-gray-400 animate-spin" />
//         {/* <p className="text-gray-600 text-xs">Loading...</p> */}
//       </div>
//     </main>
//   )
// }






// app/codeblock/[slug]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { CopyButton } from "@/app/components/copy-button";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { codeToHtml } from "shiki";
import {
  CODEBLOCK_BY_SLUG_QUERY,
  ALL_CODEBLOCK_SLUGS_QUERY,
} from "@/sanity/lib/queries";

interface CodeBlock {
  title: string;
  slug: { current: string };
  abbreviation: string;
  shortDescription: string;
  description?: string;
  code: string;
  language: string;
  fileExtension?: string;
  topic?: string;
  author?: string;
  publishedAt?: string;
}

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await client.fetch(ALL_CODEBLOCK_SLUGS_QUERY);
  return slugs.map((s) => ({ slug: s.slug }));
}

export const revalidate = 60;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const block: CodeBlock | null = await client.fetch(
    CODEBLOCK_BY_SLUG_QUERY,
    { slug },
    { next: { revalidate: 60 } }
  );

  if (!block) return { title: "Code Block Not Found" };

  return {
    title: block.title,
    description: block.shortDescription ?? block.description ?? "A code block.",
    openGraph: {
      title: block.title,
      description: block.shortDescription ?? block.description ?? "",
      type: "article",
    },
    twitter: {
      card: "summary",
      title: block.title,
      description: block.shortDescription ?? block.description ?? "",
    },
  };
}

const LANG_MAP: Record<string, string> = {
  typescript: "typescript",
  javascript: "javascript",
  tsx: "tsx",
  jsx: "jsx",
  python: "python",
  css: "css",
  scss: "scss",
  bash: "bash",
  sh: "bash",
  json: "json",
  markdown: "markdown",
  md: "markdown",
  html: "html",
  rust: "rust",
  go: "go",
  java: "java",
  cpp: "cpp",
  c: "c",
  yaml: "yaml",
  toml: "toml",
  sql: "sql",
};

export default async function CodeBlockSlugPage({ params }: Props) {
  const { slug } = await params;
  const block: CodeBlock | null = await client.fetch(
    CODEBLOCK_BY_SLUG_QUERY,
    { slug },
    { next: { revalidate: 60 } }
  );
  if (!block) notFound();

  const date = block.publishedAt
    ? new Date(block.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  const lineCount = block.code.split("\n").length;
  const shikiLang = LANG_MAP[block.language?.toLowerCase()] ?? "text";

  const highlightedHtml = await codeToHtml(block.code, {
    lang: shikiLang,
    theme: "tokyo-night",
    transformers: [
      {
        pre(node) {
          node.properties.style = "background: transparent; padding: 0; margin: 0;";
        },
        code(node) {
          node.properties.style = "counter-reset: line;";
        },
        line(node) {
          node.properties.style =
            "counter-increment: line; display: flex; align-items: baseline;";
          node.properties.class = "shiki-line";
        },
      },
    ],
  });

  return (
    <div className="min-h-screen bg-[#030712] text-white antialiased">

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#030712]/95 backdrop-blur-2xl transition-all duration-300">
        <div className="mx-auto flex max-w-3xl items-center gap-2 px-6 py-8">
          <Link
            href="/codeblock"
            className="text-sm text-neutral-400 transition-colors hover:text-white"
          >
            Code Blocks
          </Link>
          <svg className="size-3 text-neutral-700" viewBox="0 0 16 16" fill="currentColor">
            <path d="M6.5 3L11 8l-4.5 5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-sm text-white font-medium truncate">{block.title}</span>
        </div>
      </header>

      {/* Full Width Half-Sphere Hero */}
      <div className="relative w-full overflow-hidden" style={{ height: "520px" }}>
        <div
          className="pointer-events-none absolute z-[5] left-0 right-0 mx-auto"
          style={{
            width: "100%",
            maxWidth: "none",
            height: "720px",
            top: "-80px",
            clipPath: "ellipse(135% 62% at 50% 0%)",
            maskImage: `
              linear-gradient(to bottom, black 0%, black 25%, transparent 88%),
              radial-gradient(ellipse 100% 75% at 50% 8%, black 0%, black 40%, transparent 85%)
            `,
            WebkitMaskImage: `
              linear-gradient(to bottom, black 0%, black 25%, transparent 88%),
              radial-gradient(ellipse 100% 75% at 50% 8%, black 0%, black 40%, transparent 85%)
            `,
            maskComposite: "intersect",
            WebkitMaskComposite: "intersect",
          }}
        >
          <DottedGlowBackground
            opacity={1}
            gap={14}
            radius={2.0}
            colorDarkVar="--color-neutral-500"
            glowColorDarkVar="--color-sky-800"
            backgroundOpacity={0}
            speedMin={0.3}
            speedMax={1.6}
            speedScale={1}
          />
        </div>

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10"
          style={{
            height: "35%",
            background: "linear-gradient(to bottom, transparent, #030712)",
          }}
        />

        <div className="relative z-20 mx-auto max-w-3xl px-6 pt-24">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {block.topic && (
              <span className="rounded-full bg-blue-500/12 px-3 py-1 text-xs font-medium text-blue-400 ring-1 ring-blue-500/20 backdrop-blur-2xl">
                {block.topic}
              </span>
            )}
            {block.fileExtension && (
              <span className="rounded-full bg-white/6 backdrop-blur-2xl px-3 py-1 font-mono text-xs text-neutral-400 ring-1 ring-white/8">
                {block.fileExtension}
              </span>
            )}
            {block.language && (
              <span className="rounded-full bg-white/6 backdrop-blur-2xl px-3 py-1 font-mono text-xs text-neutral-400 ring-1 ring-white/8">
                {block.language}
              </span>
            )}
          </div>
          <h1 className="text-4xl tracking-tight font-bold text-white md:text-[2.75rem] md:leading-tight">
            {block.title}
          </h1>
          {block.shortDescription && (
            <p className="mt-4 text-[1.1rem] leading-relaxed text-neutral-300 max-w-2xl">
              {block.shortDescription}
            </p>
          )}
        </div>
      </div>

      {/* Main Content */}
      <main className="relative z-30 mx-auto max-w-3xl -mt-48 px-6 pb-14">

        {/* Code Window */}
        <div className="mb-10 overflow-hidden rounded-2xl shadow-[0_0_0_1px_rgba(255,255,255,0.07),0_24px_48px_rgba(0,0,0,0.6)]">
          <div className="flex items-center justify-between border-b border-white/[0.06] bg-[#080C14] px-5 py-3.5">
            <div className="flex items-center gap-2">
              <div className="size-3 rounded-full bg-[#ff5f57] shadow-[0_0_6px_rgba(255,95,87,0.5)]" />
              <div className="size-3 rounded-full bg-[#febc2e] shadow-[0_0_6px_rgba(254,188,46,0.5)]" />
              <div className="size-3 rounded-full bg-[#28c840] shadow-[0_0_6px_rgba(40,200,64,0.5)]" />
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-neutral-600">
                {block.fileExtension
                  ? `${block.abbreviation.toLowerCase()}${block.fileExtension}`
                  : block.title.toLowerCase().replace(/\s+/g, "-")}
              </span>
              <span className="text-xs text-neutral-700">·</span>
              <span className="text-xs text-neutral-600">{lineCount} lines</span>
              <CopyButton code={block.code} />
            </div>
          </div>

          <div className="overflow-x-auto bg-[#0d1117] no-scrollbar">
            <style>{`
              .shiki-line { line-height: 1.6; min-height: 1.6em; }
              .shiki-line::before {
                content: counter(line);
                display: inline-block;
                width: 2rem;
                margin-right: 1.5rem;
                text-align: right;
                color: #374151;
                flex-shrink: 0;
                font-size: 13px;
                user-select: none;
              }
              .shiki code {
                display: block;
                padding: 1rem 1.25rem;
                font-family: ui-monospace, 'Cascadia Code', 'Fira Code', monospace;
                font-size: 13px;
              }
              .no-scrollbar::-webkit-scrollbar { display: none; }
            `}</style>
            <div dangerouslySetInnerHTML={{ __html: highlightedHtml }} />
          </div>
        </div>

        {/* Description */}
        {block.description && (
          <div className="mb-10 rounded-2xl border border-white/[0.08] bg-[#080C14] p-8">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-400">
              About
            </p>
            <p className="text-[0.97rem] leading-relaxed text-neutral-300">
              {block.description}
            </p>
          </div>
        )}

        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/[0.06] pt-8">
          {block.author && <MetaItem label="Author" value={block.author} />}
          {date && <MetaItem label="Published" value={date} />}
          {block.language && <MetaItem label="Language" value={block.language} mono />}
          {block.topic && <MetaItem label="Topic" value={block.topic} />}
          {block.fileExtension && <MetaItem label="Extension" value={block.fileExtension} mono />}
        </div>
      </main>
    </div>
  );
}

function MetaItem({
  label,
  value,
  mono = false,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-700">
        {label}
      </span>
      <span className={`text-sm text-neutral-300 ${mono ? "font-mono" : "font-normal"}`}>
        {value}
      </span>
    </div>
  );
}
