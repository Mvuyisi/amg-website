/*
 * Site settings: one record, shaped like the future `settings` table (SPEC 6.3).
 * Holds the name, tagline, contact details, booking button text, welcome video,
 * number tiles and section switches.
 *
 * Wording marked DRAFT is awaiting Apostle's approval. Values marked PLACEHOLDER are
 * stand-ins for the prototype and must be replaced before launch.
 *
 * The name, tagline, contact details and section switches are read from
 * src/config/site.js, so there is still only one place to change them until Phase 2
 * moves everything into the database.
 */
import { contact, features, site } from '../config/site.js'

export const settings = {
  name: site.name,
  title: site.title,
  tagline: site.tagline, // DRAFT

  bookingButtonText: 'Book Apostle',
  bookingEmail: contact.bookingEmail, // PLACEHOLDER: empty until supplied
  whatsappNumber: contact.whatsappNumber, // PLACEHOLDER: empty until supplied
  bookingResponseTime: contact.bookingResponseTime, // PLACEHOLDER: to be confirmed

  // Empty until the video is supplied. Paste a YouTube link here to try it out.
  welcomeVideoUrl: '',
  // Which side of the hero photo the welcome video floats on: 'left' or 'right'.
  // Pick the side away from Apostle's face once the real photo is in.
  videoSide: 'right',

  // PLACEHOLDER values for the prototype only. Never replace them with guesses: only
  // real figures that Apostle has approved. Leaving any value empty hides the strip.
  numberTiles: [
    { id: 'years', label: 'Years in ministry', value: '00+' },
    { id: 'lives', label: 'Lives touched', value: '0,000+' },
    { id: 'places', label: 'Places preached', value: '00+' },
  ],

  // Section switches, read from src/config/site.js.
  showSermons: features.showSermons,
  showEvents: features.showEvents,
  showGive: features.showGive,
  showNewsletter: features.showNewsletter,
  showTestimonies: features.showTestimonies,
  showPressKit: features.showPressKit,
}
