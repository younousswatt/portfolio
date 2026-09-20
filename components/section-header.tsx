type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--muted)]">{eyebrow}</p>
      ) : null}
      <h2 className="mt-4 text-3xl font-medium tracking-[-0.05em] text-[var(--foreground)] md:text-5xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-base leading-7 text-[var(--muted)] md:text-lg">{description}</p> : null}
    </div>
  );
}
