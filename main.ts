import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "In my defense, the sock was my midlife crisis. It was cheaper than a sports car.";

// The gate only accepts 1-200 characters of non-whitespace UTF-8 text,
// so refuse to write anything out of spec instead of submitting junk.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line out of spec: ${LINE.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
