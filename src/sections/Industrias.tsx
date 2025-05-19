import { cn } from "@/lib/utils";
import { Marquee } from "../components/Marquee";

const images = [
  {
    img: "/images/industrias/aeroespacial.webp",
    alt: "Industria Aeroespacial",
  },
  {
    img: "/images/industrias/automotriz.webp",
    alt: "Industria Automotriz",
  },
  {
    img: "/images/industrias/alimentaria.webp",
    alt: "Industria Alimentaria",
  },
  {
    img: "/images/industrias/farmaceutica.webp",
    alt: "Industria Farmacéutica",
  },
  {
    img: "/images/industrias/electronica.webp",
    alt: "Industria Electrónica",
  },
  {
    img: "/images/industrias/manufacturera.webp",
    alt: "Industria Manufactura",
  },
  {
    img: "/images/industrias/hidrico.webp",
    alt: "Industria Hidrica",
  },
  {
    img: "/images/industrias/hidrocarburos.webp",
    alt: "Industria Hidrocarburos",
  },
  {
    img: "/images/industrias/textil.webp",
    alt: "Industria Textil",
  },
  {
    img: "/images/industrias/metalmecanica.webp",
    alt: "Industria Metalmecánica",
  },
];

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee className="[--duration:60s]">
        {images.map((review) => (
          <figure
            key={review.alt}
            className={cn(
              "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl",
            )}
          >
            <img className="w-full h-full" alt="" src={review.img} />
          </figure>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
