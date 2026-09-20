import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { projectList } from "@/data/projects";
import { SectionHeader } from "@/components/section-header";

export default function WorkPage() {
  return (
    <section className="px-4 pb-20 pt-8 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Work"
          title="Selected work"
          description="A selection of product thinking, engineering and digital experiments across products, data and systems."
        />

        <div className="mt-12 space-y-12">
          {projectList.map((project, index) => (
            <Link key={project.slug} href={`/work/${project.slug}`} className="group block border-t border-[var(--border)] py-8 md:py-12">
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Project {String(index + 1).padStart(2, "0")}</p>
                  <h2 className="mt-4 text-3xl font-medium tracking-[-0.05em] text-[var(--foreground)] md:text-5xl">
                    {project.title}
                  </h2>
                  <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">{project.category}</p>
                  <p className="mt-5 max-w-md text-base leading-7 text-[var(--muted)]">{project.description}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)]">
                    View project
                    <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>

                <div className="overflow-hidden rounded-[28px] bg-[var(--surface-strong)] p-2 shadow-[var(--shadow-soft)]">
                  <Image
                    src={project.image}
                    alt={`${project.title} product concept`}
                    width={1200}
                    height={600}
                    className="h-[260px] w-full rounded-[20px] object-cover md:h-[420px]"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
