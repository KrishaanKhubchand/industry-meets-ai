"use client";

import { useState } from "react";

export default function Home() {
  const [debugOpen, setDebugOpen] = useState(false);

  const events = [
    {
      month: "Feb",
      day: "20",
      title: "CFOs Meet AI Demo Day 2026",
      meta: "London · 5:30 PM GMT · In Person",
      href: "/events/cfos-meet-ai-demo-day-2026",
    },
    {
      month: "Mar",
      day: "13",
      title: "Sales Meets AI Demo Day 2026",
      meta: "London · 5:30 PM GMT · In Person",
      href: "/events/sales-meets-ai-demo-day-2026",
    },
    {
      month: "Apr",
      day: "10",
      title: "AI for General Counsel Demo Day 2026",
      meta: "London · 5:30 PM GMT · In Person",
      href: "/events/ai-for-general-counsel-demo-day-2026",
    },
  ];

  const industries = [
    "Healthcare",
    "Finance",
    "Legal",
    "Marketing",
    "HR & People Ops",
    "Sales",
    "Customer Success",
    "Product",
    "Engineering",
    "Education",
    "Manufacturing",
    "Real Estate",
  ];

  const howItWorks = [
    { title: "Live & Invite Only", desc: "Curated events for industry leaders." },
    { title: "10-Minute Demos", desc: "Focused, practical, no fluff." },
    { title: "Completely Free", desc: "No barriers to learning." },
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
            <a href="#events" className="text-[14px] text-text-muted hover:text-text transition-colors duration-200">
              Events
            </a>
            <button
              data-tally-open="ODXYV7"
              data-tally-layout="modal"
              data-tally-width="500"
              data-tally-emoji-animation="none"
              className="text-[14px] font-medium text-white bg-text px-3.5 py-1.5 rounded-lg hover:bg-[#1a1a1a] transition-colors duration-200"
            >
              Sponsor
            </button>
          </nav>
        </div>
      </header>

      <div className="max-w-[720px] mx-auto px-5 pt-24 pb-12 md:px-6 md:pt-28 md:pb-20">
        {/* Badge */}
      <div className="inline-flex items-center gap-1.5 bg-accent-soft text-accent text-[13px] font-medium px-3 py-1.5 rounded-full mb-6">
        <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse-dot"></span>
        2026 Season Live
      </div>

      {/* Hero */}
      <h1 className="font-[family-name:var(--font-newsreader)] text-4xl md:text-5xl font-medium tracking-tight leading-[1.15] mb-5">
        Industry Meets AI
      </h1>
      <p className="text-lg text-text-muted mb-8">
        The fastest way for leaders to discover the AI tools reshaping their industry.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col gap-3 mb-16 md:flex-row">
        <a
          href="#"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-[15px] font-medium bg-text text-white hover:bg-[#1a1a1a] hover:-translate-y-0.5 transition-all duration-200 md:justify-start"
        >
          Register for Next Event
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <button
          data-tally-open="ODXYV7"
          data-tally-layout="modal"
          data-tally-width="500"
          data-tally-emoji-animation="none"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-[15px] font-medium bg-transparent text-text border border-border hover:bg-card-bg hover:border-text-muted transition-all duration-200 md:justify-start"
        >
          Sponsorship Opportunities
        </button>
      </div>

      {/* Divider */}
      <div className="h-px bg-border my-12"></div>

      {/* How It Works */}
      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-text-muted mb-5">
        How It Works
      </p>
      <div className="mb-6">
        <p className="text-base leading-[1.7] mb-4">
          The <strong className="font-semibold">Industry Meets AI Demo Series</strong> is a collection of live showcases designed to help professionals across sectors discover the most impactful AI solutions, fast.
        </p>
        <p className="text-base leading-[1.7] mb-4">
          AI is rapidly reshaping every job, function, and industry—but the most significant advantages will go to those who adopt early.
        </p>
        <p className="text-base leading-[1.7]">
          The promise is simple: learn the most transformative tools in 60 minutes, then spend the next hour networking with peers about how they&apos;re using AI. Starting in London.
        </p>
      </div>
      <div className="flex flex-col gap-3.5 mb-6">
        {howItWorks.map((item, index) => (
          <div key={index} className="flex items-baseline gap-3 text-[15px] leading-[1.5]">
            <span className="text-[#2E7D32] font-semibold shrink-0">✓</span>
            <div>
              <strong className="font-semibold">{item.title}</strong>
              <span className="text-text-muted"> — {item.desc}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="text-[15px] text-text-muted">
        Find an event below. Interested in showcasing your AI solution?{" "}
        <a href="#" className="text-text font-medium hover:text-accent transition-colors duration-200">
          Get in touch →
        </a>
      </p>

      {/* Divider */}
      <div className="h-px bg-border my-12"></div>

      {/* Upcoming Sessions */}
      <p id="events" className="text-xs font-semibold uppercase tracking-[0.08em] text-text-muted mb-5">
        Upcoming Sessions
      </p>
      <div className="flex flex-col gap-3">
        {events.map((event, index) => (
          <a
            key={index}
            href={event.href}
            className="flex items-center gap-4 px-5 py-4 bg-card-bg border border-border rounded-xl transition-all duration-200 hover:border-text-muted hover:translate-x-1 cursor-pointer group"
          >
            <div className="flex flex-col items-center min-w-[48px] px-3 py-2 bg-bg rounded-lg">
              <span className="text-[11px] font-semibold uppercase text-accent">
                {event.month}
              </span>
              <span className="text-xl font-semibold leading-[1.2]">{event.day}</span>
            </div>
            <div className="flex-1">
              <div className="font-semibold text-[15px] mb-0.5">{event.title}</div>
              <div className="text-[13px] text-text-muted">{event.meta}</div>
            </div>
            <span className="text-text-muted transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>
        ))}
      </div>

      {/* Divider */}
      <div className="h-px bg-border my-12"></div>

      {/* Industries */}
      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-text-muted mb-5">
        Industries & Functions
      </p>
      <div className="flex flex-wrap gap-2">
        {industries.map((industry, index) => (
          industry === "Real Estate" ? (
            <a
              key={index}
              href="/events/real-estate-meets-ai-demo-day-2026"
              className="px-3.5 py-2 bg-card-bg border border-border rounded-full text-sm text-text transition-all duration-200 hover:bg-bg hover:border-text-muted cursor-pointer"
            >
              {industry}
            </a>
          ) : (
            <span
              key={index}
              className="px-3.5 py-2 bg-card-bg border border-border rounded-full text-sm text-text transition-all duration-200 hover:bg-bg hover:border-text-muted cursor-pointer"
            >
              {industry}
            </span>
          )
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-border flex flex-col gap-4 text-center items-center md:flex-row md:justify-between md:text-left">
        <span className="text-[13px] text-text-muted">© 2026 Industry Meets AI</span>
        <div className="flex gap-5">
          <a href="#" className="text-[13px] text-text-muted hover:text-text transition-colors duration-200">
            About
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
                  className="text-[13px] px-3 py-2 bg-accent-soft text-accent rounded-lg"
                >
                  → Home Page (current)
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
                  className="text-[13px] px-3 py-2 bg-bg rounded-lg hover:bg-border transition-colors duration-200"
                >
                  → Claude Co-Working Cafe
                </a>
                <div className="h-px bg-border my-2"></div>
                <div className="text-[11px] text-text-muted font-mono">
                  Route: /
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
