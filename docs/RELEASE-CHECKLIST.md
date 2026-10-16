# CaseCraft account release

## Completed in code
- Supabase email/password signup, confirmation return, login, reset and signout.
- Owner-only profile reads; no direct progress writes. Scores use authenticated server functions, server time and idempotent session submissions.
- Guest records remain local and are never uploaded as trusted account progress.
- Optional public links expose display name, aggregate XP and first-attempt accuracy only. Disabling sharing revokes the token.
- Testimonials array is empty; section is completely hidden until consented feedback is supplied.
- 57 challenges: 35 Speed Search, 6 Ratio Decidendi, 16 Fake Case Detector.

## Required project settings / live validation
1. SQL Editor: run deliverables/CaseCraft-Supabase-Setup.sql (schema is rerunnable). For an already installed schema, run CaseCraft-Questions-Update.sql to add the expanded question bank.
2. Authentication > URL Configuration: Site URL https://case-craft-m6lg.vercel.app; allow https://case-craft-m6lg.vercel.app/ and http://localhost:5173/ as redirect URLs. Add any alternate production domain explicitly.
3. Keep email confirmation enabled. Set minimum password length 8 in Supabase too, since UI checks can be bypassed. Enable leaked-password protection if the project plan supports it.
4. Configure your own SMTP sender before client rollout. Supabase's built-in mail service has delivery/recipient/rate restrictions. Verify a signup confirmation and password reset using an email address you control. Never share passwords in chat.
5. Test sign-in on two devices, correct/incorrect/timed-out answers, sign-out, and public-link revocation against the live service.
6. Review Supabase's Security Advisor, backups/retention and usage limits. No application can be certified risk-free from a code review.

## Content decisions
- Yakub Memon: corrected to (2013) 13 SCC 1.
- Joseph Shine final adultery judgment: corrected to (2019) 3 SCC 39, decided in 2018.
- Olga Tellis was already present; no duplicate added.
- Sarla Mudgal was supplied twice; kept one question and added the AIR citation and substantive explanation.
- Carlill: decided in 1892, reported [1893] 1 QB 256; identified as an English Court of Appeal decision.
- Donoghue: House of Lords on a Scottish appeal, not an Indian Supreme Court case. Alleged facts distinguished from findings.
- Mohori Bibee: Privy Council Indian appeal, not Supreme Court of India.
- Cosmos Bank: exact trial order/case number not verified. Related bail decision cannot stand in for trial judgment. Await court order before scoring.
- Tiger-collar incident: an investigation report, not a decided precedent. Excluded from real-case questions.

## Limits
This is a learning application, not a proctored examination or verified professional credential. Educational answers are available in the browser bundle. Server scoring prevents client-supplied XP/correctness, but cannot prevent learners researching answers. Public snapshots can be copied by viewers even after a link is revoked. Faculty dashboards and institution-level reporting remain planned.

## Dependency audit (16 October 2026)
Updated Next/React/Vite/Vinext/Cloudflare packages and vulnerable sharp, fflate and esbuild transitive versions. Latest audit: no critical, moderate or low findings; eight high-severity package entries trace to the unpatched braces <=3.0.3 nested-pattern denial-of-service advisory. These are build/lint tooling dependencies, not a deployed server in the static Vercel architecture. Do not feed untrusted glob patterns into this tooling. A clean audit is not claimed; revisit when upstream publishes a fix.
