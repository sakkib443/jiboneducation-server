# 📘 Reading Test — New Question Creation Playbook

> **এই ফাইলটা তৈরি হয়েছে Test 11–20 (seedReadingTest11–20.ts) + `READING_FORMAT_GUIDE.md` + `reading.model.ts` পুরোটা analyse করে।**
> উদ্দেশ্য: একদম শূন্য থেকে একটা নতুন premium-মানের Reading test (যেমন Test 21) বানানোর জন্য একটাই reference।
>
> পড়ার ক্রম: প্রথমে এই ফাইল → তারপর `READING_FORMAT_GUIDE.md` (সেখানে প্রতিটা type-এর rendering detail আছে)।
> এই ফাইল = **"কীভাবে বানাবো" (process)**, ওই ফাইল = **"কোন field কী করে" (reference)**।

---

## 0. এক নজরে — কী analyse করা হয়েছে

| জিনিস | কোথায় | কী পেলাম |
|------|--------|----------|
| Upload Guide | `READING_FORMAT_GUIDE.md` | 14 type-এর schema + rendering নিয়ম |
| Reference Tests | `seedReadingTest11.ts` → `seedReadingTest20.ts` | 10টা real test, ~3,800 লাইন |
| DB Schema | `reading.model.ts` | DB-তে আসলে কোন field save হয় |

**সবচেয়ে বড় আবিষ্কার (নিচে বিস্তারিত):** Test **11 ও 12** তে answer key **পুরো ভরা**; Test **13–20** তে structure perfect কিন্তু answer **সব খালি (`correctAnswer: ""`)**। নতুন প্রশ্ন বানালে অবশ্যই **11/12 এর মত পুরো answer ভরে** বানাতে হবে।

---

## 1. একটা Test দেখতে কেমন — বাইরের কাঠামো (skeleton)

প্রতিটা seed script এ একটাই বড় object থাকে, structure সবসময় এক:

```typescript
const readingTest = {
    testId: "READING_AC_021",            // ← unique, READING_AC_0XX format
    testNumber: 21,                      // ← unique number
    testType: "academic",                // "academic" | "general-training"
    title: "Reading Mock Test 21 - Academic",   // ← naming convention (নিচে দেখো)
    description: "IELTS Academic Reading Test featuring passages on Topic1, Topic2, and Topic3",
    source: "IELTS Academic Practice",
    difficulty: "medium",                // "easy" | "medium" | "hard"
    isActive: true,
    duration: 60,                        // মিনিট
    totalQuestions: 40,
    totalMarks: 40,
    sections: [ /* ঠিক 3টা section */ ],
};
```

> ⚠️ **NAMING CONVENTION (গুরুত্বপূর্ণ — দুটো ধাঁচ আছে, সঠিকটা ব্যবহার করো):**
> | | ✅ সঠিক (Test 03–10, 21) | ❌ পুরোনো (Test 11–20) |
> |---|---|---|
> | `title` | `Reading Mock Test NN - Academic` | `Academic Reading Mock Test NN` |
> | `testId` | `READING_AC_0NN` | `READING_ACADEMIC_0NN` |
> | `source` | `IELTS Academic Practice` | `Academic Reading Practice` |
> | `description` | `IELTS Academic Reading Test featuring passages on X, Y, and Z` | generic |
>
> **নতুন টেস্টে সবসময় ✅ সঠিক ধাঁচ** (Test 10 / Test 21-এর মত)। Test 11–20 reference হিসেবে structure-এর জন্য ভালো, কিন্তু ওদের **title/testId/source convention নকল করো না**।

প্রতিটা `section` এর ভিতরে:

```typescript
{
    sectionNumber: 1,                    // 1, 2, 3
    title: "Passage Title",
    instructions: "You should spend about 20 minutes on Questions 1-13 ...",
    passage: passage1Text,               // পুরো reading passage (string)
    paragraphs: [ ... ],                 // OPTIONAL (নিচে দেখো) — শুধু Test 11 এ আছে
    questionGroups: [ /* render হওয়ার জন্য */ ],
    questions: [ /* grading/marking এর জন্য — flat */ ],
}
```

