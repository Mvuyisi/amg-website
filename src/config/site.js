/*
 * Site configuration: the one file to edit for names, contact details,
 * socials and which sections are switched on.
 *
 * Anything marked TODO is a placeholder waiting on content (SPEC section 8).
 */

export const site = {
  name: 'Apostle Mtho Gwebu',
  shortName: 'AMG',
  title: 'Apostle',
  // TODO: confirm with Apostle. Draft tagline built from the message and mandate.
  tagline: 'Grace, Purpose and Mercy. From darkness to light.',
  description:
    'The official home of Apostle Mtho Gwebu: the man, the message of Grace, Purpose and Mercy, and the mandate to move people from darkness to light.',
  // TODO: replace once the domain is connected.
  url: 'http://localhost:5173',
}

export const contact = {
  // TODO: booking email and WhatsApp number to be supplied.
  bookingEmail: '',
  // International format, digits only, no "+" or spaces (e.g. 27821234567).
  whatsappNumber: '',
  // TODO: confirm expected response time for booking requests.
  bookingResponseTime: '3 to 5 working days',
}

/*
 * Official social channels. TODO: real links from Mr. Caleb.
 * Set a channel's url to '' to hide it everywhere on the site.
 */
export const socials = [
  { id: 'facebook', label: 'Facebook', url: '#' },
  { id: 'instagram', label: 'Instagram', url: '#' },
  { id: 'youtube', label: 'YouTube', url: '#' },
  { id: 'tiktok', label: 'TikTok', url: '#' },
  { id: 'x', label: 'X', url: '#' },
]

/*
 * Feature switches. Set to true to show a section, false to hide it.
 * Hidden sections stay in the code; they just do not appear in the menu or
 * on any page. The Home featured strip shows the latest sermon and next event
 * only while showSermons / showEvents are on.
 */
export const features = {
  showSermons: false, // Hidden until sermon content is ready
  showEvents: false, // Hidden until the first event is added
  showGive: false, // Hidden until giving details are confirmed
  showNewsletter: false, // Hidden until the WhatsApp channel or newsletter exists
  showTestimonies: false, // After launch (v2): needs consent from each person
  showPressKit: false, // Recommended for launch. Turn on once the press bio and hi-res photo arrive
}
