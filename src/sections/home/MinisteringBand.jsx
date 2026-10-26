// Full-width photo band of Apostle ministering, with a one-line caption underneath.
// Sits between the three entry cards and the Grace, Purpose and Mercy teaser.
import Photo from '../../components/ui/Photo.jsx'
import { home } from '../../content/home.js'

export default function MinisteringBand() {
  return (
    <figure>
      {/* A fixed height per screen size, so the band never gets too tall on a computer. */}
      <div className="relative h-64 sm:h-96 lg:h-[34rem]">
        <Photo slot="homeMinistering" fill />
      </div>
      <figcaption className="mx-auto max-w-6xl px-4 pt-4 text-sm text-muted sm:px-8">
        {home.ministeringCaption}
      </figcaption>
    </figure>
  )
}