> **`paragraphs` field:** শুধু Test 11 আলাদা করে `paragraphs: [{label, text}]` array দিয়েছে। বাকি ৯টা টেস্ট দেয়নি — তারা শুধু `passage` string-এর ভিতরে `A `, `B ` দিয়েই label handle করেছে। **নতুন টেস্টে `paragraphs` দরকার নেই** — শুধু `passage` string ঠিকমত format করলেই হবে (Section 5 দেখো)।

---

## 2. প্রশ্ন বণ্টন — premium টেস্ট কীভাবে balance করা হয়

10টা টেস্ট থেকে পাওয়া ধারাবাহিক নিয়ম:

- **সবসময় ঠিক 3টা passage, মোট 40 প্রশ্ন।**
- **Question split:** Section 1 = Q1–13, Section 2 = Q14–26, Section 3 = Q27–40 (অর্থাৎ **13 + 13 + 14**)।
  - ব্যতিক্রম: Test 11 = 13 + 14 + 13 (এবং Test 11 এর Section 3 আসলে খালি placeholder — অসম্পূর্ণ)।
- **প্রতি section এ 2–4টা question group**, প্রতিটা group আলাদা type-এর — এই **variety-ই "premium feel"** দেয়।
- প্রতি group একটা টানা range cover করে (যেমন Q1–6, তারপর Q7–8, তারপর Q9–13)। **কোনো gap বা overlap নেই — Q1 থেকে Q40 ধারাবাহিক।**

### Type-গুলো বাস্তবে কত বার ব্যবহার হয়েছে (Test 11–20)

| Question Type | কয়টা টেস্টে দেখা গেছে | ব্যবহার |
|---------------|:---:|------|
| `multiple-choice-full` | প্রায় সব | খুব common |
| `matching-features` | অনেক | খুব common (২ স্টাইল—নিচে) |
| `true-false-not-given` | অনেক | খুব common |
| `matching-headings` | অনেক | common (section-এর শুরুতে) |
| `matching-information` | অনেক | common |
| `summary-completion` | অনেক | common |
| `short-answer` | কয়েকটা | মাঝারি |
| `note-completion` | কয়েকটা | মাঝারি (3 format) |
| `summary-with-options` | কয়েকটা | মাঝারি |
| `yes-no-not-given` | কয়েকটা | মাঝারি |
| `choose-two-letters` | কয়েকটা | কম (multi-answer) |
| `flow-chart-completion` | 13, 18 | কম |
| `sentence-completion` | 17 | কম |

**নতুন টেস্ট বানানোর recipe:** প্রতি section এ ৩টার মত আলাদা type মেশাও, পুরো টেস্টে ৭–৯টা ভিন্ন type রাখো। একটা টেস্টে একই type ২–৩ বার আসতে পারে (যেমন `multiple-choice-full` প্রায়ই দুইবার)।

---

## 3. ⭐ সবচেয়ে গুরুত্বপূর্ণ নিয়ম — DUAL STORAGE

প্রতিটা প্রশ্ন **দুই জায়গায়** লিখতে হয়, দুটোই লাগবে:

| Array | কাজ | না থাকলে |
|-------|-----|----------|
| `questionGroups` | Exam page এ প্রশ্ন **render** হওয়া | প্রশ্ন **দেখা যাবে না** |
| `questions` (flat) | উত্তর **grade/mark** করা | উত্তর **চেক হবে না** (0 marks) |

দুটো array-তে **প্রতিটা question number থাকতেই হবে** এবং `correctAnswer` **হুবহু মিলতে হবে**।

```
questionGroups (rendering)            flat questions (grading)
─────────────────────────            ─────────────────────────
group { Q1–6, type, options... }  →  Q1 {type, text, options, correctAnswer}
                                      Q2 {...}  ... Q6 {...}
```

**প্রতি type-এ flat question কয়টা হবে:**

