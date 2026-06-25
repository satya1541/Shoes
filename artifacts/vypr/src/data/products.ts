import shoeVoltRunner from "@assets/generated_images/shoe-volt-runner.png";
import shoeOceanSurge from "@assets/generated_images/shoe-ocean-surge.png";
import shoeHyperice from "@assets/generated_images/shoe-hyperice.png";
import shoeCrimsonGhost from "@assets/generated_images/shoe-crimson-ghost.png";
import shoeMidnightForce from "@assets/generated_images/shoe-midnight-force.png";
import shoeAeroStrike from "@assets/generated_images/shoe-aero-strike.png";
import shoeHyperIceLite from "@assets/generated_images/shoe-hyperice-lite.png";
import shoePortal from "@assets/generated_images/shoe-portal.png";
import shoeSpeedSequence from "@assets/generated_images/shoe-speed-sequence.png";

export interface Product {
  id: string;
  name: string;
  price: string;
  priceNum: number;
  img: string;
  colorFilters: Record<string, string>;
  tagline: string;
  description: string;
  colors: string[];
  sizes: number[];
  category: string;
  tag?: string;
}

const shadow = "drop-shadow(0 30px 80px rgba(0,0,0,0.7))";

export const PRODUCTS: Product[] = [
  {
    id: "volt-runner",
    name: "VOLT RUNNER",
    price: "₹15,999",
    priceNum: 15999,
    img: shoeVoltRunner,
    colorFilters: {
      "Electric Yellow": shadow,
      "Storm Purple": `sepia(1) hue-rotate(248deg) saturate(2.5) brightness(0.55) ${shadow}`,
    },
    tagline: "Born to Break Limits",
    description:
      "Forged in the underground. Engineered for the skyline. The Volt Runner defies gravity and expectations with relentless energy return and unapologetic style. Its dual-layer foam stack delivers explosive propulsion, while the reinforced woven upper locks you in at every stride.",
    colors: ["Electric Yellow", "Storm Purple"],
    sizes: [6, 7, 8, 9, 10, 11, 12],
    category: "Performance",
    tag: "BESTSELLER",
  },
  {
    id: "hyperice-lite",
    name: "HYPERICE LITE",
    price: "₹14,999",
    priceNum: 14999,
    img: shoeHyperIceLite,
    colorFilters: {
      "Arctic White": shadow,
      "Teal": `sepia(1) hue-rotate(130deg) saturate(3) brightness(0.85) ${shadow}`,
    },
    tagline: "Cold Precision",
    description:
      "Precision-engineered for the athlete who demands control. The HYPERICE LITE strips away everything unnecessary, leaving only the mechanical advantage. Arctic-white upper. Featherlight frame. Zero compromise.",
    colors: ["Arctic White", "Teal"],
    sizes: [6, 7, 8, 9, 10, 11, 12],
    category: "Lifestyle",
  },
  {
    id: "crimson-ghost",
    name: "CRIMSON GHOST",
    price: "₹18,499",
    priceNum: 18499,
    img: shoeCrimsonGhost,
    colorFilters: {
      "Blood Crimson": shadow,
      "Pearl Gold": `sepia(1) hue-rotate(15deg) saturate(2.8) brightness(1.12) ${shadow}`,
    },
    tagline: "Worn to Win",
    description:
      "A silhouette born from high-fashion editorials and the streets of Milan. The Crimson Ghost commands attention before you move. Deep crimson leather, aggressive stance, and a sole unit tuned for the runway and the ring.",
    colors: ["Blood Crimson", "Pearl Gold"],
    sizes: [7, 8, 9, 10, 11, 12],
    category: "Fashion",
    tag: "LIMITED",
  },
  {
    id: "aero-strike",
    name: "AERO STRIKE",
    price: "₹16,999",
    priceNum: 16999,
    img: shoeAeroStrike,
    colorFilters: {
      "Neon Green": shadow,
      "Royal Blue": `sepia(1) hue-rotate(195deg) saturate(3) brightness(0.78) ${shadow}`,
    },
    tagline: "Speed in Every Fibre",
    description:
      "The Aero Strike was designed in a wind tunnel and tested on the track. Its streamlined profile cuts through air resistance while the carbon-fibre shank transmits every ounce of force into forward motion.",
    colors: ["Neon Green", "Royal Blue"],
    sizes: [6, 7, 8, 9, 10, 11, 12],
    category: "Performance",
  },
  {
    id: "midnight-force",
    name: "MIDNIGHT FORCE",
    price: "₹13,999",
    priceNum: 13999,
    img: shoeMidnightForce,
    colorFilters: {
      "Phantom Indigo": `sepia(0.7) hue-rotate(220deg) saturate(2.2) brightness(0.55) ${shadow}`,
      "Silver": `saturate(0) brightness(1.55) contrast(0.82) ${shadow}`,
    },
    tagline: "Owns the Dark",
    description:
      "Silent. Ruthless. Unstoppable. The Midnight Force is the shoe you wear when you mean business. Reinforced upper, precision hardware, and a cushioning system that absorbs impact as silently as it propels you forward.",
    colors: ["Phantom Indigo", "Silver"],
    sizes: [6, 7, 8, 9, 10, 11, 12],
    category: "Lifestyle",
  },
  {
    id: "ocean-surge",
    name: "OCEAN SURGE",
    price: "₹19,999",
    priceNum: 19999,
    img: shoeOceanSurge,
    colorFilters: {
      "Deep Navy": shadow,
      "Electric Blue": `hue-rotate(25deg) saturate(2.5) brightness(1.15) ${shadow}`,
    },
    tagline: "Born of the Deep",
    description:
      "Inspired by the crushing pressure and raw power of the deep ocean. The Ocean Surge features a water-resistant upper treated with a hydrophobic nano-coating, and a sole compound engineered for grip on wet surfaces.",
    colors: ["Deep Navy", "Electric Blue"],
    sizes: [6, 7, 8, 9, 10, 11, 12],
    category: "Performance",
    tag: "NEW",
  },
  {
    id: "hyperice",
    name: "HYPERICE",
    price: "₹17,499",
    priceNum: 17499,
    img: shoeHyperice,
    colorFilters: {
      "Ice Blue": shadow,
      "Glacier White": `saturate(0.25) brightness(1.75) contrast(0.88) ${shadow}`,
    },
    tagline: "Subzero Performance",
    description:
      "The original HYPERICE — the shoe that started it all. Its signature ice-toned upper channels arctic precision into every movement. Built for those who run cold and perform hot, with a reactive foam core that never lets you slow down.",
    colors: ["Ice Blue", "Glacier White"],
    sizes: [6, 7, 8, 9, 10, 11, 12],
    category: "Performance",
  },
  {
    id: "portal",
    name: "PORTAL",
    price: "₹21,999",
    priceNum: 21999,
    img: shoePortal,
    colorFilters: {
      "Holographic Silver": shadow,
      "Neon Magenta": `sepia(1) hue-rotate(300deg) saturate(3.5) brightness(0.82) ${shadow}`,
    },
    tagline: "Step Into Another Dimension",
    description:
      "The PORTAL bends the rules of conventional footwear. Its multi-dimensional silhouette fuses streetwear attitude with performance engineering, featuring a gravity-defying midsole geometry and holographic accent panels that shift with every step.",
    colors: ["Holographic Silver", "Neon Magenta"],
    sizes: [7, 8, 9, 10, 11, 12],
    category: "Fashion",
    tag: "LIMITED",
  },
  {
    id: "speed-sequence",
    name: "SPEED SEQUENCE",
    price: "₹22,999",
    priceNum: 22999,
    img: shoeSpeedSequence,
    colorFilters: {
      "Signal Orange": shadow,
      "Arctic White": `saturate(0.15) brightness(1.82) contrast(0.85) ${shadow}`,
    },
    tagline: "The Algorithm of Speed",
    description:
      "Engineered for athletes who measure performance in milliseconds. The Speed Sequence features a sequenced propulsion plate that stores and releases energy at peak efficiency, paired with a precision-knit upper that adapts to your foot's natural flex pattern.",
    colors: ["Signal Orange", "Arctic White"],
    sizes: [6, 7, 8, 9, 10, 11, 12],
    category: "Performance",
    tag: "NEW",
  },
];

export const CATEGORIES = ["All", "Performance", "Lifestyle", "Fashion"];
