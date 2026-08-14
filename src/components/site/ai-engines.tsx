import chatgpt from "@/assets/ai/chatgpt.png.asset.json";
import claude from "@/assets/ai/claude.svg";
import gemini from "@/assets/ai/gemini.svg";
import perplexity from "@/assets/ai/perplexity.svg";
import grok from "@/assets/ai/grok.svg";

export const AI_ENGINES = [
  { name: "ChatGPT", src: chatgpt.url },
  { name: "Gemini", src: gemini },
  { name: "Perplexity", src: perplexity },
  { name: "Claude", src: claude },
  { name: "Grok", src: grok },
] as const;

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
        <img
          key={e.name}
          src={e.src}
          alt={`Logo ${e.name}`}
          loading="lazy"
          className="h-6 w-auto max-w-[120px] object-contain opacity-75 transition hover:opacity-100 sm:h-7"
        />
      ))}
    </div>
  );
}