| Group type | flat questions কয়টা |
|------------|----------------------|
| বেশিরভাগ type | range-এর প্রতিটা number-এ ১টা (Q7–12 = 6টা) |
| `multiple-choice-full` | প্রতি `mcQuestions` entry-তে ১টা |
| `choose-two-letters` (Choose N) | **প্রতিটা question number-এ ১টা** (Choose THREE → 3টা flat) |
| `matching-headings` + `exampleItems` | example **count হয় না** — শুধু আসল প্রশ্নগুলোর flat |

---

## 4. 📋 Question Type Catalog — ১৩টা type, কপি-পেস্ট template সহ

> প্রতিটা type এর জন্য: **(a)** `questionGroups` entry, **(b)** mirror করা flat `questions`।
> নিচের সব template-এ answer **ভরা** দেখানো হয়েছে — নতুন প্রশ্নে এভাবেই ভরবে (Test 11/12 এর মত)।

### 4.1 `matching-headings` — heading → paragraph (section-এর শুরুতে বসে)

```typescript
// (a) group
{
    groupType: "matching-headings",
    startQuestion: 1, endQuestion: 6,
    mainInstruction: "Reading Passage 1 has seven paragraphs, A-G.",
    subInstruction: "Choose the correct heading for paragraphs B-G from the list below.",
    featureListTitle: "List of Headings",
    headingsList: [                       // সাধারণত প্রশ্নের চেয়ে 2-4টা বেশি option
        { numeral: "i",   text: "The uses of red" },
        { numeral: "ii",  text: "Russian and English views of red" },
        // ... 8-10টা
    ],
    paragraphOptions: ["i","ii","iii","iv","v","vi","vii","viii","ix","x"],
    exampleItems: [ { text: "Paragraph A", answer: "iii" } ],   // OPTIONAL — pre-answered example
    matchingItems: [
        { questionNumber: 1, text: "Paragraph B", correctAnswer: "iv" },
        { questionNumber: 2, text: "Paragraph C", correctAnswer: "i" },
    ],
}
// (b) flat (প্রতিটায় options = সব numeral)
{ questionNumber: 1, questionType: "matching-headings", questionText: "Paragraph B",
  options: ["i","ii","iii","iv","v","vi","vii","viii","ix","x"], correctAnswer: "iv", marks: 1 }
```
> `exampleItems` দিলে ওই paragraph `matchingItems` থেকে বাদ যাবে, আর প্রশ্ন গোনায় ধরবে না।

### 4.2 `matching-information` — statement → paragraph letter

```typescript
{
    groupType: "matching-information",
    startQuestion: 14, endQuestion: 20,
    mainInstruction: "The text has 6 paragraphs, A-F. Which paragraph contains the following information?",
    subInstruction: "Write your answers in boxes 14-20 on your answer sheet.",
    note: "NB You may use any letter more than once.",
    paragraphOptions: ["A","B","C","D","E","F"],
    matchingItems: [
        { questionNumber: 14, text: "Many countries could legally fish ...", correctAnswer: "C" },
    ],
}
// flat: options = paragraphOptions, correctAnswer = letter
{ questionNumber: 14, questionType: "matching-information", questionText: "Many countries ...",
  options: ["A","B","C","D","E","F"], correctAnswer: "C", marks: 1 }
```

### 4.3 `matching-features` — দুই স্টাইল (দুটোই বৈধ)

**স্টাইল A — Classify (A/B/C categories):**
```typescript
{
    groupType: "matching-features",
    startQuestion: 18, endQuestion: 21,
    mainInstruction: "Classify the following ...",
    featureListTitle: "Categories",
    featureOptions: [
        { letter: "A", text: "butterflies only" },
        { letter: "B", text: "moths only" },
        { letter: "C", text: "both" },
    ],
    matchingItems: [ { questionNumber: 18, text: "They have complex eyes.", correctAnswer: "C" } ],
}
```
**স্টাইল B — Sentence endings:** উপরের মতই, কিন্তু `featureListTitle: "Sentence Endings"` আর `matchingItems.text` হবে বাক্যের শুরু (যেমন `"Nearly one in five people can"`)। Test 12 এ এখানে extra `paragraphOptions: ["A","B","C","D","E"]` যোগ করা ছিল dropdown drive করতে — দিলে নিরাপদ।
```typescript
// flat (দুই স্টাইলেই): options = সব letter
{ questionNumber: 18, questionType: "matching-features", questionText: "They have complex eyes.",
  options: ["A","B","C"], correctAnswer: "C", marks: 1 }
```

