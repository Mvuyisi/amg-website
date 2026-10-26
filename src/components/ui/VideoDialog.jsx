// Larger video player that opens on top of the page.
//
// The video itself (an iframe) only exists while the player is open, so nothing from
// the video host loads before the visitor taps play, and closing the player stops it.
// With no video link yet, the player shows a "coming soon" message instead.
//
// Like the site menu it uses the browser's built-in <dialog>: the page behind cannot be
// tapped while it is open, and Escape closes it.
import { useEffect, useRef } from 'react'
import CloseIcon from './CloseIcon.jsx'

export default function VideoDialog({ open, onClose, embedUrl, title, comingSoonText }) {
  const dialogRef = useRef(null)

  // Open or close the dialog to match the `open` prop.
  useEffect(() => {
    const dialog = dialogRef.current
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  // A tap on the dimmed area outside the player lands on the <dialog> element itself.
  function handleClick(event) {
    if (event.target === event.currentTarget) onClose()
  }

  return (
    <dialog
      ref={dialogRef}
      aria-label={title}
      onClose={onClose}
      onClick={handleClick}
      className="m-auto w-full max-w-4xl bg-transparent p-4 backdrop:bg-ink/85"
    >
      {/* Taps beside the close button pass through to the dialog and count as outside. */}
      <div className="pointer-events-none flex justify-end">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close video"
          className="pointer-events-auto inline-flex size-11 items-center justify-center rounded-full bg-white text-ink transition hover:bg-blue-tint focus-visible:outline-white"
        >
          <CloseIcon />
        </button>
      </div>

      <div className="mt-3 aspect-video overflow-hidden rounded-2xl bg-ink">
        {open && embedUrl && (
          <iframe
            src={embedUrl}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="size-full"
          />
        )}
        {open && !embedUrl && (
          <p className="flex size-full items-center justify-center bg-brand-gradient p-6 text-center font-display text-2xl font-bold text-white uppercase sm:text-4xl">
            {comingSoonText}
          </p>
        )}
      </div>
    </dialog>
  )
}
