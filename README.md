# AMG Website

Official website for Apostle Mtho Gwebu. Built by MvuZu Tech. See [SPEC.md](SPEC.md) for the full specification.

## Run locally

```bash
npm install
npm run dev          # http://localhost:5173
npm run dev -- --host   # also reachable from a phone on the same Wi-Fi
```

Copy `.env.example` to `.env.local` and fill in the Supabase values (needed from Phase 2).

## Where things live

| Path | What goes there |
|---|---|
| `src/config/site.js` | Technical settings that never change after launch, such as the site name and address. Placeholder content sits here until Phase 2 moves it to the database. |
| `src/index.css` | Theme tokens: colours (`white`, `soft`, `ink`, `muted`, `line`, `blue`, `cyan-dark`, `amber`, `sky` and the `*-tint` shades), the brand gradient (`bg-brand-gradient`) and fonts (Outfit, DM Sans). |
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

React, Vite, Tailwind CSS v4, Supabase (from Phase 2), hosted on Vercel.
