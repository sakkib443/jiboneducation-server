/**
 * Seed Script: Academic Reading Mock Test 28
 * Run: npx ts-node-dev --transpile-only src/scripts/seedReadingTest28.ts
 *
 * Original passages (generated, fully answered):
 *   1 - Desalination of Seawater (Q1-13)
 *   2 - The History of Cartography (Q14-26)
 *   3 - Decision Fatigue (Q27-40)
 *
 * Built per READING_NEW_TEST_PLAYBOOK.md - dual storage (questionGroups + flat questions),
 * full answer keys, 13+13+14 split, premium type mix.
 */

import mongoose from "mongoose";
import { ReadingTest } from "../app/modules/reading/reading.model";
import { User } from "../app/modules/user/user.model";
import config from "../app/config";

// ===============================================================
// PASSAGE 1: DESALINATION OF SEAWATER (labeled A-G for matching-headings)
// ===============================================================

const passage1Text = `A More than nine-tenths of the water on the planet is salty, and most of the rest is locked away in ice caps and glaciers or buried deep underground. The fresh water that human beings can readily use therefore amounts to a tiny fraction of the whole. As populations grow and cities expand, the gap between the supply of fresh water and the demand for it widens, and in many dry regions the shortage has become severe. It is hardly surprising, then, that engineers have long dreamed of turning the vast resources of the oceans into drinking water. The process of removing salt from seawater is known as desalination, and it has gradually moved from a costly curiosity to a vital part of the water supply in dozens of countries.

B The idea itself is ancient. Sailors on long voyages knew that if seawater was boiled and the rising steam was collected and cooled, the liquid that condensed was free of salt and safe to drink. This principle, called distillation, leaves the salt behind in the original container because salt does not turn to vapour at the temperatures involved. For centuries distillation was the only method available, and it remained the dominant technology well into the twentieth century, particularly in oil-rich desert nations that had cheap energy but very little rain. Its great drawback, however, was the enormous amount of fuel needed to heat the water, which made the resulting supply expensive.

C The picture changed dramatically with the development of a quite different approach known as reverse osmosis. In ordinary osmosis, water naturally moves through a thin barrier, or membrane, from a weaker solution towards a stronger one. By applying considerable pressure to seawater, engineers can force this process to run backwards, pushing pure water through a membrane while the salt is left behind. The membranes are designed with pores so small that water molecules can pass but salt cannot. Because reverse osmosis does not require water to be boiled, it uses far less energy than distillation, and today it accounts for the majority of the world's desalination capacity.

D Despite these advances, desalination remains expensive and demanding. The chief difficulty is energy: separating salt from water requires a great deal of power, and in plants that rely on fossil fuels this translates into high costs and significant emissions of carbon dioxide. A second problem is what to do with the by-product. For every litre of fresh water produced, a roughly equal quantity of extremely salty water, known as brine, is left over. When this brine is pumped back into the sea, it sinks because of its density and can harm the plants and animals living on the seabed near the outlet.

E Engineers have responded to these concerns with a series of improvements. Modern membranes are more efficient and longer-lasting than their predecessors, and devices that recover energy from the high-pressure brine and reuse it have cut the power needed by reverse osmosis to a fraction of what it once was. There is also growing interest in driving desalination with renewable sources of energy. Several large plants are now powered partly by solar or wind energy, an approach that is especially attractive in sunny coastal deserts, where both seawater and sunshine are abundant.

F The countries that depend most heavily on desalinated water lie in the Middle East, where rainfall is scarce and the sea is close at hand. Saudi Arabia and the United Arab Emirates obtain a large share of their drinking water from the sea, and the technology has allowed substantial cities to flourish in places that could never have supported them otherwise. Elsewhere, nations such as Israel and Australia have built major plants to guard against drought, while the city-state of Singapore treats desalination as one strand of a deliberately diversified water strategy designed to reduce its dependence on imported supplies.

G Looking ahead, researchers are exploring methods that could make the process cheaper and cleaner still. Among the most promising are extremely thin membranes made from advanced materials, which might allow water through more freely while keeping out salt. Others are studying how the leftover brine might be treated as a resource rather than a waste, since it contains valuable minerals that could in principle be extracted and sold. Few experts believe that desalination alone can solve the world's water problems, and saving water remains essential. Nevertheless, as the pressure on fresh water continues to mount, the ability to tap the oceans is likely to become ever more important.`;