### 4.4 `note-completion` — ৩টা format (একটাই বেছে নাও, mix করো না)

**Format A — `notesTable` (২-কলাম টেবিল):** label | content বা bullets
```typescript
{
    groupType: "note-completion",
    startQuestion: 7, endQuestion: 12,
    mainInstruction: "Choose ONE WORD OR A NUMBER from the passage for each answer.",
    subInstruction: "Write your answers in boxes 7-12 ...",
    mainHeading: "Red in Russian Art",
    notesTable: [
        { title: "Russian Applied Arts", rows: [
            { label: "Household goods:", content: "Red objects & embroidered 7 __________" },
        ]},
        { title: "Russian Fine Arts", rows: [
            { label: "Painting: Icon", bullets: [
                "8 __________-century Novgorod icon",
                "Fires of Hell = red",
            ]},
        ]},
    ],
    notesSections: [],     // Test 11 খালি array দিয়ে রেখেছিল — দিলেও সমস্যা নেই
}
```
**Format B — `passage` (heading + bullet, টেবিল ছাড়া):**
```typescript
{
    groupType: "note-completion",
    startQuestion: 27, endQuestion: 33,
    mainInstruction: "Complete the notes below.",
    subInstruction: "Write NO MORE THAN THREE WORDS for each answer.",
    mainHeading: "An Aging Population",
    passage: `Key facts\n• Longer lives must be planned for\nCauses of aging\n• Drop in fertility and improvements in health and 27 __________\n• Fertility decline seen in many 28 __________`,
}
```
> Format B নিয়ম: ছোট লাইন (bullet/blank ছাড়া) = **HEADING**; `•`/`-` শুরু = **BULLET**; `N __________` = **INPUT BOX**।
**Format C — `notesSections`:** legacy, নতুন টেস্টে ব্যবহার করো না।
```typescript
// flat (তিন format-এই এক): blank-এর আশেপাশের কিছু text দিয়ে questionText
{ questionNumber: 7, questionType: "note-completion", questionText: "embroidered __________",
  correctAnswer: "cloths", acceptableAnswers: ["cloths"], marks: 1 }
```
> **Blank format সবখানে এক:** `7 __________` = (প্রশ্ন number) + space + ১০টা underscore।

### 4.5 `true-false-not-given`
```typescript
{
    groupType: "true-false-not-given",
    startQuestion: 1, endQuestion: 7,
    mainInstruction: "Do the following statements agree with the information in the passage?",
    subInstruction: "Write TRUE, FALSE or NOT GIVEN.",
    statements: [
        { questionNumber: 1, text: "There's little economic difference ...", correctAnswer: "TRUE" },
    ],
}
// flat
{ questionNumber: 1, questionType: "true-false-not-given", questionText: "There's little ...",
  options: ["TRUE","FALSE","NOT GIVEN"], correctAnswer: "TRUE", marks: 1 }
```

### 4.6 `yes-no-not-given` — উপরেরটার হুবহু কপি, শুধু YES/NO/NOT GIVEN
```typescript
{ groupType: "yes-no-not-given", /* ... */ statements: [ { questionNumber: 34, text: "...", correctAnswer: "NO" } ] }
{ questionNumber: 34, questionType: "yes-no-not-given", questionText: "...",
  options: ["YES","NO","NOT GIVEN"], correctAnswer: "NO", marks: 1 }
```

