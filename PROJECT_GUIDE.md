# Device Desk — Project Guide

## API notes

Device Desk is currently a front-end practice application. Catalogue records, comparison selections, shopping quantities, budget, and enquiry confirmation are held in React state and reset on refresh. No personal data is transmitted or persisted.

If a back end is added later, the natural boundary is:

- `GET /devices` — list and filter catalogue records
- `POST /devices` — create a validated record
- `PATCH /devices/:id` — update a validated record
- `DELETE /devices/:id` — remove a record
- `POST /enquiries` — submit buyer alias, email, and message

Server-side validation must repeat the client rules: price greater than zero; stock, storage, and memory as non-negative whole numbers; and shopping quantity no greater than current stock.

## Foundation evidence

- React 19 and TypeScript power reusable `DeviceCard`, `DeviceFilters`, `ComparisonTable`, `ShoppingSummary`, and `DeviceForm` components.
- Vite 8 produces the static build in `dist`.
- Tailwind CSS v4 is available through the Vite plugin; the project’s custom visual language is defined in `src/index.css`.
- Local SVG illustrations are stored in `public/` and used by catalogue, details, comparison, list, and management views.
- Semantic labels, visible focus states, descriptive controls, table markup, and an accessible details dialog support keyboard and assistive-technology use.

## Acceptance evidence

1. Sadaf One is 25,000 AFN and Koh Mini is 30,000 AFN. Adding one of each produces a 55,000 AFN practice total; the default 50,000 AFN budget displays a 5,000 AFN shortfall.
2. Comparison IDs are unique and capped at three. Re-selecting an existing device reports that it is already present; selecting a fourth reports the three-device limit.
3. Quantity starts at one, the increase control disables at sample stock, and update logic caps the value at stock.
4. Shopping-list removal only updates shopping state, so comparison entries remain unchanged.
5. The catalogue includes the zero-stock Roshani Pro and disables its shopping-list action.

## Responsive QA

Implementation breakpoints are at 950px and 680px.

Manual preview checklist:

- [ ] 1440px: three-column catalogue, full navigation, and comparison table align without clipping.
- [ ] 1024px: two-column catalogue and hero retain clear hierarchy.
- [ ] 768px: mobile navigation opens, filters wrap, and the shopping summary moves below items.
- [ ] 390px: cards become single-column, the details dialog scrolls, and management actions remain reachable.
- [ ] Keyboard-only: focus is visible, all controls can be reached, and the modal can be closed.
- [ ] Content: practice-data labels appear on cards, details, catalogue results, About, and footer.

## Git history

The repository had two foundation commits before this implementation:

- `25005f4 bootstrap`
- `6e905f6 fs write: tWGWxhBTH0yikSLJ`

Implementation changes are intentionally left uncommitted for review. A suggested commit sequence is:

1. `build device catalogue and comparison flows`
2. `add budget planner and catalogue management`
3. `document QA and delivery evidence`

## Deployment evidence

The repository has separate Figma Make scripts for production and preview:

- `.figma/make/deploy` builds the production bundle and hands `dist` to the static deploy adapter.
- `.figma/make/deploy-preview` builds in development mode with source maps and hands `dist` to the preview adapter.

Both `figma make verify-deploy` and `figma make verify-deploy-preview` reached a terminal `success` state. Verification does not publish a live URL; publishing each target remains an explicit external action in Figma Make.

## Portfolio case study

### Summary

Device Desk is a responsive catalogue and planning tool that helps buyers understand trade-offs between phones, laptops, and tablets using clearly labelled practice data.

### Problem

Device research often separates specifications, prices, stock, and budget calculations across multiple places. This makes shortlisting difficult and can hide the real cost of a planned purchase.

### Approach

The interface moves through three focused stages: discover with search and filters, compare up to three products using consistent rows, then create a stock-aware shopping list against a chosen budget. Catalogue management and a sample enquiry demonstrate the supporting administrative flows.

### Outcome

The final prototype handles the key edge cases: duplicate comparison selections, the fourth-device limit, zero stock, quantity caps, and budget shortfalls. It also clearly distinguishes fictional practice information from current market data.

## Ten-minute presentation

1. **0:00–1:00 — Context:** introduce the buyer problem and explain why all records are practice data.
2. **1:00–2:00 — Foundations:** cover React, TypeScript, Vite, component boundaries, and local assets.
3. **2:00–3:30 — Discovery demo:** search, category filter, price sort, stock toggle, and details view.
4. **3:30–5:00 — Comparison demo:** add three unique devices, show consistent rows, trigger the fourth-device warning, remove one, and reset.
5. **5:00–6:30 — Planning demo:** add the 25,000 and 30,000 AFN devices to the default 50,000 AFN budget and show the 5,000 AFN shortfall.
6. **6:30–7:30 — Stock and independence:** demonstrate the quantity cap and show that list removal does not change comparison entries.
7. **7:30–8:30 — Management:** create, edit, and delete a sample record; demonstrate invalid-price validation.
8. **8:30–9:15 — Enquiry and transparency:** submit a sample enquiry and point out practice-data labelling.
9. **9:15–10:00 — Quality and next steps:** cover responsive behavior, deployment verification, and the future API boundary.
