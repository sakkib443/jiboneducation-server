/**
 * Seed Script: Academic Reading Mock Test 27
 * Run: npx ts-node-dev --transpile-only src/scripts/seedReadingTest27.ts
 *
 * Original passages (generated, fully answered):
 *   1 - The Human Microbiome (Q1-13)
 *   2 - The Silk Road (Q14-26)
 *   3 - Urban Green Spaces (Q27-40)
 *
 * Built per READING_NEW_TEST_PLAYBOOK.md - dual storage (questionGroups + flat questions),
 * full answer keys, 13+13+14 split, premium type mix.
 */

import mongoose from "mongoose";
import { ReadingTest } from "../app/modules/reading/reading.model";
import { User } from "../app/modules/user/user.model";
import config from "../app/config";

// ═══════════════════════════════════════════════════════════════
// PASSAGE 1: THE HUMAN MICROBIOME (labeled A-G for matching-headings)
// ═══════════════════════════════════════════════════════════════

const passage1Text = `A The human body is far less human than it might appear. For every cell that carries our own genetic code, there is roughly one belonging to a microbe, a tiny living organism such as a bacterium, a virus or a fungus. Together these trillions of microbes, along with the genes they carry, are known as the human microbiome. The number of microbial genes is thought to dwarf the number of our own by a factor of more than a hundred, prompting some researchers to describe a human being as a kind of walking ecosystem rather than a single, self-contained creature. The great majority of these organisms live in the gut, but they also colonise the skin, the mouth, the nose and almost every other surface of the body. For most of medical history they were ignored or regarded simply as germs to be destroyed. Only in recent decades have scientists come to recognise them as a vital part of who we are.

B One reason the microbiome was overlooked for so long is that most of its members are extremely difficult to study. The traditional method of identifying a microbe was to grow it in a laboratory dish, yet the overwhelming majority of the species living inside us refuse to grow in such artificial conditions. The breakthrough came with a technique that reads genetic material directly from a sample, allowing researchers to identify thousands of organisms at once without ever culturing them. Armed with this tool, scientists have been able to catalogue the astonishing diversity of the communities that share our bodies.

C What all this research has revealed is that the microbiome is not a passive passenger but an active partner. The bacteria in the gut help to break down components of food that the body cannot digest on its own, releasing nutrients that would otherwise be lost. They manufacture certain vitamins, including several of the B group and vitamin K, which the body is unable to produce in sufficient quantities by itself. Perhaps most importantly, they train and regulate the immune system, teaching it to tolerate harmless substances while remaining ready to attack genuine threats.

D The composition of a person's microbiome is shaped by events that begin at the very moment of birth. A baby delivered naturally is coated with microbes from the mother's birth canal, while one delivered by surgery acquires a rather different set of organisms from the skin and the surrounding environment. The method of feeding matters too, since breast milk contains special sugars that the infant cannot digest but that nourish particular beneficial bacteria. Over the first few years of life the community gradually becomes more complex and more stable, until by about the age of three it broadly resembles that of an adult.

E A healthy microbiome is generally a diverse one, and a loss of diversity has been linked to a range of disorders. When the balance of organisms is disturbed, a condition known as dysbiosis, the consequences can extend well beyond the gut. Research has connected an altered microbiome with obesity, with bowel diseases and even with conditions of the mind such as anxiety and depression. The gut and the brain, it turns out, are in constant communication along a pathway sometimes called the gut-brain axis, and the bacteria appear to influence the chemical signals that pass between them.

F Modern life may be eroding this precious diversity. Diets heavy in processed food and sugar but low in fibre starve the very bacteria that keep us healthy, while the widespread use of antibiotics, though often life-saving, can wipe out beneficial species along with the harmful ones they are meant to target. Some scientists fear that, generation by generation, the microbiomes of people in industrialised societies are growing steadily poorer, and that this hidden loss may help to explain the rising rates of certain modern illnesses.

G The discovery of the microbiome is beginning to change the practice of medicine. Doctors already treat some stubborn gut infections by transferring healthy bacteria from a donor into a sick patient, a procedure that can succeed where ordinary drugs have failed. Researchers are now exploring whether deliberately adjusting a person's microbial community might one day help to treat conditions as varied as diabetes and allergies, and companies have begun to market supplements containing live bacteria, though the benefits of many such products remain unproven. Whatever the outcome, it is clear that the tiny organisms we once dismissed as mere passengers deserve to be seen instead as essential companions, and that caring for them may prove to be as important as caring for our own cells.`;

