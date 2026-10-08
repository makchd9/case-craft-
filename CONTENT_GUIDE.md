# CaseCraft content

The supplied starter workbook is integrated: 10 Speed Search, 6 Ratio Decidendi, 16 Fake Case Detector entries, and 8 badges.

Original workbook rows: lib/content/starter-set.json.
Application adapter and editorial changes: lib/content/questions.ts.
Review notes and source references: CONTENT_REVIEW.md.

For additions, send JSON or an Excel workbook with the same four tabs. For each real precedent include a direct authoritative judgment link and a reviewer. Keep case decision year separate from law-report year. For fabricated entries identify the specific fabricated or misattributed combination. Difficulty/year tags can be added when differentiated question banks are ready.

To update the raw import, use scripts/import-content.py with the workbook path. Review the adapter alongside any changed sheet structure and run node scripts/test-core.mjs.

# Preview commands

- npm run dev: local browser preview.
- npm run build: normal application build.
- node scripts/test-core.mjs: content and scoring regression checks.
- node scripts/build-review.mjs: standalone client-review HTML.

# Deployment remains deferred

The client copy contains the same application and starter questions in one HTML file. It makes no registration or email submissions. Profiles and progress stay in the recipient's browser; external judgment links need internet. It is a review artifact, not a hosted service.

Before launch, connect authenticated accounts, server-side scoring, durable class-scoped data, opt-in shared leaderboards and public profile links; obtain content review and expand the detector set as needed. No deployment was performed.
