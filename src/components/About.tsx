import { profile } from "@/lib/data";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const stats = [
  { value: "6+", label: "Years in DevOps & infrastructure" },
  { value: "7", label: "Cloud & Kubernetes certifications" },
  { value: "50%", label: "Deployment frequency gained through automation" },
];

export function About() {
  return (
    <Section id="about" index="01" title="About me">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <Reveal delay={100}>
          <div className="space-y-4 leading-relaxed text-muted">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="pt-2 font-mono text-sm text-foreground">
              <span className="text-accent">📍</span> {profile.location}
            </p>
          </div>
        </Reveal>

        <div className="grid content-start gap-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={150 + i * 100}>
              <div className="card-glow flex items-center gap-5 rounded-xl border border-border bg-surface p-5">
                <span className="text-gradient font-mono text-3xl font-bold">
                  {stat.value}
                </span>
                <span className="text-sm text-muted">{stat.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
