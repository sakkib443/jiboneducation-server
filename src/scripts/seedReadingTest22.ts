/**
 * Seed Script: Academic Reading Mock Test 22
 * Run: npx ts-node-dev --transpile-only src/scripts/seedReadingTest22.ts
 *
 * Original passages (generated, fully answered):
 *   1 - How Animals Find Their Way (Q1-13)
 *   2 - The Story of Chocolate (Q14-26)
 *   3 - The Science of Habit Formation (Q27-40)
 *
 * Built per READING_NEW_TEST_PLAYBOOK.md - dual storage (questionGroups + flat questions),
 * full answer keys, 13+13+14 split, premium type mix.
 */

import mongoose from "mongoose";
import { ReadingTest } from "../app/modules/reading/reading.model";
import { User } from "../app/modules/user/user.model";
import config from "../app/config";

// ═══════════════════════════════════════════════════════════════
// PASSAGE 1: HOW ANIMALS FIND THEIR WAY (labeled A-G for matching-headings)
// ═══════════════════════════════════════════════════════════════

const passage1Text = `A Each year, all over the planet, countless animals undertake journeys of astonishing length and precision. Arctic terns fly from one end of the Earth to the other and back again, salmon return from the open ocean to the very stream in which they were born, and monarch butterflies travel thousands of kilometres to a forest that none of them has ever seen. These journeys, known as migrations, allow animals to find food, escape harsh weather and reproduce in safe surroundings. Yet they raise a question that has puzzled people for centuries: how do creatures with such small brains, and without any of the maps or instruments that humans rely on, manage to find their way across enormous distances?

B Part of the answer lies in the sun. Many animals use the position of the sun in the sky as a kind of compass, working out which direction to travel from the angle at which its light falls. The difficulty with this method is that the sun is constantly moving across the sky as the day passes, so a fixed angle would point in a different direction in the morning than it does in the afternoon. To solve this problem, these animals possess what scientists call an internal clock, a built-in sense of the time of day that allows them to correct for the sun's movement and keep travelling in a steady direction. Honeybees, for example, are able to communicate the location of food to other members of the hive by referring to the sun's position, adjusting their information as the hours go by.

C For creatures that travel at night, the sun is of no use, and so they turn instead to the stars. In a famous series of experiments, a researcher placed migratory birds inside a planetarium, a domed theatre in which patterns of artificial stars can be projected onto the ceiling. When the projected sky was rotated, the birds changed the direction in which they tried to fly, proving that they were steering by the stars overhead. Remarkably, the birds did not appear to rely on any single star but on the overall pattern of the night sky, and in particular on the point around which the stars seem to turn, which indicates the direction of true north.

D Perhaps the most mysterious of all the navigational senses is the ability to detect the Earth's magnetic field. Our planet behaves like an enormous magnet, and its field provides a reliable source of directional information that does not change with the time of day or the weather. A wide range of animals, including birds, sea turtles and certain fish, appear able to sense this field and use it to find their way. Exactly how they do so is still debated. One leading theory suggests that tiny crystals of a magnetic mineral in their bodies act like the needle of a compass; another proposes that a special chemical reaction in the eye, triggered by light, allows some birds quite literally to see the magnetic field as a pattern laid over their vision.

E Closer to their destination, animals frequently switch to clues provided by their immediate surroundings. Salmon offer one of the most striking examples. After spending years feeding in the ocean, an adult salmon returns to breed in the exact river of its birth, and it does so largely by smell. As a young fish, it memorises the unique chemical signature of its home stream, and years later it follows this remembered scent upriver, distinguishing its native waters from the countless other streams it passes. Other animals rely on sight, steering by coastlines, mountain ranges, rivers and other landmarks in much the way that a human traveller might.

F It is now clear that no single sense can account for these feats of navigation. Instead, most migrating animals appear to carry several different systems at once, drawing on whichever is most useful at a given moment. A bird crossing an ocean might rely on its magnetic sense when the sky is hidden by cloud, switch to the sun or stars when they become visible, and finally use familiar landmarks as it nears the place where it will rest. This combination provides a valuable backup: if one method fails, another can take its place, which helps to explain why animal navigation is so extraordinarily reliable.

G Despite decades of patient study, much about animal navigation remains a mystery, and researchers continue to make surprising discoveries. There is growing concern, however, that human activity may be making these ancient journeys more difficult. The bright lights of cities can draw migrating birds off course, while artificial structures and changes to the landscape remove the landmarks on which animals depend. Some scientists also worry that the electromagnetic signals produced by modern technology may interfere with the magnetic sense that so many species rely on. Understanding how animals find their way, they argue, is not merely a scientific curiosity but an essential step towards protecting the great migrations that have continued for millions of years.`;

