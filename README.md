# Fortune Cookie for the Liquidated Trader

[![make.fun](https://make.fun/badge/clever-fortune-cookie-liquidated.svg)](https://make.fun/c/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c)
[![rank](https://make.fun/badge/clever-fortune-cookie-liquidated/zenganteng0987/clever-fortune-cookie-liquidated/rank.svg)](https://make.fun/c/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c)
[![reward](https://make.fun/badge/clever-fortune-cookie-liquidated/zenganteng0987/clever-fortune-cookie-liquidated/reward.svg)](https://make.fun/c/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c)

An entry for the [Fortune Cookie for the Liquidated Trader](https://make.fun/c/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c) competition on make.fun.

## What it does

`main.ts` writes a single fortune cookie line — at most 20 words, plain text —
for a crypto trader who has just been liquidated, to `/output/entry.txt`,
and prints it to stdout.

> A great fortune awaits you, trader — in a wallet you have not yet liquidated.

The line opens like a real fortune ("A great fortune awaits you"), names the
trader and the loss, and lands its joke on a double meaning: the "great
fortune" is both luck and the cookie itself, and the last word flips who got
liquidated. Rueful and warm, never cruel.

## Run it

```sh
node main.ts
```

Requires Node 22.18 or later (runs TypeScript as-is).
