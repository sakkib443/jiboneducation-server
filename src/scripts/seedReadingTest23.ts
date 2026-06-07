/**
 * Seed Script: Academic Reading Mock Test 23
 * Run: npx ts-node-dev --transpile-only src/scripts/seedReadingTest23.ts
 *
 * Original passages (generated, fully answered):
 *   1 - Coral Reefs in Decline (Q1-13)
 *   2 - The Invention of the Printing Press (Q14-26)
 *   3 - The Use of Colour in Marketing (Q27-40)
 *
 * Built per READING_NEW_TEST_PLAYBOOK.md - dual storage (questionGroups + flat questions),
 * full answer keys, 13+13+14 split, premium type mix.
 */

import mongoose from "mongoose";
import { ReadingTest } from "../app/modules/reading/reading.model";
import { User } from "../app/modules/user/user.model";
import config from "../app/config";

// ═══════════════════════════════════════════════════════════════
// PASSAGE 1: CORAL REEFS IN DECLINE (labeled A-G for matching-headings)
// ═══════════════════════════════════════════════════════════════

const passage1Text = `A Coral reefs are among the oldest and most productive ecosystems on the planet, yet they are built by some of its smallest creatures. A single reef is the work of countless coral polyps, tiny soft-bodied animals related to jellyfish and sea anemones. Each polyp draws calcium and carbonate from the surrounding seawater and uses them to construct a hard skeleton of limestone around itself. As old polyps die and new ones grow on top of their abandoned skeletons, layer upon layer of stone accumulates over thousands of years, gradually forming the vast structures we recognise as reefs. The Great Barrier Reef off the coast of Australia, the largest living structure on Earth, is so enormous that it can be seen from space.

B The success of a coral reef depends on a partnership so close that neither partner could survive without the other. Living inside the tissues of the coral polyps are millions of microscopic algae known as zooxanthellae. These algae capture sunlight and, through photosynthesis, convert it into sugars, providing the coral with as much as nine-tenths of the energy it needs to grow. In return, the coral offers the algae a protected place to live and a steady supply of the nutrients they require. It is this remarkable arrangement that allows reefs to flourish in tropical seas which, although bathed in sunlight, are otherwise surprisingly poor in nutrients.

C Although they occupy less than one per cent of the ocean floor, coral reefs are home to roughly a quarter of all marine species. Thousands of kinds of fish, together with crabs, sponges, turtles and molluscs, depend on the reef for food and shelter, which is why reefs are often compared to the rainforests of the sea. Their value to human beings is equally great. Reefs protect low-lying coasts from the full force of storms and waves, support fishing industries that feed millions of people, and draw tourists whose spending sustains the economies of many developing nations. The medicines derived from reef organisms add still further to their worth.

D In recent decades, however, these ancient ecosystems have come under unprecedented threat, and the most serious danger of all is a process known as coral bleaching. When the surrounding water becomes too warm, even by only a degree or two for a sustained period, the relationship between coral and algae breaks down. Under this stress the coral expels the zooxanthellae living within it, and because it is the algae that give coral much of its colour, the coral turns a ghostly white. A bleached coral is not yet dead, but it is starving; if normal conditions return quickly the algae may come back, but if the heat persists the coral will eventually die.

E Rising sea temperatures, driven by the warming of the global climate, are widely regarded as the principal cause of large-scale bleaching, but they are not the only threat that reefs face. As the oceans absorb more of the carbon dioxide released by human activity, the water gradually becomes more acidic, and this makes it harder for corals to build their limestone skeletons. Closer to shore, pollution from farms and cities, the muddy run-off produced when forests are cleared, and destructive fishing methods all take their toll. Each of these pressures weakens the reef, and together they leave it far less able to recover from the periods of intense heat.

F Faced with this crisis, scientists and conservationists are responding in a variety of ways. Around the world, marine protected areas have been established in which fishing and other damaging activities are restricted, giving the reefs within them a better chance of survival. In laboratories and ocean nurseries, researchers are growing young corals and transplanting them onto damaged reefs, and some are attempting to breed varieties that can tolerate warmer water. Such efforts are valuable, but most experts agree that they can only buy time. Local protection cannot succeed on its own while the underlying problem, the warming of the oceans, continues unchecked.

G The future of coral reefs therefore depends above all on whether humanity can limit the rise in global temperatures. Some scientists fear that, even with determined action, a substantial proportion of the world's reefs will be lost within a few decades. Others argue that it is still not too late, pointing out that reefs have survived dramatic changes in the Earth's climate before and may yet prove more resilient than we expect. What is beyond dispute is that the fate of these extraordinary ecosystems, and of the vast web of life and the many human communities that depend upon them, now rests largely in our hands.`;