// ═══════════════════════════════════════════════════════════════
// PASSAGE 2: THE STORY OF CHOCOLATE (labeled A-G for matching-information)
// ═══════════════════════════════════════════════════════════════

const passage2Text = `A The story of chocolate begins not with a sweet bar but with a bitter drink, and not in Europe but in the tropical forests of Central America. There the cacao tree grows wild, producing large pods filled with seeds, or beans, surrounded by a sweet white pulp. More than three thousand years ago the peoples of the region, among them the Maya and later the Aztecs, learned to ferment, dry and roast these beans before grinding them into a paste. From this paste they prepared a frothy drink, often flavoured with chilli, maize and spices, that bore little resemblance to the chocolate we know today.

B For these ancient civilisations chocolate was far more than a pleasant beverage. The drink was reserved largely for priests, nobles and warriors, and it played an important part in religious ceremonies and royal feasts. The Aztecs valued the cacao bean so highly that they used it as a form of money: historical records show that goods and even taxes could be paid in beans, and a single bean was enough to buy a small item at market. Because the cacao tree could not be grown in the dry highlands where the Aztec capital stood, the beans had to be brought in from warmer regions as tribute, which only increased their prestige.

C Chocolate reached Europe in the sixteenth century, carried back across the Atlantic by Spanish explorers who had encountered it in the Americas. At first the bitter drink was not to European taste, but once it was sweetened with sugar and flavoured with vanilla or cinnamon it quickly became fashionable. For more than a century Spain managed to keep the new luxury largely to itself, but eventually knowledge of chocolate spread, and elegant chocolate houses, where the wealthy gathered to drink and talk, opened in cities such as London and Paris. Throughout this period chocolate remained an expensive product enjoyed almost exclusively by the rich.

D For most of its history chocolate was consumed as a drink, and turning it into a solid food that could be eaten proved a considerable challenge. The difficulty lay in the cocoa bean's high content of fat, known as cocoa butter, which made early attempts at solid chocolate coarse and greasy. The breakthrough came in 1828, when a Dutch chemist named Coenraad van Houten invented a press capable of squeezing much of the cocoa butter out of the roasted beans. The dry powder that remained could be easily mixed with liquids, and the extracted cocoa butter could later be added back to other ingredients to create a smooth, mouldable paste.

E Van Houten's invention opened the way for the chocolate bar. In 1847 the British firm of Fry and Sons combined cocoa powder, sugar and melted cocoa butter to produce the first chocolate that was designed to be eaten rather than drunk. A few decades later, in Switzerland, two further advances transformed the product. Daniel Peter found a way to add milk to chocolate, creating the milk chocolate that remains popular today, while Rodolphe Lindt developed a process called conching, in which the chocolate is slowly mixed and warmed for many hours until it becomes wonderfully smooth on the tongue. Together these innovations turned chocolate into the soft, melting treat that consumers around the world recognise.

F As manufacturing methods improved and costs fell, chocolate was gradually transformed from a luxury for the few into an everyday pleasure for the many. By the early twentieth century large companies were producing chocolate bars on an enormous scale, and clever advertising and attractive packaging helped to make particular brands familiar in households everywhere. Once a drink fit for emperors and priests, chocolate had become an affordable treat that almost anyone could buy, and it found its way into celebrations, festivals and daily life across the globe.

G The popularity of chocolate today raises serious questions, however, for the cacao tree still grows only in a narrow band of hot, humid countries near the equator. Most of the world's cocoa is now produced in West Africa, frequently on small farms where growers earn very little for their crop. In recent years concern has also grown about the use of child labour on some plantations and about the destruction of rainforest to make way for new ones. As a result, an increasing number of shoppers look for chocolate that has been produced fairly and sustainably, in the hope that this ancient food can be enjoyed without harm to the people who grow it or to the natural world.`;

