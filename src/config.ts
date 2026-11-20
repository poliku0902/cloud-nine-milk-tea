export interface OpeningHoursRow {
  readonly days: string
  readonly hours: string
}

export interface NavItem {
  readonly id: string
  readonly label: string
  readonly href: string
}

export const SHOP = {
  name: 'Cloud Nine Milk Tea',
  shortName: 'Cloud Nine',
  established: 'Est. 2022',
  city: 'Portland, OR',
  neighborhood: 'Maple & 5th',
  tagline: 'Small-batch tea, steeped slow & shaken to order.',
  description:
    'A quiet neighborhood tea bar in downtown Portland. We steep whole-leaf teas each morning, simmer Okinawa brown sugar pearls every two hours, and whisk stone-ground Uji matcha to order.',
  heroImage: '/images/matcha-cloud.jpg',
  heroCaption: 'Matcha Cloud — stone-ground Uji matcha over oat milk',
  aboutImage: '/images/about.jpg',
  aboutCaption: 'Morning light along the cedar counter at Maple & 5th',
  currency: '$',
  priceDecimals: 2,
  address: {
    line1: '128 Maple Street',
    line2: 'Suite 4, Portland, OR 97205',
    full: '128 Maple Street, Suite 4, Portland, OR 97205',
  },
  hours: [
    { days: 'Monday – Thursday', hours: '11:00 AM – 9:00 PM' },
    { days: 'Friday – Saturday', hours: '11:00 AM – 10:30 PM' },
    { days: 'Sunday', hours: '12:00 PM – 8:00 PM' },
  ] satisfies readonly OpeningHoursRow[],
  hoursNote: 'Last pour 20 minutes before closing. Walk-in tea bar only.',
  phone: '(503) 555-0142',
  phoneHref: 'tel:+15035550142',
  email: 'hello@cloudninemilktea.com',
  handle: '@cloudninemilktea',
  social: [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'TikTok', href: 'https://tiktok.com' },
    { label: 'Facebook', href: 'https://facebook.com' },
  ] as const,
  nav: [
    { id: 'signatures', label: 'Signatures', href: '#signatures' },
    { id: 'menu', label: 'Menu', href: '#menu' },
    { id: 'story', label: 'Story', href: '#story' },
    { id: 'visit', label: 'Visit', href: '#visit' },
  ] satisfies readonly NavItem[],
} as const

export function formatPrice(amount: number): string {
  return `${SHOP.currency}${amount.toFixed(SHOP.priceDecimals)}`
}

export function googleMapsUrl(address: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
}