### 4.7 `multiple-choice-full` — A/B/C/D
```typescript
{
    groupType: "multiple-choice-full",
    startQuestion: 21, endQuestion: 23,
    mainInstruction: "Choose the correct letter, A, B, C or D.",
    subInstruction: "Write the correct letter in boxes 21-23 ...",
    mcQuestions: [
        {
            questionNumber: 21,
            questionText: "The first English fishermen ...",
            options: [
                { letter: "A", text: "were told by Basque fishermen." },
                { letter: "B", text: "were sent word ..." },
                { letter: "C", text: "acted on Viking expeditions." },
                { letter: "D", text: "discovered it themselves." },
            ],
            correctAnswer: "C",
        },
    ],
}
// flat (options এখানে দিতে হয় না — mcQuestions-এই আছে)
{ questionNumber: 21, questionType: "multiple-choice-full", questionText: "The first English fishermen ...",
  correctAnswer: "C", marks: 1 }
```
> একটা মাত্র প্রশ্ন হলেও (যেমন Q40 "writer's purpose") এই type ১টা `mcQuestions` entry দিয়ে ব্যবহার হয় — Test 12, 17 এ আছে।

### 4.8 `choose-two-letters` — Choose TWO / THREE / FIVE (multi-answer)

**Canonical pattern (Test 14/18/20):** N টা answer = N টা question number। একটা `questionSet`-এ সব number, flat-এ **N টা entry**।
```typescript
{
    groupType: "choose-two-letters",
    startQuestion: 27, endQuestion: 29,             // Choose THREE → 3টা number
    mainInstruction: "Choose THREE letters, A-G.",
    questionSets: [
        {
            questionNumbers: [27, 28, 29],
            questionText: "Which THREE of the following are reasons ...?",
            options: [
                { letter: "A", text: "..." }, { letter: "B", text: "..." },
                // ... A-G
            ],
            correctAnswers: ["A", "C", "F"],         // sorted, N টা letter
        },
    ],
}
// flat: প্রতি number-এ ১টা, প্রতিটায় এক একটা letter
{ questionNumber: 27, questionType: "choose-two-letters", questionText: "Which THREE ...?",
  options: ["A","B","C","D","E","F","G"], correctAnswer: "A", marks: 1 }
{ questionNumber: 28, /* ... */ correctAnswer: "C", marks: 1 }
{ questionNumber: 29, /* ... */ correctAnswer: "F", marks: 1 }
```
> ⚠️ **Legacy variant (Test 11):** ১টা মাত্র number (Q13), `questionNumbers: [13]`, flat-এ `correctAnswer: "D,E"` (কমা দিয়ে)। **নতুন টেস্টে canonical N-number pattern ব্যবহার করো** — এটাই 13-20 এর standard।

### 4.9 `sentence-completion` (Test 17)
```typescript
{
    groupType: "sentence-completion",
    startQuestion: 14, endQuestion: 17,
    mainInstruction: "Complete the sentences below.",
    subInstruction: "Choose NO MORE THAN TWO WORDS from the passage for each answer.",
    statements: [
        { questionNumber: 14, text: "Antarctica's location means it is very __________.", correctAnswer: "remote" },
    ],
}
// flat
{ questionNumber: 14, questionType: "sentence-completion",
  questionText: "Antarctica's location means it is very __________.", correctAnswer: "remote", marks: 1 }
```

### 4.10 `short-answer`
```typescript
{
    groupType: "short-answer",
    startQuestion: 4, endQuestion: 6,
    mainInstruction: "Answer the questions below.",
    subInstruction: "Write NO MORE THAN THREE WORDS AND/OR A NUMBER for each answer.",
    questions: [                                     // ← group-level "questions" (mc নয়)
        { questionNumber: 4, questionText: "Which area of the brain ...?", correctAnswer: "the amygdala" },
    ],
}
// flat
{ questionNumber: 4, questionType: "short-answer", questionText: "Which area of the brain ...?",
  correctAnswer: "the amygdala", acceptableAnswers: ["the amygdala","amygdala"], marks: 1 }
```

