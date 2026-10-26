// Strip of three big-number tiles: years in ministry, lives touched, places preached.
//
// SAMPLE LAYOUT: the values in src/content/settings.js are placeholders for the
// prototype. On the live site this strip stays hidden until Apostle has approved the
// real figures (SPEC 3.1), which is why it disappears if any value is left empty.
import { settings } from '../../content/settings.js'

// One brand colour per tile, in order. Amber on its tint is 4.4:1, which is only
// allowed because the numbers are large text (see src/index.css).
const tileColours = ['bg-blue-tint text-blue', 'bg-cyan-tint text-cyan-dark', 'bg-amber-tint text-amber']

export default function NumberTiles() {
  const tiles = settings.numberTiles
  if (tiles.some((tile) => !tile.value)) return null

  return (
    <section aria-label="Ministry in numbers" className="mx-auto max-w-6xl px-4 pb-16 sm:px-8 sm:pb-24">
      <ul className="grid grid-cols-3 gap-2 sm:gap-4">
        {tiles.map((tile, index) => (
          <li key={tile.id} className={`rounded-2xl px-2 py-5 text-center sm:rounded-3xl sm:p-8 ${tileColours[index]}`}>
            <p className="font-display text-2xl leading-none font-extrabold tracking-tight sm:text-5xl">{tile.value}</p>
            <p className="mt-2 text-xs font-semibold text-ink sm:mt-3 sm:text-sm">{tile.label}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
