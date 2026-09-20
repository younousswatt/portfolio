import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="group border-t border-[var(--border)] py-10 md:py-14">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Project {String(index + 1).padStart(2, "0")}</p>
          <h3 className="mt-4 text-3xl font-medium tracking-[-0.05em] text-[var(--foreground)] md:text-5xl">
            {project.title}
          </h3>
          <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">{project.category}</p>
          <p className="mt-5 max-w-md text-base leading-7 text-[var(--muted)]">{project.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.slice(0, 5).map((technology) => (
              <span key={technology} className="text-xs text-[var(--muted)]">
                {technology}
              </span>
            ))}
          </div>
          <Link
            href={`/work/${project.slug}`}
            className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)] transition-opacity hover:opacity-75"
          >
            Explore project
            <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="overflow-hidden rounded-[30px] bg-[var(--surface-strong)] p-2 shadow-[var(--shadow-soft)]">
          <Image
            src={project.image}
            alt={`${project.title} product visualization`}
            width={1200}
            height={800}
            className="h-[260px] w-full rounded-[22px] object-cover transition-transform duration-500 group-hover:scale-[1.01] md:h-[420px]"
          />
        </div>
      </div>
    </article>
  );
}
