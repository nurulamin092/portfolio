type Props = {
  badge?: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ badge, title, description }: Props) {
  return (
    <div className="mx-auto mb-20 max-w-3xl text-center">
      {badge && (
        <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1 text-sm font-medium uppercase tracking-widest text-violet-400">
          {badge}
        </span>
      )}

      <h2 className="mt-6 text-4xl font-bold tracking-tight lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
