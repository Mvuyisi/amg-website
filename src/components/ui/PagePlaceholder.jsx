// Stand-in for a page that is built in a later step of the prototype, so every link
// in the menu and footer already goes somewhere.
import { usePageTitle } from '../../hooks/usePageTitle.js'
import PillLink from './PillLink.jsx'

export default function PagePlaceholder({ title }) {
  usePageTitle(title)

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-8 sm:py-28">
      <p className="text-sm font-semibold tracking-[0.25em] text-blue uppercase">Prototype</p>
      <h1 className="mt-4 text-5xl sm:text-7xl">{title}</h1>
      <p className="mt-6 max-w-xl text-lg text-muted">
        This page is coming in the next step of the prototype.
      </p>
      <PillLink to="/" variant="outlineBlue" className="mt-10">
        Back to Home
      </PillLink>
    </section>
  )
}
