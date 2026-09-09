import type { Metadata } from "next";
import Link from "next/link";
import { CursorGlow } from "@/components/CursorGlow";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { ThemeToggle } from "@/components/ThemeToggle";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "Case study: AATC Visitor Management System",
  description:
    "How I designed and built a security-first, event-driven visitor management platform for a diplomatic/banking environment.",
};

const meta = [
  { label: "Role", value: "Design, build & deployment" },
  { label: "Type", value: "Enterprise platform" },
  { label: "Timeline", value: "2023 — present" },
  { label: "Status", value: "Active development" },
];

const stack = [
  "TypeScript",
  "NestJS 11",
  "Next.js 16",
  "React 19",
  "PostgreSQL 16",
  "Prisma",
  "Tailwind v4",
  "Turborepo",
  "Docker",
  "Terraform / AWS",
];

const numbers = [
  { value: "20+", label: "Prisma data models across identity, domain & events" },
  { value: "3", label: "Locales — English, French, Arabic with full RTL" },
  { value: "4", label: "Shared packages: contracts, UI, tokens, config" },
  { value: "100%", label: "Typed end to end via shared zod contracts" },
];

const decisions = [
  {
    title: "Transactional outbox for domain events",
    body: "A use-case's state change and its domain event are written to an OutboxEvent table in one database transaction, then a polling relay republishes onto the in-process event bus. Events can never be lost or emitted for a rolled-back change — and because only the relay knows the transport, swapping to NATS later touches one component.",
  },
  {
    title: "Audit logging as an event consumer",
    body: "A single listener subscribed to every domain event writes an append-only audit log. Business code never calls the audit log directly, so coverage is automatic: any new feature that emits events is audited for free.",
  },
  {
    title: "Refresh-token rotation with family revocation",
    body: "Access tokens are short-lived JWTs; refresh tokens are opaque, stored only as SHA-256 hashes, and grouped into rotation families. If a previously-used refresh token is ever replayed — the signature of token theft — the entire family is revoked, ending the attacker's session and the victim's in one stroke.",
  },
  {
    title: "Permissions ride inside the token",
    body: "RBAC is enforced by a global guard reading permission claims (like visit:approve) straight from the JWT, so authorization checks cost zero database round-trips per request. A provider-agnostic CredentialAuthProvider interface keeps the door open for SSO/LDAP later.",
  },
  {
    title: "One contract layer, two consumers",
    body: "Request/response shapes live once as zod schemas in a shared package. The backend validates against them at runtime; the frontend imports the inferred types. The UI cannot render a state the backend doesn't define — status enums flow from the same source.",
  },
  {
    title: "Column-level encryption for PII",
    body: "Phone numbers, national IDs, and biometric references are encrypted with AES-256-GCM before they touch the database. Biometrics are stored only as external references — never raw templates.",
  },
  {
    title: "Errors and observability as a contract",
    body: "A global filter returns RFC-7807 problem responses, and every log line carries a correlation ID propagated from the x-correlation-id header — so one request can be traced across the whole stack from a single ID.",
  },
  {
    title: "A design system the apps can't drift from",
    body: "Components reference semantic tokens (bg-surface, text-fg, danger) — never the raw palette — so dark mode is a token swap. Every component has a Storybook story with an axe accessibility check, and building Storybook is a CI gate.",
  },
];

function ArchDiagram() {
  const box =
    "rounded-xl border border-border bg-surface px-4 py-3 text-center font-mono text-xs sm:text-sm";
  const arrow = "text-center font-mono text-accent";
  return (
    <div className="card-glow rounded-2xl border border-border bg-surface-raised/60 p-6 sm:p-8">
      <div className="grid gap-2">
        <div className={box}>
          <span className="text-accent">Next.js frontend</span>
          <span className="text-muted"> — App Router · next-intl (en/fr/ar + RTL) · TanStack Query</span>
        </div>
        <div className={arrow}>↓ typed via @vms/contracts (zod)</div>
        <div className={box}>
          <span className="text-accent">NestJS modular monolith</span>
          <span className="text-muted"> — JWT + RBAC guards · zod-validated env · RFC-7807 errors</span>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          <div>
            <div className={arrow}>↓ one transaction</div>
            <div className={box}>
              <span className="text-accent">PostgreSQL</span>
              <span className="text-muted"> — state + OutboxEvent · AES-256-GCM PII columns</span>
            </div>
          </div>
          <div>
            <div className={arrow}>↓ polling relay</div>
            <div className={box}>
              <span className="text-accent">Event bus</span>
              <span className="text-muted"> — audit listener · notifications · future consumers</span>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-5 text-center font-mono text-xs text-muted">
        Deployed with Docker → ECR → EC2, RDS Postgres, secrets via Terraform
      </p>
    </div>
  );
}

function H2({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <Reveal>
      <h2 className="mb-6 mt-20 flex items-center gap-4 text-2xl font-bold tracking-tight sm:text-3xl">
        <span className="font-mono text-lg text-accent">{index}.</span>
        {children}
        <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" aria-hidden />
      </h2>
    </Reveal>
  );
}

