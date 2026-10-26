/*
 * Every photo spot on the site, shaped like the future database table for page images
 * and gallery photos (SPEC 6.3). One entry per spot:
 *   id      the name the code uses to place this photo
 *   page    which page it belongs to ('gallery' for gallery photos)
 *   label   what the photo should show, used on the placeholder until it is added
 *   aspect  the shape, width/height: '4/5' is vertical, '16/9' is wide, '1/1' square
 *   focus   which part of the photo to keep in view when it is cropped, so Apostle's
 *           face stays in frame: 'top', 'center', 'bottom', or a position like '50% 30%'
 *   src     the photo file; empty shows a labelled placeholder instead
 *   alt     a short description of the photo for people who cannot see it
 * Gallery photos also have a category and a `featured` flag: featured photos appear
 * in the "Moments of ministry" mosaic on Home.
 *
 * HOW TO ADD A REAL PHOTO
 *   1. Copy the photo file into the public/photos/ folder (see the README.txt there for
 *      sizes), for example public/photos/hero-portrait.jpg
 *   2. Find the photo's spot below and set src to '/photos/hero-portrait.jpg'
 *   3. Write the alt text: one plain sentence describing what is in that photo.
 * If the face is cut off, change `focus` (for example from 'top' to '50% 20%').
 *
 * Alt text already filled in is a generic DRAFT; rewrite it to describe the real photo.
 */

export const images = [
  // Home
  {
    id: 'homeHero',
    page: 'home',
    label: 'Portrait of Apostle',
    aspect: '4/5',
    focus: 'top',
    src: '',
    alt: 'Apostle Mtho Gwebu', // DRAFT
  },
  {
    // Optional. Used on computer screens instead of homeHero once it has a file.
    id: 'homeHeroWide',
    page: 'home',
    label: 'Wide portrait of Apostle for computers (optional)',
    aspect: '16/9',
    focus: 'center',
    src: '',
    alt: 'Apostle Mtho Gwebu', // DRAFT
  },
  {
    id: 'homeMinistering',
    page: 'home',
    label: 'Apostle ministering',
    aspect: '16/9',
    focus: 'center',
    src: '',
    alt: 'Apostle Mtho Gwebu ministering', // DRAFT
  },

  // The Man
  {
    id: 'theManPortrait',
    page: 'the-man',
    label: 'Portrait of Apostle',
    aspect: '4/5',
    focus: 'top',
    src: '',
    alt: 'Apostle Mtho Gwebu', // DRAFT
  },
  {
    id: 'theManSecond',
    page: 'the-man',
    label: 'A second photo of Apostle',
    aspect: '16/9',
    focus: 'center',
    src: '',
    alt: '',
  },

  // The Message and The Mandate
  {
    id: 'theMessageBanner',
    page: 'the-message',
    label: 'Banner for The Message',
    aspect: '2/1',
    focus: 'center',
    src: '',
    alt: '',
  },
  {
    id: 'theMandateBanner',
    page: 'the-mandate',
    label: 'Banner for The Mandate',
    aspect: '2/1',
    focus: 'center',
    src: '',
    alt: '',
  },

  // Gallery: event photos. The six featured ones fill the mosaic on Home; the mix of
  // shapes is what gives the mosaic its varied heights.
  { id: 'event1', page: 'gallery', category: 'Events', featured: true, label: 'Event photo 1', aspect: '4/5', focus: 'center', src: '', alt: '' },
  { id: 'event2', page: 'gallery', category: 'Events', featured: true, label: 'Event photo 2', aspect: '1/1', focus: 'center', src: '', alt: '' },
  { id: 'event3', page: 'gallery', category: 'Events', featured: true, label: 'Event photo 3', aspect: '4/3', focus: 'center', src: '', alt: '' },
  { id: 'event4', page: 'gallery', category: 'Events', featured: true, label: 'Event photo 4', aspect: '3/4', focus: 'center', src: '', alt: '' },
  { id: 'event5', page: 'gallery', category: 'Events', featured: true, label: 'Event photo 5', aspect: '4/3', focus: 'center', src: '', alt: '' },
  { id: 'event6', page: 'gallery', category: 'Events', featured: true, label: 'Event photo 6', aspect: '1/1', focus: 'center', src: '', alt: '' },
]
