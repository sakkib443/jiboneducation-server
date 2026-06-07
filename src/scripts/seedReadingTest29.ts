/**
 * Seed Script: Academic Reading Mock Test 29
 * Run: npx ts-node-dev --transpile-only src/scripts/seedReadingTest29.ts
 *
 * Original passages (generated, fully answered):
 *   1 - Deep-Sea Exploration (Q1-13)
 *   2 - The History of the Bicycle (Q14-26)
 *   3 - The Gig Economy (Q27-40)
 *
 * Built per READING_NEW_TEST_PLAYBOOK.md - dual storage (questionGroups + flat questions),
 * full answer keys, 13+13+14 split, premium type mix.
 */

import mongoose from "mongoose";
import { ReadingTest } from "../app/modules/reading/reading.model";
import { User } from "../app/modules/user/user.model";
import config from "../app/config";

// ===============================================================
// PASSAGE 1: DEEP-SEA EXPLORATION (labeled A-G for matching-headings)
// ===============================================================

const passage1Text = `A The deep sea is the largest habitat on Earth, yet it remains one of the least understood. Beginning at a depth of around two hundred metres, where the last of the sunlight fades, it extends downwards for many kilometres to the floor of the great ocean trenches. This vast, dark world covers more than half of the planet's surface, and the volume of water it contains dwarfs every other living space, from the rainforests to the open plains. Despite its size, only a tiny fraction of it has ever been seen by human eyes. It is often said, with some justice, that we have better maps of the surface of the Moon and of Mars than we have of the bottom of our own oceans.

B Exploring this region is extraordinarily difficult, chiefly because of the pressure. For every ten metres of descent, the weight of the water above increases the pressure by roughly one atmosphere, so that at the deepest points it is more than a thousand times greater than at the surface. Such forces would instantly crush an unprotected human body and can buckle steel that has not been properly designed. Added to this are the near-freezing temperatures, the total absence of light, and the sheer expense of building craft that can survive the journey down and return safely. For these reasons the deep ocean stayed beyond human reach long after the highest mountains had been climbed.

C The first serious attempt to study the deep was made not by a single inventor but by an entire expedition. In 1872 a converted British warship, the Challenger, set out on a voyage that lasted almost four years and covered nearly seventy thousand nautical miles. Its crew lowered weighted ropes to measure the depth of the ocean and dragged nets across the bottom to bring up whatever lived there. The results astonished the scientific world, for the nets returned teeming with strange creatures from depths where life had been thought impossible. The Challenger expedition is now regarded as the birth of the science of oceanography, and the data it gathered filled fifty large volumes.

D The dream of actually descending to the sea floor was realised in 1960. In that year a vessel called the Trieste, a kind of underwater balloon known as a bathyscaphe, carried two men to the bottom of the Mariana Trench, the deepest place in any ocean. The descent to almost eleven kilometres took nearly five hours, and the two explorers spent only about twenty minutes on the bottom before beginning the long climb back. To their amazement, they reported seeing a flatfish swimming past the window, proof that even in the most extreme conditions on the planet some form of life could survive.

E Sending people to such depths is costly and dangerous, and for routine science it has largely been replaced by machines. Remotely operated vehicles, or ROVs, are robots connected to a ship at the surface by a long cable, through which engineers send commands and receive a stream of pictures. Because they carry no crew, they can stay down for many hours and venture into places that would be far too risky for a human pilot. Equipped with cameras, lights and mechanical arms, they have allowed scientists to film living animals in their natural surroundings and to collect delicate samples without ever leaving the safety of the deck.

F Among the most important discoveries made with such technology are the hydrothermal vents, found in 1977 near the Galapagos Islands. These are cracks in the sea floor where water heated by the molten rock below gushes out, rich in dissolved minerals. To general astonishment, the vents were surrounded by dense communities of giant tube worms, clams and shrimp. Since no sunlight reaches these depths, the animals cannot depend on plants for food. Instead, the basis of the whole community is bacteria that obtain their energy from the chemicals in the venting water, a process known as chemosynthesis. The finding showed that life on Earth does not, after all, depend entirely on the Sun.

G Why should we continue to spend money exploring a place so remote from everyday life? Supporters of deep-sea research point to several rewards. The strange organisms of the deep are a source of new medicines, and several drugs already in use were first derived from marine creatures. The sea floor also holds valuable minerals, although the prospect of mining them has alarmed conservationists, who fear that such fragile habitats could be destroyed before they have even been described. Above all, the deep ocean plays a major part in storing carbon and regulating the climate of the whole planet. Understanding it, researchers argue, is no longer a luxury but a necessity if we are to manage the Earth wisely.`;

