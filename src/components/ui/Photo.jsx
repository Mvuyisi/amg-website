// One photo spot. Shows the real photo once its file is set in src/content/images.js;
// until then, a tidy placeholder of the same shape that says which photo goes there.
//
// Props:
//   slot             id of the spot in images.js
//   wideSlot         optional id of a wide version for screens 1024px and wider. Until
//                    that spot has a file, the `slot` photo is used on every screen.
//   fill             fill the parent box instead of using the spot's own shape. The
//                    parent sets the size and needs `relative` (used for the hero).
//   priority         true for the first photo on a page, so it loads straight away;
//                    all other photos wait until they are about to scroll into view.
//   placeholderTone  'tint' (default), or 'gradient' for the hero's dark design
//   labelPosition    'center' (default), or 'top' to keep the placeholder label clear
//                    of text laid over the lower part of the photo
//   className        extra classes for the outer box, for example rounded corners
import { images } from '../../content/images.js'
import CameraIcon from './CameraIcon.jsx'

const placeholderTones = {
  tint: 'border-blue/30 bg-blue-tint text-blue',
  gradient: 'border-white/30 bg-brand-gradient text-white',
}

// Turns an aspect like '4/5' into 'vertical', '16/9' into 'wide' and '1/1' into
// 'square', for the placeholder label.
function describeShape(aspect) {
  const [width, height] = aspect.split('/').map(Number)
  if (width < height) return 'vertical'
  if (width > height) return 'wide'
  return 'square'
}

export default function Photo({
  slot,
  wideSlot,
  fill = false,
  priority = false,
  placeholderTone = 'tint',
  labelPosition = 'center',
  className = '',
}) {
  const image = images.find((entry) => entry.id === slot)
  const wide = images.find((entry) => entry.id === wideSlot)

  // With `fill` the parent decides the size. Otherwise the box takes the spot's shape
  // straight away, so the page does not jump when the photo finishes loading.
  const boxClasses = `${fill ? 'absolute inset-0' : 'relative w-full'} overflow-hidden ${className}`
  const shapeStyle = fill ? {} : { aspectRatio: image?.aspect ?? '16/9' }

  // A spot name that is not in images.js is a typing mistake: show it, don't crash.
  if (!image) {
    return (
      <div className={`${boxClasses} flex items-center justify-center bg-amber-tint p-4 text-center text-sm font-semibold text-ink`} style={shapeStyle}>
        Unknown photo spot “{slot}”: check src/content/images.js
      </div>
    )
  }

  if (!image.src) {
    return (
      <div
        className={`${boxClasses} flex flex-col items-center gap-2 border-2 border-dashed p-4 text-center ${
          labelPosition === 'top' ? 'justify-start pt-8' : 'justify-center'
        } ${placeholderTones[placeholderTone]}`}
        style={shapeStyle}
      >
        <CameraIcon />
        <p className="max-w-xs text-sm font-semibold">
          <span className="tracking-[0.15em] uppercase">Photo:</span> {image.label} ({describeShape(image.aspect)})
        </p>
      </div>
    )
  }

  // The focus point is passed as CSS variables so the wide version, when there is
  // one, can keep its own focus point on large screens.
  const useWide = Boolean(wide?.src)
  const focusStyle = {
    '--focus': image.focus,
    '--focus-wide': useWide ? wide.focus : image.focus,
  }

  return (
    <div className={boxClasses} style={{ ...shapeStyle, ...focusStyle }}>
      <picture>
        {useWide && <source media="(min-width: 1024px)" srcSet={wide.src} />}
        <img
          src={image.src}
          alt={image.alt || image.label}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          className="absolute inset-0 size-full object-cover object-[var(--focus)] lg:object-[var(--focus-wide)]"
        />
      </picture>
    </div>
  )
}
