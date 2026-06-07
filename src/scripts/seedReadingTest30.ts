/**
 * Seed Script: Academic Reading Mock Test 30
 * Run: npx ts-node-dev --transpile-only src/scripts/seedReadingTest30.ts
 *
 * Original passages (generated, fully answered):
 *   1 - Harnessing Wind Power (Q1-13)
 *   2 - The History of Coffee Houses (Q14-26)
 *   3 - Memory and Learning Techniques (Q27-40)
 *
 * Built per READING_NEW_TEST_PLAYBOOK.md - dual storage (questionGroups + flat questions),
 * full answer keys, 13+13+14 split, premium type mix.
 */

import mongoose from "mongoose";
import { ReadingTest } from "../app/modules/reading/reading.model";
import { User } from "../app/modules/user/user.model";
import config from "../app/config";

// ═══════════════════════════════════════════════════════════════
// PASSAGE 1: HARNESSING WIND POWER (labeled A-G for matching-headings)
// ═══════════════════════════════════════════════════════════════

const passage1Text = `A The wind has served humankind for thousands of years. Long before anyone understood the science behind it, people had learned to capture the energy of moving air and put it to work. The earliest sailing boats used the wind to cross rivers and seas, while the first windmills, which appeared in the highlands of Persia more than a thousand years ago, were used to grind grain and to draw water from the ground. These simple machines, with their cloth or wooden sails turning slowly in the breeze, freed people from a great deal of heavy and repetitive labour. What all of these devices had in common was a single, elegant idea: that the steady push of the air could be turned into useful motion.

B To understand a modern wind turbine, it helps to know where the wind itself comes from. Wind is, in essence, a by-product of the sun. As sunlight falls on the surface of the planet, it heats the land and the sea unevenly. Warm air is lighter than cool air, so it rises, and cooler air rushes in to take its place. This constant movement of air from one region to another is what we experience as wind. Because the sun will continue to shine for billions of years, the wind is regarded as a renewable resource, one that can never be used up in the way that coal or oil eventually will be.

C A modern wind turbine is a far more sophisticated machine than the windmills of the past, yet the underlying principle is the same. The moving air pushes against a set of long, curved blades, causing them to rotate. The blades are connected to a shaft, which in turn drives a generator housed in a box at the top of the tower. Inside the generator, the spinning motion is converted into electricity. The taller the tower and the longer the blades, the more energy a turbine can capture, which is why the latest machines are built on a truly enormous scale, some standing taller than a thirty-storey building.

D The advantages of wind power are considerable. Once a turbine has been built, it produces no harmful gases and burns no fuel, so the electricity it generates does not contribute to the warming of the atmosphere. The wind itself is free, and the running costs of a wind farm are low compared with those of a power station fuelled by coal or gas. Moreover, the land beneath and between the turbines can often still be used for farming, so a single field may produce both crops and electricity at the same time. For all these reasons, many governments now view wind energy as a central part of their plans to reduce pollution.

E Wind power is not without its difficulties, however. The most obvious problem is that the wind does not blow all the time, nor at a constant speed. When the air is still, a turbine produces nothing, and at present it is hard to store large amounts of electricity for use during calm periods. Critics also complain that wind farms can spoil beautiful landscapes and that the turning blades may harm birds and bats. The slow turning of the blades produces a low noise that some people who live nearby find unpleasant, although supporters argue that this is often exaggerated.

F Where a turbine is placed matters enormously. The best sites are those where the wind blows strongly and reliably, such as open plains, the tops of hills and, increasingly, the open sea. Building turbines offshore has several attractions: the wind over water tends to be stronger and steadier than on land, and the machines are far enough from houses that few people are troubled by their appearance or their noise. Against these benefits must be set the greater expense, for constructing and maintaining turbines in the middle of the ocean is considerably more difficult and costly than doing so on dry land.

G What does the future hold? Engineers are working to make turbines ever larger and more efficient, and the cost of the electricity they produce has fallen dramatically over the past two decades. Researchers are also developing better ways of storing energy, so that power generated on windy days need not be wasted but can be saved for later. Few experts now doubt that the wind, which once turned the sails of simple mills, will play a major part in supplying the clean energy that the world so urgently requires.`;

