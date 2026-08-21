import chatgpt from "@/assets/ai/chatgpt.png.asset.json";
import claude from "@/assets/ai/claude.svg";
import gemini from "@/assets/ai/gemini.svg";
import google from "@/assets/ai/google.svg";
import perplexity from "@/assets/ai/perplexity.svg";
import grok from "@/assets/ai/grok.svg";

/**
 * `wordmark: true` betekent dat de merknaam al in het beeldmerk zit. Staat hij
 * er niet in, dan zetten we de naam er in onze eigen typografie naast, zodat
 * elke regel logo's leesbaar is en niet uit losse pictogrammen bestaat.
 *
 * Google is bewust een lokale SVG en geen PNG: de eerdere PNG-pointer wees naar
 * een CDN-pad dat op de productiehost niet bestond, waardoor het logo als
 * gebroken afbeelding met alt-tekst werd getoond.
 */
export const AI_ENGINES = [
  { name: "Google", src: google, href: "https://www.google.com/", wordmark: false },
  { name: "ChatGPT", src: chatgpt.url, href: "https://chatgpt.com/", wordmark: false },
  { name: "Gemini", src: gemini, href: "https://gemini.google.com/", wordmark: true },
  { name: "Perplexity", src: perplexity, href: "https://www.perplexity.ai/", wordmark: true },
  { name: "Claude", src: claude, href: "https://claude.ai/", wordmark: false },
  { name: "Grok", src: grok, href: "https://grok.com/", wordmark: true },
] as const;

export function aiHref(name: string) {
  const key = name.toLowerCase();
  return AI_ENGINES.find((e) => key.includes(e.name.toLowerCase()))?.href;
}

export function aiLogo(name: string) {
  const key = name.toLowerCase();
  return AI_ENGINES.find((e) => key.includes(e.name.toLowerCase()))?.src;
}

export function aiEngine(name: string) {
  const key = name.toLowerCase();
  return AI_ENGINES.find((e) => key.includes(e.name.toLowerCase()));
}

export function AiEngineLogos({
  label = "We monitoren je zichtbaarheid in:",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap items-center gap-x-8 gap-y-4 ${className}`}>
      {label ? (
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-muted">
          {label}
        </span>
      ) : null}
      {AI_ENGINES.map((e) => (
        <a
          key={e.name}
          href={e.href}
          target="_blank"
          rel="noopener noreferrer nofollow"
          aria-label={`Ga naar ${e.name}`}
          className="group flex h-8 items-center gap-2 opacity-75 transition hover:opacity-100"
        >
          <img
            src={e.src}
            alt={e.wordmark ? `Logo ${e.name}` : ""}
            aria-hidden={e.wordmark ? undefined : true}
            loading="lazy"
            className="max-h-6 w-auto max-w-[112px] object-contain"
          />
          {!e.wordmark && (
            <span className="text-base font-semibold tracking-tight text-brand-ink">{e.name}</span>
          )}
        </a>
      ))}
    </div>
  );
}
