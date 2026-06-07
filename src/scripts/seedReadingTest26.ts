/**
 * Seed Script: Academic Reading Mock Test 26
 * Run: npx ts-node-dev --transpile-only src/scripts/seedReadingTest26.ts
 *
 * Original passages (generated, fully answered):
 *   1 - The Intelligence of Crows and Other Corvids (Q1-13)
 *   2 - The Development of Writing Systems (Q14-26)
 *   3 - The Bystander Effect (Q27-40)
 *
 * Built per READING_NEW_TEST_PLAYBOOK.md - dual storage (questionGroups + flat questions),
 * full answer keys, 13+13+14 split, premium type mix.
 */

import mongoose from "mongoose";
import { ReadingTest } from "../app/modules/reading/reading.model";
import { User } from "../app/modules/user/user.model";
import config from "../app/config";

// ═══════════════════════════════════════════════════════════════
// PASSAGE 1: THE INTELLIGENCE OF CROWS AND OTHER CORVIDS (labeled A-G for matching-headings)
// ═══════════════════════════════════════════════════════════════

const passage1Text = `A For a long time the crow was regarded as little more than a noisy nuisance, a black bird that gathered on farmland and scavenged in towns. Today, however, scientists rank crows, ravens, jays, magpies and their relatives among the most intelligent animals on Earth. These birds belong to a family known as the corvids, and a growing body of research suggests that their mental abilities rival those of the great apes. What makes this discovery so surprising is that the brain of a bird is built on a very different plan from that of a mammal, and yet it appears to support reasoning of a comparable kind.

B Part of the explanation lies in the structure of the corvid brain. Although it is small and lacks the folded outer layer that supports complex thought in mammals, it is unusually dense, packing a very large number of neurons into a tiny space. In proportion to body size, the brain of a crow is roughly as large as that of a chimpanzee. Neurons in the bird brain are also tightly connected, which may allow information to be processed quickly and efficiently. In other words, evolution seems to have arrived at intelligence twice, by two quite separate routes, a phenomenon that biologists call convergent evolution.

C Some of the most famous experiments concern the New Caledonian crow, a species found on a group of islands in the Pacific. In the wild these birds fashion hooks and barbed tools from twigs and leaves in order to extract insects from holes in wood, a skill once thought to be unique to humans and a handful of apes. In one celebrated laboratory test a crow named Betty was given a straight piece of wire and a tube containing food beyond her reach. Without any training, she bent the wire into a hook and lifted the food out, demonstrating an ability to invent a tool to solve a problem she had never encountered before.

D Tool use is not the only sign of a sharp mind. Corvids appear to plan for events that have not yet happened, something that was once believed to lie beyond the reach of any animal. Western scrub jays, for example, hide surplus food in scattered locations and can remember not only where they put each item but also what it was and how long ago it was stored. Because some foods rot more quickly than others, the birds return first to the stores that will spoil soonest. This suggests that they are able to keep track of time and to act on the basis of expected future needs rather than present hunger alone.

E Equally striking is the social cleverness of these birds. A scrub jay that has stolen food from another bird behaves as though it expects to be robbed in turn: if it was watched while hiding its own supplies, it will later return in private to move them to a new spot. Tellingly, only birds that have themselves been thieves take this precaution, which hints that they can use their own experience to anticipate the behaviour of others. Ravens, too, seem sensitive to who is watching them, and will change their behaviour depending on whether a potential competitor can see what they are doing.

F Corvids are also remarkably good at recognising individual human faces, and at remembering them for years. In a well-known study, researchers wearing a particular mask trapped and released a number of wild crows. Long afterwards the birds continued to scold and mob anyone wearing that same mask, while ignoring people in different masks. More remarkably still, young crows that had never been trapped reacted angrily to the dangerous mask, which means that the information about the threat had somehow been passed from one bird to another. Knowledge, it seems, can spread through a crow community rather than being learned only through direct experience.

G Why did such powerful minds evolve in these particular birds? Most researchers point to a combination of a long life, a varied diet and a complex social existence. An animal that lives for many years, eats almost anything and must constantly negotiate relationships with rivals and partners has much to gain from a flexible, problem-solving brain. Whatever the precise explanation, the humble crow has forced scientists to abandon the comfortable assumption that advanced intelligence belongs to human beings and a few large-brained mammals alone.`;