### 4.11 `summary-completion` — option list ছাড়া (passage থেকে শব্দ)
```typescript
{
    groupType: "summary-completion",
    startQuestion: 24, endQuestion: 26,
    mainInstruction: "Complete the summary below.",
    subInstruction: "Choose NO MORE THAN TWO WORDS from the passage for each answer.",
    mainHeading: "",                                 // খালি রাখা যায়
    summarySegments: [
        { type: "text", content: "Experts are less" },
        { type: "blank", questionNumber: 24, correctAnswer: "accurate" },
        { type: "text", content: "at making predictions ..." },
        { type: "blank", questionNumber: 25, correctAnswer: "bias" },
    ],
}
// flat
{ questionNumber: 24, questionType: "summary-completion", questionText: "experts are less ___",
  correctAnswer: "accurate", marks: 1 }
```

### 4.12 `summary-with-options` — শব্দের তালিকা (A-I) থেকে বাছাই
```typescript
{
    groupType: "summary-with-options",
    startQuestion: 22, endQuestion: 27,
    mainInstruction: "Complete the summary using the list of words, A-I, below.",
    subInstruction: "Write the correct letter, A-I, in boxes 22-27 ...",
    mainHeading: "The Monarch Butterfly",
    phraseList: [
        { letter: "A", text: "bacteria" }, { letter: "B", text: "California" },
        // ... A-I (blank-এর চেয়ে বেশি option রাখো)
    ],
    summarySegments: [
        { type: "text", content: "Indigenous to" },
        { type: "blank", questionNumber: 22, correctAnswer: "G" },   // ← answer = LETTER
        { type: "text", content: ", they are now found ..." },
    ],
}
// flat: options = সব letter, correctAnswer = letter
{ questionNumber: 22, questionType: "summary-with-options", questionText: "Indigenous to ___",
  options: ["A","B","C","D","E","F","G","H","I"], correctAnswer: "G", marks: 1 }
```
> `summary-completion` (passage থেকে শব্দ) আর `summary-with-options` (তালিকা থেকে letter) — দুটো আলাদা। Answer যথাক্রমে **শব্দ** vs **letter**।

### 4.13 `flow-chart-completion` (Test 13, 18) — stage-wise box + ↓ arrow
```typescript
{
    groupType: "flow-chart-completion",
    startQuestion: 14, endQuestion: 18,
    mainInstruction: "Complete the flow-chart below.",
    subInstruction: "Choose NO MORE THAN THREE WORDS from the passage for each answer.",
    flowchartStages: [
        {
            label: "Novice",                         // stage heading (bold)
            lines: [
                { segments: [
                    { type: "text", content: "Novice: needs " },
                    { type: "blank", questionNumber: 14, subIndex: 0, width: 110 },
                    { type: "text", content: " and " },
                    { type: "blank", questionNumber: 14, subIndex: 1, width: 110 },  // একই qNum = multi-part
                    { type: "text", content: " to perform a task;" },
                ]},
                { segments: [{ type: "text", content: "exposed to specific cases;" }] },
            ],
        },
        { label: "Journeyman", lines: [ /* ... */ ] },
        { label: "Expert", lines: [ /* ... */ ] },
    ],
}
// flat
{ questionNumber: 14, questionType: "flow-chart-completion",
  questionText: "needs ___ and ___ to perform a task", correctAnswer: "...", marks: 1 }
```
> একই `questionNumber` দুইবার (`subIndex: 0` ও `1`) = একটা প্রশ্নের multi-part blank; উত্তর group-এর `joinSeparator` (default `" and "`) দিয়ে যুক্ত হয়। নতুন `flowchartStages` field schema-তে registered আছে — backend restart লাগে।

---

## 5. 📄 Passage Format নিয়ম (LEFT side)

