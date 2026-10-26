/*
 * Sets the browser tab title for the current page, for example
 * "The Man · Apostle Mtho Gwebu". With no title it shows the site name on its own.
 */
import { useEffect } from 'react'
import { settings } from '../content/settings.js'

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · ${settings.name}` : settings.name
  }, [title])
}
