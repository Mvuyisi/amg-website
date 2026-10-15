// Phase 0 theme preview. Replaced by the real site shell in Phase 1.
import { features, site, socials } from './config/site.js'

const inkSwatches = [
  { name: 'ink-950', hex: '#0B0A08', className: 'bg-ink-950' },
  { name: 'ink-900', hex: '#14120F', className: 'bg-ink-900' },
  { name: 'ink-800', hex: '#1E1B17', className: 'bg-ink-800' },
  { name: 'ink-700', hex: '#2C2822', className: 'bg-ink-700' },
  { name: 'ink-600', hex: '#3D372F', className: 'bg-ink-600' },
]

const goldSwatches = [
  { name: 'gold-200', hex: '#EEDBA0', className: 'bg-gold-200' },
  { name: 'gold-300', hex: '#E6C873', className: 'bg-gold-300' },
  { name: 'gold-400', hex: '#DDB54E', className: 'bg-gold-400' },
  { name: 'gold-500', hex: '#D4AF37', className: 'bg-gold-500' },
  { name: 'gold-600', hex: '#B8922A', className: 'bg-gold-600' },
  { name: 'gold-700', hex: '#94731F', className: 'bg-gold-700' },
  { name: 'gold-800', hex: '#6E5418', className: 'bg-gold-800' },
  { name: 'gold-900', hex: '#4A3911', className: 'bg-gold-900' },
]

const textSwatches = [
  { name: 'cream', hex: '#F5F1E8', className: 'bg-cream' },
  { name: 'muted', hex: '#A8A196', className: 'bg-muted' },
]

function Section({ title, children }) {
  return (
    <section className="border-t border-ink-700 py-10">
      <h2 className="text-2xl font-semibold text-gold-400 sm:text-3xl">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  )
}

function SwatchRow({ swatches }) {
  return (
    <ul className="grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-8">
      {swatches.map((s) => (
        <li key={s.name}>
          <div className={`h-14 rounded-lg ring-1 ring-ink-600 ${s.className}`} />
          <p className="mt-2 text-sm text-cream">{s.name}</p>
          <p className="text-xs text-muted">{s.hex}</p>
        </li>
      ))}
    </ul>
  )
}

export default function App() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-500">
        Phase 0 · Theme preview
      </p>
      <h1 className="mt-4 text-4xl leading-tight font-bold sm:text-6xl">{site.name}</h1>
      <p className="mt-4 max-w-xl text-lg text-gold-300 sm:text-xl">{site.tagline}</p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-gold-500 px-7 font-semibold text-ink-950 transition-colors hover:bg-gold-400"
        >
          Book Apostle
        </button>
        <button
          type="button"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-gold-500 px-7 font-semibold text-gold-400 transition-colors hover:bg-gold-500/10"
        >
          Follow / Watch
        </button>
      </div>

      <div className="mt-12">
        <Section title="Colours">
          <h3 className="mb-3 font-sans text-sm font-semibold tracking-wide text-muted uppercase">
            Dark
          </h3>
          <SwatchRow swatches={inkSwatches} />
          <h3 className="mt-8 mb-3 font-sans text-sm font-semibold tracking-wide text-muted uppercase">
            Gold
          </h3>
          <SwatchRow swatches={goldSwatches} />
          <h3 className="mt-8 mb-3 font-sans text-sm font-semibold tracking-wide text-muted uppercase">
            Text
          </h3>
          <SwatchRow swatches={textSwatches} />
        </Section>

        <Section title="Typography">
          <div className="space-y-5">
            <p className="font-display text-4xl font-bold sm:text-5xl">The Man</p>
            <p className="font-display text-3xl font-semibold text-gold-400 sm:text-4xl">
              The Message
            </p>
            <p className="font-display text-2xl italic sm:text-3xl">The Mandate</p>
            <p className="max-w-prose leading-relaxed">
              Body text is set in Inter for easy reading on small screens. Headings use Playfair
              Display for a strong, warm, classic feel. This paragraph shows the default body size
              and line height on a phone.
            </p>
            <p className="max-w-prose text-sm leading-relaxed text-muted">
              Secondary text in the muted tone, for captions, dates and supporting details.
            </p>
            <blockquote className="border-l-2 border-gold-500 pl-4 font-display text-xl text-gold-200 italic">
              “A signature quote will sit here, styled like this.”
            </blockquote>
          </div>
        </Section>

        <Section title="Darkness to light">
          <div className="h-24 rounded-xl bg-linear-to-r from-ink-950 via-gold-900 to-gold-400 ring-1 ring-ink-600" />
          <p className="mt-3 text-sm text-muted">
            Gradient sample for the Mandate section, which shifts from dark to gold as you scroll.
          </p>
        </Section>

        <Section title="Feature switches">
          <p className="mb-4 text-sm text-muted">
            Read live from <code className="text-gold-300">src/config/site.js</code>
          </p>
          <ul className="divide-y divide-ink-700 rounded-xl bg-ink-900 ring-1 ring-ink-700">
            {Object.entries(features).map(([key, on]) => (
              <li key={key} className="flex min-h-11 items-center justify-between px-4 py-2">
                <code className="text-sm">{key}</code>
                <span
                  className={
                    on
                      ? 'rounded-full bg-gold-500 px-3 py-0.5 text-xs font-semibold text-ink-950'
                      : 'rounded-full bg-ink-700 px-3 py-0.5 text-xs font-semibold text-muted'
                  }
                >
                  {on ? 'On' : 'Off'}
                </span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Socials (placeholders)">
          <ul className="flex flex-wrap gap-2">
            {socials.map((s) => (
              <li
                key={s.id}
                className="inline-flex min-h-11 items-center rounded-full border border-ink-600 px-4 text-sm"
              >
                {s.label}
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </main>
  )
}
