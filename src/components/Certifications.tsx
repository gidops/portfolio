/* eslint-disable @next/next/no-img-element */
import { certifications } from "@/lib/data";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Certifications() {
  if (certifications.length === 0) return null;

  return (
    <Section id="certifications" index="04" title="Certifications & badges">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <Reveal key={`${cert.name}-${cert.year}`} delay={100 + i * 80}>
            <article className="card-glow group flex h-full items-start gap-4 rounded-2xl border border-border bg-surface p-6 transition-transform duration-300 hover:-translate-y-1">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-raised">
                {cert.badgeImage ? (
                  <img
                    src={cert.badgeImage}
                    alt={`${cert.name} badge`}
                    className="h-11 w-11 object-contain"
                  />
                ) : (
                  <span className="text-2xl" aria-hidden>
                    {cert.icon ?? "🎖️"}
                  </span>
                )}
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold leading-snug transition-colors group-hover:text-accent">
                  {cert.name}
                </h3>
                <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
                <div className="mt-3 flex flex-wrap items-center gap-3 font-mono text-xs">
                  {cert.year && (
                    <span className="rounded-full border border-border px-2.5 py-0.5 text-muted">
                      {cert.year}
                    </span>
                  )}
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-accent transition-colors hover:text-accent-2"
                    >
                      Verify ↗
                    </a>
                  )}
                  {cert.certificateUrl && (
                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-accent transition-colors hover:text-accent-2"
                    >
                      Certificate ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
