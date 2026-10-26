// Floating welcome video card over the hero photo: a small gradient preview with a play
// button and the label "Watch welcome message". About 40% of the screen wide on a phone,
// larger on wide screens.
//
// Tapping it opens the video in a larger player on top of the page (VideoDialog).
// Nothing from the video host loads before that tap, to save mobile data (SPEC 2, 3.1).
// A link that is not YouTube cannot play inside the page, so the card opens it in a new
// tab instead.
import { useRef, useState } from 'react'
import PlayIcon from '../../components/ui/PlayIcon.jsx'
import VideoDialog from '../../components/ui/VideoDialog.jsx'
import { getVideoEmbedUrl } from '../../lib/videoEmbed.js'

// The blue ring plus white outline keeps the keyboard focus visible over any photo.
const cardClasses =
  'group block w-[40vw] rounded-2xl bg-white p-1.5 text-left shadow-xl shadow-ink/30 transition hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-blue focus-visible:outline-white sm:w-64 lg:w-80 lg:p-2'

export default function WelcomeVideo({ url, label, title, comingSoonText }) {
  const [open, setOpen] = useState(false)
  const cardRef = useRef(null)
  const embedUrl = getVideoEmbedUrl(url)

  function handleClose() {
    setOpen(false)
    // Put focus back on the card, so keyboard and screen reader users carry on where
    // they were. Some browsers (Safari) do not do this on their own.
    cardRef.current?.focus()
  }

  const cardContent = (
    <>
      <span className="flex aspect-video items-center justify-center rounded-xl bg-brand-gradient">
        <span className="flex size-11 items-center justify-center rounded-full bg-white text-blue shadow-lg transition group-hover:scale-105 lg:size-16">
          <PlayIcon className="ml-0.5 size-5 lg:size-7" />
        </span>
      </span>
      <span className="block px-1.5 pt-2 pb-1 text-xs leading-snug font-semibold text-ink sm:text-sm lg:px-2 lg:text-base">
        {label}
      </span>
    </>
  )

  if (url && !embedUrl) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className={cardClasses}>
        {cardContent}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    )
  }

  return (
    <>
      <button ref={cardRef} type="button" onClick={() => setOpen(true)} aria-haspopup="dialog" className={cardClasses}>
        {cardContent}
      </button>
      <VideoDialog open={open} onClose={handleClose} embedUrl={embedUrl} title={title} comingSoonText={comingSoonText} />
    </>
  )
}
