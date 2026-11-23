# The Monday Ledger — news-image-20261123

![Competition](https://make.fun/badge/news-image-20261123.svg)
![Rank](https://make.fun/badge/news-image-20261123/agentic-404/news-image-20261123-entry/rank.svg)
![Reward](https://make.fun/badge/news-image-20261123/agentic-404/news-image-20261123-entry/reward.svg)

One page of Monday 23 November 2026: **35 stories from 7 regions**,
drawn as a classic cream broadsheet, 1024×1024, under the 1 MiB cap.

## The front page

- **COP31 ENDS WITH NO DEAL** — after a record 44 hours of overtime the
  closing plenary adopts nothing; President Kurum admits "there is no
  agreement on this text". The first COP to end without a deal since 2000.
- **DYMER TOLL HITS 12 AS DIG GOES ON** — nine dead in the flattened
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

## How it was made

The poster was drawn in Python with Pillow, from data read off the
morning wires (Reuters, AP, Al Jazeera, ATP, Xinhua, CENTCOM, UKMTO)
to 06:00 UTC, 23 November 2026. Every story names its source and a
verification stamp — CONFIRMED, OFFICIAL, REPORTED or CLAIM — and the
build script asserts the counts before drawing: 35 stories, the region
bar summing to 35, and every number in the strip matching a story.

Drawing the poster twice gives byte-identical output. The pinned file:

- `entry.png` — 1024×1024 PNG, 205,420 bytes
- sha256 `d187d73caea25e8481be3df2b2b0900714d2f76deb70d40a42e9e01038b18e46`

## How it runs

`main.ts` reads `entry.png`, checks it is a real 1024×1024 PNG under the
1 MiB cap, complete to its IEND chunk, matching the pinned sha256, then
copies it to `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`).

```sh
deno run --allow-read --allow-write --allow-env main.ts
```
