"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// tests/core.test.ts
var import_node_test = require("node:test");
var import_strict = __toESM(require("node:assert/strict"), 1);

// lib/content/starter-set.json
var starter_set_default = {
  Speed_Search: [
    {
      "Legal Issue (prompt shown to player)": "Which case established that Parliament cannot amend the Constitution to destroy its 'basic structure'?",
      "Correct Case Name": "Kesavananda Bharati v. State of Kerala",
      Citation: "(1973) 4 SCC 225",
      Court: "Supreme Court of India",
      Year: 1973,
      Domain: "Constitutional"
    },
    {
      "Legal Issue (prompt shown to player)": "Which case recognized the Right to Privacy as a fundamental right under the Constitution?",
      "Correct Case Name": "Justice K.S. Puttaswamy (Retd.) v. Union of India",
      Citation: "(2017) 10 SCC 1",
      Court: "Supreme Court of India",
      Year: 2017,
      Domain: "Constitutional"
    },
    {
      "Legal Issue (prompt shown to player)": "Which case laid down the 'rarest of rare' doctrine for imposing the death penalty?",
      "Correct Case Name": "Bachan Singh v. State of Punjab",
      Citation: "(1980) 2 SCC 684",
      Court: "Supreme Court of India",
      Year: 1980,
      Domain: "Criminal"
    },
    {
      "Legal Issue (prompt shown to player)": "Which case held that the procedure under Article 21 must be fair, just and reasonable, not arbitrary?",
      "Correct Case Name": "Maneka Gandhi v. Union of India",
      Citation: "(1978) 1 SCC 248",
      Court: "Supreme Court of India",
      Year: 1978,
      Domain: "Constitutional"
    },
    {
      "Legal Issue (prompt shown to player)": "Which case laid down guidelines on workplace sexual harassment before legislation existed?",
      "Correct Case Name": "Vishaka v. State of Rajasthan",
      Citation: "AIR 1997 SC 3011",
      Court: "Supreme Court of India",
      Year: 1997,
      Domain: "Constitutional"
    },
    {
      "Legal Issue (prompt shown to player)": "Which case introduced the doctrine of 'absolute liability' for hazardous industries in India?",
      "Correct Case Name": "M.C. Mehta v. Union of India (Oleum Gas Leak case)",
      Citation: "AIR 1987 SC 1086",
      Court: "Supreme Court of India",
      Year: 1987,
      Domain: "Tort/Environmental"
    },
    {
      "Legal Issue (prompt shown to player)": "Which case struck down Section 66A of the Information Technology Act as unconstitutional?",
      "Correct Case Name": "Shreya Singhal v. Union of India",
      Citation: "(2015) 5 SCC 1",
      Court: "Supreme Court of India",
      Year: 2015,
      Domain: "Constitutional/IT Law"
    },
    {
      "Legal Issue (prompt shown to player)": "Which case read down Section 377 of the IPC to decriminalize consensual same-sex relations?",
      "Correct Case Name": "Navtej Singh Johar v. Union of India",
      Citation: "(2018) 10 SCC 1",
      Court: "Supreme Court of India",
      Year: 2018,
      Domain: "Constitutional/Criminal"
    },
    {
      "Legal Issue (prompt shown to player)": "Which case upheld the Mandal Commission's OBC reservation but capped total reservation at 50%?",
      "Correct Case Name": "Indra Sawhney v. Union of India",
      Citation: "AIR 1993 SC 477",
      Court: "Supreme Court of India",
      Year: 1992,
      Domain: "Constitutional"
    },
    {
      "Legal Issue (prompt shown to player)": "Which case held that the right to livelihood is part of the right to life under Article 21?",
      "Correct Case Name": "Olga Tellis v. Bombay Municipal Corporation",
      Citation: "AIR 1986 SC 180",
      Court: "Supreme Court of India",
      Year: 1985,
      Domain: "Constitutional"
    }
  ],
  Ratio_Quiz: [
    {
      "Case Name": "Kesavananda Bharati v. State of Kerala",
      "Judgment Snippet (paraphrased, shown to player)": "Parliament has wide power to amend the Constitution under Article 368, but this power is not unlimited.",
      "Ratio Decidendi (correct answer)": "Parliament cannot use its amending power under Article 368 to damage or destroy the 'basic structure' of the Constitution.",
      "Obiter Dicta (distractor)": "Individual judges' differing lists of what counts as 'basic structure' (federalism, secularism, judicial review, etc.) \u2014 illustrative, not an exhaustive binding list.",
      Domain: "Constitutional"
    },
    {
      "Case Name": "Maneka Gandhi v. Union of India",
      "Judgment Snippet (paraphrased, shown to player)": "The petitioner's passport was impounded without being given a reason or a hearing.",
      "Ratio Decidendi (correct answer)": "Any procedure that deprives a person of life or personal liberty under Article 21 must be fair, just, and reasonable \u2014 not arbitrary or oppressive.",
      "Obiter Dicta (distractor)": "Broader discussion on how Articles 14, 19, and 21 together form one integrated scheme of fundamental rights.",
      Domain: "Constitutional"
    },
    {
      "Case Name": "Bachan Singh v. State of Punjab",
      "Judgment Snippet (paraphrased, shown to player)": "The constitutionality of the death penalty under Section 302 IPC was challenged as violating Articles 14, 19, and 21.",
      "Ratio Decidendi (correct answer)": "The death penalty should be imposed only in the 'rarest of rare' cases, where the alternative option of life imprisonment is unquestionably foreclosed.",
      "Obiter Dicta (distractor)": "The illustrative (non-exhaustive) list of aggravating and mitigating circumstances a court may consider.",
      Domain: "Criminal"
    },
    {
      "Case Name": "M.C. Mehta v. Union of India (Oleum Gas Leak case)",
      "Judgment Snippet (paraphrased, shown to player)": "A hazardous gas leak from a factory in Delhi caused injury to nearby residents.",
      "Ratio Decidendi (correct answer)": "An enterprise engaged in a hazardous or inherently dangerous activity owes an absolute and non-delegable duty to the community, with no exceptions for 'Act of God' or third-party fault.",
      "Obiter Dicta (distractor)": "Remarks on the need for a specialized environmental tribunal and stricter industrial regulation going forward.",
      Domain: "Tort/Environmental"
    },
    {
      "Case Name": "Vishaka v. State of Rajasthan",
      "Judgment Snippet (paraphrased, shown to player)": "In the absence of any domestic law on the subject, the Court was asked to address workplace sexual harassment.",
      "Ratio Decidendi (correct answer)": "In the absence of domestic legislation, international conventions (like CEDAW) can be read into Articles 14, 19, and 21 to fill the gap, and the Vishaka Guidelines are binding until Parliament legislates.",
      "Obiter Dicta (distractor)": "Observations on employer best practices and the need for a complaints committee structure.",
      Domain: "Constitutional/Labour"
    },
    {
      "Case Name": "Shreya Singhal v. Union of India",
      "Judgment Snippet (paraphrased, shown to player)": "Section 66A of the IT Act criminalized sending 'offensive' messages online, and was challenged as vague and overbroad.",
      "Ratio Decidendi (correct answer)": "Section 66A is unconstitutional as it is vague, overbroad, and has a chilling effect on the fundamental right to freedom of speech and expression under Article 19(1)(a).",
      "Obiter Dicta (distractor)": "Commentary distinguishing Section 66A from Sections 69A and 79 of the IT Act, which were upheld with safeguards.",
      Domain: "Constitutional/IT Law"
    }
  ],
  Fake_Case_Detector: [
    {
      "Case Name Shown": "Kesavananda Bharati v. State of Kerala",
      "Citation Shown": "(1973) 4 SCC 225",
      "Short Summary Shown to Player": "Held that Parliament's amending power under Article 368 cannot destroy the Constitution's basic structure.",
      "Real or Fake": "REAL",
      "Explanation (revealed after answer)": "This is a real, correctly cited landmark case \u2014 the origin of the basic structure doctrine."
    },
    {
      "Case Name Shown": "Justice K.S. Puttaswamy (Retd.) v. Union of India",
      "Citation Shown": "(2017) 10 SCC 1",
      "Short Summary Shown to Player": "Held that the right to privacy is a fundamental right protected under Article 21.",
      "Real or Fake": "REAL",
      "Explanation (revealed after answer)": "This is a real, correctly cited case \u2014 a 9-judge bench decision from 2017."
    },
    {
      "Case Name Shown": "Vishaka v. State of Rajasthan",
      "Citation Shown": "AIR 1997 SC 3011",
      "Short Summary Shown to Player": "Laid down guidelines on workplace sexual harassment in the absence of legislation.",
      "Real or Fake": "REAL",
      "Explanation (revealed after answer)": "This is a real, correctly cited case \u2014 the source of the 'Vishaka Guidelines'."
    },
    {
      "Case Name Shown": "M.C. Mehta v. Union of India",
      "Citation Shown": "AIR 1987 SC 1086",
      "Short Summary Shown to Player": "Introduced the doctrine of absolute liability for hazardous industries, arising from the Oleum Gas Leak.",
      "Real or Fake": "REAL",
      "Explanation (revealed after answer)": "This is a real, correctly cited case, also known as the Oleum Gas Leak case."
    },
    {
      "Case Name Shown": "Olga Tellis v. Bombay Municipal Corporation",
      "Citation Shown": "AIR 1986 SC 180",
      "Short Summary Shown to Player": "Held that the right to livelihood is part of the right to life under Article 21.",
      "Real or Fake": "REAL",
      "Explanation (revealed after answer)": "This is a real, correctly cited case concerning pavement dwellers in Mumbai."
    },
    {
      "Case Name Shown": "Shreya Singhal v. Union of India",
      "Citation Shown": "(2015) 5 SCC 1",
      "Short Summary Shown to Player": "Struck down Section 66A of the IT Act as unconstitutional for being vague and overbroad.",
      "Real or Fake": "REAL",
      "Explanation (revealed after answer)": "This is a real, correctly cited case protecting online free speech."
    },
    {
      "Case Name Shown": "Navtej Singh Johar v. Union of India",
      "Citation Shown": "(2018) 10 SCC 1",
      "Short Summary Shown to Player": "Read down Section 377 IPC to decriminalize consensual same-sex relations between adults.",
      "Real or Fake": "REAL",
      "Explanation (revealed after answer)": "This is a real, correctly cited case."
    },
    {
      "Case Name Shown": "Indra Sawhney v. Union of India",
      "Citation Shown": "AIR 1993 SC 477",
      "Short Summary Shown to Player": "Upheld OBC reservations under the Mandal Commission report, capping total reservation at 50%.",
      "Real or Fake": "REAL",
      "Explanation (revealed after answer)": "This is a real, correctly cited case, also known as the Mandal case."
    },
    {
      "Case Name Shown": "Ramesh Kumar v. Union of India",
      "Citation Shown": "(2016) 9 SCC 234",
      "Short Summary Shown to Player": "Allegedly held that access to free Wi-Fi is a fundamental right under Article 21.",
      "Real or Fake": "FAKE",
      "Explanation (revealed after answer)": "No such case or holding exists. This citation and case name are fabricated \u2014 a classic hallucination pattern (plausible name + plausible citation format + no real ruling)."
    },
    {
      "Case Name Shown": "Sharma Industries v. State of Maharashtra",
      "Citation Shown": "AIR 2009 SC 1123",
      "Short Summary Shown to Player": "Allegedly the case that first introduced the doctrine of absolute liability in India.",
      "Real or Fake": "FAKE",
      "Explanation (revealed after answer)": "Misattribution: the doctrine of absolute liability actually originates from M.C. Mehta v. Union of India (1987), not this invented case."
    },
    {
      "Case Name Shown": "National Bank of India v. Verma",
      "Citation Shown": "(2012) 3 SCC 567",
      "Short Summary Shown to Player": "Allegedly the leading Indian case on lifting the corporate veil.",
      "Real or Fake": "FAKE",
      "Explanation (revealed after answer)": "This case name and citation are fabricated. No such leading Supreme Court case exists under this name."
    },
    {
      "Case Name Shown": "Priya Enterprises v. State of Delhi",
      "Citation Shown": "2014 SCC OnLine Del 4521",
      "Short Summary Shown to Player": "Allegedly held that SMS messages are protected under a standalone 'digital privacy' right.",
      "Real or Fake": "FAKE",
      "Explanation (revealed after answer)": "Fabricated case. No such Delhi High Court ruling exists under this name or citation."
    },
    {
      "Case Name Shown": "K.L. Mehta v. Union of India",
      "Citation Shown": "AIR 1991 SC 998",
      "Short Summary Shown to Player": "Allegedly the case that established the basic structure doctrine.",
      "Real or Fake": "FAKE",
      "Explanation (revealed after answer)": "Misattribution: the basic structure doctrine comes from Kesavananda Bharati v. State of Kerala (1973), not this invented case."
    },
    {
      "Case Name Shown": "Suresh Textiles v. ESIC",
      "Citation Shown": "(2018) 7 SCC 112",
      "Short Summary Shown to Player": "Allegedly held that gig/platform workers are automatically entitled to full employee benefits under the ESI Act.",
      "Real or Fake": "FAKE",
      "Explanation (revealed after answer)": "Fabricated holding. No Supreme Court ruling of this kind existed in Indian law as of 2018 \u2014 gig-worker classification remained (and largely remains) unsettled."
    },
    {
      "Case Name Shown": "Anjali Verma v. State of U.P.",
      "Citation Shown": "2020 SCC OnLine SC 445",
      "Short Summary Shown to Player": "Allegedly recognized a standalone 'right to be forgotten' as part of Article 21.",
      "Real or Fake": "FAKE",
      "Explanation (revealed after answer)": "Fabricated case. India has no clear Supreme Court ruling establishing this as of the date of this content set \u2014 only scattered High Court observations exist."
    },
    {
      "Case Name Shown": "Bharat Steel Ltd. v. Commissioner of Income Tax",
      "Citation Shown": "(2005) 4 SCC 890",
      "Short Summary Shown to Player": "Allegedly held that all corporate CSR spending is automatically tax-deductible.",
      "Real or Fake": "FAKE",
      "Explanation (revealed after answer)": "Fabricated case and holding, invented to sound plausible but with no real basis in Indian tax law."
    }
  ],
  Badges: [
    {
      "Badge Name": "Citation Master",
      "Criteria to Earn It": "Answer 20 Speed Search Challenge questions correctly.",
      "Icon Suggestion": "Scales of justice icon, gold"
    },
    {
      "Badge Name": "Ratio Detective",
      "Criteria to Earn It": "Correctly identify the ratio decidendi in 15 Ratio Quiz questions.",
      "Icon Suggestion": "Magnifying glass over a document"
    },
    {
      "Badge Name": "Fake Case Buster",
      "Criteria to Earn It": "Correctly spot 10 fabricated citations in Fake Case Detector.",
      "Icon Suggestion": "Shield with a checkmark"
    },
    {
      "Badge Name": "5-Day Streak",
      "Criteria to Earn It": "Practice on CaseCraft 5 days in a row.",
      "Icon Suggestion": "Small flame icon"
    },
    {
      "Badge Name": "10-Day Streak",
      "Criteria to Earn It": "Practice on CaseCraft 10 days in a row.",
      "Icon Suggestion": "Larger/brighter flame icon"
    },
    {
      "Badge Name": "Constitutional Law Expert",
      "Criteria to Earn It": "Correctly answer 10 Constitutional-law-tagged questions across all modes.",
      "Icon Suggestion": "Open book with a gavel"
    },
    {
      "Badge Name": "Speed Demon",
      "Criteria to Earn It": "Complete a Speed Search Challenge correctly in under 30 seconds.",
      "Icon Suggestion": "Lightning bolt"
    },
    {
      "Badge Name": "Perfect Week",
      "Criteria to Earn It": "Score 100% accuracy across all challenges attempted in a 7-day period.",
      "Icon Suggestion": "Star/trophy icon"
    }
  ]
};

