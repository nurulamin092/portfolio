export default function BackgroundGrid() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 opacity-[0.06]"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgb(255 255 255 / 0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgb(255 255 255 / 0.08) 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
      }}
    />
  );
}
