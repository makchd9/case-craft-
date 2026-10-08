# CaseCraft starter integration

Source: CaseCraft_Content_StarterSet.xlsx. The supplied workbook was read without modification. Original rows are preserved in lib/content/starter-set.json; the application adapter is lib/content/questions.ts.

## Included

- 10 Speed Search challenges using a searchable catalogue of all 10 supplied precedents, including citation, court, decision year and domain.
- 6 Ratio Decidendi questions with case context explicitly labelled as paraphrased.
- 16 Fake Case Detector challenges: 8 real and 8 fabricated or misattributed combinations.
- All 8 supplied badge definitions and thresholds.

## Editorial corrections and review points

1. The Ratio_Quiz “Obiter Dicta” column is not safe to use as a binary answer key. Vishaka's complaints-committee requirements were part of the binding guidelines. The Articles 14/19/21 relationship in Maneka Gandhi is substantive reasoning. Shreya Singhal's conclusions on Sections 69A and 79 are separate holdings. The app therefore retains each supplied core principle, asks a focused principle question, and uses an explicitly incorrect alternative principle. It does not label these original alternatives obiter.
2. Non-exhaustive lists are not automatically obiter. The Kesavananda and Bachan Singh feedback avoids that inference.
3. Removed “Allegedly” from fabricated summaries only because it disclosed the answer. Entries and answer positions are shuffled when a round opens.
4. Removed open-ended claims about current gig-worker and right-to-be-forgotten law from fake-case feedback. Fake entries are described as fabricated name/citation/holding combinations in the supplied set, not as proof that no similarly named case exists anywhere.
5. The Indra Sawhney prompt and summary now describe a general 50% ceiling, rather than implying an exceptionless statement of current law. Decision year and reporter year remain separate (e.g. 1992 versus AIR 1993).
6. This was a targeted editorial check, not complete legal verification of every citation or classification. A subject reviewer should approve the revised MCQs and check the fabricated citation combinations before public educational use.
7. The workbook is a starter set. Its 16 detector items are below the original brief's intended 30–40; no extra legal cases were invented to fill the gap.

Primary judgment references used for the targeted review:
- Vishaka: https://cdnbbsr.s3waas.gov.in/s3ec0490f1f4972d133619a60c30f3559e/documents/aor_notice_circular/13.pdf
- Shreya Singhal: https://cdnbbsr.s3waas.gov.in/s3ec0490f1f4972d133619a60c30f3559e/documents/aor_notice_circular/35.pdf
- Maneka Gandhi judgment reproduction: https://indiankanoon.org/doc/43475503/
- Supreme Court leading-case collection: https://www.sci.gov.in/aor-examination/

## Progress rules

XP and portfolio accuracy retain first attempts. Correct replay answers count toward practice badges, allowing 20/15/10 thresholds to be reached with the starter collection. Fake Case Buster counts correct fabricated verdicts only. Constitutional tags include combined domains. Perfect Week requires at least one completed answer on each of seven consecutive days and no wrong answers during that window. Streak badges remain earned after a streak later breaks.

The new collection uses separate browser storage, leaving old fictional-demo progress untouched. Scores are local and editable by the browser owner; this is not an authenticated production system.
