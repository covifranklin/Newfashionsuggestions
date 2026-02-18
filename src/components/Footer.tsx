import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-charcoal-700/30 mt-20">
      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div>
            <p className="font-serif text-sm font-medium mb-1">Covi Franklin</p>
            <p className="text-xs opacity-60">
              AI Governance & Policy | Former UN/WFP
            </p>
          </div>
          <div className="flex flex-col sm:items-end gap-2">
            <div className="flex items-center gap-4">
              <a
                href="mailto:hello@covifranklin.com"
                className="text-sm opacity-70 hover:text-teal hover:opacity-100 transition-colors"
              >
                Email
              </a>
              <a
                href="https://linkedin.com/in/covifranklin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm opacity-70 hover:text-teal hover:opacity-100 transition-colors"
              >
                LinkedIn
              </a>
              <Link
                href="/contact"
                className="text-sm opacity-70 hover:text-teal hover:opacity-100 transition-colors"
              >
                Contact
              </Link>
            </div>
            <p className="text-xs opacity-50">
              Open to policy roles, fellowships & research collaborations
            </p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-charcoal-700/20 text-center">
          <p className="text-xs opacity-40">
            &copy; {new Date().getFullYear()} Covi Franklin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
