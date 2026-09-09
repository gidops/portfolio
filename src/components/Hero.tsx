import { profile } from "@/lib/data";
import { Reveal } from "./Reveal";

function TerminalCard() {
  const firstName = profile.handle;
  return (
    <div className="card-glow rounded-xl border border-[#1f1f2b] bg-[#0e0e14] shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 border-b border-[#1f1f2b] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ms-3 font-mono text-xs text-[#8f8fa3]">
          {firstName}@dev — zsh
        </span>
      </div>
      <div className="space-y-3 p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
        <div>
          <span className="text-[#34d399]">$</span>{" "}
          <span className="text-[#8f8fa3]">whoami</span>
          <p className="text-[#e8e8ee]">
            {firstName} <span className="text-[#8f8fa3]">·</span>{" "}
            {profile.role.toLowerCase()}
          </p>
        </div>
        <div>
          <span className="text-[#34d399]">$</span>{" "}
          <span className="text-[#8f8fa3]">cat stack.txt</span>
          <p className="text-[#e8e8ee]">
            AWS <span className="text-[#8f8fa3]">·</span> Kubernetes{" "}
            <span className="text-[#8f8fa3]">·</span> Terraform{" "}
            <span className="text-[#8f8fa3]">·</span> Jenkins
          </p>
        </div>
        <div>
          <span className="text-[#34d399]">$</span>{" "}
          <span className="text-[#8f8fa3]">./current_focus.sh</span>
          <p className="text-[#22d3ee]">
            ▸ automating the path from commit to production
          </p>
        </div>
        <div>
          <span className="text-[#34d399]">$</span>{" "}
          <span className="animate-blink text-[#e8e8ee]">▊</span>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* atmosphere */}
      <div className="bg-grid absolute inset-0 -z-10" aria-hidden />
      <div
        aria-hidden
        className="animate-drift absolute -top-32 start-1/4 -z-10 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[120px]"
      />
      <div
        aria-hidden
        className="animate-drift-slow absolute top-40 end-0 -z-10 h-[360px] w-[360px] rounded-full bg-accent-2/10 blur-[120px]"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-24 sm:pt-32 lg:grid-cols-[1.15fr_1fr] lg:pb-32">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-4 py-1.5 text-xs text-muted">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping-soft absolute h-2 w-2 rounded-full bg-accent" />
                <span className="relative h-2 w-2 rounded-full bg-accent" />
              </span>
              Available for opportunities
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-7 text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
              <span className="text-gradient">{profile.name.split(" ")[0]}</span>
              <br />
              {profile.name.split(" ").slice(1).join(" ")}
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-5 font-mono text-base text-accent sm:text-lg">
              {"// "}
              {profile.role}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              {profile.tagline}
            </p>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group rounded-lg bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-semibold text-background shadow-lg shadow-accent/20 transition-all hover:shadow-accent/40"
              >
                View my work
                <span className="ms-2 inline-block transition-transform group-hover:translate-y-0.5">
                  ↓
                </span>
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-border bg-surface/60 px-6 py-3 text-sm font-semibold backdrop-blur transition-colors hover:border-accent/60 hover:text-accent"
              >
                Get in touch
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={250} className="hidden lg:block">
          <TerminalCard />
        </Reveal>
      </div>
    </section>
  );
}
