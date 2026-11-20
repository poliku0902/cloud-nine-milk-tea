import { StarIcon } from './Icons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const REVIEWS = [
  {
    name: "Sophie L.",
    detail: "Brown sugar loyalist",
    stars: 5,
    quote:
      "The brown sugar pearls are still warm when you get them. I've tried every boba spot in Portland and this is the one I keep coming back to.",
    initial: "S",
    tint: "bg-blush/60",
  },
  {
    name: "Marcus T.",
    detail: "Matcha convert",
    stars: 5,
    quote:
      "I used to think matcha tasted like grass. The ceremonial latte here changed my mind in one sip — it's creamy, earthy and not too sweet at 50%.",
    initial: "M",
    tint: "bg-matcha/40",
  },
  {
    name: "Ava R.",
    detail: "Friday regular",
    stars: 5,
    quote:
      "Cozy lighting, nice playlist, and the mango passionfruit tea is basically sunshine in a cup. The staff remembers my order now, which is a little dangerous.",
    initial: "A",
    tint: "bg-milk/25",
  },
]

/** Three short testimonials with star ratings. */
export default function Reviews() {
  return (
    <section
      id="reviews"
      className="scroll-mt-24 border-y border-milk/10 bg-cream-deep/40 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Kind words"
            title="What our regulars say"
            subtitle="A few notes from the people who keep our little counter busy."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {REVIEWS.map((review, index) => (
            <Reveal key={review.name} delay={index * 90}>
              <figure className="flex h-full flex-col rounded-[2rem] border border-milk/15 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div
                  className="flex items-center gap-1 text-milk"
                  aria-label={`${review.stars} out of 5 stars`}
                >
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <StarIcon key={i} className="size-4" />
                  ))}
                </div>

                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-cocoa/75">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>

                <figcaption className="mt-5 flex items-center gap-3 border-t border-milk/15 pt-4">
                  <span
                    className={`grid size-10 place-items-center rounded-full ${review.tint} font-display text-base font-semibold text-cocoa`}
                    aria-hidden="true"
                  >
                    {review.initial}
                  </span>
                  <div>
                    <p className="text-sm font-extrabold text-cocoa">{review.name}</p>
                    <p className="text-[11px] font-bold text-cocoa/70">{review.detail}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
