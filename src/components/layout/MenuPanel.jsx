// Slide-out site menu: full screen on a phone, a panel on the right on larger screens.
//
// It uses the browser's built-in <dialog> element, which gives us for free: keyboard
// focus stays inside the menu while it is open, the page behind cannot be tapped,
// Escape closes it, and focus goes back to the menu button afterwards.
import { useEffect, useRef } from 'react'
import { NavLink } from 'react-router'
import { mainLinks } from '../../config/navigation.js'
import { settings } from '../../content/settings.js'
import CloseIcon from '../ui/CloseIcon.jsx'
import Logo from '../ui/Logo.jsx'
import PillLink from '../ui/PillLink.jsx'

export default function MenuPanel({ open, onClose }) {
  const dialogRef = useRef(null)

  // Open or close the dialog to match the `open` prop.
  useEffect(() => {
    const dialog = dialogRef.current
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  // A tap on the dimmed area outside the panel lands on the <dialog> element itself;
  // a tap inside the panel lands on something within it.
  function handleClick(event) {
    if (event.target === event.currentTarget) onClose()
  }

  return (
    <dialog
      ref={dialogRef}
      id="site-menu"
      aria-label="Site menu"
      onClose={onClose}
      onClick={handleClick}
      className="ml-auto h-dvh max-h-none w-full max-w-none bg-white text-ink backdrop:bg-ink/60 sm:max-w-sm"
    >
      <div className="flex min-h-full flex-col px-4 pb-8 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex size-11 items-center justify-center rounded-full border border-line transition hover:bg-soft"
          >
            <CloseIcon />
          </button>
        </div>

        <nav aria-label="Main" className="mt-8">
          <ul>
            {mainLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex min-h-14 items-center font-display text-3xl font-bold uppercase transition ${
                      isActive ? 'text-blue' : 'text-ink hover:text-blue'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Repeated here because on a phone the open menu covers the top bar. */}
        <PillLink to="/bookings" variant="amber" onClick={onClose} className="mt-auto w-full">
          {settings.bookingButtonText}
        </PillLink>
      </div>
    </dialog>
  )
}
