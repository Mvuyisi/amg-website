// Three numbered cards (01 to 03) leading to The Man, The Message and The Mandate.
import PillLink from '../../components/ui/PillLink.jsx'
import { home } from '../../content/home.js'

export default function EntryCards() {
  return (
    <section aria-labelledby="entry-heading" className="bg-soft py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <p className="text-sm font-semibold tracking-[0.25em] text-blue uppercase">{home.entryLabel}</p>
        <h2 id="entry-heading" className="mt-3 text-4xl sm:text-5xl">
          {home.entryHeading}
        </h2>

        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {home.entryCards.map((card, index) => (
            <li key={card.link} className="flex flex-col rounded-3xl bg-white p-6 ring-1 ring-line sm:p-8">
              {/* 01, 02, 03 */}
              <p className="font-display text-5xl font-extrabold text-blue">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="mt-4 text-2xl font-bold uppercase">{card.title}</h3>
              <p className="mt-3 mb-8 text-muted">{card.text}</p>
              <PillLink to={card.link} variant="blue" size="small" className="mt-auto self-start">
                {home.entryButtonText}
                {/* Screen readers hear "Discover more about The Man" rather than three identical links. */}
                <span className="sr-only"> about {card.title}</span>
              </PillLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