// ===============================================================
// PASSAGE 2: THE HISTORY OF CARTOGRAPHY (labeled A-G for matching-information)
// ===============================================================

const passage2Text = `A Cartography, the art and science of making maps, is almost as old as human civilisation itself. Long before the invention of writing, people scratched simple diagrams onto clay, bark or rock to record the location of rivers, hunting grounds and neighbouring settlements. Some of the oldest surviving examples come from ancient Babylon, where a clay tablet dating back thousands of years shows the world as a flat disc encircled by a great ocean. Such early maps were rarely accurate in any modern sense; their purpose was less to measure distance precisely than to express how a community understood the world and its own place within it. Distances were often distorted, important places were drawn larger than their true size, and unknown regions were simply left blank or filled with imagined creatures. For all their inaccuracy, these documents tell us a great deal about what mattered to the people who drew them.

B A great leap forward came with the scholars of ancient Greece. Unlike many of their predecessors, the Greeks reasoned that the Earth was not flat but a sphere, an idea supported by observations such as the curved shadow it casts upon the Moon. In the second century, the astronomer Ptolemy gathered the geographical knowledge of his age into a celebrated work that listed the coordinates of thousands of places and explained how the curved surface of a globe could be represented on a flat sheet. His methods were so influential that they continued to shape European mapmaking for well over a thousand years after his death.

C During the long period that followed the decline of the Roman Empire, mapmaking in Europe took a very different direction. Many medieval maps were designed to illustrate religious belief rather than to guide a traveller from one town to another. The typical example placed the holy city of Jerusalem at the centre of the world and arranged the known continents around it in a decorative pattern. These maps are beautiful and revealing documents, but anyone attempting to use one to plan an actual journey would quickly have become hopelessly lost.

D Practical mapmaking was kept alive instead by sailors. From around the thirteenth century, Mediterranean navigators produced charts known as portolans, which were crisscrossed by lines radiating from compass points to help a captain hold a steady course between ports. Drawn from the accumulated experience of countless voyages, these charts depicted coastlines, harbours and hazards with a precision that the scholarly maps of the day could not match. Yet they too had a serious limitation: because they ignored the curvature of the Earth, they became increasingly unreliable over very long distances.

E The European voyages of exploration in the fifteenth and sixteenth centuries transformed the discipline. As ships returned from Africa, Asia and the newly encountered Americas, the blank spaces on the map were steadily filled in, and the demand for up-to-date charts grew rapidly. The greatest cartographer of this era was the Flemish scholar Gerardus Mercator, who in 1569 devised a clever new way of drawing the world. On his projection the lines of constant compass bearing appeared as straight lines, which made it possible for a navigator to plot a course with a ruler. The Mercator projection was a triumph for sailors, although it had the curious side effect of making regions near the poles look far larger than they really are.

F The following centuries were dominated by the patient work of measurement. Governments came to recognise that accurate maps were essential for collecting taxes, planning roads and waging war, and they sponsored great surveys of their territories. Using a technique called triangulation, in which a landscape is divided into a network of triangles whose angles are carefully measured, surveyors were able to fix the positions of towns and landmarks with unprecedented accuracy. National mapping organisations were established to carry out this enormous task, and the elegant, detailed maps they produced set a standard of reliability that had never been achieved before.

G In our own time, cartography has been revolutionised once again. Photographs taken from aircraft and, later, from satellites orbiting the Earth allowed maps to be made more quickly and accurately than the old surveyors could ever have imagined. Most striking of all has been the rise of digital mapping. The maps that millions of people now carry on their telephones are not fixed pictures at all but constantly updated databases, capable of locating the user within a few metres, suggesting the fastest route and warning of delays ahead. The clay tablets of Babylon and the glowing screens of today are separated by thousands of years, yet they reflect the same enduring human desire to make sense of the world by setting it down as a map.`;

// ===============================================================
// PASSAGE 3: DECISION FATIGUE (continuous + bold sub-headings; opinion passage)
// ===============================================================

