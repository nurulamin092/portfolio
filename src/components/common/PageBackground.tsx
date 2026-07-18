interface Props {
  children: React.ReactNode;
}

export default function PageBackground({ children }: Props) {
  return (
    <div className="relative isolate min-h-screen overflow-x-hidden bg-background">
      {/* Violet Glow */}
      <div
        className="
          pointer-events-none
          absolute
        -left-40
          -top-24
        h-128
         w-lg
          rounded-full
          bg-violet-600/15
          blur-[180px]
        "
      />

      {/* Blue Glow */}
      <div
        className="
          pointer-events-none
          absolute
         -right-48
         top-1/3
         h-144
          w-xl
          rounded-full
          bg-sky-500/10
          blur-[200px]
        "
      />

      {/* Center Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
         bottom-40
          h-112
          w-md
          -translate-x-1/2
          rounded-full
          bg-fuchsia-500/10
          blur-[180px]
        "
      />
      <div
        className="
    pointer-events-none
    absolute
    inset-0
  opacity-[0.02]
    [background-image:
      linear-gradient(to_right,#ffffff_1px,transparent_1px),
      linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
   bg-size-[64px_64px]
  "
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
