/**
 * Fix: Test #11 listening — matching option list appears twice.
 *
 * Cause: 2 instruction blocks ("Themes" / "Desired Outcomes") manually re-list
 * the A–H / A–F options that the matching questions' options[] array already
 * renders as a box. This duplicates the list on screen.
 *
 * Fix: keep the caption (<strong>Themes</strong>) but strip the duplicated
 * letter list from those instruction blocks. options[] / questions / answers
 * are left untouched, so the box + dropdowns are unaffected.
 *
 * Targets ONLY testNumber 11, and ONLY blocks whose content is
 *   <strong>...</strong><br/>A. ...   (caption immediately followed by a lettered list)
 *
 * Usage:
 *   node scripts/fix_test11_duplicate_options.js          (dry-run, no writes)
 *   node scripts/fix_test11_duplicate_options.js --apply   (writes the change)
 */
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();

const APPLY = process.argv.includes("--apply");
const TARGET = /<\/strong><br\/>[A-H]\.\s/; // caption then <br/> then "A. "

(async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    const coll = mongoose.connection.db.collection("listeningtests");

    const test = await coll.findOne({ testNumber: 11 });
    if (!test) throw new Error("Test #11 not found");

    const changes = [];
    const sections = test.sections.map((s) => ({
      ...s,
      questions: (s.questions || []).map((q) => {
        if (q.blockType === "instruction" && typeof q.content === "string" && TARGET.test(q.content)) {
          const caption = q.content.match(/^(<strong>.*?<\/strong>)/)?.[1];
          if (caption && caption !== q.content) {
            changes.push({ section: s.sectionNumber, before: q.content, after: caption });
            return { ...q, content: caption };
          }
        }
        return q;
      }),
    }));

    console.log(`\nTest #11 — found ${changes.length} block(s) to fix:\n`);
    changes.forEach((c, i) => {
      console.log(`  [${i + 1}] Section ${c.section}`);
      console.log(`      BEFORE: ${c.before}`);
      console.log(`      AFTER : ${c.after}\n`);
    });

    if (changes.length === 0) {
      console.log("Nothing to change (already fixed?). Exiting.");
      return;
    }

    if (!APPLY) {
      console.log("DRY-RUN only — no changes written. Re-run with --apply to save.");
      return;
    }

    // Backup original block contents before writing
    const backupPath = path.join(__dirname, "fix_test11_backup.json");
    fs.writeFileSync(backupPath, JSON.stringify({ testNumber: 11, changes }, null, 2));
    console.log(`Backup of original content saved to: ${backupPath}`);

    const res = await coll.updateOne({ testNumber: 11 }, { $set: { sections } });
    console.log(`\n✅ Applied. matched=${res.matchedCount}, modified=${res.modifiedCount}`);

    // Verify
    const after = await coll.findOne({ testNumber: 11 }, { projection: { sections: 1 } });
    const stillDup = after.sections.some((s) =>
      (s.questions || []).some((q) => q.blockType === "instruction" && typeof q.content === "string" && TARGET.test(q.content))
    );
    console.log(stillDup ? "⚠️  Some lettered list still present!" : "Verified: no duplicated lettered instruction blocks remain.");
  } catch (e) {
    console.error("ERROR:", e.message);
  } finally {
    await mongoose.disconnect();
  }
})();
