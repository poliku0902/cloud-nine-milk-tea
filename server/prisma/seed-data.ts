/* Starting menu for the database, generated from the original client/src/data/menuData.js.
   All money is stored as integer cents (650 = $6.50). Edit here, then run `npm run db:seed`. */

export const categories = [
  {
    "slug": "milk-tea",
    "label": "Milk Tea",
    "sortOrder": 0
  },
  {
    "slug": "fruit-tea",
    "label": "Fruit Tea",
    "sortOrder": 1
  },
  {
    "slug": "matcha",
    "label": "Matcha",
    "sortOrder": 2
  },
  {
    "slug": "coffee",
    "label": "Coffee",
    "sortOrder": 3
  },
  {
    "slug": "cheese-cream",
    "label": "Cheese Cream",
    "sortOrder": 4
  }
]

export const drinks = [
  {
    "slug": "brown-sugar-pearl",
    "name": "Brown Sugar Pearl Milk Tea",
    "category": "milk-tea",
    "description": "Slow-cooked brown sugar syrup swirled through creamy milk and warm, chewy pearls.",
    "priceCents": 650,
    "bestSeller": true,
    "color": "brownsugar",
    "imageUrl": "/images/brown-sugar-pearl.jpg",
    "sortOrder": 0
  },
  {
    "slug": "classic-milk-tea",
    "name": "Classic Milk Tea",
    "category": "milk-tea",
    "description": "Black tea brewed fresh, shaken with milk and a whisper of vanilla.",
    "priceCents": 550,
    "bestSeller": false,
    "color": "classic",
    "imageUrl": "/images/classic-milk-tea.jpg",
    "sortOrder": 1
  },
  {
    "slug": "taro-cloud",
    "name": "Taro Cloud",
    "category": "milk-tea",
    "description": "Velvety taro purée blended with milk and topped with a salty-sweet cream cloud.",
    "priceCents": 625,
    "bestSeller": true,
    "color": "taro",
    "imageUrl": "/images/taro-cloud.jpg",
    "sortOrder": 2
  },
  {
    "slug": "jasmine-milk-green",
    "name": "Jasmine Milk Green Tea",
    "category": "milk-tea",
    "description": "Fragrant jasmine green tea softened with milk and a drizzle of wildflower honey.",
    "priceCents": 575,
    "bestSeller": false,
    "color": "matcha",
    "imageUrl": "/images/jasmine-milk-green.jpg",
    "sortOrder": 3
  },
  {
    "slug": "thai-milk-tea",
    "name": "Thai Milk Tea",
    "category": "milk-tea",
    "description": "Bold spiced Thai tea, sweet and creamy with a sunset-orange glow.",
    "priceCents": 600,
    "bestSeller": false,
    "color": "thai",
    "imageUrl": "/images/thai-milk-tea.jpg",
    "sortOrder": 4
  },
  {
    "slug": "mango-passionfruit",
    "name": "Mango Passionfruit Tea",
    "category": "fruit-tea",
    "description": "Golden mango and tangy passionfruit over jasmine tea with popping boba.",
    "priceCents": 675,
    "bestSeller": true,
    "color": "mango",
    "imageUrl": "/images/mango-passionfruit.jpg",
    "sortOrder": 5
  },
  {
    "slug": "strawberry-hibiscus",
    "name": "Strawberry Hibiscus Cooler",
    "category": "fruit-tea",
    "description": "Muddled strawberries and hibiscus, bright and icy with real fruit bits.",
    "priceCents": 650,
    "bestSeller": false,
    "color": "strawberry",
    "imageUrl": "/images/strawberry-hibiscus.jpg",
    "sortOrder": 6
  },
  {
    "slug": "peach-oolong",
    "name": "Peach Oolong Tea",
    "category": "fruit-tea",
    "description": "Roasted oolong kissed with white peach and a squeeze of fresh lemon.",
    "priceCents": 625,
    "bestSeller": false,
    "color": "peach",
    "imageUrl": "/images/peach-oolong.jpg",
    "sortOrder": 7
  },
  {
    "slug": "lychee-rose",
    "name": "Lychee Rose Green Tea",
    "category": "fruit-tea",
    "description": "Juicy lychee and a hint of rose over chilled green tea. Tastes like a garden.",
    "priceCents": 650,
    "bestSeller": false,
    "color": "strawberry",
    "imageUrl": "/images/lychee-rose.jpg",
    "sortOrder": 8
  },
  {
    "slug": "ceremonial-matcha-latte",
    "name": "Ceremonial Matcha Latte",
    "category": "matcha",
    "description": "Stone-ground ceremonial matcha whisked into silky oat milk. Grassy and sweet.",
    "priceCents": 695,
    "bestSeller": true,
    "color": "matcha",
    "imageUrl": "/images/ceremonial-matcha.jpg",
    "sortOrder": 9
  },
  {
    "slug": "matcha-cloud",
    "name": "Matcha Cloud",
    "category": "matcha",
    "description": "Earthy matcha under a thick layer of sweet cheese foam and a dusting of powder.",
    "priceCents": 725,
    "bestSeller": false,
    "color": "matcha",
    "imageUrl": "/images/matcha-cloud.jpg",
    "sortOrder": 10
  },
  {
    "slug": "strawberry-matcha",
    "name": "Strawberry Matcha",
    "category": "matcha",
    "description": "Layers of strawberry purée, fresh milk and vivid matcha. Stir before you sip.",
    "priceCents": 725,
    "bestSeller": false,
    "color": "strawberry",
    "imageUrl": "/images/strawberry-matcha.jpg",
    "sortOrder": 11
  },
  {
    "slug": "matcha-mango",
    "name": "Matcha Mango Breeze",
    "category": "matcha",
    "description": "Matcha and ripe mango in a sunny, tropical swirl that tastes like summer.",
    "priceCents": 700,
    "bestSeller": false,
    "color": "mango",
    "imageUrl": "/images/matcha-mango.jpg",
    "sortOrder": 12
  },
  {
    "slug": "dirty-cheese-coffee",
    "name": "Dirty Cheese Coffee",
    "category": "coffee",
    "description": "Cold brew crowned with creamy cheese foam and a snowfall of cocoa.",
    "priceCents": 725,
    "bestSeller": false,
    "color": "coffee",
    "imageUrl": "/images/dirty-cheese-coffee.jpg",
    "sortOrder": 13
  },
  {
    "slug": "vietnamese-iced-coffee",
    "name": "Vietnamese Iced Coffee",
    "category": "coffee",
    "description": "Strong dark roast poured over sweetened condensed milk and plenty of ice.",
    "priceCents": 650,
    "bestSeller": false,
    "color": "coffee",
    "imageUrl": "/images/vietnamese-iced-coffee.jpg",
    "sortOrder": 14
  },
  {
    "slug": "brown-sugar-latte",
    "name": "Brown Sugar Latte",
    "category": "coffee",
    "description": "Double espresso and milk with a caramel-brown sugar swirl and creamy foam.",
    "priceCents": 675,
    "bestSeller": false,
    "color": "brownsugar",
    "imageUrl": "/images/brown-sugar-latte.jpg",
    "sortOrder": 15
  },
  {
    "slug": "sea-salt-cold-brew",
    "name": "Sea Salt Cream Cold Brew",
    "category": "coffee",
    "description": "18-hour cold brew topped with lightly salted cream. Smooth, never bitter.",
    "priceCents": 675,
    "bestSeller": false,
    "color": "coffee",
    "imageUrl": "/images/sea-salt-cold-brew.jpg",
    "sortOrder": 16
  },
  {
    "slug": "cheese-foam-oolong",
    "name": "Cheese Foam Oolong",
    "category": "cheese-cream",
    "description": "Roasted oolong under a thick, tangy-sweet cheese cap. Sip, don't stir.",
    "priceCents": 695,
    "bestSeller": false,
    "color": "oolong",
    "imageUrl": "/images/cheese-foam-oolong.jpg",
    "sortOrder": 17
  },
  {
    "slug": "cheese-foam-strawberry",
    "name": "Cheese Foam Strawberry",
    "category": "cheese-cream",
    "description": "Fresh strawberry tea finished with our signature silky cheese foam.",
    "priceCents": 725,
    "bestSeller": false,
    "color": "strawberry",
    "imageUrl": "/images/cheese-foam-strawberry.jpg",
    "sortOrder": 18
  },
  {
    "slug": "cheese-foam-cocoa",
    "name": "Cheese Foam Cocoa",
    "category": "cheese-cream",
    "description": "Dutch cocoa and milk capped with velvety cheese cream and cocoa nibs.",
    "priceCents": 700,
    "bestSeller": false,
    "color": "cocoa",
    "imageUrl": "/images/cheese-foam-cocoa.jpg",
    "sortOrder": 19
  }
]

export const sizes = [
  {
    "slug": "medium",
    "label": "Medium",
    "note": "16 oz",
    "extraCents": 0,
    "sortOrder": 0
  },
  {
    "slug": "large",
    "label": "Large",
    "note": "22 oz",
    "extraCents": 100,
    "sortOrder": 1
  }
]

export const addOns = [
  {
    "slug": "pearls",
    "name": "Tapioca pearls",
    "priceCents": 75,
    "sortOrder": 0
  },
  {
    "slug": "pudding",
    "name": "Egg pudding",
    "priceCents": 75,
    "sortOrder": 1
  },
  {
    "slug": "nata",
    "name": "Nata de coco",
    "priceCents": 75,
    "sortOrder": 2
  },
  {
    "slug": "cheese-foam",
    "name": "Cheese foam",
    "priceCents": 100,
    "sortOrder": 3
  },
  {
    "slug": "crystal-boba",
    "name": "Crystal boba",
    "priceCents": 85,
    "sortOrder": 4
  }
]
