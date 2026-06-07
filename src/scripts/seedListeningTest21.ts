import mongoose from "mongoose";
import config from "../app/config";
import { ListeningTest } from "../app/modules/listening/listening.model";

/**
 * Listening Mock Test 21 - Academic
 * Source: public/mock/partial 1 (PARTIAL TEST 01(L)) + answer key
 * Audio: public/audio/Listening-Mock-Test-21-Academic.mp3 (served at /audio/...)
 * Part 1: Birmingham Exhibition (notes)   Part 2: Hospital (MCQ + map)
 * Part 3: Light pollution (matching + MCQ + multi)   Part 4: Football in the UK (multi + sentences)
 */

async function seed() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("Connected to MongoDB");
    const existing = await ListeningTest.findOne({ testNumber: 21 });
    if (existing) {
      await ListeningTest.findByIdAndUpdate(existing._id, data, { runValidators: false });
      console.log("✅ Test 21 updated!");
    } else {
      const db = mongoose.connection.db!;
      const admin = await db.collection("users").findOne({ role: "admin" });
      await ListeningTest.create({ ...data, createdBy: admin?._id || new mongoose.Types.ObjectId() });
      console.log("✅ Test 21 created!");
    }
    const t = await ListeningTest.findOne({ testNumber: 21 });
    if (t) { console.log(`\n📝 ${t.title}`); (t.sections as any[]).forEach((s, i) => { const qs = s.questions.filter((q: any) => q.blockType === "question"); console.log(`  Part ${i + 1}: ${qs.length} questions`); }); }
    await mongoose.disconnect(); process.exit(0);
  } catch (e) { console.error("❌", e); process.exit(1); }
}

