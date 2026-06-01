/**
 * Rebuild Listening Mock Test #11 with the correct content from
 *   public/New folder/mock 11/10011 listening (1).docx  (questions)
 *   public/New folder/mock 11/10011 listening (2).docx  (answers)
 *
 * Replaces sections[]; keeps testNumber, testId, title, mainAudioUrl, etc.
 */

const mongoose = require("mongoose");
require("dotenv").config();

// ── Section 1: Veerampattinam village information system (Q1–10) ────────────
const section1 = {
    sectionNumber: 1,
    title: "Part 1",
    context: "A talk about how the Indian village of Veerampattinam shares information using a community system.",
    instructions: "Questions 1–10",
    audioUrl: "",
    imageUrl: "",
    questions: [
        { blockType: "instruction", content: "<strong>Questions 1–4</strong><br/>Complete the summary below.<br/>Write <strong>NO MORE THAN TWO WORDS</strong> for each answer." },
        { blockType: "instruction", content: "<strong>Veerampattinam Village Information System</strong>" },
        { blockType: "question", questionNumber: 1, questionType: "summary-completion", questionText: "________ checks on the web.", correctAnswer: "a local volunteer", acceptableAnswers: ["local volunteer", "volunteer", "a volunteer"], wordLimit: 2, marks: 1 },
        { blockType: "question", questionNumber: 2, questionType: "summary-completion", questionText: "System powered by ________", correctAnswer: "solar panels", acceptableAnswers: ["solar panel"], wordLimit: 2, marks: 1 },
        { blockType: "question", questionNumber: 3, questionType: "summary-completion", questionText: "Information arrives by ________", correctAnswer: "wireless transmission system", acceptableAnswers: ["wireless system", "wireless transmission"], wordLimit: 3, marks: 1 },
        { blockType: "question", questionNumber: 4, questionType: "summary-completion", questionText: "Villagers are then informed by ________", correctAnswer: "public address system", acceptableAnswers: ["public address"], wordLimit: 3, marks: 1 },

        { blockType: "instruction", content: "<strong>Questions 5–7</strong><br/>Which <strong>THREE</strong> types of information do villagers obtain from this service?<br/>Choose <strong>THREE</strong> letters <strong>A–F</strong>." },
        { blockType: "question", questionNumber: 5, questionType: "multiple-choice-multi", questionText: "Which THREE types of information do villagers obtain from this service?", options: ["A. Agricultural Prices", "B. Educational Information", "C. Employment Information", "D. Farming Advice", "E. Government Regulations", "F. Weather Forecasts"], correctAnswer: ["A", "C", "F"], marks: 1 },
        { blockType: "question", questionNumber: 6, questionType: "multiple-choice-multi", questionText: "Which THREE types of information do villagers obtain from this service?", options: ["A. Agricultural Prices", "B. Educational Information", "C. Employment Information", "D. Farming Advice", "E. Government Regulations", "F. Weather Forecasts"], correctAnswer: ["A", "C", "F"], marks: 1 },
        { blockType: "question", questionNumber: 7, questionType: "multiple-choice-multi", questionText: "Which THREE types of information do villagers obtain from this service?", options: ["A. Agricultural Prices", "B. Educational Information", "C. Employment Information", "D. Farming Advice", "E. Government Regulations", "F. Weather Forecasts"], correctAnswer: ["A", "C", "F"], marks: 1 },

        { blockType: "instruction", content: "<strong>Questions 8–10</strong><br/>Choose the correct letter, <strong>A</strong>, <strong>B</strong> or <strong>C</strong>." },
        { blockType: "question", questionNumber: 8, questionType: "multiple-choice", questionText: "The project was designed by a well-known", options: ["A. businessman", "B. geneticist", "C. politician"], correctAnswer: "B", marks: 1 },
        { blockType: "question", questionNumber: 9, questionType: "multiple-choice", questionText: "It is important that the system is managed by", options: ["A. government officials", "B. external experts", "C. the villagers themselves"], correctAnswer: "C", marks: 1 },
        { blockType: "question", questionNumber: 10, questionType: "multiple-choice", questionText: "The project means that villagers are better able to deal with", options: ["A. middlemen", "B. employers", "C. landlords"], correctAnswer: "A", marks: 1 },
    ],
};

