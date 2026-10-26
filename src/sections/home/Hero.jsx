// Home hero: a full-width photo of Apostle with the APOSTLE label, his name and the
// tagline over the lower part, the welcome video floating on one side, and the two main
// buttons directly under the photo.
//
// Layout over the photo:
//   phone        video card on its side, with the text underneath it, both at the bottom
//   wide screen  text and video card side by side along the bottom
// The video's side comes from settings.videoSide, so it can be moved off Apostle's face.
//
// Contrast: the navy fade is at least 80% navy across the bottom half of the photo,
// which keeps white text above 9:1 even over a pure white photo (7.7:1 for the 90%
// white tagline). All the text sits inside that bottom half.
import Photo from '../../components/ui/Photo.jsx'
import PillLink from '../../components/ui/PillLink.jsx'
import { home } from '../../content/home.js'
import { settings } from '../../content/settings.js'
import WelcomeVideo from './WelcomeVideo.jsx'

export default function Hero() {
  const videoOnLeft = settings.videoSide === 'left'

  return (
    <section aria-labelledby="hero-heading">
      {/* Tall on a phone (most of the first screen, at least 560px), shorter on computers. */}
      <div className="relative h-[78svh] min-h-[35rem] lg:h-[82vh] lg:max-h-[54rem] lg:min-h-[40rem]">
        <Photo slot="homeHero" wideSlot="homeHeroWide" fill priority placeholderTone="gradient" labelPosition="top" />

        {/* Navy fade: solid at the very bottom, 80% at halfway, clear by 85% of the height. */}
        <div className="absolute inset-0 bg-linear-to-t from-ink from-10% via-ink/80 via-50% to-transparent to-85%" />

        {/* On a wide screen the text and video sit in one row: row-reverse puts the video
            (first in the code) on the right, a plain row puts it on the left. */}
        <div
          className={`relative mx-auto flex h-full max-w-6xl flex-col justify-end gap-6 px-4 pb-8 sm:px-8 lg:items-end lg:justify-between lg:gap-12 lg:pb-14 ${
            videoOnLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
          }`}
        >
          <div className={`flex ${videoOnLeft ? 'justify-start' : 'justify-end'}`}>
            <WelcomeVideo
              url={settings.welcomeVideoUrl}
              label={home.welcomeVideoLabel}
              title={home.welcomeVideoTitle}
              comingSoonText={home.welcomeVideoComingSoon}
            />
          </div>

          <div className="text-white lg:max-w-2xl">
            <h1 id="hero-heading">
              <span className="block font-sans text-sm font-semibold tracking-[0.3em]">{home.heroLabel}</span>
              <span className="mt-3 block text-6xl leading-[0.9] sm:text-8xl">{home.heroTitle}</span>
            </h1>
            <p className="mt-5 max-w-md text-lg text-white/90 sm:text-xl">{settings.tagline}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 sm:flex-row sm:px-8 lg:py-8">
        <PillLink to={home.watchButtonLink} variant="blue" className="w-full sm:w-auto">
          {home.watchButtonText}
        </PillLink>
        <PillLink href="#follow" variant="outlineCyan" className="w-full sm:w-auto">
          {home.followButtonText}
        </PillLink>
      </div>
    </section>
  )
}
