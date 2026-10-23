import { useEffect, useState } from 'react'

/**
 * useActiveSection — highlights the nav link for the section you're reading.
 * We check which section's top has passed ~35% of the viewport.
 */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  const key = ids.join('|')

  useEffect(() => {
    const sectionIds = key.split('|')

    const update = () => {
      const probe = window.innerHeight * 0.35
      let current = sectionIds[0]

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= probe) current = id
      }

      // At the very bottom of the page, mark the last section as active
      const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 4
      setActive(atBottom ? sectionIds[sectionIds.length - 1] : current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [key])

  return active
}