// ═══════════════════════════════════════════════════════════════
// PASSAGE 2: THE HISTORY OF COFFEE HOUSES (labeled A-G for matching-information)
// ═══════════════════════════════════════════════════════════════

const passage2Text = `A The story of coffee begins not with a drink but with a plant. The coffee bush grows wild in the highlands of Ethiopia, and according to a popular legend it was a goat herder who first noticed its powers. He observed that his animals became unusually lively after eating the bright red berries of a certain shrub, and, curious, he tried them himself. Whatever the truth of this tale, the early history of the drink is uncertain, and historians caution that such colourful stories were often invented long after the events they claim to describe. What is clear is that by the fifteenth century the practice of roasting the beans and brewing them into a hot drink had spread across the Red Sea to the Arabian Peninsula, where coffee quickly became popular, valued in part by religious communities who found that it helped them to remain awake during long hours of prayer.

B It was in the Arab world that the first coffee houses appeared. In cities such as Mecca, Cairo and Istanbul, establishments serving the new drink opened their doors, and they soon became far more than places simply to take refreshment. People gathered in them to talk, to play games such as chess, to listen to music and to discuss the news of the day. Because they encouraged lively conversation and the open exchange of opinions, these houses were sometimes regarded with suspicion by the authorities, who on several occasions attempted to close them down, fearing that they might become centres of unrest.

C Coffee reached Europe through the busy trading port of Venice, whose merchants had long done business with the East. At first the dark, bitter drink was treated with caution, and some Christians distrusted it because of its association with the Muslim world. The matter was apparently settled only when the Pope himself tasted the drink and, finding it pleasant, gave it his approval. With this blessing, coffee was free to spread, and the first European coffee house is generally said to have opened in Venice in the middle of the seventeenth century.

D The fashion travelled quickly to England, where coffee houses multiplied at an extraordinary rate. By the end of the seventeenth century, London alone had hundreds of them. For the price of a single penny, which was the cost of a cup of coffee, a man could enter, sit for as long as he liked and join in the conversation; for this reason the coffee houses became known as 'penny universities', since so much could be learned within them for so small a sum. Each tended to attract its own particular clientele, so that merchants, poets, scientists and politicians each had their favourite haunts.

E The importance of these establishments to the life of the nation can hardly be overstated. Several institutions that survive to this day had their beginnings in a London coffee house. The famous insurance market known as Lloyd's, for example, grew out of a coffee house owned by a man named Edward Lloyd, whose premises were popular with sailors and merchants who needed to insure their ships and cargoes. In a similar way, the London Stock Exchange can trace its origins to gatherings of traders in another such establishment. The coffee house, in short, was where much of the commercial business of the city was conducted.

F The reign of the coffee house, however, did not last. During the eighteenth century its popularity began to wane, and a number of explanations have been suggested. The rapid rise of tea, which was cheaper and could easily be prepared at home, drew many customers away. At the same time, the appearance of private gentlemen's clubs offered the wealthier sort of customer a more exclusive and comfortable place to meet. The great age of the public coffee house, which had lasted for the better part of a century, gradually came to an end.

G In recent decades, of course, coffee has enjoyed a remarkable revival, and coffee shops have once again become a familiar feature of towns and cities across the world. The modern coffee shop, with its comfortable chairs and wireless internet, serves in many respects the same social function as its historical ancestor: it remains a place to meet friends, to work and to watch the world go by. Some commentators have even suggested that the laptop computer has taken the place of the newspaper, and that today's freelance worker is the direct descendant of the merchant who once did business over a cup in a London establishment. The names and the furnishings have changed, but the essential idea, of a public space built around a simple hot drink, has proved to be one of surprising and enduring appeal.`;

// ═══════════════════════════════════════════════════════════════
// PASSAGE 3: MEMORY AND LEARNING TECHNIQUES (continuous + bold sub-headings)
// ═══════════════════════════════════════════════════════════════

