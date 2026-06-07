/**
 * Seed Script: Academic Reading Mock Test 21
 * Run: npx ts-node-dev --transpile-only src/scripts/seedReadingTest21.ts
 *
 * Original passages (generated, fully answered):
 *   1 - Bioluminescence: Nature's Living Light (Q1-13)
 *   2 - A History of Glass (Q14-26)
 *   3 - The Psychology of Procrastination (Q27-40)
 *
 * Built per READING_NEW_TEST_PLAYBOOK.md — dual storage (questionGroups + flat questions),
 * full answer keys, 13+13+14 split, premium type mix.
 */

import mongoose from "mongoose";
import { ReadingTest } from "../app/modules/reading/reading.model";
import { User } from "../app/modules/user/user.model";
import config from "../app/config";

// ═══════════════════════════════════════════════════════════════
// PASSAGE 1: BIOLUMINESCENCE (labeled A-G for matching-headings)
// ═══════════════════════════════════════════════════════════════

const passage1Text = `A Bioluminescence is the production and emission of light by a living organism. Unlike the light from a bulb or from the sun, it is a 'cold light', which means that almost none of the energy is lost as heat. The word itself joins the Greek 'bios', meaning life, with the Latin 'lumen', meaning light, and so describes exactly what it is: living light. For thousands of years sailors have reported seas that sparkle at night and travellers have described forests where the ground appears to glow, yet only in the last two hundred years have scientists begun to understand how, and why, so many creatures are able to generate their own illumination.

B The glow is the result of a chemical reaction. In most species it involves a light-producing molecule called luciferin and an enzyme called luciferase. When luciferin reacts with oxygen, a process encouraged by luciferase, energy is released in the form of light. Because this reaction gives off almost no heat, nearly all of the energy becomes visible light, making it far more efficient than any lamp designed by humans. The colour of the light, usually blue or green in the ocean, depends on the precise structure of the luciferin involved and on the conditions in which the animal lives.

C Although fireflies blinking in a summer garden are the most familiar example on land, the overwhelming majority of bioluminescent species live in the sea. It is estimated that more than three-quarters of the animals in the deep ocean can produce light, a sensible adaptation in a place that sunlight never reaches. On land the phenomenon is comparatively rare, limited to a scattering of insects, some worms and a number of fungi that make rotting wood shine with an eerie greenish light. In fresh water, curiously, it is almost entirely absent.

D Why do so many animals invest in producing light? Scientists have identified three broad purposes: defence, predation and communication. Some species release a cloud of glowing liquid to startle or confuse an attacker, much as a squid releases ink, while others use light as a lure to find or attract prey. Communication is the third function, and the best-known example is the firefly, whose flashing patterns are in fact a courtship signal used to attract a mate. Each species has its own rhythm of flashes, ensuring that males and females of the same kind can recognise one another in the dark.

E One of the most remarkable arrangements is found in the Hawaiian bobtail squid, which glows thanks to colonies of luminous bacteria living inside a special organ in its body. The young squid is not born with these bacteria; instead, within hours of hatching, it draws them in from the surrounding seawater. In return for a safe home and nutrients, the bacteria provide a soft light that matches the moonlight filtering down from above, erasing the squid's shadow so that predators lurking below cannot see it. Neither partner could achieve this effect alone, and the relationship is a striking example of cooperation between two completely different forms of life.

F Bioluminescence has proved surprisingly useful to people. By borrowing the genes responsible for producing light, researchers have created glowing markers that allow them to watch processes inside living cells, a technique that has transformed medical and biological research. A related substance, green fluorescent protein, originally taken from a jellyfish, is now a standard tool in laboratories around the world for tracking the activity of genes. Bioluminescent bacteria are also used as living sensors: because their light grows dimmer in the presence of certain poisons, they can quickly reveal whether a sample of water has been contaminated.

G Despite its long history, bioluminescence still holds many secrets, and much of the deep ocean where it is most common remains unexplored. Researchers warn, however, that artificial light from coastal cities is beginning to interfere with species that depend on darkness, disrupting the delicate signals on which their survival depends. Understanding these living lights, scientists argue, is therefore not only a fascinating scientific puzzle but also an urgent task, for some of these organisms may disappear before we have learned what they have to teach us.`;

