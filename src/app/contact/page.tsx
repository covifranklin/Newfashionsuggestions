import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Covi Franklin — open to policy roles, fellowships, and research collaborations.",
};

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <div className="animate-fade-in">
        <h1 className="font-serif text-3xl md:text-4xl font-bold tracking-tight mb-6">
          Contact
        </h1>
      </div>

      <div className="animate-fade-in-delay">
        <p className="text-base leading-relaxed opacity-85 mb-10 max-w-xl">
          I&apos;m currently exploring opportunities in AI governance, policy
          research, and institutional strategy. If you&apos;re working on
          something in this space, I&apos;d welcome the conversation.
        </p>
      </div>

      <div className="animate-fade-in-delay-2 space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-md bg-teal/10 border border-teal/20 flex items-center justify-center shrink-0">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-teal"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          <div>
            <p className="text-xs opacity-50 mb-0.5">Email</p>
            <a
              href="mailto:hello@covifranklin.com"
              className="text-teal hover:text-teal-light transition-colors text-sm"
            >
              hello@covifranklin.com
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-md bg-teal/10 border border-teal/20 flex items-center justify-center shrink-0">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-teal"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </div>
          <div>
            <p className="text-xs opacity-50 mb-0.5">LinkedIn</p>
            <a
              href="https://linkedin.com/in/covifranklin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal hover:text-teal-light transition-colors text-sm"
            >
              linkedin.com/in/covifranklin
            </a>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-charcoal-700/30">
          <p className="text-sm opacity-60 leading-relaxed">
            Open to policy roles, fellowships, and research collaborations in AI
            governance, institutional resilience, and crisis preparedness.
          </p>
        </div>
      </div>
    </div>
  );
}
