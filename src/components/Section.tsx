import { Reveal } from "./Reveal";

export function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <Reveal>
        <h2 className="mb-10 flex items-center gap-4 text-3xl font-bold tracking-tight">
          <span className="font-mono text-xl text-accent">{index}.</span>
          {title}
          <span
            className="h-px flex-1 bg-gradient-to-r from-border to-transparent"
            aria-hidden
          />
        </h2>
      </Reveal>
      {children}
    </section>
  );
}
