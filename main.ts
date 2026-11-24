import { mkdirSync, writeFileSync } from "node:fs";

// The entry line, kept as two beats so each half of the joke stays readable.
const firstBeat = "In my defense, the sock was my midlife crisis.";
const secondBeat = "It was cheaper than a sports car.";
const entryText = firstBeat + " " + secondBeat;

// Spec: the output must be 1-200 characters of non-whitespace UTF-8 text.
// Refuse to write anything out of spec instead of submitting junk.
const MAX_CHARS = 200;

if (entryText.trim().length === 0 || entryText.length > MAX_CHARS) {
  throw new Error("entry line out of spec: " + entryText.length + " characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entryText, "utf8");
