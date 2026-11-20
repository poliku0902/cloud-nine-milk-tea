export type CategoryId =
  | 'all'
  | 'milk-tea'
  | 'matcha'
  | 'fruit-tea'
  | 'cheese-cream'
  | 'coffee'

export type CupPaletteKey =
  | 'brownsugar'
  | 'classic'
  | 'taro'
  | 'matcha'
  | 'mango'
  | 'strawberry'
  | 'peach'
  | 'thai'
  | 'coffee'
  | 'oolong'
  | 'cocoa'

export interface CupPalette {
  readonly light: string
  readonly dark: string
  readonly pearl: string
  readonly foam: string
}

export interface Category {
  readonly id: CategoryId
  readonly label: string
}

export interface Drink {
  readonly id: string
  readonly name: string
  readonly category: Exclude<CategoryId, 'all'>
  readonly notes: string
  readonly description: string
  readonly price: number
  readonly signature?: boolean
  readonly signatureNumber?: string
  readonly palette: CupPaletteKey
  readonly image: string
}

export interface HouseNote {
  readonly label: string
  readonly detail: string
}

export const CATEGORIES: readonly Category[] = [
  { id: 'all', label: 'All Pours' },
  { id: 'milk-tea', label: 'Milk Tea' },
  { id: 'matcha', label: 'Matcha' },
  { id: 'fruit-tea', label: 'Fruit Tea' },
  { id: 'cheese-cream', label: 'Cheese Cloud' },
  { id: 'coffee', label: 'Coffee' },
]

