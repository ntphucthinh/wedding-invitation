# AGENTS.md

## Project Overview

This project includes a Wedding Landing Page within an existing Vite + React application. The Wedding experience is intended to present wedding information in an elegant, romantic, responsive, and accessible way.

The current UI may use local or mock data. Do not assume that a backend, API/service layer, authentication, persistence, notifications, or external integrations exist unless they are present in the source code. Inspect the existing implementation before making changes.

Keep work scoped to the Wedding experience unless the task explicitly asks for broader changes. Preserve unrelated application areas and existing behavior.

## Tech Stack

- React 19 + TypeScript 6 (strict)
- Vite 8
- React Router DOM 7
- MUI 9, MUI X Data Grid, Emotion, and Sass
- React Hook Form + Yup (`@hookform/resolvers`)

Use the libraries already installed in the project. Do not introduce a new framework or add packages unless there is a clear technical need.

## Project Structure

- `src/providers/routerProvider.tsx` — application providers, Refine setup, and route tree.
- `src/router/resources.ts` — Refine resource metadata.
- `src/pages/<feature>/` — route-level pages; user list/create/edit are the example.
- `src/components/pages/<feature>/` — reusable feature UI, such as `UserForm`.
- `src/components/ui/` — shared layout, header, sidebar, and table UI.
- `src/components/theme/` and `src/theme/` — MUI provider, theme, palette, and component overrides.
- `src/schemas/<feature>/` — Yup validation schemas for the corresponding feature.

- `src/types/pages/<feature>/` — TypeScript interfaces and types used by route-level pages and their forms. Current feature files are `src/types/pages/auth/login.ts` for the login page/form and `src/types/pages/users/user.ts` for user forms/pages.

- `src/types/ui/` and `src/types/theme/` — shared UI-context and theme-layout interfaces.
- `src/constants/` — local shared constants and mock data.
- `src/config/env.ts` — typed access point currently exposing Vite env values.

## Core Development Rules

- Inspect the actual source tree and current Wedding page before editing. Do not assume files, routes, data sources, or features exist solely because they are described in a prompt.
- Keep TypeScript strict. Do not disable TypeScript or lint checks to make a change pass.
- Do not use `any` or `as any`. Treat caught errors as `unknown` and narrow them before accessing fields.
- Reuse existing domain types, shared UI, schemas, theme tokens, assets, and routes before adding equivalents.
- Use the existing UI architecture and styling conventions. Prefer the project's installed component library and theme rather than introducing a parallel design system.
- Do not add `console.log` placeholders or create controls that appear functional but have no behavior.
- Do not invent backend, API, authentication, persistence, email, music, RSVP submission, or notification behavior. If the existing implementation is mock-driven, retain that behavior and communicate any limitations accurately.
- Keep unrelated generated/starter assets and legacy SCSS untouched unless the requested change concerns them.
- Do not modify unrelated Admin pages, navigation, configuration, or shared application behavior when the task is limited to Wedding UI.

## Wedding Design Direction

Use **Elegant Luxury + Romantic Floral** as the default visual direction unless the user specifies another style.

### Color and visual language

Prefer a cohesive palette based on:

- Ivory background: `#FAF7F0`
- Warm white: `#FFFDF9`
- Champagne gold: `#C6A66B`
- Soft gold: `#DFCEAA`
- Deep brown: `#59463D`
- Secondary text: `#75665D`
- Soft sage: `#A7AA93`
- Subtle border: `#E8DED0`

Use existing theme tokens when they are suitable. Avoid bright gold, excessive gradients, heavy shadows, too many colors, or placing every section inside an identical rounded card.

### Typography

- Use an elegant serif font for major headings and wedding names.
- A restrained script font may be used for names or short decorative phrases only.
- Use a readable body font for paragraphs, labels, forms, and details.
- Ensure Vietnamese diacritics render correctly.
- Reuse installed fonts when appropriate. Avoid adding several external fonts for a single page.

### Layout and decorative details

- Use intentional whitespace and a clear hierarchy between headings, dates, names, and body copy.
- Create visual variation between sections while maintaining a consistent design system.
- Use fine rules, botanical details, monograms, restrained floral ornaments, and subtle image frames selectively.
- Avoid excessive decoration, visual clutter, or ornaments that overlap meaningful content.
- Prioritize authentic couple photography when available.

## Wedding Page Scope and Content

When improving the Wedding Landing Page, inspect the current page and preserve the information and features already present. This may include:

- Hero / wedding cover
- Couple introduction or love story
- Wedding date and countdown
- Photo gallery
- Venue and map links
- Wedding schedule or timeline
- Guest wishes
- RSVP / attendance confirmation
- Footer

Do not add, remove, or reorder important content without a design reason. Do not invent the couple's names, wedding date, venue, address, schedule, contact details, or personal story. Use the existing source data and copy wherever available.

### Hero

- Make the couple's image and names the main visual focus.
- Present the wedding date clearly, with a restrained `SAVE THE DATE` or equivalent label where suitable.
- Keep text readable over images and do not overcrowd the hero with ornaments.
- Preserve any existing invitation-opening interaction, music toggle, or navigation behavior.

### Gallery and image handling

- Prefer an editorial layout with deliberate image sizes and aspect ratios instead of a repetitive grid of identical cards.
- Preserve existing gallery interactions such as opening, enlarging, or navigating images.
- Use `object-fit` and focal positioning thoughtfully so faces and important subjects are not cropped accidentally.
- Keep the gallery usable on small screens and prevent page-level horizontal overflow.

