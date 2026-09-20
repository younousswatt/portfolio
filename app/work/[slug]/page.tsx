import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";

import { projectList } from "@/data/projects";

export async function generateStaticParams() {
  return projectList.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectList.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projectList.findIndex((item) => item.slug === slug);
  const nextProject = projectList[(currentIndex + 1) % projectList.length];

  return (
    <article className="px-4 pb-20 pt-8 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <Link href="/work" className="inline-flex items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]">
          <ArrowLeft size={16} />
          Back to work
        </Link>

        <div className="mt-8 rounded-[32px] border border-[var(--border)] bg-[var(--surface)] p-5 md:p-8">
          <div className="flex flex-col gap-4 border-b border-[var(--border)] pb-6">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
              <span>{project.category}</span>
              <span className="text-[var(--border-strong)]">•</span>
              <span>{project.year}</span>
            </div>
            <h1 className="text-4xl font-medium tracking-[-0.06em] text-[var(--foreground)] md:text-6xl">
              {project.title}
            </h1>
            <p className="max-w-3xl text-base leading-7 text-[var(--muted)] md:text-lg">{project.description}</p>
          </div>

          <div className="mt-8 overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface-strong)] p-3">
            <Image
              src={project.image}
              alt={`${project.title} project preview`}
              width={1400}
              height={900}
              className="h-[300px] w-full rounded-[20px] object-cover md:h-[520px]"
              priority
            />
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[24px] border border-[var(--border)] bg-[var(--surface-strong)] p-5">
              <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Context</p>
              <p className="mt-3 text-base leading-7 text-[var(--foreground)]">{project.details.context}</p>
            </div>
            <div className="rounded-[24px] border border-[var(--border)] bg-[var(--surface-strong)] p-5">
              <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Problem</p>
              <p className="mt-3 text-base leading-7 text-[var(--foreground)]">{project.details.problem}</p>
            </div>
            <div className="rounded-[24px] border border-[var(--border)] bg-[var(--surface-strong)] p-5">
              <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Approach</p>
              <p className="mt-3 text-base leading-7 text-[var(--foreground)]">{project.details.approach}</p>
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[24px] border border-[var(--border)] bg-[var(--surface-strong)] p-6">
              <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Project status</p>
              <p className="mt-3 text-lg leading-8 text-[var(--foreground)]">{project.details.status}</p>
            </div>

            <div className="rounded-[24px] border border-[var(--border)] bg-[var(--surface-strong)] p-6">
              <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Technologies</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="inline-flex rounded-full border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1.5 text-xs text-[var(--muted)]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-[24px] border border-[var(--border)] bg-[var(--surface-strong)] p-6">
            <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Key considerations</p>
            <ul className="mt-4 space-y-3 text-base leading-7 text-[var(--foreground)]">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 flex items-center justify-between border-t border-[var(--border)] pt-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Next project</p>
              <p className="mt-2 text-lg font-medium text-[var(--foreground)]">{nextProject.title}</p>
            </div>
            <Link
              href={`/work/${nextProject.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-2.5 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--border-strong)]"
            >
              View next
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
