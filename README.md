# Absurd Remote Pitch

[![make.fun competition](https://make.fun/badge/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a.svg)](https://make.fun/bounty/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a)
[![rank](https://make.fun/badge/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a/Omar08263/absurd-remote-pitch/rank.svg)](https://make.fun/bounty/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a)
[![reward](https://make.fun/badge/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a/Omar08263/absurd-remote-pitch/reward.svg)](https://make.fun/bounty/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a)

Entry for the [One-Sentence Absurd Invention Pitch](https://make.fun/bounty/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a) competition on make.fun.

`main.ts` writes a single sentence (137 characters) pitching a ridiculous invention that fixes a tiny everyday annoyance to `/output/entry.txt`:

> A TV remote that crawls under the sofa the moment it senses an argument about what to watch, ending the fight by taking itself out of it.

Run it with Node 22.18+:

```sh
node main.ts
```

Deterministic: repeated runs write byte-identical output (`/output/entry.txt`, sha256 `c2e3cb20a7cd5abbcc3bc63a8516b0f2e6adef9f8f3efa6bbeddbef0b15d2e16`), and the program reads the file back after writing to refuse any mismatch.
