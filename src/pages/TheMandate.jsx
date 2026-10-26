// The Mandate page. Placeholder until it is built in the next step of the prototype;
// its banner photo spot is already in place.
import PagePlaceholder from '../components/ui/PagePlaceholder.jsx'
import Photo from '../components/ui/Photo.jsx'

export default function TheMandate() {
  return (
    <PagePlaceholder title="The Mandate">
      <Photo slot="theMandateBanner" priority className="rounded-3xl" />
    </PagePlaceholder>
  )
}
