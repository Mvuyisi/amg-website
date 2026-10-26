// Phase 0 theme preview for palette G. Replaced by the visual prototype in Phase 1.
import { site } from './config/site.js'

const colourGroups = [
  {
    title: 'Backgrounds',
    swatches: [
      { name: 'white', hex: '#FFFFFF', className: 'bg-white', use: 'Page background' },
      { name: 'soft', hex: '#F4F7FD', className: 'bg-soft', use: 'Alternate sections' },
    ],
  },
  {
    title: 'Text and lines',
    swatches: [
      { name: 'ink', hex: '#0B1B3A', className: 'bg-ink', use: 'Headings and body text' },
      { name: 'muted', hex: '#4A5878', className: 'bg-muted', use: 'Captions and dates' },
      { name: 'line', hex: '#E0E7F4', className: 'bg-line', use: 'Borders only' },
    ],
  },
  {
    title: 'Brand',
    swatches: [
      { name: 'blue', hex: '#1D4ED8', className: 'bg-blue', use: 'Primary buttons, links' },
      { name: 'cyan-dark', hex: '#0E7490', className: 'bg-cyan-dark', use: 'Secondary buttons' },
      { name: 'amber', hex: '#B45309', className: 'bg-amber', use: 'Booking buttons only' },
      { name: 'sky', hex: '#22A6D8', className: 'bg-sky', use: 'Gradient end only' },
    ],
  },
  {
    title: 'Soft tints',
    swatches: [
      { name: 'blue-tint', hex: '#E4ECFF', className: 'bg-blue-tint', use: 'Cards and tiles' },
      { name: 'cyan-tint', hex: '#DDF3F8', className: 'bg-cyan-tint', use: 'Cards and tiles' },
      { name: 'amber-tint', hex: '#FFEFD1', className: 'bg-amber-tint', use: 'Cards and tiles' },
    ],
  },
]

const pill =
  'inline-flex min-h-12 items-center justify-center rounded-full px-7 font-semibold transition-shadow hover:shadow-lg'

const buttons = [
  { label: 'Follow / Watch', note: 'Blue: primary actions', className: `${pill} bg-blue text-white hover:shadow-blue/30` },
  { label: 'Hear the Message', note: 'Cyan: secondary actions', className: `${pill} bg-cyan-dark text-white hover:shadow-cyan-dark/30` },
  { label: 'Book Apostle', note: 'Amber: booking only', className: `${pill} bg-amber text-white hover:shadow-amber/30` },
  { label: 'Learn more', note: 'Outlined: quieter actions', className: `${pill} border-2 border-blue text-blue hover:bg-blue-tint` },
]

// Accent text on a tint can fall below 4.5:1, so card text stays ink and muted and the
// brand colour only appears as the bar at the top.
const pillars = [
  { name: 'Grace', className: 'bg-blue-tint', bar: 'bg-blue' },
  { name: 'Purpose', className: 'bg-cyan-tint', bar: 'bg-cyan-dark' },
  { name: 'Mercy', className: 'bg-amber-tint', bar: 'bg-amber' },
]

// Placeholder figures. The live strip stays hidden until Apostle approves real numbers.
const tiles = [
  { value: '00+', label: 'Years in ministry', className: 'bg-blue-tint text-blue' },
  { value: '0,000+', label: 'Lives touched', className: 'bg-cyan-tint text-cyan-dark' },
  { value: '00+', label: 'Places preached', className: 'bg-amber-tint text-amber' },
]

function Section({ title, intro, children }) {
  return (
    <section className="border-t border-line py-12 sm:py-16">
      <h2 className="text-3xl sm:text-4xl">{title}</h2>
      {intro && <p className="mt-3 max-w-prose text-muted">{intro}</p>}
      <div className="mt-8">{children}</div>
    </section>
  )
}

function SwatchRow({ swatches }) {
  return (
    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {swatches.map((s) => (
        <li key={s.name}>
          <div className={`h-16 rounded-2xl ring-1 ring-ink/10 ${s.className}`} />
          <p className="mt-2 text-sm font-semibold">{s.name}</p>
          <p className="text-xs text-muted">
            {s.hex} · {s.use}
          </p>
        </li>
      ))}
    </ul>
  )
}

