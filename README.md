# Cloud Nine Milk Tea 🧋

A cozy, single-page boba shop site built with **React + Vite + Tailwind CSS v4**.
Everything is drawn with inline SVG, CSS and emoji — there are no external images, so nothing can break.

---

## 1. Run it locally

```bash
# 1. install dependencies (once)
npm install

# 2. start the dev server (hot reload)
npm run dev
# → open the URL it prints, usually http://localhost:5173

# 3. build for production
npm run build

# 4. preview the production build locally
npm run preview
```

Requires **Node 20.19+ or 22.12+** (Vite 7 needs a modern Node). Built with React 19, Vite 7 and
Tailwind CSS 4.

---

## 2. Folder structure

```
cloud-nine-milk-tea/
├── index.html                  # page shell, meta tags, Google Fonts
├── package.json                # scripts + dependencies
├── vite.config.js              # Vite + React + Tailwind plugins
├── .gitignore
├── public/
│   ├── favicon.svg             # little drawn boba cup favicon
│   └── images/                 # 20 drink photos + hero.jpg + about.jpg + CREDITS.md
└── src/
    ├── main.jsx                # React entry point
    ├── App.jsx                 # page layout + modal/cart/toast state
    ├── index.css               # Tailwind import + brand theme (colours, fonts, animations)
    ├── config.js               # ⭐ shop name, address, hours, contact, socials, photos
    ├── data/
    │   └── menuData.js         # ⭐ drinks, prices, images, categories, sizes, add-ons
    ├── context/
    │   └── CartContext.jsx     # cart state + useCart() hook
    ├── hooks/
    │   ├── useInView.js        # IntersectionObserver → fade-in on scroll
    │   ├── useActiveSection.js # highlights the nav link you're reading
    │   └── useFocusTrap.js     # Esc to close + keep Tab focus inside modals
    └── components/
        ├── Header.jsx          # sticky nav, cart badge, mobile hamburger
        ├── Hero.jsx            # headline, buttons, floating pearls, hero photo
        ├── Photo.jsx           # <img> with automatic SVG-cup fallback
        ├── MilkTeaCup.jsx      # the reusable inline-SVG milk tea cup (fallback)
        ├── BestSellers.jsx     # 4 highlighted drinks
        ├── Menu.jsx            # category filters + grid + add-ons row
        ├── MenuCard.jsx        # a single drink card
        ├── CustomizeModal.jsx  # size / sugar / ice / add-ons, live price
        ├── CartPanel.jsx       # slide-in cart + "Place Order" confirmation
        ├── About.jsx           # story + shop photo + 3 icon highlights
        ├── Reviews.jsx         # 3 testimonials
        ├── VisitUs.jsx         # address, hours table, contact, map placeholder
        ├── SocialContact.jsx   # Facebook / Instagram / TikTok buttons
        ├── Footer.jsx          # logo, quick links, copyright
        ├── SectionHeading.jsx  # shared section title
        ├── Reveal.jsx          # fade-in wrapper
        └── Icons.jsx           # all inline SVG icons
```

---

## 3. What to replace with your own info

| What | Where |
| --- | --- |
| Shop name, tagline, description | `src/config.js` → `shop.name`, `shop.tagline` |
| Address | `src/config.js` → `shop.address` |
| Opening hours | `src/config.js` → `shop.hours` |
| Phone / email | `src/config.js` → `shop.phone`, `shop.phoneHref`, `shop.email` |
| Social links | `src/config.js` → `shop.social` (replace `"#"`) |
| Currency symbol | `src/config.js` → `shop.currency` |
| Drinks, descriptions, prices | `src/data/menuData.js` → `DRINKS` |
| Drink photos | `public/images/<drink-id>.jpg` (path set per drink in `menuData.js`) |
| Hero / About photos | `public/images/hero.jpg`, `public/images/about.jpg` |
| Add-ons + prices | `src/data/menuData.js` → `ADD_ONS` |
| Large-size upcharge | `src/data/menuData.js` → `SIZES` |
| Brand colours / fonts | `src/index.css` → `@theme` block |
| Page title + meta description | `index.html` |
| Reviews | `src/components/Reviews.jsx` → `REVIEWS` |
| About story | `src/components/About.jsx` |
| Map link | `src/components/VisitUs.jsx` (uses `shop.address.full`) |

Prices are plain numbers (e.g. `6.5`) and are formatted with `formatPrice()` from `config.js`,
so changing the currency symbol updates the entire site.

Photos are all local (no hotlinking) and credited in `public/images/CREDITS.md`. To swap one out,
replace the file with the same name — or delete it and the drawn SVG cup appears instead.

---

## 4. Deploy for free

### Option A — Netlify (drag & drop, 60 seconds)

1. `npm run build`
2. Go to <https://app.netlify.com/drop>
3. Drag the generated **`dist`** folder onto the page. Done — you get a live URL.

For automatic deploys: push the project to GitHub → Netlify → *Add new site → Import an existing project* →
build command `npm run build`, publish directory `dist`.

### Option B — Vercel

1. Push the project to GitHub.
2. Go to <https://vercel.com/new> and import the repo.
3. Vercel auto-detects Vite: build command `npm run build`, output directory `dist`.
4. Click **Deploy**.

Or from the terminal:

```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production deploy
```

### Option C — GitHub Pages

```bash
npm run build
# then publish the dist/ folder (e.g. with the `gh-pages` package)
```

If you host under a sub-path (like `username.github.io/shop/`), set
`base: '/shop/'` in `vite.config.js` before building.

---

## 5. Notes

- **Cart is in React state only** — refreshing the page empties it (as requested). No backend.
- **"Place Order"** shows a friendly confirmation and clears the cart. To take real orders,
  send `items` + `subtotal` from `CartPanel.jsx` to your own API / Formspree / email service.
- **Accessibility**: semantic landmarks, skip link, `aria-label`s on icon buttons, visible focus
  rings, `aria-pressed` filter/toggle buttons, Esc closes the modal and cart, Tab is trapped inside
  open dialogs, and `prefers-reduced-motion` is respected.
- **Tailwind v4** uses CSS-first config: there is no `tailwind.config.js`. The theme lives in the
  `@theme` block at the top of `src/index.css`.
