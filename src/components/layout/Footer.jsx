// Footer on every page: socials, contact details, quick links, copyright and privacy.
// The "Follow Apostle" button on Home jumps to the socials here (#follow).
import { Link } from 'react-router'
import { mainLinks } from '../../config/navigation.js'
import { settings } from '../../content/settings.js'
import { socials } from '../../content/socials.js'
import { getWhatsAppLink } from '../../lib/whatsapp.js'
import Logo from '../ui/Logo.jsx'

const headingClasses = 'font-sans text-sm font-bold tracking-wider text-ink'
const pillClasses = 'inline-flex min-h-11 items-center rounded-full px-4 text-sm font-semibold'

// Worked out once when the site loads, not on every render.
const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-line bg-soft">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-3 text-sm text-muted">{settings.tagline}</p>
        </div>

        <section id="follow" aria-labelledby="follow-heading">
          <h2 id="follow-heading" className={headingClasses}>
            Follow Apostle
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {socials.map((channel) => (
              <li key={channel.id}>
                {channel.url ? (
                  <a
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${pillClasses} bg-white text-ink ring-1 ring-line transition hover:text-blue hover:ring-blue`}
                  >
                    {channel.label}
                  </a>
                ) : (
                  // Prototype only: an empty link shows as "coming soon" so the footer
                  // can be reviewed. From Phase 3 an empty link hides the channel.
                  <span className={`${pillClasses} border border-dashed border-muted/50 text-muted`}>
                    {channel.label}
                    <span className="sr-only"> (link coming soon)</span>
                  </span>
                )}
              </li>
            ))}
          </ul>
          {socials.some((channel) => !channel.url) && (
            <p className="mt-3 text-xs text-muted">Links coming soon.</p>
          )}
        </section>

        <section aria-labelledby="contact-heading">
          <h2 id="contact-heading" className={headingClasses}>
            Contact
          </h2>
          <dl className="mt-4 space-y-3 text-sm">
            <div>
              <dt className="text-muted">Bookings email</dt>
              <dd className="font-semibold">
                {settings.bookingEmail ? (
                  <a href={`mailto:${settings.bookingEmail}`} className="text-blue underline-offset-4 hover:underline">
                    {settings.bookingEmail}
                  </a>
                ) : (
                  'Coming soon'
                )}
              </dd>
            </div>
            <div>
              <dt className="text-muted">WhatsApp</dt>
              <dd className="font-semibold">
                {settings.whatsappNumber ? (
                  <a
                    href={getWhatsAppLink(settings.whatsappNumber)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue underline-offset-4 hover:underline"
                  >
                    Chat on WhatsApp
                  </a>
                ) : (
                  'Coming soon'
                )}
              </dd>
            </div>
          </dl>
        </section>

        <nav aria-labelledby="links-heading">
          <h2 id="links-heading" className={headingClasses}>
            Quick links
          </h2>
          <ul className="mt-2">
            {mainLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="inline-flex min-h-11 items-center text-sm hover:text-blue">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {year} {settings.name}. All rights reserved.
          </p>
          <Link to="/privacy" className="inline-flex min-h-11 items-center hover:text-blue">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  )
}
