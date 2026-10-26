/*
 * Home page text. Each field becomes one row of the future `page_content` table
 * (page "home", key = the field name), so the admin can edit it later (SPEC 6.2).
 * The tagline, welcome video and number tiles live in settings.js.
 *
 * Wording marked DRAFT is awaiting Apostle's approval. It is deliberately general:
 * nothing here states a fact about Apostle that he has not supplied.
 */

export const home = {
  // Hero
  heroLabel: 'Apostle',
  heroTitle: 'Mtho Gwebu',
  welcomeVideoTitle: 'A word of welcome', // DRAFT
  welcomeVideoComingSoon: 'Welcome video coming soon',
  watchButtonText: 'Watch the latest message',
  // Points to The Message until the Sermons section or the YouTube link is ready.
  watchButtonLink: '/the-message',
  followButtonText: 'Follow Apostle',

  // The Man, The Message, The Mandate cards
  entryLabel: 'Discover',
  entryHeading: 'Get to know Apostle', // DRAFT
  entryCards: [
    {
      title: 'The Man',
      text: 'Who Apostle Mtho Gwebu is: his story, his calling and his ministry.', // DRAFT
      link: '/the-man',
    },
    {
      title: 'The Message',
      text: 'Grace, Purpose and Mercy: the message at the heart of his preaching.', // DRAFT
      link: '/the-message',
    },
    {
      title: 'The Mandate',
      text: 'A calling to move people from darkness to light, and how it is lived out.', // DRAFT
      link: '/the-mandate',
    },
  ],
  entryButtonText: 'Discover more',

  // Grace, Purpose and Mercy teaser (the pillars themselves are in pillars.js)
  pillarsLabel: 'The Message',
  pillarsHeading: 'Grace, Purpose and Mercy',
  pillarsIntro: 'Three words at the heart of the message Apostle carries.', // DRAFT

  // Mandate band
  mandateLabel: 'The Mandate',
  mandateHeading: 'From darkness to light.',
  mandateText: 'Every part of this ministry serves one calling: to move people from darkness to light.', // DRAFT
  mandateButtonText: 'Discover the Mandate',

  // Booking block
  bookingLabel: 'Bookings',
  bookingHeading: 'Invite Apostle to your event', // DRAFT
  bookingText:
    'Planning a conference, church service, mentorship session or interview? Send a request with your event details.', // DRAFT
  bookingButtonText: 'Send a booking request',
}