export default function CaseStudy() {
  return (
    <>
      <CursorGlow />
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link
            href="/#projects"
            className="group font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            <span className="me-2 inline-block transition-transform group-hover:-translate-x-1">
              ←
            </span>
            back to projects
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/" className="font-mono text-sm font-semibold">
              <span className="text-accent">~/</span>
              {profile.handle}
            </Link>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className="relative z-10 flex-1">
        {/* hero */}
        <section className="relative overflow-hidden">
          <div className="bg-grid absolute inset-0 -z-10" aria-hidden />
          <div
            aria-hidden
            className="animate-drift absolute -top-24 start-1/3 -z-10 h-[360px] w-[360px] rounded-full bg-accent/10 blur-[110px]"
          />
          <div className="mx-auto max-w-4xl px-6 pb-14 pt-20 sm:pt-24">
            <Reveal>
              <p className="font-mono text-sm uppercase tracking-[0.2em] text-accent">
                Case study
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                AATC <span className="text-gradient">Visitor Management</span>{" "}
                System
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
                A security-first, event-driven visitor management platform for
                a diplomatic/banking environment — built as a typed full-stack
                monorepo with three languages, RTL support, and an audit trail
                on every action.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {meta.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border border-border bg-surface p-4"
                  >
                    <dt className="font-mono text-xs uppercase tracking-wider text-muted">
                      {m.label}
                    </dt>
                    <dd className="mt-1.5 text-sm font-semibold">{m.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal delay={400}>
              <ul className="mt-6 flex flex-wrap gap-2">
                {stack.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-6 pb-24">
          <H2 index="01">The problem</H2>
          <Reveal>
            <div className="space-y-4 leading-relaxed text-muted">
              <p>
                Facilities that host diplomats and banking operations can&apos;t
                run visitors on spreadsheets and paper badges. Every entry
                needs an invitation trail, an approval chain, and an
                append-only record of who did what — and the system has to
                serve staff working in English, French, and Arabic, including
                full right-to-left layouts.
              </p>
              <p>
                The brief: a visitor management platform covering invitations,
                approvals, passes, access cards, gate events, alerts, and
                shift attendance — with security posture appropriate for the
                environment: role-based access control, encrypted PII,
                tamper-evident auditing, and traceable requests.
              </p>
            </div>
          </Reveal>

          <H2 index="02">Architecture at a glance</H2>
          <Reveal>
            <p className="mb-6 leading-relaxed text-muted">
              A Turborepo monorepo with two apps and four shared packages. The
              backend is a NestJS <strong className="text-foreground">modular monolith</strong> —
              monolith operational simplicity now, with module boundaries and
              an event-driven core that keep a future service split cheap.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <ArchDiagram />
          </Reveal>

          <H2 index="03">Key engineering decisions</H2>
          <div className="grid gap-5 sm:grid-cols-2">
            {decisions.map((d, i) => (
              <Reveal key={d.title} delay={80 + (i % 2) * 80}>
                <div className="card-glow h-full rounded-2xl border border-border bg-surface p-6">
                  <h3 className="font-semibold leading-snug">
                    <span className="me-2 font-mono text-accent">▸</span>
                    {d.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {d.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <H2 index="04">By the numbers</H2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {numbers.map((n, i) => (
              <Reveal key={n.label} delay={80 + i * 80}>
                <div className="card-glow h-full rounded-2xl border border-border bg-surface p-6 text-center">
                  <p className="text-gradient font-mono text-4xl font-bold">
                    {n.value}
                  </p>
                  <p className="mt-3 text-sm leading-snug text-muted">
                    {n.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <H2 index="05">Screenshots</H2>
          <Reveal>
            <div className="flex min-h-[220px] items-center justify-center rounded-2xl border border-dashed border-border bg-surface-raised/50 p-10 text-center">
              <p className="max-w-md font-mono text-sm text-muted">
                {"// Screenshots coming soon — the dashboard, invitation flow,"}
                <br />
                {"// and the Arabic RTL layout are worth seeing."}
              </p>
            </div>
          </Reveal>

          <H2 index="06">What I learned</H2>
          <Reveal>
            <ul className="space-y-3 leading-relaxed text-muted">
              <li className="flex gap-3">
                <span className="mt-0.5 text-accent" aria-hidden>▸</span>
                Reliability patterns like the outbox feel like overhead on day
                one and pay for themselves the first time a handler fails —
                the event is still there, waiting to be relayed.
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-accent" aria-hidden>▸</span>
                Internationalization is an architecture decision, not a
                translation task: logical CSS properties from the first
                component made RTL nearly free.
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-accent" aria-hidden>▸</span>
                A shared contract package turns frontend/backend integration
                bugs into compile errors — the cheapest place to catch them.
              </li>
            </ul>
          </Reveal>

          <Reveal>
            <div className="mt-20 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-border bg-surface p-8">
              <div>
                <h2 className="text-xl font-bold">
                  Want the deeper details?
                </h2>
                <p className="mt-2 text-sm text-muted">
                  Happy to walk through the architecture, the trade-offs, or
                  the code.
                </p>
              </div>
              <a
                href={`mailto:${profile.email}`}
                className="rounded-lg bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-semibold text-background shadow-lg shadow-accent/20 transition-all hover:shadow-accent/40"
              >
                Get in touch →
              </a>
            </div>
          </Reveal>
        </article>
      </main>
      <Footer />
    </>
  );
}
