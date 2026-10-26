// Friendly 404 page, shown for any address that does not match a page.
import PillLink from '../components/ui/PillLink.jsx'
import { usePageTitle } from '../hooks/usePageTitle.js'

export default function NotFound() {
  usePageTitle('Page not found')

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-8 sm:py-28">
      <p className="font-display text-7xl font-extrabold text-blue sm:text-9xl">404</p>
      <h1 className="mt-4 text-4xl sm:text-6xl">Page not found</h1>
      <p className="mt-6 max-w-xl text-lg text-muted">
        Sorry, we could not find that page. The link may be mistyped, or the page may have moved.
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <PillLink to="/" variant="blue" className="w-full sm:w-auto">
          Back to Home
        </PillLink>
        <PillLink to="/bookings" variant="outlineBlue" className="w-full sm:w-auto">
          Bookings
        </PillLink>
      </div>
    </section>
  )
}
