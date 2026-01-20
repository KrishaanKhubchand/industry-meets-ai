"use client";

import { useState } from "react";

export default function Podcast() {
  const [debugOpen, setDebugOpen] = useState(false);

  const episodes = [
    {
      number: 12,
      title: "How We Cut Contract Review Time by 90%",
      guest: "Sarah Chen",
      guestTitle: "General Counsel, Meridian Health",
      duration: "42 min",
      date: "Jan 10, 2026",
      description: "Sarah shares how her legal team went from drowning in NDAs to processing contracts in minutes using AI-powered review tools.",
    },
    {
      number: 11,
      title: "The CFO's Guide to AI-Powered Forecasting",
      guest: "Marcus Williams",
      guestTitle: "CFO, Altitude Ventures",
      duration: "38 min",
      date: "Jan 3, 2026",
      description: "Marcus breaks down how his finance team now builds 12-month forecasts in hours instead of weeks.",
    },
    {
      number: 10,
      title: "Building an AI-First Sales Org",
      guest: "Rachel Torres",
      guestTitle: "CRO, ScaleUp Technologies",
      duration: "45 min",
      date: "Dec 20, 2025",
      description: "Rachel reveals how her team 3x'd pipeline with AI SDRs while maintaining the human touch that closes deals.",
    },
    {
      number: 9,
      title: "When AI Meets Compliance: A Risk Officer's Perspective",
      guest: "David Park",
      guestTitle: "Chief Risk Officer, First Capital Bank",
      duration: "36 min",
      date: "Dec 13, 2025",
      description: "David discusses the balance between AI efficiency and regulatory requirements in financial services.",
    },
    {
      number: 8,
      title: "The 5-Day Close: A Controller's Journey",
      guest: "Amanda Foster",
      guestTitle: "VP of Accounting, Nexus Group",
      duration: "41 min",
      date: "Dec 6, 2025",
      description: "Amanda shares the step-by-step process her team used to cut their monthly close from 15 days to 5.",
    },
    {
      number: 7,
      title: "AI in Legal Ops: Beyond the Hype",
      guest: "James Mitchell",
      guestTitle: "Head of Legal Operations, GlobalTech Inc",
      duration: "39 min",
      date: "Nov 29, 2025",
      description: "James separates AI fact from fiction and shares which tools actually delivered ROI for his legal department.",
    },
  ];

  const latestEpisode = episodes[0];

  const valueProps = [
    { title: "Real Implementation Stories", desc: "Hear what actually works from leaders who've done it." },
    { title: "Vendor-Free Zone", desc: "No sponsored content, no pitches—just honest insights." },
    { title: "Cross-Industry Insights", desc: "Learn from finance, legal, sales, and beyond." },
    { title: "Actionable Takeaways", desc: "Every episode ends with what you can do Monday." },
  ];

  const platforms = [
    { name: "Spotify", icon: "spotify", url: "#" },
    { name: "Apple Podcasts", icon: "apple", url: "#" },
    { name: "YouTube", icon: "youtube", url: "#" },
    { name: "RSS Feed", icon: "rss", url: "#" },
  ];

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-bg/90 backdrop-blur-sm border-b border-border">
        <div className="max-w-[720px] mx-auto px-5 md:px-6 py-4 flex items-center justify-between">
          <a href="/" className="font-[family-name:var(--font-newsreader)] text-lg font-medium hover:text-accent transition-colors duration-200">
            Industry Meets AI
          </a>
          <nav className="flex items-center gap-5">
            <a href="/" className="text-[14px] text-text-muted hover:text-text transition-colors duration-200">
              Events
            </a>
            <a 
              href="#subscribe" 
              className="text-[14px] font-medium text-white bg-text px-3.5 py-1.5 rounded-lg hover:bg-[#1a1a1a] transition-colors duration-200"
            >
              Subscribe
            </a>
          </nav>
        </div>
      </header>

      <div className="max-w-[720px] mx-auto px-5 pt-24 pb-12 md:px-6 md:pt-28 md:pb-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 bg-accent-soft text-accent text-[13px] font-medium px-3 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse-dot"></span>
          New Episodes Weekly
        </div>

        {/* Hero */}
        <h1 className="font-[family-name:var(--font-newsreader)] text-4xl md:text-5xl font-medium tracking-tight leading-[1.15] mb-5">
          Industry Meets AI: The Podcast
        </h1>
        <p className="font-[family-name:var(--font-newsreader)] text-xl md:text-2xl text-text-muted tracking-tight leading-[1.3] mb-8">
          Conversations with leaders who are actually using AI to transform their industries. No hype, just honest insights.
        </p>

        {/* Platform Buttons */}
        <div className="flex flex-wrap gap-3 mb-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-[14px] font-medium bg-[#1DB954] text-white hover:bg-[#1aa34a] transition-all duration-200"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
            Spotify
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-[14px] font-medium bg-[#9933CC] text-white hover:bg-[#8829b8] transition-all duration-200"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5.34 0A5.328 5.328 0 000 5.34v13.32A5.328 5.328 0 005.34 24h13.32A5.328 5.328 0 0024 18.66V5.34A5.328 5.328 0 0018.66 0H5.34zm6.525 3.6a8.4 8.4 0 018.4 8.4 8.4 8.4 0 01-8.4 8.4 8.4 8.4 0 01-8.4-8.4 8.4 8.4 0 018.4-8.4zm0 1.44a6.96 6.96 0 100 13.92 6.96 6.96 0 000-13.92zm0 1.68a5.28 5.28 0 110 10.56 5.28 5.28 0 010-10.56zm0 1.44a3.84 3.84 0 100 7.68 3.84 3.84 0 000-7.68z"/>
            </svg>
            Apple Podcasts
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-[14px] font-medium bg-[#FF0000] text-white hover:bg-[#e60000] transition-all duration-200"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            YouTube
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-[14px] font-medium bg-transparent text-text border border-border hover:bg-card-bg hover:border-text-muted transition-all duration-200"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16M5 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
            </svg>
            RSS Feed
          </a>
        </div>

        {/* Divider */}
        <div className="h-px bg-border my-12"></div>

        {/* Latest Episode */}
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-text-muted mb-5">
          Latest Episode
        </p>
        <div className="bg-card-bg border border-border rounded-xl p-6 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[12px] font-semibold text-accent bg-accent-soft px-2 py-0.5 rounded">
              EP {latestEpisode.number}
            </span>
            <span className="text-[13px] text-text-muted">{latestEpisode.date}</span>
            <span className="text-[13px] text-text-muted">·</span>
            <span className="text-[13px] text-text-muted">{latestEpisode.duration}</span>
          </div>
          <h2 className="font-[family-name:var(--font-newsreader)] text-2xl font-medium mb-2">
            {latestEpisode.title}
          </h2>
          <p className="text-[15px] text-text-muted mb-4">
            with <span className="text-text font-medium">{latestEpisode.guest}</span>, {latestEpisode.guestTitle}
          </p>
          <p className="text-[15px] leading-[1.6] mb-5">
            {latestEpisode.description}
          </p>
          <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[14px] font-medium bg-text text-white hover:bg-[#1a1a1a] transition-all duration-200">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
            Play Episode
          </button>
        </div>

        {/* Divider */}
        <div className="h-px bg-border my-12"></div>

        {/* All Episodes */}
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-text-muted mb-2">
          All Episodes
        </p>
        <p className="text-[14px] text-text-muted mb-5">
          {episodes.length} episodes and counting
        </p>
        <div className="grid gap-3 mb-6">
          {episodes.slice(1).map((episode) => (
            <div
              key={episode.number}
              className="flex items-center gap-4 px-5 py-4 bg-card-bg border border-border rounded-xl transition-all duration-200 hover:border-text-muted cursor-pointer group"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-accent-soft rounded-lg text-accent font-semibold text-sm group-hover:bg-accent group-hover:text-white transition-colors duration-200">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="opacity-0 group-hover:opacity-100 absolute transition-opacity duration-200">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                <span className="group-hover:opacity-0 transition-opacity duration-200">{episode.number}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-[15px] mb-0.5 truncate">{episode.title}</div>
                <div className="text-[13px] text-text-muted truncate">
                  {episode.guest}, {episode.guestTitle}
                </div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-[12px] text-text-muted">{episode.duration}</div>
                <div className="text-[11px] text-text-muted">{episode.date}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-border my-12"></div>

        {/* About */}
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-text-muted mb-5">
          About the Podcast
        </p>
        <div className="mb-6">
          <p className="text-base leading-[1.7] mb-4">
            <strong className="font-semibold">Industry Meets AI</strong> is a weekly podcast where we talk to executives who are actually implementing AI in their organizations—not just thinking about it.
          </p>
          <p className="text-base leading-[1.7] mb-6">
            Every episode dives deep into a real transformation story: what worked, what didn&apos;t, and what they&apos;d do differently. No vendor pitches, no theoretical frameworks—just honest conversations about the future of work.
          </p>
        </div>

        {/* Value Props Checklist */}
        <div className="flex flex-col gap-3.5 mb-6">
          {valueProps.map((item, index) => (
            <div key={index} className="flex items-baseline gap-3 text-[15px] leading-[1.5]">
              <span className="text-[#2E7D32] font-semibold shrink-0">✓</span>
              <div>
                <strong className="font-semibold">{item.title}</strong>
                <span className="text-text-muted"> — {item.desc}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-border my-12"></div>

        {/* Host Section */}
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-text-muted mb-5">
          Your Host
        </p>
        <div className="flex items-start gap-5 mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent-soft to-accent/30 flex items-center justify-center text-2xl font-semibold text-accent shrink-0">
            K
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">Krish Khubchand</h3>
            <p className="text-[14px] text-text-muted mb-3">Founder, Industry Meets AI</p>
            <p className="text-[15px] leading-[1.6] mb-3">
              After spending years watching leaders struggle to separate AI hype from reality, Krish started this podcast to share the stories of those who&apos;ve figured it out.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-[13px] text-text-muted hover:text-text transition-colors">
                LinkedIn →
              </a>
              <a href="#" className="text-[13px] text-text-muted hover:text-text transition-colors">
                Twitter →
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border my-12"></div>

        {/* Subscribe CTA */}
        <div id="subscribe" className="bg-card-bg border border-border rounded-xl p-6 md:p-8 text-center">
          <h2 className="font-[family-name:var(--font-newsreader)] text-2xl font-medium mb-3">
            Never Miss an Episode
          </h2>
          <p className="text-text-muted mb-6 max-w-[400px] mx-auto">
            Subscribe on your favorite platform or get episodes delivered to your inbox.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-[14px] font-medium bg-[#1DB954] text-white hover:bg-[#1aa34a] transition-all duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              Spotify
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-[14px] font-medium bg-[#9933CC] text-white hover:bg-[#8829b8] transition-all duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5.34 0A5.328 5.328 0 000 5.34v13.32A5.328 5.328 0 005.34 24h13.32A5.328 5.328 0 0024 18.66V5.34A5.328 5.328 0 0018.66 0H5.34zm6.525 3.6a8.4 8.4 0 018.4 8.4 8.4 8.4 0 01-8.4 8.4 8.4 8.4 0 01-8.4-8.4 8.4 8.4 0 018.4-8.4z"/>
              </svg>
              Apple
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-[14px] font-medium bg-[#FF0000] text-white hover:bg-[#e60000] transition-all duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              YouTube
            </a>
          </div>
          <button
            data-tally-open="ODXYE7"
            data-tally-layout="modal"
            data-tally-width="500"
            data-tally-emoji-animation="none"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-[15px] font-medium bg-transparent text-text border border-border hover:bg-bg hover:border-text-muted transition-all duration-200"
          >
            Get Email Updates
          </button>
        </div>

        {/* Guest CTA Box */}
        <div className="bg-[#F5F0E8] border border-[#E0D5C7] rounded-xl p-6 mt-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#6B5B4F] flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8"/>
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-[family-name:var(--font-newsreader)] text-xl font-medium mb-2">
                Want to Be a Guest?
              </h3>
              <p className="text-[15px] text-text-muted mb-4">
                We&apos;re looking for executives who&apos;ve implemented AI in their organizations and have real stories to share—wins, failures, and everything in between.
              </p>
              <button
                data-tally-open="ODXYV7"
                data-tally-layout="modal"
                data-tally-width="500"
                data-tally-emoji-animation="none"
                className="inline-flex items-center gap-2 text-[15px] font-medium text-[#6B5B4F] hover:text-[#4A3F37] transition-colors"
              >
                Apply to Be a Guest
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
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-border flex flex-col gap-4 text-center items-center md:flex-row md:justify-between md:text-left">
          <span className="text-[13px] text-text-muted">© 2026 Industry Meets AI</span>
          <div className="flex gap-5">
            <a href="/" className="text-[13px] text-text-muted hover:text-text transition-colors duration-200">
              All Events
            </a>
            <a href="#" className="text-[13px] text-text-muted hover:text-text transition-colors duration-200">
              Contact
            </a>
            <a href="#" className="text-[13px] text-text-muted hover:text-text transition-colors duration-200">
              Twitter
            </a>
          </div>
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
                    className="text-[13px] px-3 py-2 bg-accent-soft text-accent rounded-lg"
                  >
                    → Podcast (current)
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
                    className="text-[13px] px-3 py-2 bg-bg rounded-lg hover:bg-border transition-colors duration-200"
                  >
                    → Claude Co-Working Cafe
                  </a>
                  <div className="h-px bg-border my-2"></div>
                  <div className="text-[11px] text-text-muted font-mono">
                    Route: /podcast
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
