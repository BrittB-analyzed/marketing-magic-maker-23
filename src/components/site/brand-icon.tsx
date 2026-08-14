import type { SVGProps } from "react";

/**
 * Huisstijl-iconenset: lijniconen in merkrood op een witte tegel met rode rand.
 */
export type BrandIconName =
  | "geo"
  | "seo"
  | "keywords"
  | "kennismaking"
  | "audit"
  | "technisch"
  | "cro"
  | "content"
  | "uitvoering"
  | "monitoring"
  | "linkbuilding"
  | "groei"
  | "strategie"
  | "grafiek";

type PathProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const GLYPHS: Record<BrandIconName, JSX.Element> = {
  geo: (
    <>
      <path d="M6 10h24a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H16l-6 5v-5H6a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3Z" transform="translate(4 3)" />
      <path d="M17 20h10M17 25h6" />
      <path d="M38 8l1.4 3.1L42.5 12.5 39.4 14 38 17l-1.4-3-3.1-1.5 3.1-1.4L38 8Z" />
    </>
  ),
  seo: (
    <>
      <circle cx="21" cy="21" r="13" />
      <path d="M31 31l10 10" />
      <path d="M14 25l5-6 4 4 6-8" />
      <path d="M29 15h4v4" />
    </>
  ),
  keywords: (
    <>
      <path d="M10 5h17l8 8v18" />
      <path d="M10 5v30" />
      <path d="M27 5v8h8" />
      <path d="M15 13h8M15 19h12M15 25h8" />
      <circle cx="28" cy="33" r="8" />
      <path d="M34 39l6 6" />
      <path d="M25 33h.01M28 33h.01M31 33h.01" />
    </>
  ),
  kennismaking: (
    <>
      <path d="M4 21l7-7 6 5 5-2 5 4" />
      <path d="M44 21l-7-7-6 5" />
      <path d="M22 17l6 6-3 3-4-3" />
      <path d="M25 26l4 4M29 24l4 4M33 22l4 4" />
      <path d="M8 25l6 6M12 21l6 6" />
    </>
  ),
  audit: (
    <>
      <circle cx="22" cy="19" r="12" />
      <path d="M22 19V7a12 12 0 0 1 12 12H22Z" />
      <path d="M31 28l10 10" />
      <path d="M8 42v-8M14 42v-12M20 42v-6M26 42v-10" />
    </>
  ),
  technisch: (
    <>
      <circle cx="24" cy="24" r="9" />
      <path d="M20 20l-4 4 4 4M28 20l4 4-4 4" />
      <path d="M24 5v5M24 38v5M5 24h5M38 24h5M11 11l3.5 3.5M33.5 33.5 37 37M37 11l-3.5 3.5M14.5 33.5 11 37" />
    </>
  ),
  cro: (
    <>
      <path d="M8 12h32l-12 14v12l-8 4V26L8 12Z" />
      <path d="M17 5v3M24 4v4M31 5v3" />
      <path d="M31 33l7 7M38 40l-4 .5.5-4" />
    </>
  ),
  content: (
    <>
      <path d="M11 37l4-12L33 8l6 6-17 18-11 5Z" />
      <path d="M15 25l6 6" />
      <path d="M40 22l1.5 3.5M34 42l1-3.5M44 34l-3.5-1" />
    </>
  ),
  uitvoering: (
    <>
      <circle cx="24" cy="24" r="8" />
      <path d="M24 4v6M24 38v6M4 24h6M38 24h6M10 10l4 4M34 34l4 4M38 10l-4 4M14 34l-4 4" />
      <circle cx="24" cy="24" r="15" strokeDasharray="3 4" />
    </>
  ),
  monitoring: (
    <>
      <circle cx="24" cy="24" r="18" />
      <path d="M24 24l9-9" />
      <circle cx="24" cy="24" r="2.5" />
      <path d="M11 30a15 15 0 0 1 26 0" strokeDasharray="2 5" />
    </>
  ),
  linkbuilding: (
    <>
      <path d="M22 14l4-4a7 7 0 0 1 10 10l-4 4" />
      <path d="M26 34l-4 4a7 7 0 0 1-10-10l4-4" />
      <path d="M19 29l10-10" />
      <path d="M9 40h.01M14 42h.01M19 40h.01" />
    </>
  ),
  groei: (
    <>
      <path d="M6 42V8M6 42h36" />
      <path d="M12 34l8-8 6 5 10-13" />
      <path d="M30 18h6v6" />
      <path d="M14 12h6M14 18h3" />
    </>
  ),
  strategie: (
    <>
      <circle cx="24" cy="24" r="17" />
      <circle cx="24" cy="24" r="10" />
      <circle cx="24" cy="24" r="3" />
      <path d="M24 3v6M24 39v6M3 24h6M39 24h6" />
    </>
  ),
  grafiek: (
    <>
      <rect x="6" y="9" width="36" height="30" rx="3" />
      <path d="M12 31l8-8 5 4 11-12" />
      <circle cx="20" cy="23" r="1.6" />
      <circle cx="25" cy="27" r="1.6" />
    </>
  ),
};

export function BrandGlyph({ name, ...props }: { name: BrandIconName } & PathProps) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      {GLYPHS[name]}
    </svg>
  );
}

/** Icoon in een witte tegel met rode rand — de standaard toepassing op de site. */
export function BrandIcon({
  name,
  size = "md",
  className = "",
}: {
  name: BrandIconName;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const tile =
    size === "sm" ? "size-10 rounded-xl" : size === "lg" ? "size-16 rounded-2xl" : "size-14 rounded-2xl";
  const glyph = size === "sm" ? "size-5" : size === "lg" ? "size-9" : "size-7";
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center border border-brand-red/35 bg-white text-brand-red ${tile} ${className}`}
    >
      <BrandGlyph name={name} className={glyph} />
    </span>
  );
}