// ═══════════════════════════════════════════════════════════════
// PASSAGE 2: A HISTORY OF GLASS (labeled A-G for matching-information)
// ═══════════════════════════════════════════════════════════════

const passage2Text = `A Long before people learned to make glass, nature was already producing it. When lightning strikes sand, or when a volcano erupts, the intense heat can fuse grains of sand into a natural glass. The best known of these is obsidian, a black, shiny rock formed in volcanoes. Stone Age people valued obsidian highly, chipping it into sharp blades, arrowheads and simple ornaments. Glass made by human hands appeared much later, in the Middle East more than five thousand years ago, where craftsmen produced small coloured beads, probably by accident while working with metal or pottery.

B For many centuries glass remained a rare luxury, until a single discovery transformed it. Around two thousand years ago, in the region of present-day Syria, craftsmen found that a blob of molten glass on the end of a hollow tube could be inflated like a balloon. This technique, known as glassblowing, made it possible to produce vessels quickly and cheaply, and for the first time ordinary households could own glass cups and bottles. Under the Roman Empire, which carried the technique across its vast territory, glass became a part of everyday life, and the wealthiest citizens even fitted small panes of glass into their windows.

C After the fall of Rome the craft declined across much of Europe, but it flourished in the city of Venice, which became the centre of fine glassmaking. The Venetian furnaces, however, posed a serious danger: the city was largely built of wood, and the constant fires used by the glassmakers threatened to set it ablaze. In 1291 the authorities ordered all the glassmakers to move their workshops to the nearby island of Murano, partly to protect Venice from fire and partly to keep their valuable methods secret. On Murano the craftsmen perfected a clear, colourless glass called cristallo that was prized throughout Europe.

D The skills of the Murano glassmakers were guarded jealously. The craftsmen enjoyed high status and good incomes, but they were forbidden to leave the territory, and any worker who carried the secrets of the trade abroad faced severe punishment, including, according to some accounts, the threat of death. For a time this secrecy preserved Venice's near-monopoly, but knowledge cannot be contained forever. Gradually workers slipped away to other countries, and by the seventeenth century fine glass was being produced in France, England and beyond.

E The next great change came with the Industrial Revolution. New furnaces and machines allowed glass to be made in far larger quantities and at much lower cost, so that windows, bottles and tableware became affordable for almost everyone. The most spectacular demonstration of what was now possible was the Crystal Palace, an enormous exhibition hall built in London in 1851 almost entirely from iron and glass. Covering a huge area, it astonished visitors and showed the world that glass could serve as a structural material and not merely a decorative one.

F For all these advances, making a perfectly flat, distortion-free sheet of glass for windows and mirrors remained difficult and expensive. The problem was finally solved in the 1950s by the British manufacturer Alastair Pilkington, who developed the float glass process. In this method molten glass is poured onto the surface of a bath of molten tin, on which it spreads out and floats to form a sheet of completely even thickness. As the glass cools, it can be drawn off as a continuous ribbon. The process produced flat glass of excellent quality at low cost, and it remains the basis of window manufacture to this day.

G Today glass is more versatile than ever. Drawn out into hair-thin fibres, it carries telephone and internet signals beneath the oceans; toughened and polished, it forms the screens of the smartphones in our pockets. Perhaps its greatest modern virtue, however, is environmental: glass can be melted down and remade endlessly without any loss of quality, making it one of the very few materials that is genuinely one hundred per cent recyclable. In an age increasingly worried about waste, this most ancient of materials may yet have its most important role still to play.`;

