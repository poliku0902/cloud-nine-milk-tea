import { useEffect, useState } from 'react'

/**
 * Tracks which section id is currently nearest the top third of the viewport.
 * Clears the active highlight when scrolled back into the hero at the top.
 */
export function useActiveSection(sectionIds: readonly string[]): string {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const updateActive = () => {
      const triggerY = window.scrollY + window.innerHeight * 0.3
      const firstSectionTop = elements[0]?.offsetTop ?? 0

      if (window.scrollY < Math.max(120, firstSectionTop - window.innerHeight * 0.45)) {
        setActiveId('')
        return
      }

      let current = ''
      for (const el of elements) {
        if (el.offsetTop <= triggerY) {
          current = el.id
        }
      }
      setActiveId(current)
    }

    updateActive()
    window.addEventListener('scroll', updateActive, { passive: true })
    window.addEventListener('resize', updateActive, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateActive)
      window.removeEventListener('resize', updateActive)
    }
  }, [sectionIds])

  return activeId
}