const passage3Text = `Memory lies at the very heart of learning. Without the ability to retain what we encounter, every experience would be new, and no skill or knowledge could ever be built up over time. Yet the way in which most people try to learn is, according to psychologists who study the subject, surprisingly inefficient. For generations students have relied on a small number of familiar habits, such as reading a text over and over again, in the belief that these are the surest routes to remembering. The findings of memory research are rarely taught in schools, and as a result many capable students continue to waste hours on methods that yield very little. A growing body of research suggests that several of the most popular methods are in fact among the least effective, and that simple changes to the way we study can produce striking improvements.

**The trouble with re-reading**

The most common study technique of all is also one of the weakest. When students read a passage repeatedly, the words gradually become familiar, and this familiarity is easily mistaken for genuine understanding. The danger is that learners come to feel confident about material they cannot actually recall, a false impression that researchers call the 'illusion of knowing'. Because re-reading feels easy and pleasant, it remains popular, but study after study has shown that it does little to fix information in the memory for the long term. Highlighting passages in bright colours, another favourite, suffers from much the same weakness: it gives the comforting feeling of having done some work without requiring the mind to engage deeply with the meaning.

**The power of recall**

If passively reviewing material is ineffective, what works better? One of the most powerful techniques, supported by a great deal of evidence, is known as retrieval practice. Instead of simply reading the information again, the learner closes the book and tries to recall it from memory, perhaps by answering questions or writing down everything that can be remembered. The act of struggling to retrieve a fact, even when the attempt is only partly successful, strengthens the memory far more than rereading ever could. This is why testing oneself, often dismissed by students as a mere check on progress, is in truth one of the most effective ways of learning in the first place.

A second technique that researchers strongly recommend is spacing. Most students prefer to concentrate their study into a single long session, an approach commonly known as cramming, particularly in the days just before an examination. While such intensive effort may allow facts to be held in the mind long enough to pass a test the following morning, the knowledge tends to fade with alarming speed once the examination is over. Spreading the same amount of study over several shorter sessions, separated by days or even weeks, produces memories that are far more durable. The very act of partly forgetting between sessions, and then having to retrieve the material again, appears to be what makes the learning stick.

**Mixing it up**

A third strategy, which at first seems strange, is called interleaving. The natural instinct when learning a set of related skills is to practise each one thoroughly before moving on to the next, a method usually described as blocked practice. Interleaving turns this on its head by mixing different types of problem together within a single session. Although this feels more difficult and progress seems slower, learners who study in this way generally perform better when they are later tested, because they have been forced to choose the right approach for each problem rather than applying the same method mechanically. The benefit has been shown not only in mathematics but also in fields as varied as sport and the recognition of paintings by different artists, which suggests that the principle is a broad one.

Why, then, are the most effective techniques so rarely used? Part of the answer is that they feel harder. Retrieval, spacing and interleaving all introduce what researchers call 'desirable difficulties': the very struggle that makes them feel uncomfortable is precisely what makes them work. Re-reading, by contrast, feels smooth and reassuring, and so it is naturally preferred, even though it achieves far less. The lesson from the research is clear: when it comes to learning, the easy path and the effective path are seldom the same, and a little well-directed effort can carry a student a remarkably long way. Teachers who understand this can do their pupils a great service simply by building regular tests and spaced review into their lessons, rather than leaving each learner to discover the most useful methods alone, often far too late to benefit from them.`;

// ═══════════════════════════════════════════════════════════════
// FULL TEST DATA
// ═══════════════════════════════════════════════════════════════