// ── Section 2: Swimming pool & clubhouse continents (Q11–20) ────────────────
const themeOpts = ["A. Film and music", "B. Mountains", "C. Space travel", "D. Jewellery", "E. Animals", "F. Waterways", "G. Volcano", "H. Ancient forts"];
const section2 = {
    sectionNumber: 2,
    title: "Part 2",
    context: "A radio segment about a new community swimming pool and themed clubhouse rooms.",
    instructions: "Questions 11–20",
    audioUrl: "",
    imageUrl: "",
    questions: [
        { blockType: "instruction", content: "<strong>Questions 11–14</strong><br/>Choose the correct letter, <strong>A</strong>, <strong>B</strong> or <strong>C</strong>." },
        { blockType: "question", questionNumber: 11, questionType: "multiple-choice", questionText: "The top two proposals for the design of the swimming pool were chosen by", options: ["A. the public", "B. the radio station", "C. architects"], correctAnswer: "A", marks: 1 },
        { blockType: "question", questionNumber: 12, questionType: "multiple-choice", questionText: "What is special about the pool's construction?", options: ["A. It was constructed by the people.", "B. Its architectural style is one-of-a-kind.", "C. It is the first pool in Bridgewater."], correctAnswer: "B", marks: 1 },
        { blockType: "question", questionNumber: 13, questionType: "multiple-choice", questionText: "News reports covering the new pool expressed concerns over", options: ["A. price", "B. safety", "C. size"], correctAnswer: "C", marks: 1 },
        { blockType: "question", questionNumber: 14, questionType: "multiple-choice", questionText: "What factor of the pool's Grand Opening remains undecided?", options: ["A. who will host", "B. the exact opening time", "C. what sculpture will be in the foyer"], correctAnswer: "C", marks: 1 },

        { blockType: "instruction", content: "<strong>Questions 15–20</strong><br/>What is the theme of each continent based on the rooms of the clubhouse?<br/>Choose <strong>SIX</strong> answers from the box and write the correct letter, <strong>A–H</strong>, next to questions 15–20." },
        { blockType: "instruction", content: "<strong>Themes</strong><br/>A. Film and music &nbsp; B. Mountains &nbsp; C. Space travel &nbsp; D. Jewellery<br/>E. Animals &nbsp; F. Waterways &nbsp; G. Volcano &nbsp; H. Ancient forts" },
        { blockType: "question", questionNumber: 15, questionType: "matching", questionText: "Asia", options: themeOpts, correctAnswer: "E", marks: 1 },
        { blockType: "question", questionNumber: 16, questionType: "matching", questionText: "Antarctica", options: themeOpts, correctAnswer: "B", marks: 1 },
        { blockType: "question", questionNumber: 17, questionType: "matching", questionText: "Africa", options: themeOpts, correctAnswer: "D", marks: 1 },
        { blockType: "question", questionNumber: 18, questionType: "matching", questionText: "North America", options: themeOpts, correctAnswer: "C", marks: 1 },
        { blockType: "question", questionNumber: 19, questionType: "matching", questionText: "Europe", options: themeOpts, correctAnswer: "H", marks: 1 },
        { blockType: "question", questionNumber: 20, questionType: "matching", questionText: "South America", options: themeOpts, correctAnswer: "G", marks: 1 },
    ],
};

