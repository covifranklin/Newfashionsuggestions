import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Covi Franklin — former UN/WFP professional transitioning into AI governance and policy research.",
};

const focusAreas = [
  "AI Governance",
  "Crisis Response Systems",
  "Institutional Resilience",
  "Humanitarian Coordination",
  "Intelligence & Security Studies",
  "Policy Research",
];

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <div className="animate-fade-in">
        <h1 className="font-serif text-3xl md:text-4xl font-bold tracking-tight mb-10">
          About
        </h1>
      </div>

      <div className="animate-fade-in-delay">
        <div className="mb-10 flex items-start gap-8">
          <div className="hidden md:flex shrink-0 w-28 h-28 rounded-full bg-charcoal-700/50 border border-charcoal-600/30 items-center justify-center">
            <span className="text-xs opacity-40 text-center">Photo</span>
          </div>
          <div className="space-y-5">
            <p className="text-base leading-relaxed opacity-85">
              I spent the formative years of my career with the United Nations
              World Food Programme, beginning at Rome headquarters where I
              contributed to policy development and operational coordination for
              emergency response. My work evolved from HQ-level strategy into
              direct field operations, culminating in my role leading the
              Emergency Telecommunications Cluster (ETC) in Sudan — a
              multi-agency coordination body responsible for delivering shared
              telecommunications services to over 1,300 humanitarian workers
              across more than 45 partner organizations during one of the
              world&apos;s most complex crises.
            </p>
            <p className="text-base leading-relaxed opacity-85">
              Academically, I read Philosophy at the University of Cambridge
              before completing an MA with Distinction in Intelligence and
              International Security at King&apos;s College London. My graduate
              research focused on the intersection of institutional resilience,
              intelligence frameworks, and the structural conditions under which
              governance systems fail — themes that continue to inform my
              current work. The combination of rigorous analytical training and
              direct operational experience in fragile, high-pressure
              environments has shaped how I approach complex policy problems.
            </p>
            <p className="text-base leading-relaxed opacity-85">
              I am now focused on AI governance and policy — specifically, how
              insights from humanitarian coordination, post-conflict
              institutional failure, and crisis management can inform the design
              of more resilient AI oversight bodies. I am pursuing fellowship
              opportunities with programs such as MATS, IAPS, and GovAI, have
              published research on AI crisis preparedness frameworks, and have
              completed coursework through BlueDot Impact&apos;s AI safety
              program. I am particularly interested in how we build institutions
              capable of governing transformative AI systems before, not after,
              the point of critical failure.
            </p>
          </div>
        </div>
      </div>

      <div className="animate-fade-in-delay-2">
        <h2 className="font-serif text-xl font-semibold mb-5 mt-12">
          Focus Areas
        </h2>
        <div className="flex flex-wrap gap-2">
          {focusAreas.map((area) => (
            <span
              key={area}
              className="px-3 py-1.5 bg-teal/10 border border-teal/20 text-teal text-sm rounded-md"
            >
              {area}
            </span>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-charcoal-700/30">
          <h2 className="font-serif text-xl font-semibold mb-4">Background</h2>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
              <span className="text-sm text-teal font-medium shrink-0">
                MA, Distinction
              </span>
              <span className="text-sm opacity-70">
                Intelligence and International Security — King&apos;s College
                London
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
              <span className="text-sm text-teal font-medium shrink-0">BA</span>
              <span className="text-sm opacity-70">
                Philosophy — University of Cambridge
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
              <span className="text-sm text-teal font-medium shrink-0">
                WFP Sudan
              </span>
              <span className="text-sm opacity-70">
                Emergency Telecommunications Cluster Lead — 1,300+
                humanitarians, 45+ partner organizations
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
              <span className="text-sm text-teal font-medium shrink-0">
                WFP Rome
              </span>
              <span className="text-sm opacity-70">
                Policy &amp; Emergency Response Coordination — Headquarters
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
