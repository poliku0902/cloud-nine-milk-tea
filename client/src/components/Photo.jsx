import { useState } from 'react'

/**
 * A photo that never breaks: if the file is missing or fails to load,
 * it swaps itself for the inline-SVG fallback you pass in.
 */
export default function Photo({
  src,
  alt,
  className = '',
  fallback,
  loading = 'lazy',
  ...rest
}) {
  const [failed, setFailed] = useState(false)

  if (!src || failed) {
    return (
      <div
        className={`${className} grid place-items-center bg-cream-deep`}
        {...(alt ? { role: 'img', 'aria-label': alt } : { 'aria-hidden': true })}
      >
        {fallback}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      onError={() => setFailed(true)}
      className={className}
      {...rest}
    />
  )
}
