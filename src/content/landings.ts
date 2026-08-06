export type LandingSection = { h: string; p: string };
export type LandingFaq = { q: string; a: string };
export type LandingLink = { label: string; to: string };

export type Landing = {
  eyebrow: string;
  h1: string;
  title: string;
  description: string;
  intro: string;
  bullets: string[];
  sections: LandingSection[];
  faq: LandingFaq[];
  related: LandingLink[];
};

import { LOCAL_LANDINGS } from "./landings-local";
import { TOPICAL_LANDINGS } from "./landings-topical";

export const LANDINGS: Record<string, Landing> = {
  ...LOCAL_LANDINGS,
  ...TOPICAL_LANDINGS,
};
