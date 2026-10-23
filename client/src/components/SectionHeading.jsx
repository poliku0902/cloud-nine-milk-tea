/** Shared section heading: small eyebrow label + big title + optional subtitle. */
export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <div className={`flex flex-col ${alignment} gap-3`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full bg-blush/45 px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-cocoa">
          {eyebrow}
        </span>
      )}
      <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-cocoa sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-xl text-base leading-relaxed text-cocoa/70">{subtitle}</p>
      )}
    </div>
  )
}
