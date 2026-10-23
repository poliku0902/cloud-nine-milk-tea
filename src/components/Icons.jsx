/* Small inline SVG icon set — no icon library, no external images. */

const base = 'shrink-0'

export function CloudIcon({ className = 'size-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={`${base} ${className}`} aria-hidden="true">
      <path
        d="M7 18.5a4.5 4.5 0 0 1-.6-8.96A5.6 5.6 0 0 1 17.1 8.7 4.2 4.2 0 0 1 17.5 17H7Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function BagIcon({ className = 'size-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={`${base} ${className}`} aria-hidden="true">
      <path d="M5.5 7.5h13l-1 12a2 2 0 0 1-2 1.8h-7a2 2 0 0 1-2-1.8l-1-12Z" />
      <path d="M9 7.5V6a3 3 0 0 1 6 0v1.5" />
    </svg>
  )
}

export function CupIcon({ className = 'size-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={`${base} ${className}`} aria-hidden="true">
      <path d="M6.5 8h11l-1.2 10.5a2 2 0 0 1-2 1.8H9.7a2 2 0 0 1-2-1.8L6.5 8Z" />
      <path d="M5.5 5.5h13V8h-13z" />
      <path d="M14 2.5 12.5 5.5" />
    </svg>
  )
}

export function PlusIcon({ className = 'size-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className={`${base} ${className}`} aria-hidden="true">
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

export function MinusIcon({ className = 'size-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className={`${base} ${className}`} aria-hidden="true">
      <path d="M5 12h14" />
    </svg>
  )
}

export function CloseIcon({ className = 'size-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={`${base} ${className}`} aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}

export function MenuIcon({ className = 'size-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={`${base} ${className}`} aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function CheckIcon({ className = 'size-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className={`${base} ${className}`} aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export function ArrowRightIcon({ className = 'size-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${base} ${className}`} aria-hidden="true">
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  )
}

export function StarIcon({ className = 'size-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`${base} ${className}`} aria-hidden="true">
      <path d="m12 3.6 2.6 5.3 5.8.9-4.2 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8-4.2-4.1 5.8-.9L12 3.6Z" />
    </svg>
  )
}

export function LeafIcon({ className = 'size-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={`${base} ${className}`} aria-hidden="true">
      <path d="M20 4c0 9.4-5.3 14-12.5 14H4C4 8.6 9.3 4 16.5 4H20Z" />
      <path d="M4 20c2.2-6 6.2-9.4 11.5-11.5" />
    </svg>
  )
}

export function HeartIcon({ className = 'size-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={`${base} ${className}`} aria-hidden="true">
      <path d="M12 20s-7.2-4.4-7.2-9.4A4.3 4.3 0 0 1 12 7.2a4.3 4.3 0 0 1 7.2 3.4C19.2 15.6 12 20 12 20Z" />
    </svg>
  )
}

export function MapPinIcon({ className = 'size-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={`${base} ${className}`} aria-hidden="true">
      <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  )
}

export function ClockIcon({ className = 'size-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={`${base} ${className}`} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  )
}

export function PhoneIcon({ className = 'size-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={`${base} ${className}`} aria-hidden="true">
      <path d="M6.4 3.5h2.9l1.4 4-2 1.4a11.5 11.5 0 0 0 5.4 5.4l1.4-2 4 1.4v2.9a2 2 0 0 1-2.2 2A16.6 16.6 0 0 1 4.4 5.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  )
}

export function MailIcon({ className = 'size-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={`${base} ${className}`} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m3.5 7.5 8.5 5.6 8.5-5.6" />
    </svg>
  )
}

export function SparkleIcon({ className = 'size-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`${base} ${className}`} aria-hidden="true">
      <path d="M12 2.5c.6 3.7 2.3 5.4 6 6-3.7.6-5.4 2.3-6 6-.6-3.7-2.3-5.4-6-6 3.7-.6 5.4-2.3 6-6Z" />
      <path d="M18.5 14.5c.3 1.9 1.2 2.8 3.1 3.1-1.9.3-2.8 1.2-3.1 3.1-.3-1.9-1.2-2.8-3.1-3.1 1.9-.3 2.8-1.2 3.1-3.1Z" opacity=".7" />
    </svg>
  )
}

/* Category icons for the menu cards */
export function CategoryIcon({ category, className = 'size-6' }) {
  const common = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className: `${base} ${className}`,
    'aria-hidden': true,
  }

  if (category === 'fruit-tea') {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 4v16M4.2 9.5l15.6 5M19.8 9.5l-15.6 5" />
      </svg>
    )
  }
  if (category === 'matcha') {
    return (
      <svg {...common}>
        <path d="M4 11h16l-1.4 6.5a3 3 0 0 1-2.9 2.5H8.3a3 3 0 0 1-2.9-2.5L4 11Z" />
        <path d="M8 11V8a4 4 0 0 1 8 0v3" />
        <path d="M9.5 3.5v3M14.5 3.5v3" />
      </svg>
    )
  }
  if (category === 'coffee') {
    return (
      <svg {...common}>
        <path d="M4 8h13v6.5a5.5 5.5 0 0 1-5.5 5.5h-2A5.5 5.5 0 0 1 4 14.5V8Z" />
        <path d="M17 9.5h1.5a2.5 2.5 0 0 1 0 5H17" />
        <path d="M7.5 4.5c-.8.8-.8 1.7 0 2.5M11 4.5c-.8.8-.8 1.7 0 2.5" />
      </svg>
    )
  }
  if (category === 'cheese-cream') {
    return (
      <svg {...common}>
        <path d="M3.5 15.5 12 4l8.5 11.5a2 2 0 0 1-1.6 3.2H5.1a2 2 0 0 1-1.6-3.2Z" />
        <circle cx="10" cy="14" r="1.2" />
        <circle cx="14.5" cy="16" r="1" />
      </svg>
    )
  }
  // milk tea (default)
  return (
    <svg {...common}>
      <path d="M6.5 8.5h11l-1.2 10a2 2 0 0 1-2 1.8H9.7a2 2 0 0 1-2-1.8l-1.2-10Z" />
      <path d="M5.5 6h13v2.5h-13z" />
      <path d="M13.8 2.5 12.6 6" />
      <circle cx="10" cy="15" r="1" />
      <circle cx="13.5" cy="17" r="1" />
    </svg>
  )
}

/* Social icons */
export function FacebookIcon({ className = 'size-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`${base} ${className}`} aria-hidden="true">
      <path d="M13.5 21v-7.2h2.5l.4-2.9h-2.9V9c0-.8.2-1.4 1.4-1.4h1.6V5a20 20 0 0 0-2.3-.1c-2.3 0-3.9 1.4-3.9 4v2H8v2.9h2.3V21h3.2Z" />
    </svg>
  )
}

export function InstagramIcon({ className = 'size-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" className={`${base} ${className}`} aria-hidden="true">
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5.2" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.1" cy="6.9" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function TikTokIcon({ className = 'size-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`${base} ${className}`} aria-hidden="true">
      <path d="M16.6 3h-2.8v11.4a2.6 2.6 0 1 1-2.1-2.5V9a5.3 5.3 0 1 0 4.9 5.3V8.7c1 .8 2.2 1.2 3.4 1.2V7.2a3.7 3.7 0 0 1-3.4-3.7V3Z" />
    </svg>
  )
}
