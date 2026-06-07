/**
 * Seed Script: Academic Reading Mock Test 24
 * Run: npx ts-node-dev --transpile-only src/scripts/seedReadingTest24.ts
 *
 * Original passages (generated, fully answered):
 *   1 - Predicting Volcanic Eruptions (Q1-13)
 *   2 - The Domestication of the Horse (Q14-26)
 *   3 - The Rise of Remote Working (Q27-40)
 *
 * Built per READING_NEW_TEST_PLAYBOOK.md - dual storage (questionGroups + flat questions),
 * full answer keys, 13+13+14 split, premium type mix.
 */

import mongoose from "mongoose";
import { ReadingTest } from "../app/modules/reading/reading.model";
import { User } from "../app/modules/user/user.model";
import config from "../app/config";

// ═══════════════════════════════════════════════════════════════
// PASSAGE 1: PREDICTING VOLCANIC ERUPTIONS (labeled A-G for matching-headings)
// ═══════════════════════════════════════════════════════════════

const passage1Text = `A A volcanic eruption is among the most dramatic events the natural world can produce, and throughout history such eruptions have claimed many thousands of lives. The disaster is rarely the fault of the volcano alone, however, but rather of the people who choose to settle close to it, drawn by the rich, fertile soils that volcanic ash leaves behind. The slopes of a volcano can make excellent farmland, and so, generation after generation, communities have returned to live beneath mountains that have destroyed their ancestors. Today an estimated several hundred million people live within reach of an active volcano. For these communities the central question is a simple but difficult one: can scientists tell, with enough warning, when a mountain that has slept for years or even centuries is about to wake?

B The encouraging news is that volcanoes almost never erupt without warning. In the weeks or months before an eruption, a volcano typically passes through a period of unrest during which a number of measurable changes take place. Molten rock, known as magma, rises from deep within the Earth and gathers in a chamber beneath the volcano. As this magma forces its way upwards, it cracks the surrounding rock, makes the ground swell and releases gases. The task facing volcanologists is to detect these signals, to interpret them correctly, and to judge whether they point towards an eruption or will simply fade away.

C The oldest and most reliable of these signals is an increase in earthquakes. As magma pushes through the crust it fractures the rock around it, producing a steady stream of small tremors that are far too weak to be felt by people but are easily recorded by sensitive instruments called seismometers. By placing a network of these instruments around a volcano, scientists can locate the earthquakes precisely and follow the magma as it climbs. A sudden swarm of tremors at shallow depth is one of the clearest indications that an eruption may be approaching, and seismic monitoring remains the foundation of all eruption forecasting.

D A second important clue lies in the shape of the volcano itself. As magma accumulates beneath the surface, it pushes the ground upwards and outwards, causing the whole mountain to swell, sometimes by no more than a few centimetres. Such tiny movements are invisible to the eye, but they can be measured with great accuracy. Instruments called tiltmeters detect the slight tilting of the slopes, while satellites and ground-based receivers using the Global Positioning System track horizontal and vertical shifts to within millimetres. When the surface begins to bulge, scientists know that pressure is building below.

E The gases that escape from a volcano provide a third line of evidence. Magma contains dissolved gases, chiefly water vapour, carbon dioxide and sulphur dioxide, and as it nears the surface these gases are released, much as the gas in a fizzy drink escapes when the bottle is opened. A change in the amount or the composition of the gases emerging from a volcano can therefore reveal that fresh magma is rising. Scientists collect these gases directly at the volcano's vents, a hazardous task, or measure them from a safe distance using aircraft and specialised sensors. A sharp rise in sulphur dioxide, in particular, is often a sign that magma is close to the surface.

F Even when all of these techniques are combined, predicting the precise day and hour of an eruption remains beyond science's reach. A volcano may show every sign of unrest and then fall silent again, in what is called a failed eruption, while another may give very little warning at all. Each volcano has its own character, and the only way to understand it is to study its particular habits over many years. This is why a detailed knowledge of a volcano's past behaviour, pieced together from historical records and from the layers of ash and rock left by earlier eruptions, is so valuable to those who monitor it.

G For all the uncertainty that remains, modern monitoring has already saved countless lives. The eruption of Mount Pinatubo in the Philippines in 1991 was one of the largest of the twentieth century, yet a timely warning allowed the authorities to evacuate tens of thousands of people from the surrounding area before the mountain exploded. In the days before the eruption, scientists had watched the earthquakes intensify and the output of gas climb, and on the strength of these readings they persuaded the authorities to act. Without that warning the loss of life would have been catastrophic. As instruments grow more sensitive and as scientists learn to read the warning signs more skilfully, the hope is that such successes will become ever more common, and that living in the shadow of a volcano will become a great deal safer.`;

