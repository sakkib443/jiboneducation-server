import mongoose from "mongoose";
import config from "../app/config";
import { ListeningTest } from "../app/modules/listening/listening.model";

/**
 * Listening Mock Test 22 - Academic
 * Source: public/mock/partial 5 (PARTIAL TEST 05(L)) + answer key
 * Audio: public/audio/Listening-Mock-Test-22-Academic.mp3 (served at /audio/...)
 * Part 1: Job Inquiry (notes)   Part 2: Homestay (MCQ + notes)
 * Part 3: Research project tutorial (MCQ + matching)   Part 4: Graphical symbols (notes + sentences)
 */

async function seed() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("Connected to MongoDB");
    const existing = await ListeningTest.findOne({ testNumber: 22 });
    if (existing) {
      await ListeningTest.findByIdAndUpdate(existing._id, data, { runValidators: false });
      console.log("✅ Test 22 updated!");
    } else {
      const db = mongoose.connection.db!;
      const admin = await db.collection("users").findOne({ role: "admin" });
      await ListeningTest.create({ ...data, createdBy: admin?._id || new mongoose.Types.ObjectId() });
      console.log("✅ Test 22 created!");
    }
    const t = await ListeningTest.findOne({ testNumber: 22 });
    if (t) { console.log(`\n📝 ${t.title}`); (t.sections as any[]).forEach((s, i) => { const qs = s.questions.filter((q: any) => q.blockType === "question"); console.log(`  Part ${i + 1}: ${qs.length} questions`); }); }
    await mongoose.disconnect(); process.exit(0);
  } catch (e) { console.error("❌", e); process.exit(1); }
}

