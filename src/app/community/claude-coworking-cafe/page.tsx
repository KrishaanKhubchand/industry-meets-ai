"use client";

import { useState, useEffect } from "react";

export default function ClaudeCoworkingCafe() {
  const [debugOpen, setDebugOpen] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Header - simplified */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-bg/90 backdrop-blur-sm border-b border-border">
        <div className="max-w-[600px] mx-auto px-5 md:px-6 py-4 flex items-center justify-between">
          <a href="/" className="font-[family-name:var(--font-newsreader)] text-lg font-medium hover:text-accent transition-colors duration-200">
            Industry Meets AI
          </a>
          <button
            data-tally-open="ODXYE7"
            data-tally-layout="modal"
            data-tally-width="500"
            data-tally-emoji-animation="none"
            className="text-[14px] font-medium text-white bg-text px-3.5 py-1.5 rounded-lg hover:bg-[#1a1a1a] transition-colors duration-200"
          >
            Join
          </button>
        </div>
      </header>

      <div className="max-w-[600px] mx-auto px-5 pt-28 pb-16 md:px-6 md:pt-36 md:pb-24">
        
        {/* Terminal Graphic */}
        <div className="mb-10 rounded-xl overflow-hidden border border-border shadow-lg">
          {/* Terminal Header */}
          <div className="bg-[#1a1a1a] px-4 py-3 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27ca40]"></div>
            </div>
            <span className="text-[12px] text-[#888] font-mono ml-2">claude-coworking-cafe</span>
          </div>
          {/* Terminal Body */}
          <div className="bg-[#0d0d0d] p-5 font-mono text-[13px] leading-[1.8] text-[#e0e0e0]">
            <div className="text-[#888] mb-3">// a quiet corner of the internet</div>
            <div>
              <span className="text-[#f9a8d4]">@maya</span>
              <span className="text-[#888]">:</span>
              <span className="ml-2">just asked claude to refactor my entire auth flow</span>
            </div>
            <div>
              <span className="text-[#888] ml-[4.5rem]">...fingers crossed 🤞</span>
            </div>
            <div className="mt-3">
              <span className="text-[#a5f3fc]">@sam</span>
              <span className="text-[#888]">:</span>
              <span className="ml-2">47 seconds in. the anticipation is real.</span>
            </div>
            <div className="mt-3">
              <span className="text-[#c4b5fd]">@krish</span>
              <span className="text-[#888]">:</span>
              <span className="ml-2">dropped a link in #random-finds — this mcp server is wild</span>
            </div>
            <div className="mt-4 flex items-center">
              <span className="text-[#4ade80]">you</span>
              <span className="text-[#888]">:</span>
              <span className="ml-2 text-[#888]">|</span>
              <span 
                className={`ml-0.5 w-2 h-4 bg-[#4ade80] inline-block ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{ transition: 'opacity 0.1s' }}
              ></span>
            </div>
          </div>
        </div>

        {/* Hero */}
        <h1 className="font-[family-name:var(--font-newsreader)] text-3xl md:text-4xl font-medium tracking-tight leading-[1.2] mb-4 text-center">
          Claude Co-Working Cafe ☕
        </h1>
        <p className="text-lg text-text-muted text-center mb-10 max-w-[480px] mx-auto">
          A group chat for the moments between prompts. Share thoughts, drop links, wait for AI together.
        </p>

        {/* What It Is */}
        <div className="bg-card-bg border border-border rounded-xl p-6 mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-text-muted mb-4">
            What&apos;s this?
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-3 text-[15px]">
              <span className="text-lg">💬</span>
              <span>A group chat for people actively using Claude Code</span>
            </div>
            <div className="flex items-start gap-3 text-[15px]">
              <span className="text-lg">✨</span>
              <span>Share random reflections, links, half-baked ideas</span>
            </div>
            <div className="flex items-start gap-3 text-[15px]">
              <span className="text-lg">🎧</span>
              <span>No agenda, no pressure — just vibes</span>
            </div>
            <div className="flex items-start gap-3 text-[15px]">
              <span className="text-lg">⏳</span>
              <span>Active when you&apos;re coding, quiet when you&apos;re not</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            data-tally-open="ODXYE7"
            data-tally-layout="modal"
            data-tally-width="500"
            data-tally-emoji-animation="none"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-[15px] font-medium bg-text text-white hover:bg-[#1a1a1a] hover:-translate-y-0.5 transition-all duration-200"
          >
            Request Access
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <p className="text-[13px] text-text-muted mt-3">
            Free to join. We just like to know who&apos;s hanging out.
          </p>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-border text-center">
          <a href="/" className="text-[13px] text-text-muted hover:text-text transition-colors duration-200">
            ← Back to Industry Meets AI
          </a>
        </footer>

        {/* Debug Panel - only visible in development */}
        {process.env.NODE_ENV === 'development' && (
          <div className="fixed bottom-4 right-4 z-50">
            <button
              onClick={() => setDebugOpen(!debugOpen)}
              className="w-10 h-10 bg-text text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#1a1a1a] transition-all duration-200 text-sm font-mono"
              title="Debug Panel"
            >
              {debugOpen ? "×" : "⚙"}
            </button>
            {debugOpen && (
              <div className="absolute bottom-12 right-0 w-64 bg-card-bg border border-border rounded-xl shadow-xl p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-text-muted mb-3">
                  Debug Panel
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href="/"
                    className="text-[13px] px-3 py-2 bg-bg rounded-lg hover:bg-border transition-colors duration-200"
                  >
                    → Home Page
                  </a>
                  <a
                    href="/podcast"
                    className="text-[13px] px-3 py-2 bg-bg rounded-lg hover:bg-border transition-colors duration-200"
                  >
                    → Podcast
                  </a>
                  <a
                    href="/events/cfos-meet-ai-demo-day-2026"
                    className="text-[13px] px-3 py-2 bg-bg rounded-lg hover:bg-border transition-colors duration-200"
                  >
                    → CFO Demo Day 2026
                  </a>
                  <a
                    href="/events/sales-meets-ai-demo-day-2026"
                    className="text-[13px] px-3 py-2 bg-bg rounded-lg hover:bg-border transition-colors duration-200"
                  >
                    → Sales Demo Day 2026
                  </a>
                  <a
                    href="/events/ai-for-general-counsel-demo-day-2026"
                    className="text-[13px] px-3 py-2 bg-bg rounded-lg hover:bg-border transition-colors duration-200"
                  >
                    → GC Demo Day 2026
                  </a>
                  <a
                    href="/events/real-estate-meets-ai-demo-day-2026"
                    className="text-[13px] px-3 py-2 bg-bg rounded-lg hover:bg-border transition-colors duration-200"
                  >
                    → Real Estate Demo Day 2026
                  </a>
                  <a
                    href="/events/real-estate-meets-ai-summit-2026"
                    className="text-[13px] px-3 py-2 bg-bg rounded-lg hover:bg-border transition-colors duration-200"
                  >
                    → Real Estate Summit 2026
                  </a>
                  <a
                    href="/community/cfo-technology-council"
                    className="text-[13px] px-3 py-2 bg-bg rounded-lg hover:bg-border transition-colors duration-200"
                  >
                    → CFO Technology Council
                  </a>
                  <a
                    href="/community/claude-coworking-cafe"
                    className="text-[13px] px-3 py-2 bg-accent-soft text-accent rounded-lg"
                  >
                    → Claude Co-Working Cafe (current)
                  </a>
                  <div className="h-px bg-border my-2"></div>
                  <div className="text-[11px] text-text-muted font-mono">
                    Route: /community/claude-coworking-cafe
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