// ═══════════════════════════════════════════════════════════════
// PASSAGE 2: THE DOMESTICATION OF THE HORSE (labeled A-G for matching-information)
// ═══════════════════════════════════════════════════════════════

const passage2Text = `A Of all the animals that humans have tamed, few have shaped the course of history as profoundly as the horse. For most of the time that people and horses have shared the planet, the relationship was a simple one: wild horses were hunted for their meat. The bones of horses are found in great numbers at the camps of Stone Age hunters across Europe and Asia, and many of them bear the marks of butchery, showing that for tens of thousands of years the animal was regarded as nothing more than a source of food. Early artists even painted herds of wild horses on the walls of their caves, the very animals they pursued for their dinner. The transformation of the horse from prey into partner was one of the most important turning points in human development, yet it happened so gradually that no one at the time can have been aware of it.

B Pinning down exactly when and where that transformation took place has proved remarkably difficult. The leading view among archaeologists is that horses were first domesticated on the wide grasslands, or steppes, that stretch across what is now Kazakhstan and southern Russia, at some point around five and a half thousand years ago. These open plains were the natural home of the wild horse, and the people who lived there would have had countless opportunities to observe the animals closely and gradually to bring them under control.

C The difficulty for researchers is that the early stages of domestication leave very faint traces. Unlike farming, which leaves behind grain stores and field systems, the taming of an animal may at first change very little that survives in the ground. The bones of an early domestic horse look almost identical to those of its wild cousin, and so archaeologists have had to search for more subtle clues. One of the most ingenious of these is the study of horses' teeth, for a horse that has worn a bit, the metal mouthpiece used to control a ridden animal, develops a distinctive pattern of wear that can still be detected thousands of years later.

D Why did people first take control of horses? It is widely assumed that the animals were ridden from the very beginning, but many scholars believe that the earliest use was probably for milk and meat, with riding coming later. A herd of horses kept close to home would have provided a reliable supply of food on the hoof, far more convenient than hunting wild animals across the open plains. Traces of mare's milk found inside ancient pottery vessels suggest that the people of the steppes were milking their horses at a very early date, long before the animal became chiefly a means of transport.

E Whenever it began, the practice of riding changed human society for ever. A person on horseback could travel several times farther in a day than one on foot, and could move herds of other animals over great distances in search of fresh pasture. Distances that had once taken weeks to cross on foot could now be covered in a matter of days. Communities that had once been isolated were brought into contact, goods and ideas spread more rapidly, and languages and customs were carried across the continent. Some researchers believe that the spread of an entire family of related languages across Europe and Asia was made possible, at least in part, by people who had learned to ride.

F The horse also transformed the conduct of war. Mounted warriors, and later the chariot, gave the peoples who possessed them an overwhelming advantage over those who fought on foot, for they could strike swiftly and withdraw before their enemies could respond. For thousands of years cavalry remained a decisive force on the battlefield, and the rise and fall of empires often turned on the quality of their horses. The military value of the horse ensured that the knowledge of how to breed, train and ride these animals was prized and jealously guarded, and it spread, sometimes through trade and sometimes through conquest, from one society to the next.

G The dominance of the horse lasted until little more than a century ago, when the engine at last began to replace it. For roughly five thousand years, however, the horse was the fastest means of transport available to humankind, the engine of trade, of communication and of war. Few inventions of the modern world have changed human life as completely as this single animal once did, and the debt that civilisation owes to the horse is easy to overlook precisely because it lasted for so very long.`;