// ═══════════════════════════════════════════════════════════════
// PASSAGE 3: THE PSYCHOLOGY OF PROCRASTINATION (continuous + bold sub-headings)
// ═══════════════════════════════════════════════════════════════

const passage3Text = `Almost everyone has done it: put off an important task in favour of something easier or more pleasant, knowing perfectly well that the delay will cause problems later. Procrastination, which psychologists define as the voluntary postponement of an intended action despite expecting to be worse off for the delay, is one of the most common of human failings. Surveys suggest that the great majority of people procrastinate from time to time, and that around one in five adults does so chronically, to the point where it harms their work, their finances or their health. For something so widespread, it is remarkably poorly understood.

**A problem of feelings, not time**

The most common assumption is that procrastination is a problem of time management, and that procrastinators simply need to organise their schedules better. A growing number of researchers, however, argue that this view is mistaken. According to psychologists such as Tim Pychyl and Fuschia Sirois, procrastination is not about managing time at all, but about managing emotions. When a task makes us feel anxious, bored, resentful or unsure of ourselves, we are tempted to escape those unpleasant feelings by turning to something that feels better in the moment. Procrastination, in this view, is a way of repairing our mood in the short term, even though it stores up trouble for the future.

This helps to explain why procrastination is so hard to overcome. The part of the brain that responds to immediate rewards is powerful and quick to act, while the part that weighs up long-term consequences is slower and more easily overruled. Faced with a choice between a small reward now and a larger reward later, the human brain is strongly inclined to prefer the present. Our 'present self' enjoys the relief of avoiding the task, while it is our 'future self' who must pay the price.

The costs can be considerable. Research by Fuschia Sirois has found that people who procrastinate regularly report higher levels of stress and a greater number of health problems than those who do not, and that they tend to seek treatment for illness later than they should. There is also a psychological cost: having delayed, procrastinators often feel guilty and angry with themselves, and this distress makes the next task seem even more threatening. In this way procrastination becomes a vicious circle, in which avoiding a task today makes it harder to face tomorrow.

**Breaking the cycle**

What, then, can be done? One popular belief is that some people simply work better under pressure, and that a burst of last-minute effort produces their finest results. The writer is sceptical of this claim, noting that the evidence does not support it; what feels like productivity is usually just the relief of finally escaping a deadline. Worse, because that relief feels rewarding, it actually reinforces the habit, making the person more likely to leave things late the next time.

If procrastination is driven by emotion rather than by laziness, then the usual advice, to show more willpower and simply get on with it, misses the point. Telling a procrastinator to try harder does nothing to address the uncomfortable feelings that caused the delay in the first place. More promising, researchers suggest, are strategies that tackle the emotion directly. One striking study found that students who forgave themselves for procrastinating before an examination were less likely to procrastinate before the next one; releasing the guilt seemed to break the cycle. Other useful techniques include breaking a large and intimidating task into small, manageable steps, so that getting started feels less daunting, and removing the temptations and distractions that make escape so easy.

None of this means that procrastination is easy to defeat. But understanding it as a way of coping with difficult feelings, rather than as a simple flaw of character, offers a more hopeful path. Instead of criticising themselves, the writer suggests, procrastinators would do better to treat themselves with a little compassion; and, paradoxically, that kindness may be exactly what helps them to get the work done.`;

// ═══════════════════════════════════════════════════════════════
// FULL TEST DATA
// ═══════════════════════════════════════════════════════════════

