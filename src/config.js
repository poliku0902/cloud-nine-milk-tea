/* ==================================================================
   SHOP SETTINGS — everything you'll want to edit lives here.
   Change it once and it updates everywhere on the site.
================================================================== */

export const shop = {
  // ── Brand ────────────────────────────────────────────────────────
  name: "Cloud Nine Milk Tea",
  shortName: "Cloud Nine",
  tagline: "Sip Happy. Sip Cloud Nine.",
  description:
    "A cozy little boba shop on the corner of Maple & 5th. We brew our tea fresh every morning, shake every cup by hand, and never use powders.",

  // ── Photos (drop your own files in /public/images/ with these names) ──
  heroImage: "/images/hero.jpg", // wide landscape, used in the hero
  aboutImage: "/images/about.jpg", // wide landscape, used in About Us

  // ── Money ────────────────────────────────────────────────────────
  currency: "$", // e.g. "$", "€", "£", "¥"
  priceDecimals: 2,

  // ── Location ─────────────────────────────────────────────────────
  address: {
    line1: "128 Maple Street",
    line2: "Suite 4, Portland, OR 97205",
    full: "128 Maple Street, Portland, OR 97205", // used for the "Open in Maps" link
  },

  // ── Opening hours (also rendered as the hours table) ─────────────
  hours: [
    { days: "Monday – Thursday", time: "11:00 AM – 9:00 PM" },
    { days: "Friday – Saturday", time: "11:00 AM – 10:30 PM" },
    { days: "Sunday", time: "12:00 PM – 8:00 PM" },
  ],
  hoursNote: "Kitchen closes 30 minutes before we do.",

  // ── Contact ──────────────────────────────────────────────────────
  phone: "(503) 555-0142",
  phoneHref: "tel:+15035550142",
  email: "hello@cloudninemilktea.com",

  // ── Social links (replace "#" with your real profile URLs) ───────
  social: {
    facebook: "#",
    instagram: "#",
    tiktok: "#",
  },

  // ── Navigation (order must match the page sections) ──────────────
  nav: [
    { label: "Home", href: "#home" },
    { label: "Menu", href: "#menu" },
    { label: "About", href: "#about" },
    { label: "Reviews", href: "#reviews" },
    { label: "Visit Us", href: "#visit" },
  ],

  // ── Small bits of copy you may want to tweak ─────────────────────
  heroBadge: "Freshly shaken every morning",
  rating: { score: "4.9", count: "1,200+" },
  orderNote: "Pickup only · Ready in about 10 minutes",
};

/** Format a number as a price, e.g. 6.5 -> "$6.50" */
export function formatPrice(amount) {
  return `${shop.currency}${amount.toFixed(shop.priceDecimals)}`;
}
