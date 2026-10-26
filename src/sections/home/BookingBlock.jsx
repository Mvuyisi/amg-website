// Booking block in dark navy, with the amber "Send a booking request" button.
import PillLink from '../../components/ui/PillLink.jsx'
import { home } from '../../content/home.js'

export default function BookingBlock() {
  return (
    <section aria-labelledby="booking-heading" className="mx-auto max-w-6xl px-4 py-16 sm:px-8 sm:py-24">
      <div className="rounded-3xl bg-ink px-6 py-12 text-white sm:px-12 sm:py-16">
        <p className="text-sm font-semibold tracking-[0.25em] uppercase">{home.bookingLabel}</p>
        <h2 id="booking-heading" className="mt-4 max-w-2xl text-4xl sm:text-5xl">
          {home.bookingHeading}
        </h2>
        <p className="mt-5 max-w-xl text-lg text-white/85">{home.bookingText}</p>
        {/* White focus ring: the default blue one is hard to see on navy. */}
        <PillLink to="/bookings" variant="amber" className="mt-10 w-full focus-visible:outline-white sm:w-auto">
          {home.bookingButtonText}
        </PillLink>
      </div>
    </section>
  )
}
