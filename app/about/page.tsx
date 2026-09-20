import Image from "next/image";
import { MapPin, BrainCircuit, Code2 } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="px-4 pb-20 pt-8 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 rounded-[32px] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">About</p>
            <h1 className="mt-4 text-4xl font-medium tracking-[-0.06em] text-[var(--foreground)] md:text-6xl">
              A little more about me.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
              I’m Younouss Watt, a Dakar-based engineering student building products at the intersection of software,
              data, AI and telecommunications. I care about turning ideas into useful systems and about creating tools
              that are thoughtful, elegant and genuinely usable.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-1.5 text-sm text-[var(--muted)]">
                <MapPin size={14} /> Dakar, Senegal
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-1.5 text-sm text-[var(--muted)]">
                <Code2 size={14} /> Software development
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-1.5 text-sm text-[var(--muted)]">
                <BrainCircuit size={14} /> AI & Data
              </span>
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface-strong)] p-3">
            <Image
              src="/avatars/hero-avatar.svg"
              alt="Younouss Watt portrait illustration"
              width={640}
              height={720}
              className="h-[360px] w-full rounded-[22px] object-cover md:h-[420px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
