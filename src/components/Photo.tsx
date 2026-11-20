import { useState } from 'react'
import { CUP_PALETTES, type CupPalette } from '../data/menu'
import MilkTeaCup from './MilkTeaCup'

interface PhotoProps {
  src: string
  alt: string
  palette?: CupPalette
  className?: string
  imgClassName?: string
  priority?: boolean
}

/**
 * Displays a local photograph with an automatic minimalist MilkTeaCup
 * illustration fallback if the image cannot be loaded.
 */
export default function Photo({
  src,
  alt,
  palette = CUP_PALETTES.classic,
  className = '',
  imgClassName = '',
  priority = false,
}: PhotoProps) {
  const [failed, setFailed] = useState(false)

  if (!src || failed) {
    return (
      <div
        className={`flex items-center justify-center bg-linen/80 p-6 ${className}`}
      >
        <MilkTeaCup palette={palette} className="h-full max-h-64 w-auto" label={alt} />
      </div>
    )
  }

  return (
    <div className={`overflow-hidden bg-linen ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        onError={() => setFailed(true)}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  )
}