// lib/content/questions.ts
var researchSource = "https://www.sci.gov.in/aor-examination/";
var catalogue = starter_set_default.Speed_Search.map((r, i) => ({ id: `case-${i + 1}`, text: r["Correct Case Name"], detail: `${r.Citation} \xB7 ${r.Court} \xB7 Decided ${r.Year} \xB7 ${r.Domain}` }));
var ratioPrompts = [
  "Which principle limits Parliament\u2019s power under Article 368?",
  "Which standard must a procedure depriving a person of liberty satisfy under Article 21?",
  "Which principle governs the choice of the death penalty rather than life imprisonment?",
  "Which duty applies to an enterprise engaged in a hazardous or inherently dangerous activity?",
  "Which principle explains how the Court filled the legislative gap on workplace sexual harassment?",
  "Which holding addresses the validity of Section 66A?"
];
var distractors = [
  "Parliament\u2019s power under Article 368 is unlimited, including the power to destroy the Constitution\u2019s basic structure.",
  "Any procedure enacted by law satisfies Article 21, even if it is arbitrary or oppressive.",
  "The death penalty is the default sentence for murder, without considering life imprisonment.",
  "A hazardous enterprise has no responsibility for harm unless the injured person proves the enterprise\u2019s negligence.",
  "A court cannot protect constitutional rights against workplace sexual harassment until a specific domestic statute is enacted.",
  "Section 66A remains valid whenever an online message causes annoyance, even if it falls outside Article 19(2)."
];
var ratioNotes = [
  "The tested principle is the limit on the amending power. The competing option removes that limit. Illustrations of basic structure should not simply be treated as non-binding.",
  "The question tests procedural fairness under Article 21. The relationship between Articles 14, 19 and 21 is also part of the reasoning, not a safe example of mere obiter.",
  "The question tests the threshold for choosing death over life imprisonment. Illustrative sentencing factors help apply that threshold; a non-exhaustive list is not automatically obiter.",
  "The question tests the duty arising from hazardous activity. Suggestions for future institutions are distinct from this rule of liability.",
  "The guidelines filled a gap in protection of fundamental rights. The complaints-committee requirements were part of those binding guidelines, not merely optional advice.",
  "Section 66A was struck down. The separate conclusions on Sections 69A and 79 were also holdings; they should not be labelled mere commentary."
];
var questions = [
  ...starter_set_default.Speed_Search.map((r, i) => ({ id: `starter-speed-${i + 1}`, mode: "speed", domain: r.Domain, prompt: r["Legal Issue (prompt shown to player)"].replace("but capped total reservation at 50%", "and applied a general 50% ceiling to reservations"), options: catalogue, answer: `case-${i + 1}`, explanation: `The matching precedent is ${r["Correct Case Name"]}, ${r.Citation}, decided by the ${r.Court} in ${r.Year}. ${i === 8 ? "The 50% rule is a general rule discussed in that decision, with exceptional situations; this is a historical case-identification exercise." : ""}`, source: researchSource, sourceLabel: "Supreme Court leading-case resources" })),
  ...starter_set_default.Ratio_Quiz.map((r, i) => ({ id: `starter-ratio-${i + 1}`, mode: "ratio", domain: r.Domain, caseName: r["Case Name"], prompt: ratioPrompts[i], snippet: r["Judgment Snippet (paraphrased, shown to player)"], options: [{ id: "principle", text: r["Ratio Decidendi (correct answer)"] }, { id: "alternative", text: distractors[i] }], answer: "principle", explanation: ratioNotes[i], source: researchSource, sourceLabel: "Supreme Court leading-case resources" })),
  ...starter_set_default.Fake_Case_Detector.map((r, i) => {
    const match = starter_set_default.Speed_Search.find((c) => c["Correct Case Name"].startsWith(r["Case Name Shown"]));
    const domain = match?.Domain || (["Constitutional", "Tort/Environmental", "Corporate", "Constitutional/IT Law", "Constitutional", "Labour", "Constitutional/IT Law", "Corporate/Tax"][i - 8] ?? "Legal research");
    const snippet = r["Short Summary Shown to Player"].replace(/^Allegedly /, "").replace(/^held /, "Held ").replace(/^the case/, "The case").replace(/^the leading/, "The leading").replace(/^recognized/, "Recognized").replace("capping total reservation at 50%", "applying a general 50% ceiling to reservations");
    const fakeExplanations = [
      "This name\u2013citation\u2013holding combination is a fabricated exercise in the supplied content set. A plausible citation does not establish a Supreme Court right to free Wi-Fi. Verify the exact judgment before relying on it.",
      "The supplied entry misattributes absolute liability. The relevant landmark is M.C. Mehta v. Union of India (Oleum Gas Leak), not the invented case presented here.",
      "This supposed leading precedent is labelled fabricated in the supplied content set. Verify both the exact case title and the cited report before treating it as authority.",
      "The supplied name\u2013citation\u2013holding combination is fabricated. A genuine-looking reporter reference does not verify the proposed digital-privacy holding.",
      "The basic structure doctrine is associated with Kesavananda Bharati v. State of Kerala (1973). The supplied entry attributes it to a fabricated case.",
      "The supplied entry is fabricated: it is not a reliable authority for automatic ESI benefits for all gig workers. This exercise makes no claim about the current law on worker classification.",
      "This supplied name\u2013citation\u2013holding combination is fabricated. Do not infer the current law on the right to be forgotten from this exercise.",
      "This supplied entry is fabricated and does not establish automatic deductibility of all CSR spending. Tax treatment must be checked against applicable law."
    ];
    return { id: `starter-fake-${i + 1}`, mode: "fake", domain, prompt: `${r["Case Name Shown"]} \xB7 ${r["Citation Shown"]}`, snippet, options: [{ id: "real", text: "Real precedent" }, { id: "fake", text: "Fabricated or misattributed" }], answer: r["Real or Fake"].toLowerCase(), explanation: i < 8 ? r["Explanation (revealed after answer)"] : fakeExplanations[i - 8], ...i < 8 ? { source: researchSource, sourceLabel: "Supreme Court leading-case resources" } : {} };
  })
];
var sourceOverrides = {
  "Maneka Gandhi": "https://indiankanoon.org/doc/43475503/",
  "Vishaka": "https://cdnbbsr.s3waas.gov.in/s3ec0490f1f4972d133619a60c30f3559e/documents/aor_notice_circular/13.pdf",
  "Shreya Singhal": "https://cdnbbsr.s3waas.gov.in/s3ec0490f1f4972d133619a60c30f3559e/documents/aor_notice_circular/35.pdf"
};
for (const q of questions) {
  const title = q.caseName ?? (q.mode === "speed" ? q.options.find((o) => o.id === q.answer)?.text : q.prompt) ?? "";
  for (const [name, url] of Object.entries(sourceOverrides)) {
    if (q.source && title.startsWith(name)) {
      q.source = url;
      q.sourceLabel = "Read the judgment";
    }
  }
}
var badgeDefinitions = starter_set_default.Badges.map((r, i) => ({ id: i, name: r["Badge Name"], text: r["Criteria to Earn It"] }));
function shuffled(items, random = Math.random) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
function roundQuestions(mode, completed, random = Math.random) {
  const pool = questions.filter((q) => q.mode === mode);
  return [...shuffled(pool.filter((q) => !completed.includes(q.id)), random), ...shuffled(pool.filter((q) => completed.includes(q.id)), random)].map((q) => ({ ...q, options: shuffled(q.options, random) }));
}