const passage3Text = `Every day, from the moment we wake, we are required to make choices. Some are trivial, such as what to wear or which route to take to work, while others carry real weight. We tend to assume that, provided we are not tired or unwell, the quality of these decisions stays much the same throughout the day. A growing body of research suggests that this assumption is wrong. The capacity to make good decisions appears to be a limited resource that is gradually used up as the day wears on, a phenomenon that psychologists have named decision fatigue. The implications are unsettling, for it means that the very same person, faced with the very same problem, may decide quite differently depending on nothing more than the hour at which the question happens to be asked.

**The evidence from the courtroom**

One of the most striking demonstrations of the effect comes from an unlikely place: the parole boards of the criminal justice system. Researchers examined more than a thousand rulings made by experienced judges who had to decide whether prisoners should be released early. In theory, such weighty judgements ought to depend only on the facts of each case. In practice, the study found that the prisoners who appeared early in the morning were granted parole far more often than those whose cases were heard late in the day. The chance of a favourable ruling fell steadily as the morning wore on, then jumped back up immediately after the judges had taken a break for food, before sinking once again.

The researchers concluded that the judges were not consciously biased. Rather, as they grew mentally tired, they increasingly fell back on the easiest and safest option, which was simply to deny the request and leave the prisoner where he was. Making the more demanding choice, to grant freedom, required mental energy that the judges had progressively less of as the hours passed. A short rest and some food appeared to restore that energy, at least for a while.

**Why choosing is so tiring**

Why should making decisions drain us in this way? One influential theory holds that self-control and decision-making draw on the same limited store of mental energy. According to this idea, each act of choosing, resisting a temptation or weighing up competing options depletes the store a little further, leaving less available for the choices that follow. Supporters of the theory point out that the brain consumes a disproportionate amount of the body's energy, and that demanding mental work may use up resources faster than they can be replaced.

It must be said that this explanation is not universally accepted. Some researchers have struggled to reproduce the original experiments, and they argue that the effect has been exaggerated. They suggest that what looks like fatigue may have more to do with motivation and belief: people who think their willpower is limited behave as though it is, whereas those who regard it as plentiful keep going. The debate is far from settled, and it would be unwise to treat the matter as closed. Even so, the practical observation that the standard of our decisions tends to slip when we are mentally worn out is supported by a good deal of everyday experience.

**Living with a tired mind**

If decision fatigue is real, what should we do about it? The first lesson, surely, is to schedule the choices that matter most for the times when the mind is freshest, which for most people means early in the day. It is no accident that some highly successful people deliberately strip the trivial decisions out of their lives, wearing more or less the same clothes each day and eating the same breakfast, so as to reserve their mental energy for choices that genuinely deserve it. Such habits may look eccentric, but the reasoning behind them is perfectly sound.

A second lesson concerns the design of the world around us. Shops have long understood that a customer who has been worn down by a long series of choices is an easy target, which is why racks of sweets and magazines are placed beside the checkout, where weary shoppers reach for them almost without thinking. The same insight could be put to better use. Those who set out the choices facing patients, students or citizens have a responsibility, in my view, not to overwhelm people with endless options at the very moment when their capacity to choose wisely is at its lowest. Understanding the limits of the human mind is not a counsel of despair; it is the first step towards working with those limits rather than against them.`;

// ===============================================================
// FULL TEST DATA
// ===============================================================

