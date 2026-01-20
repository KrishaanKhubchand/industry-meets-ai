"use client";

import { useState } from "react";

export default function CFOTechnologyCouncil() {
  const [debugOpen, setDebugOpen] = useState(false);

  const valueProps = [
    { title: "Invite-Only", desc: "Curated community of 100 finance leaders, no vendors." },
    { title: "Peer-First", desc: "Learn what's actually working from CFOs who've implemented AI." },
    { title: "Stay Current", desc: "Monthly briefings on the tools reshaping finance." },
    { title: "Real Connections", desc: "Quarterly dinners in London, not webinars." },
  ];

  const benefits = [
    {
      title: "Monthly AI Briefings",
      description: "30-minute deep dives on one tool, presented by a CFO who's used it",
      icon: "briefing",
    },
    {
      title: "Private Community",
      description: "Slack channel exclusively for 100 finance leaders",
      icon: "community",
    },
    {
      title: "Quarterly Dinners",
      description: "In-person networking with peers in London",
      icon: "dinner",
    },
    {
      title: "Honest Tool Reviews",
      description: "Real assessments from peers, not vendor pitches",
      icon: "review",
    },
    {
      title: "Early Event Access",
      description: "First invites to all Industry Meets AI events",
      icon: "access",
    },
    {
      title: "Curated Introductions",
      description: "We'll connect you with the right peers for your challenges",
      icon: "intro",
    },
  ];

  const foundingMembersTotal = 100;
  const foundingMembersTaken = 12;

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
            <button
              data-tally-open="ODXYE7"
              data-tally-layout="modal"
              data-tally-width="500"
              data-tally-emoji-animation="none"
              className="text-[14px] font-medium text-white bg-text px-3.5 py-1.5 rounded-lg hover:bg-[#1a1a1a] transition-colors duration-200"
            >
              Apply
            </button>
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
          CFO Technology Council
        </h1>
        <p className="font-[family-name:var(--font-newsreader)] text-xl md:text-2xl text-text-muted tracking-tight leading-[1.3] mb-8">
          An invite-only community of finance leaders navigating the AI transformation together.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-3 md:flex-row">
          <button
            data-tally-open="ODXYE7"
            data-tally-layout="modal"
            data-tally-width="500"
            data-tally-emoji-animation="none"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-[15px] font-medium bg-text text-white hover:bg-[#1a1a1a] hover:-translate-y-0.5 transition-all duration-200 md:justify-start"
          >
            Apply to Join
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
            Partnership Opportunities
          </button>
        </div>

        {/* Founding Members Indicator */}
        <div className="mt-4 mb-10">
          <div className="flex items-center justify-between text-[13px] mb-2">
            <span className="text-text-muted">{foundingMembersTaken} founding members already joined</span>
            <span className="text-accent font-medium">{foundingMembersTotal - foundingMembersTaken} spots remaining</span>
          </div>
          <div className="h-1.5 bg-border rounded-full overflow-hidden">
            <div 
              className="h-full bg-accent rounded-full transition-all duration-500"
              style={{ width: `${(foundingMembersTaken / foundingMembersTotal) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border my-12"></div>

        {/* About */}
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-text-muted mb-5">
          About the Council
        </p>
        <div className="mb-6">
          <p className="text-base leading-[1.7] mb-4">
            The <strong className="font-semibold">CFO Technology Council</strong> brings together finance leaders who believe technology—especially AI—is the key to spending less time on spreadsheets and more time on what matters: strategy, decisions, and growth.
          </p>
          <p className="text-base leading-[1.7] mb-6">
            This isn&apos;t another LinkedIn group or vendor-sponsored webinar series. It&apos;s a curated community of peers who share what&apos;s actually working, what&apos;s not, and what&apos;s coming next.
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

        {/* Membership Benefits */}
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-text-muted mb-2">
          What Members Get
        </p>
        <p className="text-[14px] text-text-muted mb-5">
          Everything you need to stay ahead of the AI curve
        </p>
        <div className="grid gap-3 mb-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-4 px-5 py-4 bg-card-bg border border-border rounded-xl transition-all duration-200 hover:border-text-muted"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-accent-soft rounded-lg text-accent font-semibold text-sm">
                {index + 1}
              </div>
              <div className="flex-1">
                <div className="font-semibold text-[15px] mb-0.5">{benefit.title}</div>
                <div className="text-[13px] text-text-muted">{benefit.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-border my-12"></div>

        {/* Who It's For */}
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-text-muted mb-5">
          Who It&apos;s For
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
        <p className="text-[14px] text-text-muted">
          We&apos;re looking for finance leaders at companies with $10M+ revenue who are actively exploring or implementing AI in their practice.
        </p>

        {/* Divider */}
        <div className="h-px bg-border my-12"></div>

        {/* Apply CTA */}
        <div className="bg-card-bg border border-border rounded-xl p-6 md:p-8 text-center">
          <h2 className="font-[family-name:var(--font-newsreader)] text-2xl font-medium mb-3">
            Become a Founding Member
          </h2>
          <p className="text-text-muted mb-2 max-w-[400px] mx-auto">
            Limited to {foundingMembersTotal} finance leaders. {foundingMembersTaken} spots already taken.
          </p>
          <p className="text-[13px] text-text-muted mb-6">
            Applications reviewed within 48 hours. No cost to join.
          </p>
          <button
            data-tally-open="ODXYE7"
            data-tally-layout="modal"
            data-tally-width="500"
            data-tally-emoji-animation="none"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-[15px] font-medium bg-text text-white hover:bg-[#1a1a1a] hover:-translate-y-0.5 transition-all duration-200"
          >
            Apply to Join
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
                    className="text-[13px] px-3 py-2 bg-bg rounded-lg hover:bg-border transition-colors duration-200"
                  >
                    → Real Estate Summit 2026
                  </a>
                  <a
                    href="/community/cfo-technology-council"
                    className="text-[13px] px-3 py-2 bg-accent-soft text-accent rounded-lg"
                  >
                    → CFO Technology Council (current)
                  </a>
                  <a
                    href="/community/claude-coworking-cafe"
                    className="text-[13px] px-3 py-2 bg-bg rounded-lg hover:bg-border transition-colors duration-200"
                  >
                    → Claude Co-Working Cafe
                  </a>
                  <div className="h-px bg-border my-2"></div>
                  <div className="text-[11px] text-text-muted font-mono">
                    Route: /community/cfo-technology-council
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