// ── Section 3: Tutor and Kathy (Q21–30) ─────────────────────────────────────
const outcomeOpts = ["A. Practical Experience", "B. Publish the Work", "C. Join Machine Engineer Society", "D. Give Suggestions", "E. Stay Up to Date", "F. Make Important Contacts"];
const section3 = {
    sectionNumber: 3,
    title: "Part 3",
    context: "A discussion between a student, Kathy, and her tutor about Kathy's research paper and career plans.",
    instructions: "Questions 21–30",
    audioUrl: "",
    imageUrl: "",
    questions: [
        { blockType: "instruction", content: "<strong>Questions 21–25</strong><br/>Choose the correct letter, <strong>A</strong>, <strong>B</strong> or <strong>C</strong>." },
        { blockType: "question", questionNumber: 21, questionType: "multiple-choice", questionText: "Which part has the tutor already read?", options: ["A. The introductory chapter", "B. The procedure section", "C. The results and discussion section"], correctAnswer: "A", marks: 1 },
        { blockType: "question", questionNumber: 22, questionType: "multiple-choice", questionText: "Which part of the paper did the tutor like?", options: ["A. introduction", "B. layout", "C. background information"], correctAnswer: "B", marks: 1 },
        { blockType: "question", questionNumber: 23, questionType: "multiple-choice", questionText: "Kathy and the tutor both agree to continue to", options: ["A. refer a lot to the example received in class.", "B. copy the information.", "C. conduct further research in the library."], correctAnswer: "C", marks: 1 },
        { blockType: "question", questionNumber: 24, questionType: "multiple-choice", questionText: "Kathy asks the tutor for help with the ________ section.", options: ["A. abstract", "B. bibliography", "C. appendix"], correctAnswer: "B", marks: 1 },
        { blockType: "question", questionNumber: 25, questionType: "multiple-choice", questionText: "What will Kathy do next?", options: ["A. try out software", "B. work on the bibliography", "C. make an animation"], correctAnswer: "A", marks: 1 },

        { blockType: "instruction", content: "<strong>Questions 26–30</strong><br/>What is the desired outcome of each of the following courses of action?<br/>Choose <strong>FIVE</strong> answers from the box and write the correct letter, <strong>A–F</strong>, next to questions 26–30." },
        { blockType: "instruction", content: "<strong>Desired Outcomes</strong><br/>A. Practical Experience<br/>B. Publish the Work<br/>C. Join Machine Engineer Society<br/>D. Give Suggestions<br/>E. Stay Up to Date<br/>F. Make Important Contacts" },
        { blockType: "question", questionNumber: 26, questionType: "matching", questionText: "Make a good grade", options: outcomeOpts, correctAnswer: "C", marks: 1 },
        { blockType: "question", questionNumber: 27, questionType: "matching", questionText: "Meet engineering professionals", options: outcomeOpts, correctAnswer: "F", marks: 1 },
        { blockType: "question", questionNumber: 28, questionType: "matching", questionText: "Visit the factory", options: outcomeOpts, correctAnswer: "E", marks: 1 },
        { blockType: "question", questionNumber: 29, questionType: "matching", questionText: "Seek summer internships", options: outcomeOpts, correctAnswer: "A", marks: 1 },
        { blockType: "question", questionNumber: 30, questionType: "matching", questionText: "Present dissertation", options: outcomeOpts, correctAnswer: "B", marks: 1 },
    ],
};

