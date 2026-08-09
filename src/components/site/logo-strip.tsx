const LOGOS = [
  "Parketreus",
  "Meubel & Outlet Weert",
  "Sleep Factory",
  "DN Research",
  "Jana Nails",
  "Van Daken",
];

export function LogoStrip({ className = "" }: { className?: string }) {
  return (
    <div className={`border-b border-brand-line bg-brand-canvas ${className}`}>
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-5 px-6 py-10">
        {LOGOS.map((l) => (
          <span
            key={l}
            className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-muted/60"
          >
            {l}
          </span>
        ))}
      </div>
    </div>
  );
}