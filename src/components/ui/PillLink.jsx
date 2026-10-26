// A link styled as a pill-shaped button. Pass `to` for a page on this site, or `href`
// for anything else (another website, an email address, or a #section on the page).
import { Link } from 'react-router'

// All filled buttons have white text (contrast 5.0:1 or better, see src/index.css).
// `white` is for buttons that sit on the gradient or on dark navy.
const variants = {
  blue: 'bg-blue text-white hover:shadow-lg hover:shadow-blue/30',
  cyan: 'bg-cyan-dark text-white hover:shadow-lg hover:shadow-cyan-dark/30',
  amber: 'bg-amber text-white hover:shadow-lg hover:shadow-amber/30',
  outlineBlue: 'border-2 border-blue text-blue hover:bg-blue-tint',
  outlineCyan: 'border-2 border-cyan-dark text-cyan-dark hover:bg-cyan-tint',
  white: 'bg-white text-blue hover:bg-blue-tint focus-visible:outline-white',
}

// Both sizes keep the 44px minimum tap target.
const sizes = {
  medium: 'min-h-12 px-7',
  small: 'min-h-11 px-5 text-sm',
}

export default function PillLink({
  to,
  href,
  variant = 'blue',
  size = 'medium',
  className = '',
  onClick,
  children,
}) {
  const classes = `inline-flex items-center justify-center rounded-full text-center font-semibold transition ${sizes[size]} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    )
  }

  return (
    <a href={href} className={classes} onClick={onClick}>
      {children}
    </a>
  )
}