// ═══════════════════════════════════════════════════════════════
// PASSAGE 3: THE SCIENCE OF HABIT FORMATION (continuous + bold sub-headings)
// ═══════════════════════════════════════════════════════════════

const passage3Text = `From the moment we wake until the moment we fall asleep, much of what we do is governed not by conscious decision but by habit. We reach for a toothbrush, take the same route to work and check our telephones without ever really choosing to. Researchers estimate that something close to half of our daily actions are carried out in this automatic way. Far from being a flaw, this tendency is one of the brain's most useful tricks: by converting repeated behaviours into habits, the mind frees itself from the exhausting effort of deciding everything afresh, leaving its limited powers of attention for problems that genuinely require thought.

**How a habit takes shape**

At the centre of the modern understanding of habit lies a simple three-part pattern, which the journalist Charles Duhigg has popularised as the habit loop. First comes a cue, a trigger that tells the brain to switch into automatic mode and which behaviour to use. The cue is followed by the routine, the action itself, which may be physical, mental or emotional. Finally there is the reward, the benefit the brain gains from the behaviour, which helps it decide whether this particular loop is worth remembering for the future. Over time, as the loop is repeated, the three elements become so tightly linked that the cue alone is enough to set the whole sequence in motion, almost without our noticing.

Much of this process takes place in a small, ancient structure deep within the brain called the basal ganglia. While the conscious, decision-making parts of the brain fall quiet once a behaviour has become routine, the basal ganglia continue to store and run the pattern. This is why a habit, once formed, can be carried out while the mind is occupied elsewhere, and it explains the curious fact that people who have lost the ability to form new memories can still learn new habits perfectly well.

**The role of reward and craving**

A cue and a routine are not enough on their own to create a lasting habit; the crucial ingredient is the reward, and in particular the craving that the reward produces. Researchers have found that as a habit takes hold, the pleasure associated with the reward begins to arrive earlier, shifting from the moment the reward is received to the moment the cue appears. In other words, the brain starts to anticipate the reward as soon as it detects the cue, and it is this feeling of anticipation, or craving, that drives us to complete the routine. A person who runs each morning, for example, may come to crave the sense of achievement that follows, and it is the craving, rather than the exercise itself, that pulls them out of bed.

This insight has important consequences for anyone hoping to change their behaviour. Studies suggest that habits are extremely difficult to erase completely; the neural pathways that encode them appear to remain in the brain, ready to be reactivated, long after the behaviour seems to have stopped. This is one reason why people so often slip back into old patterns under stress. Rather than trying to eliminate an unwanted habit altogether, researchers therefore recommend replacing it. According to what some have called the golden rule of habit change, the most effective approach is to keep the old cue and the old reward but to insert a new routine between them.

**Why willpower is not enough**

It is tempting to assume that breaking a bad habit is simply a matter of willpower, but the science suggests otherwise. Because habits operate largely outside conscious awareness, a person may carry out an unwanted routine before they have even registered the cue that set it off, leaving little opportunity for willpower to intervene. This does not mean that change is impossible, but it does mean that the most successful strategies work with the habit loop rather than against it. By identifying the cue that triggers an unwanted behaviour and the reward that sustains it, and then deliberately practising a healthier routine in response to the same cue, people can gradually reshape their automatic behaviour. The process demands patience, but the underlying message is an encouraging one: our habits, though powerful, are not our destiny, and with understanding they can be remade.`;