// ═══════════════════════════════════════════════════════════════
// PASSAGE 2: THE DEVELOPMENT OF WRITING SYSTEMS (labeled A-G for matching-information)
// ═══════════════════════════════════════════════════════════════

const passage2Text = `A Writing is one of the most important inventions in human history, yet for most of the time that our species has existed there was no such thing. Speech is many tens of thousands of years old and seems to come naturally to every healthy child, but writing was invented only a few times, and each time it had to be learned with great effort. The earliest true writing that scholars can identify appeared in Mesopotamia, the land between the Tigris and the Euphrates, a little more than five thousand years ago. From these beginnings grew every one of the writing systems used in the world today.

B Curiously, writing seems to have been created not to record poetry or history but to keep accounts. In the cities of ancient Sumer, officials needed to track payments of grain, livestock and other goods. At first they pressed small clay tokens into lumps of clay to represent quantities, and in time these marks became simplified pictures scratched onto clay tablets with a reed. Because the reed left wedge-shaped impressions, the script is known as cuneiform, from the Latin word for wedge. Over many generations the little pictures grew increasingly abstract, until they no longer resembled the objects they had once stood for.

C A crucial step came when scribes began to use signs to represent not things but sounds. A picture of a particular object could be borrowed to stand for the sound of its name, rather as if a modern writer were to draw an eye to mean the word 'I'. This principle, sometimes called the rebus principle, allowed writers to record words that could not easily be drawn, such as names or abstract ideas. Once a script could capture the sounds of speech, it became enormously more powerful, and could in principle be used to write down anything that could be said aloud.

D The Egyptians developed their own elaborate script, the hieroglyphs, at almost the same time. For centuries scholars could not read them, and the meaning of these beautiful symbols was completely lost. The breakthrough came with the discovery of the Rosetta Stone, a slab carved with the same decree in three different scripts, one of them ancient Greek. By comparing the familiar Greek text with the unknown Egyptian signs, the French scholar Jean-Francois Champollion was at last able to decipher the hieroglyphs in the 1820s, opening a window onto a civilisation that had been silent for many centuries.

E The systems described so far required a very large number of signs, sometimes many hundreds, and learning to read and write was therefore the work of years. Only a small class of professional scribes ever mastered them, and literacy remained the privilege of a tiny elite. A far simpler idea was needed before writing could spread widely. That idea was the alphabet, in which a small set of letters stands for the individual sounds of a language. The first alphabets, developed by Semitic-speaking peoples in the Near East, recorded only consonants and left the reader to supply the vowels.

F It was the ancient Greeks who took the decisive further step of adding separate letters for the vowels, producing the first alphabet that fully represented both consonants and vowels. This made the script easy to learn and easy to read aloud, even for someone encountering an unfamiliar word. The Greek alphabet was borrowed and adapted by the Romans, whose version, the Latin alphabet, is the one used to write this very sentence and a large proportion of the world's languages today. With so few symbols to memorise, reading and writing were no longer confined to a professional class.

G Not all modern scripts are alphabets, however. Chinese writing, which has been in continuous use for well over three thousand years, still uses thousands of characters, most of which represent whole words or meaningful units rather than individual sounds. One great advantage of such a system is that speakers of very different Chinese dialects, who cannot understand one another's speech, can nevertheless read the same written texts. This durability and reach remind us that there is no single path that writing must follow, and that a script which seems cumbersome by one measure may be remarkably successful by another.`;

// ═══════════════════════════════════════════════════════════════
// PASSAGE 3: THE BYSTANDER EFFECT (continuous + bold sub-headings)
// ═══════════════════════════════════════════════════════════════

