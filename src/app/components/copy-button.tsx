"use client";

import { useState } from "react";

export function CopyButton({ code }: { code: string }) {
  const [state, setState] = useState<"idle" | "copied">("idle");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setState("copied");
      setTimeout(() => setState("idle"), 2000);
    } catch {
      /* silent fail */
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={[
        "flex items-center gap-1.5 rounded-lg px-3 py-1.5",
        "text-xs font-medium transition-all duration-200",
        state === "copied"
          ? "bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/20"
          : "bg-white/6 text-neutral-400 ring-1 ring-white/8 hover:bg-white/10 hover:text-white",
      ].join(" ")}
    >
      {state === "copied" ? (
        <>
          <svg className="size-3" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8l3.5 3.5L13 4.5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Copied
        </>
      ) : (
        <>
          <svg className="size-3" viewBox="0 0 16 16" fill="none">
            <rect
              x="5" y="5" width="8" height="8" rx="1.5"
              stroke="currentColor" strokeWidth="1.5"
            />
            <path
              d="M11 5V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1"
              stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
            />
          </svg>
          Copy
        </>
      )}
    </button>
  );
}
