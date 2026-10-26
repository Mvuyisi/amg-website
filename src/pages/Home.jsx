// Home page, in the order of the approved mockup (option G, SPEC 3.1).
import { usePageTitle } from '../hooks/usePageTitle.js'
import BookingBlock from '../sections/home/BookingBlock.jsx'
import EntryCards from '../sections/home/EntryCards.jsx'
import Hero from '../sections/home/Hero.jsx'
import MandateBand from '../sections/home/MandateBand.jsx'
import MinisteringBand from '../sections/home/MinisteringBand.jsx'
import MomentsMosaic from '../sections/home/MomentsMosaic.jsx'
import NumberTiles from '../sections/home/NumberTiles.jsx'
import PillarsTeaser from '../sections/home/PillarsTeaser.jsx'

export default function Home() {
  usePageTitle()

  return (
    <>
      <Hero />
      <NumberTiles />
      <EntryCards />
      <MinisteringBand />
      <PillarsTeaser />
      <MandateBand />
      <MomentsMosaic />
      <BookingBlock />
      {/* Featured strip (latest sermon and next event, SPEC 3.1) is not built yet. It will
          only show while showSermons or showEvents is switched on. */}
    </>
  )
}
