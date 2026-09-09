import Link from "next/link";
import { projects, type Project } from "@/lib/data";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

function ProjectLinks({ project }: { project: Project }) {
  if (!project.link && !project.repo) return null;
  return (
    <div className="flex gap-4 font-mono text-sm">
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="text-accent transition-colors hover:text-accent-2"
        >
          Live ↗
        </a>
      )}
      {project.repo && (
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="text-accent transition-colors hover:text-accent-2"
        >
          Code ↗
        </a>
      )}
    </div>
  );
}

function TechTags({ tech }: { tech: string[] }) {
  return (
    <ul className="mt-6 flex flex-wrap gap-2">
      {tech.map((item) => (
        <li
          key={item}
          className="rounded-full border border-border bg-background/60 px-3 py-1 font-mono text-xs text-muted transition-colors hover:border-accent/50 hover:text-accent"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <article className="card-glow relative overflow-hidden rounded-2xl border border-accent/25 bg-surface p-8 sm:p-10">
      <div
        aria-hidden
        className="absolute -end-24 -top-24 h-64 w-64 rounded-full bg-accent/10 blur-[90px]"
      />
      <div className="relative">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            ★ Featured project
          </p>
          <ProjectLinks project={project} />
        </div>
        <h3 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-4 max-w-3xl leading-relaxed text-muted">
          {project.description}
        </p>
        <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2.5 text-sm text-muted">
              <span className="mt-0.5 text-accent" aria-hidden>
                ▸
              </span>
              {highlight}
            </li>
          ))}
        </ul>
        <TechTags tech={project.tech} />
        {project.caseStudyUrl && (
          <Link
            href={project.caseStudyUrl}
            className="group/cs mt-7 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent to-accent-2 px-5 py-2.5 text-sm font-semibold text-background shadow-lg shadow-accent/20 transition-all hover:shadow-accent/40"
          >
            Read the full case study
            <span className="transition-transform group-hover/cs:translate-x-1">
              →
            </span>
          </Link>
        )}
      </div>
    </article>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card-glow group flex h-full flex-col rounded-2xl border border-border bg-surface p-7 transition-transform duration-300 hover:-translate-y-1.5">
      <div className="flex items-start justify-between gap-3">
        <span
          className="font-mono text-2xl text-accent transition-transform duration-300 group-hover:scale-110"
          aria-hidden
        >
          {"{ }"}
        </span>
        <ProjectLinks project={project} />
      </div>
      <h3 className="mt-5 text-lg font-semibold transition-colors group-hover:text-accent">
        {project.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>
      <TechTags tech={project.tech} />
    </article>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section id="projects" index="02" title="Projects">
      <div className="space-y-6">
        {featured.map((project) => (
          <Reveal key={project.title} delay={100}>
            <FeaturedProject project={project} />
          </Reveal>
        ))}
        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((project, i) => (
            <Reveal key={project.title} delay={150 + i * 100}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
