// main.ts — Fortune Cookie for the Liquidated Trader: one fortune cookie line.
// Prints the entry to stdout and writes it to /output/entry.txt (the file the gate reads).

import { mkdirSync, writeFileSync } from 'node:fs';

const entry = "The stars say your luck returns soon — they waited until your margin was gone to tell you.";

process.stdout.write(entry);

try {
  mkdirSync('/output', { recursive: true });
  writeFileSync('/output/entry.txt', entry);
} catch {
  // The gate reads /output/entry.txt when it can be written; stdout still carries the entry.
}
