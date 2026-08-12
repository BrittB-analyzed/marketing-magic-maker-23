import parketreus from "@/assets/logos/parketreus-logo.avif.asset.json";
import meubelOutlet from "@/assets/logos/meubeloutletweert-logo.avif.asset.json";
import greenEnergy from "@/assets/logos/Greenenergywoodpellets-logo.avif.asset.json";
import vanOfferbeek from "@/assets/logos/van-offerbeek-logo.avif.asset.json";
import vanToor from "@/assets/logos/vantoor-interiors.avif.asset.json";
import psychoCare from "@/assets/logos/psychocarevenlo.avif.asset.json";
import taxiVenlo from "@/assets/logos/venlo-taxi-logo.png.asset.json";
import vogelvoer from "@/assets/logos/vogelvoerkopenlogo_1.avif.asset.json";
import bruidsmode from "@/assets/logos/bruidsmode-outlet.jpg.asset.json";

export const CLIENT_LOGOS = [
  { src: parketreus.url, alt: "Logo Parketreus" },
  { src: meubelOutlet.url, alt: "Logo Meubel & Outlet Weert" },
  { src: greenEnergy.url, alt: "Logo Green Energy Woodpellets" },
  { src: bruidsmode.url, alt: "Logo De Bruidsmode Outlet" },
  { src: vogelvoer.url, alt: "Logo Vogelvoerkopen.nl" },
  { src: vanOfferbeek.url, alt: "Logo Van Offerbeek" },
  { src: vanToor.url, alt: "Logo Van Toor Interiors" },
  { src: psychoCare.url, alt: "Logo PsychoCare Venlo" },
  { src: taxiVenlo.url, alt: "Logo Taxi Venlo en Omstreken" },
];

export function LogoStrip({ className = "" }: { className?: string }) {
  return (
    <div className={`border-b border-brand-line bg-brand-canvas ${className}`}>
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-6 px-6 py-10">
        {CLIENT_LOGOS.map((l) => (
          <img
            key={l.src}
            src={l.src}
            alt={l.alt}
            loading="lazy"
            className="h-8 w-auto max-w-[150px] object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-10"
          />
        ))}
      </div>
    </div>
  );
}