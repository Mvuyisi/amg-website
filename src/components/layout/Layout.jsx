// Shared layout for every public page: skip link, top bar with menu, the page itself
// (rendered by <Outlet />), and the footer.
import { Outlet } from 'react-router'
import { useScrollToTop } from '../../hooks/useScrollToTop.js'
import Footer from './Footer.jsx'
import TopBar from './TopBar.jsx'

export default function Layout() {
  useScrollToTop()

  return (
    <>
      {/* Hidden until it receives keyboard focus, then lets keyboard users jump past the menu. */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-blue focus:px-5 focus:py-3 focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <TopBar />

      {/* tabIndex -1 lets the skip link move keyboard focus here. */}
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <Outlet />
      </main>

      <Footer />
    </>
  )
}