export const DRINKS: readonly Drink[] = [
  // ── Milk Tea ─────────────────────────────────────────────────────
  {
    id: 'brown-sugar-pearl',
    name: 'Brown Sugar Milk Tea',
    category: 'milk-tea',
    notes: 'Okinawa brown sugar · Whole milk · Warm pearls',
    description:
      'Slow-simmered dark brown sugar glazed along the glass with fresh pasture milk and warm house tapioca.',
    price: 6.5,
    signature: true,
    signatureNumber: '01',
    palette: 'brownsugar',
    image: '/images/brown-sugar-pearl.jpg',
  },
  {
    id: 'classic-milk-tea',
    name: 'Assam Classic Milk Tea',
    category: 'milk-tea',
    notes: 'Single-estate Assam · Fresh milk · Raw cane',
    description:
      'Malted whole-leaf black tea steeped every morning, shaken briskly over ice with milk and a touch of vanilla bean.',
    price: 5.5,
    palette: 'classic',
    image: '/images/classic-milk-tea.jpg',
  },
  {
    id: 'taro-cloud',
    name: 'Taro Cloud',
    category: 'milk-tea',
    notes: 'Steamed taro root · Velvet milk · Salted cream',
    description:
      'Hand-mashed purple taro folded into cold milk and finished with a whisper of sea-salt cream cloud.',
    price: 6.25,
    signature: true,
    signatureNumber: '03',
    palette: 'taro',
    image: '/images/taro-cloud.jpg',
  },
  {
    id: 'jasmine-milk-green',
    name: 'Jasmine Milk Green Tea',
    category: 'milk-tea',
    notes: 'Night-blooming jasmine · Wildflower honey · Silky',
    description:
      'Delicate Fujian jasmine green tea softened with chilled milk and local Oregon wildflower honey.',
    price: 5.75,
    palette: 'matcha',
    image: '/images/jasmine-milk-green.jpg',
  },
  {
    id: 'thai-milk-tea',
    name: 'Spiced Thai Milk Tea',
    category: 'milk-tea',
    notes: 'Star anise · Cardamom · Condensed milk',
    description:
      'Bold black tea brewed with toasted aromatics and layered over rich sweetened condensed milk.',
    price: 6.0,
    palette: 'thai',
    image: '/images/thai-milk-tea.jpg',
  },

  // ── Matcha ───────────────────────────────────────────────────────
  {
    id: 'ceremonial-matcha-latte',
    name: 'Ceremonial Matcha Latte',
    category: 'matcha',
    notes: 'First-harvest Uji · Hand-whisked · Oat milk',
    description:
      'Stone-ground Japanese ceremonial matcha whisked to order with a bamboo chasen over cold, silky oat milk.',
    price: 6.95,
    signature: true,
    signatureNumber: '02',
    palette: 'matcha',
    image: '/images/ceremonial-matcha.jpg',
  },
  {
    id: 'matcha-cloud',
    name: 'Matcha Cloud',
    category: 'matcha',
    notes: 'Uji matcha · Salted mascarpone cloud · Umami',
    description:
      'Bright, earthy ceremonial matcha poured under a dense ribbon of salted cheese cream and fresh sifted leaf.',
    price: 7.25,
    palette: 'matcha',
    image: '/images/matcha-cloud.jpg',
  },
  {
    id: 'strawberry-matcha',
    name: 'Strawberry Matcha',
    category: 'matcha',
    notes: 'Hood strawberries · Cold milk · Whisked matcha',
    description:
      'Three quiet layers of house-macerated Oregon strawberries, cold milk, and vivid Uji matcha.',
    price: 7.25,
    palette: 'strawberry',
    image: '/images/strawberry-matcha.jpg',
  },
  {
    id: 'matcha-mango',
    name: 'Matcha Mango Breeze',
    category: 'matcha',
    notes: 'Alphonso mango · Uji matcha · Clean finish',
    description:
      'Ripe golden mango purée balanced against grassy ceremonial matcha for a bright, layered afternoon pour.',
    price: 7.0,
    palette: 'mango',
    image: '/images/matcha-mango.jpg',
  },

  // ── Fruit Tea ────────────────────────────────────────────────────
  {
    id: 'peach-oolong',
    name: 'White Peach Oolong',
    category: 'fruit-tea',
    notes: 'High-mountain oolong · White peach · Fresh lemon',
    description:
      'Lightly roasted Alishan oolong shaken with ripe white peach nectar and a bright squeeze of Meyer lemon.',
    price: 6.25,
    palette: 'peach',
    image: '/images/peach-oolong.jpg',
  },
  {
    id: 'mango-passionfruit',
    name: 'Mango Passionfruit Tea',
    category: 'fruit-tea',
    notes: 'Jasmine green · Passionfruit · Ripe mango',
    description:
      'Fragrant jasmine tea steeped cold with tart passionfruit pulp and golden mango.',
    price: 6.75,
    palette: 'mango',
    image: '/images/mango-passionfruit.jpg',
  },
  {
    id: 'lychee-rose',
    name: 'Lychee Rose Green Tea',
    category: 'fruit-tea',
    notes: 'Whole lychee · Damascus rose · Crisp green tea',
    description:
      'Chilled green tea infused with juicy lychee and a delicate floral finish of dried rose petals.',
    price: 6.5,
    palette: 'strawberry',
    image: '/images/lychee-rose.jpg',
  },
  {
    id: 'strawberry-hibiscus',
    name: 'Strawberry Hibiscus Cooler',
    category: 'fruit-tea',
    notes: 'Caffeine-free · Ruby hibiscus · Crushed berry',
    description:
      'Steeped hibiscus blossoms shaken over ice with muddled seasonal strawberries. Crisp and jewel-toned.',
    price: 6.5,
    palette: 'strawberry',
    image: '/images/strawberry-hibiscus.jpg',
  },

  // ── Cheese Cloud ─────────────────────────────────────────────────
  {
    id: 'cheese-foam-oolong',
    name: 'Roasted Oolong Cloud',
    category: 'cheese-cream',
    notes: 'Charcoal-roasted oolong · Sea-salt cheese foam',
    description:
      'Nutty, amber roasted oolong beneath our house-whipped salted cheese cap. Tilted at 45 degrees — sip, never stir.',
    price: 6.95,
    signature: true,
    signatureNumber: '04',
    palette: 'oolong',
    image: '/images/cheese-foam-oolong.jpg',
  },
  {
    id: 'cheese-foam-strawberry',
    name: 'Strawberry Cloud',
    category: 'cheese-cream',
    notes: 'Fresh berry tea · Whipped salted cream',
    description:
      'Bright jasmine strawberry tea crowned with our velvety, lightly salted cheese foam.',
    price: 7.25,
    palette: 'strawberry',
    image: '/images/cheese-foam-strawberry.jpg',
  },
  {
    id: 'cheese-foam-cocoa',
    name: 'Dutch Cocoa Cloud',
    category: 'cheese-cream',
    notes: 'Single-origin cocoa · Silky milk · Cocoa nibs',
    description:
      'Rich dark Dutch-process cocoa over cold milk, topped with salted cheese cloud and roasted cacao nibs.',
    price: 7.0,
    palette: 'cocoa',
    image: '/images/cheese-foam-cocoa.jpg',
  },

  // ── Coffee ───────────────────────────────────────────────────────
  {
    id: 'brown-sugar-latte',
    name: 'Brown Sugar Espresso Latte',
    category: 'coffee',
    notes: 'Double espresso · Okinawa syrup · Textured milk',
    description:
      'Portland-roasted double espresso poured over cold milk and caramelized dark brown sugar.',
    price: 6.75,
    palette: 'brownsugar',
    image: '/images/brown-sugar-latte.jpg',
  },
  {
    id: 'sea-salt-cold-brew',
    name: 'Sea Salt Cream Cold Brew',
    category: 'coffee',
    notes: '18-hour steep · Flaky sea salt · Sweet cream',
    description:
      'Slow-steeped chocolatey cold brew finished with a clean float of lightly salted sweet cream.',
    price: 6.75,
    palette: 'coffee',
    image: '/images/sea-salt-cold-brew.jpg',
  },
  {
    id: 'dirty-cheese-coffee',
    name: 'Dirty Cheese Coffee',
    category: 'coffee',
    notes: 'Cold brew · Salted cheese cap · Cocoa dust',
    description:
      'Full-bodied cold brew beneath dense cheese foam and a fine dusting of bitter Dutch cocoa.',
    price: 7.25,
    palette: 'coffee',
    image: '/images/dirty-cheese-coffee.jpg',
  },
  {
    id: 'vietnamese-iced-coffee',
    name: 'Vietnamese Iced Coffee',
    category: 'coffee',
    notes: 'Dark roast phin · Condensed milk · Crushed ice',
    description:
      'Traditional slow-drip dark roast poured over sweetened condensed milk and tightly packed ice.',
    price: 6.5,
    palette: 'coffee',
    image: '/images/vietnamese-iced-coffee.jpg',
  },
]

