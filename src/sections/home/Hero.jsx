// Home hero: the APOSTLE label, the name as a very large heading, the tagline, the
// welcome video and the two main buttons.
//
// On a phone everything stacks in that order. On a wide screen the video moves into a
// right-hand column and the text and buttons share the left one.
import PillLink from '../../components/ui/PillLink.jsx'
import { home } from '../../content/home.js'
import { settings } from '../../content/settings.js'
import WelcomeVideo from './WelcomeVideo.jsx'

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-10 pb-8 sm:px-8 sm:pt-16 lg:grid lg:grid-cols-2 lg:gap-x-14 lg:pt-20 lg:pb-12">
      <div className="lg:self-end">
        <h1>
          <span className="block font-sans text-sm font-semibold tracking-[0.3em] text-blue">
            {home.heroLabel}
          </span>
          <span className="mt-3 block text-6xl leading-[0.9] sm:text-8xl">{home.heroTitle}</span>
        </h1>
        <p className="mt-6 max-w-md text-lg text-muted sm:text-xl">{settings.tagline}</p>
      </div>

      <div className="mt-8 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0 lg:self-center">
        <WelcomeVideo
          url={settings.welcomeVideoUrl}
          title={home.welcomeVideoTitle}
          comingSoonText={home.welcomeVideoComingSoon}
        />
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:self-start">
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
