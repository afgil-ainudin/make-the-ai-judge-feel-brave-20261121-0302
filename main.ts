// Make the AI judge feel brave — entry for make.fun.
// Writes one short, calming text to /output/entry.txt.
// Node 22, no dependencies, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = [
  "The boat will not come in.",
  "So the old man sits on the harbour wall",
  "and mends his net by the last light.",
  "The net slips through his hands, knot by knot.",
  "A gull lands beside him.",
  "He does not look up.",
  "The water lifts the boat, inch by inch,",
  "over the sand, and into the harbour.",
].join("\n");

const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 280 || TEXT.trim().length === 0) {
  throw new Error(`entry must be 1-280 code points, got ${codePoints}`);
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
