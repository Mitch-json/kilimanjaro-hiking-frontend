export default function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="bg-basalt pt-32 pb-16 text-mist">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        {eyebrow && (
          <p className="font-data text-xs uppercase tracking-[0.2em] text-sunrise">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg text-mist/70">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
