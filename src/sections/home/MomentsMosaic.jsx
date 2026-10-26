// "Moments of ministry": a mosaic of six event photos and a link to the full gallery.
// Two columns on a phone, three on larger screens. Each photo keeps its own shape,
// which gives the mosaic its varied heights.
//
// The photos are the gallery photos marked `featured` in src/content/images.js. Once
// the Gallery reads from the database (Phase 5), this takes the featured photos from
// there instead, and the admin chooses which ones are featured.
import Photo from '../../components/ui/Photo.jsx'
import PillLink from '../../components/ui/PillLink.jsx'
import { home } from '../../content/home.js'
import { images } from '../../content/images.js'

const featuredPhotos = images.filter((image) => image.featured).slice(0, 6)

export default function MomentsMosaic() {
  return (
    <section aria-labelledby="moments-heading" className="mx-auto max-w-6xl px-4 pt-16 sm:px-8 sm:pt-24">
      <p className="text-sm font-semibold tracking-[0.25em] text-blue uppercase">{home.momentsLabel}</p>
      <h2 id="moments-heading" className="mt-3 text-4xl sm:text-5xl">
        {home.momentsHeading}
      </h2>

      {/* CSS columns fill top to bottom, so photos of different heights pack neatly. */}
      <ul className="mt-10 columns-2 gap-3 sm:gap-4 lg:columns-3">
        {featuredPhotos.map((photo) => (
          <li key={photo.id} className="mb-3 break-inside-avoid sm:mb-4">
            <Photo slot={photo.id} className="rounded-2xl" />
          </li>
        ))}
      </ul>

      <PillLink to="/gallery" variant="outlineBlue" className="mt-6 w-full sm:w-auto">
        {home.momentsButtonText}
      </PillLink>
    </section>
  )
}
