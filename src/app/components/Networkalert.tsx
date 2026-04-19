"use client"

import { useEffect, useState } from "react"
import { WifiOffIcon, WifiIcon } from "lucide-react"

export function NetworkAlert() {
  const [isOnline, setIsOnline] = useState(true)
  const [showRestored, setShowRestored] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsOnline(navigator.onLine)

    let dismissTimer: NodeJS.Timeout

    const handleOnline = () => {
      setIsOnline(true)
      setShowRestored(true)
      dismissTimer = setTimeout(() => setShowRestored(false), 3000)
    }

    const handleOffline = () => {
      setIsOnline(false)
      setShowRestored(false)
    }

    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
      clearTimeout(dismissTimer)
    }
  }, [])

  if (!mounted || (isOnline && !showRestored)) return null

  const offline = !isOnline

  return (
    <>
      {offline && (
        <div className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm pointer-events-auto" />
      )}

      <div className="fixed inset-x-0 top-6 z-[9999] flex justify-center px-4 pointer-events-none">
        <div
          className="pointer-events-auto flex items-center gap-3 px-5 py-3 rounded-full shadow-xl"
          style={{
            background: offline ? "rgba(20,5,5,0.95)" : "rgba(5,20,10,0.95)",
            border: offline ? "1px solid rgba(239,68,68,0.3)" : "1px solid rgba(34,197,94,0.3)",
            backdropFilter: "blur(12px)",
            animation: "popIn 0.35s cubic-bezier(0.34,1.56,0.64,1) forwards",
          }}
        >
          {/* Dot */}
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              flexShrink: 0,
              background: offline ? "rgb(239,68,68)" : "rgb(34,197,94)",
              boxShadow: offline ? "0 0 8px rgba(239,68,68,0.8)" : "0 0 8px rgba(34,197,94,0.8)",
              animation: offline ? "pulse 1.2s ease-in-out infinite" : "none",
              display: "inline-block",
            }}
          />

          {/* Icon */}
          {offline
            ? <WifiOffIcon style={{ width: 15, height: 15, color: "rgb(252,165,165)", flexShrink: 0 }} />
            : <WifiIcon style={{ width: 15, height: 15, color: "rgb(134,239,172)", flexShrink: 0 }} />
          }

          {/* Text */}
          <span
            style={{
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "-0.01em",
              color: offline ? "rgb(254,226,226)" : "rgb(220,252,231)",
              whiteSpace: "nowrap",
            }}
          >
            {offline ? "No internet connection" : "Connection restored"}
          </span>

          {/* Green dismiss bar */}
          {!offline && showRestored && (
            <div style={{ width: 60, height: 3, borderRadius: 999, background: "rgba(34,197,94,0.15)", overflow: "hidden", flexShrink: 0 }}>
              <div style={{
                height: "100%",
                borderRadius: 999,
                background: "rgb(34,197,94)",
                animation: "shrink 3s linear forwards",
              }} />
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes popIn {
          from { opacity: 0; transform: translateY(-12px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.35; }
        }
        @keyframes shrink {
          from { width: 100%; }
          to   { width: 0%; }
        }
      `}</style>
    </>
  )
}