// ═══════════════════════════════════════════════════════════════
// PASSAGE 2: THE SILK ROAD (labeled A-G for matching-information)
// ═══════════════════════════════════════════════════════════════

const passage2Text = `A The Silk Road was never a single paved highway, nor was it devoted only to silk. The name, coined by a German geographer in the nineteenth century, refers instead to a vast and shifting network of trade routes that linked the eastern edge of Asia with the shores of the Mediterranean. Stretching for thousands of kilometres, it crossed towering mountains, scorching deserts and open grasslands, and for well over a thousand years it served as the principal channel through which the great civilisations of the ancient and medieval world exchanged not only their goods but also their ideas.

B Trade along these routes grew rapidly during the period of the Han dynasty in China, more than two thousand years ago, when Chinese silk first began to travel west in significant quantities. The Romans developed a particular passion for the fabric, prizing its lightness and shimmer, and they paid for it in gold and silver. So much treasure flowed eastward in payment that some Roman writers complained the empire was being drained of its wealth to satisfy a craving for foreign luxuries. Yet the secret of how silk was made remained closely guarded in China for centuries, and many Romans wrongly believed that the material grew on trees. Silk flowed west, while glassware, wool, precious metals and horses travelled east in exchange.

C Few merchants ever travelled the entire length of the route. Instead, goods passed from hand to hand, carried in stages by camel caravans from one trading town to the next, with each merchant selling on to the next and taking a share of the profit. This relay system meant that a single bolt of cloth might change owners a dozen times before reaching its final buyer, and it explains why goods became so expensive by the time they arrived at their destination. The cities that lay along the route, such as Samarkand and Kashgar, grew wealthy by supplying and taxing the passing traffic, and they swelled into cosmopolitan centres where travellers of many nations met, lodged and did business in a babble of different tongues.

D If the goods were valuable, the ideas that travelled with them were arguably more precious still. Religions spread along the Silk Road with remarkable speed: Buddhism made its way from India into China, carried by monks and merchants alike, and later Islam followed the same paths across Central Asia. Artistic styles, musical instruments and scientific knowledge moved in both directions, and languages mingled in the bustling markets. In this sense the Silk Road was as much a highway for culture as for commerce, and its influence on the beliefs and arts of many peoples was profound and lasting.

E Not everything that travelled the route was welcome. The same caravans and ships that carried silk and spices also carried disease. The most devastating example came in the fourteenth century, when the plague known as the Black Death is thought to have spread westward along these very networks, travelling with the fleas that infested merchants' goods and animals. Within a few years it had reached Europe, where it killed a substantial proportion of the population. The interconnected world the Silk Road had created thus proved dangerously efficient at transmitting catastrophe as well as commerce.

F Travel along the routes was never easy or safe. Merchants faced the constant threat of bandits, the risk of dying of thirst in the desert, and the bitter cold of the high mountain passes. The volume of trade also rose and fell with the fortunes of the empires that controlled the territory, for traffic flowed most freely when a single strong power kept the roads secure. The vast Mongol empire of the thirteenth century, for all the violence of its conquests, ushered in a period of relative stability that allowed merchants and travellers, among them the Venetian Marco Polo, to journey across Asia in greater safety than before.

G The long decline of the overland routes began in the fifteenth century. As European sailors mastered the open ocean and opened direct sea routes to Asia, goods could be carried by ship in far greater quantities and at much lower cost than by caravan. The land routes slowly fell out of use, and many of the once-thriving cities along them dwindled into quiet towns or were abandoned to the encroaching sands altogether. Yet the legacy of the Silk Road endures, for the centuries of exchange it made possible helped to shape the languages, religions and cuisines of half the world, and the very idea of it still captures the imagination as a symbol of connection between distant peoples.`;