const passage3Text = `In 1964 a young woman was attacked and killed near her home in New York over a period of more than half an hour. According to an influential newspaper report of the time, dozens of neighbours heard her cries for help but none came to her aid or even telephoned the police. The story shocked the public and prompted a question that has occupied psychologists ever since: why do people so often fail to help a stranger in distress? Although later investigation showed that the original account had exaggerated both the number of witnesses and their indifference, the case inspired a line of research that has proved both important and enduring.

**The experiments begin**

Two American psychologists, John Darley and Bibb Latane, suspected that the answer lay not in the cruelty of the witnesses but in the situation itself. They proposed that the presence of other people actually makes each individual less likely to help, an idea that became known as the bystander effect. To test it, they devised a series of ingenious experiments. In one, a participant sat alone in a room completing a questionnaire when smoke began to pour through a vent. Those who were on their own usually got up and reported the smoke quickly. When other people, who had secretly been told to ignore it, were present, most participants sat still and said nothing, even as the room filled with smoke.

In a second, more dramatic study, participants overheard what sounded like another person having a seizure. When a participant believed that he or she was the only listener, almost everyone went to help. As the number of other supposed witnesses increased, however, the proportion who responded fell sharply, and those who did help took longer to act. The effect was strong and consistent, and it has since been reproduced many times in a wide range of situations.

**Explaining the effect**

Darley and Latane argued that two psychological processes were chiefly responsible. The first is what they called the diffusion of responsibility. When a person is the sole witness to an emergency, the responsibility to act rests entirely on his or her own shoulders. When many people are present, that responsibility is shared among them all, so that each individual feels only a small fraction of the pressure to intervene and may assume that somebody else will do so.

The second process concerns the way we read a situation. Most emergencies are ambiguous at first, and we look to the people around us for clues about how to behave. Unfortunately, everyone else is doing exactly the same thing. Because nobody wishes to overreact and appear foolish, each person hides his or her alarm behind a calm exterior, and the group as a whole concludes, wrongly, that nothing is amiss. Latane and Darley called this collective misreading pluralistic ignorance.

A further factor is the fear of judgement. Helping in public means risking embarrassment if one has misjudged the situation, and this fear is naturally greater when an audience is present. The writer argues that none of these explanations should be taken to mean that bystanders are simply heartless; rather, they are caught in a powerful social trap that few of us fully recognise.

**From the laboratory to everyday life**

The findings have practical value. Latane and Darley pointed out that a victim who wishes to be helped should not appeal to the crowd in general but should single out one individual, perhaps by pointing directly at them, since a person who has been clearly identified can no longer assume that the duty falls to someone else. Some training courses now teach exactly this technique. More broadly, the research carries a reassuring message: simply knowing about the bystander effect appears to make people more likely to step forward, for awareness of the trap is itself one of the surest ways of escaping it.`;

// ═══════════════════════════════════════════════════════════════
// FULL TEST DATA
// ═══════════════════════════════════════════════════════════════