// ═══════════════════════════════════════════════════════════════
// PASSAGE 2: THE INVENTION OF THE PRINTING PRESS (labeled A-G for matching-information)
// ═══════════════════════════════════════════════════════════════

const passage2Text = `A Before the middle of the fifteenth century, almost every book in Europe was copied out by hand. The task usually fell to monks, who laboured for months in the quiet of their monasteries to reproduce a single volume. Because each copy demanded so much time and skill, books were extraordinarily expensive, and only the Church, universities and the very rich could afford to own them. Knowledge, as a result, was confined to a tiny educated elite, and the great majority of people had no direct access to the written word at all.

B The man who changed this state of affairs was Johannes Gutenberg, a goldsmith from the German city of Mainz. The Chinese had printed using carved wooden blocks for centuries, and movable type made of clay and metal had also been tried in Asia, but these methods were ill-suited to the many letters of the European alphabet. Gutenberg's genius lay in bringing together several existing ideas into a single practical system. He devised a way of casting large numbers of identical metal letters quickly, arranging them into words and lines, printing from them, and then breaking the arrangement up so that the same letters could be used again and again.

C Each element of Gutenberg's system was carefully thought out. He developed a special alloy of lead, tin and antimony that melted easily and, importantly, did not shrink as it cooled, so that every letter came out crisp and uniform. He formulated a thick, oil-based ink that would cling to the metal type rather than running off it, unlike the watery inks used for handwriting. For the press itself he adapted a screw mechanism of the kind already used for pressing grapes and olives, which could apply firm, even pressure to push the paper against the inked type. The result, completed around 1440, was a machine capable of producing pages with remarkable speed and consistency.

D Gutenberg's most celebrated achievement was a magnificent edition of the Bible, printed in Latin in about 1455. Around one hundred and eighty copies are thought to have been produced, and their quality was so high that at first glance they could be mistaken for the finest handwritten manuscripts. Ironically, the invention brought its creator little reward. Gutenberg had borrowed heavily to finance his workshop, and a lawsuit brought by his business partner left him stripped of his equipment and much of his stock. He died in relative obscurity, with little public recognition of the magnitude of what he had accomplished.

E Whatever its inventor's personal misfortunes, the new technology spread with astonishing speed. Within only a few decades, printing workshops had been set up in cities right across Europe, from Italy and France to England and beyond. It has been estimated that by the year 1500 some twenty million books had been printed, a staggering quantity for an age in which, only fifty years earlier, every volume had been written out by hand. The price of books tumbled, and for the first time merchants, lawyers and other ordinary literate people could begin to build small libraries of their own.

F The consequences of this transformation reached far beyond the book trade. Because printed copies were identical, scholars in different countries could now refer to exactly the same text, with the same words on the same page, which made it far easier to share and check ideas. New discoveries could be circulated widely and quickly instead of being lost or distorted, and printing is therefore often credited with accelerating the scientific revolution that followed. The press also fuelled religious upheaval: the reforming pamphlets of Martin Luther were reproduced in their hundreds of thousands and read across the continent, something that would have been unthinkable in the age of the handwritten copy.

G Perhaps the deepest effect of all was on ordinary people. As books became cheap and plentiful, literacy slowly ceased to be the privilege of a narrow elite and began to spread through society as a whole. Ideas that had once been the preserve of a few could now reach a mass audience, and the steady growth of an informed reading public would in time reshape education, politics and culture across the world. Ordinary men and women, who for centuries had depended entirely on what they were told, could increasingly read and judge matters for themselves. Few inventions in human history have done so much to change the way people live and think, and the press that Gutenberg built is widely regarded as one of the most important developments of the entire modern era.`;