// ===============================================================
// PASSAGE 2: THE HISTORY OF THE BICYCLE (labeled A-G for matching-information)
// ===============================================================

const passage2Text = `A The bicycle is so familiar a sight that it is easy to forget how recent an invention it is. People had dreamed of human-powered vehicles for centuries, but the first machine that a rider actually balanced and steered did not appear until 1817. In that year a German baron, Karl von Drais, built a wooden two-wheeler that he called the running machine. It had no pedals; the rider sat astride it and pushed along the ground with both feet, much as a child does on a modern balance bike. Although it was little more than a curiosity and was soon banned from the pavements of several cities as a danger to pedestrians, it established the basic idea on which every later design would build.

B The next leap forward came in the 1860s, when French inventors attached pedals directly to the front wheel. This machine was known as the velocipede, though the public quickly nicknamed it the boneshaker, because its iron frame and wooden wheels made riding over cobbled streets a thoroughly uncomfortable experience. Yet for all its faults the boneshaker was a genuine bicycle that could be propelled without touching the ground, and for a few years it enjoyed great popularity. Riding schools opened in the cities, and the machine became a fashionable amusement among young men with money to spare.

C Because the pedals were fixed to the front wheel, the only way to make the boneshaker go faster was to make that wheel larger, so that a single turn of the pedals carried the rider further. This logic led, in the 1870s, to the extraordinary high-wheeler, popularly called the penny-farthing after two British coins of very different sizes. With its enormous front wheel and tiny rear one, it could reach impressive speeds. But mounting it was a feat in itself, and a rider perched so high above the ground was in constant danger of being thrown headfirst over the handlebars, an accident so common that it acquired its own name. The penny-farthing was therefore the preserve of fit and daring young men.

D The bicycle was transformed once again in the 1880s by the so-called safety bicycle, the direct ancestor of the machine we ride today. Its designers abandoned the giant wheel and returned to two wheels of equal size, driving the rear wheel by means of a chain connected to a set of gears. This arrangement meant that speed no longer depended on the size of the wheel, so the frame could be built low to the ground. The rider could now place a foot down easily and was far less likely to suffer a serious fall. As its name suggests, the safety bicycle was vastly less dangerous than the penny-farthing, and it opened the activity to a far wider public.

E One further improvement was needed to make cycling truly comfortable. In 1888 a Scottish veterinary surgeon named John Boyd Dunlop, watching his young son struggle along on a tricycle with solid rubber tyres, hit upon the idea of fitting a tube of air around the wheel. The pneumatic tyre, as it was called, cushioned the rider against the bumps of the road and at the same time reduced the effort needed to keep the machine moving. Combined with the safety bicycle, Dunlop's invention produced a vehicle that was fast, comfortable and stable. The essential form of the modern bicycle was now complete, and it has changed remarkably little in the century and more since.

F The arrival of an affordable, practical bicycle had social effects that went far beyond transport. For the first time, ordinary working people could travel several miles to a job or into the countryside without paying for a horse or a railway ticket. Historians have argued that the bicycle played a particularly important part in the lives of women. Cycling was difficult in the long, heavy skirts of the period, and the popularity of the machine encouraged the adoption of lighter, more practical clothing. More importantly, it gave many women a freedom of movement they had never before enjoyed, and it became, for a generation of campaigners, a powerful symbol of independence.

G After the rise of the motor car in the twentieth century, the bicycle came to be seen in many wealthy countries as a toy for children or a piece of sporting equipment rather than a serious means of getting about. In recent years, however, its fortunes have revived dramatically. Anxiety about traffic congestion, air pollution and the health risks of inactive lifestyles has persuaded many city governments to encourage cycling once more, building dedicated lanes and lending bicycles for public hire. Cheap, clean and quiet, the bicycle is increasingly regarded not as a relic of the past but as part of the solution to the problems of the modern city.`;

// ===============================================================
// PASSAGE 3: THE GIG ECONOMY (continuous + bold sub-headings, opinion/argument)
// ===============================================================

