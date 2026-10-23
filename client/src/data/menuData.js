/* ==================================================================
   MENU DATA — edit drinks, prices, photos and categories here.
   `image` points at a file in /public/images/ (drop your own there).
   `color` picks the SVG cup palette used if that photo fails to load.
================================================================== */

export const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "milk-tea", label: "Milk Tea" },
  { id: "fruit-tea", label: "Fruit Tea" },
  { id: "matcha", label: "Matcha" },
  { id: "coffee", label: "Coffee" },
  { id: "cheese-cream", label: "Cheese Cream" },
];

export const DRINKS = [
  // ── Milk Tea ─────────────────────────────────────────────────────
  {
    id: "brown-sugar-pearl",
    name: "Brown Sugar Pearl Milk Tea",
    category: "milk-tea",
    description: "Slow-cooked brown sugar syrup swirled through creamy milk and warm, chewy pearls.",
    price: 6.5,
    bestSeller: true,
    color: "brownsugar",
    image: "/images/brown-sugar-pearl.jpg",
  },
  {
    id: "classic-milk-tea",
    name: "Classic Milk Tea",
    category: "milk-tea",
    description: "Black tea brewed fresh, shaken with milk and a whisper of vanilla.",
    price: 5.5,
    bestSeller: false,
    color: "classic",
    image: "/images/classic-milk-tea.jpg",
  },
  {
    id: "taro-cloud",
    name: "Taro Cloud",
    category: "milk-tea",
    description: "Velvety taro purée blended with milk and topped with a salty-sweet cream cloud.",
    price: 6.25,
    bestSeller: true,
    color: "taro",
    image: "/images/taro-cloud.jpg",
  },
  {
    id: "jasmine-milk-green",
    name: "Jasmine Milk Green Tea",
    category: "milk-tea",
    description: "Fragrant jasmine green tea softened with milk and a drizzle of wildflower honey.",
    price: 5.75,
    bestSeller: false,
    color: "matcha",
    image: "/images/jasmine-milk-green.jpg",
  },
  {
    id: "thai-milk-tea",
    name: "Thai Milk Tea",
    category: "milk-tea",
    description: "Bold spiced Thai tea, sweet and creamy with a sunset-orange glow.",
    price: 6.0,
    bestSeller: false,
    color: "thai",
    image: "/images/thai-milk-tea.jpg",
  },

  // ── Fruit Tea ────────────────────────────────────────────────────
  {
    id: "mango-passionfruit",
    name: "Mango Passionfruit Tea",
    category: "fruit-tea",
    description: "Golden mango and tangy passionfruit over jasmine tea with popping boba.",
    price: 6.75,
    bestSeller: true,
    color: "mango",
    image: "/images/mango-passionfruit.jpg",
  },
  {
    id: "strawberry-hibiscus",
    name: "Strawberry Hibiscus Cooler",
    category: "fruit-tea",
    description: "Muddled strawberries and hibiscus, bright and icy with real fruit bits.",
    price: 6.5,
    bestSeller: false,
    color: "strawberry",
    image: "/images/strawberry-hibiscus.jpg",
  },
  {
    id: "peach-oolong",
    name: "Peach Oolong Tea",
    category: "fruit-tea",
    description: "Roasted oolong kissed with white peach and a squeeze of fresh lemon.",
    price: 6.25,
    bestSeller: false,
    color: "peach",
    image: "/images/peach-oolong.jpg",
  },
  {
    id: "lychee-rose",
    name: "Lychee Rose Green Tea",
    category: "fruit-tea",
    description: "Juicy lychee and a hint of rose over chilled green tea. Tastes like a garden.",
    price: 6.5,
    bestSeller: false,
    color: "strawberry",
    image: "/images/lychee-rose.jpg",
  },

  // ── Matcha ───────────────────────────────────────────────────────
  {
    id: "ceremonial-matcha-latte",
    name: "Ceremonial Matcha Latte",
    category: "matcha",
    description: "Stone-ground ceremonial matcha whisked into silky oat milk. Grassy and sweet.",
    price: 6.95,
    bestSeller: true,
    color: "matcha",
    image: "/images/ceremonial-matcha.jpg",
  },
  {
    id: "matcha-cloud",
    name: "Matcha Cloud",
    category: "matcha",
    description: "Earthy matcha under a thick layer of sweet cheese foam and a dusting of powder.",
    price: 7.25,
    bestSeller: false,
    color: "matcha",
    image: "/images/matcha-cloud.jpg",
  },
  {
    id: "strawberry-matcha",
    name: "Strawberry Matcha",
    category: "matcha",
    description: "Layers of strawberry purée, fresh milk and vivid matcha. Stir before you sip.",
    price: 7.25,
    bestSeller: false,
    color: "strawberry",
    image: "/images/strawberry-matcha.jpg",
  },
  {
    id: "matcha-mango",
    name: "Matcha Mango Breeze",
    category: "matcha",
    description: "Matcha and ripe mango in a sunny, tropical swirl that tastes like summer.",
    price: 7.0,
    bestSeller: false,
    color: "mango",
    image: "/images/matcha-mango.jpg",
  },

  // ── Coffee ───────────────────────────────────────────────────────
  {
    id: "dirty-cheese-coffee",
    name: "Dirty Cheese Coffee",
    category: "coffee",
    description: "Cold brew crowned with creamy cheese foam and a snowfall of cocoa.",
    price: 7.25,
    bestSeller: false,
    color: "coffee",
    image: "/images/dirty-cheese-coffee.jpg",
  },
  {
    id: "vietnamese-iced-coffee",
    name: "Vietnamese Iced Coffee",
    category: "coffee",
    description: "Strong dark roast poured over sweetened condensed milk and plenty of ice.",
    price: 6.5,
    bestSeller: false,
    color: "coffee",
    image: "/images/vietnamese-iced-coffee.jpg",
  },
  {
    id: "brown-sugar-latte",
    name: "Brown Sugar Latte",
    category: "coffee",
    description: "Double espresso and milk with a caramel-brown sugar swirl and creamy foam.",
    price: 6.75,
    bestSeller: false,
    color: "brownsugar",
    image: "/images/brown-sugar-latte.jpg",
  },
  {
    id: "sea-salt-cold-brew",
    name: "Sea Salt Cream Cold Brew",
    category: "coffee",
    description: "18-hour cold brew topped with lightly salted cream. Smooth, never bitter.",
    price: 6.75,
    bestSeller: false,
    color: "coffee",
    image: "/images/sea-salt-cold-brew.jpg",
  },

  // ── Cheese Cream ─────────────────────────────────────────────────
  {
    id: "cheese-foam-oolong",
    name: "Cheese Foam Oolong",
    category: "cheese-cream",
    description: "Roasted oolong under a thick, tangy-sweet cheese cap. Sip, don't stir.",
    price: 6.95,
    bestSeller: false,
    color: "oolong",
    image: "/images/cheese-foam-oolong.jpg",
  },
  {
    id: "cheese-foam-strawberry",
    name: "Cheese Foam Strawberry",
    category: "cheese-cream",
    description: "Fresh strawberry tea finished with our signature silky cheese foam.",
    price: 7.25,
    bestSeller: false,
    color: "strawberry",
    image: "/images/cheese-foam-strawberry.jpg",
  },
  {
    id: "cheese-foam-cocoa",
    name: "Cheese Foam Cocoa",
    category: "cheese-cream",
    description: "Dutch cocoa and milk capped with velvety cheese cream and cocoa nibs.",
    price: 7.0,
    bestSeller: false,
    color: "cocoa",
    image: "/images/cheese-foam-cocoa.jpg",
  },
];

