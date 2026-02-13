# Specification

## Summary
**Goal:** Build a public product showcase app for “SW PROFESSIONAL” that communicates premium hair-care positioning (reduced hair fall, smoother hair, stronger scalp & hair) and lets users browse three products with consistent detail sections, powered by a minimal Motoko catalog endpoint.

**Planned changes:**
- Create a public landing page with a hero/header showing “SW PROFESSIONAL”, English positioning copy, and navigation to Shampoo, Hair Mask, and Hair Serum sections.
- Implement a consistent product browsing layout: a main product list/section for the three items and dedicated detail views/sections with name, description, benefits, and a CTA area (e.g., “Learn more” / “How to use”).
- Add a minimal Motoko backend query method that returns the product catalog (id/slug, name, description, benefits) and fetch/render it from the frontend via the generated canister actor.
- Define and apply a premium cosmetic visual theme (clean, spacious, high-contrast) that is not blue/purple-dominant.
- Add and render generated static images (hero banner, logo, and one image per product) from `frontend/public/assets/generated`.

**User-visible outcome:** Users can visit a polished SW PROFESSIONAL landing page, view three hair-care products, open each product’s details (with benefits and CTA content), and see brand/product visuals—while all product text comes from the backend catalog endpoint.