// ═══════════════════════════════════════════════════════════════
// PASSAGE 3: THE RISE OF REMOTE WORKING (continuous + bold sub-headings, opinion piece)
// ═══════════════════════════════════════════════════════════════

const passage3Text = `For most of the twentieth century, the idea of work was inseparable from the idea of a particular place. To have a job was to travel each morning to an office or a factory, to spend the day there among colleagues, and to return home in the evening. The rhythm of the working day, and indeed of the whole city, was built around this daily journey to and from a fixed workplace. In the space of just a few years, that long-standing assumption has been overturned. Millions of employees now spend at least part of their week working from home, connected to their colleagues not by a shared building but by a screen. The question that businesses and governments are now wrestling with is whether this change is a temporary disruption or a permanent shift in the way we work.

**The case for working from home**

The advantages claimed for remote working are considerable. For employees, the most obvious benefit is the disappearance of the daily commute, which in large cities can swallow up two hours or more of every day. That time, the argument runs, can be returned to rest, family or exercise, with clear benefits for health and morale. Workers also gain a degree of flexibility that the traditional office could never offer, fitting their hours around the school run or a medical appointment in a way that suits their lives. For employers, too, there are gains to be made: a business that allows staff to work from home can reduce the amount of expensive office space it rents, and can recruit talented people regardless of where they happen to live.

There is also evidence, its supporters say, that working from home need not harm output. A number of studies conducted during the period when offices stood empty found that productivity held steady or even rose, as employees freed from the interruptions of the office were able to concentrate on demanding tasks. The constant flow of interruptions that fills an ordinary working day, the brief questions and impromptu meetings, can make sustained concentration almost impossible, and many workers reported that they accomplished more in a quiet room at home. In my view, this is the single most important finding to emerge from the recent experiment, for it undermines the long-held assumption that employees can only be trusted to work when their managers can see them.

**The hidden costs**

Yet the picture is not wholly positive, and it would be a mistake to imagine that remote working suits everyone or every kind of job. The most serious drawback is the loss of the informal contact that a shared workplace provides. Much of the creativity of an organisation, many would argue, springs from the chance conversations that happen by the coffee machine or in the corridor, the unplanned meetings in which ideas are sparked and problems solved. Such encounters are difficult to reproduce through a screen, and their absence may, over time, make companies less inventive.

Younger workers, in particular, may lose out. Those at the start of their careers learn a great deal simply by being in the same room as more experienced colleagues, absorbing skills and habits that are rarely written down in any manual. Much of this learning happens almost without either party noticing, through a passing remark or the example of how a senior colleague handles a difficult client. A new employee who works alone at home is denied this everyday apprenticeship, and may find that their progress suffers as a result. There is a risk, too, that the boundary between work and private life, already blurred, will disappear altogether, so that employees who never leave the office, because the office is now their home, find it impossible to switch off and gradually burn out.

**A future of compromise**

What, then, is likely to happen? It seems improbable that the office will vanish, as some enthusiasts have predicted, and equally improbable that we shall simply return to the old five-day routine. The most likely outcome, in my judgement, is a hybrid arrangement, in which employees divide their week between home and a central workplace, reserving the office for the tasks, such as collaboration and the training of newcomers, that are best done face to face. Such an arrangement would not be without its difficulties, and managing a workforce that is sometimes present and sometimes not will demand new skills of those in charge. But it offers a sensible balance between the freedom that employees have come to value and the human contact that organisations still need, and it is, I believe, the shape that the future of work will most probably take.`;

// ═══════════════════════════════════════════════════════════════
// FULL TEST DATA
// ═══════════════════════════════════════════════════════════════