/* ── Customisation options ──────────────────────────────────────── */

export const SIZES = [
  { id: "Medium", label: "Medium", note: "16 oz", extra: 0 },
  { id: "Large", label: "Large", note: "22 oz", extra: 1.0 },
];

export const SUGAR_LEVELS = ["0%", "25%", "50%", "75%", "100%"];

export const ICE_LEVELS = [
  { id: "No ice", label: "No ice" },
  { id: "Less", label: "Less ice" },
  { id: "Normal", label: "Normal ice" },
];

export const ADD_ONS = [
  { id: "pearls", name: "Tapioca pearls", price: 0.75 },
  { id: "pudding", name: "Egg pudding", price: 0.75 },
  { id: "nata", name: "Nata de coco", price: 0.75 },
  { id: "cheese-foam", name: "Cheese foam", price: 1.0 },
  { id: "crystal-boba", name: "Crystal boba", price: 0.85 },
];

/* ── Cup illustration palettes (inline SVG, no image files) ─────── */

export const CUP_PALETTES = {
  brownsugar: { light: "#EBD0B2", dark: "#B07C56", pearl: "#4A3428", accent: "#F4C2C2" },
  classic: { light: "#E4CBB2", dark: "#A97C58", pearl: "#4A3428", accent: "#F4C2C2" },
  taro: { light: "#DFCFEF", dark: "#A98BC9", pearl: "#6E5A8C", accent: "#F4C2C2" },
  matcha: { light: "#D8E3C1", dark: "#93A97C", pearl: "#5F7048", accent: "#F4C2C2" },
  mango: { light: "#FFE3AC", dark: "#F2A93B", pearl: "#E08A1E", accent: "#FFF3D6" },
  strawberry: { light: "#FBD3D8", dark: "#EE9AA6", pearl: "#D9737F", accent: "#FFF3D6" },
  peach: { light: "#FFDCC4", dark: "#F0A277", pearl: "#D9825A", accent: "#FFF3D6" },
  thai: { light: "#F6CBA2", dark: "#D98A4A", pearl: "#4A3428", accent: "#F4C2C2" },
  coffee: { light: "#D8BFA6", dark: "#7B5138", pearl: "#4A3428", accent: "#F4C2C2" },
  oolong: { light: "#E7CFB0", dark: "#B4855A", pearl: "#4A3428", accent: "#F4C2C2" },
  cocoa: { light: "#D2B39B", dark: "#7A4B33", pearl: "#4A3428", accent: "#F4C2C2" },
};

/** Look up a palette by the drink's `color` key. */
export function paletteFor(color) {
  return CUP_PALETTES[color] ?? CUP_PALETTES.classic;
}
