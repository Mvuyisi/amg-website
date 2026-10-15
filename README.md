# AMG Website

Official website for Apostle Mtho Gwebu. Built by MvuZu Tech. See [SPEC.md](SPEC.md) for the full specification.

## Run locally

```bash
npm install
npm run dev          # http://localhost:5173
npm run dev -- --host   # also reachable from a phone on the same Wi-Fi
```

Copy `.env.example` to `.env.local` and fill in the Supabase values (needed from Phase 4).

## Where things live

| Path | What goes there |
|---|---|
| `src/config/site.js` | Name, tagline, contact details, socials and feature switches. Edit this first. |
| `src/index.css` | Theme tokens: colours (`ink-*`, `gold-*`, `cream`, `muted`) and fonts. |
| `src/content/` | Page copy as data: bio, timeline, the three pillars, mandate. |
| `src/pages/` | Routed pages: Home, Gallery, Bookings, 404. |
| `src/sections/` | Page sections: Hero, The Man, The Message, The Mandate, Sermons, Events. |
| `src/components/layout/` | Navigation, mobile menu, footer. |
| `src/components/ui/` | Small reusable pieces: buttons, section headings, icons. |
| `src/hooks/` | Custom React hooks. |
| `src/lib/` | Supabase client, WhatsApp link builder and other helpers. |
| `src/assets/images/` | Images bundled and optimised by Vite. |
| `public/` | Files served as-is: favicon, social share image, press kit download. |

## Stack

React, Vite, Tailwind CSS v4, Supabase (Phase 4), hosted on Vercel.
