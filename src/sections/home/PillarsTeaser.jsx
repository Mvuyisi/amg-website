// Short teaser for the message: Grace, Purpose and Mercy, one tinted card each.
import { home } from '../../content/home.js'
import { pillars } from '../../content/pillars.js'

// One tint per card, in order, with a matching colour bar. Card text stays ink and
// muted, because brand-coloured text on a tint can fall below 4.5:1.
const cardColours = [
  { card: 'bg-blue-tint', bar: 'bg-blue' },
  { card: 'bg-cyan-tint', bar: 'bg-cyan-dark' },
  { card: 'bg-amber-tint', bar: 'bg-amber' },
]

export default function PillarsTeaser() {
  return (
    <section aria-labelledby="pillars-heading" className="mx-auto max-w-6xl px-4 py-16 sm:px-8 sm:py-24">
      <p className="text-sm font-semibold tracking-[0.25em] text-blue uppercase">{home.pillarsLabel}</p>
      <h2 id="pillars-heading" className="mt-3 text-4xl sm:text-5xl">
        {home.pillarsHeading}
      </h2>
      <p className="mt-4 max-w-xl text-lg text-muted">{home.pillarsIntro}</p>

      <ul className="mt-10 grid gap-4 md:grid-cols-3">
        {pillars.map((pillar, index) => (
          <li key={pillar.id} className={`rounded-3xl p-6 sm:p-8 ${cardColours[index].card}`}>
            <div className={`h-1.5 w-12 rounded-full ${cardColours[index].bar}`} />
            <h3 className="mt-5 text-3xl font-bold uppercase">{pillar.name}</h3>
            <p className="mt-3 text-muted">{pillar.explanation}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