export const SIGNATURE_DRINKS: readonly Drink[] = DRINKS.filter(
  (drink) => drink.signature,
).sort((a, b) => (a.signatureNumber ?? '').localeCompare(b.signatureNumber ?? ''))

export const BAR_NOTES: readonly HouseNote[] = [
  {
    label: 'Sizes',
    detail: 'Regular 16 oz (listed) · Tall 22 oz (+$1.00)',
  },
  {
    label: 'Sweetness & Ice',
    detail: 'Calibrated at the bar: 0%, 25%, 50%, 75%, or 100% · No ice, less ice, or regular',
  },
  {
    label: 'House Additions',
    detail:
      'Warm brown sugar pearls ($0.75) · Silky egg pudding ($0.75) · Crystal boba ($0.85) · Salted cheese cloud ($1.00)',
  },
  {
    label: 'Milk Options',
    detail: 'Organic whole milk, barista oat milk, or house-steeped soy at no upcharge',
  },
]

export const CUP_PALETTES: Record<CupPaletteKey, CupPalette> = {
  brownsugar: { light: '#E6CCB0', dark: '#A67249', pearl: '#2B1F18', foam: '#FAF5EC' },
  classic: { light: '#E3C9AE', dark: '#A87C58', pearl: '#2B1F18', foam: '#FAF5EC' },
  taro: { light: '#DFD2E8', dark: '#9B82B3', pearl: '#4A3A5E', foam: '#FAF7F2' },
  matcha: { light: '#CBD8BC', dark: '#6E825E', pearl: '#34422B', foam: '#FAF7F2' },
  mango: { light: '#F6DFB1', dark: '#D6943B', pearl: '#7A4C17', foam: '#FAF7F2' },
  strawberry: { light: '#F2CFD3', dark: '#C97B84', pearl: '#6E353C', foam: '#FAF7F2' },
  peach: { light: '#F6D9C5', dark: '#D68E68', pearl: '#7A472C', foam: '#FAF7F2' },
  thai: { light: '#EFC69E', dark: '#C57B42', pearl: '#2B1F18', foam: '#FAF5EC' },
  coffee: { light: '#D5BFA9', dark: '#6E4A35', pearl: '#231812', foam: '#FAF5EC' },
  oolong: { light: '#E5CEB2', dark: '#9E6E46', pearl: '#2B1F18', foam: '#FAF5EC' },
  cocoa: { light: '#CEB49F', dark: '#6B422E', pearl: '#231812', foam: '#FAF5EC' },
}

export function paletteFor(key: CupPaletteKey): CupPalette {
  return CUP_PALETTES[key]
}
