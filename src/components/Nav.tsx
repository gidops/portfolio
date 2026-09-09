import { profile } from "@/lib/data";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#about", label: "About", index: "01" },
  { href: "#projects", label: "Projects", index: "02" },
  { href: "#skills", label: "Skills", index: "03" },
  { href: "#certifications", label: "Certs", index: "04" },
  { href: "#contact", label: "Contact", index: "05" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="group font-mono text-sm font-semibold tracking-tight"
        >
          <span className="text-accent">~/</span>
          <span className="transition-colors group-hover:text-accent">
            {profile.handle}
          </span>
          <span className="animate-blink text-accent">_</span>
        </a>
        <ul className="flex items-center gap-5 text-sm sm:gap-8">
          {links.map((link) => (
            <li key={link.href} className="hidden sm:block">
              <a
                href={link.href}
                className="link-sweep text-muted transition-colors hover:text-foreground"
              >
                <span className="me-1.5 font-mono text-xs text-accent">
                  {link.index}.
                </span>
                {link.label}
              </a>
            </li>
          ))}
          {links.map((link) => (
            <li key={`m-${link.href}`} className="sm:hidden">
              <a
                href={link.href}
                className="text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}
