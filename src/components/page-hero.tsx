export function PageHero({
  eyebrow,
  title,
  blurb,
  image,
}: {
  eyebrow: string;
  title: string;
  blurb: string;
  image: string;
}) {
  return (
    <section className="relative isolate overflow-hidden pt-28 pb-20">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
      <div className="surface-veil absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-5">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight sm:text-6xl">{title}</h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">{blurb}</p>
      </div>
    </section>
  );
}
