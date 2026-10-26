// Full-width Mandate band on the navy-to-blue gradient: "From darkness to light."
// Text sits top left, in the darker part of the gradient where white stays readable.
import PillLink from '../../components/ui/PillLink.jsx'
import { home } from '../../content/home.js'

export default function MandateBand() {
  return (
    <section aria-labelledby="mandate-heading" className="bg-brand-gradient text-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-8 sm:py-28">
        <p className="text-sm font-semibold tracking-[0.25em] uppercase">{home.mandateLabel}</p>
        <h2 id="mandate-heading" className="mt-4 max-w-3xl text-5xl sm:text-7xl">
          {home.mandateHeading}
        </h2>
        <p className="mt-6 max-w-xl text-lg sm:text-xl">{home.mandateText}</p>
        <PillLink to="/the-mandate" variant="white" className="mt-10">
          {home.mandateButtonText}
        </PillLink>
      </div>
    </section>
  )
}
