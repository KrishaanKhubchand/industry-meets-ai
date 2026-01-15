"use client";

import { useState } from "react";

export default function CFOsDemoDay() {
  const [debugOpen, setDebugOpen] = useState(false);

  const demos = [
    {
      title: "Forecasting Reimagined",
      description: "Build 12-month plans in hours, not weeks",
      slot: "10 min demo",
    },
    {
      title: "Real-Time Decision Intelligence",
      description: "See your cash runway update as deals close",
      slot: "10 min demo",
    },
    {
      title: "Scenario Planning at Scale",
      description: "Model 100 what-ifs before your next board meeting",
      slot: "10 min demo",
    },
    {
      title: "FP&A Without the Spreadsheet Hell",
      description: "Consolidate actuals across 50 entities in minutes",
      slot: "10 min demo",
    },
    {
      title: "The 5-Day Close",
      description: "AI that catches errors before your auditors do",
      slot: "10 min demo",
    },
    {
      title: "Hands-Free AP",
      description: "Process 10,000 invoices/month without adding headcount",
      slot: "10 min demo",
    },
  ];

  const agenda = [
    { time: "5:30 PM", item: "Doors Open & Networking" },
    { time: "6:00 PM", item: "Welcome & Introduction" },
    { time: "6:10 PM", item: "Demo Block 1 (3 solutions)" },
    { time: "6:45 PM", item: "Short Break" },
    { time: "6:55 PM", item: "Demo Block 2 (3 solutions)" },
    { time: "7:30 PM", item: "Networking & Drinks" },
    { time: "8:30 PM", item: "Close" },
  ];

  const valueProps = [
    { title: "Invite-Only", desc: "150 carefully selected finance leaders." },
    { title: "6 Live Demos", desc: "10 minutes each, no slides, just working product." },
    { title: "Real Peer Networking", desc: "90 minutes with CFOs navigating the same transformation." },
    { title: "Completely Free", desc: "No cost, no strings attached." },
  ];

  const spotsTotal = 150;
  const spotsTaken = 22;

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
              All Events
            </a>
            <a 
              href="/" 
              className="text-[14px] font-medium text-white bg-text px-3.5 py-1.5 rounded-lg hover:bg-[#1a1a1a] transition-colors duration-200"
            >
              Register
            </a>
          </nav>
        </div>
      </header>

      <div className="max-w-[720px] mx-auto px-5 pt-24 pb-12 md:px-6 md:pt-28 md:pb-20">
        {/* Badge */}
      <div className="inline-flex items-center gap-1.5 bg-accent-soft text-accent text-[13px] font-medium px-3 py-1.5 rounded-full mb-6">
        <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse-dot"></span>
        Invite Only
      </div>

      {/* Hero */}
      <h1 className="font-[family-name:var(--font-newsreader)] text-4xl md:text-5xl font-medium tracking-tight leading-[1.15] mb-5">
        AI for CFOs Demo Day 2026
      </h1>
      <p className="font-[family-name:var(--font-newsreader)] text-xl md:text-2xl text-text-muted tracking-tight leading-[1.3] mb-6">
        Join 150 CFOs for an evening of live AI demos and peer conversations about the future of finance.
      </p>

      {/* Event Meta */}
      <div className="flex flex-wrap gap-4 mb-8 text-[15px]">
        <div className="flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          <span>Thursday, April 17, 2026</span>
        </div>
        <div className="flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
          <span>5:30 PM – 8:30 PM GMT</span>
        </div>
        <div className="flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span>London, UK</span>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col gap-3 md:flex-row">
        <button
          data-tally-open="ODXYE7"
          data-tally-layout="modal"
          data-tally-width="500"
          data-tally-emoji-animation="none"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-[15px] font-medium bg-text text-white hover:bg-[#1a1a1a] hover:-translate-y-0.5 transition-all duration-200 md:justify-start"
        >
          Request Invite
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

      {/* Spots Indicator */}
      <div className="mt-4 mb-10">
        <div className="flex items-center justify-between text-[13px] mb-2">
          <span className="text-text-muted">{spotsTaken} out of {spotsTotal} spots already reserved</span>
          <span className="text-accent font-medium">{Math.round((spotsTaken / spotsTotal) * 100)}% filled</span>
        </div>
        <div className="h-1.5 bg-border rounded-full overflow-hidden">
          <div 
            className="h-full bg-accent rounded-full transition-all duration-500"
            style={{ width: `${(spotsTaken / spotsTotal) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-border my-12"></div>

      {/* About */}
      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-text-muted mb-5">
        About This Event
      </p>
      <div className="mb-6">
        <p className="text-base leading-[1.7] mb-4">
          <strong className="font-semibold">AI for CFOs Demo Day</strong> brings together the most innovative AI solutions built specifically for finance leaders. In one evening, see six carefully selected tools that are already reshaping how CFOs work.
        </p>
        <p className="text-base leading-[1.7] mb-6">
          The role of the CFO is evolving faster than ever. From forecasting and compliance to strategic decision-making, AI is transforming how finance leaders operate.
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

      {/* Demos */}
      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-text-muted mb-2">
        What You&apos;ll See
      </p>
      <p className="text-[14px] text-text-muted mb-5">
        Six hand-selected AI solutions solving real finance challenges
      </p>
      <div className="grid gap-3 mb-6">
        {demos.map((demo, index) => (
          <div
            key={index}
            className="flex items-center gap-4 px-5 py-4 bg-card-bg border border-border rounded-xl transition-all duration-200 hover:border-text-muted"
          >
            <div className="flex items-center justify-center w-10 h-10 bg-accent-soft rounded-lg text-accent font-semibold text-sm">
              {index + 1}
            </div>
            <div className="flex-1">
              <div className="font-semibold text-[15px] mb-0.5">{demo.title}</div>
              <div className="text-[13px] text-text-muted">{demo.description}</div>
            </div>
            <span className="text-[12px] text-text-muted bg-bg px-2.5 py-1 rounded-full">
              {demo.slot}
            </span>
          </div>
        ))}
      </div>
      <p className="text-[13px] text-text-muted italic">
        Company names revealed one week before the event.
      </p>

      {/* Divider */}
      <div className="h-px bg-border my-12"></div>

      {/* Agenda */}
      <p id="agenda" className="text-xs font-semibold uppercase tracking-[0.08em] text-text-muted mb-5">
        Agenda
      </p>
      <div className="flex flex-col gap-0 mb-6">
        {agenda.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 py-3 border-b border-border last:border-0"
          >
            <span className="text-[14px] font-medium text-accent min-w-[72px]">
              {item.time}
            </span>
            <span className="text-[15px]">{item.item}</span>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="h-px bg-border my-12"></div>

      {/* Who Should Attend */}
      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-text-muted mb-5">
        Who Should Attend
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {["CFOs", "VPs of Finance", "Controllers", "FP&A Leaders", "Finance Directors", "Heads of Accounting"].map((role, index) => (
          <span
            key={index}
            className="px-3.5 py-2 bg-card-bg border border-border rounded-full text-sm text-text"
          >
            {role}
          </span>
        ))}
      </div>

      {/* Register CTA */}
      <div id="register" className="bg-card-bg border border-border rounded-xl p-6 md:p-8 text-center">
        <h2 className="font-[family-name:var(--font-newsreader)] text-2xl font-medium mb-3">
          Request Your Invite
        </h2>
        <p className="text-text-muted mb-2 max-w-[400px] mx-auto">
          Limited to {spotsTotal} finance leaders. {spotsTaken} spots already reserved.
        </p>
        <p className="text-[13px] text-text-muted mb-6">
          Applications reviewed within 48 hours.
        </p>
        <button
          data-tally-open="ODXYE7"
          data-tally-layout="modal"
          data-tally-width="500"
          data-tally-emoji-animation="none"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-[15px] font-medium bg-text text-white hover:bg-[#1a1a1a] hover:-translate-y-0.5 transition-all duration-200"
        >
          Request Invite
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

      {/* Sponsor CTA Box */}
      <div className="bg-[#F5F0E8] border border-[#E0D5C7] rounded-xl p-6 mt-8">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-[#6B5B4F] flex items-center justify-center flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="font-[family-name:var(--font-newsreader)] text-xl font-medium mb-2">
              Want to Demo Your Solution?
            </h3>
            <p className="text-[15px] text-text-muted mb-4">
              Get 10 minutes in front of 150 CFOs actively looking for AI tools. Show—don&apos;t tell—what your product can do.
            </p>
            <button
              data-tally-open="ODXYV7"
              data-tally-layout="modal"
              data-tally-width="500"
              data-tally-emoji-animation="none"
              className="inline-flex items-center gap-2 text-[15px] font-medium text-[#6B5B4F] hover:text-[#4A3F37] transition-colors"
            >
              Learn About Demo Slots
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
                  href="/events/cfos-meet-ai-demo-day-2026"
                  className="text-[13px] px-3 py-2 bg-accent-soft text-accent rounded-lg"
                >
                  → AI for CFOs Demo Day (current)
                </a>
                <div className="h-px bg-border my-2"></div>
                <div className="text-[11px] text-text-muted font-mono">
                  Route: /events/cfos-meet-ai-demo-day-2026
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
