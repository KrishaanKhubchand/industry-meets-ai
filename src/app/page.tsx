export default function Home() {
  const events = [
    {
      month: "Feb",
      day: "12",
      title: "AI in Healthcare Operations",
      meta: "Virtual · 12:00 PM EST · 90 min",
    },
    {
      month: "Mar",
      day: "06",
      title: "AI for Legal & Compliance Teams",
      meta: "Virtual · 12:00 PM EST · 90 min",
    },
    {
      month: "Mar",
      day: "27",
      title: "AI in Financial Services",
      meta: "Virtual · 12:00 PM EST · 90 min",
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
    { title: "6 Top AI Companies", desc: "Hand-selected for real-world impact." },
    { title: "10-Minute Demos", desc: "Focused, practical, no fluff." },
    { title: "Completely Free", desc: "No barriers to learning." },
  ];

  return (
    <div className="max-w-[720px] mx-auto px-5 py-12 md:px-6 md:py-20">
      {/* Badge */}
      <div className="inline-flex items-center gap-1.5 bg-accent-soft text-accent text-[13px] font-medium px-3 py-1.5 rounded-full mb-6">
        <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse-dot"></span>
        Applications Open
      </div>

      {/* Hero */}
      <h1 className="font-[family-name:var(--font-newsreader)] text-4xl md:text-5xl font-medium tracking-tight leading-[1.15] mb-5">
        Industry Meets AI
      </h1>
      <p className="text-lg text-text-muted max-w-[520px] mb-8">
        The fastest way for leaders to discover the AI tools reshaping their industry. 6 companies. 60 minutes. One evening.
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
        <a
          href="#"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-[15px] font-medium bg-transparent text-text border border-border hover:bg-card-bg hover:border-text-muted transition-all duration-200 md:justify-start"
        >
          View Past Sessions
        </a>
      </div>

      {/* Divider */}
      <div className="h-px bg-border my-12"></div>

      {/* How It Works */}
      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-text-muted mb-5">
        How It Works
      </p>
      <div className="mb-6">
        <p className="text-base leading-[1.7] mb-4">
          AI is rapidly reshaping every job, function, and industry—but the most significant advantages will go to those who adopt early.
        </p>
        <p className="text-base leading-[1.7] mb-4">
          The <strong className="font-semibold">Industry Meets AI Demo Series</strong> is a collection of live showcases designed to help professionals across sectors discover the most impactful AI solutions, fast.
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
      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-text-muted mb-5">
        Upcoming Sessions
      </p>
      <div className="flex flex-col gap-3">
        {events.map((event, index) => (
          <div
            key={index}
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
          </div>
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
          <span
            key={index}
            className="px-3.5 py-2 bg-card-bg border border-border rounded-full text-sm text-text transition-all duration-200 hover:bg-bg hover:border-text-muted cursor-pointer"
          >
            {industry}
          </span>
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
    </div>
  );
}
