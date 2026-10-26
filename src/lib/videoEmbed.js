/*
 * Turns a YouTube link into an address that can be shown inside the page.
 *
 * Accepts the usual ways a YouTube link is copied (watch?v=, youtu.be/, /shorts/,
 * /live/, /embed/) and returns a youtube-nocookie.com address, which does not set
 * tracking cookies until the visitor presses play. Returns null for anything else.
 */

export function getVideoEmbedUrl(url) {
  if (!url) return null

  let parsed
  try {
    parsed = new URL(url)
  } catch {
    return null
  }

  const host = parsed.hostname.replace(/^(www|m)\./, '')
  let videoId = null

  if (host === 'youtu.be') {
    videoId = parsed.pathname.split('/')[1]
  } else if (host === 'youtube.com' || host === 'youtube-nocookie.com') {
    if (parsed.pathname === '/watch') {
      videoId = parsed.searchParams.get('v')
    } else {
      const match = parsed.pathname.match(/^\/(shorts|live|embed)\/([^/]+)/)
      if (match) videoId = match[2]
    }
  }

  // YouTube video ids are letters, numbers, dashes and underscores.
  if (!videoId || !/^[\w-]+$/.test(videoId)) return null

  // autoplay=1 because this only runs after the visitor has tapped play.
  return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`
}
