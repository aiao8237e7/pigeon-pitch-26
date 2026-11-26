// Pigeon Pitch — one-line elevator pitch a city pigeon gives investors.
// Writes exactly one line (130 chars, within the 200-char cap) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "Our startup turns statues into prime real estate — investors, we're pre-seed, pre-revenue, and already pooping on the competition.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH + "\n", "utf8");
