import Image from "next/image";

import type { Project } from "@/data/projects";

type ProjectVisualProps = {
  project: Project;
  className?: string;
  priority?: boolean;
};

export function ProjectVisual({ project, className = "", priority = false }: ProjectVisualProps) {
  const src = project.image || "/projects/fallback.svg";

  return (
    <div className={`relative overflow-hidden rounded-[24px] bg-[var(--surface-strong)] ${className}`}>
      <Image
        src={src}
        alt={`${project.title} product visualization`}
        width={1400}
        height={900}
        priority={priority}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
