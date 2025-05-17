import { Marquee } from "@/components/Marquee";

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

const firstRow = images.slice(0, images.length / 2);
const secondRow = images.slice(images.length / 2);

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee className="[--duration:60s]">
        {firstRow.map((item) => (
          <div className="md:h-[400px] h-[250px] cursor-pointer p-4 transition-all duration-300 rounded-2xl overflow-hidden">
            <img
              className="h-full w-full object-contain rounded-2xl scale-105"
              alt={item.alt}
              src={item.img}
            />
          </div>
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:60s]">
        {secondRow.map((item) => (
          <div className="md:h-[400px] h-[250px] cursor-pointer p-4 transition-all duration-300 rounded-2xl overflow-hidden">
            <img
              className="h-full w-full object-contain rounded-2xl scale-105"
              alt={item.alt}
              src={item.img}
            />
          </div>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
