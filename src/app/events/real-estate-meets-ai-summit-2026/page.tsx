"use client";

import { useState } from "react";

export default function RealEstateSummit() {
  const [debugOpen, setDebugOpen] = useState(false);

  const workshopTracks = [
    {
      track: "A",
      title: "AI for Acquisitions & Underwriting",
      description: "Deal analysis, market intel, and investment decisioning",
    },
    {
      track: "B",
      title: "Property Management Automation",
      description: "Tenant ops, maintenance, and portfolio efficiency",
    },
    {
      track: "C",
      title: "Market Intelligence & Analytics",
      description: "Predictive insights and competitive analysis",
    },
    {
      track: "D",
      title: "Tenant Experience & Leasing",
      description: "AI-powered leasing, screening, and retention",
    },
  ];

  const agenda = [
    { time: "8:30 AM", item: "Registration & Breakfast", type: "break" },
    { time: "9:15 AM", item: "Opening Keynote: The AI-Native Real Estate Firm", type: "keynote" },
    { time: "10:00 AM", item: "Workshop Track 1 (4 parallel sessions)", type: "workshop" },
    { time: "11:30 AM", item: "Coffee Break & Networking", type: "break" },
    { time: "12:00 PM", item: "Demo Showcase Block 1 (6 live demos)", type: "demo" },
    { time: "1:00 PM", item: "Networking Lunch", type: "break" },
    { time: "2:00 PM", item: "Workshop Track 2 (4 parallel sessions)", type: "workshop" },
    { time: "3:30 PM", item: "Afternoon Break", type: "break" },
    { time: "4:00 PM", item: "Demo Showcase Block 2 (6 live demos)", type: "demo" },
    { time: "5:00 PM", item: "Closing Panel: The Future of PropTech", type: "keynote" },
    { time: "5:30 PM", item: "Drinks & Networking", type: "break" },
  ];

  const valueProps = [
    { title: "Full-Day Immersion", desc: "9 hours of curated content and networking." },
    { title: "4 Workshop Tracks", desc: "Deep-dive sessions led by practitioners." },
    { title: "12 Live Demos", desc: "See the tools reshaping real estate." },
    { title: "300 Leaders", desc: "Connect with peers navigating the same transformation." },
    { title: "Networking Lunch & Drinks", desc: "Premium catering and open bar." },
  ];

  const spotsTotal = 300;
  const spotsTaken = 47;

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
              href="#register" 
              className="text-[14px] font-medium text-white bg-text px-3.5 py-1.5 rounded-lg hover:bg-[#1a1a1a] transition-colors duration-200"
            >
              Register
            </a>
          </nav>
        </div>
      </header>

      <div className="max-w-[720px] mx-auto px-5 pt-24 pb-12 md:px-6 md:pt-28 md:pb-20">
        {/* Badge */}
      <div className="inline-flex items-center gap-1.5 bg-[#E8F0E8] text-[#2E7D32] text-[13px] font-medium px-3 py-1.5 rounded-full mb-6">
        <span className="w-1.5 h-1.5 bg-[#2E7D32] rounded-full animate-pulse-dot"></span>
        Full-Day Summit
      </div>

      {/* Hero */}
      <h1 className="font-[family-name:var(--font-newsreader)] text-4xl md:text-5xl font-medium tracking-tight leading-[1.15] mb-5">
        Real Estate Meets AI Summit 2026
      </h1>
      <p className="font-[family-name:var(--font-newsreader)] text-xl md:text-2xl text-text-muted tracking-tight leading-[1.3] mb-6">
        A full day of workshops, live demos, and networking for real estate leaders embracing AI.
      </p>

      {/* Event Meta */}
      <div className="flex flex-wrap gap-4 mb-8 text-[15px]">
        <div className="flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#2E7D32]">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          <span>Friday, June 12, 2026</span>
        </div>
        <div className="flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#2E7D32]">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
          <span>9:00 AM – 6:00 PM GMT</span>
        </div>
        <div className="flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#2E7D32]">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span>Central London</span>
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
          <span className="text-[#2E7D32] font-medium">{Math.round((spotsTaken / spotsTotal) * 100)}% filled</span>
        </div>
        <div className="h-1.5 bg-border rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#2E7D32] rounded-full transition-all duration-500"
            style={{ width: `${(spotsTaken / spotsTotal) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-border my-12"></div>

      {/* About */}
      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-text-muted mb-5">
        About This Summit
      </p>
      <div className="mb-6">
        <p className="text-base leading-[1.7] mb-4">
          <strong className="font-semibold">Real Estate Meets AI Summit</strong> is the premier gathering for property leaders ready to transform their operations with artificial intelligence. One full day. Four workshop tracks. Twelve live demos. Three hundred decision-makers.
        </p>
        <p className="text-base leading-[1.7] mb-6">
          Unlike our evening demo days, the Summit offers deep-dive workshops where you&apos;ll roll up your sleeves alongside practitioners already implementing AI. Walk away with actionable playbooks, vendor shortlists, and a network of peers on the same journey.
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

      {/* Workshop Tracks */}
      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-text-muted mb-2">
        Workshop Tracks
      </p>
      <p className="text-[14px] text-text-muted mb-5">
        Choose your own adventure across four parallel tracks
      </p>
      <div className="grid gap-3 mb-6">
        {workshopTracks.map((track, index) => (
          <div
            key={index}
            className="flex items-center gap-4 px-5 py-4 bg-card-bg border border-border rounded-xl transition-all duration-200 hover:border-text-muted"
          >
            <div className="flex items-center justify-center w-10 h-10 bg-[#E8F0E8] rounded-lg text-[#2E7D32] font-semibold text-sm">
              {track.track}
            </div>
            <div className="flex-1">
              <div className="font-semibold text-[15px] mb-0.5">{track.title}</div>
              <div className="text-[13px] text-text-muted">{track.description}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="h-px bg-border my-12"></div>

      {/* Agenda */}
      <p id="agenda" className="text-xs font-semibold uppercase tracking-[0.08em] text-text-muted mb-5">
        Full-Day Agenda
      </p>
      <div className="flex flex-col gap-0 mb-6">
        {agenda.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 py-3 border-b border-border last:border-0 ${
              item.type === "break" ? "opacity-60" : ""
            }`}
          >
            <span className={`text-[14px] font-medium min-w-[72px] ${
              item.type === "keynote" ? "text-[#2E7D32]" : 
              item.type === "workshop" ? "text-accent" : 
              item.type === "demo" ? "text-[#1976D2]" : "text-text-muted"
            }`}>
              {item.time}
            </span>
            <span className="text-[15px]">{item.item}</span>
            {item.type === "workshop" && (
              <span className="text-[11px] text-text-muted bg-accent-soft px-2 py-0.5 rounded-full ml-auto">
                Workshop
              </span>
            )}
            {item.type === "demo" && (
              <span className="text-[11px] text-[#1976D2] bg-[#E3F2FD] px-2 py-0.5 rounded-full ml-auto">
                Demos
              </span>
            )}
            {item.type === "keynote" && (
              <span className="text-[11px] text-[#2E7D32] bg-[#E8F0E8] px-2 py-0.5 rounded-full ml-auto">
                Keynote
              </span>
            )}
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
        {["CEOs & Principals", "Heads of Acquisitions", "Asset Managers", "Property Managers", "CFOs & Finance Leaders", "Development Directors", "PropTech Leaders", "Innovation Leads"].map((role, index) => (
          <span
            key={index}
            className="px-3.5 py-2 bg-card-bg border border-border rounded-full text-sm text-text"
          >
            {role}
          </span>
        ))}
      </div>

      {/* Register CTA */}
      <div id="register" className="bg-[#E8F0E8] border border-[#C8E6C9] rounded-xl p-6 md:p-8 text-center">
        <h2 className="font-[family-name:var(--font-newsreader)] text-2xl font-medium mb-3">
          Request Your Invite
        </h2>
        <p className="text-text-muted mb-2 max-w-[400px] mx-auto">
          Limited to {spotsTotal} real estate leaders. {spotsTaken} spots already reserved.
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
                  className="text-[13px] px-3 py-2 bg-accent-soft text-accent rounded-lg"
                >
                  → Real Estate Summit 2026 (current)
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
                  Route: /events/real-estate-meets-ai-summit-2026
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