const readingTest28 = {
    testId: "READING_AC_028",
    testNumber: 28,
    testType: "academic" as const,
    title: "Reading Mock Test 28 - Academic",
    description: "IELTS Academic Reading Test featuring passages on Desalination of Seawater, The History of Cartography, and Decision Fatigue",
    source: "IELTS Academic Practice",
    difficulty: "medium" as const,
    isActive: true,
    duration: 60,
    totalQuestions: 40,
    totalMarks: 40,
    sections: [
        // ===============================================================
        //   SECTION 1: DESALINATION OF SEAWATER (Questions 1-13)
        // ===============================================================
        {
            sectionNumber: 1,
            title: "Desalination of Seawater",
            instructions: "You should spend about 20 minutes on Questions 1-13 which are based on Reading Passage 1 below.",
            passage: passage1Text,
            questionGroups: [
                // -- Q1-6: MATCHING HEADINGS (with Example: Paragraph A = iii) --
                {
                    groupType: "matching-headings",
                    startQuestion: 1,
                    endQuestion: 6,
                    mainInstruction: "Reading Passage 1 has seven paragraphs, A-G.",
                    subInstruction: "Choose the correct heading for paragraphs B-G from the list of headings below. Write the correct number, i-x, in boxes 1-6 on your answer sheet.",
                    featureListTitle: "List of Headings",
                    headingsList: [
                        { numeral: "i", text: "The drawbacks that remain" },
                        { numeral: "ii", text: "An old method based on boiling" },
                        { numeral: "iii", text: "A scarce resource and a long-held dream" },
                        { numeral: "iv", text: "Improvements that reduce the difficulties" },
                        { numeral: "v", text: "A newer process using pressure" },
                        { numeral: "vi", text: "The regions that rely on it most" },
                        { numeral: "vii", text: "Hopes for the future" },
                        { numeral: "viii", text: "The discovery of salt" },
                        { numeral: "ix", text: "The dangers of drinking seawater" },
                        { numeral: "x", text: "How rainfall is measured" },
                    ],
                    paragraphOptions: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"],
                    exampleItems: [
                        { text: "Paragraph A", answer: "iii" },
                    ],
                    matchingItems: [
                        { questionNumber: 1, text: "Paragraph B", correctAnswer: "ii" },
                        { questionNumber: 2, text: "Paragraph C", correctAnswer: "v" },
                        { questionNumber: 3, text: "Paragraph D", correctAnswer: "i" },
                        { questionNumber: 4, text: "Paragraph E", correctAnswer: "iv" },
                        { questionNumber: 5, text: "Paragraph F", correctAnswer: "vi" },
                        { questionNumber: 6, text: "Paragraph G", correctAnswer: "vii" },
                    ],
                },
                // -- Q7-10: SUMMARY COMPLETION (ONE WORD ONLY) --
                {
                    groupType: "summary-completion",
                    startQuestion: 7,
                    endQuestion: 10,
                    mainInstruction: "Complete the summary below.",
                    subInstruction: "Choose ONE WORD ONLY from the passage for each answer. Write your answers in boxes 7-10 on your answer sheet.",
                    mainHeading: "Two ways of removing salt",
                    summarySegments: [
                        { type: "text", content: "The oldest technique for making seawater drinkable is" },
                        { type: "blank", questionNumber: 7, correctAnswer: "distillation" },
                        { type: "text", content: ", in which the water is boiled and the steam is collected and cooled. Its main disadvantage is the large amount of" },
                        { type: "blank", questionNumber: 8, correctAnswer: "fuel" },
                        { type: "text", content: "required. A more recent method, reverse osmosis, forces water through a" },
                        { type: "blank", questionNumber: 9, correctAnswer: "membrane" },
                        { type: "text", content: "while leaving the salt behind. Because it does not involve boiling, this method needs much less" },
                        { type: "blank", questionNumber: 10, correctAnswer: "energy" },
                        { type: "text", content: "than the older one." },
                    ],
                },
                // -- Q11-13: TRUE/FALSE/NOT GIVEN --
                {
                    groupType: "true-false-not-given",
                    startQuestion: 11,
                    endQuestion: 13,
                    mainInstruction: "Do the following statements agree with the information given in Reading Passage 1?",
                    subInstruction: "In boxes 11-13 on your answer sheet, write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, NOT GIVEN if there is no information on this.",
                    statements: [
                        { questionNumber: 11, text: "Reverse osmosis now produces most of the world's desalinated water.", correctAnswer: "TRUE" },
                        { questionNumber: 12, text: "Brine returned to the sea floats on the surface of the water.", correctAnswer: "FALSE" },
                        { questionNumber: 13, text: "Singapore relies entirely on desalination for its water supply.", correctAnswer: "FALSE" },
                    ],
                },
            ],
            questions: [
                // Matching Headings (Q1-6)
                { questionNumber: 1, questionType: "matching-headings", questionText: "Paragraph B", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "ii", marks: 1 },
                { questionNumber: 2, questionType: "matching-headings", questionText: "Paragraph C", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "v", marks: 1 },
                { questionNumber: 3, questionType: "matching-headings", questionText: "Paragraph D", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "i", marks: 1 },
                { questionNumber: 4, questionType: "matching-headings", questionText: "Paragraph E", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "iv", marks: 1 },
                { questionNumber: 5, questionType: "matching-headings", questionText: "Paragraph F", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "vi", marks: 1 },
                { questionNumber: 6, questionType: "matching-headings", questionText: "Paragraph G", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "vii", marks: 1 },
                // Summary Completion (Q7-10)
                { questionNumber: 7, questionType: "summary-completion", questionText: "The oldest technique is __________", correctAnswer: "distillation", acceptableAnswers: ["distillation"], marks: 1 },
                { questionNumber: 8, questionType: "summary-completion", questionText: "the large amount of __________ required", correctAnswer: "fuel", acceptableAnswers: ["fuel"], marks: 1 },
                { questionNumber: 9, questionType: "summary-completion", questionText: "forces water through a __________", correctAnswer: "membrane", acceptableAnswers: ["membrane"], marks: 1 },
                { questionNumber: 10, questionType: "summary-completion", questionText: "needs much less __________", correctAnswer: "energy", acceptableAnswers: ["energy"], marks: 1 },
                // True/False/Not Given (Q11-13)
                { questionNumber: 11, questionType: "true-false-not-given", questionText: "Reverse osmosis now produces most of the world's desalinated water.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE", marks: 1 },
                { questionNumber: 12, questionType: "true-false-not-given", questionText: "Brine returned to the sea floats on the surface of the water.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE", marks: 1 },
                { questionNumber: 13, questionType: "true-false-not-given", questionText: "Singapore relies entirely on desalination for its water supply.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE", marks: 1 },
            ],
        },

        // ===============================================================
        //   SECTION 2: THE HISTORY OF CARTOGRAPHY (Questions 14-26)
        // ===============================================================
        {
            sectionNumber: 2,
            title: "The History of Cartography",
            instructions: "You should spend about 20 minutes on Questions 14-26 which are based on Reading Passage 2 below.",
            passage: passage2Text,
            questionGroups: [
                // -- Q14-18: MATCHING INFORMATION --
                {
                    groupType: "matching-information",
                    startQuestion: 14,
                    endQuestion: 18,
                    mainInstruction: "Reading Passage 2 has seven paragraphs, A-G. Which paragraph contains the following information?",
                    subInstruction: "Write the correct letter, A-G, in boxes 14-18 on your answer sheet.",
                    note: "NB You may use any letter more than once.",
                    paragraphOptions: ["A", "B", "C", "D", "E", "F", "G"],
                    matchingItems: [
                        { questionNumber: 14, text: "a method of dividing land into triangles to fix positions accurately", correctAnswer: "F" },
                        { questionNumber: 15, text: "an unintended effect of a new way of drawing the world", correctAnswer: "E" },
                        { questionNumber: 16, text: "a description of a map intended to express religious belief", correctAnswer: "C" },
                        { questionNumber: 17, text: "the reasons why governments paid for maps to be made", correctAnswer: "F" },
                        { questionNumber: 18, text: "a reference to the earliest maps showing the world as a flat disc", correctAnswer: "A" },
                    ],
                },
                // -- Q19-22: NOTE COMPLETION (Format B: passage with headings + bullets) --
                {
                    groupType: "note-completion",
                    startQuestion: 19,
                    endQuestion: 22,
                    mainInstruction: "Complete the notes below.",
                    subInstruction: "Choose ONE WORD ONLY from the passage for each answer. Write your answers in boxes 19-22 on your answer sheet.",
                    mainHeading: "Stages in the history of mapmaking",
                    passage: `Ancient Greece\n- Realised that the Earth was a 19 __________ rather than flat\n- Ptolemy listed the 20 __________ of thousands of places\nMediterranean sailors\n- Produced charts called portolans, marked with lines from 21 __________ points\nThe modern age\n- Maps made from photographs taken by aircraft and later by 22 __________`,
                },
                // -- Q23-26: MULTIPLE CHOICE FULL --
                {
                    groupType: "multiple-choice-full",
                    startQuestion: 23,
                    endQuestion: 26,
                    mainInstruction: "Choose the correct letter, A, B, C or D.",
                    subInstruction: "Write the correct letter in boxes 23-26 on your answer sheet.",
                    mcQuestions: [
                        {
                            questionNumber: 23,
                            questionText: "According to the passage, the purpose of the earliest maps was mainly to",
                            options: [
                                { letter: "A", text: "measure distances between settlements precisely." },
                                { letter: "B", text: "express how a community understood the world." },
                                { letter: "C", text: "help traders find the shortest routes." },
                                { letter: "D", text: "record the movements of the stars." },
                            ],
                            correctAnswer: "B",
                        },
                        {
                            questionNumber: 24,
                            questionText: "The work of Ptolemy was significant because it",
                            options: [
                                { letter: "A", text: "proved for the first time that the Earth was flat." },
                                { letter: "B", text: "was quickly forgotten after his death." },
                                { letter: "C", text: "influenced European mapmaking for many centuries." },
                                { letter: "D", text: "was used mainly by religious scholars." },
                            ],
                            correctAnswer: "C",
                        },
                        {
                            questionNumber: 25,
                            questionText: "What does the passage say was a weakness of the portolan charts?",
                            options: [
                                { letter: "A", text: "They showed coastlines and harbours inaccurately." },
                                { letter: "B", text: "They were drawn by inexperienced sailors." },
                                { letter: "C", text: "They became unreliable over very long distances." },
                                { letter: "D", text: "They were too expensive for most captains." },
                            ],
                            correctAnswer: "C",
                        },
                        {
                            questionNumber: 26,
                            questionText: "The main advantage of the Mercator projection for sailors was that it",
                            options: [
                                { letter: "A", text: "showed the size of every region correctly." },
                                { letter: "B", text: "allowed a course to be plotted as a straight line." },
                                { letter: "C", text: "was the first map to include the Americas." },
                                { letter: "D", text: "could be produced more cheaply than other maps." },
                            ],
                            correctAnswer: "B",
                        },
                    ],
                },
            ],
            questions: [
                // Matching Information (Q14-18)
                { questionNumber: 14, questionType: "matching-information", questionText: "a method of dividing land into triangles to fix positions accurately", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "F", marks: 1 },
                { questionNumber: 15, questionType: "matching-information", questionText: "an unintended effect of a new way of drawing the world", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "E", marks: 1 },
                { questionNumber: 16, questionType: "matching-information", questionText: "a description of a map intended to express religious belief", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "C", marks: 1 },
                { questionNumber: 17, questionType: "matching-information", questionText: "the reasons why governments paid for maps to be made", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "F", marks: 1 },
                { questionNumber: 18, questionType: "matching-information", questionText: "a reference to the earliest maps showing the world as a flat disc", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "A", marks: 1 },
                // Note Completion (Q19-22)
                { questionNumber: 19, questionType: "note-completion", questionText: "the Earth was a __________ rather than flat", correctAnswer: "sphere", acceptableAnswers: ["sphere"], marks: 1 },
                { questionNumber: 20, questionType: "note-completion", questionText: "Ptolemy listed the __________ of thousands of places", correctAnswer: "coordinates", acceptableAnswers: ["coordinates"], marks: 1 },
                { questionNumber: 21, questionType: "note-completion", questionText: "lines from __________ points", correctAnswer: "compass", acceptableAnswers: ["compass"], marks: 1 },
                { questionNumber: 22, questionType: "note-completion", questionText: "photographs taken by aircraft and later by __________", correctAnswer: "satellites", acceptableAnswers: ["satellites"], marks: 1 },
                // Multiple Choice (Q23-26)
                { questionNumber: 23, questionType: "multiple-choice-full", questionText: "According to the passage, the purpose of the earliest maps was mainly to", correctAnswer: "B", marks: 1 },
                { questionNumber: 24, questionType: "multiple-choice-full", questionText: "The work of Ptolemy was significant because it", correctAnswer: "C", marks: 1 },
                { questionNumber: 25, questionType: "multiple-choice-full", questionText: "What does the passage say was a weakness of the portolan charts?", correctAnswer: "C", marks: 1 },
                { questionNumber: 26, questionType: "multiple-choice-full", questionText: "The main advantage of the Mercator projection for sailors was that it", correctAnswer: "B", marks: 1 },
            ],
        },

        // ===============================================================
        //   SECTION 3: DECISION FATIGUE (Questions 27-40)
        // ===============================================================
        {
            sectionNumber: 3,
            title: "Decision Fatigue",
            instructions: "You should spend about 20 minutes on Questions 27-40 which are based on Reading Passage 3 below.",
            passage: passage3Text,
            questionGroups: [
                // -- Q27-30: MULTIPLE CHOICE FULL --
                {
                    groupType: "multiple-choice-full",
                    startQuestion: 27,
                    endQuestion: 30,
                    mainInstruction: "Choose the correct letter, A, B, C or D.",
                    subInstruction: "Write the correct letter in boxes 27-30 on your answer sheet.",
                    mcQuestions: [
                        {
                            questionNumber: 27,
                            questionText: "The term 'decision fatigue' refers to the idea that",
                            options: [
                                { letter: "A", text: "people make worse decisions when they are physically ill." },
                                { letter: "B", text: "the ability to decide well is gradually used up during the day." },
                                { letter: "C", text: "some people are naturally poor at making choices." },
                                { letter: "D", text: "important decisions are always harder than trivial ones." },
                            ],
                            correctAnswer: "B",
                        },
                        {
                            questionNumber: 28,
                            questionText: "In the study of parole boards, prisoners were most likely to be released",
                            options: [
                                { letter: "A", text: "late in the afternoon." },
                                { letter: "B", text: "when their cases were heard early in the morning." },
                                { letter: "C", text: "when the evidence against them was weak." },
                                { letter: "D", text: "after the judges had read their files carefully." },
                            ],
                            correctAnswer: "B",
                        },
                        {
                            questionNumber: 29,
                            questionText: "The researchers concluded that the tired judges tended to",
                            options: [
                                { letter: "A", text: "choose the easiest and safest option." },
                                { letter: "B", text: "deliberately treat prisoners unfairly." },
                                { letter: "C", text: "grant freedom more readily than usual." },
                                { letter: "D", text: "spend longer on each case." },
                            ],
                            correctAnswer: "A",
                        },
                        {
                            questionNumber: 30,
                            questionText: "One influential theory explains decision fatigue by suggesting that",
                            options: [
                                { letter: "A", text: "the brain uses very little energy compared with other organs." },
                                { letter: "B", text: "self-control and decision-making draw on the same limited store of energy." },
                                { letter: "C", text: "people enjoy making decisions more as the day goes on." },
                                { letter: "D", text: "willpower has no connection with decision-making." },
                            ],
                            correctAnswer: "B",
                        },
                    ],
                },
                // -- Q31-35: YES/NO/NOT GIVEN --
                {
                    groupType: "yes-no-not-given",
                    startQuestion: 31,
                    endQuestion: 35,
                    mainInstruction: "Do the following statements agree with the claims of the writer in Reading Passage 3?",
                    subInstruction: "In boxes 31-35 on your answer sheet, write YES if the statement agrees with the claims of the writer, NO if the statement contradicts the claims of the writer, NOT GIVEN if it is impossible to say what the writer thinks about this.",
                    statements: [
                        { questionNumber: 31, text: "The quality of our decisions stays the same throughout the day.", correctAnswer: "NO" },
                        { questionNumber: 32, text: "The theory that self-control uses a limited store of energy is accepted by all researchers.", correctAnswer: "NO" },
                        { questionNumber: 33, text: "Important decisions should be made when the mind is freshest.", correctAnswer: "YES" },
                        { questionNumber: 34, text: "The judges in the parole study were aware that the time of day affected their rulings.", correctAnswer: "NO" },
                        { questionNumber: 35, text: "People who set out choices for others should avoid overwhelming them with too many options.", correctAnswer: "YES" },
                    ],
                },
                // -- Q36-38: MATCHING FEATURES (sentence endings) --
                {
                    groupType: "matching-features",
                    startQuestion: 36,
                    endQuestion: 38,
                    mainInstruction: "Complete each sentence with the correct ending, A-E, below.",
                    subInstruction: "Write the correct letter, A-E, in boxes 36-38 on your answer sheet.",
                    featureListTitle: "Sentence Endings",
                    paragraphOptions: ["A", "B", "C", "D", "E"],
                    featureOptions: [
                        { letter: "A", text: "appeared to restore the judges' mental energy for a while." },
                        { letter: "B", text: "prove that the theory of decision fatigue is correct." },
                        { letter: "C", text: "may have more to do with motivation and belief than with fatigue." },
                        { letter: "D", text: "keep the same clothes and breakfast to save mental energy." },
                        { letter: "E", text: "are placed beside the checkout to tempt tired shoppers." },
                    ],
                    matchingItems: [
                        { questionNumber: 36, text: "A short break and some food", correctAnswer: "A" },
                        { questionNumber: 37, text: "Some critics argue that the effect", correctAnswer: "C" },
                        { questionNumber: 38, text: "Some successful people deliberately", correctAnswer: "D" },
                    ],
                },
                // -- Q39-40: SUMMARY WITH OPTIONS (letters A-H) --
                {
                    groupType: "summary-with-options",
                    startQuestion: 39,
                    endQuestion: 40,
                    mainInstruction: "Complete the summary using the list of words, A-H, below.",
                    subInstruction: "Write the correct letter, A-H, in boxes 39-40 on your answer sheet.",
                    mainHeading: "Coping with decision fatigue",
                    phraseList: [
                        { letter: "A", text: "willpower" },
                        { letter: "B", text: "morning" },
                        { letter: "C", text: "evening" },
                        { letter: "D", text: "facts" },
                        { letter: "E", text: "shops" },
                        { letter: "F", text: "despair" },
                        { letter: "G", text: "limits" },
                        { letter: "H", text: "clothes" },
                    ],
                    summarySegments: [
                        { type: "text", content: "The writer advises that the most important choices should be made in the" },
                        { type: "blank", questionNumber: 39, correctAnswer: "B" },
                        { type: "text", content: ", when the mind is at its freshest. Rather than being a counsel of despair, understanding the" },
                        { type: "blank", questionNumber: 40, correctAnswer: "G" },
                        { type: "text", content: "of the human mind is the first step towards working with them." },
                    ],
                },
            ],
            questions: [
                // Multiple Choice (Q27-30)
                { questionNumber: 27, questionType: "multiple-choice-full", questionText: "The term 'decision fatigue' refers to the idea that", correctAnswer: "B", marks: 1 },
                { questionNumber: 28, questionType: "multiple-choice-full", questionText: "In the study of parole boards, prisoners were most likely to be released", correctAnswer: "B", marks: 1 },
                { questionNumber: 29, questionType: "multiple-choice-full", questionText: "The researchers concluded that the tired judges tended to", correctAnswer: "A", marks: 1 },
                { questionNumber: 30, questionType: "multiple-choice-full", questionText: "One influential theory explains decision fatigue by suggesting that", correctAnswer: "B", marks: 1 },
                // Yes/No/Not Given (Q31-35)
                { questionNumber: 31, questionType: "yes-no-not-given", questionText: "The quality of our decisions stays the same throughout the day.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NO", marks: 1 },
                { questionNumber: 32, questionType: "yes-no-not-given", questionText: "The theory that self-control uses a limited store of energy is accepted by all researchers.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NO", marks: 1 },
                { questionNumber: 33, questionType: "yes-no-not-given", questionText: "Important decisions should be made when the mind is freshest.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "YES", marks: 1 },
                { questionNumber: 34, questionType: "yes-no-not-given", questionText: "The judges in the parole study were aware that the time of day affected their rulings.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NO", marks: 1 },
                { questionNumber: 35, questionType: "yes-no-not-given", questionText: "People who set out choices for others should avoid overwhelming them with too many options.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "YES", marks: 1 },
                // Matching Features / Sentence Endings (Q36-38)
                { questionNumber: 36, questionType: "matching-features", questionText: "A short break and some food", options: ["A", "B", "C", "D", "E"], correctAnswer: "A", marks: 1 },
                { questionNumber: 37, questionType: "matching-features", questionText: "Some critics argue that the effect", options: ["A", "B", "C", "D", "E"], correctAnswer: "C", marks: 1 },
                { questionNumber: 38, questionType: "matching-features", questionText: "Some successful people deliberately", options: ["A", "B", "C", "D", "E"], correctAnswer: "D", marks: 1 },
                // Summary with Options (Q39-40)
                { questionNumber: 39, questionType: "summary-with-options", questionText: "the most important choices should be made in the __________", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "B", marks: 1 },
                { questionNumber: 40, questionType: "summary-with-options", questionText: "understanding the __________ of the human mind", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "G", marks: 1 },
            ],
        },
    ],
};

// ===============================================================
// SEED FUNCTION
// ===============================================================

async function seedReadingTest28() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log("Connected to MongoDB");

        const existing = await ReadingTest.findOne({ testId: readingTest28.testId });
        if (existing) {
            await ReadingTest.findByIdAndUpdate(existing._id, readingTest28);
            console.log("✅ Reading Test 28 UPDATED successfully!");
        } else {
            const admin = await User.findOne({ role: "admin" });
            if (!admin) {
                console.log("❌ Admin user not found!");
                process.exit(1);
            }
            await ReadingTest.create({ ...readingTest28, createdBy: admin._id });
            console.log("✅ Reading Test 28 CREATED successfully!");
        }

        // Verify
        const verify = await ReadingTest.findOne({ testId: readingTest28.testId });
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

seedReadingTest28();