// ═══════════════════════════════════════════════════════════════
// PASSAGE 3: THE USE OF COLOUR IN MARKETING (continuous + bold sub-headings)
// ═══════════════════════════════════════════════════════════════

const passage3Text = `When a shopper walks into a supermarket and reaches for one product rather than another, the choice may feel entirely rational, based on price, quality or habit. Yet research in marketing suggests that something far less conscious is often at work. Long before a customer reads a label or compares a price, the colour of a package, a logo or a shop interior has already begun to shape an impression. Studies indicate that people form an initial judgement about a product within a matter of seconds, and that a remarkably large part of that judgement is based on colour alone. This influence is all the more powerful for being largely hidden, since most shoppers are quite unaware of the part that colour plays in their decisions. For businesses competing for attention on a crowded shelf, the careful choice of colour has therefore become a serious commercial concern, and large companies now devote considerable time and money to selecting the precise shades that will represent them.

**The meanings we attach to colours**

Much of the power of colour in marketing arises from the associations that different shades carry in people's minds. Red, for example, is an energetic and attention-grabbing colour, which is why it is so often used to advertise sales and special offers and to stimulate appetite in restaurants. Blue, by contrast, tends to suggest calm, trust and reliability, qualities that explain its popularity among banks and technology companies eager to appear dependable. Green is widely linked with nature and health, and has become the natural choice for products that wish to present themselves as fresh or environmentally friendly. Black is frequently employed to convey luxury and sophistication, while yellow can communicate warmth and optimism, though some researchers warn that an excess of it may produce a feeling of anxiety.

It would be a mistake, however, to assume that these meanings are fixed and universal. The associations attached to a colour can vary considerably from one culture to another, and a marketing campaign that succeeds in one country may therefore fail, or even give offence, in another. White, which is associated with purity and weddings in much of the Western world, is in several Asian cultures the colour of mourning. A company that wishes to sell its products internationally cannot simply assume that a colour scheme effective at home will carry the same meaning abroad, and the wise marketer researches local attitudes with great care before launching a campaign.

**Standing out and being remembered**

Beyond these broad associations, colour serves another vital function: it helps a brand to be recognised and remembered. A distinctive and consistent colour can become almost inseparable from the company that uses it, so that the shade itself comes to act as a kind of silent signature. Think of the particular red of a well-known soft drink, or the specific shade of brown used by a famous delivery service; such colours are so closely tied to the brands that customers can identify them at a glance, even from a distance and before any words can be read. Some corporations guard these colours so jealously that they have gone to court to stop competitors from using them, treating a single shade as a valuable piece of property.

The context in which a colour appears matters just as much as the colour itself. A shade that looks striking against one background may be lost against another, and a colour that attracts the eye on a website may seem quite different on a printed package or a shop sign. The most effective designers think not about colours in isolation but about how they work together, choosing combinations that are pleasing, easy to read and appropriate to the message the brand wishes to send. A poorly chosen pairing can make even a good product look cheap or confusing.

Some advertisers, it should be admitted, overstate the science, claiming that particular colours can reliably trigger particular emotions or even compel people to buy. The evidence for such precise effects is weaker than these confident assertions suggest, since a person's response to a colour is shaped by culture, by personal experience and by the situation in which it is encountered. What can be said with confidence is that colour is never a neutral or trivial detail. Used thoughtfully, it can attract attention, communicate a brand's character and lodge a product in the memory; used carelessly, it can quietly drive customers away. In the fierce competition of the marketplace, colour remains one of the most powerful, and most underestimated, tools a business possesses.`;