// ── Section 4: Iron Age Britain (Q31–40) ────────────────────────────────────
const section4 = {
    sectionNumber: 4,
    title: "Part 4",
    context: "A lecture about life in Iron Age Britain — its time period, farming, animals and architecture.",
    instructions: "Questions 31–40",
    audioUrl: "",
    imageUrl: "",
    questions: [
        { blockType: "instruction", content: "<strong>Questions 31–40</strong><br/>Complete the notes below.<br/>Write <strong>NO MORE THAN THREE WORDS</strong> for each answer." },
        { blockType: "instruction", content: "<strong>Iron Age Britain</strong>" },
        { blockType: "instruction", content: "<u><strong>TIME LASTED</strong></u>" },
        { blockType: "question", questionNumber: 31, questionType: "note-completion", questionText: "From 750 B.C. to ________", correctAnswer: "43 AD", acceptableAnswers: ["43 A.D.", "AD 43"], wordLimit: 3, marks: 1 },
        { blockType: "question", questionNumber: 32, questionType: "note-completion", questionText: "The life in the north and south was quite different due to ________", correctAnswer: "climate and geography", acceptableAnswers: ["climate, geography", "geography and climate"], wordLimit: 3, marks: 1 },
        { blockType: "instruction", content: "<u><strong>A LAND OF SMALL FARMS</strong></u>" },
        { blockType: "question", questionNumber: 33, questionType: "note-completion", questionText: "The daily life was mainly to maintain ________", correctAnswer: "crops, livestock", acceptableAnswers: ["crops and livestock"], wordLimit: 3, marks: 1 },
        { blockType: "question", questionNumber: 34, questionType: "note-completion", questionText: "The crops were stored in granaries, or in ________ 2–3-metre-deep pits.", correctAnswer: "bell-shaped", acceptableAnswers: ["bell shaped"], wordLimit: 2, marks: 1 },
        { blockType: "question", questionNumber: 35, questionType: "note-completion", questionText: "The most common farm animals were ________, ________ and ________.", correctAnswer: "cattle, sheep, pigs", acceptableAnswers: ["cattle, sheep and pigs"], wordLimit: 3, marks: 1 },
        { blockType: "instruction", content: "<u><strong>ARCHITECTURE</strong></u>" },
        { blockType: "question", questionNumber: 36, questionType: "note-completion", questionText: "In Cornwall, the settlement was made up of ________", correctAnswer: "individual stone houses", acceptableAnswers: ["individual stone house", "stone houses"], wordLimit: 3, marks: 1 },
        { blockType: "question", questionNumber: 37, questionType: "note-completion", questionText: "In Wessex, roundhouses were found. The mainframe of roundhouses was ________", correctAnswer: "upright timbers", acceptableAnswers: ["upright timber"], wordLimit: 2, marks: 1 },
        { blockType: "question", questionNumber: 38, questionType: "note-completion", questionText: "The open fire in the house provided cooked food, ________ and ________ food.", correctAnswer: "warmth, light", acceptableAnswers: ["warmth and light", "light, warmth"], wordLimit: 3, marks: 1 },
        { blockType: "question", questionNumber: 39, questionType: "note-completion", questionText: "People also fermented grains to make ________", correctAnswer: "beer", acceptableAnswers: [], wordLimit: 1, marks: 1 },
        { blockType: "question", questionNumber: 40, questionType: "note-completion", questionText: "Besides smoke and heat, people also used ________ to preserve meat.", correctAnswer: "salt", acceptableAnswers: [], wordLimit: 1, marks: 1 },
    ],
};

(async () => {
    await mongoose.connect(process.env.DATABASE_URL);
    const db = mongoose.connection.db;

    const existing = await db.collection("listeningtests").findOne({ testNumber: 11 });
    if (!existing) {
        console.error("❌ Mock 11 not found in DB.");
        process.exit(1);
    }
    console.log("Found #11:", existing.title, "(audio:", existing.mainAudioUrl ? "✓" : "✗", ")");

    const newSections = [section1, section2, section3, section4];

    const res = await db.collection("listeningtests").updateOne(
        { testNumber: 11 },
        {
            $set: {
                sections: newSections,
                totalQuestions: 40,
                totalMarks: 40,
                duration: 40,
                difficulty: "medium",
                testType: "academic",
                description: "IELTS Academic Listening — Mock Test 11. 4 parts, 40 questions.",
                source: "Mock 11",
                updatedAt: new Date(),
            },
        }
    );
    console.log("\n✅ Updated:", res.modifiedCount);

    // Verify
    const v = await db.collection("listeningtests").findOne({ testNumber: 11 });
    let total = 0,
        withAns = 0;
    v.sections.forEach((s) =>
        s.questions.forEach((q) => {
            if ((q.blockType || "question") === "question" && q.questionNumber != null) {
                total++;
                if (q.correctAnswer != null && q.correctAnswer !== "") withAns++;
            }
        })
    );
    console.log("Sections:", v.sections.length, "| Questions:", total, "| With answer:", withAns);
    console.log("Audio:", v.mainAudioUrl ? "✓ " + v.mainAudioUrl.slice(-40) : "MISSING");

    mongoose.disconnect();
})().catch((e) => {
    console.error("ERROR:", e.message);
    process.exit(1);
});
