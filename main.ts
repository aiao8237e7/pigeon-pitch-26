// Pigeon Pitch — one-line elevator pitch a city pigeon gives investors.
// Writes exactly one line (168 chars, within the 200-char cap) to /output/entry.txt.
// The joke turns on "seed round": the pigeon's literal seed is the product,
// sold back to the birds who begged for it — then the dry startup triplet
// (pre-revenue, zero churn) lands on the pigeon classic, pooping on the
// competition. Two jokes, one word doing double duty.

import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "Our seed round is literally seed — birdseed, sold back to the birds who begged for it. Investors, we're pre-revenue, zero churn, and already pooping on the competition.";

if (!PITCH || PITCH.length > 200 || PITCH.includes("\n")) {
  throw new Error(`PITCH must be one line of 1-200 chars, got ${PITCH.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH + "\n", "utf8");
