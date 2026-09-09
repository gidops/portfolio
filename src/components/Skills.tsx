import { education, experience, skillGroups } from "@/lib/data";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section id="skills" index="03" title="Skills & experience">
      <div className="grid gap-14 lg:grid-cols-2">
        <div className="space-y-8">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={100 + i * 80}>
              <div>
                <h3 className="mb-3.5 font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent">
                  <span className="text-muted">{"<"}</span>
                  {group.label}
                  <span className="text-muted">{" />"}</span>
                </h3>
                <ul className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="cursor-default rounded-lg border border-border bg-surface px-3.5 py-2 text-sm text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:text-foreground hover:shadow-lg hover:shadow-accent/10"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="space-y-10">
          <ol className="relative space-y-10 border-s border-border ps-8">
          {experience.map((job, i) => (
            <Reveal key={`${job.company}-${job.period}`} delay={150 + i * 120}>
              <li className="relative">
                <span
                  className="absolute -start-[2.28rem] top-1 flex h-3 w-3 items-center justify-center"
                  aria-hidden
                >
                  <span className="animate-ping-soft absolute h-3 w-3 rounded-full bg-accent/60" />
                  <span className="relative h-3 w-3 rounded-full border-2 border-accent bg-background" />
                </span>
                <p className="inline-block rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-accent">
                  {job.period}
                </p>
                <h3 className="mt-3 text-lg font-semibold">
                  {job.role}{" "}
                  <span className="font-normal text-muted">· {job.company}</span>
                </h3>
                <p className="mt-2 leading-relaxed text-muted">
                  {job.description}
                </p>
              </li>
            </Reveal>
          ))}
          </ol>

          <Reveal delay={200}>
            <div>
              <h3 className="mb-4 font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent">
                <span className="text-muted">{"<"}</span>
                Education
                <span className="text-muted">{" />"}</span>
              </h3>
              <ul className="space-y-3">
                {education.map((entry) => (
                  <li
                    key={entry.degree}
                    className="card-glow flex flex-wrap items-baseline justify-between gap-2 rounded-xl border border-border bg-surface px-5 py-4"
                  >
                    <div>
                      <p className="font-semibold">{entry.degree}</p>
                      <p className="mt-0.5 text-sm text-muted">{entry.school}</p>
                    </div>
                    <span className="font-mono text-xs text-accent">
                      {entry.period}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
