import { useId } from 'react'
import { CUP_PALETTES, type CupPalette } from '../data/menu'

interface MilkTeaCupProps {
  palette?: CupPalette
  className?: string
  showSteam?: boolean
  label?: string
}

/**
 * Minimalist architectural line-and-wash illustration of a Cloud Nine tea glass.
 * Used both as an interactive craft diagram in the Story section and as a
 * graceful fallback if a drink photograph fails to load.
 */
export default function MilkTeaCup({
  palette = CUP_PALETTES.brownsugar,
  className = '',
  showSteam = false,
  label = 'Illustrated glass of Cloud Nine milk tea',
}: MilkTeaCupProps) {
  const uid = useId().replace(/:/g, '')
  const teaGradId = `tea-${uid}`
  const clipId = `glass-${uid}`

  const glassPath =
    'M64 94H176L164 282C163.3 292.2 154.8 300 144.6 300H95.4C85.2 300 76.7 292.2 76 282L64 94Z'

  return (
    <svg
      viewBox="0 0 240 330"
      className={className}
      role="img"
      aria-label={label}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={teaGradId} x1="0.15" y1="0" x2="0.45" y2="1">
          <stop offset="0%" stopColor={palette.light} />
          <stop offset="100%" stopColor={palette.dark} />
        </linearGradient>
        <clipPath id={clipId}>
          <path d={glassPath} />
        </clipPath>
      </defs>

      {/* Optional delicate rising aroma lines */}
      {showSteam && (
        <g
          stroke="#7F5534"
          strokeOpacity="0.45"
          strokeWidth="1.4"
          strokeLinecap="round"
        >
          <path d="M96 58C92 48 101 42 96 32" />
          <path d="M114 52C110 42 119 36 114 26" />
        </g>
      )}

      {/* Slim angled glass straw */}
      <g transform="rotate(9 144 92)">
        <rect
          x="138"
          y="22"
          width="11"
          height="130"
          rx="5.5"
          fill="#FAF7F2"
          stroke="#1F1A17"
          strokeWidth="1.6"
        />
      </g>

      {/* Glass silhouette base */}
      <path d={glassPath} fill="#FAF7F2" />

      {/* Contents clipped inside the glass */}
      <g clipPath={`url(#${clipId})`}>
        {/* Main tea infusion */}
        <rect x="58" y="132" width="124" height="172" fill={`url(#${teaGradId})`} />

        {/* Subtle tea-to-foam transition wave */}
        <path
          d="M58 134C82 125 104 142 126 133C146 125 164 138 184 131V94H58V134Z"
          fill={palette.foam}
        />

        {/* Delicate foam underside hairline */}
        <path
          d="M58 134C82 125 104 142 126 133C146 125 164 138 184 131"
          stroke="#1F1A17"
          strokeOpacity="0.16"
          strokeWidth="1.2"
        />

        {/* Translucent ice facets */}
        <g fill="#FFFFFF" fillOpacity="0.34" stroke="#1F1A17" strokeOpacity="0.14" strokeWidth="1.1">
          <rect x="82" y="150" width="26" height="26" rx="4" transform="rotate(-11 95 163)" />
          <rect x="118" y="160" width="28" height="28" rx="4" transform="rotate(14 132 174)" />
          <rect x="96" y="186" width="24" height="24" rx="4" transform="rotate(7 108 198)" />
        </g>

        {/* Subtle vertical glass refraction highlight */}
        <path
          d="M78 112L86 276"
          stroke="#FFFFFF"
          strokeOpacity="0.45"
          strokeWidth="4.5"
          strokeLinecap="round"
        />

        {/* Hand-simmered tapioca pearls */}
        <g fill={palette.pearl}>
          <circle cx="91" cy="272" r="7.2" />
          <circle cx="108" cy="282" r="7.4" />
          <circle cx="124" cy="270" r="7.2" />
          <circle cx="141" cy="281" r="7.3" />
          <circle cx="152" cy="268" r="6.8" />
          <circle cx="96" cy="291" r="7" />
          <circle cx="126" cy="291" r="7.1" />
          <circle cx="146" cy="294" r="6.5" />
        </g>

        {/* Quiet specular glints on pearls */}
        <g fill="#FAF7F2" fillOpacity="0.45">
          <circle cx="88.5" cy="269.5" r="1.7" />
          <circle cx="121.5" cy="267.5" r="1.7" />
          <circle cx="138.5" cy="278.5" r="1.6" />
          <circle cx="105.5" cy="279.5" r="1.6" />
        </g>
      </g>

      {/* Outer crisp architectural glass outline */}
      <path d={glassPath} stroke="#1F1A17" strokeWidth="1.8" strokeLinejoin="round" />

      {/* Top rim ellipse & subtle coaster shadow */}
      <path d="M56 94H184" stroke="#1F1A17" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M84 312H156" stroke="#1F1A17" strokeOpacity="0.22" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}
