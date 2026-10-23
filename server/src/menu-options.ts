/* Fixed customisation choices. These rarely change and have no price attached,
   so they live in code rather than in the database. The ids match what the
   frontend cart already stores. */

export const SUGAR_LEVELS = ['0%', '25%', '50%', '75%', '100%'] as const

export const ICE_LEVELS = [
  { id: 'No ice', label: 'No ice' },
  { id: 'Less', label: 'Less ice' },
  { id: 'Normal', label: 'Normal ice' },
] as const
