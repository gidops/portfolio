import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-8 text-center font-mono text-xs text-muted">
        <p>
          <span className="text-accent">$</span> echo &quot;© {new Date().getFullYear()}{" "}
          {profile.name}&quot;
        </p>
        <p>Designed & built with Next.js + Tailwind CSS</p>
      </div>
    </footer>
  );
}
