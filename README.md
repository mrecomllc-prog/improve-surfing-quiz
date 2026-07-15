# Improve Surfing — "What's Your Surf Score?" quiz funnel

Web2app-style quiz funnel to sell the recurring **Improve Surfing** membership (Gold Coast, AU).

- Self-contained `index.html` (no build) — vanilla JS engine, mobile-first, light-ocean theme.
- Flow: hook → **20-point scored diagnostic** (1–4 scale per question) → progressive capture → **Surf Score** reveal with **6-pillar radar + #1 limiter** → progression projection → authority → **tier match + scratch (10% off)** → **plans (per-day pricing) → Stripe** + Instagram grid.
- Adaptive: 2 conditional questions (advanced check unlocks at provisional level ≥3; beginner follow-up when ocean comfort ≤2), answer-aware **coach's notes** (low-score triggers, board/ability mismatch, limiter-specific variants), 2 milestone screens. Tier matching uses the *measured* diagnostic level, not self-reported.
- Live preview: served by `serve.py` (no-cache) or GitHub Pages.

Image slots (`img/…`) fall back to labelled placeholders until real photos are dropped in.
Stripe checkout URLs and Instagram post thumbnails are placeholders pending wiring.