const passage3Text = `Over the past fifteen years, the way many people earn a living has quietly but profoundly changed. A growing number no longer hold a single, permanent job with one employer, but instead take on a series of short-term tasks, or 'gigs', often arranged through a smartphone application. A driver may ferry passengers across the city, a courier may deliver meals, and a designer may complete projects for clients on the other side of the world, all without ever signing a traditional contract of employment. Supporters and critics cannot even agree on how large this sector has grown, since the figures depend heavily on how a gig worker is defined; estimates for some countries range from a few per cent of the workforce to well over a quarter. This loose and flexible pattern of work has come to be known as the gig economy, and few topics in modern economics arouse stronger feelings.

**Freedom or insecurity?**

Those who champion the gig economy place flexibility at the heart of their argument. A gig worker, they point out, can in principle choose when to work, for how long, and for which platform, fitting paid tasks around studies, family responsibilities or a second occupation. For some people this freedom is genuine and welcome. The difficulty, in my view, is that the much-advertised freedom is frequently more apparent than real. A driver who must work twelve hours a day simply to cover the rent is not in any meaningful sense his own master; the flexibility he enjoys is the freedom to choose which twelve hours he will spend behind the wheel.

The deeper problem lies in the legal status of these workers. Because they are classified not as employees but as independent contractors, they fall outside most of the protections that employment law has built up over the past century. They are typically entitled to no minimum wage, no paid holidays, no sick pay and no pension contributions from the companies whose applications they serve. Nor can they always count on a steady flow of work, for the very same application that sends them a task one day may send them none the next. When work is plentiful, earnings can be reasonable; when demand falls, the worker, rather than the company, bears the entire loss. The risk, in other words, has been shifted from the business to the individual, who must absorb every quiet week without the cushion that a salaried post would provide.

**The role of the platforms**

The companies that run these platforms naturally see matters differently. They describe themselves not as employers but merely as technological intermediaries, pieces of software that connect willing customers with willing workers and take a commission for doing so. On this account they bear no more responsibility for the conditions of a delivery rider than a telephone company bears for the conversations carried on its lines. This argument has been challenged repeatedly in the courts, and in several countries judges have ruled that particular companies must indeed treat their workers as employees, with all the obligations that follow. The legal position, however, remains unsettled and varies considerably from one country to another.

It would be a mistake, even so, to imagine that gig workers are merely passive victims of the system. The same technology that allows a company to direct its workforce can also be used to organise resistance. Drivers and couriers have used online forums and messaging groups to share information about pay, to coordinate protests and even to stage collective stoppages, despite having no formal trade union behind them. Such actions show that the relationship between the platforms and their workers is not fixed for all time, but is constantly being negotiated and contested.

**A permanent feature?**

What, then, does the future hold? Some economists predict that the gig economy will continue to expand until it accounts for a substantial share of all employment, drawn on by businesses that are eager to cut their fixed costs. I am not persuaded that the picture is so straightforward. As governments tighten their regulations and the courts extend the reach of employment law, much of the cost advantage that makes such arrangements attractive to companies may gradually disappear. The most likely outcome, I would suggest, is not the wholesale replacement of the traditional job, but the emergence of some middle path, in which gig workers acquire at least a portion of the security that ordinary employees take for granted, while retaining a measure of the flexibility that first drew many of them to this way of working.`;

// ===============================================================
// FULL TEST DATA
// ===============================================================

