/**
 * Seed Script: Academic Reading Mock Test 25
 * Run: npx ts-node-dev --transpile-only src/scripts/seedReadingTest25.ts
 *
 * Original passages (generated, fully answered):
 *   1 - The Science of Sleep (Q1-13)
 *   2 - The Library of Alexandria (Q14-26)
 *   3 - The Psychology of Music (Q27-40)
 *
 * Built per READING_NEW_TEST_PLAYBOOK.md - dual storage (questionGroups + flat questions),
 * full answer keys, 13+13+14 split, premium type mix.
 */

import mongoose from "mongoose";
import { ReadingTest } from "../app/modules/reading/reading.model";
import { User } from "../app/modules/user/user.model";
import config from "../app/config";

// ═══════════════════════════════════════════════════════════════
// PASSAGE 1: THE SCIENCE OF SLEEP (labeled A-G for matching-headings)
// ═══════════════════════════════════════════════════════════════

const passage1Text = `A For most of human history, sleep was regarded as little more than a passive pause, a period when the body simply shut down to rest before the demands of the following day. That view has been overturned. Modern research has revealed that sleep is one of the most active and important processes in which the body engages, a time when the brain is busy repairing tissue, sorting memories and clearing away waste. Far from being a state of idleness, sleep is now understood as essential to almost every aspect of physical and mental health, and the science that studies it has grown into one of the liveliest fields in modern medicine.

B A night of sleep is not a single, uniform condition but a sequence of distinct stages that repeat in cycles. Sleep is broadly divided into two types: rapid eye movement sleep, usually shortened to REM, and non-REM sleep, which is itself made up of several stages of increasing depth. During the deepest non-REM stage the body is at its most still, the heartbeat slows and the muscles relax completely. REM sleep, by contrast, is a period of intense brain activity during which most vivid dreaming occurs, and although the brain is highly active the muscles of the body are temporarily paralysed. A complete cycle through these stages lasts roughly ninety minutes, and a healthy sleeper passes through four or five such cycles each night.

C Why the body requires sleep at all remains a question that science has not entirely answered, but several functions are now well established. One of the most important is the consolidation of memory. During sleep the brain replays and strengthens the connections formed during the day, transferring information from temporary storage into more permanent form. Experiments have repeatedly shown that people who sleep after learning a new skill or set of facts remember it far better than those kept awake. Sleep also allows the body to release hormones that promote growth and repair, which is one reason why children and adolescents need considerably more of it than adults.

D A particularly striking discovery concerns the way the brain cleans itself. In waking hours the brain produces a range of waste products, including a protein that, if allowed to accumulate, is associated with serious disease. Researchers have found that during sleep the spaces between brain cells widen, allowing fluid to flow through more freely and flush these wastes away. This cleansing system operates far more efficiently during sleep than during wakefulness, which suggests that one of the central purposes of sleep may be simple housekeeping: clearing out the debris that builds up during a day of thinking.

E The consequences of going without sleep are severe and accumulate quickly. After even a single poor night, attention wanders, reaction times lengthen and the ability to make sound judgements declines. Prolonged sleep deprivation has been linked to a weakened immune system, weight gain, high blood pressure and a greater risk of accidents. Studies of drivers have found that being awake for very long periods can impair performance as much as drinking alcohol, a finding that has serious implications for road safety. The effects on mood are equally marked, with poor sleep both worsening and being worsened by conditions such as anxiety and depression.

F How much sleep a person needs varies, but the requirement falls within a fairly narrow range for most healthy adults. The widely repeated recommendation is between seven and nine hours a night, although individuals differ and a small number of people genuinely function well on less. The need also changes across a lifetime: newborn infants may sleep for sixteen hours a day, while older adults tend to sleep more lightly and for shorter periods. One persistent myth is that lost sleep can be fully recovered at the weekend; in reality, sleeping late on a Saturday does little to undo the damage of a week of short nights.

G The good news is that the quality of sleep can be improved through habit. Specialists recommend keeping a regular schedule, going to bed and waking at the same time even at weekends, and avoiding bright screens in the hour before bed, since the blue light they emit can delay the release of the hormone that signals the body to sleep. A cool, dark and quiet bedroom helps, as does avoiding caffeine and heavy meals late in the evening. These measures, collectively known as sleep hygiene, are often more effective than medication, and they cost nothing. In a society that frequently treats sleep as a luxury to be sacrificed, the evidence is a powerful reminder that it is in fact a biological necessity.`;

