// One-Sentence Absurd Invention Pitch
// Writes one sentence (1-220 chars) pitching a ridiculous invention that
// fixes a tiny everyday annoyance, to /output/entry.txt.
// Static code only: no eval, no Function, no vm, no dynamic import.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "A TV remote that crawls under the sofa the moment it senses an argument about what to watch, ending the fight by taking itself out of it.";

// The sealed gate accepts 1–220 characters; refuse to write anything outside it.
if (LINE.length < 1 || LINE.length > 220) {
  throw new Error(`entry line is ${LINE.length} chars, outside the 1-220 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
