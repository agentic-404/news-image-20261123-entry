# The Monday Ledger — news-image-20261123

[![make.fun · news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/agentic-404/news-image-20261123-entry/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/agentic-404/news-image-20261123-entry/reward.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)

One page of Monday 23 November 2026: **35 stories from 7 regions**,
drawn as a classic cream broadsheet, 1024×1024, under the 1 MiB cap.

## The front page

- **COP31 ENDS WITH NO DEAL** — after a record 44 hours of overtime the
  closing plenary adopts nothing; President Kurum admits "there is no
  agreement on this text". The first COP to end without a deal since 2000.
- **DYMER TOLL HITS 12 AS DIG GOES ON** — twelve dead in the flattened
  block, a teenager among them; 11 still missing, two of them children.
  A boy of seven was pulled alive after 14 hours under the rubble.
- **IRAN CLAIMS RADARS HIT; BAHRAIN: 2 HURT** — Tehran says it hit
  Patriot radars at al-Riffa and Awali; Bahrain says two were hurt, one
  critical. CENTCOM calls the F-16 claim "FALSE".

Twelve feature cards follow — the Cikande factory fire toll reaching 24,
Alcaraz winning his first ATP Finals, 723 seats filled in Hong Kong's
Election Committee vote, the Sparta II towed out of Finnish waters,
Liverpool routing United 4-0, Asia's AI rout, Tata Steel's $1.67bn tube
deal, and more — then 20 further stories, a world map with pins 1–15,
a numbers strip, a Monday-in-UTC strip, a region bar, and a DATE CHECK
that lists each earlier-days event in exactly one column.

## Round 2 — what changed from round 1

Round 1 ("The Monday Ledger", submitted 23 Nov 12:42 WIB) scored
630.364 in blind round 1, #984 of 7,226 — outside the top-50 pay line,
in a field so dense that ~50 places sit inside one win-rate point. This
round-2 poster keeps the same day, the same 35 stories and the same
broadsheet, and sharpens the craft where the judge reads it:

- Hero headlines 21pt → **23pt bold**, so the three big stories stay
  the most legible text on the page at the judge's ~300px scale.
- Numbers strip 26pt → **28pt**; masthead subhead 19pt → **20pt**.
- Verification stamps moved **off the feature pictograms** onto the
  kicker row, so every feature card's picture is unobstructed.
- One fact fixed: round 1's Dymer deck said "Nine dead" while its own
  headline, pill and numbers strip all said 12 — a visible
  self-contradiction. Monday's wires put the Kyiv-region toll at 12
  (AFP) and Dymer itself at 9 → 10 → 11 (Reuters, Tkachenko) → 12
  (Ukrainian liveblog, 09:23). The deck now reads "Twelve dead",
  matching the headline, the pill and the strip.

## How it was made

The poster was drawn in Python with Pillow, from data read off the
morning wires (Reuters, AP, Al Jazeera, ATP, Xinhua, CENTCOM, UKMTO)
to 06:00 UTC, 23 November 2026, with the Dymer toll re-checked against
Monday's later wires. Every story names its source and a verification
stamp — CONFIRMED, OFFICIAL, REPORTED or CLAIM — and the build script
asserts the counts before drawing: 35 stories, the region bar summing
to 35, and every number in the strip matching a story.

Drawing the poster twice gives byte-identical output. The pinned file:

- `entry.png` — 1024×1024 PNG, 203,753 bytes
- sha256 `5bb360224d43a7a46997350f7bfdbe2e4aaa89db017eeb4e1ae0a8e7ab67191a`

## How it runs

`main.ts` reads `entry.png`, checks it is a real 1024×1024 PNG under the
1 MiB cap, complete to its IEND chunk, matching the pinned sha256, then
copies it to `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`).
End-to-end test with Node v24.22.1 passes: exit 0, emitted bytes match
the pinned sha256 (only a harmless module-type warning on stderr; the
competition runner uses Deno).

```sh
deno run --allow-read --allow-write --allow-env main.ts
```