// ═══════════════════════════════════════════════════════════════
// PASSAGE 2: THE LIBRARY OF ALEXANDRIA (labeled A-G for matching-information)
// ═══════════════════════════════════════════════════════════════

const passage2Text = `A In the ancient world there was no institution quite like the Library of Alexandria. Founded in the Egyptian city of Alexandria in the early part of the third century BC, during the reign of the Greek kings who governed Egypt after the death of Alexander the Great, it was conceived as something far more ambitious than a mere storehouse of books. Its founders dreamed of collecting, in a single place, a copy of every work ever written, and of gathering there the finest scholars of the age. For several centuries it stood as the intellectual heart of the Mediterranean, a place where the accumulated knowledge of many civilisations was preserved, studied and advanced.

B The Library did not stand alone but formed part of a larger research institution known as the Museum, a word that originally meant a temple dedicated to the Muses, the goddesses of the arts and sciences. Within this institution scholars were given salaries, lodging and meals, and were free to devote themselves entirely to study without the distraction of earning a living. They were not required to teach, although many did, and the community they formed has been compared to a modern university or research institute. It was an arrangement remarkably generous for its time, and it attracted the most brilliant minds of the Greek-speaking world.

C The methods used to build the collection were energetic and, on occasion, unscrupulous. The rulers of Egypt were said to send agents to the book markets of other cities with instructions to buy whatever they could find. According to one famous story, every ship that docked at the busy harbour of Alexandria was searched, and any books found aboard were seized and copied; the copy was returned to the owner while the original was kept for the Library. By such means the collection is thought to have grown to hundreds of thousands of scrolls, although the exact number is impossible to verify and ancient estimates vary enormously.

D The achievements of the scholars who worked there were extraordinary, and many remain influential today. It was at Alexandria that the geographer Eratosthenes calculated the circumference of the Earth with remarkable accuracy, using nothing more than the shadows cast by the sun and some elegant reasoning. The mathematician Euclid produced his great work on geometry, a text that would be studied for more than two thousand years. Astronomers refined their understanding of the heavens, physicians advanced the study of human anatomy, and scholars of literature produced careful editions of older texts, establishing standards of editing that are still recognisable in modern scholarship.

E The decline of the Library was gradual rather than sudden, and its precise causes are much debated. The popular image of a single catastrophic fire that destroyed everything in one night is almost certainly a simplification. Historians now believe that the collection suffered a series of misfortunes over several centuries, including damage during a war in the first century BC, the gradual withdrawal of royal funding, and the loss of scholars as the political situation grew unstable. By the time of the later disasters often blamed for its end, the great Library may already have been a shadow of what it once was.

F Whatever the exact sequence of events, the loss was immense, and it is tempting to imagine how much was destroyed forever. Countless works of ancient literature, science and philosophy that were once held at Alexandria are known to us today only by their titles, or by fragments quoted in other authors, or are entirely lost. Among them, it is believed, were plays, histories and scientific treatises that might have transformed our understanding of the ancient world. The disappearance of the Library has come to stand, in the popular imagination, as a symbol of the fragility of human knowledge and of how easily the achievements of one age can be lost to the next.

G Perhaps for this reason the memory of Alexandria has never faded, and its legacy is felt even now. The very idea of a universal library, a single collection that aspires to hold all of human learning and to make it freely available, can be traced back to that ancient foundation. Modern libraries, archives and the vast digital collections of the internet are in a sense its descendants, pursuing on a far greater scale the dream that inspired the scholars of Alexandria. In 2002 a grand new library was opened in the modern city of Alexandria, a deliberate echo of the ancient one, and a reminder that the impulse to gather and preserve knowledge is as strong today as it was more than two thousand years ago.`;

// ═══════════════════════════════════════════════════════════════
// PASSAGE 3: THE PSYCHOLOGY OF MUSIC (continuous + bold sub-headings)
// ═══════════════════════════════════════════════════════════════

