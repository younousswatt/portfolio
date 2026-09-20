import { ArrowUpRight, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="px-4 pb-20 pt-8 md:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-[32px] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8 lg:p-10">
          <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Contact</p>
          <h1 className="mt-4 text-4xl font-medium tracking-[-0.06em] text-[var(--foreground)] md:text-6xl">
            Let’s build something.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
            Have a project, opportunity or idea worth discussing?
          </p>

          <div className="mt-8 flex flex-col gap-4 md:flex-row">
            <a
              href="mailto:wattyounouss6@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-medium text-[var(--background)]"
            >
              <Mail size={16} />
              Get in touch
            </a>
            <a
              href="https://www.linkedin.com/in/younouss-watt-a03647349/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-5 py-3 text-sm font-medium text-[var(--foreground)]"
            >
              LinkedIn
              <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="mt-10 space-y-3 text-base text-[var(--muted)]">
            <p>
              Email: <a href="mailto:wattyounouss6@gmail.com" className="text-[var(--foreground)]">wattyounouss6@gmail.com</a>
            </p>
            <p>
              LinkedIn: <a href="https://www.linkedin.com/in/younouss-watt-a03647349/" target="_blank" rel="noreferrer" className="text-[var(--foreground)]">younouss-watt-a03647349</a>
            </p>
            <p>
              Website: <a href="https://younousswatt.netlify.app/" target="_blank" rel="noreferrer" className="text-[var(--foreground)]">younousswatt.netlify.app</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
