import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4 py-20 md:px-8 lg:px-12">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-6xl font-semibold tracking-[-0.08em] text-[var(--foreground)] md:text-8xl">
          404
        </h1>
        <p className="mt-6 text-xl text-[var(--muted)]">Page not found</p>
        <p className="mt-4 text-base text-[var(--muted)]">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-[var(--background)] transition-transform duration-200 hover:-translate-y-0.5"
          >
            <Home size={16} />
            Back to home
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--border-strong)]"
          >
            View work
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
