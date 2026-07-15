type Props = {
  badge?: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ badge, title, description }: Props) {
  return (
    <div className="max-w-2xl">
      {badge && (
        <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-sm text-violet-400">
          {badge}
        </span>
      )}

      <h2 className="mt-5 text-4xl font-bold tracking-tight lg:text-5xl">
        {title}
      </h2>

      {description && <p className="mt-4 text-slate-400">{description}</p>}
    </div>
  );
}
