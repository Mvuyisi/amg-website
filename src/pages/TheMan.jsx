// The Man page. Placeholder until it is built in the next step of the prototype; its
// two photo spots are already in place.
import PagePlaceholder from '../components/ui/PagePlaceholder.jsx'
import Photo from '../components/ui/Photo.jsx'

export default function TheMan() {
  return (
    <PagePlaceholder title="The Man">
      {/* Portrait and second photo side by side from tablet width, stacked on a phone. */}
      <div className="grid gap-4 md:grid-cols-[2fr_3fr] md:items-start">
        <Photo slot="theManPortrait" priority className="rounded-3xl" />
        <Photo slot="theManSecond" className="rounded-3xl" />
      </div>
    </PagePlaceholder>
  )
}