const data = {
  testId: "LISTENING_022", testNumber: 22,
  title: "Listening Mock Test 22 – Academic",
  description: "IELTS Academic Listening Test 22 — 4 parts, 40 questions.",
  source: "IELTS Practice Test", mainAudioUrl: "/audio/Listening-Mock-Test-22-Academic.mp3", audioDuration: 1800,
  difficulty: "medium" as const, totalQuestions: 40, totalMarks: 40, duration: 40, isActive: true, usageCount: 0,
  sections: [
    // ═══ PART 1 — Job Inquiry (Q1–10) ═══
    { sectionNumber: 1, title: "Part 1", context: "A telephone enquiry about part-time job vacancies.", instructions: "Questions 1–10", audioUrl: "", questions: [
      { blockType: "instruction" as const, content: "<strong>Questions 1–10</strong><br/>Complete the notes below.<br/>Write <strong>NO MORE THAN TWO WORDS</strong> for each answer." },
      { blockType: "instruction" as const, content: "<strong>Job Inquiry</strong>" },
      { blockType: "instruction" as const, content: "<ul><li>Type of job required: part-time</li></ul>" },
      { blockType: "question" as const, questionNumber: 1, questionType: "note-completion" as const, questionText: "Position available: ________", correctAnswer: "receptionist", acceptableAnswers: ["receptionist"], marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 2, questionType: "note-completion" as const, questionText: "Duty: to provide ________ service", correctAnswer: "customer", acceptableAnswers: ["customer", "quality customer"], marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 3, questionType: "note-completion" as const, questionText: "Working hours: ________", correctAnswer: "early mornings", acceptableAnswers: ["early mornings", "early morning"], marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 4, questionType: "note-completion" as const, questionText: "Requirement: receive ________ without pay", correctAnswer: "training", acceptableAnswers: ["training"], marks: 1, wordLimit: 2 },
      { blockType: "instruction" as const, content: "<ul><li>Day off: one day a week (request in advance)</li></ul>" },
      { blockType: "question" as const, questionNumber: 5, questionType: "note-completion" as const, questionText: "Position available: ________", correctAnswer: "driver", acceptableAnswers: ["driver"], marks: 1, wordLimit: 2 },
      { blockType: "instruction" as const, content: "<ul><li>Requirements: clean and valid licence, 6 years' experience</li><li>Duty: to take employees to and from work</li></ul>" },
      { blockType: "question" as const, questionNumber: 6, questionType: "note-completion" as const, questionText: "Working hours: ________", correctAnswer: "flexible", acceptableAnswers: ["flexible"], marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 7, questionType: "note-completion" as const, questionText: "Duty: to collect the ________ and to pick up the children", correctAnswer: "grocery shopping", acceptableAnswers: ["grocery shopping", "groceries"], marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 8, questionType: "note-completion" as const, questionText: "Day off: ________", correctAnswer: "weekends", acceptableAnswers: ["weekends"], marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 9, questionType: "note-completion" as const, questionText: "Position: Cashier in a ________", correctAnswer: "cinema", acceptableAnswers: ["cinema"], marks: 1, wordLimit: 2 },
      { blockType: "instruction" as const, content: "<ul><li>Working hours: 17.30 – 22.30</li><li>Duty: to sell and dispense tickets; to provide refreshments</li></ul>" },
      { blockType: "question" as const, questionNumber: 10, questionType: "note-completion" as const, questionText: "Duty: to make ________", correctAnswer: "bookings", acceptableAnswers: ["bookings"], marks: 1, wordLimit: 2 },
      { blockType: "instruction" as const, content: "<ul><li>Day off: Mondays</li></ul>" },
    ]},

    // ═══ PART 2 — Homestay programme (Q11–20) ═══
    { sectionNumber: 2, title: "Part 2", context: "A talk about a homestay programme and how to apply for it.", instructions: "Questions 11–20", audioUrl: "", questions: [
      { blockType: "instruction" as const, content: "<strong>Questions 11–14</strong><br/>Choose the correct letter, <strong>A</strong>, <strong>B</strong> or <strong>C</strong>." },
      { blockType: "question" as const, questionNumber: 11, questionType: "multiple-choice" as const, questionText: "The host families will", options: ["A. earn a lot of money.", "B. receive no pay.", "C. receive stable pay."], correctAnswer: "C", marks: 1 },
      { blockType: "question" as const, questionNumber: 12, questionType: "multiple-choice" as const, questionText: "What is the guest expected to overcome when suffering from culture shock?", options: ["A. loneliness", "B. difficulty making friends", "C. language barriers"], correctAnswer: "B", marks: 1 },
      { blockType: "question" as const, questionNumber: 13, questionType: "multiple-choice" as const, questionText: "What can the guests do if they want to become familiar with host families?", options: ["A. talk about personal interests", "B. clean their rooms", "C. cook together"], correctAnswer: "A", marks: 1 },
      { blockType: "question" as const, questionNumber: 14, questionType: "multiple-choice" as const, questionText: "What is likely to happen to the guests in the long run?", options: ["A. They will enhance cultural understanding.", "B. They will gain overseas experience.", "C. They will know more people from different countries."], correctAnswer: "A", marks: 1 },
      { blockType: "instruction" as const, content: "<strong>Questions 15–20</strong><br/>Complete the notes below.<br/>Write <strong>NO MORE THAN TWO WORDS</strong> for each answer." },
      { blockType: "instruction" as const, content: "<strong>How to apply for a homestay</strong>" },
      { blockType: "instruction" as const, content: "<ul><li>Visit the website and contact the advisor.</li></ul>" },
      { blockType: "question" as const, questionNumber: 15, questionType: "note-completion" as const, questionText: "Keep in touch with the ________", correctAnswer: "registration office", acceptableAnswers: ["registration office"], marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 16, questionType: "note-completion" as const, questionText: "Provide two photos, one for the host family and the other for ________", correctAnswer: "records", acceptableAnswers: ["records", "own records"], marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 17, questionType: "note-completion" as const, questionText: "Send in some documents to confirm your ________", correctAnswer: "identity", acceptableAnswers: ["identity"], marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 18, questionType: "note-completion" as const, questionText: "Receive ________ within 7 working days", correctAnswer: "acknowledgement", acceptableAnswers: ["acknowledgement", "acknowledgment"], marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 19, questionType: "note-completion" as const, questionText: "Have an ________ in London", correctAnswer: "interview", acceptableAnswers: ["interview"], marks: 1, wordLimit: 2 },
      { blockType: "instruction" as const, content: "<ul><li>Pay the extra fee for a fast-track service.</li></ul>" },
      { blockType: "question" as const, questionNumber: 20, questionType: "note-completion" as const, questionText: "Receive a written ________", correctAnswer: "decision", acceptableAnswers: ["decision"], marks: 1, wordLimit: 2 },
    ]},

    // ═══ PART 3 — Research project tutorial (Q21–30) ═══
    { sectionNumber: 3, title: "Part 3", context: "A tutorial discussion between a professor and two students, Jane and Douglas, about their research project.", instructions: "Questions 21–30", audioUrl: "", questions: [
      { blockType: "instruction" as const, content: "<strong>Questions 21–26</strong><br/>Choose the correct letter, <strong>A</strong>, <strong>B</strong> or <strong>C</strong>." },
      { blockType: "question" as const, questionNumber: 21, questionType: "multiple-choice" as const, questionText: "What kind of research method does the professor recommend?", options: ["A. interview", "B. observation", "C. questionnaire"], correctAnswer: "A", marks: 1 },
      { blockType: "question" as const, questionNumber: 22, questionType: "multiple-choice" as const, questionText: "What is the project based on?", options: ["A. a study they did before in Australia", "B. a similar angle someone has done before", "C. an Australian study"], correctAnswer: "C", marks: 1 },
      { blockType: "question" as const, questionNumber: 23, questionType: "multiple-choice" as const, questionText: "What does the professor advise Douglas to do about the formation of the focus groups?", options: ["A. strengthen the group in size", "B. reduce the number of children in each group", "C. build more than 3 groups"], correctAnswer: "B", marks: 1 },
      { blockType: "question" as const, questionNumber: 24, questionType: "multiple-choice" as const, questionText: "To do the project best, the professor suggests the students", options: ["A. interview various people or sectors.", "B. not be too ambitious.", "C. work hard enough."], correctAnswer: "B", marks: 1 },
      { blockType: "question" as const, questionNumber: 25, questionType: "multiple-choice" as const, questionText: "To gather data, the professor asks Jane", options: ["A. to replace other people's advice.", "B. to simplify the textbook.", "C. to practise using the data table."], correctAnswer: "C", marks: 1 },
      { blockType: "question" as const, questionNumber: 26, questionType: "multiple-choice" as const, questionText: "The reason why Douglas hasn't read enough reference books is that", options: ["A. he doesn't have enough time.", "B. he thinks there are too many books to read.", "C. he hasn't spent time in the library."], correctAnswer: "A", marks: 1 },
      { blockType: "instruction" as const, content: "<strong>Questions 27–30</strong><br/>What do the students decide about the following parts of the project?<br/>Write the correct letter, <strong>A</strong>, <strong>B</strong> or <strong>C</strong>, next to questions 27–30.<br/><em>NB You may use any letter more than once.</em>" },
      { blockType: "instruction" as const, content: `<div style='margin:8px 0;padding:10px;border:1px solid #d1d5db'>
<div><strong>A</strong> &nbsp; Jane will do</div>
<div><strong>B</strong> &nbsp; Douglas will do</div>
<div><strong>C</strong> &nbsp; They will do together</div>
</div>` },
      { blockType: "question" as const, questionNumber: 27, questionType: "matching" as const, questionText: "final report", options: ["A", "B", "C"], correctAnswer: "C", marks: 1 },
      { blockType: "question" as const, questionNumber: 28, questionType: "matching" as const, questionText: "sheet preparation", options: ["A", "B", "C"], correctAnswer: "B", marks: 1 },
      { blockType: "question" as const, questionNumber: 29, questionType: "matching" as const, questionText: "letter", options: ["A", "B", "C"], correctAnswer: "A", marks: 1 },
      { blockType: "question" as const, questionNumber: 30, questionType: "matching" as const, questionText: "transcript", options: ["A", "B", "C"], correctAnswer: "C", marks: 1 },
    ]},

    // ═══ PART 4 — Graphical symbols (Q31–40) ═══
    { sectionNumber: 4, title: "Part 4", context: "A lecture about graphical symbols and ancient writing systems.", instructions: "Questions 31–40", audioUrl: "", questions: [
      { blockType: "instruction" as const, content: "<strong>Questions 31–36</strong><br/>Complete the notes below.<br/>Write <strong>ONE WORD ONLY</strong> for each answer." },
      { blockType: "instruction" as const, content: "<strong>GRAPHICAL SYMBOL</strong>" },
      { blockType: "instruction" as const, content: "<strong>'Graphical symbol'</strong><ul><li>includes the logographs in Egyptian hieroglyphic writing and ancient Chinese pictograms</li><li>found in Africa, the Americas and Oceania</li></ul>" },
      { blockType: "question" as const, questionNumber: 31, questionType: "note-completion" as const, questionText: "still has something to do with ________ use today", correctAnswer: "commercial", acceptableAnswers: ["commercial"], marks: 1, wordLimit: 1 },
      { blockType: "instruction" as const, content: "<strong>Ancient graphic writing systems</strong>" },
      { blockType: "question" as const, questionNumber: 32, questionType: "note-completion" as const, questionText: "Researchers obtain a wide range of ________ about past civilisations.", correctAnswer: "knowledge", acceptableAnswers: ["knowledge"], marks: 1, wordLimit: 1 },
      { blockType: "instruction" as const, content: "<ul><li>The Rosetta Stone was found in 1799 when members of Napoleon's expedition reached Egypt.</li><li>Frenchman Jean-Francois Champollion determined the phonetic values of the symbols in 1822.</li></ul>" },
      { blockType: "question" as const, questionNumber: 33, questionType: "note-completion" as const, questionText: "In those symbols, ________ are used to depict various meanings.", correctAnswer: "lines", acceptableAnswers: ["lines"], marks: 1, wordLimit: 1 },
      { blockType: "instruction" as const, content: "<strong>Camera obscura</strong>" },
      { blockType: "question" as const, questionNumber: 34, questionType: "note-completion" as const, questionText: "________ helps people understand history better.", correctAnswer: "photography", acceptableAnswers: ["photography"], marks: 1, wordLimit: 1 },
      { blockType: "question" as const, questionNumber: 35, questionType: "note-completion" as const, questionText: "Some charities will ________ many endangered species.", correctAnswer: "advertise", acceptableAnswers: ["advertise"], marks: 1, wordLimit: 1 },
      { blockType: "question" as const, questionNumber: 36, questionType: "note-completion" as const, questionText: "A camera was tied to one ________ of a bird.", correctAnswer: "foot", acceptableAnswers: ["foot"], marks: 1, wordLimit: 1 },
      { blockType: "instruction" as const, content: "<strong>Questions 37–40</strong><br/>Complete the sentences below.<br/>Write <strong>ONE WORD ONLY</strong> for each answer." },
      { blockType: "question" as const, questionNumber: 37, questionType: "sentence-completion" as const, questionText: "More ________ will be included in the future with the development of photography.", correctAnswer: "objects", acceptableAnswers: ["objects"], marks: 1, wordLimit: 1 },
      { blockType: "question" as const, questionNumber: 38, questionType: "sentence-completion" as const, questionText: "Companies would like to invest a lot to advertise in ________.", correctAnswer: "newspapers", acceptableAnswers: ["newspapers"], marks: 1, wordLimit: 1 },
      { blockType: "question" as const, questionNumber: 39, questionType: "sentence-completion" as const, questionText: "Designing appealing ________ is used as a way of effective branding.", correctAnswer: "packaging", acceptableAnswers: ["packaging"], marks: 1, wordLimit: 1 },
      { blockType: "question" as const, questionNumber: 40, questionType: "sentence-completion" as const, questionText: "Graphic writing systems are of great importance in the subject of ________.", correctAnswer: "mathematics", acceptableAnswers: ["mathematics", "maths", "math"], marks: 1, wordLimit: 1 },
    ]},
  ]
};

seed();
