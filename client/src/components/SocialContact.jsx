import { shop } from '../config'
import { FacebookIcon, InstagramIcon, TikTokIcon } from './Icons'
import Reveal from './Reveal'

const SOCIALS = [
  {
    key: 'facebook',
    label: 'Facebook',
    handle: '@cloudninemilktea',
    icon: FacebookIcon,
    tint: 'bg-[#1877F2]/10 text-[#1877F2]',
  },
  {
    key: 'instagram',
    label: 'Instagram',
    handle: '@cloudnine.tea',
    icon: InstagramIcon,
    tint: 'bg-[#E1306C]/10 text-[#C13584]',
  },
  {
    key: 'tiktok',
    label: 'TikTok',
    handle: '@cloudninetea',
    icon: TikTokIcon,
    tint: 'bg-cocoa/8 text-cocoa',
  },
]

/** Social buttons + a soft closing call-to-action. */
export default function SocialContact() {
  return (
    <section aria-labelledby="social-title" className="pb-16 sm:pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-milk/20 bg-gradient-to-br from-blush/45 via-cream to-matcha/25 p-7 sm:p-10">
            {/* soft decorative dots */}
            <span aria-hidden="true" className="absolute right-10 top-6 size-3 rounded-full bg-blush/70" />
            <span aria-hidden="true" className="absolute bottom-8 right-1/2 size-2 rounded-full bg-matcha/50" />
            <span aria-hidden="true" className="absolute -bottom-5 left-10 size-14 rounded-full bg-blush/25" />

            <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-md">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-milk">
                  Social &amp; contact
                </p>
                <h2
                  id="social-title"
                  className="mt-2 font-display text-3xl font-semibold leading-tight text-cocoa sm:text-4xl"
                >
                  Let&apos;s be internet friends
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-cocoa/70">
                  Secret menu drops, new seasonal flavors and the occasional photo of a very cute
                  cup. Tag us and we&apos;ll repost you.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:w-[27rem]">
                {SOCIALS.map(({ key, label, handle, icon: Icon, tint }) => (
                  <a
                    key={key}
                    href={shop.social[key]}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${shop.name} on ${label}`}
                    className="group flex items-center gap-3 rounded-2xl border border-white/80 bg-white/85 px-3.5 py-3 shadow-soft transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-lift active:translate-y-0 active:scale-95 sm:flex-col sm:items-start sm:gap-2.5 sm:px-4 sm:py-4"
                  >
                    <span className={`grid size-10 place-items-center rounded-xl ${tint}`}>
                      <Icon className="size-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-extrabold text-cocoa">{label}</span>
                      <span className="block truncate text-[11px] font-bold text-cocoa/70">
                        {handle}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <p className="relative mt-6 text-xs font-bold text-cocoa/70">
              Prefer email? Reach us at{' '}
              <a
                href={`mailto:${shop.email}`}
                className="text-cocoa underline decoration-milk/50 underline-offset-4 transition hover:decoration-cocoa"
              >
                {shop.email}
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