const readingTest29 = {
    testId: "READING_AC_029",
    testNumber: 29,
    testType: "academic" as const,
    title: "Reading Mock Test 29 - Academic",
    description: "IELTS Academic Reading Test featuring passages on Deep-Sea Exploration, The History of the Bicycle, and The Gig Economy",
    source: "IELTS Academic Practice",
    difficulty: "medium" as const,
    isActive: true,
    duration: 60,
    totalQuestions: 40,
    totalMarks: 40,
    sections: [
        // +-----------------------------------------------------------+
        // |  SECTION 1: DEEP-SEA EXPLORATION (Questions 1-13)         |
        // +-----------------------------------------------------------+
        {
            sectionNumber: 1,
            title: "Deep-Sea Exploration",
            instructions: "You should spend about 20 minutes on Questions 1-13 which are based on Reading Passage 1 below.",
            passage: passage1Text,
            questionGroups: [
                // -- Q1-6: MATCHING HEADINGS (with Example: Paragraph A = ii) --
                {
                    groupType: "matching-headings",
                    startQuestion: 1,
                    endQuestion: 6,
                    mainInstruction: "Reading Passage 1 has seven paragraphs, A-G.",
                    subInstruction: "Choose the correct heading for paragraphs B-G from the list of headings below. Write the correct number, i-x, in boxes 1-6 on your answer sheet.",
                    featureListTitle: "List of Headings",
                    headingsList: [
                        { numeral: "i", text: "Robots take over from human divers" },
                        { numeral: "ii", text: "An enormous but little-known world" },
                        { numeral: "iii", text: "Reasons for continuing the work" },
                        { numeral: "iv", text: "A four-year scientific voyage" },
                        { numeral: "v", text: "The obstacles that make access so hard" },
                        { numeral: "vi", text: "Life that does not depend on the Sun" },
                        { numeral: "vii", text: "The first journey to the deepest point" },
                        { numeral: "viii", text: "Mapping the surface of other planets" },
                        { numeral: "ix", text: "The dangers of commercial fishing" },
                        { numeral: "x", text: "How creatures produce their own light" },
                    ],
                    paragraphOptions: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"],
                    exampleItems: [
                        { text: "Paragraph A", answer: "ii" },
                    ],
                    matchingItems: [
                        { questionNumber: 1, text: "Paragraph B", correctAnswer: "v" },
                        { questionNumber: 2, text: "Paragraph C", correctAnswer: "iv" },
                        { questionNumber: 3, text: "Paragraph D", correctAnswer: "vii" },
                        { questionNumber: 4, text: "Paragraph E", correctAnswer: "i" },
                        { questionNumber: 5, text: "Paragraph F", correctAnswer: "vi" },
                        { questionNumber: 6, text: "Paragraph G", correctAnswer: "iii" },
                    ],
                },
                // -- Q7-9: SUMMARY COMPLETION (ONE WORD ONLY) --
                {
                    groupType: "summary-completion",
                    startQuestion: 7,
                    endQuestion: 9,
                    mainInstruction: "Complete the summary below.",
                    subInstruction: "Choose ONE WORD ONLY from the passage for each answer. Write your answers in boxes 7-9 on your answer sheet.",
                    mainHeading: "The Challenger expedition",
                    summarySegments: [
                        { type: "text", content: "In 1872 a converted British warship set out on a voyage in order to study the deep ocean. To measure how deep the water was, the crew lowered weighted" },
                        { type: "blank", questionNumber: 7, correctAnswer: "ropes" },
                        { type: "text", content: "over the side, and they pulled" },
                        { type: "blank", questionNumber: 8, correctAnswer: "nets" },
                        { type: "text", content: "along the bottom to gather the creatures that lived there. The expedition is today seen as the beginning of the science of" },
                        { type: "blank", questionNumber: 9, correctAnswer: "oceanography" },
                        { type: "text", content: "." },
                    ],
                },
                // -- Q10-13: TRUE/FALSE/NOT GIVEN --
                {
                    groupType: "true-false-not-given",
                    startQuestion: 10,
                    endQuestion: 13,
                    mainInstruction: "Do the following statements agree with the information given in Reading Passage 1?",
                    subInstruction: "In boxes 10-13 on your answer sheet, write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, NOT GIVEN if there is no information on this.",
                    statements: [
                        { questionNumber: 10, text: "Water pressure in the deep sea can damage steel that has been poorly designed.", correctAnswer: "TRUE" },
                        { questionNumber: 11, text: "The two men aboard the Trieste remained on the bottom of the trench for several hours.", correctAnswer: "FALSE" },
                        { questionNumber: 12, text: "Remotely operated vehicles can work underwater for longer than a human pilot could.", correctAnswer: "TRUE" },
                        { questionNumber: 13, text: "The tube worms at the hydrothermal vents grow larger than those found elsewhere.", correctAnswer: "NOT GIVEN" },
                    ],
                },
            ],
            questions: [
                // Matching Headings (Q1-6)
                { questionNumber: 1, questionType: "matching-headings", questionText: "Paragraph B", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "v", marks: 1 },
                { questionNumber: 2, questionType: "matching-headings", questionText: "Paragraph C", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "iv", marks: 1 },
                { questionNumber: 3, questionType: "matching-headings", questionText: "Paragraph D", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "vii", marks: 1 },
                { questionNumber: 4, questionType: "matching-headings", questionText: "Paragraph E", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "i", marks: 1 },
                { questionNumber: 5, questionType: "matching-headings", questionText: "Paragraph F", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "vi", marks: 1 },
                { questionNumber: 6, questionType: "matching-headings", questionText: "Paragraph G", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "iii", marks: 1 },
                // Summary Completion (Q7-9)
                { questionNumber: 7, questionType: "summary-completion", questionText: "the crew lowered weighted __________ over the side", correctAnswer: "ropes", acceptableAnswers: ["ropes"], marks: 1 },
                { questionNumber: 8, questionType: "summary-completion", questionText: "they pulled __________ along the bottom", correctAnswer: "nets", acceptableAnswers: ["nets"], marks: 1 },
                { questionNumber: 9, questionType: "summary-completion", questionText: "the beginning of the science of __________", correctAnswer: "oceanography", acceptableAnswers: ["oceanography"], marks: 1 },
                // True/False/Not Given (Q10-13)
                { questionNumber: 10, questionType: "true-false-not-given", questionText: "Water pressure in the deep sea can damage steel that has been poorly designed.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE", marks: 1 },
                { questionNumber: 11, questionType: "true-false-not-given", questionText: "The two men aboard the Trieste remained on the bottom of the trench for several hours.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE", marks: 1 },
                { questionNumber: 12, questionType: "true-false-not-given", questionText: "Remotely operated vehicles can work underwater for longer than a human pilot could.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE", marks: 1 },
                { questionNumber: 13, questionType: "true-false-not-given", questionText: "The tube worms at the hydrothermal vents grow larger than those found elsewhere.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "NOT GIVEN", marks: 1 },
            ],
        },

        // +-----------------------------------------------------------+
        // |  SECTION 2: THE HISTORY OF THE BICYCLE (Questions 14-26)  |
        // +-----------------------------------------------------------+
        {
            sectionNumber: 2,
            title: "The History of the Bicycle",
            instructions: "You should spend about 20 minutes on Questions 14-26 which are based on Reading Passage 2 below.",
            passage: passage2Text,
            questionGroups: [
                // -- Q14-19: MATCHING INFORMATION --
                {
                    groupType: "matching-information",
                    startQuestion: 14,
                    endQuestion: 19,
                    mainInstruction: "Reading Passage 2 has seven paragraphs, A-G. Which paragraph contains the following information?",
                    subInstruction: "Write the correct letter, A-G, in boxes 14-19 on your answer sheet.",
                    note: "NB You may use any letter more than once.",
                    paragraphOptions: ["A", "B", "C", "D", "E", "F", "G"],
                    matchingItems: [
                        { questionNumber: 14, text: "a description of an early machine that had no pedals", correctAnswer: "A" },
                        { questionNumber: 15, text: "the effect of the bicycle on the clothing that women wore", correctAnswer: "F" },
                        { questionNumber: 16, text: "an inventor inspired by watching a member of his family", correctAnswer: "E" },
                        { questionNumber: 17, text: "the introduction of a chain to drive the rear wheel", correctAnswer: "D" },
                        { questionNumber: 18, text: "reasons why cities are once again promoting cycling", correctAnswer: "G" },
                        { questionNumber: 19, text: "an explanation of why one wheel was made extremely large", correctAnswer: "C" },
                    ],
                },
                // -- Q20-23: MULTIPLE CHOICE FULL --
                {
                    groupType: "multiple-choice-full",
                    startQuestion: 20,
                    endQuestion: 23,
                    mainInstruction: "Choose the correct letter, A, B, C or D.",
                    subInstruction: "Write the correct letter in boxes 20-23 on your answer sheet.",
                    mcQuestions: [
                        {
                            questionNumber: 20,
                            questionText: "The running machine built by Karl von Drais was",
                            options: [
                                { letter: "A", text: "moved by the rider pushing against the ground with the feet." },
                                { letter: "B", text: "driven by pedals attached to the front wheel." },
                                { letter: "C", text: "fitted with two wheels of unequal size." },
                                { letter: "D", text: "widely used for travelling to work." },
                            ],
                            correctAnswer: "A",
                        },
                        {
                            questionNumber: 21,
                            questionText: "The velocipede was given the nickname 'boneshaker' because",
                            options: [
                                { letter: "A", text: "it was extremely difficult to mount." },
                                { letter: "B", text: "it was uncomfortable to ride on rough streets." },
                                { letter: "C", text: "its riders were frequently thrown off." },
                                { letter: "D", text: "it could only be used by wealthy young men." },
                            ],
                            correctAnswer: "B",
                        },
                        {
                            questionNumber: 22,
                            questionText: "Compared with the penny-farthing, the safety bicycle allowed the rider to",
                            options: [
                                { letter: "A", text: "travel at much greater speeds." },
                                { letter: "B", text: "sit far higher above the road." },
                                { letter: "C", text: "put a foot on the ground more easily." },
                                { letter: "D", text: "dispense with a chain altogether." },
                            ],
                            correctAnswer: "C",
                        },
                        {
                            questionNumber: 23,
                            questionText: "According to the passage, the pneumatic tyre invented by Dunlop",
                            options: [
                                { letter: "A", text: "was first fitted to a penny-farthing." },
                                { letter: "B", text: "made the bicycle heavier to pedal." },
                                { letter: "C", text: "reduced the effort needed to move the machine." },
                                { letter: "D", text: "was made of solid rubber." },
                            ],
                            correctAnswer: "C",
                        },
                    ],
                },
                // -- Q24-26: SENTENCE COMPLETION (NO MORE THAN TWO WORDS) --
                {
                    groupType: "sentence-completion",
                    startQuestion: 24,
                    endQuestion: 26,
                    mainInstruction: "Complete the sentences below.",
                    subInstruction: "Choose NO MORE THAN TWO WORDS from the passage for each answer. Write your answers in boxes 24-26 on your answer sheet.",
                    statements: [
                        { questionNumber: 24, text: "The first running machine was soon banned from the pavements of some cities because it was seen as a danger to __________.", correctAnswer: "pedestrians" },
                        { questionNumber: 25, text: "On the safety bicycle the speed achieved no longer depended on the __________ of the wheel.", correctAnswer: "size" },
                        { questionNumber: 26, text: "For a generation of campaigners the bicycle became a powerful symbol of __________.", correctAnswer: "independence" },
                    ],
                },
            ],
            questions: [
                // Matching Information (Q14-19)
                { questionNumber: 14, questionType: "matching-information", questionText: "a description of an early machine that had no pedals", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "A", marks: 1 },
                { questionNumber: 15, questionType: "matching-information", questionText: "the effect of the bicycle on the clothing that women wore", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "F", marks: 1 },
                { questionNumber: 16, questionType: "matching-information", questionText: "an inventor inspired by watching a member of his family", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "E", marks: 1 },
                { questionNumber: 17, questionType: "matching-information", questionText: "the introduction of a chain to drive the rear wheel", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "D", marks: 1 },
                { questionNumber: 18, questionType: "matching-information", questionText: "reasons why cities are once again promoting cycling", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "G", marks: 1 },
                { questionNumber: 19, questionType: "matching-information", questionText: "an explanation of why one wheel was made extremely large", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "C", marks: 1 },
                // Multiple Choice (Q20-23)
                { questionNumber: 20, questionType: "multiple-choice-full", questionText: "The running machine built by Karl von Drais was", correctAnswer: "A", marks: 1 },
                { questionNumber: 21, questionType: "multiple-choice-full", questionText: "The velocipede was given the nickname 'boneshaker' because", correctAnswer: "B", marks: 1 },
                { questionNumber: 22, questionType: "multiple-choice-full", questionText: "Compared with the penny-farthing, the safety bicycle allowed the rider to", correctAnswer: "C", marks: 1 },
                { questionNumber: 23, questionType: "multiple-choice-full", questionText: "According to the passage, the pneumatic tyre invented by Dunlop", correctAnswer: "C", marks: 1 },
                // Sentence Completion (Q24-26)
                { questionNumber: 24, questionType: "sentence-completion", questionText: "The first running machine was soon banned from the pavements of some cities because it was seen as a danger to __________.", correctAnswer: "pedestrians", acceptableAnswers: ["pedestrians"], marks: 1 },
                { questionNumber: 25, questionType: "sentence-completion", questionText: "On the safety bicycle the speed achieved no longer depended on the __________ of the wheel.", correctAnswer: "size", acceptableAnswers: ["size"], marks: 1 },
                { questionNumber: 26, questionType: "sentence-completion", questionText: "For a generation of campaigners the bicycle became a powerful symbol of __________.", correctAnswer: "independence", acceptableAnswers: ["independence"], marks: 1 },
            ],
        },

        // +-----------------------------------------------------------+
        // |  SECTION 3: THE GIG ECONOMY (Questions 27-40)            |
        // +-----------------------------------------------------------+
        {
            sectionNumber: 3,
            title: "The Gig Economy",
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
                            questionText: "Work in the gig economy is typically characterised by",
                            options: [
                                { letter: "A", text: "a single permanent job with one employer." },
                                { letter: "B", text: "a series of short tasks often arranged through an app." },
                                { letter: "C", text: "a traditional written contract of employment." },
                                { letter: "D", text: "fixed hours set by the company." },
                            ],
                            correctAnswer: "B",
                        },
                        {
                            questionNumber: 28,
                            questionText: "Why does the writer mention a driver who works twelve hours a day?",
                            options: [
                                { letter: "A", text: "to show that gig workers usually earn high wages" },
                                { letter: "B", text: "to suggest that the freedom such workers enjoy is often limited" },
                                { letter: "C", text: "to prove that driving is the most popular form of gig work" },
                                { letter: "D", text: "to argue that gig workers should be paid by the hour" },
                            ],
                            correctAnswer: "B",
                        },
                        {
                            questionNumber: 29,
                            questionText: "Because gig workers are classified as independent contractors, they are usually",
                            options: [
                                { letter: "A", text: "guaranteed a minimum wage by law." },
                                { letter: "B", text: "given paid holidays by the platform." },
                                { letter: "C", text: "left without most standard employment protections." },
                                { letter: "D", text: "protected against any loss of income." },
                            ],
                            correctAnswer: "C",
                        },
                        {
                            questionNumber: 30,
                            questionText: "How do the platform companies describe their own role?",
                            options: [
                                { letter: "A", text: "as employers responsible for their workers' conditions" },
                                { letter: "B", text: "as trade unions representing their workers" },
                                { letter: "C", text: "as technological intermediaries that connect customers and workers" },
                                { letter: "D", text: "as charities offering work to those in need" },
                            ],
                            correctAnswer: "C",
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
                        { questionNumber: 31, text: "The flexibility offered by gig work is often less real than it appears.", correctAnswer: "YES" },
                        { questionNumber: 32, text: "In gig work the financial risk has been moved from the company to the individual worker.", correctAnswer: "YES" },
                        { questionNumber: 33, text: "Most gig workers would prefer a traditional permanent job.", correctAnswer: "NOT GIVEN" },
                        { questionNumber: 34, text: "Gig workers are powerless to organise any form of resistance.", correctAnswer: "NO" },
                        { questionNumber: 35, text: "The gig economy is certain to replace traditional employment almost entirely.", correctAnswer: "NO" },
                    ],
                },
                // -- Q36-40: SUMMARY WITH OPTIONS (letters A-I) --
                {
                    groupType: "summary-with-options",
                    startQuestion: 36,
                    endQuestion: 40,
                    mainInstruction: "Complete the summary using the list of words, A-I, below.",
                    subInstruction: "Write the correct letter, A-I, in boxes 36-40 on your answer sheet.",
                    mainHeading: "The debate over the gig economy",
                    phraseList: [
                        { letter: "A", text: "courts" },
                        { letter: "B", text: "flexibility" },
                        { letter: "C", text: "employees" },
                        { letter: "D", text: "software" },
                        { letter: "E", text: "wages" },
                        { letter: "F", text: "risk" },
                        { letter: "G", text: "middle path" },
                        { letter: "H", text: "holidays" },
                        { letter: "I", text: "machines" },
                    ],
                    summarySegments: [
                        { type: "text", content: "Supporters of the gig economy emphasise the" },
                        { type: "blank", questionNumber: 36, correctAnswer: "B" },
                        { type: "text", content: "that it offers, allowing people to choose their own hours. Critics reply that the workers lack legal protection because they are not treated as" },
                        { type: "blank", questionNumber: 37, correctAnswer: "C" },
                        { type: "text", content: ", and that the financial" },
                        { type: "blank", questionNumber: 38, correctAnswer: "F" },
                        { type: "text", content: "has been transferred to them. The platform companies argue that they are merely pieces of" },
                        { type: "blank", questionNumber: 39, correctAnswer: "D" },
                        { type: "text", content: "linking customers with workers. The writer predicts that the most likely result will be a" },
                        { type: "blank", questionNumber: 40, correctAnswer: "G" },
                        { type: "text", content: "combining some security with some flexibility." },
                    ],
                },
            ],
            questions: [
                // Multiple Choice (Q27-30)
                { questionNumber: 27, questionType: "multiple-choice-full", questionText: "Work in the gig economy is typically characterised by", correctAnswer: "B", marks: 1 },
                { questionNumber: 28, questionType: "multiple-choice-full", questionText: "Why does the writer mention a driver who works twelve hours a day?", correctAnswer: "B", marks: 1 },
                { questionNumber: 29, questionType: "multiple-choice-full", questionText: "Because gig workers are classified as independent contractors, they are usually", correctAnswer: "C", marks: 1 },
                { questionNumber: 30, questionType: "multiple-choice-full", questionText: "How do the platform companies describe their own role?", correctAnswer: "C", marks: 1 },
                // Yes/No/Not Given (Q31-35)
                { questionNumber: 31, questionType: "yes-no-not-given", questionText: "The flexibility offered by gig work is often less real than it appears.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "YES", marks: 1 },
                { questionNumber: 32, questionType: "yes-no-not-given", questionText: "In gig work the financial risk has been moved from the company to the individual worker.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "YES", marks: 1 },
                { questionNumber: 33, questionType: "yes-no-not-given", questionText: "Most gig workers would prefer a traditional permanent job.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NOT GIVEN", marks: 1 },
                { questionNumber: 34, questionType: "yes-no-not-given", questionText: "Gig workers are powerless to organise any form of resistance.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NO", marks: 1 },
                { questionNumber: 35, questionType: "yes-no-not-given", questionText: "The gig economy is certain to replace traditional employment almost entirely.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NO", marks: 1 },
                // Summary with Options (Q36-40)
                { questionNumber: 36, questionType: "summary-with-options", questionText: "Supporters emphasise the __________ that it offers", options: ["A", "B", "C", "D", "E", "F", "G", "H", "I"], correctAnswer: "B", marks: 1 },
                { questionNumber: 37, questionType: "summary-with-options", questionText: "the workers are not treated as __________", options: ["A", "B", "C", "D", "E", "F", "G", "H", "I"], correctAnswer: "C", marks: 1 },
                { questionNumber: 38, questionType: "summary-with-options", questionText: "the financial __________ has been transferred to them", options: ["A", "B", "C", "D", "E", "F", "G", "H", "I"], correctAnswer: "F", marks: 1 },
                { questionNumber: 39, questionType: "summary-with-options", questionText: "they are merely pieces of __________ linking customers with workers", options: ["A", "B", "C", "D", "E", "F", "G", "H", "I"], correctAnswer: "D", marks: 1 },
                { questionNumber: 40, questionType: "summary-with-options", questionText: "the most likely result will be a __________", options: ["A", "B", "C", "D", "E", "F", "G", "H", "I"], correctAnswer: "G", marks: 1 },
            ],
        },
    ],
};

// ===============================================================
// SEED FUNCTION
// ===============================================================

async function seedReadingTest29() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log("Connected to MongoDB");

        const existing = await ReadingTest.findOne({ testId: readingTest29.testId });
        if (existing) {
            await ReadingTest.findByIdAndUpdate(existing._id, readingTest29);
            console.log("✅ Reading Test 29 UPDATED successfully!");
        } else {
            const admin = await User.findOne({ role: "admin" });
            if (!admin) {
                console.log("❌ Admin user not found!");
                process.exit(1);
            }
            await ReadingTest.create({ ...readingTest29, createdBy: admin._id });
            console.log("✅ Reading Test 29 CREATED successfully!");
        }

        // Verify
        const verify = await ReadingTest.findOne({ testId: readingTest29.testId });
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

seedReadingTest29();
