# AI University working rules

- User scope: complete one textbook at a time; Calculus I and II are published, and the user has authorized the complete Calculus III volume. Static textbook and local interactive illustrations only. Do not add runtime chat, a model backend, API keys, user accounts, or blank future-volume lessons.
- Canonical content is in `packages/content`; generated book files are derived. Keep website, print manuscript, exercises and prerequisite graph consistent.
- Preserve concise Chinese explanations, actual theorem hypotheses, full worked steps and answers. Use diagrams to clarify mathematics, never as proof by finite sampling.
- Identify content as AI-generated. Do not claim human review or exhaustive mathematical verification without evidence.
- Read `docs/CONTENT_GUIDE.md` and `docs/GENERATION_REVIEW.md` before substantive textbook changes.
- Run `npm run check` after content or code changes. Check responsive layouts and slider/domain boundaries when touching visuals.
- Do not introduce a required human review gate for generating this AI-authored book. Review contributions and correct discovered errors transparently.