const readingTest21 = {
    testId: "READING_AC_021",
    testNumber: 21,
    testType: "academic" as const,
    title: "Reading Mock Test 21 - Academic",
    description: "IELTS Academic Reading Test featuring passages on Bioluminescence, A History of Glass, and The Psychology of Procrastination",
    source: "IELTS Academic Practice",
    difficulty: "medium" as const,
    isActive: true,
    duration: 60,
    totalQuestions: 40,
    totalMarks: 40,
    sections: [
        // ╔═══════════════════════════════════════════════════════════╗
        // ║  SECTION 1: BIOLUMINESCENCE (Questions 1-13)            ║
        // ╚═══════════════════════════════════════════════════════════╝
        {
            sectionNumber: 1,
            title: "Bioluminescence: Nature's Living Light",
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
                        { numeral: "i", text: "A definition of living light" },
                        { numeral: "ii", text: "The chemical reaction behind the glow" },
                        { numeral: "iii", text: "Where glowing organisms are found" },
                        { numeral: "iv", text: "The purposes the light serves" },
                        { numeral: "v", text: "A partnership between two species" },
                        { numeral: "vi", text: "Practical applications for people" },
                        { numeral: "vii", text: "Threats and directions for future study" },
                        { numeral: "viii", text: "The discovery of bioluminescence" },
                        { numeral: "ix", text: "Comparing light in air and water" },
                        { numeral: "x", text: "The high cost of producing light" },
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
                // ── Q7-9: SUMMARY COMPLETION (ONE WORD ONLY) ──
                {
                    groupType: "summary-completion",
                    startQuestion: 7,
                    endQuestion: 9,
                    mainInstruction: "Complete the summary below.",
                    subInstruction: "Choose ONE WORD ONLY from the passage for each answer. Write your answers in boxes 7-9 on your answer sheet.",
                    mainHeading: "How the light is made",
                    summarySegments: [
                        { type: "text", content: "The light produced by living creatures comes from a chemical reaction. A molecule known as" },
                        { type: "blank", questionNumber: 7, correctAnswer: "luciferin" },
                        { type: "text", content: "reacts with oxygen, a process that is assisted by an enzyme called" },
                        { type: "blank", questionNumber: 8, correctAnswer: "luciferase" },
                        { type: "text", content: ". Because the reaction gives off almost no" },
                        { type: "blank", questionNumber: 9, correctAnswer: "heat" },
                        { type: "text", content: ", nearly all of the energy becomes visible light, which is why it is described as 'cold light'." },
                    ],
                },
                // ── Q10-13: TRUE/FALSE/NOT GIVEN ──
                {
                    groupType: "true-false-not-given",
                    startQuestion: 10,
                    endQuestion: 13,
                    mainInstruction: "Do the following statements agree with the information given in Reading Passage 1?",
                    subInstruction: "In boxes 10-13 on your answer sheet, write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, NOT GIVEN if there is no information on this.",
                    statements: [
                        { questionNumber: 10, text: "The majority of organisms that produce light live in the ocean.", correctAnswer: "TRUE" },
                        { questionNumber: 11, text: "Fireflies use their light mainly to frighten away predators.", correctAnswer: "FALSE" },
                        { questionNumber: 12, text: "The bobtail squid already contains glowing bacteria when it hatches.", correctAnswer: "FALSE" },
                        { questionNumber: 13, text: "Green fluorescent protein has been used to cure disease in humans.", correctAnswer: "NOT GIVEN" },
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
                // Summary Completion (Q7-9)
                { questionNumber: 7, questionType: "summary-completion", questionText: "A molecule known as __________ reacts with oxygen", correctAnswer: "luciferin", acceptableAnswers: ["luciferin"], marks: 1 },
                { questionNumber: 8, questionType: "summary-completion", questionText: "assisted by an enzyme called __________", correctAnswer: "luciferase", acceptableAnswers: ["luciferase"], marks: 1 },
                { questionNumber: 9, questionType: "summary-completion", questionText: "the reaction gives off almost no __________", correctAnswer: "heat", acceptableAnswers: ["heat"], marks: 1 },
                // True/False/Not Given (Q10-13)
                { questionNumber: 10, questionType: "true-false-not-given", questionText: "The majority of organisms that produce light live in the ocean.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE", marks: 1 },
                { questionNumber: 11, questionType: "true-false-not-given", questionText: "Fireflies use their light mainly to frighten away predators.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE", marks: 1 },
                { questionNumber: 12, questionType: "true-false-not-given", questionText: "The bobtail squid already contains glowing bacteria when it hatches.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE", marks: 1 },
                { questionNumber: 13, questionType: "true-false-not-given", questionText: "Green fluorescent protein has been used to cure disease in humans.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "NOT GIVEN", marks: 1 },
            ],
        },

        // ╔═══════════════════════════════════════════════════════════╗
        // ║  SECTION 2: A HISTORY OF GLASS (Questions 14-26)        ║
        // ╚═══════════════════════════════════════════════════════════╝
        {
            sectionNumber: 2,
            title: "A History of Glass",
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
                        { questionNumber: 14, text: "a reference to glass being formed without any human involvement", correctAnswer: "A" },
                        { questionNumber: 15, text: "the relocation of an industry in order to reduce a safety risk", correctAnswer: "C" },
                        { questionNumber: 16, text: "a method of producing glass with a perfectly even surface", correctAnswer: "F" },
                        { questionNumber: 17, text: "the punishment faced by workers who revealed trade secrets", correctAnswer: "D" },
                        { questionNumber: 18, text: "an example of glass used in a well-known building", correctAnswer: "E" },
                        { questionNumber: 19, text: "the environmental advantage of using glass", correctAnswer: "G" },
                    ],
                },
                // ── Q20-23: MULTIPLE CHOICE FULL ──
                {
                    groupType: "multiple-choice-full",
                    startQuestion: 20,
                    endQuestion: 23,
                    mainInstruction: "Choose the correct letter, A, B, C or D.",
                    subInstruction: "Write the correct letter in boxes 20-23 on your answer sheet.",
                    mcQuestions: [
                        {
                            questionNumber: 20,
                            questionText: "The earliest glass objects made by humans were",
                            options: [
                                { letter: "A", text: "tools and weapons." },
                                { letter: "B", text: "small coloured beads." },
                                { letter: "C", text: "drinking vessels." },
                                { letter: "D", text: "window panes." },
                            ],
                            correctAnswer: "B",
                        },
                        {
                            questionNumber: 21,
                            questionText: "According to the passage, the technique of glassblowing",
                            options: [
                                { letter: "A", text: "was first practised in the region of modern Syria." },
                                { letter: "B", text: "made glass far more expensive than before." },
                                { letter: "C", text: "was invented by the Roman emperors." },
                                { letter: "D", text: "had little effect on ordinary households." },
                            ],
                            correctAnswer: "A",
                        },
                        {
                            questionNumber: 22,
                            questionText: "The glassmakers of Venice were moved to Murano mainly because",
                            options: [
                                { letter: "A", text: "the island had better-quality sand." },
                                { letter: "B", text: "their furnaces threatened the city with fire." },
                                { letter: "C", text: "most of their customers lived there." },
                                { letter: "D", text: "the climate there suited glassmaking." },
                            ],
                            correctAnswer: "B",
                        },
                        {
                            questionNumber: 23,
                            questionText: "The float glass process developed by Pilkington",
                            options: [
                                { letter: "A", text: "floated molten glass on molten tin to create flat sheets." },
                                { letter: "B", text: "was much slower than earlier methods." },
                                { letter: "C", text: "was used mainly to make coloured glass." },
                                { letter: "D", text: "was first introduced in the nineteenth century." },
                            ],
                            correctAnswer: "A",
                        },
                    ],
                },
                // ── Q24-26: TRUE/FALSE/NOT GIVEN ──
                {
                    groupType: "true-false-not-given",
                    startQuestion: 24,
                    endQuestion: 26,
                    mainInstruction: "Do the following statements agree with the information given in Reading Passage 2?",
                    subInstruction: "In boxes 24-26 on your answer sheet, write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, NOT GIVEN if there is no information on this.",
                    statements: [
                        { questionNumber: 24, text: "Humans used naturally formed glass before they were able to make it themselves.", correctAnswer: "TRUE" },
                        { questionNumber: 25, text: "The glassmakers of Murano were free to travel wherever they wished.", correctAnswer: "FALSE" },
                        { questionNumber: 26, text: "Recycling glass costs more than producing new glass.", correctAnswer: "NOT GIVEN" },
                    ],
                },
            ],
            questions: [
                // Matching Information (Q14-19)
                { questionNumber: 14, questionType: "matching-information", questionText: "a reference to glass being formed without any human involvement", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "A", marks: 1 },
                { questionNumber: 15, questionType: "matching-information", questionText: "the relocation of an industry in order to reduce a safety risk", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "C", marks: 1 },
                { questionNumber: 16, questionType: "matching-information", questionText: "a method of producing glass with a perfectly even surface", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "F", marks: 1 },
                { questionNumber: 17, questionType: "matching-information", questionText: "the punishment faced by workers who revealed trade secrets", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "D", marks: 1 },
                { questionNumber: 18, questionType: "matching-information", questionText: "an example of glass used in a well-known building", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "E", marks: 1 },
                { questionNumber: 19, questionType: "matching-information", questionText: "the environmental advantage of using glass", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "G", marks: 1 },
                // Multiple Choice (Q20-23)
                { questionNumber: 20, questionType: "multiple-choice-full", questionText: "The earliest glass objects made by humans were", correctAnswer: "B", marks: 1 },
                { questionNumber: 21, questionType: "multiple-choice-full", questionText: "According to the passage, the technique of glassblowing", correctAnswer: "A", marks: 1 },
                { questionNumber: 22, questionType: "multiple-choice-full", questionText: "The glassmakers of Venice were moved to Murano mainly because", correctAnswer: "B", marks: 1 },
                { questionNumber: 23, questionType: "multiple-choice-full", questionText: "The float glass process developed by Pilkington", correctAnswer: "A", marks: 1 },
                // True/False/Not Given (Q24-26)
                { questionNumber: 24, questionType: "true-false-not-given", questionText: "Humans used naturally formed glass before they were able to make it themselves.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE", marks: 1 },
                { questionNumber: 25, questionType: "true-false-not-given", questionText: "The glassmakers of Murano were free to travel wherever they wished.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE", marks: 1 },
                { questionNumber: 26, questionType: "true-false-not-given", questionText: "Recycling glass costs more than producing new glass.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "NOT GIVEN", marks: 1 },
            ],
        },

        // ╔═══════════════════════════════════════════════════════════╗
        // ║  SECTION 3: THE PSYCHOLOGY OF PROCRASTINATION (Q27-40)  ║
        // ╚═══════════════════════════════════════════════════════════╝
        {
            sectionNumber: 3,
            title: "The Psychology of Procrastination",
            instructions: "You should spend about 20 minutes on Questions 27-40 which are based on Reading Passage 3 below.",
            passage: passage3Text,
            questionGroups: [
                // ── Q27-31: MULTIPLE CHOICE FULL ──
                {
                    groupType: "multiple-choice-full",
                    startQuestion: 27,
                    endQuestion: 31,
                    mainInstruction: "Choose the correct letter, A, B, C or D.",
                    subInstruction: "Write the correct letter in boxes 27-31 on your answer sheet.",
                    mcQuestions: [
                        {
                            questionNumber: 27,
                            questionText: "According to the passage, procrastination is best understood as",
                            options: [
                                { letter: "A", text: "a form of natural laziness." },
                                { letter: "B", text: "a failure of time management." },
                                { letter: "C", text: "a way of coping with unpleasant emotions." },
                                { letter: "D", text: "a sign of low intelligence." },
                            ],
                            correctAnswer: "C",
                        },
                        {
                            questionNumber: 28,
                            questionText: "Researchers believe that people procrastinate in order to",
                            options: [
                                { letter: "A", text: "improve the quality of their work." },
                                { letter: "B", text: "feel better in the short term." },
                                { letter: "C", text: "punish themselves for past failures." },
                                { letter: "D", text: "save time for more important tasks." },
                            ],
                            correctAnswer: "B",
                        },
                        {
                            questionNumber: 29,
                            questionText: "The passage suggests that the human brain tends to",
                            options: [
                                { letter: "A", text: "value an immediate reward over a future benefit." },
                                { letter: "B", text: "ignore all emotional signals." },
                                { letter: "C", text: "plan very carefully for the long term." },
                                { letter: "D", text: "treat the present self and future self equally." },
                            ],
                            correctAnswer: "A",
                        },
                        {
                            questionNumber: 30,
                            questionText: "The research carried out by Fuschia Sirois found that regular procrastinators",
                            options: [
                                { letter: "A", text: "tend to earn lower salaries." },
                                { letter: "B", text: "experience more stress and poorer health." },
                                { letter: "C", text: "are generally more creative." },
                                { letter: "D", text: "sleep better than other people." },
                            ],
                            correctAnswer: "B",
                        },
                        {
                            questionNumber: 31,
                            questionText: "The belief that people work better under pressure is described by the writer as",
                            options: [
                                { letter: "A", text: "well supported by evidence." },
                                { letter: "B", text: "true only in the case of students." },
                                { letter: "C", text: "a claim that the evidence does not support." },
                                { letter: "D", text: "the strongest reason for delaying work." },
                            ],
                            correctAnswer: "C",
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
                        { questionNumber: 32, text: "Procrastination affects only a small minority of people.", correctAnswer: "NO" },
                        { questionNumber: 33, text: "Telling a procrastinator simply to get on with the task is an effective solution.", correctAnswer: "NO" },
                        { questionNumber: 34, text: "Forgiving oneself for past delay can reduce future procrastination.", correctAnswer: "YES" },
                        { questionNumber: 35, text: "Procrastination is more common among men than among women.", correctAnswer: "NOT GIVEN" },
                        { questionNumber: 36, text: "Dividing a task into smaller steps can make it easier to begin.", correctAnswer: "YES" },
                    ],
                },
                // ── Q37-39: MATCHING FEATURES (sentence endings) ──
                {
                    groupType: "matching-features",
                    startQuestion: 37,
                    endQuestion: 39,
                    mainInstruction: "Complete each sentence with the correct ending, A-E, below.",
                    subInstruction: "Write the correct letter, A-E, in boxes 37-39 on your answer sheet.",
                    featureListTitle: "Sentence Endings",
                    paragraphOptions: ["A", "B", "C", "D", "E"],
                    featureOptions: [
                        { letter: "A", text: "is linked to feelings that they would rather avoid." },
                        { letter: "B", text: "they want to save money." },
                        { letter: "C", text: "leaves them feeling guilty and less able to cope next time." },
                        { letter: "D", text: "they perform better than people who plan ahead." },
                        { letter: "E", text: "the sense of relief encourages them to delay again." },
                    ],
                    matchingItems: [
                        { questionNumber: 37, text: "People tend to put off a task when it", correctAnswer: "A" },
                        { questionNumber: 38, text: "When procrastinators finally escape a deadline,", correctAnswer: "E" },
                        { questionNumber: 39, text: "Delaying important work often", correctAnswer: "C" },
                    ],
                },
                // ── Q40: MULTIPLE CHOICE FULL (writer's purpose) ──
                {
                    groupType: "multiple-choice-full",
                    startQuestion: 40,
                    endQuestion: 40,
                    mainInstruction: "Choose the correct letter, A, B, C or D.",
                    subInstruction: "Write the correct letter in box 40 on your answer sheet.",
                    mcQuestions: [
                        {
                            questionNumber: 40,
                            questionText: "What is the writer's main purpose in Reading Passage 3?",
                            options: [
                                { letter: "A", text: "To prove that procrastination is completely harmless." },
                                { letter: "B", text: "To explain a new way of understanding procrastination and how to address it." },
                                { letter: "C", text: "To compare procrastinators with people who never delay." },
                                { letter: "D", text: "To criticise people who fail to manage their time." },
                            ],
                            correctAnswer: "B",
                        },
                    ],
                },
            ],
            questions: [
                // Multiple Choice (Q27-31)
                { questionNumber: 27, questionType: "multiple-choice-full", questionText: "According to the passage, procrastination is best understood as", correctAnswer: "C", marks: 1 },
                { questionNumber: 28, questionType: "multiple-choice-full", questionText: "Researchers believe that people procrastinate in order to", correctAnswer: "B", marks: 1 },
                { questionNumber: 29, questionType: "multiple-choice-full", questionText: "The passage suggests that the human brain tends to", correctAnswer: "A", marks: 1 },
                { questionNumber: 30, questionType: "multiple-choice-full", questionText: "The research carried out by Fuschia Sirois found that regular procrastinators", correctAnswer: "B", marks: 1 },
                { questionNumber: 31, questionType: "multiple-choice-full", questionText: "The belief that people work better under pressure is described by the writer as", correctAnswer: "C", marks: 1 },
                // Yes/No/Not Given (Q32-36)
                { questionNumber: 32, questionType: "yes-no-not-given", questionText: "Procrastination affects only a small minority of people.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NO", marks: 1 },
                { questionNumber: 33, questionType: "yes-no-not-given", questionText: "Telling a procrastinator simply to get on with the task is an effective solution.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NO", marks: 1 },
                { questionNumber: 34, questionType: "yes-no-not-given", questionText: "Forgiving oneself for past delay can reduce future procrastination.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "YES", marks: 1 },
                { questionNumber: 35, questionType: "yes-no-not-given", questionText: "Procrastination is more common among men than among women.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NOT GIVEN", marks: 1 },
                { questionNumber: 36, questionType: "yes-no-not-given", questionText: "Dividing a task into smaller steps can make it easier to begin.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "YES", marks: 1 },
                // Matching Features / Sentence Endings (Q37-39)
                { questionNumber: 37, questionType: "matching-features", questionText: "People tend to put off a task when it", options: ["A", "B", "C", "D", "E"], correctAnswer: "A", marks: 1 },
                { questionNumber: 38, questionType: "matching-features", questionText: "When procrastinators finally escape a deadline,", options: ["A", "B", "C", "D", "E"], correctAnswer: "E", marks: 1 },
                { questionNumber: 39, questionType: "matching-features", questionText: "Delaying important work often", options: ["A", "B", "C", "D", "E"], correctAnswer: "C", marks: 1 },
                // Multiple Choice (Q40)
                { questionNumber: 40, questionType: "multiple-choice-full", questionText: "What is the writer's main purpose in Reading Passage 3?", correctAnswer: "B", marks: 1 },
            ],
        },
    ],
};

// ═══════════════════════════════════════════════════════════════
// SEED FUNCTION
// ═══════════════════════════════════════════════════════════════

async function seedReadingTest21() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log("Connected to MongoDB");

        // One-time cleanup: remove the earlier mis-named record (wrong testId convention)
        const stale = await ReadingTest.deleteOne({ testId: "READING_ACADEMIC_021" });
        if (stale.deletedCount) console.log("🧹 Removed stale record READING_ACADEMIC_021");

        const existing = await ReadingTest.findOne({ testId: readingTest21.testId });
        if (existing) {
            await ReadingTest.findByIdAndUpdate(existing._id, readingTest21);
            console.log("✅ Reading Test 21 UPDATED successfully!");
        } else {
            const admin = await User.findOne({ role: "admin" });
            if (!admin) {
                console.log("❌ Admin user not found!");
                process.exit(1);
            }
            await ReadingTest.create({ ...readingTest21, createdBy: admin._id });
            console.log("✅ Reading Test 21 CREATED successfully!");
        }

        // Verify
        const verify = await ReadingTest.findOne({ testId: readingTest21.testId });
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

seedReadingTest21();