// lib/progress.ts
var freshProfile = { name: "", email: "", group: "Class A", optIn: false, attempts: [], days: [] };
var dateKey = (date = /* @__PURE__ */ new Date()) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
function previousDay(key) {
  const d = /* @__PURE__ */ new Date(key + "T12:00:00");
  d.setDate(d.getDate() - 1);
  return dateKey(d);
}
function streakFor(days, today = dateKey()) {
  const set = new Set(days);
  let key = set.has(today) ? today : previousDay(today), n = 0;
  while (set.has(key)) {
    n++;
    key = previousDay(key);
  }
  return n;
}
function longestStreak(days) {
  return days.reduce((best, day) => Math.max(best, streakFor(days, day)), 0);
}
function firstAttempts(attempts) {
  const seen = /* @__PURE__ */ new Set();
  return attempts.filter((a) => {
    if (seen.has(a.id)) return false;
    seen.add(a.id);
    return true;
  });
}
function recordAttempt(profile, q, correct, seconds, day = dateKey()) {
  const repeated = profile.attempts.some((a) => a.id === q.id);
  const xp = repeated ? 0 : correct ? 100 + (q.mode === "speed" ? Math.max(0, 60 - Math.max(0, Math.floor(seconds))) : 0) : 0;
  const attempt = { id: q.id, mode: q.mode, correct, xp, date: day, domain: q.domain, seconds, answer: q.answer };
  return { profile: { ...profile, attempts: [...profile.attempts, attempt], days: Array.from(/* @__PURE__ */ new Set([...profile.days, day])) }, xp, repeated };
}
function earnedBadges(profile) {
  const a = profile.attempts;
  const correct = a.filter((x) => x.correct);
  const count = (mode) => correct.filter((x) => x.mode === mode).length;
  const longest = longestStreak(profile.days);
  const perfect = profile.days.some((end) => {
    let day = end;
    for (let i = 0; i < 7; i++) {
      const played = a.filter((x) => x.date === day);
      if (!played.length || played.some((x) => !x.correct)) return false;
      day = previousDay(day);
    }
    return true;
  });
  return [count("speed") >= 20, count("ratio") >= 15, correct.filter((x) => x.mode === "fake" && x.answer === "fake").length >= 10, longest >= 5, longest >= 10, correct.filter((x) => x.domain.split("/").includes("Constitutional")).length >= 10, correct.some((x) => x.mode === "speed" && x.seconds < 30), perfect];
}
function readProfile(raw) {
  if (!raw) return { ...freshProfile };
  const p = JSON.parse(raw);
  if (!p || typeof p !== "object") return { ...freshProfile };
  const r = p;
  const cleanText = (value, max, fallback = "") => typeof value === "string" ? value.slice(0, max) : fallback;
  const attempts = Array.isArray(r.attempts) ? r.attempts.filter((a) => a && questions.some((q) => q.id === a.id && q.mode === a.mode) && typeof a.correct === "boolean" && Number.isFinite(a.xp) && a.xp >= 0 && a.xp <= 160 && Number.isFinite(a.seconds) && a.seconds >= 0 && typeof a.domain === "string" && typeof a.answer === "string" && /^\d{4}-\d{2}-\d{2}$/.test(a.date)) : [];
  return { name: cleanText(r.name, 40), email: cleanText(r.email, 120), group: cleanText(r.group, 40, "Class A"), optIn: r.optIn === true, attempts, days: Array.from(new Set(attempts.map((a) => a.date))) };
}