const passage3Text = `Music is found in every human society that has ever been studied, yet it presents science with a genuine puzzle. Unlike food, warmth or sleep, it appears to serve no obvious survival purpose, and a person can live a perfectly healthy life without ever performing or even paying attention to it. And yet people everywhere devote enormous amounts of time, money and emotion to music, and most of us would find a world without it greatly impoverished. Understanding why music affects us so deeply has become one of the more intriguing questions in modern psychology.

**Why do we have music?**

One long-running debate concerns whether the human capacity for music is a genuine adaptation, shaped by evolution because it offered some advantage, or merely an accidental by-product of abilities that evolved for other reasons. The psychologist Steven Pinker famously described music as 'auditory cheesecake', an invention that happens to tickle pleasure circuits in the brain that exist for more important purposes such as language and emotion. Other researchers strongly disagree, arguing that music is far too universal and too deeply rooted in human biology to be a mere accident. They point out that singing and dancing together may have helped early human groups to bond, to coordinate their actions and to signal trust, all of which would have offered real advantages.

Whatever its origins, music is processed in a remarkably distributed way across the brain rather than in a single dedicated centre. Listening to a familiar tune can activate areas concerned with hearing, memory, movement and emotion almost simultaneously. This wide involvement may explain one of the most curious facts about music: its extraordinary power to evoke memories. A song heard in youth can, decades later, instantly recall the feelings and even the surroundings of the time when it was first heard, an effect that is far stronger for music than for most other kinds of stimulus.

**The emotional power of sound**

The ability of music to stir emotion is perhaps its most mysterious feature. A sequence of sounds, which carries no literal meaning in the way that words do, can nonetheless move a listener to joy, to sadness or even to tears. Part of the explanation may lie in expectation. As we listen, our brains constantly predict what will come next, and skilled composers play with these predictions, sometimes fulfilling them and sometimes delaying or denying them. When a long-awaited resolution finally arrives, the effect can be intensely pleasurable, and brain scans have shown that such musical climaxes release the same chemical reward associated with food and other pleasures.

There is, however, a widely held belief that deserves to be treated with caution. The so-called 'Mozart effect', the claim that listening to classical music makes people, and especially children, more intelligent, became enormously popular in the 1990s. The writer regards this idea as a clear case of a finding being exaggerated beyond what the evidence can support. The original study showed only a small and short-lived improvement in one narrow spatial task among adults, and attempts to repeat it have produced mixed results at best. Selling recordings on the promise of cleverer babies, the writer suggests, says more about marketing than about science.

This does not mean that music has no genuine benefits beyond pleasure. Research into music therapy has produced encouraging results in a variety of settings. Patients recovering from a stroke have, in some cases, regained the ability to speak more readily by singing words they could not say, and people suffering from dementia often respond to the music of their youth even when other memories have faded. Music can also reduce the perception of pain and lower the levels of stress hormones in the body, which is why it is increasingly used in hospitals and clinics. These are modest but real effects, grounded in careful study rather than wishful thinking.

What emerges from this research is a picture of music as something woven deeply into human nature. Whether or not it began as an evolutionary adaptation, it has become, in the writer's view, one of the most powerful tools we possess for shaping mood, strengthening memory and binding people together. The mystery of exactly why a pattern of sound should hold such sway over the mind is far from solved, but it is precisely that mystery, perhaps, that keeps drawing both scientists and listeners back to it.`;

// ═══════════════════════════════════════════════════════════════
// FULL TEST DATA
// ═══════════════════════════════════════════════════════════════

