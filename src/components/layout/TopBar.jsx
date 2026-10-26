// Top bar on every page: text logo, the always-visible Book Apostle button, and the
// menu button that opens the slide-out menu. It stays fixed at the top while scrolling.
import { useState } from 'react'
import { Link } from 'react-router'
import { settings } from '../../content/settings.js'
import Logo from '../ui/Logo.jsx'
import MenuIcon from '../ui/MenuIcon.jsx'
import PillLink from '../ui/PillLink.jsx'
import MenuPanel from './MenuPanel.jsx'

export default function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-8">
          <Link to="/" aria-label="AMG, home" className="inline-flex min-h-11 items-center">
            <Logo />
          </Link>

          <div className="flex items-center gap-2">
            <PillLink to="/bookings" variant="amber" size="small">
              {settings.bookingButtonText}
            </PillLink>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              className="inline-flex size-11 items-center justify-center rounded-full border border-line transition hover:bg-soft"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      <MenuPanel open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