// ═══════════════════════════════════════════════════════════════
// PASSAGE 3: URBAN GREEN SPACES (continuous + bold sub-headings)
// ═══════════════════════════════════════════════════════════════

const passage3Text = `For most of human history the majority of people lived in the countryside, surrounded by fields, woods and open sky. Today the balance has tipped, and more than half of the world's population lives in cities, a proportion that is expected to keep climbing for decades to come. As towns grow ever larger and denser, the patches of nature that survive within them, the parks, gardens, tree-lined streets and riverside paths collectively known as urban green spaces, have come to be seen not as luxuries but as necessities. For a long time planners treated such spaces as little more than decoration, the first thing to be sacrificed whenever land was needed for housing or roads. A wave of recent research, however, suggests that these green spaces play a far more important role in the life of a city than was once assumed, and that neglecting them carries real and measurable costs.

**More than a pleasant view**

The most obvious benefits of urban greenery are environmental. Trees and other plants absorb carbon dioxide and release oxygen, and their leaves trap dust and other pollutants, improving the quality of the air that residents breathe. Vegetation also helps to cool the urban environment. Cities built of concrete, brick and asphalt tend to be markedly warmer than the surrounding countryside, a phenomenon known as the urban heat island effect; a single large park can lower the temperature of its immediate neighbourhood by several degrees, offering welcome relief during increasingly frequent heatwaves. Green spaces are valuable in heavy rain as well, since soil and plants soak up water that would otherwise overwhelm drains and cause flooding.

The advantages, however, go well beyond the physical environment. A substantial body of evidence now links access to green space with better human health. People who live near parks tend to be more physically active, and contact with nature has been shown to reduce stress and to improve mood. Some researchers believe that even brief encounters with greenery, such as a short walk among trees during a lunch break, can sharpen concentration and ease mental fatigue. One frequently cited study found that hospital patients whose windows looked out onto trees recovered more quickly, and needed less pain medication, than those who faced a brick wall. The writer regards such findings as compelling, and argues that the evidence for the health value of urban nature is now too strong to ignore.

**A question of fairness**

Yet the benefits of green space are not shared equally. In many cities the wealthiest districts are leafy and well planted, while poorer neighbourhoods, where residents arguably have the greatest need for the health benefits that nature provides, often have very little greenery at all. This uneven distribution, the writer contends, is not merely unfortunate but unjust, and it ought to be a central concern for anyone planning the cities of the future. Simply creating new parks, however, is not always the straightforward solution it appears to be.

The difficulty is that improving a neighbourhood can sometimes harm the very people it was meant to help. When a run-down area is given an attractive new park, the district often becomes more desirable, property prices and rents rise, and the long-standing residents may eventually be priced out and forced to move elsewhere, a process that researchers have labelled green gentrification. The lesson, according to the writer, is not that cities should stop building parks, but that new green spaces must be planned hand in hand with policies that protect affordable housing, so that existing communities can actually remain to enjoy them.

**Designing the green city**

Looking ahead, planners are exploring imaginative ways to weave nature back into the dense fabric of the modern city. Where there is no room to create a park at street level, gardens can be planted on rooftops, and walls can be clothed in climbing plants. Disused industrial sites, such as old railway lines, have in several cities been transformed into elevated parks that have proved enormously popular. None of these measures, the writer cautions, can substitute for large, genuinely accessible public parks, but together they suggest that even the most crowded city need not be a place without nature. The challenge for the coming century, the writer concludes, will be to ensure that the green city is not a privilege for the few but a reality for all.`;

// ═══════════════════════════════════════════════════════════════
// FULL TEST DATA
// ═══════════════════════════════════════════════════════════════