- Paragraph আলাদা করো **`\n\n`** দিয়ে।
- **Labeled paragraph:** `A text...`, `B text...`, `C text...` — অক্ষর + **space**, inline। কমপক্ষে A,B,C ধারাবাহিক থাকলে exam page নিজে থেকে bold + বড় font করে। ❌ `B.\n` (period+newline) ভেঙে যায়।
- **Bold sub-heading** (label ছাড়া passage-এ): পুরো লাইন `**Butterflies versus Moths**` দিয়ে wrap করো, `\n\n` দিয়ে আলাদা রাখো।
- **HTML নিষেধ:** `<b>`, `<br>`, `<strong>` কিচ্ছু না।
- **Special chars Unicode escape:** `‘ ’` (quotes), `– —` (dashes), `£` (£), `°` (°), `é` (é)। Test 11-20 এ ধারাবাহিকভাবে এগুলো ব্যবহার হয়েছে।

---

## 6. ✅ Answer Key ও Grading নিয়ম

**Test 11 ও 12 = answer পুরো ভরা (47 ও 66টা)। Test 13–20 = সব `correctAnswer: ""` খালি।**
নতুন টেস্ট বানালে **11/12-এর মত পুরো ভরবে** (নাহলে auto-grading কাজ করবে না, সবাই 0 পাবে)।

প্রতি type-এ `correctAnswer` কী হবে:

| Type | correctAnswer এর মান |
|------|----------------------|
| matching-headings | numeral — `"iv"` |
| matching-information / -features | letter — `"C"` |
| true/false/yes/no | `"TRUE"` / `"FALSE"` / `"NOT GIVEN"` / `"YES"` / `"NO"` |
| multiple-choice-full | letter — `"D"` |
| choose-two-letters | flat-এ প্রতি number-এ একটা letter (`"A"`); legacy হলে `"D,E"` |
| note / sentence / short / summary-completion | passage-এর **শব্দ** — `"cloths"`, `"the amygdala"` |
| summary-with-options | **letter** — `"G"` |

**`acceptableAnswers`** (শুধু শব্দ-ভিত্তিক type-এ): বিকল্প বানান/রূপ array-তে রাখো। Test 11/12 থেকে real উদাহরণ:
- বানান: `["behaviour","behavior"]`
- article সহ/ছাড়া: `["the amygdala","amygdala"]`
- সংখ্যা রূপ: `["10 per cent","10%"]`
- case: `["Realist","realist"]`

---

## 7. 🏗️ নতুন Test বানানোর ধাপ (যেমন Test 21)

```
ধাপ ১: copy
   → seedReadingTest12.ts কপি করে seedReadingTest21.ts বানাও
     (12 = সবচেয়ে ভালো reference: ৩ section পুরো ভরা + পুরো answer key)

ধাপ ২: IDs বদলাও
   → testId: "READING_ACADEMIC_021", testNumber: 21, title: "...Test 21"
   → seed function এর নাম + console.log গুলোও 21 করো

ধাপ ৩: ৩টা passage লেখো
   → passage1Text / passage2Text / passage3Text — Section 5 এর format নিয়ম মানো
   → প্রতিটা ~700-900 শব্দ (Test 11-20 এর মত)

ধাপ ৪: প্রতি section এ questionGroups বানাও
   → 2-4টা group, আলাদা type মিশিয়ে (Section 2 দেখো)
   → Q number ধারাবাহিক: S1=1-13, S2=14-26, S3=27-40

ধাপ ৫: flat questions mirror করো — answer সহ ⭐
   → প্রতি group-এর প্রতিটা number-এর জন্য flat entry
   → correctAnswer + (শব্দ হলে) acceptableAnswers ভরো
   → groups আর flat এর correctAnswer হুবহু মেলাও

ধাপ ৬: run করো
   → cd jiboneducation-server
   → npx ts-node-dev --transpile-only src/scripts/seedReadingTest21.ts
   → console এর "📊 Verification" এ Groups/Questions গুনে মিলিয়ে নাও

ধাপ ৭: নতুন field/type ব্যবহার করলে
   → reading.model.ts schema-তে আছে কিনা চেক করো, না থাকলে যোগ করো
   → backend restart (ts-node-dev auto করে)

ধাপ ৮: browser-এ verify
   → exam page খোলো, sessionStorage clear করো (নাহলে পুরোনো cache দেখাবে)
   → তিন passage + সব প্রশ্ন render হচ্ছে কিনা, পুরোনো টেস্ট ভাঙেনি — দেখো
```

