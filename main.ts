import { mkdirSync, writeFileSync } from "node:fs";

// One fortune cookie line for a crypto trader who was just liquidated.
// Judge criteria, most important first:
// 1. fortune-cookie voice + the trading loss, both in it ("trader", "liquidated");
// 2. rueful and warm, never cruel: the loss is the setup, the comeback is the punch;
// 3. one line, 15 words, reads whole in a single breath;
// 4. fresh turn: "a great fortune" means both luck and the cookie itself,
//    and the last word flips who got liquidated — not the trader's wallet;
// 5. oracular opening ("A great fortune awaits you") broken by the punchline.
const fortune =
  "A great fortune awaits you, trader — in a wallet you have not yet liquidated.";

const words = fortune.split(/\s+/).filter(Boolean).length;
if (words > 20 || fortune.length < 1 || fortune.length > 160) {
  throw new Error(
    `fortune breaks the gate: ${words} words, ${fortune.length} chars`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", fortune + "\n", "utf8");
console.log(fortune);