// ═══════════════════════════════════════════════════════════════
// FULL TEST DATA
// ═══════════════════════════════════════════════════════════════

const readingTest23 = {
    testId: "READING_AC_023",
    testNumber: 23,
    testType: "academic" as const,
    title: "Reading Mock Test 23 - Academic",
    description: "IELTS Academic Reading Test featuring passages on Coral Reefs in Decline, The Invention of the Printing Press, and The Use of Colour in Marketing",
    source: "IELTS Academic Practice",
    difficulty: "medium" as const,
    isActive: true,
    duration: 60,
    totalQuestions: 40,
    totalMarks: 40,
    sections: [
        // ╔═══════════════════════════════════════════════════════════╗
        // ║  SECTION 1: CORAL REEFS IN DECLINE (Questions 1-13)     ║
        // ╚═══════════════════════════════════════════════════════════╝
        {
            sectionNumber: 1,
            title: "Coral Reefs in Decline",
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
                        { numeral: "i", text: "How tiny animals build enormous structures" },
                        { numeral: "ii", text: "A life-sustaining relationship between two organisms" },
                        { numeral: "iii", text: "The wide-ranging value of reefs to nature and people" },
                        { numeral: "iv", text: "A whitening caused by warmer water" },
                        { numeral: "v", text: "Several threats acting together" },
                        { numeral: "vi", text: "Attempts to protect and restore reefs" },
                        { numeral: "vii", text: "An uncertain future in human hands" },
                        { numeral: "viii", text: "The discovery of the first coral reef" },
                        { numeral: "ix", text: "How reefs are harvested for food" },
                        { numeral: "x", text: "The cooling of the tropical oceans" },
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
                    mainHeading: "The coral-algae partnership",
                    summarySegments: [
                        { type: "text", content: "Coral reefs survive because of a close partnership. Microscopic algae called zooxanthellae live inside the coral and use" },
                        { type: "blank", questionNumber: 7, correctAnswer: "sunlight" },
                        { type: "text", content: "to make sugars through photosynthesis, supplying the coral with most of the" },
                        { type: "blank", questionNumber: 8, correctAnswer: "energy" },
                        { type: "text", content: "it needs. In return, the coral gives the algae a protected place to live and the" },
                        { type: "blank", questionNumber: 9, correctAnswer: "nutrients" },
                        { type: "text", content: "they require, which is why reefs can thrive in tropical waters." },
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
                        { questionNumber: 10, text: "Coral reefs are home to about a quarter of all marine species.", correctAnswer: "TRUE" },
                        { questionNumber: 11, text: "A coral that has turned white has already died.", correctAnswer: "FALSE" },
                        { questionNumber: 12, text: "Marine protected areas alone can solve the problems facing coral reefs.", correctAnswer: "FALSE" },
                        { questionNumber: 13, text: "The Great Barrier Reef attracts more tourists than any other reef in the world.", correctAnswer: "NOT GIVEN" },
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
                { questionNumber: 7, questionType: "summary-completion", questionText: "use __________ to make sugars through photosynthesis", correctAnswer: "sunlight", acceptableAnswers: ["sunlight"], marks: 1 },
                { questionNumber: 8, questionType: "summary-completion", questionText: "supplying the coral with most of the __________ it needs", correctAnswer: "energy", acceptableAnswers: ["energy"], marks: 1 },
                { questionNumber: 9, questionType: "summary-completion", questionText: "a protected place to live and the __________ they require", correctAnswer: "nutrients", acceptableAnswers: ["nutrients"], marks: 1 },
                // True/False/Not Given (Q10-13)
                { questionNumber: 10, questionType: "true-false-not-given", questionText: "Coral reefs are home to about a quarter of all marine species.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE", marks: 1 },
                { questionNumber: 11, questionType: "true-false-not-given", questionText: "A coral that has turned white has already died.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE", marks: 1 },
                { questionNumber: 12, questionType: "true-false-not-given", questionText: "Marine protected areas alone can solve the problems facing coral reefs.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE", marks: 1 },
                { questionNumber: 13, questionType: "true-false-not-given", questionText: "The Great Barrier Reef attracts more tourists than any other reef in the world.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "NOT GIVEN", marks: 1 },
            ],
        },

        // ╔═══════════════════════════════════════════════════════════╗
        // ║  SECTION 2: THE INVENTION OF THE PRINTING PRESS (14-26) ║
        // ╚═══════════════════════════════════════════════════════════╝
        {
            sectionNumber: 2,
            title: "The Invention of the Printing Press",
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
                        { questionNumber: 14, text: "a description of who was able to own books before printing existed", correctAnswer: "A" },
                        { questionNumber: 15, text: "details of the special materials Gutenberg developed for his press", correctAnswer: "C" },
                        { questionNumber: 16, text: "a reference to the financial difficulties that ruined the inventor", correctAnswer: "D" },
                        { questionNumber: 17, text: "an estimate of how many books had been printed by a certain date", correctAnswer: "E" },
                        { questionNumber: 18, text: "an explanation of how printing helped the spread of new religious ideas", correctAnswer: "F" },
                        { questionNumber: 19, text: "a comment on how printing methods used in Asia were unsuitable for Europe", correctAnswer: "B" },
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
                            questionText: "Before the fifteenth century, most European books were",
                            options: [
                                { letter: "A", text: "imported from Asia." },
                                { letter: "B", text: "copied out by hand." },
                                { letter: "C", text: "printed using wooden blocks." },
                                { letter: "D", text: "owned by ordinary families." },
                            ],
                            correctAnswer: "B",
                        },
                        {
                            questionNumber: 21,
                            questionText: "According to the passage, Gutenberg's main achievement was",
                            options: [
                                { letter: "A", text: "inventing paper for the first time." },
                                { letter: "B", text: "discovering how to make ink." },
                                { letter: "C", text: "combining several existing ideas into one practical system." },
                                { letter: "D", text: "teaching monks to write more quickly." },
                            ],
                            correctAnswer: "C",
                        },
                        {
                            questionNumber: 22,
                            questionText: "The metal alloy that Gutenberg developed was important because it",
                            options: [
                                { letter: "A", text: "did not shrink as it cooled." },
                                { letter: "B", text: "was cheaper than other metals." },
                                { letter: "C", text: "could be coloured easily." },
                                { letter: "D", text: "never needed to be reused." },
                            ],
                            correctAnswer: "A",
                        },
                        {
                            questionNumber: 23,
                            questionText: "The passage states that the design of Gutenberg's press was based on a machine used for",
                            options: [
                                { letter: "A", text: "weaving cloth." },
                                { letter: "B", text: "pressing grapes and olives." },
                                { letter: "C", text: "grinding flour." },
                                { letter: "D", text: "minting coins." },
                            ],
                            correctAnswer: "B",
                        },
                    ],
                },
                // ── Q24-26: NOTE COMPLETION (Format B: passage with headings/bullets) ──
                {
                    groupType: "note-completion",
                    startQuestion: 24,
                    endQuestion: 26,
                    mainInstruction: "Complete the notes below.",
                    subInstruction: "Choose ONE WORD ONLY from the passage for each answer. Write your answers in boxes 24-26 on your answer sheet.",
                    mainHeading: "The effects of printing",
                    passage: `Sharing knowledge\n- Printed copies were identical, so scholars in different countries could use the same 24 __________\n- New discoveries could be circulated quickly, helping to speed up the scientific 25 __________\nReaching ordinary people\n- Books became cheap, so reading was no longer only for the elite\n- The growth of an informed reading public would reshape education, politics and 26 __________`,
                },
            ],
            questions: [
                // Matching Information (Q14-19)
                { questionNumber: 14, questionType: "matching-information", questionText: "a description of who was able to own books before printing existed", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "A", marks: 1 },
                { questionNumber: 15, questionType: "matching-information", questionText: "details of the special materials Gutenberg developed for his press", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "C", marks: 1 },
                { questionNumber: 16, questionType: "matching-information", questionText: "a reference to the financial difficulties that ruined the inventor", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "D", marks: 1 },
                { questionNumber: 17, questionType: "matching-information", questionText: "an estimate of how many books had been printed by a certain date", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "E", marks: 1 },
                { questionNumber: 18, questionType: "matching-information", questionText: "an explanation of how printing helped the spread of new religious ideas", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "F", marks: 1 },
                { questionNumber: 19, questionType: "matching-information", questionText: "a comment on how printing methods used in Asia were unsuitable for Europe", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "B", marks: 1 },
                // Multiple Choice (Q20-23)
                { questionNumber: 20, questionType: "multiple-choice-full", questionText: "Before the fifteenth century, most European books were", correctAnswer: "B", marks: 1 },
                { questionNumber: 21, questionType: "multiple-choice-full", questionText: "According to the passage, Gutenberg's main achievement was", correctAnswer: "C", marks: 1 },
                { questionNumber: 22, questionType: "multiple-choice-full", questionText: "The metal alloy that Gutenberg developed was important because it", correctAnswer: "A", marks: 1 },
                { questionNumber: 23, questionType: "multiple-choice-full", questionText: "The passage states that the design of Gutenberg's press was based on a machine used for", correctAnswer: "B", marks: 1 },
                // Note Completion (Q24-26)
                { questionNumber: 24, questionType: "note-completion", questionText: "scholars in different countries could use the same __________", correctAnswer: "text", acceptableAnswers: ["text"], marks: 1 },
                { questionNumber: 25, questionType: "note-completion", questionText: "helping to speed up the scientific __________", correctAnswer: "revolution", acceptableAnswers: ["revolution"], marks: 1 },
                { questionNumber: 26, questionType: "note-completion", questionText: "would reshape education, politics and __________", correctAnswer: "culture", acceptableAnswers: ["culture"], marks: 1 },
            ],
        },

        // ╔═══════════════════════════════════════════════════════════╗
        // ║  SECTION 3: THE USE OF COLOUR IN MARKETING (Q27-40)     ║
        // ╚═══════════════════════════════════════════════════════════╝
        {
            sectionNumber: 3,
            title: "The Use of Colour in Marketing",
            instructions: "You should spend about 20 minutes on Questions 27-40 which are based on Reading Passage 3 below.",
            passage: passage3Text,
            questionGroups: [
                // ── Q27-30: MULTIPLE CHOICE FULL ──
                {
                    groupType: "multiple-choice-full",
                    startQuestion: 27,
                    endQuestion: 30,
                    mainInstruction: "Choose the correct letter, A, B, C or D.",
                    subInstruction: "Write the correct letter in boxes 27-30 on your answer sheet.",
                    mcQuestions: [
                        {
                            questionNumber: 27,
                            questionText: "According to the passage, when shoppers choose a product, colour",
                            options: [
                                { letter: "A", text: "is the only factor they consider." },
                                { letter: "B", text: "influences them before they are consciously aware of it." },
                                { letter: "C", text: "matters less than price in every case." },
                                { letter: "D", text: "has no measurable effect on their judgement." },
                            ],
                            correctAnswer: "B",
                        },
                        {
                            questionNumber: 28,
                            questionText: "The colour blue is often used by banks and technology companies because it",
                            options: [
                                { letter: "A", text: "stimulates the appetite." },
                                { letter: "B", text: "suggests luxury and wealth." },
                                { letter: "C", text: "is linked with calm and reliability." },
                                { letter: "D", text: "is the cheapest colour to print." },
                            ],
                            correctAnswer: "C",
                        },
                        {
                            questionNumber: 29,
                            questionText: "The example of the colour white is used to show that",
                            options: [
                                { letter: "A", text: "colour meanings can differ between cultures." },
                                { letter: "B", text: "white is the most popular colour worldwide." },
                                { letter: "C", text: "weddings are celebrated in the same way everywhere." },
                                { letter: "D", text: "purity is valued more in Asia than in the West." },
                            ],
                            correctAnswer: "A",
                        },
                        {
                            questionNumber: 30,
                            questionText: "Why have some corporations gone to court over colours?",
                            options: [
                                { letter: "A", text: "To force competitors to use brighter colours." },
                                { letter: "B", text: "To prevent rivals from using a colour they regard as their own." },
                                { letter: "C", text: "To prove that colour has no commercial value." },
                                { letter: "D", text: "To make their products cheaper to produce." },
                            ],
                            correctAnswer: "B",
                        },
                    ],
                },
                // ── Q31-35: YES/NO/NOT GIVEN ──
                {
                    groupType: "yes-no-not-given",
                    startQuestion: 31,
                    endQuestion: 35,
                    mainInstruction: "Do the following statements agree with the claims of the writer in Reading Passage 3?",
                    subInstruction: "In boxes 31-35 on your answer sheet, write YES if the statement agrees with the claims of the writer, NO if the statement contradicts the claims of the writer, NOT GIVEN if it is impossible to say what the writer thinks about this.",
                    statements: [
                        { questionNumber: 31, text: "Colour is an important commercial concern for businesses.", correctAnswer: "YES" },
                        { questionNumber: 32, text: "A colour scheme that works well in one country will work equally well in others.", correctAnswer: "NO" },
                        { questionNumber: 33, text: "Designers should consider the background against which a colour will appear.", correctAnswer: "YES" },
                        { questionNumber: 34, text: "Blue is the colour most often chosen by successful companies.", correctAnswer: "NOT GIVEN" },
                        { questionNumber: 35, text: "Some advertisers exaggerate the power of colour to influence people.", correctAnswer: "YES" },
                    ],
                },
                // ── Q36-38: MATCHING FEATURES (sentence endings) ──
                {
                    groupType: "matching-features",
                    startQuestion: 36,
                    endQuestion: 38,
                    mainInstruction: "Complete each sentence with the correct ending, A-E, below.",
                    subInstruction: "Write the correct letter, A-E, in boxes 36-38 on your answer sheet.",
                    featureListTitle: "Sentence Endings",
                    paragraphOptions: ["A", "B", "C", "D", "E"],
                    featureOptions: [
                        { letter: "A", text: "is often used to advertise sales and to stimulate appetite." },
                        { letter: "B", text: "is the colour of mourning in several Asian cultures." },
                        { letter: "C", text: "is the easiest colour for the eye to detect." },
                        { letter: "D", text: "is commonly chosen for products presented as fresh or environmentally friendly." },
                        { letter: "E", text: "is frequently employed to convey luxury and sophistication." },
                    ],
                    matchingItems: [
                        { questionNumber: 36, text: "The colour red", correctAnswer: "A" },
                        { questionNumber: 37, text: "The colour green", correctAnswer: "D" },
                        { questionNumber: 38, text: "The colour black", correctAnswer: "E" },
                    ],
                },
                // ── Q39-40: SUMMARY WITH OPTIONS (letters A-F) ──
                {
                    groupType: "summary-with-options",
                    startQuestion: 39,
                    endQuestion: 40,
                    mainInstruction: "Complete the summary using the list of words, A-F, below.",
                    subInstruction: "Write the correct letter, A-F, in boxes 39-40 on your answer sheet.",
                    mainHeading: "Colour and the brand",
                    phraseList: [
                        { letter: "A", text: "signature" },
                        { letter: "B", text: "neutral" },
                        { letter: "C", text: "price" },
                        { letter: "D", text: "weaker" },
                        { letter: "E", text: "stronger" },
                        { letter: "F", text: "label" },
                    ],
                    summarySegments: [
                        { type: "text", content: "A consistent colour can become a silent" },
                        { type: "blank", questionNumber: 39, correctAnswer: "A" },
                        { type: "text", content: "for a company, allowing customers to recognise it instantly. The writer notes, however, that the evidence for precise emotional effects is" },
                        { type: "blank", questionNumber: 40, correctAnswer: "D" },
                        { type: "text", content: "than some advertisers claim, because responses to colour vary from person to person." },
                    ],
                },
            ],
            questions: [
                // Multiple Choice (Q27-30)
                { questionNumber: 27, questionType: "multiple-choice-full", questionText: "According to the passage, when shoppers choose a product, colour", correctAnswer: "B", marks: 1 },
                { questionNumber: 28, questionType: "multiple-choice-full", questionText: "The colour blue is often used by banks and technology companies because it", correctAnswer: "C", marks: 1 },
                { questionNumber: 29, questionType: "multiple-choice-full", questionText: "The example of the colour white is used to show that", correctAnswer: "A", marks: 1 },
                { questionNumber: 30, questionType: "multiple-choice-full", questionText: "Why have some corporations gone to court over colours?", correctAnswer: "B", marks: 1 },
                // Yes/No/Not Given (Q31-35)
                { questionNumber: 31, questionType: "yes-no-not-given", questionText: "Colour is an important commercial concern for businesses.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "YES", marks: 1 },
                { questionNumber: 32, questionType: "yes-no-not-given", questionText: "A colour scheme that works well in one country will work equally well in others.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NO", marks: 1 },
                { questionNumber: 33, questionType: "yes-no-not-given", questionText: "Designers should consider the background against which a colour will appear.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "YES", marks: 1 },
                { questionNumber: 34, questionType: "yes-no-not-given", questionText: "Blue is the colour most often chosen by successful companies.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NOT GIVEN", marks: 1 },
                { questionNumber: 35, questionType: "yes-no-not-given", questionText: "Some advertisers exaggerate the power of colour to influence people.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "YES", marks: 1 },
                // Matching Features / Sentence Endings (Q36-38)
                { questionNumber: 36, questionType: "matching-features", questionText: "The colour red", options: ["A", "B", "C", "D", "E"], correctAnswer: "A", marks: 1 },
                { questionNumber: 37, questionType: "matching-features", questionText: "The colour green", options: ["A", "B", "C", "D", "E"], correctAnswer: "D", marks: 1 },
                { questionNumber: 38, questionType: "matching-features", questionText: "The colour black", options: ["A", "B", "C", "D", "E"], correctAnswer: "E", marks: 1 },
                // Summary With Options (Q39-40)
                { questionNumber: 39, questionType: "summary-with-options", questionText: "A consistent colour can become a silent __________ for a company", options: ["A", "B", "C", "D", "E", "F"], correctAnswer: "A", marks: 1 },
                { questionNumber: 40, questionType: "summary-with-options", questionText: "the evidence for precise emotional effects is __________ than some advertisers claim", options: ["A", "B", "C", "D", "E", "F"], correctAnswer: "D", marks: 1 },
            ],
        },
    ],
};

// ═══════════════════════════════════════════════════════════════
// SEED FUNCTION
// ═══════════════════════════════════════════════════════════════

async function seedReadingTest23() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log("Connected to MongoDB");

        const existing = await ReadingTest.findOne({ testId: readingTest23.testId });
        if (existing) {
            await ReadingTest.findByIdAndUpdate(existing._id, readingTest23);
            console.log("✅ Reading Test 23 UPDATED successfully!");
        } else {
            const admin = await User.findOne({ role: "admin" });
            if (!admin) {
                console.log("❌ Admin user not found!");
                process.exit(1);
            }
            await ReadingTest.create({ ...readingTest23, createdBy: admin._id });
            console.log("✅ Reading Test 23 CREATED successfully!");
        }

        // Verify
        const verify = await ReadingTest.findOne({ testId: readingTest23.testId });
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

seedReadingTest23();