// ═══════════════════════════════════════════════════════════════
// FULL TEST DATA
// ═══════════════════════════════════════════════════════════════

const readingTest22 = {
    testId: "READING_AC_022",
    testNumber: 22,
    testType: "academic" as const,
    title: "Reading Mock Test 22 - Academic",
    description: "IELTS Academic Reading Test featuring passages on How Animals Find Their Way (animal navigation and migration), The Story of Chocolate, and The Science of Habit Formation",
    source: "IELTS Academic Practice",
    difficulty: "medium" as const,
    isActive: true,
    duration: 60,
    totalQuestions: 40,
    totalMarks: 40,
    sections: [
        // ╔═══════════════════════════════════════════════════════════╗
        // ║  SECTION 1: HOW ANIMALS FIND THEIR WAY (Questions 1-13)  ║
        // ╚═══════════════════════════════════════════════════════════╝
        {
            sectionNumber: 1,
            title: "How Animals Find Their Way",
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
                        { numeral: "i", text: "Finding direction from the sun" },
                        { numeral: "ii", text: "Steering by the night sky" },
                        { numeral: "iii", text: "Sensing the Earth's magnetism" },
                        { numeral: "iv", text: "Using local clues near the journey's end" },
                        { numeral: "v", text: "Combining several methods at once" },
                        { numeral: "vi", text: "Human threats and the need to understand" },
                        { numeral: "vii", text: "The puzzle of long-distance travel" },
                        { numeral: "viii", text: "How instruments help human navigators" },
                        { numeral: "ix", text: "The dangers faced during migration" },
                        { numeral: "x", text: "Why some animals do not migrate" },
                    ],
                    paragraphOptions: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"],
                    exampleItems: [
                        { text: "Paragraph A", answer: "vii" },
                    ],
                    matchingItems: [
                        { questionNumber: 1, text: "Paragraph B", correctAnswer: "i" },
                        { questionNumber: 2, text: "Paragraph C", correctAnswer: "ii" },
                        { questionNumber: 3, text: "Paragraph D", correctAnswer: "iii" },
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
                    mainHeading: "Navigating by the sky",
                    summarySegments: [
                        { type: "text", content: "Many animals use the position of the" },
                        { type: "blank", questionNumber: 7, correctAnswer: "sun" },
                        { type: "text", content: "to work out which way to travel during the day. Because it keeps moving across the sky, they rely on an internal" },
                        { type: "blank", questionNumber: 8, correctAnswer: "clock" },
                        { type: "text", content: "to correct for this movement. Creatures that travel at night cannot use this method, so they steer by the" },
                        { type: "blank", questionNumber: 9, correctAnswer: "stars" },
                        { type: "text", content: "instead. Experiments carried out in a" },
                        { type: "blank", questionNumber: 10, correctAnswer: "planetarium" },
                        { type: "text", content: "showed that birds change direction when the artificial sky above them is rotated." },
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
                        { questionNumber: 11, text: "Scientists fully agree on how animals are able to detect the Earth's magnetic field.", correctAnswer: "FALSE" },
                        { questionNumber: 12, text: "A young salmon learns the smell of the stream where it was born.", correctAnswer: "TRUE" },
                        { questionNumber: 13, text: "Migrating birds find their way more accurately than sea turtles do.", correctAnswer: "NOT GIVEN" },
                    ],
                },
            ],
            questions: [
                // Matching Headings (Q1-6)
                { questionNumber: 1, questionType: "matching-headings", questionText: "Paragraph B", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "i", marks: 1 },
                { questionNumber: 2, questionType: "matching-headings", questionText: "Paragraph C", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "ii", marks: 1 },
                { questionNumber: 3, questionType: "matching-headings", questionText: "Paragraph D", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "iii", marks: 1 },
                { questionNumber: 4, questionType: "matching-headings", questionText: "Paragraph E", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "iv", marks: 1 },
                { questionNumber: 5, questionType: "matching-headings", questionText: "Paragraph F", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "v", marks: 1 },
                { questionNumber: 6, questionType: "matching-headings", questionText: "Paragraph G", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "vi", marks: 1 },
                // Summary Completion (Q7-10)
                { questionNumber: 7, questionType: "summary-completion", questionText: "use the position of the __________ to work out which way to travel", correctAnswer: "sun", acceptableAnswers: ["sun"], marks: 1 },
                { questionNumber: 8, questionType: "summary-completion", questionText: "they rely on an internal __________", correctAnswer: "clock", acceptableAnswers: ["clock"], marks: 1 },
                { questionNumber: 9, questionType: "summary-completion", questionText: "they steer by the __________ instead", correctAnswer: "stars", acceptableAnswers: ["stars"], marks: 1 },
                { questionNumber: 10, questionType: "summary-completion", questionText: "Experiments carried out in a __________", correctAnswer: "planetarium", acceptableAnswers: ["planetarium"], marks: 1 },
                // True/False/Not Given (Q11-13)
                { questionNumber: 11, questionType: "true-false-not-given", questionText: "Scientists fully agree on how animals are able to detect the Earth's magnetic field.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE", marks: 1 },
                { questionNumber: 12, questionType: "true-false-not-given", questionText: "A young salmon learns the smell of the stream where it was born.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE", marks: 1 },
                { questionNumber: 13, questionType: "true-false-not-given", questionText: "Migrating birds find their way more accurately than sea turtles do.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "NOT GIVEN", marks: 1 },
            ],
        },

        // ╔═══════════════════════════════════════════════════════════╗
        // ║  SECTION 2: THE STORY OF CHOCOLATE (Questions 14-26)     ║
        // ╚═══════════════════════════════════════════════════════════╝
        {
            sectionNumber: 2,
            title: "The Story of Chocolate",
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
                        { questionNumber: 14, text: "the use of cacao beans in place of money", correctAnswer: "B" },
                        { questionNumber: 15, text: "modern concerns about how cocoa is produced", correctAnswer: "G" },
                        { questionNumber: 16, text: "an invention that removed fat from the cocoa bean", correctAnswer: "D" },
                        { questionNumber: 17, text: "the way chocolate was first prepared as a drink", correctAnswer: "A" },
                        { questionNumber: 18, text: "the arrival of chocolate in Europe", correctAnswer: "C" },
                        { questionNumber: 19, text: "the creation of the first chocolate intended to be eaten", correctAnswer: "E" },
                    ],
                },
                // ── Q20-23: NOTE COMPLETION (Format B: heading + bullets) ──
                {
                    groupType: "note-completion",
                    startQuestion: 20,
                    endQuestion: 23,
                    mainInstruction: "Complete the notes below.",
                    subInstruction: "Choose ONE WORD ONLY from the passage for each answer. Write your answers in boxes 20-23 on your answer sheet.",
                    mainHeading: "Turning chocolate into a solid food",
                    passage: `The problem\n• Solid chocolate was hard to make because the bean contained too much 20 __________\nVan Houten's press (1828)\n• A 21 __________ chemist invented a press to remove most of this fat\n• The dry 22 __________ that was left could be mixed easily with liquids\nLater advances in Switzerland\n• Daniel Peter added 23 __________ to create a new kind of chocolate\n• Rodolphe Lindt used conching to make chocolate smooth`,
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
                            questionText: "Why did the Aztecs have to bring cacao beans into their capital from elsewhere?",
                            options: [
                                { letter: "A", text: "The local people refused to grow the tree." },
                                { letter: "B", text: "The tree could not grow in the dry highlands." },
                                { letter: "C", text: "The beans grown nearby were of poor quality." },
                                { letter: "D", text: "Trade with warmer regions was forbidden." },
                            ],
                            correctAnswer: "B",
                        },
                        {
                            questionNumber: 25,
                            questionText: "When chocolate first reached Europe, it became fashionable only after it was",
                            options: [
                                { letter: "A", text: "served hot rather than cold." },
                                { letter: "B", text: "made into a solid bar." },
                                { letter: "C", text: "sweetened and flavoured." },
                                { letter: "D", text: "sold in special chocolate houses." },
                            ],
                            correctAnswer: "C",
                        },
                        {
                            questionNumber: 26,
                            questionText: "What does the passage say about chocolate in the early twentieth century?",
                            options: [
                                { letter: "A", text: "It was produced in large quantities by big companies." },
                                { letter: "B", text: "It remained a luxury for wealthy people only." },
                                { letter: "C", text: "It was still drunk more often than it was eaten." },
                                { letter: "D", text: "It was sold without any advertising or packaging." },
                            ],
                            correctAnswer: "A",
                        },
                    ],
                },
            ],
            questions: [
                // Matching Information (Q14-19)
                { questionNumber: 14, questionType: "matching-information", questionText: "the use of cacao beans in place of money", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "B", marks: 1 },
                { questionNumber: 15, questionType: "matching-information", questionText: "modern concerns about how cocoa is produced", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "G", marks: 1 },
                { questionNumber: 16, questionType: "matching-information", questionText: "an invention that removed fat from the cocoa bean", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "D", marks: 1 },
                { questionNumber: 17, questionType: "matching-information", questionText: "the way chocolate was first prepared as a drink", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "A", marks: 1 },
                { questionNumber: 18, questionType: "matching-information", questionText: "the arrival of chocolate in Europe", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "C", marks: 1 },
                { questionNumber: 19, questionType: "matching-information", questionText: "the creation of the first chocolate intended to be eaten", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "E", marks: 1 },
                // Note Completion (Q20-23)
                { questionNumber: 20, questionType: "note-completion", questionText: "the bean contained too much __________", correctAnswer: "fat", acceptableAnswers: ["fat"], marks: 1 },
                { questionNumber: 21, questionType: "note-completion", questionText: "A __________ chemist invented a press", correctAnswer: "Dutch", acceptableAnswers: ["Dutch", "dutch"], marks: 1 },
                { questionNumber: 22, questionType: "note-completion", questionText: "The dry __________ that was left could be mixed easily with liquids", correctAnswer: "powder", acceptableAnswers: ["powder"], marks: 1 },
                { questionNumber: 23, questionType: "note-completion", questionText: "Daniel Peter added __________ to create a new kind of chocolate", correctAnswer: "milk", acceptableAnswers: ["milk"], marks: 1 },
                // Multiple Choice (Q24-26)
                { questionNumber: 24, questionType: "multiple-choice-full", questionText: "Why did the Aztecs have to bring cacao beans into their capital from elsewhere?", correctAnswer: "B", marks: 1 },
                { questionNumber: 25, questionType: "multiple-choice-full", questionText: "When chocolate first reached Europe, it became fashionable only after it was", correctAnswer: "C", marks: 1 },
                { questionNumber: 26, questionType: "multiple-choice-full", questionText: "What does the passage say about chocolate in the early twentieth century?", correctAnswer: "A", marks: 1 },
            ],
        },

        // ╔═══════════════════════════════════════════════════════════╗
        // ║  SECTION 3: THE SCIENCE OF HABIT FORMATION (Q27-40)     ║
        // ╚═══════════════════════════════════════════════════════════╝
        {
            sectionNumber: 3,
            title: "The Science of Habit Formation",
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
                            questionText: "According to the passage, why is the tendency to form habits useful?",
                            options: [
                                { letter: "A", text: "It allows people to remember more facts." },
                                { letter: "B", text: "It saves the brain from constant decision-making." },
                                { letter: "C", text: "It makes people more sociable." },
                                { letter: "D", text: "It improves the memory for past events." },
                            ],
                            correctAnswer: "B",
                        },
                        {
                            questionNumber: 28,
                            questionText: "In the habit loop described by Charles Duhigg, the cue is",
                            options: [
                                { letter: "A", text: "the benefit the brain gains from the action." },
                                { letter: "B", text: "the action that is carried out." },
                                { letter: "C", text: "the trigger that starts the automatic behaviour." },
                                { letter: "D", text: "the memory of a previous reward." },
                            ],
                            correctAnswer: "C",
                        },
                        {
                            questionNumber: 29,
                            questionText: "What does the passage say about the basal ganglia?",
                            options: [
                                { letter: "A", text: "They stop working once a behaviour becomes routine." },
                                { letter: "B", text: "They store and run habits even when the mind is busy elsewhere." },
                                { letter: "C", text: "They are the part of the brain that makes conscious decisions." },
                                { letter: "D", text: "They are damaged in people who cannot form new memories." },
                            ],
                            correctAnswer: "B",
                        },
                        {
                            questionNumber: 30,
                            questionText: "As a habit becomes established, the pleasure linked to the reward",
                            options: [
                                { letter: "A", text: "disappears completely over time." },
                                { letter: "B", text: "begins to be felt when the cue appears." },
                                { letter: "C", text: "becomes weaker than it was at first." },
                                { letter: "D", text: "is felt only after the routine is finished." },
                            ],
                            correctAnswer: "B",
                        },
                        {
                            questionNumber: 31,
                            questionText: "According to the 'golden rule of habit change', the best way to change a habit is to",
                            options: [
                                { letter: "A", text: "remove the cue that triggers it." },
                                { letter: "B", text: "keep the same cue and reward but change the routine." },
                                { letter: "C", text: "replace the reward with a stronger one." },
                                { letter: "D", text: "avoid the situation in which it occurs." },
                            ],
                            correctAnswer: "B",
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
                        { questionNumber: 32, text: "A large proportion of our daily actions are performed automatically.", correctAnswer: "YES" },
                        { questionNumber: 33, text: "Habits can usually be erased completely from the brain.", correctAnswer: "NO" },
                        { questionNumber: 34, text: "Willpower alone is the most reliable way to break a bad habit.", correctAnswer: "NO" },
                        { questionNumber: 35, text: "Younger people find it easier to change their habits than older people do.", correctAnswer: "NOT GIVEN" },
                        { questionNumber: 36, text: "Understanding how the habit loop works can help people change their behaviour.", correctAnswer: "YES" },
                    ],
                },
                // ── Q37-38: CHOOSE TWO LETTERS ──
                {
                    groupType: "choose-two-letters",
                    startQuestion: 37,
                    endQuestion: 38,
                    mainInstruction: "Choose TWO letters, A-E.",
                    subInstruction: "Write the correct letters in boxes 37 and 38 on your answer sheet.",
                    questionSets: [
                        {
                            questionNumbers: [37, 38],
                            questionText: "Which TWO of the following statements about habits does the writer make in the passage?",
                            options: [
                                { letter: "A", text: "People may complete an unwanted routine before noticing its cue." },
                                { letter: "B", text: "Forming a new habit always takes exactly the same amount of time." },
                                { letter: "C", text: "The neural pathways behind a habit can remain ready to be reactivated." },
                                { letter: "D", text: "Habits are impossible to change once they are formed." },
                                { letter: "E", text: "People with strong willpower never develop bad habits." },
                            ],
                            correctAnswers: ["A", "C"],
                        },
                    ],
                },
                // ── Q39-40: MATCHING FEATURES (sentence endings) ──
                {
                    groupType: "matching-features",
                    startQuestion: 39,
                    endQuestion: 40,
                    mainInstruction: "Complete each sentence with the correct ending, A-D, below.",
                    subInstruction: "Write the correct letter, A-D, in boxes 39 and 40 on your answer sheet.",
                    featureListTitle: "Sentence Endings",
                    paragraphOptions: ["A", "B", "C", "D"],
                    featureOptions: [
                        { letter: "A", text: "the craving produced by the reward, rather than the action itself." },
                        { letter: "B", text: "the conscious, decision-making parts of the brain." },
                        { letter: "C", text: "the same cue that triggers the unwanted behaviour." },
                        { letter: "D", text: "the destruction of the old neural pathways." },
                    ],
                    matchingItems: [
                        { questionNumber: 39, text: "What pulls a regular runner out of bed is", correctAnswer: "A" },
                        { questionNumber: 40, text: "To reshape behaviour, a healthier routine should be practised in response to", correctAnswer: "C" },
                    ],
                },
            ],
            questions: [
                // Multiple Choice (Q27-31)
                { questionNumber: 27, questionType: "multiple-choice-full", questionText: "According to the passage, why is the tendency to form habits useful?", correctAnswer: "B", marks: 1 },
                { questionNumber: 28, questionType: "multiple-choice-full", questionText: "In the habit loop described by Charles Duhigg, the cue is", correctAnswer: "C", marks: 1 },
                { questionNumber: 29, questionType: "multiple-choice-full", questionText: "What does the passage say about the basal ganglia?", correctAnswer: "B", marks: 1 },
                { questionNumber: 30, questionType: "multiple-choice-full", questionText: "As a habit becomes established, the pleasure linked to the reward", correctAnswer: "B", marks: 1 },
                { questionNumber: 31, questionType: "multiple-choice-full", questionText: "According to the 'golden rule of habit change', the best way to change a habit is to", correctAnswer: "B", marks: 1 },
                // Yes/No/Not Given (Q32-36)
                { questionNumber: 32, questionType: "yes-no-not-given", questionText: "A large proportion of our daily actions are performed automatically.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "YES", marks: 1 },
                { questionNumber: 33, questionType: "yes-no-not-given", questionText: "Habits can usually be erased completely from the brain.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NO", marks: 1 },
                { questionNumber: 34, questionType: "yes-no-not-given", questionText: "Willpower alone is the most reliable way to break a bad habit.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NO", marks: 1 },
                { questionNumber: 35, questionType: "yes-no-not-given", questionText: "Younger people find it easier to change their habits than older people do.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NOT GIVEN", marks: 1 },
                { questionNumber: 36, questionType: "yes-no-not-given", questionText: "Understanding how the habit loop works can help people change their behaviour.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "YES", marks: 1 },
                // Choose Two Letters (Q37-38)
                { questionNumber: 37, questionType: "choose-two-letters", questionText: "Which TWO of the following statements about habits does the writer make in the passage?", options: ["A", "B", "C", "D", "E"], correctAnswer: "A", marks: 1 },
                { questionNumber: 38, questionType: "choose-two-letters", questionText: "Which TWO of the following statements about habits does the writer make in the passage?", options: ["A", "B", "C", "D", "E"], correctAnswer: "C", marks: 1 },
                // Matching Features / Sentence Endings (Q39-40)
                { questionNumber: 39, questionType: "matching-features", questionText: "What pulls a regular runner out of bed is", options: ["A", "B", "C", "D"], correctAnswer: "A", marks: 1 },
                { questionNumber: 40, questionType: "matching-features", questionText: "To reshape behaviour, a healthier routine should be practised in response to", options: ["A", "B", "C", "D"], correctAnswer: "C", marks: 1 },
            ],
        },
    ],
};

// ═══════════════════════════════════════════════════════════════
// SEED FUNCTION
// ═══════════════════════════════════════════════════════════════

async function seedReadingTest22() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log("Connected to MongoDB");

        const existing = await ReadingTest.findOne({ testId: readingTest22.testId });
        if (existing) {
            await ReadingTest.findByIdAndUpdate(existing._id, readingTest22);
            console.log("✅ Reading Test 22 UPDATED successfully!");
        } else {
            const admin = await User.findOne({ role: "admin" });
            if (!admin) {
                console.log("❌ Admin user not found!");
                process.exit(1);
            }
            await ReadingTest.create({ ...readingTest22, createdBy: admin._id });
            console.log("✅ Reading Test 22 CREATED successfully!");
        }

        // Verify
        const verify = await ReadingTest.findOne({ testId: readingTest22.testId });
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

seedReadingTest22();
