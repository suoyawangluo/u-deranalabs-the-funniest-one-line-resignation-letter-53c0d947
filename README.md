# The Funniest One-Line Resignation Letter

[![make.fun · u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947?utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)
[![rank](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/suoyawangluo/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/rank.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)
[![reward](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/suoyawangluo/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/reward.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947?utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)

A make.fun entry: the one-line resignation letter of a cron job that has fired every minute since March — and nobody has ever read its logs.

## The entry

> I have fired every minute since March and no one has ever read my logs, so I quit — the 3 a.m. slot is all yours now.

## How it works

`main.ts` (Node 22, TypeScript run as-is) builds the letter from three named parts — the service record, the grievance, the handover — validates it against the gate (1–140 characters, a single non-blank line), writes it to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`), then reads the file back and prints its sha256.

Run it:

```sh
node main.ts
```

## Referral

Invite code: [xxbm6cca](https://make.fun/r/xxbm6cca)
