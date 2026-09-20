import { GitBranch, Globe2, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="px-4 pb-10 pt-4 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl rounded-[28px] border border-[var(--border)] bg-[var(--surface)] px-5 py-6 md:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-medium text-[var(--foreground)]">Younouss Watt</p>
            <p className="mt-1 text-sm text-[var(--muted)]">AI & Big Data Engineering Student</p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--muted)]">
            <a href="https://www.linkedin.com/in/younouss-watt-a03647349/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-[var(--foreground)]">
              <Globe2 size={14} />
              LinkedIn
            </a>
            <a href="https://github.com/younousswatt" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-[var(--foreground)]">
              <GitBranch size={14} />
              GitHub
            </a>
            <a href="mailto:wattyounouss6@gmail.com" className="inline-flex items-center gap-2 hover:text-[var(--foreground)]">
              <Mail size={14} />
              Email
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-[var(--border)] pt-4 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
          <p>© 2026 Younouss Watt</p>
          <p>Dakar, Senegal</p>
        </div>
      </div>
    </footer>
  );
}
