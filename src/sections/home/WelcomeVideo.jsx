// Welcome video card on the brand gradient, with a large white play button.
//
// Nothing from the video host loads until the visitor taps play, to save mobile data
// and keep the first page load fast (SPEC sections 2 and 3.1). Tapping play then:
//   - no video link yet:        shows "Welcome video coming soon"
//   - a YouTube link:           swaps the card for the video and starts it
//   - any other kind of link:   the play button opens that link in a new tab instead
import { useState } from 'react'
import PlayIcon from '../../components/ui/PlayIcon.jsx'
import { getVideoEmbedUrl } from '../../lib/videoEmbed.js'

const playButtonClasses =
  'flex size-20 items-center justify-center rounded-full bg-white text-blue shadow-xl shadow-ink/30 transition hover:scale-105 focus-visible:outline-white sm:size-24'

export default function WelcomeVideo({ url, title, comingSoonText }) {
  const [playing, setPlaying] = useState(false)
  const [showComingSoon, setShowComingSoon] = useState(false)
  const embedUrl = getVideoEmbedUrl(url)

  function handlePlay() {
    if (embedUrl) {
      setPlaying(true)
    } else {
      setShowComingSoon(true)
    }
  }

  if (playing) {
    return (
      <div className="aspect-video overflow-hidden rounded-3xl bg-ink">
        <iframe
          src={embedUrl}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          className="size-full"
        />
      </div>
    )
  }

  return (
    <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-3xl bg-brand-gradient">
      {url && !embedUrl ? (
        <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`Play: ${title} (opens in a new tab)`} className={playButtonClasses}>
          <PlayIcon />
        </a>
      ) : (
        <button type="button" onClick={handlePlay} aria-label={`Play: ${title}`} className={playButtonClasses}>
          <PlayIcon />
        </button>
      )}

      {/* Bottom left stays in the darker part of the gradient, where white text is readable. */}
      <p className="absolute bottom-4 left-5 font-display text-lg font-semibold text-white uppercase sm:bottom-6 sm:left-7 sm:text-xl">
        {title}
      </p>

      {/* Always in the page so screen readers announce the message when it appears. */}
      <p role="status" className="absolute top-4 right-4 left-4 flex justify-center sm:top-6">
        {showComingSoon && (
          <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink shadow-lg">
            {comingSoonText}
          </span>
        )}
      </p>
    </div>
  )
}