const data = {
  testId: "LISTENING_021", testNumber: 21,
  title: "Listening Mock Test 21 – Academic",
  description: "IELTS Academic Listening Test 21 — 4 parts, 40 questions.",
  source: "IELTS Practice Test", mainAudioUrl: "/audio/Listening-Mock-Test-21-Academic.mp3", audioDuration: 1800,
  difficulty: "medium" as const, totalQuestions: 40, totalMarks: 40, duration: 40, isActive: true, usageCount: 0,
  sections: [
    // ═══ PART 1 — Birmingham Exhibition (Q1–10) ═══
    { sectionNumber: 1, title: "Part 1", context: "A recorded message giving information about a car exhibition in Birmingham.", instructions: "Questions 1–10", audioUrl: "", questions: [
      { blockType: "instruction" as const, content: "<strong>Questions 1–10</strong><br/>Complete the notes below.<br/>Write <strong>NO MORE THAN TWO WORDS AND/OR A NUMBER</strong> for each answer." },
      { blockType: "instruction" as const, content: "<strong>BIRMINGHAM EXHIBITION</strong>" },
      { blockType: "question" as const, questionNumber: 1, questionType: "note-completion" as const, questionText: "Open in: ________", correctAnswer: "July", acceptableAnswers: ["July"], marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 2, questionType: "note-completion" as const, questionText: "Length of exhibition: ________", correctAnswer: "three days", acceptableAnswers: ["three days", "3 days"], marks: 1, wordLimit: 2 },
      { blockType: "instruction" as const, content: "<ul><li>A wide range of manufacturers will be showcased.</li></ul>" },
      { blockType: "question" as const, questionNumber: 3, questionType: "note-completion" as const, questionText: "Some cars are available to observe and others are for ________", correctAnswer: "test driving", acceptableAnswers: ["test driving"], marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 4, questionType: "note-completion" as const, questionText: "The ________ is prohibited to take into the museum.", correctAnswer: "camera", acceptableAnswers: ["camera"], marks: 1, wordLimit: 2 },
      { blockType: "instruction" as const, content: "<ul><li>Every ticket includes one free photo.</li></ul>" },
      { blockType: "question" as const, questionNumber: 5, questionType: "note-completion" as const, questionText: "Price of the ticket ________ £ (in advance).", correctAnswer: "110", acceptableAnswers: ["110", "£110"], marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 6, questionType: "note-completion" as const, questionText: "Transfer to Mark ________ (Box Office Manager).", correctAnswer: "Edgeworth", acceptableAnswers: ["Edgeworth"], marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 7, questionType: "note-completion" as const, questionText: "Held in the ________ Palace this year.", correctAnswer: "Summer", acceptableAnswers: ["Summer"], marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 8, questionType: "note-completion" as const, questionText: "Not far from ________.", correctAnswer: "city centre", acceptableAnswers: ["city centre", "city center"], marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 9, questionType: "note-completion" as const, questionText: "Website: www. ________ .com", correctAnswer: "directions", acceptableAnswers: ["directions"], marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 10, questionType: "note-completion" as const, questionText: "Best way to contact: ________", correctAnswer: "enquiring online", acceptableAnswers: ["enquiring online", "enquire online"], marks: 1, wordLimit: 2 },
    ]},

    // ═══ PART 2 — Hospital information + map (Q11–20) ═══
    { sectionNumber: 2, title: "Part 2", context: "A talk about a hospital's services and a description of where its rooms are located.", instructions: "Questions 11–20", audioUrl: "", questions: [
      { blockType: "instruction" as const, content: "<strong>Questions 11–15</strong><br/>Choose the correct letter, <strong>A</strong>, <strong>B</strong> or <strong>C</strong>." },
      { blockType: "question" as const, questionNumber: 11, questionType: "multiple-choice" as const, questionText: "How many patients does the hospital consult every year?", options: ["A. 3,000", "B. 5,000", "C. 11,000"], correctAnswer: "C", marks: 1 },
      { blockType: "question" as const, questionNumber: 12, questionType: "multiple-choice" as const, questionText: "When can patients meet the female doctor?", options: ["A. On weekday mornings.", "B. Three days a week.", "C. Only on Mondays and Fridays."], correctAnswer: "A", marks: 1 },
      { blockType: "question" as const, questionNumber: 13, questionType: "multiple-choice" as const, questionText: "Who is the expert on treating hearing loss?", options: ["A. Mr Roberts.", "B. Mr Green.", "C. Mr Edwards."], correctAnswer: "B", marks: 1 },
      { blockType: "question" as const, questionNumber: 14, questionType: "multiple-choice" as const, questionText: "Where are patients recommended to buy their medicine?", options: ["A. The supermarket in the town.", "B. Pharmacies near the city centre.", "C. The health centre's pharmacy."], correctAnswer: "C", marks: 1 },
      { blockType: "question" as const, questionNumber: 15, questionType: "multiple-choice" as const, questionText: "What will patients be asked whether they are willing to do?", options: ["A. Let one student attend the consultation.", "B. Ask postgraduate students to do treatment.", "C. Meet students in a group discussion."], correctAnswer: "A", marks: 1 },
      { blockType: "instruction" as const, content: "<strong>Questions 16–20</strong><br/>Label the map below.<br/>Write the correct letter, <strong>A–H</strong>, next to questions 16–20." },
      { blockType: "instruction" as const, content: "<div style='text-align:center;margin:10px 0'><img src='/images/listening/test21-part2-map.png' alt='Plan of the medical centre with locations A to H' style='max-width:100%;max-height:480px;border:1px solid #d1d5db;border-radius:4px' /></div>" },
      { blockType: "question" as const, questionNumber: 16, questionType: "map-labeling" as const, questionText: "Reception", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "F", marks: 1 },
      { blockType: "question" as const, questionNumber: 17, questionType: "map-labeling" as const, questionText: "Mr Green's room", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "H", marks: 1 },
      { blockType: "question" as const, questionNumber: 18, questionType: "map-labeling" as const, questionText: "Medical Records Office", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "A", marks: 1 },
      { blockType: "question" as const, questionNumber: 19, questionType: "map-labeling" as const, questionText: "Surgery Room", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "D", marks: 1 },
      { blockType: "question" as const, questionNumber: 20, questionType: "map-labeling" as const, questionText: "Manager's Office", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "C", marks: 1 },
    ]},

    // ═══ PART 3 — Light pollution discussion (Q21–30) ═══
    { sectionNumber: 3, title: "Part 3", context: "Students discuss the opinions of various researchers on light pollution and its effect on wildlife.", instructions: "Questions 21–30", audioUrl: "", questions: [
      { blockType: "instruction" as const, content: "<strong>Questions 21–25</strong><br/>What is the main opinion of each of the following people?<br/>Choose <strong>FIVE</strong> answers from the box and write the correct letter, <strong>A–G</strong>, next to questions 21–25." },
      { blockType: "instruction" as const, content: `<div style='margin:8px 0;padding:10px;border:1px solid #d1d5db'>
<div style='text-align:center;font-weight:bold;margin-bottom:6px'>Opinions</div>
<div><strong>A</strong> &nbsp; lighting restriction</div>
<div><strong>B</strong> &nbsp; alternative lighting</div>
<div><strong>C</strong> &nbsp; reduce the number of insects</div>
<div><strong>D</strong> &nbsp; decline in the number of species</div>
<div><strong>E</strong> &nbsp; climate change</div>
<div><strong>F</strong> &nbsp; impacts on the growth of animals</div>
<div><strong>G</strong> &nbsp; impacts on water quality</div>
</div>` },
      { blockType: "question" as const, questionNumber: 21, questionType: "matching" as const, questionText: "Ken Simpson", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "A", marks: 1 },
      { blockType: "question" as const, questionNumber: 22, questionType: "matching" as const, questionText: "Dave Kepler", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "B", marks: 1 },
      { blockType: "question" as const, questionNumber: 23, questionType: "matching" as const, questionText: "Sharon Grey", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "F", marks: 1 },
      { blockType: "question" as const, questionNumber: 24, questionType: "matching" as const, questionText: "Maria Jackson", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "G", marks: 1 },
      { blockType: "question" as const, questionNumber: 25, questionType: "matching" as const, questionText: "Barbara Swallow", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "D", marks: 1 },
      { blockType: "instruction" as const, content: "<strong>Questions 26 and 27</strong><br/>Choose the correct letter, <strong>A</strong>, <strong>B</strong> or <strong>C</strong>." },
      { blockType: "question" as const, questionNumber: 26, questionType: "multiple-choice" as const, questionText: "What does Jim think about the difference among species in natural and artificial light?", options: ["A. It makes no difference.", "B. Species will die out in natural light.", "C. Species will die out in artificial light."], correctAnswer: "A", marks: 1 },
      { blockType: "question" as const, questionNumber: 27, questionType: "multiple-choice" as const, questionText: "One reason why Jim and Jane felt unsatisfied about the theories discussed in the lecture was that", options: ["A. governments didn't increase any spending on them.", "B. most theories had nothing to do with the exam.", "C. many theories lack solid proof in the field."], correctAnswer: "C", marks: 1 },
      { blockType: "instruction" as const, content: "<strong>Questions 28–30</strong><br/>Choose <strong>THREE</strong> letters, <strong>A–G</strong>.<br/>Which <strong>THREE</strong> topics are they interested in studying in the future?" },
      { blockType: "question" as const, questionNumber: 28, questionType: "multiple-choice-multi" as const, questionText: "Which THREE topics are they interested in studying in the future?", options: ["A. quality-of-life tourism", "B. wildlife park animals", "C. migratory birds", "D. animals living in rural areas", "E. animals living in tropical climates", "F. the impact of different environments on animals", "G. pandas in the zoo"], correctAnswer: "B", marks: 1 },
      { blockType: "question" as const, questionNumber: 29, questionType: "multiple-choice-multi" as const, questionText: "Which THREE topics are they interested in studying in the future?", options: ["A. quality-of-life tourism", "B. wildlife park animals", "C. migratory birds", "D. animals living in rural areas", "E. animals living in tropical climates", "F. the impact of different environments on animals", "G. pandas in the zoo"], correctAnswer: "E", marks: 1 },
      { blockType: "question" as const, questionNumber: 30, questionType: "multiple-choice-multi" as const, questionText: "Which THREE topics are they interested in studying in the future?", options: ["A. quality-of-life tourism", "B. wildlife park animals", "C. migratory birds", "D. animals living in rural areas", "E. animals living in tropical climates", "F. the impact of different environments on animals", "G. pandas in the zoo"], correctAnswer: "F", marks: 1 },
    ]},

    // ═══ PART 4 — Football in the UK (Q31–40) ═══
    { sectionNumber: 4, title: "Part 4", context: "A lecture about the development of football in the UK.", instructions: "Questions 31–40", audioUrl: "", questions: [
      { blockType: "instruction" as const, content: "<strong>Questions 31 and 32</strong><br/>Choose <strong>TWO</strong> letters, <strong>A–E</strong>.<br/>Which <strong>TWO</strong> aspects did the new rules at the end of the 19th century focus on?" },
      { blockType: "question" as const, questionNumber: 31, questionType: "multiple-choice-multi" as const, questionText: "Which TWO aspects did the new rules at the end of the 19th century focus on?", options: ["A. cooperation", "B. competition", "C. moral values", "D. players' physical protection", "E. business model"], correctAnswer: "C", marks: 1 },
      { blockType: "question" as const, questionNumber: 32, questionType: "multiple-choice-multi" as const, questionText: "Which TWO aspects did the new rules at the end of the 19th century focus on?", options: ["A. cooperation", "B. competition", "C. moral values", "D. players' physical protection", "E. business model"], correctAnswer: "D", marks: 1 },
      { blockType: "instruction" as const, content: "<strong>Questions 33–40</strong><br/>Complete the sentences below.<br/>Write <strong>ONE WORD ONLY</strong> for each answer." },
      { blockType: "instruction" as const, content: "<strong>Football in the UK</strong>" },
      { blockType: "question" as const, questionNumber: 33, questionType: "sentence-completion" as const, questionText: "At present the main reason why UK schools push football education is the pressure from ________.", correctAnswer: "parents", acceptableAnswers: ["parents"], marks: 1, wordLimit: 1 },
      { blockType: "question" as const, questionNumber: 34, questionType: "sentence-completion" as const, questionText: "Prior to the 19th century, football players used different ________ of rules.", correctAnswer: "versions", acceptableAnswers: ["versions"], marks: 1, wordLimit: 1 },
      { blockType: "question" as const, questionNumber: 35, questionType: "sentence-completion" as const, questionText: "People attempted to standardise the rules for the whole ________, known as the 'Cambridge Rules', in 1848.", correctAnswer: "country", acceptableAnswers: ["country"], marks: 1, wordLimit: 1 },
      { blockType: "question" as const, questionNumber: 36, questionType: "sentence-completion" as const, questionText: "Attendances were increasing due to the improvement of infrastructure and the ________ system.", correctAnswer: "transport", acceptableAnswers: ["transport"], marks: 1, wordLimit: 1 },
      { blockType: "question" as const, questionNumber: 37, questionType: "sentence-completion" as const, questionText: "Football became popular and it is regarded as a ________ event.", correctAnswer: "social", acceptableAnswers: ["social"], marks: 1, wordLimit: 1 },
      { blockType: "question" as const, questionNumber: 38, questionType: "sentence-completion" as const, questionText: "The football clubs were responsible for most of the ________ and development for the football association.", correctAnswer: "funding", acceptableAnswers: ["funding"], marks: 1, wordLimit: 1 },
      { blockType: "question" as const, questionNumber: 39, questionType: "sentence-completion" as const, questionText: "________ against other teams were also organised by the football clubs.", correctAnswer: "competitions", acceptableAnswers: ["competitions"], marks: 1, wordLimit: 1 },
      { blockType: "question" as const, questionNumber: 40, questionType: "sentence-completion" as const, questionText: "In the 1910s, ________ football players were approved of in the game.", correctAnswer: "professional", acceptableAnswers: ["professional"], marks: 1, wordLimit: 1 },
    ]},
  ]
};

seed();