// tests/core.test.ts
(0, import_node_test.test)("all workbook content is mapped with valid answers and no detector cues", () => {
  import_strict.default.equal(questions.length, 32);
  import_strict.default.equal(new Set(questions.map((q) => q.id)).size, 32);
  import_strict.default.deepEqual(["speed", "ratio", "fake"].map((m) => questions.filter((q) => q.mode === m).length), [10, 6, 16]);
  import_strict.default.equal(questions.filter((q) => q.mode === "fake" && q.answer === "fake").length, 8);
  import_strict.default.equal(badgeDefinitions.length, 8);
  for (const q of questions) {
    import_strict.default.equal(q.options.filter((o) => o.id === q.answer).length, 1);
    import_strict.default.ok(q.prompt && q.explanation);
    if (q.mode === "fake") import_strict.default.ok(!q.snippet?.includes("Allegedly"));
  }
});
(0, import_node_test.test)("rounds shuffle without losing content and prioritize unseen questions", () => {
  const ids = questions.filter((q) => q.mode === "speed").map((q) => q.id);
  const round = roundQuestions("speed", [ids[0]], () => 0.4);
  import_strict.default.equal(round.at(-1)?.id, ids[0]);
  import_strict.default.equal(new Set(round.map((q) => q.id)).size, 10);
  import_strict.default.deepEqual(shuffled([1, 2, 3], () => 0), [2, 3, 1]);
});
(0, import_node_test.test)("XP does not repeat, every attempt is counted, first accuracy is stable", () => {
  const q = questions[0];
  const a = recordAttempt(freshProfile, q, false, 35, "2026-10-08");
  const b = recordAttempt(a.profile, q, true, 5, "2026-10-08");
  import_strict.default.equal(b.xp, 0);
  import_strict.default.equal(b.profile.attempts.length, 2);
  import_strict.default.equal(firstAttempts(b.profile.attempts)[0].correct, false);
  import_strict.default.deepEqual(b.profile.days, ["2026-10-08"]);
  const c = recordAttempt(freshProfile, q, true, 5, "2026-10-08");
  import_strict.default.equal(c.xp, 155);
});
(0, import_node_test.test)("streaks handle gaps, yesterday, and month/year boundaries", () => {
  import_strict.default.equal(streakFor(["2025-12-31", "2026-01-01"], "2026-01-02"), 2);
  import_strict.default.equal(streakFor(["2025-12-31"], "2026-01-02"), 0);
  import_strict.default.equal(streakFor(["2026-02-28", "2026-03-01"], "2026-03-01"), 2);
  import_strict.default.equal(longestStreak(["2026-10-01", "2026-10-02", "2026-10-04"]), 2);
});
(0, import_node_test.test)("badge thresholds include replays, fake-only verdicts and split domain tags", () => {
  let p = { ...freshProfile };
  const speed = questions[0], fake = questions.find((q) => q.mode === "fake" && q.answer === "fake"), real = questions.find((q) => q.mode === "fake" && q.answer === "real");
  for (let i = 0; i < 20; i++) p = recordAttempt(p, speed, true, 20, "2026-10-08").profile;
  import_strict.default.equal(earnedBadges(p)[0], true);
  import_strict.default.equal(earnedBadges(p)[5], true);
  import_strict.default.equal(earnedBadges(p)[6], true);
  for (let i = 0; i < 10; i++) p = recordAttempt(p, real, true, 5, "2026-10-08").profile;
  import_strict.default.equal(earnedBadges(p)[2], false);
  for (let i = 0; i < 10; i++) p = recordAttempt(p, fake, true, 5, "2026-10-08").profile;
  import_strict.default.equal(earnedBadges(p)[2], true);
});
(0, import_node_test.test)("Perfect Week requires activity and correctness on all seven days; awards persist", () => {
  let p = { ...freshProfile };
  for (let i = 1; i <= 7; i++) p = recordAttempt(p, questions[0], true, 10, `2026-10-0${i}`).profile;
  import_strict.default.equal(earnedBadges(p)[7], true);
  import_strict.default.equal(earnedBadges(p)[3], true);
  const bad = recordAttempt(p, questions[1], false, 10, "2026-10-04").profile;
  import_strict.default.equal(earnedBadges(bad)[7], false);
  p = recordAttempt(p, questions[0], false, 60, "2026-10-20").profile;
  import_strict.default.equal(earnedBadges(p)[7], true);
  import_strict.default.equal(earnedBadges(p)[3], true);
});
(0, import_node_test.test)("storage rejects malformed attempts and old fixture progress", () => {
  const p = readProfile(JSON.stringify({ name: 2, attempts: [null, { id: "s1", xp: 100 }, { id: questions[0].id, mode: "speed", correct: true, xp: "oops" }], days: ["2026-10-08"] }));
  import_strict.default.equal(p.attempts.length, 0);
  import_strict.default.equal(p.name, "");
  import_strict.default.deepEqual(p.days, []);
  import_strict.default.deepEqual(readProfile(null), freshProfile);
});
