// Solid "play" triangle. Decorative: the button around it carries the label.
// The default classes nudge it right a little, because a triangle looks off-centre
// when centred exactly. Pass className to change the size (keep a small left margin).
export default function PlayIcon({ className = 'ml-1 size-8' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M7 4.5v15a1 1 0 0 0 1.5.86l12.5-7.5a1 1 0 0 0 0-1.72L8.5 3.64A1 1 0 0 0 7 4.5z" />
    </svg>
  )
}
