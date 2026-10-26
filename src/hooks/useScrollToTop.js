/*
 * Scrolls back to the top whenever the visitor moves to another page. A normal website
 * gets this for free on every page load; a single-page app has to do it itself.
 */
import { useEffect } from 'react'
import { useLocation } from 'react-router'

export function useScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // 'instant' so the page does not visibly smooth-scroll up on every page change.
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
}
