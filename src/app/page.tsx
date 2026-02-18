import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 md:py-32">
      <div className="animate-fade-in">
        <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Covi Franklin
        </h1>
      </div>

      <div className="animate-fade-in-delay">
        <p className="text-teal text-lg md:text-xl font-medium mb-8">
          AI Governance &amp; Policy &middot; Former UN/WFP &middot; Intelligence &amp; Security
        </p>
      </div>

      <div className="animate-fade-in-delay-2">
        <div className="max-w-2xl space-y-4 mb-10">
          <p className="text-base md:text-lg leading-relaxed opacity-85">
            I led humanitarian telecommunications coordination during crisis
            response operations in Sudan as head of the WFP Emergency
            Telecommunications Cluster, supporting over 1,300 humanitarians
            across 45+ partner organizations. I hold an MA with Distinction in
            Intelligence and International Security from King&apos;s College London
            and a BA from the University of Cambridge.
          </p>
          <p className="text-base md:text-lg leading-relaxed opacity-85">
            My current work focuses on the intersection of AI governance,
            institutional resilience, and crisis preparedness — examining how
            lessons from humanitarian coordination and institutional failure can
            inform the design of robust AI oversight frameworks.
          </p>
        </div>

        <nav className="flex flex-wrap items-center gap-4">
          <Link
            href="/writing"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal/10 border border-teal/30 text-teal rounded-md text-sm font-medium hover:bg-teal/20 transition-colors"
          >
            Read my writing
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-charcoal-700/50 rounded-md text-sm font-medium opacity-70 hover:opacity-100 hover:border-charcoal-600 transition-all"
          >
            About me
          </Link>
          <a
            href="mailto:hello@covifranklin.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-charcoal-700/50 rounded-md text-sm font-medium opacity-70 hover:opacity-100 hover:border-charcoal-600 transition-all"
          >
            Get in touch
          </a>
        </nav>
      </div>
    </div>
  );
}