> **Run command:** দুটো convention আছে — `npx ts-node src/scripts/seedReadingTestXX.ts` (Test 11) এবং `npx ts-node-dev --transpile-only src/scripts/seedReadingTestXX.ts` (Test 12)। যেকোনোটা চলবে; `ts-node-dev` দ্রুত।

> **Seed function:** Test 11/12 আলাদা নামের function (`seedReadingTest11`) ব্যবহার করেছে; Test 13-20 সাধারণ নাম `seedTest()` ব্যবহার করেছে। দুটোই ঠিক — শেষে function call করতে ভুলো না।

---

## 8. ✅ Run করার আগে চেকলিস্ট

- [ ] `testId` + `testNumber` unique এবং একে অপরের সাথে মেলে (021 ↔ 21)
- [ ] ঠিক 3টা section, মোট 40 প্রশ্ন (13 + 13 + 14)
- [ ] Q number 1-40 ধারাবাহিক, কোনো gap/duplicate নেই
- [ ] প্রতি section এ `questionGroups` **এবং** flat `questions` — দুটোই আছে
- [ ] প্রতিটা flat question এর `correctAnswer` ভরা (খালি `""` নয়)
- [ ] groups ও flat এর `correctAnswer` হুবহু মেলে
- [ ] `choose-two-letters` এ N answer = N flat entry
- [ ] `multiple-choice-full` এ flat-এ options লাগে না; অন্য letter-type এ options array দাও
- [ ] passage: `\n\n` separator, `A ` style label, **কোনো HTML নেই**, special char Unicode escape
- [ ] নতুন field হলে `reading.model.ts` schema-তে registered
- [ ] পুরোনো টেস্ট browser-এ চেক করে নিশ্চিত — কিছু ভাঙেনি

---

## 9. ⚠️ Test 11-20 তে পাওয়া অসঙ্গতি / সাবধানতা

1. **খালি answer (13-20):** এগুলো copy করলে answer key খালি থেকে যাবে → grading 0। নতুন টেস্টে অবশ্যই ভরো।
2. **Test 11 Section 3 = খালি placeholder** (`passage3Text = "PASSAGE 3 TEXT WILL BE ADDED HERE"`, খালি groups/questions)। Test 11 আসলে অসম্পূর্ণ — reference হিসেবে **Test 12 ব্যবহার করো**।
3. **`choose-two-letters` দুই pattern:** Test 11 (single Q, `"D,E"`) vs Test 14/18/20 (N number, N flat)। নতুন টেস্টে **N-number pattern**।
4. **`matching-features` dropdown:** কোথাও extra `paragraphOptions` দেওয়া (Test 12), কোথাও নেই (Test 11)। দিলে নিরাপদ।
5. **`paragraphs` array:** শুধু Test 11 এ — দরকার নেই, `passage` string-ই যথেষ্ট।
6. **DANGER ZONE:** exam page-এর existing rendering block **পরিবর্তন করো না** — শুধু নতুন block যোগ করা যায় (`READING_FORMAT_GUIDE.md` § DANGER ZONE)।

---

## 10. 🔗 দ্রুত রেফারেন্স — ফাইল কোথায়

| কাজ | ফাইল |
|-----|------|
| Seed script (নতুন টেস্ট) | `jiboneducation-server/src/scripts/seedReadingTestXX.ts` |
| সেরা reference (পুরো ভরা) | `seedReadingTest12.ts` |
| DB schema | `jiboneducation-server/src/app/modules/reading/reading.model.ts` |
| Rendering detail reference | `jiboneducation-server/src/scripts/READING_FORMAT_GUIDE.md` |
| এই playbook | `jiboneducation-server/src/scripts/READING_NEW_TEST_PLAYBOOK.md` |
| Exam page (student) | `jiboneducation-client/src/app/exam/[examId]/reading/page.jsx` |

---

*Generated by analysing Tests 11–20. পরের ধাপ: এই নিয়ম মেনে নতুন প্রশ্ন (Test 21+) generate করা।*