### Countdown, venue, and timeline

- Keep countdown calculations connected to the configured wedding date. Do not hardcode a fake countdown or allow negative values after the target date has passed.
- Preserve existing map URLs and venue data. Do not invent destinations or coordinates.
- Present the schedule with clear time labels and a restrained timeline treatment. Do not invent events or times.

### Wishes and RSVP

- Preserve existing fields, validation, submission behavior, and data flow.
- Keep field labels, focus states, validation errors, loading states, and success/error feedback understandable and accessible.
- Do not imply a wish or RSVP has been saved if the existing implementation does not actually save it.
- Do not remove fields simply to make the design look cleaner.

## Temporary Image Placeholders

When new image positions are needed before final wedding photos are available, use temporary placeholders labeled `Image 1`, `Image 2`, `Image 3`, and so on.

- Keep images already present in the project when they remain suitable; do not replace all current images with placeholders.
- Only use placeholders for newly introduced image positions that need them.
- Build placeholders with local CSS or inline/local SVG. Use a restrained ivory/champagne treatment and show the placeholder label clearly.
- Preserve the intended aspect ratio and dimensions of the eventual image.
- Do not use broken image URLs, fake paths, emoji as image substitutes, or remote stock-photo URLs for these temporary placeholders.
- Centralize placeholder configuration or use a reusable component so real image URLs/assets can replace placeholders later without reworking the layout.
- Ensure that the absence of a real image never produces a broken-image icon or an inaccessible image control.

## Animation and Interaction

- Use subtle transitions such as restrained fade-in, slide-up, or image transitions only when they improve the experience.
- Avoid continuous heavy animation, layout shifts, scroll-jacking, or effects that interfere with reading and form use.
- Respect `prefers-reduced-motion`.
- Do not autoplay audio. If music controls already exist, keep them explicit and accessible.
- Every visible interactive element must perform its advertised action and provide an appropriate focus/disabled/loading state when relevant.

## Responsive Design and Accessibility

- Design mobile-first where practical and verify narrow screens around 320–375px, common mobile widths around 390–430px, tablet around 768px, and desktop widths from 1024px upward.
- Do not simply shrink the desktop layout. Adapt hero composition, typography, gallery, timeline, spacing, and forms for mobile.
- Prevent unintended horizontal scrolling, clipped names, distorted images, and overlapping ornaments.
- Maintain readable contrast and text sizes.
- Use semantic HTML and accessible names for controls and meaningful images.
- Ensure form controls can be used by keyboard and touch, with visible focus indicators.
- Do not rely on color alone to communicate errors or status.
- Provide meaningful alt text for real images. For decorative ornaments, use appropriate decorative markup so they do not add noise for screen readers.

## React, TypeScript, and Styling

- Use function components and follow the naming, file placement, import, and formatting conventions of nearby source files.
- Use `@/` for internal imports when that alias is configured and used by the project. Do not introduce a different alias convention.
- Use type-only imports with `import type`.
- Preserve `strict`, `noUnusedLocals`, and `noUnusedParameters`; do not disable checks or weaken types to complete the task.
- Reuse the existing theme provider and palette tokens where suitable.
- Prefer feature-specific styling for Wedding-only details and shared theme changes only when a change genuinely belongs to the application-wide design system.
- Keep styles maintainable and avoid duplicating the same global rules across multiple components.
- Do not create a second application shell or duplicate shared navigation/layout components for the Wedding page.

## Data, Configuration, and Safety of Changes

- Treat existing mock data and constants as fixtures unless the task explicitly requires a data flow change.
- Do not change database schemas, API contracts, environment settings, authentication, or unrelated business logic for a visual redesign.
- Read Vite settings through the existing typed environment configuration when needed. Use `VITE_*` values and never commit `.env` files or secrets.
- Keep existing routes and URL behavior unchanged unless the user explicitly requests a routing change.
- Avoid broad refactors that are not necessary to the Wedding task.
- Before modifying a shared component or global theme, check whether the change could alter unrelated pages.

## Validation Commands

Run the project's available validation commands after editing:

```bash
npm run lint
npm run build
```

There is no configured test runner unless one is present in the actual project. Do not claim tests passed if they were not run.

When changing the Wedding page, manually inspect the relevant UI flow where the environment allows it. Check desktop and mobile layouts, navigation, gallery interactions, countdown, venue links, wishes, and RSVP behavior that already exists.

## Definition of Done

- The Wedding Landing Page has a coherent, polished Elegant Luxury + Romantic Floral visual identity.
- The hero creates a clear first impression and the visual hierarchy is consistent across all sections.
- Typography, color, spacing, borders, imagery, and ornaments feel intentional and cohesive.
- Existing Wedding content and working interactions remain intact.
- New image positions use the `Image 1`, `Image 2`, and subsequent placeholders where final images are not available.
- Placeholders do not create broken images and can be replaced with real assets without redesigning the layout.
- Mobile, tablet, and desktop layouts are usable and do not have significant overflow or overlap issues.
- Unrelated pages and application behavior remain unchanged.
- `npm run lint` and `npm run build` pass, or any pre-existing/environment-related failures are clearly reported.
- The final report lists changed files, redesigned sections, placeholder locations, checks performed, and any remaining limitations.
