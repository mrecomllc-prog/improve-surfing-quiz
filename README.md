# Improve Surfing — "What's Your Surf Score?" quiz funnel

Web2app-style quiz funnel to sell the recurring **Improve Surfing** membership (Gold Coast, AU).

- Self-contained `index.html` (no build) — vanilla JS engine, mobile-first, light-ocean theme.
- Flow: hook → profiling questions → progressive capture → **Surf Score** reveal → progression projection → authority → **tier match + scratch (10% off)** → **plans (per-day pricing) → Stripe** + Instagram grid.
- Live preview: served by `serve.py` (no-cache) or GitHub Pages.

Image slots (`img/…`) fall back to labelled placeholders until real photos are dropped in.
Stripe checkout URLs and Instagram post thumbnails are placeholders pending wiring.