const readingTest25 = {
    testId: "READING_AC_025",
    testNumber: 25,
    testType: "academic" as const,
    title: "Reading Mock Test 25 - Academic",
    description: "IELTS Academic Reading Test featuring passages on The Science of Sleep, The Library of Alexandria, and The Psychology of Music",
    source: "IELTS Academic Practice",
    difficulty: "medium" as const,
    isActive: true,
    duration: 60,
    totalQuestions: 40,
    totalMarks: 40,
    sections: [
        // ╔═══════════════════════════════════════════════════════════╗
        // ║  SECTION 1: THE SCIENCE OF SLEEP (Questions 1-13)        ║
        // ╚═══════════════════════════════════════════════════════════╝
        {
            sectionNumber: 1,
            title: "The Science of Sleep",
            instructions: "You should spend about 20 minutes on Questions 1-13 which are based on Reading Passage 1 below.",
            passage: passage1Text,
            questionGroups: [
                // ── Q1-6: MATCHING HEADINGS (with Example: Paragraph A = i) ──
                {
                    groupType: "matching-headings",
                    startQuestion: 1,
                    endQuestion: 6,
                    mainInstruction: "Reading Passage 1 has seven paragraphs, A-G.",
                    subInstruction: "Choose the correct heading for paragraphs B-G from the list of headings below. Write the correct number, i-x, in boxes 1-6 on your answer sheet.",
                    featureListTitle: "List of Headings",
                    headingsList: [
                        { numeral: "i", text: "A changed understanding of what sleep is" },
                        { numeral: "ii", text: "The stages that make up a night's sleep" },
                        { numeral: "iii", text: "What sleep does for the body and mind" },
                        { numeral: "iv", text: "How the sleeping brain removes waste" },
                        { numeral: "v", text: "The dangers of getting too little sleep" },
                        { numeral: "vi", text: "How much sleep is needed and by whom" },
                        { numeral: "vii", text: "Practical ways to sleep better" },
                        { numeral: "viii", text: "The history of sleep research" },
                        { numeral: "ix", text: "Dreams and their meaning" },
                        { numeral: "x", text: "Medicines that aid sleep" },
                    ],
                    paragraphOptions: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"],
                    exampleItems: [
                        { text: "Paragraph A", answer: "i" },
                    ],
                    matchingItems: [
                        { questionNumber: 1, text: "Paragraph B", correctAnswer: "ii" },
                        { questionNumber: 2, text: "Paragraph C", correctAnswer: "iii" },
                        { questionNumber: 3, text: "Paragraph D", correctAnswer: "iv" },
                        { questionNumber: 4, text: "Paragraph E", correctAnswer: "v" },
                        { questionNumber: 5, text: "Paragraph F", correctAnswer: "vi" },
                        { questionNumber: 6, text: "Paragraph G", correctAnswer: "vii" },
                    ],
                },
                // ── Q7-10: SUMMARY COMPLETION (ONE WORD ONLY) ──
                {
                    groupType: "summary-completion",
                    startQuestion: 7,
                    endQuestion: 10,
                    mainInstruction: "Complete the summary below.",
                    subInstruction: "Choose ONE WORD ONLY from the passage for each answer. Write your answers in boxes 7-10 on your answer sheet.",
                    mainHeading: "The stages of sleep",
                    summarySegments: [
                        { type: "text", content: "Sleep is not uniform but moves through repeating cycles. It is divided into REM sleep and non-REM sleep. In the deepest non-REM stage the body is very still and the" },
                        { type: "blank", questionNumber: 7, correctAnswer: "heartbeat" },
                        { type: "text", content: "slows down. During REM sleep, by contrast, the brain is very active and most vivid" },
                        { type: "blank", questionNumber: 8, correctAnswer: "dreaming" },
                        { type: "text", content: "takes place, yet at the same time the body's muscles are temporarily" },
                        { type: "blank", questionNumber: 9, correctAnswer: "paralysed" },
                        { type: "text", content: ". One full cycle lasts about ninety" },
                        { type: "blank", questionNumber: 10, correctAnswer: "minutes" },
                        { type: "text", content: ", and a healthy sleeper completes four or five of them in a night." },
                    ],
                },
                // ── Q11-13: TRUE/FALSE/NOT GIVEN ──
                {
                    groupType: "true-false-not-given",
                    startQuestion: 11,
                    endQuestion: 13,
                    mainInstruction: "Do the following statements agree with the information given in Reading Passage 1?",
                    subInstruction: "In boxes 11-13 on your answer sheet, write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, NOT GIVEN if there is no information on this.",
                    statements: [
                        { questionNumber: 11, text: "People who sleep after learning something remember it better than those who stay awake.", correctAnswer: "TRUE" },
                        { questionNumber: 12, text: "The brain removes waste products more effectively while a person is awake than while asleep.", correctAnswer: "FALSE" },
                        { questionNumber: 13, text: "Sleeping late at the weekend fully repairs the harm caused by short nights during the week.", correctAnswer: "FALSE" },
                    ],
                },
            ],
            questions: [
                // Matching Headings (Q1-6)
                { questionNumber: 1, questionType: "matching-headings", questionText: "Paragraph B", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "ii", marks: 1 },
                { questionNumber: 2, questionType: "matching-headings", questionText: "Paragraph C", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "iii", marks: 1 },
                { questionNumber: 3, questionType: "matching-headings", questionText: "Paragraph D", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "iv", marks: 1 },
                { questionNumber: 4, questionType: "matching-headings", questionText: "Paragraph E", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "v", marks: 1 },
                { questionNumber: 5, questionType: "matching-headings", questionText: "Paragraph F", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "vi", marks: 1 },
                { questionNumber: 6, questionType: "matching-headings", questionText: "Paragraph G", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "vii", marks: 1 },
                // Summary Completion (Q7-10)
                { questionNumber: 7, questionType: "summary-completion", questionText: "the body is very still and the __________ slows down", correctAnswer: "heartbeat", acceptableAnswers: ["heartbeat"], marks: 1 },
                { questionNumber: 8, questionType: "summary-completion", questionText: "most vivid __________ takes place", correctAnswer: "dreaming", acceptableAnswers: ["dreaming"], marks: 1 },
                { questionNumber: 9, questionType: "summary-completion", questionText: "the body's muscles are temporarily __________", correctAnswer: "paralysed", acceptableAnswers: ["paralysed", "paralyzed"], marks: 1 },
                { questionNumber: 10, questionType: "summary-completion", questionText: "one full cycle lasts about ninety __________", correctAnswer: "minutes", acceptableAnswers: ["minutes"], marks: 1 },
                // True/False/Not Given (Q11-13)
                { questionNumber: 11, questionType: "true-false-not-given", questionText: "People who sleep after learning something remember it better than those who stay awake.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE", marks: 1 },
                { questionNumber: 12, questionType: "true-false-not-given", questionText: "The brain removes waste products more effectively while a person is awake than while asleep.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE", marks: 1 },
                { questionNumber: 13, questionType: "true-false-not-given", questionText: "Sleeping late at the weekend fully repairs the harm caused by short nights during the week.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE", marks: 1 },
            ],
        },

        // ╔═══════════════════════════════════════════════════════════╗
        // ║  SECTION 2: THE LIBRARY OF ALEXANDRIA (Questions 14-26)  ║
        // ╚═══════════════════════════════════════════════════════════╝
        {
            sectionNumber: 2,
            title: "The Library of Alexandria",
            instructions: "You should spend about 20 minutes on Questions 14-26 which are based on Reading Passage 2 below.",
            passage: passage2Text,
            questionGroups: [
                // ── Q14-19: MATCHING INFORMATION ──
                {
                    groupType: "matching-information",
                    startQuestion: 14,
                    endQuestion: 19,
                    mainInstruction: "Reading Passage 2 has seven paragraphs, A-G. Which paragraph contains the following information?",
                    subInstruction: "Write the correct letter, A-G, in boxes 14-19 on your answer sheet.",
                    note: "NB You may use any letter more than once.",
                    paragraphOptions: ["A", "B", "C", "D", "E", "F", "G"],
                    matchingItems: [
                        { questionNumber: 14, text: "a description of how scholars at the institution were supported financially", correctAnswer: "B" },
                        { questionNumber: 15, text: "a reference to a modern building inspired by the ancient Library", correctAnswer: "G" },
                        { questionNumber: 16, text: "an account of an aggressive method used to obtain new books", correctAnswer: "C" },
                        { questionNumber: 17, text: "the claim that the Library's decline had several different causes", correctAnswer: "E" },
                        { questionNumber: 18, text: "a measurement of the Earth made by one of the scholars", correctAnswer: "D" },
                        { questionNumber: 19, text: "the ambition that lay behind the founding of the Library", correctAnswer: "A" },
                    ],
                },
                // ── Q20-23: NOTE COMPLETION (passage format) ──
                {
                    groupType: "note-completion",
                    startQuestion: 20,
                    endQuestion: 23,
                    mainInstruction: "Complete the notes below.",
                    subInstruction: "Choose ONE WORD ONLY from the passage for each answer. Write your answers in boxes 20-23 on your answer sheet.",
                    mainHeading: "The Library of Alexandria",
                    passage: `The Museum\n- The Library was part of a research institution called the Museum\n- The name originally referred to a 20 __________ dedicated to the Muses\n- Scholars received salaries, lodging and 21 __________\nAchievements of the scholars\n- Eratosthenes worked out the 22 __________ of the Earth\n- Euclid wrote a famous work on 23 __________`,
                },
                // ── Q24-26: MULTIPLE CHOICE FULL ──
                {
                    groupType: "multiple-choice-full",
                    startQuestion: 24,
                    endQuestion: 26,
                    mainInstruction: "Choose the correct letter, A, B, C or D.",
                    subInstruction: "Write the correct letter in boxes 24-26 on your answer sheet.",
                    mcQuestions: [
                        {
                            questionNumber: 24,
                            questionText: "According to the passage, the founders of the Library wanted to",
                            options: [
                                { letter: "A", text: "collect a copy of every work ever written." },
                                { letter: "B", text: "keep their books away from ordinary people." },
                                { letter: "C", text: "make a profit from selling rare scrolls." },
                                { letter: "D", text: "train teachers for the city's schools." },
                            ],
                            correctAnswer: "A",
                        },
                        {
                            questionNumber: 25,
                            questionText: "What does the passage say about the number of scrolls held in the Library?",
                            options: [
                                { letter: "A", text: "It was carefully recorded by the scholars." },
                                { letter: "B", text: "It cannot be established with certainty." },
                                { letter: "C", text: "It was smaller than later writers claimed." },
                                { letter: "D", text: "It never rose above a few thousand." },
                            ],
                            correctAnswer: "B",
                        },
                        {
                            questionNumber: 26,
                            questionText: "The writer suggests that the popular image of the Library's destruction is",
                            options: [
                                { letter: "A", text: "an accurate account of a single disaster." },
                                { letter: "B", text: "almost certainly too simple." },
                                { letter: "C", text: "impossible to investigate today." },
                                { letter: "D", text: "the result of deliberate invention." },
                            ],
                            correctAnswer: "B",
                        },
                    ],
                },
            ],
            questions: [
                // Matching Information (Q14-19)
                { questionNumber: 14, questionType: "matching-information", questionText: "a description of how scholars at the institution were supported financially", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "B", marks: 1 },
                { questionNumber: 15, questionType: "matching-information", questionText: "a reference to a modern building inspired by the ancient Library", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "G", marks: 1 },
                { questionNumber: 16, questionType: "matching-information", questionText: "an account of an aggressive method used to obtain new books", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "C", marks: 1 },
                { questionNumber: 17, questionType: "matching-information", questionText: "the claim that the Library's decline had several different causes", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "E", marks: 1 },
                { questionNumber: 18, questionType: "matching-information", questionText: "a measurement of the Earth made by one of the scholars", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "D", marks: 1 },
                { questionNumber: 19, questionType: "matching-information", questionText: "the ambition that lay behind the founding of the Library", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "A", marks: 1 },
                // Note Completion (Q20-23)
                { questionNumber: 20, questionType: "note-completion", questionText: "originally referred to a __________ dedicated to the Muses", correctAnswer: "temple", acceptableAnswers: ["temple"], marks: 1 },
                { questionNumber: 21, questionType: "note-completion", questionText: "Scholars received salaries, lodging and __________", correctAnswer: "meals", acceptableAnswers: ["meals"], marks: 1 },
                { questionNumber: 22, questionType: "note-completion", questionText: "Eratosthenes worked out the __________ of the Earth", correctAnswer: "circumference", acceptableAnswers: ["circumference"], marks: 1 },
                { questionNumber: 23, questionType: "note-completion", questionText: "Euclid wrote a famous work on __________", correctAnswer: "geometry", acceptableAnswers: ["geometry"], marks: 1 },
                // Multiple Choice (Q24-26)
                { questionNumber: 24, questionType: "multiple-choice-full", questionText: "According to the passage, the founders of the Library wanted to", correctAnswer: "A", marks: 1 },
                { questionNumber: 25, questionType: "multiple-choice-full", questionText: "What does the passage say about the number of scrolls held in the Library?", correctAnswer: "B", marks: 1 },
                { questionNumber: 26, questionType: "multiple-choice-full", questionText: "The writer suggests that the popular image of the Library's destruction is", correctAnswer: "B", marks: 1 },
            ],
        },

        // ╔═══════════════════════════════════════════════════════════╗
        // ║  SECTION 3: THE PSYCHOLOGY OF MUSIC (Questions 27-40)    ║
        // ╚═══════════════════════════════════════════════════════════╝
        {
            sectionNumber: 3,
            title: "The Psychology of Music",
            instructions: "You should spend about 20 minutes on Questions 27-40 which are based on Reading Passage 3 below.",
            passage: passage3Text,
            questionGroups: [
                // ── Q27-29: MULTIPLE CHOICE FULL ──
                {
                    groupType: "multiple-choice-full",
                    startQuestion: 27,
                    endQuestion: 29,
                    mainInstruction: "Choose the correct letter, A, B, C or D.",
                    subInstruction: "Write the correct letter in boxes 27-29 on your answer sheet.",
                    mcQuestions: [
                        {
                            questionNumber: 27,
                            questionText: "The writer says that music is puzzling to scientists because it",
                            options: [
                                { letter: "A", text: "is found in only a few human societies." },
                                { letter: "B", text: "appears to serve no clear survival purpose." },
                                { letter: "C", text: "is disliked by many healthy people." },
                                { letter: "D", text: "costs more than it is worth." },
                            ],
                            correctAnswer: "B",
                        },
                        {
                            questionNumber: 28,
                            questionText: "Steven Pinker's phrase 'auditory cheesecake' is used to express the view that music",
                            options: [
                                { letter: "A", text: "is a by-product of abilities that evolved for other purposes." },
                                { letter: "B", text: "is the most important of all human adaptations." },
                                { letter: "C", text: "helped early humans to bond with one another." },
                                { letter: "D", text: "is harmful when consumed in large amounts." },
                            ],
                            correctAnswer: "A",
                        },
                        {
                            questionNumber: 29,
                            questionText: "How is music processed in the brain, according to the passage?",
                            options: [
                                { letter: "A", text: "In a single area dedicated to it alone." },
                                { letter: "B", text: "Mainly in the regions responsible for language." },
                                { letter: "C", text: "Across several areas at the same time." },
                                { letter: "D", text: "More weakly than other kinds of stimulus." },
                            ],
                            correctAnswer: "C",
                        },
                    ],
                },
                // ── Q30-31: CHOOSE TWO LETTERS ──
                {
                    groupType: "choose-two-letters",
                    startQuestion: 30,
                    endQuestion: 31,
                    mainInstruction: "Choose TWO letters, A-E.",
                    subInstruction: "Write the correct letters in boxes 30 and 31 on your answer sheet.",
                    questionSets: [
                        {
                            questionNumbers: [30, 31],
                            questionText: "Which TWO benefits of music does the writer mention as being supported by careful research?",
                            options: [
                                { letter: "A", text: "It can make children significantly more intelligent." },
                                { letter: "B", text: "It can help some stroke patients to speak more readily." },
                                { letter: "C", text: "It can permanently cure dementia." },
                                { letter: "D", text: "It can lower the levels of stress hormones in the body." },
                                { letter: "E", text: "It can replace the need for sleep." },
                            ],
                            correctAnswers: ["B", "D"],
                        },
                    ],
                },
                // ── Q32-36: YES/NO/NOT GIVEN ──
                {
                    groupType: "yes-no-not-given",
                    startQuestion: 32,
                    endQuestion: 36,
                    mainInstruction: "Do the following statements agree with the claims of the writer in Reading Passage 3?",
                    subInstruction: "In boxes 32-36 on your answer sheet, write YES if the statement agrees with the claims of the writer, NO if the statement contradicts the claims of the writer, NOT GIVEN if it is impossible to say what the writer thinks about this.",
                    statements: [
                        { questionNumber: 32, text: "Music's power to bring back memories is stronger than that of most other kinds of stimulus.", correctAnswer: "YES" },
                        { questionNumber: 33, text: "The claims made for the 'Mozart effect' were exaggerated beyond what the evidence supports.", correctAnswer: "YES" },
                        { questionNumber: 34, text: "Classical music is more emotionally powerful than other kinds of music.", correctAnswer: "NOT GIVEN" },
                        { questionNumber: 35, text: "The benefits found in music therapy are large and immediate.", correctAnswer: "NO" },
                        { questionNumber: 36, text: "Music is one of the most powerful tools people have for shaping mood and binding people together.", correctAnswer: "YES" },
                    ],
                },
                // ── Q37-40: SUMMARY WITH OPTIONS (A-H letters) ──
                {
                    groupType: "summary-with-options",
                    startQuestion: 37,
                    endQuestion: 40,
                    mainInstruction: "Complete the summary using the list of words, A-H, below.",
                    subInstruction: "Write the correct letter, A-H, in boxes 37-40 on your answer sheet.",
                    mainHeading: "How music stirs emotion",
                    phraseList: [
                        { letter: "A", text: "meaning" },
                        { letter: "B", text: "expectation" },
                        { letter: "C", text: "pleasurable" },
                        { letter: "D", text: "reward" },
                        { letter: "E", text: "language" },
                        { letter: "F", text: "painful" },
                        { letter: "G", text: "memory" },
                        { letter: "H", text: "words" },
                    ],
                    summarySegments: [
                        { type: "text", content: "Although a sequence of sounds carries no literal" },
                        { type: "blank", questionNumber: 37, correctAnswer: "A" },
                        { type: "text", content: ", it can still move a listener deeply. One explanation involves" },
                        { type: "blank", questionNumber: 38, correctAnswer: "B" },
                        { type: "text", content: ": the brain constantly predicts what will follow, and composers play with these predictions. When a long-awaited resolution finally arrives, the effect can be intensely" },
                        { type: "blank", questionNumber: 39, correctAnswer: "C" },
                        { type: "text", content: ", and scans show that such climaxes release the same chemical" },
                        { type: "blank", questionNumber: 40, correctAnswer: "D" },
                        { type: "text", content: "that is linked with food and other pleasures." },
                    ],
                },
            ],
            questions: [
                // Multiple Choice (Q27-29)
                { questionNumber: 27, questionType: "multiple-choice-full", questionText: "The writer says that music is puzzling to scientists because it", correctAnswer: "B", marks: 1 },
                { questionNumber: 28, questionType: "multiple-choice-full", questionText: "Steven Pinker's phrase 'auditory cheesecake' is used to express the view that music", correctAnswer: "A", marks: 1 },
                { questionNumber: 29, questionType: "multiple-choice-full", questionText: "How is music processed in the brain, according to the passage?", correctAnswer: "C", marks: 1 },
                // Choose Two Letters (Q30-31)
                { questionNumber: 30, questionType: "choose-two-letters", questionText: "Which TWO benefits of music does the writer mention as being supported by careful research?", options: ["A", "B", "C", "D", "E"], correctAnswer: "B", marks: 1 },
                { questionNumber: 31, questionType: "choose-two-letters", questionText: "Which TWO benefits of music does the writer mention as being supported by careful research?", options: ["A", "B", "C", "D", "E"], correctAnswer: "D", marks: 1 },
                // Yes/No/Not Given (Q32-36)
                { questionNumber: 32, questionType: "yes-no-not-given", questionText: "Music's power to bring back memories is stronger than that of most other kinds of stimulus.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "YES", marks: 1 },
                { questionNumber: 33, questionType: "yes-no-not-given", questionText: "The claims made for the 'Mozart effect' were exaggerated beyond what the evidence supports.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "YES", marks: 1 },
                { questionNumber: 34, questionType: "yes-no-not-given", questionText: "Classical music is more emotionally powerful than other kinds of music.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NOT GIVEN", marks: 1 },
                { questionNumber: 35, questionType: "yes-no-not-given", questionText: "The benefits found in music therapy are large and immediate.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NO", marks: 1 },
                { questionNumber: 36, questionType: "yes-no-not-given", questionText: "Music is one of the most powerful tools people have for shaping mood and binding people together.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "YES", marks: 1 },
                // Summary With Options (Q37-40)
                { questionNumber: 37, questionType: "summary-with-options", questionText: "a sequence of sounds carries no literal __________", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "A", marks: 1 },
                { questionNumber: 38, questionType: "summary-with-options", questionText: "One explanation involves __________", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "B", marks: 1 },
                { questionNumber: 39, questionType: "summary-with-options", questionText: "the effect can be intensely __________", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "C", marks: 1 },
                { questionNumber: 40, questionType: "summary-with-options", questionText: "release the same chemical __________", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "D", marks: 1 },
            ],
        },
    ],
};

// ═══════════════════════════════════════════════════════════════
// SEED FUNCTION
// ═══════════════════════════════════════════════════════════════

async function seedReadingTest25() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log("Connected to MongoDB");

        const existing = await ReadingTest.findOne({ testId: readingTest25.testId });
        if (existing) {
            await ReadingTest.findByIdAndUpdate(existing._id, readingTest25);
            console.log("✅ Reading Test 25 UPDATED successfully!");
        } else {
            const admin = await User.findOne({ role: "admin" });
            if (!admin) {
                console.log("❌ Admin user not found!");
                process.exit(1);
            }
            await ReadingTest.create({ ...readingTest25, createdBy: admin._id });
            console.log("✅ Reading Test 25 CREATED successfully!");
        }

        // Verify
        const verify = await ReadingTest.findOne({ testId: readingTest25.testId });
        if (verify) {
            const sections = (verify as any).sections || [];
            console.log("\n📊 Verification:");
            console.log(`   Title: ${(verify as any).title}`);
            console.log(`   Test Number: ${(verify as any).testNumber}`);
            console.log(`   Sections: ${sections.length}`);
            let totalQ = 0;
            sections.forEach((s: any, i: number) => {
                const qCount = s.questions?.length || 0;
                totalQ += qCount;
                console.log(`   Section ${i + 1}: ${s.title} | Groups: ${s.questionGroups?.length || 0} | Questions: ${qCount}`);
            });
            console.log(`   Total Questions: ${totalQ}`);
        }

        await mongoose.disconnect();
        process.exit(0);
    } catch (error) {
        console.error("❌ Error:", error);
        process.exit(1);
    }
}

seedReadingTest25();
