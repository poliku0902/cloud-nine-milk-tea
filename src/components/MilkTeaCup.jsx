import { useId } from 'react'
import { CUP_PALETTES } from '../data/menuData'

/**
 * A hand-drawn milk tea cup, 100% inline SVG.
 * `palette` controls the tea colour, pearls and straw.
 * No image files — nothing can break.
 */
export default function MilkTeaCup({
  palette = CUP_PALETTES.classic,
  className = '',
  showSteam = true,
  label = 'Illustrated cup of milk tea',
}) {
  // Unique gradient ids so several cups can live on the same page
  const uid = useId().replace(/:/g, '')
  const tea = `tea-${uid}`
  const pearl = `pearl-${uid}`
  const cup = `cup-${uid}`

  const body = 'M58 96H182L172 288c-.7 10-9 17-20 17H88c-11 0-19.3-7-20-17L58 96Z'

  return (
    <svg
      viewBox="0 0 240 340"
      className={className}
      role="img"
      aria-label={label}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={tea} x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor={palette.light} />
          <stop offset="100%" stopColor={palette.dark} />
        </linearGradient>
        <radialGradient id={pearl} cx="32%" cy="28%" r="78%">
          <stop offset="0%" stopColor="#8A6A52" />
          <stop offset="55%" stopColor={palette.pearl} />
          <stop offset="100%" stopColor="#2E1E16" />
        </radialGradient>
        <clipPath id={cup}>
          <path d={body} />
        </clipPath>
      </defs>

      {/* Steam */}
      {showSteam && (
        <g stroke="#B08968" strokeWidth="4" strokeLinecap="round" fill="none">
          <path d="M88 54c-7-8 7-13 0-23" opacity="0.45" />
          <path d="M108 50c-7-8 7-13 0-23" opacity="0.3" />
        </g>
      )}

      {/* Straw (behind the lid) */}
      <g transform="rotate(-9 152 62)">
        <rect x="144" y="6" width="18" height="92" rx="9" fill={palette.accent} />
        <rect x="144" y="6" width="5.5" height="92" rx="2.75" fill="#FFFFFF" opacity="0.4" />
      </g>

      {/* Cup body + tea */}
      <path d={body} fill={`url(#${tea})`} />
      <g clipPath={`url(#${cup})`}>
        {/* milk swirl at the top */}
        <ellipse cx="120" cy="112" rx="72" ry="22" fill="#FFF8F0" opacity="0.28" />
        {/* pearls */}
        <g fill={`url(#${pearl})`}>
          <circle cx="88" cy="272" r="9.5" />
          <circle cx="107" cy="284" r="9.5" />
          <circle cx="126" cy="267" r="9.5" />
          <circle cx="145" cy="283" r="9.5" />
          <circle cx="160" cy="271" r="9" />
          <circle cx="96" cy="297" r="9" />
          <circle cx="133" cy="299" r="9" />
          <circle cx="151" cy="296" r="8.5" />
        </g>
        {/* pearl highlights */}
        <g fill="#FFFFFF" opacity="0.35">
          <circle cx="85" cy="268" r="2.6" />
          <circle cx="123" cy="263" r="2.6" />
          <circle cx="142" cy="279" r="2.4" />
          <circle cx="93" cy="293" r="2.4" />
        </g>
        {/* little cloud emblem */}
        <g fill="#FFF8F0" opacity="0.9">
          <circle cx="103" cy="190" r="11" />
          <circle cx="122" cy="182" r="15" />
          <circle cx="141" cy="190" r="10" />
          <rect x="94" y="188" width="56" height="15" rx="7.5" />
        </g>
        {/* glass highlight */}
        <rect x="74" y="126" width="9" height="118" rx="4.5" fill="#FFFFFF" opacity="0.2" />
      </g>

      {/* Cup outline */}
      <path d={body} fill="none" stroke="#4A3428" strokeOpacity="0.14" strokeWidth="2" />

      {/* Lid */}
      <rect x="46" y="64" width="148" height="30" rx="15" fill="#FFF8F0" stroke="#E3CFB9" strokeWidth="2" />
      <path d="M62 79h116" stroke="#E3CFB9" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