const readingTest30 = {
    testId: "READING_AC_030",
    testNumber: 30,
    testType: "academic" as const,
    title: "Reading Mock Test 30 - Academic",
    description: "IELTS Academic Reading Test featuring passages on Harnessing Wind Power, The History of Coffee Houses, and Memory and Learning Techniques",
    source: "IELTS Academic Practice",
    difficulty: "medium" as const,
    isActive: true,
    duration: 60,
    totalQuestions: 40,
    totalMarks: 40,
    sections: [
        // ╔═══════════════════════════════════════════════════════════╗
        // ║  SECTION 1: HARNESSING WIND POWER (Questions 1-13)      ║
        // ╚═══════════════════════════════════════════════════════════╝
        {
            sectionNumber: 1,
            title: "Harnessing Wind Power",
            instructions: "You should spend about 20 minutes on Questions 1-13 which are based on Reading Passage 1 below.",
            passage: passage1Text,
            questionGroups: [
                // ── Q1-6: MATCHING HEADINGS (with Example: Paragraph A = viii) ──
                {
                    groupType: "matching-headings",
                    startQuestion: 1,
                    endQuestion: 6,
                    mainInstruction: "Reading Passage 1 has seven paragraphs, A-G.",
                    subInstruction: "Choose the correct heading for paragraphs B-G from the list of headings below. Write the correct number, i-x, in boxes 1-6 on your answer sheet.",
                    featureListTitle: "List of Headings",
                    headingsList: [
                        { numeral: "i", text: "How a turbine generates electricity" },
                        { numeral: "ii", text: "The drawbacks of relying on the wind" },
                        { numeral: "iii", text: "Choosing the right location" },
                        { numeral: "iv", text: "The benefits of generating power from wind" },
                        { numeral: "v", text: "What causes the wind to blow" },
                        { numeral: "vi", text: "Prospects for the years ahead" },
                        { numeral: "vii", text: "The rising cost of electricity" },
                        { numeral: "viii", text: "Early uses of the wind's energy" },
                        { numeral: "ix", text: "Comparing wind farms with coal stations" },
                        { numeral: "x", text: "How turbines are manufactured" },
                    ],
                    paragraphOptions: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"],
                    exampleItems: [
                        { text: "Paragraph A", answer: "viii" },
                    ],
                    matchingItems: [
                        { questionNumber: 1, text: "Paragraph B", correctAnswer: "v" },
                        { questionNumber: 2, text: "Paragraph C", correctAnswer: "i" },
                        { questionNumber: 3, text: "Paragraph D", correctAnswer: "iv" },
                        { questionNumber: 4, text: "Paragraph E", correctAnswer: "ii" },
                        { questionNumber: 5, text: "Paragraph F", correctAnswer: "iii" },
                        { questionNumber: 6, text: "Paragraph G", correctAnswer: "vi" },
                    ],
                },
                // ── Q7-9: SUMMARY COMPLETION (ONE WORD ONLY) ──
                {
                    groupType: "summary-completion",
                    startQuestion: 7,
                    endQuestion: 9,
                    mainInstruction: "Complete the summary below.",
                    subInstruction: "Choose ONE WORD ONLY from the passage for each answer. Write your answers in boxes 7-9 on your answer sheet.",
                    mainHeading: "How a wind turbine works",
                    summarySegments: [
                        { type: "text", content: "In a modern wind turbine the moving air pushes against the long, curved" },
                        { type: "blank", questionNumber: 7, correctAnswer: "blades" },
                        { type: "text", content: ", making them turn. These are joined to a shaft that drives a" },
                        { type: "blank", questionNumber: 8, correctAnswer: "generator" },
                        { type: "text", content: ", a device in which the spinning motion is changed into" },
                        { type: "blank", questionNumber: 9, correctAnswer: "electricity" },
                        { type: "text", content: ". Taller towers and longer blades allow the machine to capture more energy." },
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
                        { questionNumber: 10, text: "The earliest windmills were first built in Persia.", correctAnswer: "TRUE" },
                        { questionNumber: 11, text: "Land containing wind turbines cannot be used for growing crops.", correctAnswer: "FALSE" },
                        { questionNumber: 12, text: "Wind blowing over the sea is generally stronger than wind over land.", correctAnswer: "TRUE" },
                        { questionNumber: 13, text: "Most countries now obtain the majority of their electricity from wind.", correctAnswer: "NOT GIVEN" },
                    ],
                },
            ],
            questions: [
                // Matching Headings (Q1-6)
                { questionNumber: 1, questionType: "matching-headings", questionText: "Paragraph B", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "v", marks: 1 },
                { questionNumber: 2, questionType: "matching-headings", questionText: "Paragraph C", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "i", marks: 1 },
                { questionNumber: 3, questionType: "matching-headings", questionText: "Paragraph D", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "iv", marks: 1 },
                { questionNumber: 4, questionType: "matching-headings", questionText: "Paragraph E", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "ii", marks: 1 },
                { questionNumber: 5, questionType: "matching-headings", questionText: "Paragraph F", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "iii", marks: 1 },
                { questionNumber: 6, questionType: "matching-headings", questionText: "Paragraph G", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "vi", marks: 1 },
                // Summary Completion (Q7-9)
                { questionNumber: 7, questionType: "summary-completion", questionText: "the moving air pushes against the long, curved __________", correctAnswer: "blades", acceptableAnswers: ["blades"], marks: 1 },
                { questionNumber: 8, questionType: "summary-completion", questionText: "joined to a shaft that drives a __________", correctAnswer: "generator", acceptableAnswers: ["generator"], marks: 1 },
                { questionNumber: 9, questionType: "summary-completion", questionText: "the spinning motion is changed into __________", correctAnswer: "electricity", acceptableAnswers: ["electricity"], marks: 1 },
                // True/False/Not Given (Q10-13)
                { questionNumber: 10, questionType: "true-false-not-given", questionText: "The earliest windmills were first built in Persia.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE", marks: 1 },
                { questionNumber: 11, questionType: "true-false-not-given", questionText: "Land containing wind turbines cannot be used for growing crops.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE", marks: 1 },
                { questionNumber: 12, questionType: "true-false-not-given", questionText: "Wind blowing over the sea is generally stronger than wind over land.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE", marks: 1 },
                { questionNumber: 13, questionType: "true-false-not-given", questionText: "Most countries now obtain the majority of their electricity from wind.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "NOT GIVEN", marks: 1 },
            ],
        },

        // ╔═══════════════════════════════════════════════════════════╗
        // ║  SECTION 2: THE HISTORY OF COFFEE HOUSES (Q14-26)       ║
        // ╚═══════════════════════════════════════════════════════════╝
        {
            sectionNumber: 2,
            title: "The History of Coffee Houses",
            instructions: "You should spend about 20 minutes on Questions 14-26 which are based on Reading Passage 2 below.",
            passage: passage2Text,
            questionGroups: [
                // ── Q14-18: MATCHING INFORMATION ──
                {
                    groupType: "matching-information",
                    startQuestion: 14,
                    endQuestion: 18,
                    mainInstruction: "Reading Passage 2 has seven paragraphs, A-G. Which paragraph contains the following information?",
                    subInstruction: "Write the correct letter, A-G, in boxes 14-18 on your answer sheet.",
                    note: "NB You may use any letter more than once.",
                    paragraphOptions: ["A", "B", "C", "D", "E", "F", "G"],
                    matchingItems: [
                        { questionNumber: 14, text: "a description of how a famous institution developed from a coffee house", correctAnswer: "E" },
                        { questionNumber: 15, text: "reasons why coffee houses eventually became less popular", correctAnswer: "F" },
                        { questionNumber: 16, text: "an account of how the discovery of coffee is said to have happened", correctAnswer: "A" },
                        { questionNumber: 17, text: "the approval of coffee by a religious leader", correctAnswer: "C" },
                        { questionNumber: 18, text: "official attempts to shut coffee houses down", correctAnswer: "B" },
                    ],
                },
                // ── Q19-22: MULTIPLE CHOICE FULL ──
                {
                    groupType: "multiple-choice-full",
                    startQuestion: 19,
                    endQuestion: 22,
                    mainInstruction: "Choose the correct letter, A, B, C or D.",
                    subInstruction: "Write the correct letter in boxes 19-22 on your answer sheet.",
                    mcQuestions: [
                        {
                            questionNumber: 19,
                            questionText: "The coffee plant originally grew wild in",
                            options: [
                                { letter: "A", text: "the Arabian Peninsula." },
                                { letter: "B", text: "the highlands of Ethiopia." },
                                { letter: "C", text: "the city of Venice." },
                                { letter: "D", text: "the islands of the Red Sea." },
                            ],
                            correctAnswer: "B",
                        },
                        {
                            questionNumber: 20,
                            questionText: "In the Arab world, coffee houses were viewed with suspicion by the authorities because",
                            options: [
                                { letter: "A", text: "the drink they served was thought to be harmful." },
                                { letter: "B", text: "they charged customers too much money." },
                                { letter: "C", text: "they might become places where unrest could grow." },
                                { letter: "D", text: "they competed with established places of worship." },
                            ],
                            correctAnswer: "C",
                        },
                        {
                            questionNumber: 21,
                            questionText: "London coffee houses were called 'penny universities' because",
                            options: [
                                { letter: "A", text: "they were attached to the city's universities." },
                                { letter: "B", text: "a great deal could be learned in them for very little money." },
                                { letter: "C", text: "only educated people were allowed to enter." },
                                { letter: "D", text: "they charged a penny for every hour spent inside." },
                            ],
                            correctAnswer: "B",
                        },
                        {
                            questionNumber: 22,
                            questionText: "According to the passage, one reason for the decline of the coffee house was",
                            options: [
                                { letter: "A", text: "a rise in the price of coffee beans." },
                                { letter: "B", text: "the growing popularity of tea." },
                                { letter: "C", text: "a government ban on public gatherings." },
                                { letter: "D", text: "the closure of the trading port of Venice." },
                            ],
                            correctAnswer: "B",
                        },
                    ],
                },
                // ── Q23-26: NOTE COMPLETION (NO MORE THAN TWO WORDS) ──
                {
                    groupType: "note-completion",
                    startQuestion: 23,
                    endQuestion: 26,
                    mainInstruction: "Complete the notes below.",
                    subInstruction: "Choose NO MORE THAN TWO WORDS from the passage for each answer. Write your answers in boxes 23-26 on your answer sheet.",
                    mainHeading: "The spread of coffee and coffee houses",
                    passage: `Origins\n- Coffee bush first grew wild in Ethiopia\n- The first coffee houses opened in the 23 __________\nCoffee reaches Europe\n- Arrived through the trading port of 24 __________\n- Some Christians distrusted it at first\nThe English coffee house\n- In London a cup of coffee cost a single 25 __________\n- Lloyd's grew from a coffee house popular with sailors and 26 __________`,
                },
            ],
            questions: [
                // Matching Information (Q14-18)
                { questionNumber: 14, questionType: "matching-information", questionText: "a description of how a famous institution developed from a coffee house", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "E", marks: 1 },
                { questionNumber: 15, questionType: "matching-information", questionText: "reasons why coffee houses eventually became less popular", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "F", marks: 1 },
                { questionNumber: 16, questionType: "matching-information", questionText: "an account of how the discovery of coffee is said to have happened", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "A", marks: 1 },
                { questionNumber: 17, questionType: "matching-information", questionText: "the approval of coffee by a religious leader", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "C", marks: 1 },
                { questionNumber: 18, questionType: "matching-information", questionText: "official attempts to shut coffee houses down", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "B", marks: 1 },
                // Multiple Choice (Q19-22)
                { questionNumber: 19, questionType: "multiple-choice-full", questionText: "The coffee plant originally grew wild in", correctAnswer: "B", marks: 1 },
                { questionNumber: 20, questionType: "multiple-choice-full", questionText: "In the Arab world, coffee houses were viewed with suspicion by the authorities because", correctAnswer: "C", marks: 1 },
                { questionNumber: 21, questionType: "multiple-choice-full", questionText: "London coffee houses were called 'penny universities' because", correctAnswer: "B", marks: 1 },
                { questionNumber: 22, questionType: "multiple-choice-full", questionText: "According to the passage, one reason for the decline of the coffee house was", correctAnswer: "B", marks: 1 },
                // Note Completion (Q23-26)
                { questionNumber: 23, questionType: "note-completion", questionText: "The first coffee houses opened in the __________", correctAnswer: "Arab world", acceptableAnswers: ["Arab world", "arab world"], marks: 1 },
                { questionNumber: 24, questionType: "note-completion", questionText: "Arrived through the trading port of __________", correctAnswer: "Venice", acceptableAnswers: ["Venice", "venice"], marks: 1 },
                { questionNumber: 25, questionType: "note-completion", questionText: "a cup of coffee cost a single __________", correctAnswer: "penny", acceptableAnswers: ["penny"], marks: 1 },
                { questionNumber: 26, questionType: "note-completion", questionText: "a coffee house popular with sailors and __________", correctAnswer: "merchants", acceptableAnswers: ["merchants"], marks: 1 },
            ],
        },

        // ╔═══════════════════════════════════════════════════════════╗
        // ║  SECTION 3: MEMORY AND LEARNING TECHNIQUES (Q27-40)     ║
        // ╚═══════════════════════════════════════════════════════════╝
        {
            sectionNumber: 3,
            title: "Memory and Learning Techniques",
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
                            questionText: "According to the passage, the most common way in which people try to learn is",
                            options: [
                                { letter: "A", text: "highly effective for long-term memory." },
                                { letter: "B", text: "one of the least effective methods." },
                                { letter: "C", text: "recommended by most psychologists." },
                                { letter: "D", text: "only suitable for young children." },
                            ],
                            correctAnswer: "B",
                        },
                        {
                            questionNumber: 28,
                            questionText: "The 'illusion of knowing' refers to the way in which re-reading can",
                            options: [
                                { letter: "A", text: "make learners feel confident about material they cannot recall." },
                                { letter: "B", text: "cause students to forget what they have read." },
                                { letter: "C", text: "improve a learner's understanding very quickly." },
                                { letter: "D", text: "make a passage seem more difficult than it is." },
                            ],
                            correctAnswer: "A",
                        },
                        {
                            questionNumber: 29,
                            questionText: "Retrieval practice strengthens memory because the learner",
                            options: [
                                { letter: "A", text: "reads the information several more times." },
                                { letter: "B", text: "highlights the most important points." },
                                { letter: "C", text: "tries to recall the material from memory." },
                                { letter: "D", text: "studies in a single long session." },
                            ],
                            correctAnswer: "C",
                        },
                        {
                            questionNumber: 30,
                            questionText: "What does the passage say about cramming before an examination?",
                            options: [
                                { letter: "A", text: "It is the most reliable way to learn." },
                                { letter: "B", text: "The knowledge gained tends to fade quickly afterwards." },
                                { letter: "C", text: "It is recommended by researchers." },
                                { letter: "D", text: "It produces longer-lasting memories than spacing." },
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
                        { questionNumber: 31, text: "Highlighting passages is an effective way to engage deeply with their meaning.", correctAnswer: "NO" },
                        { questionNumber: 32, text: "Testing oneself is a valuable way of learning, not merely a check on progress.", correctAnswer: "YES" },
                        { questionNumber: 33, text: "Spreading study over several sessions produces more durable memories than a single long session.", correctAnswer: "YES" },
                        { questionNumber: 34, text: "Interleaving is more popular among students than re-reading.", correctAnswer: "NO" },
                        { questionNumber: 35, text: "Older learners benefit more from these techniques than younger ones.", correctAnswer: "NOT GIVEN" },
                    ],
                },
                // ── Q36-38: MATCHING FEATURES (study techniques) ──
                {
                    groupType: "matching-features",
                    startQuestion: 36,
                    endQuestion: 38,
                    mainInstruction: "Look at the following descriptions and the list of study techniques below. Match each description with the correct technique, A-D.",
                    subInstruction: "Write the correct letter, A-D, in boxes 36-38 on your answer sheet.",
                    featureListTitle: "List of Techniques",
                    paragraphOptions: ["A", "B", "C", "D"],
                    featureOptions: [
                        { letter: "A", text: "retrieval practice" },
                        { letter: "B", text: "spacing" },
                        { letter: "C", text: "interleaving" },
                        { letter: "D", text: "re-reading" },
                    ],
                    matchingItems: [
                        { questionNumber: 36, text: "mixing different types of problem together within one session", correctAnswer: "C" },
                        { questionNumber: 37, text: "closing the book and trying to remember the information", correctAnswer: "A" },
                        { questionNumber: 38, text: "separating study sessions by days or weeks", correctAnswer: "B" },
                    ],
                },
                // ── Q39-40: CHOOSE TWO LETTERS ──
                {
                    groupType: "choose-two-letters",
                    startQuestion: 39,
                    endQuestion: 40,
                    mainInstruction: "Choose TWO letters, A-E.",
                    subInstruction: "Write the correct letters in boxes 39 and 40 on your answer sheet.",
                    questionSets: [
                        {
                            questionNumbers: [39, 40],
                            questionText: "Which TWO of the following does the writer describe as 'desirable difficulties'?",
                            options: [
                                { letter: "A", text: "retrieval practice" },
                                { letter: "B", text: "highlighting" },
                                { letter: "C", text: "spacing" },
                                { letter: "D", text: "re-reading" },
                                { letter: "E", text: "the illusion of knowing" },
                            ],
                            correctAnswers: ["A", "C"],
                        },
                    ],
                },
            ],
            questions: [
                // Multiple Choice (Q27-30)
                { questionNumber: 27, questionType: "multiple-choice-full", questionText: "According to the passage, the most common way in which people try to learn is", correctAnswer: "B", marks: 1 },
                { questionNumber: 28, questionType: "multiple-choice-full", questionText: "The 'illusion of knowing' refers to the way in which re-reading can", correctAnswer: "A", marks: 1 },
                { questionNumber: 29, questionType: "multiple-choice-full", questionText: "Retrieval practice strengthens memory because the learner", correctAnswer: "C", marks: 1 },
                { questionNumber: 30, questionType: "multiple-choice-full", questionText: "What does the passage say about cramming before an examination?", correctAnswer: "B", marks: 1 },
                // Yes/No/Not Given (Q31-35)
                { questionNumber: 31, questionType: "yes-no-not-given", questionText: "Highlighting passages is an effective way to engage deeply with their meaning.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NO", marks: 1 },
                { questionNumber: 32, questionType: "yes-no-not-given", questionText: "Testing oneself is a valuable way of learning, not merely a check on progress.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "YES", marks: 1 },
                { questionNumber: 33, questionType: "yes-no-not-given", questionText: "Spreading study over several sessions produces more durable memories than a single long session.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "YES", marks: 1 },
                { questionNumber: 34, questionType: "yes-no-not-given", questionText: "Interleaving is more popular among students than re-reading.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NO", marks: 1 },
                { questionNumber: 35, questionType: "yes-no-not-given", questionText: "Older learners benefit more from these techniques than younger ones.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NOT GIVEN", marks: 1 },
                // Matching Features (Q36-38)
                { questionNumber: 36, questionType: "matching-features", questionText: "mixing different types of problem together within one session", options: ["A", "B", "C", "D"], correctAnswer: "C", marks: 1 },
                { questionNumber: 37, questionType: "matching-features", questionText: "closing the book and trying to remember the information", options: ["A", "B", "C", "D"], correctAnswer: "A", marks: 1 },
                { questionNumber: 38, questionType: "matching-features", questionText: "separating study sessions by days or weeks", options: ["A", "B", "C", "D"], correctAnswer: "B", marks: 1 },
                // Choose Two Letters (Q39-40)
                { questionNumber: 39, questionType: "choose-two-letters", questionText: "Which TWO of the following does the writer describe as 'desirable difficulties'?", options: ["A", "B", "C", "D", "E"], correctAnswer: "A", marks: 1 },
                { questionNumber: 40, questionType: "choose-two-letters", questionText: "Which TWO of the following does the writer describe as 'desirable difficulties'?", options: ["A", "B", "C", "D", "E"], correctAnswer: "C", marks: 1 },
            ],
        },
    ],
};

// ═══════════════════════════════════════════════════════════════
// SEED FUNCTION
// ═══════════════════════════════════════════════════════════════

async function seedReadingTest30() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log("Connected to MongoDB");

        const existing = await ReadingTest.findOne({ testId: readingTest30.testId });
        if (existing) {
            await ReadingTest.findByIdAndUpdate(existing._id, readingTest30);
            console.log("✅ Reading Test 30 UPDATED successfully!");
        } else {
            const admin = await User.findOne({ role: "admin" });
            if (!admin) {
                console.log("❌ Admin user not found!");
                process.exit(1);
            }
            await ReadingTest.create({ ...readingTest30, createdBy: admin._id });
            console.log("✅ Reading Test 30 CREATED successfully!");
        }

        // Verify
        const verify = await ReadingTest.findOne({ testId: readingTest30.testId });
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

seedReadingTest30();