const readingTest24 = {
    testId: "READING_AC_024",
    testNumber: 24,
    testType: "academic" as const,
    title: "Reading Mock Test 24 - Academic",
    description: "IELTS Academic Reading Test featuring passages on Predicting Volcanic Eruptions, The Domestication of the Horse, and The Rise of Remote Working",
    source: "IELTS Academic Practice",
    difficulty: "medium" as const,
    isActive: true,
    duration: 60,
    totalQuestions: 40,
    totalMarks: 40,
    sections: [
        // ╔═══════════════════════════════════════════════════════════╗
        // ║  SECTION 1: PREDICTING VOLCANIC ERUPTIONS (Questions 1-13) ║
        // ╚═══════════════════════════════════════════════════════════╝
        {
            sectionNumber: 1,
            title: "Predicting Volcanic Eruptions",
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
                        { numeral: "i", text: "The people who live in danger" },
                        { numeral: "ii", text: "Tracking the movement of the ground" },
                        { numeral: "iii", text: "Reading the warning signs in escaping gas" },
                        { numeral: "iv", text: "The signals that precede an eruption" },
                        { numeral: "v", text: "Why exact prediction is still impossible" },
                        { numeral: "vi", text: "A success that proves the value of monitoring" },
                        { numeral: "vii", text: "Listening for the earthquakes below" },
                        { numeral: "viii", text: "The economic benefits of volcanic soil" },
                        { numeral: "ix", text: "How eruptions are caused" },
                        { numeral: "x", text: "Predicting the size of an eruption" },
                    ],
                    paragraphOptions: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"],
                    exampleItems: [
                        { text: "Paragraph A", answer: "i" },
                    ],
                    matchingItems: [
                        { questionNumber: 1, text: "Paragraph B", correctAnswer: "iv" },
                        { questionNumber: 2, text: "Paragraph C", correctAnswer: "vii" },
                        { questionNumber: 3, text: "Paragraph D", correctAnswer: "ii" },
                        { questionNumber: 4, text: "Paragraph E", correctAnswer: "iii" },
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
                    mainHeading: "Detecting an approaching eruption",
                    summarySegments: [
                        { type: "text", content: "Before an eruption, magma rises and collects in a" },
                        { type: "blank", questionNumber: 7, correctAnswer: "chamber" },
                        { type: "text", content: "beneath the volcano. As it moves upwards it fractures the surrounding rock, producing small" },
                        { type: "blank", questionNumber: 8, correctAnswer: "tremors" },
                        { type: "text", content: "that are recorded by instruments called seismometers. The rising magma also makes the ground" },
                        { type: "blank", questionNumber: 9, correctAnswer: "swell" },
                        { type: "text", content: ", a movement measured by tiltmeters and satellites. Finally, the magma releases" },
                        { type: "blank", questionNumber: 10, correctAnswer: "gases" },
                        { type: "text", content: ", a sharp increase in which can indicate that an eruption is near." },
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
                        { questionNumber: 11, text: "The small earthquakes that occur before an eruption can usually be felt by local people.", correctAnswer: "FALSE" },
                        { questionNumber: 12, text: "A volcano may show signs of unrest and then fail to erupt.", correctAnswer: "TRUE" },
                        { questionNumber: 13, text: "The eruption of Mount Pinatubo was the largest eruption ever recorded.", correctAnswer: "NOT GIVEN" },
                    ],
                },
            ],
            questions: [
                // Matching Headings (Q1-6)
                { questionNumber: 1, questionType: "matching-headings", questionText: "Paragraph B", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "iv", marks: 1 },
                { questionNumber: 2, questionType: "matching-headings", questionText: "Paragraph C", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "vii", marks: 1 },
                { questionNumber: 3, questionType: "matching-headings", questionText: "Paragraph D", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "ii", marks: 1 },
                { questionNumber: 4, questionType: "matching-headings", questionText: "Paragraph E", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "iii", marks: 1 },
                { questionNumber: 5, questionType: "matching-headings", questionText: "Paragraph F", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "v", marks: 1 },
                { questionNumber: 6, questionType: "matching-headings", questionText: "Paragraph G", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "vi", marks: 1 },
                // Summary Completion (Q7-10)
                { questionNumber: 7, questionType: "summary-completion", questionText: "magma rises and collects in a __________ beneath the volcano", correctAnswer: "chamber", acceptableAnswers: ["chamber"], marks: 1 },
                { questionNumber: 8, questionType: "summary-completion", questionText: "fractures the surrounding rock, producing small __________", correctAnswer: "tremors", acceptableAnswers: ["tremors"], marks: 1 },
                { questionNumber: 9, questionType: "summary-completion", questionText: "the rising magma also makes the ground __________", correctAnswer: "swell", acceptableAnswers: ["swell"], marks: 1 },
                { questionNumber: 10, questionType: "summary-completion", questionText: "the magma releases __________", correctAnswer: "gases", acceptableAnswers: ["gases"], marks: 1 },
                // True/False/Not Given (Q11-13)
                { questionNumber: 11, questionType: "true-false-not-given", questionText: "The small earthquakes that occur before an eruption can usually be felt by local people.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE", marks: 1 },
                { questionNumber: 12, questionType: "true-false-not-given", questionText: "A volcano may show signs of unrest and then fail to erupt.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE", marks: 1 },
                { questionNumber: 13, questionType: "true-false-not-given", questionText: "The eruption of Mount Pinatubo was the largest eruption ever recorded.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "NOT GIVEN", marks: 1 },
            ],
        },

        // ╔═══════════════════════════════════════════════════════════╗
        // ║  SECTION 2: THE DOMESTICATION OF THE HORSE (Questions 14-26) ║
        // ╚═══════════════════════════════════════════════════════════╝
        {
            sectionNumber: 2,
            title: "The Domestication of the Horse",
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
                        { questionNumber: 14, text: "a clever method that allows researchers to identify early ridden horses", correctAnswer: "C" },
                        { questionNumber: 15, text: "the suggested location where horses were first brought under control", correctAnswer: "B" },
                        { questionNumber: 16, text: "evidence that early horses were kept for their milk", correctAnswer: "D" },
                        { questionNumber: 17, text: "a reference to horses being hunted for food over a very long period", correctAnswer: "A" },
                        { questionNumber: 18, text: "the military advantage enjoyed by people who fought on horseback", correctAnswer: "F" },
                        { questionNumber: 19, text: "the replacement of the horse by mechanical power", correctAnswer: "G" },
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
                            questionText: "What does the writer say about the relationship between humans and horses for most of their shared history?",
                            options: [
                                { letter: "A", text: "Horses were valued mainly as a source of meat." },
                                { letter: "B", text: "Horses were used chiefly for transport." },
                                { letter: "C", text: "Horses were regarded as sacred animals." },
                                { letter: "D", text: "Horses were rarely encountered by people." },
                            ],
                            correctAnswer: "A",
                        },
                        {
                            questionNumber: 21,
                            questionText: "Why is it difficult for archaeologists to identify the earliest domestic horses?",
                            options: [
                                { letter: "A", text: "No horse bones have survived from that period." },
                                { letter: "B", text: "Their bones look almost the same as those of wild horses." },
                                { letter: "C", text: "Early farmers kept no written records." },
                                { letter: "D", text: "The horses were too few in number." },
                            ],
                            correctAnswer: "B",
                        },
                        {
                            questionNumber: 22,
                            questionText: "According to many scholars, horses were probably first kept in order to provide",
                            options: [
                                { letter: "A", text: "a means of transport." },
                                { letter: "B", text: "animals for warfare." },
                                { letter: "C", text: "milk and meat." },
                                { letter: "D", text: "companionship." },
                            ],
                            correctAnswer: "C",
                        },
                        {
                            questionNumber: 23,
                            questionText: "What does the writer suggest about the effect of riding on human society?",
                            options: [
                                { letter: "A", text: "It made communities more isolated from one another." },
                                { letter: "B", text: "It slowed the movement of goods and ideas." },
                                { letter: "C", text: "It allowed people and goods to travel far greater distances." },
                                { letter: "D", text: "It had little impact beyond the battlefield." },
                            ],
                            correctAnswer: "C",
                        },
                    ],
                },
                // ── Q24-26: SENTENCE COMPLETION (NO MORE THAN TWO WORDS) ──
                {
                    groupType: "sentence-completion",
                    startQuestion: 24,
                    endQuestion: 26,
                    mainInstruction: "Complete the sentences below.",
                    subInstruction: "Choose NO MORE THAN TWO WORDS from the passage for each answer. Write your answers in boxes 24-26 on your answer sheet.",
                    statements: [
                        { questionNumber: 24, text: "Horses were probably first domesticated on the open grasslands, or __________, of central Asia.", correctAnswer: "steppes" },
                        { questionNumber: 25, text: "A horse that has worn a __________ develops a distinctive pattern of wear on its teeth.", correctAnswer: "bit" },
                        { questionNumber: 26, text: "Some researchers link the spread of a whole family of related __________ to the practice of riding.", correctAnswer: "languages" },
                    ],
                },
            ],
            questions: [
                // Matching Information (Q14-19)
                { questionNumber: 14, questionType: "matching-information", questionText: "a clever method that allows researchers to identify early ridden horses", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "C", marks: 1 },
                { questionNumber: 15, questionType: "matching-information", questionText: "the suggested location where horses were first brought under control", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "B", marks: 1 },
                { questionNumber: 16, questionType: "matching-information", questionText: "evidence that early horses were kept for their milk", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "D", marks: 1 },
                { questionNumber: 17, questionType: "matching-information", questionText: "a reference to horses being hunted for food over a very long period", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "A", marks: 1 },
                { questionNumber: 18, questionType: "matching-information", questionText: "the military advantage enjoyed by people who fought on horseback", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "F", marks: 1 },
                { questionNumber: 19, questionType: "matching-information", questionText: "the replacement of the horse by mechanical power", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "G", marks: 1 },
                // Multiple Choice (Q20-23)
                { questionNumber: 20, questionType: "multiple-choice-full", questionText: "What does the writer say about the relationship between humans and horses for most of their shared history?", correctAnswer: "A", marks: 1 },
                { questionNumber: 21, questionType: "multiple-choice-full", questionText: "Why is it difficult for archaeologists to identify the earliest domestic horses?", correctAnswer: "B", marks: 1 },
                { questionNumber: 22, questionType: "multiple-choice-full", questionText: "According to many scholars, horses were probably first kept in order to provide", correctAnswer: "C", marks: 1 },
                { questionNumber: 23, questionType: "multiple-choice-full", questionText: "What does the writer suggest about the effect of riding on human society?", correctAnswer: "C", marks: 1 },
                // Sentence Completion (Q24-26)
                { questionNumber: 24, questionType: "sentence-completion", questionText: "Horses were probably first domesticated on the open grasslands, or __________, of central Asia.", correctAnswer: "steppes", acceptableAnswers: ["steppes"], marks: 1 },
                { questionNumber: 25, questionType: "sentence-completion", questionText: "A horse that has worn a __________ develops a distinctive pattern of wear on its teeth.", correctAnswer: "bit", acceptableAnswers: ["bit", "a bit"], marks: 1 },
                { questionNumber: 26, questionType: "sentence-completion", questionText: "Some researchers link the spread of a whole family of related __________ to the practice of riding.", correctAnswer: "languages", acceptableAnswers: ["languages"], marks: 1 },
            ],
        },

        // ╔═══════════════════════════════════════════════════════════╗
        // ║  SECTION 3: THE RISE OF REMOTE WORKING (Questions 27-40)   ║
        // ╚═══════════════════════════════════════════════════════════╝
        {
            sectionNumber: 3,
            title: "The Rise of Remote Working",
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
                            questionText: "In the first paragraph, the writer says that for most of the twentieth century work was",
                            options: [
                                { letter: "A", text: "closely tied to a particular place." },
                                { letter: "B", text: "carried out mainly from home." },
                                { letter: "C", text: "shared equally between home and office." },
                                { letter: "D", text: "less demanding than it is today." },
                            ],
                            correctAnswer: "A",
                        },
                        {
                            questionNumber: 28,
                            questionText: "Which benefit of remote working for employees does the writer mention first?",
                            options: [
                                { letter: "A", text: "higher rates of pay" },
                                { letter: "B", text: "the end of the daily commute" },
                                { letter: "C", text: "greater job security" },
                                { letter: "D", text: "more frequent promotion" },
                            ],
                            correctAnswer: "B",
                        },
                        {
                            questionNumber: 29,
                            questionText: "According to the writer, what is the most important finding of the recent experiment with remote working?",
                            options: [
                                { letter: "A", text: "that employees prefer working from home" },
                                { letter: "B", text: "that office space is too expensive" },
                                { letter: "C", text: "that workers can be trusted even when unsupervised" },
                                { letter: "D", text: "that commuting is bad for health" },
                            ],
                            correctAnswer: "C",
                        },
                        {
                            questionNumber: 30,
                            questionText: "What does the writer identify as the most serious drawback of remote working?",
                            options: [
                                { letter: "A", text: "the cost of equipping employees' homes" },
                                { letter: "B", text: "the loss of informal contact between colleagues" },
                                { letter: "C", text: "the difficulty of measuring productivity" },
                                { letter: "D", text: "the slower speed of internet connections" },
                            ],
                            correctAnswer: "B",
                        },
                        {
                            questionNumber: 31,
                            questionText: "Why, according to the writer, may younger workers be particularly disadvantaged by working from home?",
                            options: [
                                { letter: "A", text: "They are less skilled with technology." },
                                { letter: "B", text: "They have smaller homes to work in." },
                                { letter: "C", text: "They miss the chance to learn from experienced colleagues." },
                                { letter: "D", text: "They are paid less than older employees." },
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
                        { questionNumber: 32, text: "Allowing staff to work from home can reduce a company's spending on office space.", correctAnswer: "YES" },
                        { questionNumber: 33, text: "The writer believes that the office is likely to disappear completely in the future.", correctAnswer: "NO" },
                        { questionNumber: 34, text: "Remote working is equally suitable for all types of job.", correctAnswer: "NO" },
                        { questionNumber: 35, text: "Most employees would prefer never to return to an office.", correctAnswer: "NOT GIVEN" },
                        { questionNumber: 36, text: "The writer expects a hybrid pattern of work to become the most common arrangement.", correctAnswer: "YES" },
                    ],
                },
                // ── Q37-40: MATCHING FEATURES (sentence endings) ──
                {
                    groupType: "matching-features",
                    startQuestion: 37,
                    endQuestion: 40,
                    mainInstruction: "Complete each sentence with the correct ending, A-F, below.",
                    subInstruction: "Write the correct letter, A-F, in boxes 37-40 on your answer sheet.",
                    featureListTitle: "Sentence Endings",
                    paragraphOptions: ["A", "B", "C", "D", "E", "F"],
                    featureOptions: [
                        { letter: "A", text: "can return that time to rest, family or exercise." },
                        { letter: "B", text: "is best reserved for tasks such as collaboration and training." },
                        { letter: "C", text: "may make companies less inventive over time." },
                        { letter: "D", text: "will demand new skills of managers." },
                        { letter: "E", text: "always produces better results than working in an office." },
                        { letter: "F", text: "can recruit talented people wherever they live." },
                    ],
                    matchingItems: [
                        { questionNumber: 37, text: "An employee who no longer has to commute", correctAnswer: "A" },
                        { questionNumber: 38, text: "An employer who allows staff to work from home", correctAnswer: "F" },
                        { questionNumber: 39, text: "The loss of chance conversations in the workplace", correctAnswer: "C" },
                        { questionNumber: 40, text: "In the writer's view, the central office of the future", correctAnswer: "B" },
                    ],
                },
            ],
            questions: [
                // Multiple Choice (Q27-31)
                { questionNumber: 27, questionType: "multiple-choice-full", questionText: "In the first paragraph, the writer says that for most of the twentieth century work was", correctAnswer: "A", marks: 1 },
                { questionNumber: 28, questionType: "multiple-choice-full", questionText: "Which benefit of remote working for employees does the writer mention first?", correctAnswer: "B", marks: 1 },
                { questionNumber: 29, questionType: "multiple-choice-full", questionText: "According to the writer, what is the most important finding of the recent experiment with remote working?", correctAnswer: "C", marks: 1 },
                { questionNumber: 30, questionType: "multiple-choice-full", questionText: "What does the writer identify as the most serious drawback of remote working?", correctAnswer: "B", marks: 1 },
                { questionNumber: 31, questionType: "multiple-choice-full", questionText: "Why, according to the writer, may younger workers be particularly disadvantaged by working from home?", correctAnswer: "C", marks: 1 },
                // Yes/No/Not Given (Q32-36)
                { questionNumber: 32, questionType: "yes-no-not-given", questionText: "Allowing staff to work from home can reduce a company's spending on office space.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "YES", marks: 1 },
                { questionNumber: 33, questionType: "yes-no-not-given", questionText: "The writer believes that the office is likely to disappear completely in the future.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NO", marks: 1 },
                { questionNumber: 34, questionType: "yes-no-not-given", questionText: "Remote working is equally suitable for all types of job.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NO", marks: 1 },
                { questionNumber: 35, questionType: "yes-no-not-given", questionText: "Most employees would prefer never to return to an office.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NOT GIVEN", marks: 1 },
                { questionNumber: 36, questionType: "yes-no-not-given", questionText: "The writer expects a hybrid pattern of work to become the most common arrangement.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "YES", marks: 1 },
                // Matching Features / Sentence Endings (Q37-40)
                { questionNumber: 37, questionType: "matching-features", questionText: "An employee who no longer has to commute", options: ["A", "B", "C", "D", "E", "F"], correctAnswer: "A", marks: 1 },
                { questionNumber: 38, questionType: "matching-features", questionText: "An employer who allows staff to work from home", options: ["A", "B", "C", "D", "E", "F"], correctAnswer: "F", marks: 1 },
                { questionNumber: 39, questionType: "matching-features", questionText: "The loss of chance conversations in the workplace", options: ["A", "B", "C", "D", "E", "F"], correctAnswer: "C", marks: 1 },
                { questionNumber: 40, questionType: "matching-features", questionText: "In the writer's view, the central office of the future", options: ["A", "B", "C", "D", "E", "F"], correctAnswer: "B", marks: 1 },
            ],
        },
    ],
};

// ═══════════════════════════════════════════════════════════════
// SEED FUNCTION
// ═══════════════════════════════════════════════════════════════

async function seedReadingTest24() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log("Connected to MongoDB");

        const existing = await ReadingTest.findOne({ testId: readingTest24.testId });
        if (existing) {
            await ReadingTest.findByIdAndUpdate(existing._id, readingTest24);
            console.log("✅ Reading Test 24 UPDATED successfully!");
        } else {
            const admin = await User.findOne({ role: "admin" });
            if (!admin) {
                console.log("❌ Admin user not found!");
                process.exit(1);
            }
            await ReadingTest.create({ ...readingTest24, createdBy: admin._id });
            console.log("✅ Reading Test 24 CREATED successfully!");
        }

        // Verify
        const verify = await ReadingTest.findOne({ testId: readingTest24.testId });
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

seedReadingTest24();