export default function App() {
  return (
    <>
      <header className="mx-auto max-w-5xl px-4 pt-12 pb-12 sm:px-8 sm:pt-20">
        <p className="text-xs font-semibold tracking-[0.25em] text-blue uppercase">
          Phase 0 · Theme preview · Palette G
        </p>
        <h1 className="mt-4 text-5xl sm:text-7xl">{site.name}</h1>
        <p className="mt-4 max-w-xl text-lg text-muted sm:text-xl">{site.tagline}</p>
      </header>

      <main className="mx-auto max-w-5xl px-4 sm:px-8">
        <Section title="Colours">
          <div className="space-y-8">
            {colourGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-3 font-sans text-sm tracking-wide text-muted uppercase">
                  {group.title}
                </h3>
                <SwatchRow swatches={group.swatches} />
              </div>
            ))}
          </div>
        </Section>

        <Section title="Typography" intro="Outfit for headings, DM Sans for everything else.">
          <div className="space-y-6">
            <div>
              <p className="text-xs text-muted">Outfit 800</p>
              <p className="font-display text-5xl leading-none font-extrabold uppercase sm:text-7xl">
                The Man
              </p>
            </div>
            <div>
              <p className="text-xs text-muted">Outfit 700</p>
              <p className="font-display text-4xl leading-none font-bold uppercase sm:text-5xl">
                The Message
              </p>
            </div>
            <div>
              <p className="text-xs text-muted">Outfit 600</p>
              <p className="font-display text-3xl leading-none font-semibold uppercase sm:text-4xl">
                The Mandate
              </p>
            </div>
            <p className="max-w-prose text-lg leading-relaxed">
              Body text is set in DM Sans, which stays clear and friendly on small screens. This
              paragraph shows the default body size and line height on a phone.
            </p>
            <p className="max-w-prose text-sm leading-relaxed text-muted">
              Secondary text in the muted tone, for captions, dates and supporting details.
            </p>
            <blockquote className="border-l-4 border-blue pl-4 font-display text-2xl font-semibold">
              “A signature quote will sit here, styled like this.”
            </blockquote>
          </div>
        </Section>

        <Section
          title="Buttons"
          intro="Pill-shaped, at least 44px tall, white text. On the gradient they turn white with blue text (see the band below)."
        >
          <ul className="grid gap-6 sm:grid-cols-2">
            {buttons.map((b) => (
              <li key={b.label} className="flex flex-col items-start gap-2">
                <button type="button" className={b.className}>
                  {b.label}
                </button>
                <p className="text-sm text-muted">{b.note}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Cards" intro="Soft tints for cards, one per pillar.">
          <ul className="grid gap-4 sm:grid-cols-3">
            {pillars.map((p) => (
              <li key={p.name} className={`rounded-3xl p-6 ${p.className}`}>
                <div className={`h-1.5 w-12 rounded-full ${p.bar}`} />
                <h3 className="mt-5 text-2xl font-bold uppercase">{p.name}</h3>
                <p className="mt-2 text-muted">A short explanation of this pillar sits here.</p>
                <p className="mt-4 text-sm font-semibold">Key scripture · Book 0:00</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section
          title="Number tiles"
          intro="Sample layout only. On the live site this strip stays hidden until Apostle approves the real figures."
        >
          <ul className="grid gap-4 sm:grid-cols-3">
            {tiles.map((t) => (
              <li key={t.label} className={`rounded-3xl p-6 ${t.className}`}>
                <p className="font-display text-5xl leading-none font-extrabold">{t.value}</p>
                <p className="mt-3 text-sm font-semibold text-ink">{t.label}</p>
              </li>
            ))}
          </ul>
        </Section>
      </main>

      <section className="bg-brand-gradient text-white">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-8 sm:py-24">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase">The Mandate</p>
          <h2 className="mt-4 max-w-2xl text-4xl sm:text-6xl">From darkness to light</h2>
          <p className="mt-4 max-w-xl text-lg">
            The gradient band for the Home hero and the Mandate: dark navy into bright blue. Text
            stays in the darker part of the band.
          </p>
          <button
            type="button"
            className={`${pill} mt-8 bg-white text-blue hover:bg-blue-tint focus-visible:outline-white`}
          >
            Partner with us
          </button>
        </div>
      </section>

      <footer className="mx-auto max-w-5xl px-4 py-10 text-sm text-muted sm:px-8">
        Theme tokens and contrast notes live in <code className="text-ink">src/index.css</code>.
      </footer>
    </>
  )
}
