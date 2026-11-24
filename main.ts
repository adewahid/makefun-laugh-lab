import { mkdirSync, writeFileSync } from "node:fs";

// The entry line, kept as two beats so each half of the joke stays readable.
const firstBeat = "In my defense, the sock was my midlife crisis.";
const secondBeat = "It was cheaper than a sports car.";
const entryText = firstBeat + " " + secondBeat;

// Spec: the output must be 1-200 characters of non-whitespace UTF-8 text.
// Refuse to write anything out of spec instead of submitting junk.
const MAX_CHARS = 200;

const trimmed = entryText.trim();
// Count code points, not UTF-16 units, so multi-byte characters count once.
const charCount = [...trimmed].length;

if (charCount === 0 || charCount > MAX_CHARS) {
  throw new Error("entry line out of spec: " + charCount + " characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entryText, "utf8");
