import chatgpt from "@/assets/ai/chatgpt.png.asset.json";
import claude from "@/assets/ai/claude.svg";
import gemini from "@/assets/ai/gemini.svg";
import perplexity from "@/assets/ai/perplexity.svg";
import grok from "@/assets/ai/grok.svg";

export const AI_ENGINES = [
  { name: "ChatGPT", src: chatgpt.url, href: "https://chatgpt.com/" },
  { name: "Gemini", src: gemini, href: "https://gemini.google.com/" },
  { name: "Perplexity", src: perplexity, href: "https://www.perplexity.ai/" },
  { name: "Claude", src: claude, href: "https://claude.ai/" },
  { name: "Grok", src: grok, href: "https://grok.com/" },
] as const;

export function aiHref(name: string) {
  const key = name.toLowerCase();
  return AI_ENGINES.find((e) => key.includes(e.name.toLowerCase()))?.href;
}

export function aiLogo(name: string) {
  const key = name.toLowerCase();
  return AI_ENGINES.find((e) => key.includes(e.name.toLowerCase()))?.src;
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
          className="flex h-8 w-[120px] items-center justify-center"
        >
          <img
            src={e.src}
            alt={`Logo ${e.name}`}
            loading="lazy"
            className="max-h-7 w-auto max-w-[120px] object-contain opacity-75 transition hover:opacity-100"
          />
        </a>
      ))}
    </div>
  );
}