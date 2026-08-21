/**
 * Self-referencing canonical voor elke pagina.
 *
 * De site draait op één hostvariant: https://b-analyzed.com (zonder www).
 * Het TLS-certificaat dekt alleen die apex-variant, dus www is geen geldig
 * alternatief en mag nooit in een canonical of in schema-markup staan.
 * Zie SITE_URL in src/data/organisatie.ts.
 */

import { SITE_URL } from "@/data/organisatie";

/** Normaliseert een pad naar precies één vorm: kleine letters, met slash aan het eind. */
export function normalizePath(pathname: string) {
  const [path] = pathname.split(/[?#]/);
  const trimmed = path.replace(/\/+$/, "").toLowerCase();
  return trimmed === "" ? "/" : `${trimmed}/`;
}

/** Absolute canonical-URL voor een pad, altijd op de host die daadwerkelijk draait. */
export function canonicalUrl(pathname: string) {
  const path = normalizePath(pathname);
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}
