"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Database,
  Mail,
  MapPin,
  Network,
  Sparkles,
} from "lucide-react";

import { certifications } from "@/data/certifications";
import { experience } from "@/data/experience";
import { projectList } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { HeroVisual } from "@/components/hero-visual";
import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";

const expertise = [
  {
    title: "Software",
    description: "Modern web applications, APIs and full-stack systems shaped around real user needs.",
    icon: Code2,
  },
  {
    title: "Data",
    description: "Data flows, SQL analysis and meaningful product insights built for operational clarity.",
    icon: Database,
  },
  {
    title: "AI",
    description: "Exploration of intelligent products, learning systems and agentic workflows.",
    icon: BrainCircuit,
  },
  {
    title: "Networks",
    description: "Connectivity, telecom systems and infrastructure thinking for resilient digital services.",
    icon: Network,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  const featuredProjects = projectList.filter((project) => project.featured);

  return (
    <>
      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="px-4 pb-20 pt-10 md:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl flex-1">
              <div className="mb-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">
                <Sparkles size={12} className="text-[var(--accent)]" />
                AI & Big Data Engineering Student
              </div>

              <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.07em] text-[var(--foreground)] md:text-6xl lg:text-[5rem]">
                I build digital products at the intersection of software, data and technology.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-[var(--muted)] md:text-lg">
                I build web applications, data systems and digital experiences by combining software engineering,
                artificial intelligence and network technologies.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#work"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-medium text-[var(--background)] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  View my work
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="mailto:wattyounouss6@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-5 py-3 text-sm font-medium text-[var(--foreground)] transition-colors duration-200 hover:border-[var(--border-strong)]"
                >
                  Get in touch
                </Link>
              </div>
            </div>

            <div className="w-full max-w-md flex-shrink-0">
              <HeroVisual />
            </div>
          </div>
        </div>
      </motion.section>

      <section className="px-4 pb-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Introduction"
            title="Building things that are meant to be used."
            description="I’m interested in building useful digital products: web applications, data tools, intelligent systems and connected infrastructures. My approach blends technical curiosity, problem-solving and the discipline of turning ideas into functioning products."
          />
        </div>
      </section>

      <section id="work" className="px-4 pb-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Selected work"
            title="Selected work"
            description="A selection of things I’ve built, explored and shipped."
          />

          <div className="mt-10 space-y-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="What I build"
            title="What I build"
            description="I work across the layers that make a product useful — from user-facing interfaces to the systems that power them."
          />

          <div className="mt-10 divide-y divide-[var(--border)] border-t border-[var(--border)]">
            {expertise.map(({ title, description, icon: Icon }) => (
              <article key={title} className="grid gap-4 py-6 md:grid-cols-[120px_1fr] md:items-start md:py-8">
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--surface-strong)] text-[var(--foreground)]">
                    <Icon size={15} />
                  </span>
                  0{expertise.indexOf(expertise.find((item) => item.title === title)!)+1}
                </div>
                <div>
                  <h3 className="text-2xl font-medium tracking-[-0.04em] text-[var(--foreground)]">{title}</h3>
                  <p className="mt-2 max-w-2xl text-base leading-7 text-[var(--muted)]">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Tools I work with"
            title="Tools I work with"
            description="Focused on the stack that lets me move from idea to usable product with clarity."
          />

          <div className="mt-10 space-y-6 border-t border-[var(--border)]">
            {skillGroups.map((group) => (
              <div key={group.title} className="grid gap-3 py-6 md:grid-cols-[150px_1fr] md:items-start">
                <h3 className="text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">{group.title}</h3>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-base text-[var(--muted)]">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Journey"
            title="A technical path shaped by engineering and curiosity."
          />

          <div className="mt-10 space-y-8 border-t border-[var(--border)]">
            {experience.map((item, index) => (
              <div key={`${item.period}-${index}`} className="grid gap-4 py-6 md:grid-cols-[180px_1fr] md:items-start">
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">{item.period}</span>
                <div>
                  <h3 className="text-2xl font-medium tracking-[-0.04em] text-[var(--foreground)]">{item.title}</h3>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--muted)]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Certifications"
            title="Certifications and learning"
          />

          <div className="mt-10 border-t border-[var(--border)]">
            {certifications.map((certificate) => (
              <div key={certificate.title} className="flex flex-col gap-3 py-4 md:flex-row md:items-center md:justify-between">
                <h3 className="text-lg font-medium text-[var(--foreground)]">{certificate.title}</h3>
                <div className="flex items-center gap-3 text-sm text-[var(--muted)]">
                  <span>{certificate.platform}</span>
                  <span>•</span>
                  <span>{certificate.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-4 pb-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 border-t border-[var(--border)] py-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--muted)]">About</p>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.05em] text-[var(--foreground)] md:text-5xl">
                A little more about me.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted)] md:text-lg">
                I’m Younouss Watt, a Dakar-based engineering student building products at the intersection of software,
                data, AI and telecommunications. I care about turning ideas into useful systems and about creating tools
                that are thoughtful, elegant and genuinely usable.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-[var(--muted)]">
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-1.5">
                  <MapPin size={14} /> Dakar, Senegal
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-1.5">
                  <Code2 size={14} /> Software development
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-1.5">
                  <BrainCircuit size={14} /> AI & Data
                </span>
              </div>
            </div>

            <div className="w-full max-w-md justify-self-end">
              <Image
                src="/avatars/hero-avatar.svg"
                alt="Younouss Watt portrait illustration"
                width={640}
                height={720}
                className="h-[360px] w-full object-cover md:h-[420px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 pb-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="border-t border-[var(--border)] py-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--muted)]">Contact</p>
                <h2 className="mt-4 text-3xl font-medium tracking-[-0.05em] text-[var(--foreground)] md:text-5xl">
                  Let’s build something.
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-[var(--muted)] md:text-lg">
                  Have a project, opportunity or idea worth discussing?
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:wattyounouss6@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-medium text-[var(--background)] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <Mail size={16} />
                  Get in touch
                </a>
                <a
                  href="https://www.linkedin.com/in/younouss-watt-a03647349/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-5 py-3 text-sm font-medium text-[var(--foreground)] transition-colors duration-200 hover:border-[var(--border-strong)]"
                >
                  LinkedIn
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
