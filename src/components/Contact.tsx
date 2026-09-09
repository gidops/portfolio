import { profile } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-[420px] bg-[radial-gradient(ellipse_60%_80%_at_50%_100%,var(--contact-glow),transparent)]"
      />
      <div className="mx-auto max-w-3xl px-6 py-28 text-center">
        <Reveal>
          <p className="font-mono text-sm text-accent">05. What&apos;s next?</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s build something{" "}
            <span className="text-gradient">great together</span>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted">
            I&apos;m open to interesting projects and opportunities. Whether
            you have a question or just want to say hi, my inbox is always
            open.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <a
            href={`mailto:${profile.email}`}
            className="group mt-10 inline-block rounded-lg bg-gradient-to-r from-accent to-accent-2 px-8 py-4 text-sm font-semibold text-background shadow-xl shadow-accent/20 transition-all hover:shadow-accent/40"
          >
            Say hello
            <span className="ms-2 inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </Reveal>
        <Reveal delay={400}>
          <div className="mt-12 flex justify-center gap-8 font-mono text-sm">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="link-sweep text-muted transition-colors hover:text-accent"
            >
              GitHub ↗
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="link-sweep text-muted transition-colors hover:text-accent"
            >
              LinkedIn ↗
            </a>
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="link-sweep text-muted transition-colors hover:text-accent"
              >
                Résumé ↗
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