const readingTest26 = {
    testId: "READING_AC_026",
    testNumber: 26,
    testType: "academic" as const,
    title: "Reading Mock Test 26 - Academic",
    description: "IELTS Academic Reading Test featuring passages on The Intelligence of Crows and Other Corvids, The Development of Writing Systems, and The Bystander Effect",
    source: "IELTS Academic Practice",
    difficulty: "medium" as const,
    isActive: true,
    duration: 60,
    totalQuestions: 40,
    totalMarks: 40,
    sections: [
        // ╔═══════════════════════════════════════════════════════════╗
        // ║  SECTION 1: THE INTELLIGENCE OF CROWS (Questions 1-13)     ║
        // ╚═══════════════════════════════════════════════════════════╝
        {
            sectionNumber: 1,
            title: "The Intelligence of Crows and Other Corvids",
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
                        { numeral: "i", text: "Why these abilities may have developed" },
                        { numeral: "ii", text: "Recognising and remembering human faces" },
                        { numeral: "iii", text: "Inventing a tool to solve a new problem" },
                        { numeral: "iv", text: "The unusual structure of the corvid brain" },
                        { numeral: "v", text: "Understanding what others can see" },
                        { numeral: "vi", text: "Planning for future needs" },
                        { numeral: "vii", text: "The decline of the crow population" },
                        { numeral: "viii", text: "A change in how these birds are viewed" },
                        { numeral: "ix", text: "Teaching tool use to the young" },
                        { numeral: "x", text: "Differences between corvid species" },
                    ],
                    paragraphOptions: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"],
                    exampleItems: [
                        { text: "Paragraph A", answer: "viii" },
                    ],
                    matchingItems: [
                        { questionNumber: 1, text: "Paragraph B", correctAnswer: "iv" },
                        { questionNumber: 2, text: "Paragraph C", correctAnswer: "iii" },
                        { questionNumber: 3, text: "Paragraph D", correctAnswer: "vi" },
                        { questionNumber: 4, text: "Paragraph E", correctAnswer: "v" },
                        { questionNumber: 5, text: "Paragraph F", correctAnswer: "ii" },
                        { questionNumber: 6, text: "Paragraph G", correctAnswer: "i" },
                    ],
                },
                // ── Q7-10: NOTE COMPLETION (passage format, ONE WORD ONLY) ──
                {
                    groupType: "note-completion",
                    startQuestion: 7,
                    endQuestion: 10,
                    mainInstruction: "Complete the notes below.",
                    subInstruction: "Choose ONE WORD ONLY from the passage for each answer. Write your answers in boxes 7-10 on your answer sheet.",
                    mainHeading: "Evidence of corvid intelligence",
                    passage: `The corvid brain\n- Small but very dense, with many tightly connected 7 __________\n- Similar size to a chimpanzee brain relative to the body\nThe New Caledonian crow\n- In the wild, makes hooked 8 __________ from twigs and leaves to reach insects\n- In the laboratory, a crow bent a piece of 9 __________ to lift out food\nMemory and faces\n- Crows can remember a human face for 10 __________`,
                },
                // ── Q11-13: TRUE/FALSE/NOT GIVEN ──
                {
                    groupType: "true-false-not-given",
                    startQuestion: 11,
                    endQuestion: 13,
                    mainInstruction: "Do the following statements agree with the information given in Reading Passage 1?",
                    subInstruction: "In boxes 11-13 on your answer sheet, write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, NOT GIVEN if there is no information on this.",
                    statements: [
                        { questionNumber: 11, text: "The corvid brain is built on the same plan as the brain of a mammal.", correctAnswer: "FALSE" },
                        { questionNumber: 12, text: "Only scrub jays that have stolen food themselves move their own stores after being watched.", correctAnswer: "TRUE" },
                        { questionNumber: 13, text: "Young crows learned about the dangerous mask without being trapped in it.", correctAnswer: "TRUE" },
                    ],
                },
            ],
            questions: [
                // Matching Headings (Q1-6)
                { questionNumber: 1, questionType: "matching-headings", questionText: "Paragraph B", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "iv", marks: 1 },
                { questionNumber: 2, questionType: "matching-headings", questionText: "Paragraph C", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "iii", marks: 1 },
                { questionNumber: 3, questionType: "matching-headings", questionText: "Paragraph D", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "vi", marks: 1 },
                { questionNumber: 4, questionType: "matching-headings", questionText: "Paragraph E", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "v", marks: 1 },
                { questionNumber: 5, questionType: "matching-headings", questionText: "Paragraph F", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "ii", marks: 1 },
                { questionNumber: 6, questionType: "matching-headings", questionText: "Paragraph G", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "i", marks: 1 },
                // Note Completion (Q7-10)
                { questionNumber: 7, questionType: "note-completion", questionText: "many tightly connected __________", correctAnswer: "neurons", acceptableAnswers: ["neurons"], marks: 1 },
                { questionNumber: 8, questionType: "note-completion", questionText: "makes hooked __________ from twigs and leaves", correctAnswer: "tools", acceptableAnswers: ["tools"], marks: 1 },
                { questionNumber: 9, questionType: "note-completion", questionText: "a crow bent a piece of __________ to lift out food", correctAnswer: "wire", acceptableAnswers: ["wire"], marks: 1 },
                { questionNumber: 10, questionType: "note-completion", questionText: "remember a human face for __________", correctAnswer: "years", acceptableAnswers: ["years"], marks: 1 },
                // True/False/Not Given (Q11-13)
                { questionNumber: 11, questionType: "true-false-not-given", questionText: "The corvid brain is built on the same plan as the brain of a mammal.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE", marks: 1 },
                { questionNumber: 12, questionType: "true-false-not-given", questionText: "Only scrub jays that have stolen food themselves move their own stores after being watched.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE", marks: 1 },
                { questionNumber: 13, questionType: "true-false-not-given", questionText: "Young crows learned about the dangerous mask without being trapped in it.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE", marks: 1 },
            ],
        },

        // ╔═══════════════════════════════════════════════════════════╗
        // ║  SECTION 2: THE DEVELOPMENT OF WRITING SYSTEMS (Q14-26)    ║
        // ╚═══════════════════════════════════════════════════════════╝
        {
            sectionNumber: 2,
            title: "The Development of Writing Systems",
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
                        { questionNumber: 14, text: "a description of how a famous object helped scholars to read a lost script", correctAnswer: "D" },
                        { questionNumber: 15, text: "the idea that writing was first used for keeping records of goods", correctAnswer: "B" },
                        { questionNumber: 16, text: "an advantage of a script whose signs do not stand for sounds", correctAnswer: "G" },
                        { questionNumber: 17, text: "the point at which signs began to represent sounds rather than objects", correctAnswer: "C" },
                        { questionNumber: 18, text: "the reason why early writing could be mastered only by a few", correctAnswer: "E" },
                    ],
                },
                // ── Q19-23: SUMMARY WITH OPTIONS (A-I word list) ──
                {
                    groupType: "summary-with-options",
                    startQuestion: 19,
                    endQuestion: 23,
                    mainInstruction: "Complete the summary using the list of words, A-I, below.",
                    subInstruction: "Write the correct letter, A-I, in boxes 19-23 on your answer sheet.",
                    mainHeading: "The rise of the alphabet",
                    phraseList: [
                        { letter: "A", text: "consonants" },
                        { letter: "B", text: "pictures" },
                        { letter: "C", text: "Romans" },
                        { letter: "D", text: "vowels" },
                        { letter: "E", text: "elite" },
                        { letter: "F", text: "Greeks" },
                        { letter: "G", text: "accounts" },
                        { letter: "H", text: "Egyptians" },
                        { letter: "I", text: "dialects" },
                    ],
                    summarySegments: [
                        { type: "text", content: "The earlier scripts used so many signs that reading and writing were restricted to a small" },
                        { type: "blank", questionNumber: 19, correctAnswer: "E" },
                        { type: "text", content: ". The alphabet, which uses only a few letters, changed this. The first alphabets, created by Semitic-speaking peoples, recorded only the" },
                        { type: "blank", questionNumber: 20, correctAnswer: "A" },
                        { type: "text", content: "of a language. It was the" },
                        { type: "blank", questionNumber: 21, correctAnswer: "F" },
                        { type: "text", content: "who later added separate letters for the" },
                        { type: "blank", questionNumber: 22, correctAnswer: "D" },
                        { type: "text", content: ". Their alphabet was then adapted by the" },
                        { type: "blank", questionNumber: 23, correctAnswer: "C" },
                        { type: "text", content: ", whose version is used for a large proportion of the world's languages today." },
                    ],
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
                            questionText: "What does the writer say about writing in the first paragraph?",
                            options: [
                                { letter: "A", text: "It is roughly as old as human speech." },
                                { letter: "B", text: "It developed easily in many separate places." },
                                { letter: "C", text: "It was invented only a small number of times." },
                                { letter: "D", text: "It comes naturally to every healthy child." },
                            ],
                            correctAnswer: "C",
                        },
                        {
                            questionNumber: 25,
                            questionText: "The script known as cuneiform got its name from",
                            options: [
                                { letter: "A", text: "the city of Sumer where it was used." },
                                { letter: "B", text: "the wedge-shaped marks made by a reed." },
                                { letter: "C", text: "the clay tokens used by officials." },
                                { letter: "D", text: "the goods that were being recorded." },
                            ],
                            correctAnswer: "B",
                        },
                        {
                            questionNumber: 26,
                            questionText: "According to the passage, Egyptian hieroglyphs were deciphered when",
                            options: [
                                { letter: "A", text: "an object bearing the same text in Greek was found." },
                                { letter: "B", text: "the Egyptians began to write in Greek." },
                                { letter: "C", text: "the number of signs was greatly reduced." },
                                { letter: "D", text: "scholars learned to speak the ancient language." },
                            ],
                            correctAnswer: "A",
                        },
                    ],
                },
            ],
            questions: [
                // Matching Information (Q14-18)
                { questionNumber: 14, questionType: "matching-information", questionText: "a description of how a famous object helped scholars to read a lost script", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "D", marks: 1 },
                { questionNumber: 15, questionType: "matching-information", questionText: "the idea that writing was first used for keeping records of goods", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "B", marks: 1 },
                { questionNumber: 16, questionType: "matching-information", questionText: "an advantage of a script whose signs do not stand for sounds", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "G", marks: 1 },
                { questionNumber: 17, questionType: "matching-information", questionText: "the point at which signs began to represent sounds rather than objects", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "C", marks: 1 },
                { questionNumber: 18, questionType: "matching-information", questionText: "the reason why early writing could be mastered only by a few", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "E", marks: 1 },
                // Summary With Options (Q19-23)
                { questionNumber: 19, questionType: "summary-with-options", questionText: "reading and writing were restricted to a small __________", options: ["A", "B", "C", "D", "E", "F", "G", "H", "I"], correctAnswer: "E", marks: 1 },
                { questionNumber: 20, questionType: "summary-with-options", questionText: "recorded only the __________ of a language", options: ["A", "B", "C", "D", "E", "F", "G", "H", "I"], correctAnswer: "A", marks: 1 },
                { questionNumber: 21, questionType: "summary-with-options", questionText: "It was the __________ who later added separate letters", options: ["A", "B", "C", "D", "E", "F", "G", "H", "I"], correctAnswer: "F", marks: 1 },
                { questionNumber: 22, questionType: "summary-with-options", questionText: "added separate letters for the __________", options: ["A", "B", "C", "D", "E", "F", "G", "H", "I"], correctAnswer: "D", marks: 1 },
                { questionNumber: 23, questionType: "summary-with-options", questionText: "adapted by the __________", options: ["A", "B", "C", "D", "E", "F", "G", "H", "I"], correctAnswer: "C", marks: 1 },
                // Multiple Choice (Q24-26)
                { questionNumber: 24, questionType: "multiple-choice-full", questionText: "What does the writer say about writing in the first paragraph?", correctAnswer: "C", marks: 1 },
                { questionNumber: 25, questionType: "multiple-choice-full", questionText: "The script known as cuneiform got its name from", correctAnswer: "B", marks: 1 },
                { questionNumber: 26, questionType: "multiple-choice-full", questionText: "According to the passage, Egyptian hieroglyphs were deciphered when", correctAnswer: "A", marks: 1 },
            ],
        },

        // ╔═══════════════════════════════════════════════════════════╗
        // ║  SECTION 3: THE BYSTANDER EFFECT (Q27-40)                  ║
        // ╚═══════════════════════════════════════════════════════════╝
        {
            sectionNumber: 3,
            title: "The Bystander Effect",
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
                            questionText: "What does the writer say about the original newspaper report of the 1964 attack?",
                            options: [
                                { letter: "A", text: "It accurately described what the witnesses had done." },
                                { letter: "B", text: "It overstated the number of witnesses and their indifference." },
                                { letter: "C", text: "It was the first study of the bystander effect." },
                                { letter: "D", text: "It was written by Darley and Latane." },
                            ],
                            correctAnswer: "B",
                        },
                        {
                            questionNumber: 28,
                            questionText: "In the experiment involving smoke, participants were least likely to report it when",
                            options: [
                                { letter: "A", text: "they were completely alone in the room." },
                                { letter: "B", text: "the smoke appeared very suddenly." },
                                { letter: "C", text: "other people present took no action." },
                                { letter: "D", text: "they had not finished the questionnaire." },
                            ],
                            correctAnswer: "C",
                        },
                        {
                            questionNumber: 29,
                            questionText: "In the study involving an apparent seizure, as the number of supposed witnesses rose,",
                            options: [
                                { letter: "A", text: "participants helped more quickly." },
                                { letter: "B", text: "fewer participants helped and they were slower to do so." },
                                { letter: "C", text: "all participants eventually helped." },
                                { letter: "D", text: "the results became impossible to repeat." },
                            ],
                            correctAnswer: "B",
                        },
                        {
                            questionNumber: 30,
                            questionText: "The term 'diffusion of responsibility' refers to the idea that",
                            options: [
                                { letter: "A", text: "people copy the calm behaviour of those around them." },
                                { letter: "B", text: "the duty to act is shared among everyone present." },
                                { letter: "C", text: "witnesses are afraid of being embarrassed." },
                                { letter: "D", text: "most emergencies are difficult to interpret." },
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
                        { questionNumber: 31, text: "The presence of other people makes an individual more likely to help.", correctAnswer: "NO" },
                        { questionNumber: 32, text: "The bystander effect has been confirmed by many later studies.", correctAnswer: "YES" },
                        { questionNumber: 33, text: "People often hide their alarm because they do not want to appear foolish.", correctAnswer: "YES" },
                        { questionNumber: 34, text: "The fear of judgement has a greater influence on women than on men.", correctAnswer: "NOT GIVEN" },
                        { questionNumber: 35, text: "Bystanders who fail to help should be regarded as heartless.", correctAnswer: "NO" },
                    ],
                },
                // ── Q36-37: CHOOSE TWO LETTERS ──
                {
                    groupType: "choose-two-letters",
                    startQuestion: 36,
                    endQuestion: 37,
                    mainInstruction: "Choose TWO letters, A-E.",
                    subInstruction: "Write the correct letters in boxes 36 and 37 on your answer sheet.",
                    questionSets: [
                        {
                            questionNumbers: [36, 37],
                            questionText: "Which TWO of the following are mentioned in the passage as ways of overcoming the bystander effect?",
                            options: [
                                { letter: "A", text: "appealing loudly to the whole crowd at once" },
                                { letter: "B", text: "singling out one particular person to ask for help" },
                                { letter: "C", text: "becoming aware that the bystander effect exists" },
                                { letter: "D", text: "increasing the number of witnesses present" },
                                { letter: "E", text: "waiting calmly until someone else takes the lead" },
                            ],
                            correctAnswers: ["B", "C"],
                        },
                    ],
                },
                // ── Q38-40: SENTENCE COMPLETION (NO MORE THAN TWO WORDS) ──
                {
                    groupType: "sentence-completion",
                    startQuestion: 38,
                    endQuestion: 40,
                    mainInstruction: "Complete the sentences below.",
                    subInstruction: "Choose NO MORE THAN TWO WORDS from the passage for each answer. Write your answers in boxes 38-40 on your answer sheet.",
                    statements: [
                        { questionNumber: 38, text: "Darley and Latane believed that the explanation lay in the __________ rather than in the cruelty of the witnesses.", correctAnswer: "situation" },
                        { questionNumber: 39, text: "The mistaken group conclusion that nothing is wrong is called __________.", correctAnswer: "pluralistic ignorance" },
                        { questionNumber: 40, text: "A victim who has clearly identified one person can no longer assume that the __________ falls to someone else.", correctAnswer: "duty" },
                    ],
                },
            ],
            questions: [
                // Multiple Choice (Q27-30)
                { questionNumber: 27, questionType: "multiple-choice-full", questionText: "What does the writer say about the original newspaper report of the 1964 attack?", correctAnswer: "B", marks: 1 },
                { questionNumber: 28, questionType: "multiple-choice-full", questionText: "In the experiment involving smoke, participants were least likely to report it when", correctAnswer: "C", marks: 1 },
                { questionNumber: 29, questionType: "multiple-choice-full", questionText: "In the study involving an apparent seizure, as the number of supposed witnesses rose,", correctAnswer: "B", marks: 1 },
                { questionNumber: 30, questionType: "multiple-choice-full", questionText: "The term 'diffusion of responsibility' refers to the idea that", correctAnswer: "B", marks: 1 },
                // Yes/No/Not Given (Q31-35)
                { questionNumber: 31, questionType: "yes-no-not-given", questionText: "The presence of other people makes an individual more likely to help.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NO", marks: 1 },
                { questionNumber: 32, questionType: "yes-no-not-given", questionText: "The bystander effect has been confirmed by many later studies.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "YES", marks: 1 },
                { questionNumber: 33, questionType: "yes-no-not-given", questionText: "People often hide their alarm because they do not want to appear foolish.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "YES", marks: 1 },
                { questionNumber: 34, questionType: "yes-no-not-given", questionText: "The fear of judgement has a greater influence on women than on men.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NOT GIVEN", marks: 1 },
                { questionNumber: 35, questionType: "yes-no-not-given", questionText: "Bystanders who fail to help should be regarded as heartless.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NO", marks: 1 },
                // Choose Two Letters (Q36-37)
                { questionNumber: 36, questionType: "choose-two-letters", questionText: "Which TWO of the following are mentioned in the passage as ways of overcoming the bystander effect?", options: ["A", "B", "C", "D", "E"], correctAnswer: "B", marks: 1 },
                { questionNumber: 37, questionType: "choose-two-letters", questionText: "Which TWO of the following are mentioned in the passage as ways of overcoming the bystander effect?", options: ["A", "B", "C", "D", "E"], correctAnswer: "C", marks: 1 },
                // Sentence Completion (Q38-40)
                { questionNumber: 38, questionType: "sentence-completion", questionText: "Darley and Latane believed that the explanation lay in the __________ rather than in the cruelty of the witnesses.", correctAnswer: "situation", acceptableAnswers: ["situation", "the situation"], marks: 1 },
                { questionNumber: 39, questionType: "sentence-completion", questionText: "The mistaken group conclusion that nothing is wrong is called __________.", correctAnswer: "pluralistic ignorance", acceptableAnswers: ["pluralistic ignorance"], marks: 1 },
                { questionNumber: 40, questionType: "sentence-completion", questionText: "A victim who has clearly identified one person can no longer assume that the __________ falls to someone else.", correctAnswer: "duty", acceptableAnswers: ["duty", "the duty"], marks: 1 },
            ],
        },
    ],
};

// ═══════════════════════════════════════════════════════════════
// SEED FUNCTION
// ═══════════════════════════════════════════════════════════════

async function seedReadingTest26() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log("Connected to MongoDB");

        const existing = await ReadingTest.findOne({ testId: readingTest26.testId });
        if (existing) {
            await ReadingTest.findByIdAndUpdate(existing._id, readingTest26);
            console.log("✅ Reading Test 26 UPDATED successfully!");
        } else {
            const admin = await User.findOne({ role: "admin" });
            if (!admin) {
                console.log("❌ Admin user not found!");
                process.exit(1);
            }
            await ReadingTest.create({ ...readingTest26, createdBy: admin._id });
            console.log("✅ Reading Test 26 CREATED successfully!");
        }

        // Verify
        const verify = await ReadingTest.findOne({ testId: readingTest26.testId });
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

seedReadingTest26();