const readingTest27 = {
    testId: "READING_AC_027",
    testNumber: 27,
    testType: "academic" as const,
    title: "Reading Mock Test 27 - Academic",
    description: "IELTS Academic Reading Test featuring passages on The Human Microbiome, The Silk Road, and Urban Green Spaces",
    source: "IELTS Academic Practice",
    difficulty: "medium" as const,
    isActive: true,
    duration: 60,
    totalQuestions: 40,
    totalMarks: 40,
    sections: [
        // ╔═══════════════════════════════════════════════════════════╗
        // ║  SECTION 1: THE HUMAN MICROBIOME (Questions 1-13)       ║
        // ╚═══════════════════════════════════════════════════════════╝
        {
            sectionNumber: 1,
            title: "The Human Microbiome",
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
                        { numeral: "i", text: "How the community is first established" },
                        { numeral: "ii", text: "A solution to the problem of investigation" },
                        { numeral: "iii", text: "The work the microbes do for us" },
                        { numeral: "iv", text: "Diversity, imbalance and links to disease" },
                        { numeral: "v", text: "The pressures of contemporary living" },
                        { numeral: "vi", text: "New possibilities for treatment" },
                        { numeral: "vii", text: "The cost of producing light" },
                        { numeral: "viii", text: "An overlooked part of ourselves" },
                        { numeral: "ix", text: "A comparison of different species" },
                        { numeral: "x", text: "How microbes cause infection" },
                    ],
                    paragraphOptions: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"],
                    exampleItems: [
                        { text: "Paragraph A", answer: "viii" },
                    ],
                    matchingItems: [
                        { questionNumber: 1, text: "Paragraph B", correctAnswer: "ii" },
                        { questionNumber: 2, text: "Paragraph C", correctAnswer: "iii" },
                        { questionNumber: 3, text: "Paragraph D", correctAnswer: "i" },
                        { questionNumber: 4, text: "Paragraph E", correctAnswer: "iv" },
                        { questionNumber: 5, text: "Paragraph F", correctAnswer: "v" },
                        { questionNumber: 6, text: "Paragraph G", correctAnswer: "vi" },
                    ],
                },
                // ── Q7-10: SUMMARY COMPLETION (ONE WORD ONLY) ──
                {
                    groupType: "summary-completion",
                    startQuestion: 7,
                    endQuestion: 10,
                    mainInstruction: "Complete the summary below.",
                    subInstruction: "Choose ONE WORD ONLY from the passage for each answer. Write your answers in boxes 7-10 on your answer sheet.",
                    mainHeading: "What the gut bacteria do",
                    summarySegments: [
                        { type: "text", content: "The bacteria living in the gut perform several valuable tasks. They help to break down parts of our" },
                        { type: "blank", questionNumber: 7, correctAnswer: "food" },
                        { type: "text", content: "that the body cannot digest by itself, and they make certain" },
                        { type: "blank", questionNumber: 8, correctAnswer: "vitamins" },
                        { type: "text", content: "that we are unable to produce in sufficient amounts. They also help to train the" },
                        { type: "blank", questionNumber: 9, correctAnswer: "immune" },
                        { type: "text", content: "system, so that it learns to ignore harmless substances while still attacking genuine" },
                        { type: "blank", questionNumber: 10, correctAnswer: "threats" },
                        { type: "text", content: "." },
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
                        { questionNumber: 11, text: "Most of the microbes that live inside the human body can easily be grown in a laboratory.", correctAnswer: "FALSE" },
                        { questionNumber: 12, text: "A baby born by surgery acquires different microbes from one born naturally.", correctAnswer: "TRUE" },
                        { questionNumber: 13, text: "The supplements containing live bacteria that some companies sell are available in most pharmacies.", correctAnswer: "NOT GIVEN" },
                    ],
                },
            ],
            questions: [
                // Matching Headings (Q1-6)
                { questionNumber: 1, questionType: "matching-headings", questionText: "Paragraph B", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "ii", marks: 1 },
                { questionNumber: 2, questionType: "matching-headings", questionText: "Paragraph C", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "iii", marks: 1 },
                { questionNumber: 3, questionType: "matching-headings", questionText: "Paragraph D", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "i", marks: 1 },
                { questionNumber: 4, questionType: "matching-headings", questionText: "Paragraph E", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "iv", marks: 1 },
                { questionNumber: 5, questionType: "matching-headings", questionText: "Paragraph F", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "v", marks: 1 },
                { questionNumber: 6, questionType: "matching-headings", questionText: "Paragraph G", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "vi", marks: 1 },
                // Summary Completion (Q7-10)
                { questionNumber: 7, questionType: "summary-completion", questionText: "break down parts of our __________ that the body cannot digest", correctAnswer: "food", acceptableAnswers: ["food"], marks: 1 },
                { questionNumber: 8, questionType: "summary-completion", questionText: "they make certain __________ that we are unable to produce", correctAnswer: "vitamins", acceptableAnswers: ["vitamins"], marks: 1 },
                { questionNumber: 9, questionType: "summary-completion", questionText: "help to train the __________ system", correctAnswer: "immune", acceptableAnswers: ["immune"], marks: 1 },
                { questionNumber: 10, questionType: "summary-completion", questionText: "while still attacking genuine __________", correctAnswer: "threats", acceptableAnswers: ["threats"], marks: 1 },
                // True/False/Not Given (Q11-13)
                { questionNumber: 11, questionType: "true-false-not-given", questionText: "Most of the microbes that live inside the human body can easily be grown in a laboratory.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE", marks: 1 },
                { questionNumber: 12, questionType: "true-false-not-given", questionText: "A baby born by surgery acquires different microbes from one born naturally.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE", marks: 1 },
                { questionNumber: 13, questionType: "true-false-not-given", questionText: "The supplements containing live bacteria that some companies sell are available in most pharmacies.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "NOT GIVEN", marks: 1 },
            ],
        },

        // ╔═══════════════════════════════════════════════════════════╗
        // ║  SECTION 2: THE SILK ROAD (Questions 14-26)             ║
        // ╚═══════════════════════════════════════════════════════════╝
        {
            sectionNumber: 2,
            title: "The Silk Road",
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
                        { questionNumber: 14, text: "the spread of a deadly disease along the trade routes", correctAnswer: "E" },
                        { questionNumber: 15, text: "an explanation of how the network came to be named", correctAnswer: "A" },
                        { questionNumber: 16, text: "a reference to a mistaken belief about how a product was made", correctAnswer: "B" },
                        { questionNumber: 17, text: "the reason goods became very costly by the end of their journey", correctAnswer: "C" },
                        { questionNumber: 18, text: "the effect of sea travel on the overland routes", correctAnswer: "G" },
                        { questionNumber: 19, text: "the dangers that merchants faced while travelling", correctAnswer: "F" },
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
                            questionText: "According to the passage, the Romans valued Chinese silk because of",
                            options: [
                                { letter: "A", text: "its low price." },
                                { letter: "B", text: "its strength and durability." },
                                { letter: "C", text: "its lightness and shimmer." },
                                { letter: "D", text: "the ease with which it could be made." },
                            ],
                            correctAnswer: "C",
                        },
                        {
                            questionNumber: 21,
                            questionText: "The passage states that most goods on the Silk Road were",
                            options: [
                                { letter: "A", text: "carried the whole way by a single merchant." },
                                { letter: "B", text: "passed on in stages from one trader to the next." },
                                { letter: "C", text: "transported mainly by sea." },
                                { letter: "D", text: "sold only in the city of Samarkand." },
                            ],
                            correctAnswer: "B",
                        },
                        {
                            questionNumber: 22,
                            questionText: "What does the passage say about Buddhism?",
                            options: [
                                { letter: "A", text: "It was carried from India into China." },
                                { letter: "B", text: "It was spread mainly by soldiers." },
                                { letter: "C", text: "It replaced Islam across Central Asia." },
                                { letter: "D", text: "It travelled only from west to east." },
                            ],
                            correctAnswer: "A",
                        },
                        {
                            questionNumber: 23,
                            questionText: "According to the passage, trade along the routes flowed most freely when",
                            options: [
                                { letter: "A", text: "the weather in the mountains was mild." },
                                { letter: "B", text: "a single strong power kept the roads secure." },
                                { letter: "C", text: "merchants travelled without any goods." },
                                { letter: "D", text: "sea routes to Asia had been discovered." },
                            ],
                            correctAnswer: "B",
                        },
                    ],
                },
                // ── Q24-26: SHORT ANSWER ──
                {
                    groupType: "short-answer",
                    startQuestion: 24,
                    endQuestion: 26,
                    mainInstruction: "Answer the questions below.",
                    subInstruction: "Choose NO MORE THAN THREE WORDS from the passage for each answer. Write your answers in boxes 24-26 on your answer sheet.",
                    questions: [
                        { questionNumber: 24, questionText: "In what form did the Romans pay for the silk they bought?", correctAnswer: "gold and silver" },
                        { questionNumber: 25, questionText: "Which religion followed the same paths as Buddhism across Central Asia?", correctAnswer: "Islam" },
                        { questionNumber: 26, questionText: "Which Venetian traveller journeyed across Asia during the Mongol empire?", correctAnswer: "Marco Polo" },
                    ],
                },
            ],
            questions: [
                // Matching Information (Q14-19)
                { questionNumber: 14, questionType: "matching-information", questionText: "the spread of a deadly disease along the trade routes", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "E", marks: 1 },
                { questionNumber: 15, questionType: "matching-information", questionText: "an explanation of how the network came to be named", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "A", marks: 1 },
                { questionNumber: 16, questionType: "matching-information", questionText: "a reference to a mistaken belief about how a product was made", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "B", marks: 1 },
                { questionNumber: 17, questionType: "matching-information", questionText: "the reason goods became very costly by the end of their journey", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "C", marks: 1 },
                { questionNumber: 18, questionType: "matching-information", questionText: "the effect of sea travel on the overland routes", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "G", marks: 1 },
                { questionNumber: 19, questionType: "matching-information", questionText: "the dangers that merchants faced while travelling", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "F", marks: 1 },
                // Multiple Choice (Q20-23)
                { questionNumber: 20, questionType: "multiple-choice-full", questionText: "According to the passage, the Romans valued Chinese silk because of", correctAnswer: "C", marks: 1 },
                { questionNumber: 21, questionType: "multiple-choice-full", questionText: "The passage states that most goods on the Silk Road were", correctAnswer: "B", marks: 1 },
                { questionNumber: 22, questionType: "multiple-choice-full", questionText: "What does the passage say about Buddhism?", correctAnswer: "A", marks: 1 },
                { questionNumber: 23, questionType: "multiple-choice-full", questionText: "According to the passage, trade along the routes flowed most freely when", correctAnswer: "B", marks: 1 },
                // Short Answer (Q24-26)
                { questionNumber: 24, questionType: "short-answer", questionText: "In what form did the Romans pay for the silk they bought?", correctAnswer: "gold and silver", acceptableAnswers: ["gold and silver"], marks: 1 },
                { questionNumber: 25, questionType: "short-answer", questionText: "Which religion followed the same paths as Buddhism across Central Asia?", correctAnswer: "Islam", acceptableAnswers: ["Islam"], marks: 1 },
                { questionNumber: 26, questionType: "short-answer", questionText: "Which Venetian traveller journeyed across Asia during the Mongol empire?", correctAnswer: "Marco Polo", acceptableAnswers: ["Marco Polo"], marks: 1 },
            ],
        },

        // ╔═══════════════════════════════════════════════════════════╗
        // ║  SECTION 3: URBAN GREEN SPACES (Questions 27-40)        ║
        // ╚═══════════════════════════════════════════════════════════╝
        {
            sectionNumber: 3,
            title: "Urban Green Spaces",
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
                            questionText: "In the first paragraph, the writer says that urban green spaces are now seen as",
                            options: [
                                { letter: "A", text: "luxuries that only wealthy cities can afford." },
                                { letter: "B", text: "necessities rather than luxuries." },
                                { letter: "C", text: "less important than they once were." },
                                { letter: "D", text: "a feature of the countryside alone." },
                            ],
                            correctAnswer: "B",
                        },
                        {
                            questionNumber: 28,
                            questionText: "According to the passage, the urban heat island effect describes the fact that",
                            options: [
                                { letter: "A", text: "parks are warmer than the buildings around them." },
                                { letter: "B", text: "cities tend to be warmer than the surrounding countryside." },
                                { letter: "C", text: "heatwaves are becoming less frequent." },
                                { letter: "D", text: "soil and plants increase the risk of flooding." },
                            ],
                            correctAnswer: "B",
                        },
                        {
                            questionNumber: 29,
                            questionText: "The study mentioned in the third paragraph found that hospital patients with a view of trees",
                            options: [
                                { letter: "A", text: "recovered more quickly and needed less pain medication." },
                                { letter: "B", text: "stayed in hospital for longer than other patients." },
                                { letter: "C", text: "preferred to look out onto a brick wall." },
                                { letter: "D", text: "reported higher levels of stress." },
                            ],
                            correctAnswer: "A",
                        },
                        {
                            questionNumber: 30,
                            questionText: "What does the passage say about the way green space is distributed in many cities?",
                            options: [
                                { letter: "A", text: "Poorer neighbourhoods usually have the most greenery." },
                                { letter: "B", text: "It is shared equally among all districts." },
                                { letter: "C", text: "Wealthier districts tend to be greener than poorer ones." },
                                { letter: "D", text: "Only the centre of the city has any parks." },
                            ],
                            correctAnswer: "C",
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
                        { questionNumber: 31, text: "The evidence for the health benefits of urban nature is now too strong to ignore.", correctAnswer: "YES" },
                        { questionNumber: 32, text: "The unequal distribution of green space is unjust.", correctAnswer: "YES" },
                        { questionNumber: 33, text: "Cities should stop building new parks altogether.", correctAnswer: "NO" },
                        { questionNumber: 34, text: "Rooftop gardens are more expensive to maintain than parks at street level.", correctAnswer: "NOT GIVEN" },
                        { questionNumber: 35, text: "Smaller green features can fully replace large public parks.", correctAnswer: "NO" },
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
                        { letter: "A", text: "trap dust and improve the quality of the air." },
                        { letter: "B", text: "can lower the temperature of a neighbourhood by several degrees." },
                        { letter: "C", text: "may force long-standing residents to move away." },
                        { letter: "D", text: "are always cheaper than building new parks." },
                        { letter: "E", text: "are found mainly in poorer districts." },
                    ],
                    matchingItems: [
                        { questionNumber: 36, text: "The leaves of trees and other plants", correctAnswer: "A" },
                        { questionNumber: 37, text: "A single large park", correctAnswer: "B" },
                        { questionNumber: 38, text: "Rising property prices caused by a new park", correctAnswer: "C" },
                    ],
                },
                // ── Q39-40: SUMMARY WITH OPTIONS (A-F word list) ──
                {
                    groupType: "summary-with-options",
                    startQuestion: 39,
                    endQuestion: 40,
                    mainInstruction: "Complete the summary using the list of words, A-F, below.",
                    subInstruction: "Write the correct letter, A-F, in boxes 39-40 on your answer sheet.",
                    mainHeading: "Designing the green city",
                    phraseList: [
                        { letter: "A", text: "rooftops" },
                        { letter: "B", text: "deserts" },
                        { letter: "C", text: "factories" },
                        { letter: "D", text: "railway lines" },
                        { letter: "E", text: "windows" },
                        { letter: "F", text: "drains" },
                    ],
                    summarySegments: [
                        { type: "text", content: "Where there is no space at street level, planners suggest creating gardens on" },
                        { type: "blank", questionNumber: 39, correctAnswer: "A" },
                        { type: "text", content: ". In several cities, disused industrial sites such as old" },
                        { type: "blank", questionNumber: 40, correctAnswer: "D" },
                        { type: "text", content: "have been turned into popular elevated parks." },
                    ],
                },
            ],
            questions: [
                // Multiple Choice (Q27-30)
                { questionNumber: 27, questionType: "multiple-choice-full", questionText: "In the first paragraph, the writer says that urban green spaces are now seen as", correctAnswer: "B", marks: 1 },
                { questionNumber: 28, questionType: "multiple-choice-full", questionText: "According to the passage, the urban heat island effect describes the fact that", correctAnswer: "B", marks: 1 },
                { questionNumber: 29, questionType: "multiple-choice-full", questionText: "The study mentioned in the third paragraph found that hospital patients with a view of trees", correctAnswer: "A", marks: 1 },
                { questionNumber: 30, questionType: "multiple-choice-full", questionText: "What does the passage say about the way green space is distributed in many cities?", correctAnswer: "C", marks: 1 },
                // Yes/No/Not Given (Q31-35)
                { questionNumber: 31, questionType: "yes-no-not-given", questionText: "The evidence for the health benefits of urban nature is now too strong to ignore.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "YES", marks: 1 },
                { questionNumber: 32, questionType: "yes-no-not-given", questionText: "The unequal distribution of green space is unjust.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "YES", marks: 1 },
                { questionNumber: 33, questionType: "yes-no-not-given", questionText: "Cities should stop building new parks altogether.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NO", marks: 1 },
                { questionNumber: 34, questionType: "yes-no-not-given", questionText: "Rooftop gardens are more expensive to maintain than parks at street level.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NOT GIVEN", marks: 1 },
                { questionNumber: 35, questionType: "yes-no-not-given", questionText: "Smaller green features can fully replace large public parks.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NO", marks: 1 },
                // Matching Features / Sentence Endings (Q36-38)
                { questionNumber: 36, questionType: "matching-features", questionText: "The leaves of trees and other plants", options: ["A", "B", "C", "D", "E"], correctAnswer: "A", marks: 1 },
                { questionNumber: 37, questionType: "matching-features", questionText: "A single large park", options: ["A", "B", "C", "D", "E"], correctAnswer: "B", marks: 1 },
                { questionNumber: 38, questionType: "matching-features", questionText: "Rising property prices caused by a new park", options: ["A", "B", "C", "D", "E"], correctAnswer: "C", marks: 1 },
                // Summary with Options (Q39-40)
                { questionNumber: 39, questionType: "summary-with-options", questionText: "creating gardens on __________", options: ["A", "B", "C", "D", "E", "F"], correctAnswer: "A", marks: 1 },
                { questionNumber: 40, questionType: "summary-with-options", questionText: "disused industrial sites such as old __________", options: ["A", "B", "C", "D", "E", "F"], correctAnswer: "D", marks: 1 },
            ],
        },
    ],
};

// ═══════════════════════════════════════════════════════════════
// SEED FUNCTION
// ═══════════════════════════════════════════════════════════════

async function seedReadingTest27() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log("Connected to MongoDB");

        const existing = await ReadingTest.findOne({ testId: readingTest27.testId });
        if (existing) {
            await ReadingTest.findByIdAndUpdate(existing._id, readingTest27);
            console.log("✅ Reading Test 27 UPDATED successfully!");
        } else {
            const admin = await User.findOne({ role: "admin" });
            if (!admin) {
                console.log("❌ Admin user not found!");
                process.exit(1);
            }
            await ReadingTest.create({ ...readingTest27, createdBy: admin._id });
            console.log("✅ Reading Test 27 CREATED successfully!");
        }

        // Verify
        const verify = await ReadingTest.findOne({ testId: readingTest27.testId });
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

seedReadingTest27();
