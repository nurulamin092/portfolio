interface Props {
  children: React.ReactNode;
}

export default function SectionGlow({ children }: Props) {
  return (
    <div className="relative overflow-hidden">
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-24
          -translate-x-1/2
          h-96
          w-96
          rounded-full
          bg-violet-600/10
          blur-[140px]
        "
      />

      {children}
    </div>
  );
}
