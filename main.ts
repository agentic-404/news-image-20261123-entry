#!/usr/bin/env node
// news-image-20261123 entry, round 2: check the Monday Ledger poster,
// then emit it. The poster is a 1024x1024 PNG of Monday 23 November
// 2026's news, drawn by the build script beside this repo; this program
// refuses to emit anything but the exact bytes it was built from, then
// copies them to the output directory the competition runner provides.
// Verified 23 Nov 2026: node v24.22.1 runs it end to end, exit 0, and
// the emitted bytes match the pinned sha256 below.
import { createHash } from "node:crypto";
import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const POSTER_FILE = "entry.png";
const POSTER_SHA256 =
  "5bb360224d43a7a46997350f7bfdbe2e4aaa89db017eeb4e1ae0a8e7ab67191a";
const POSTER_WIDTH = 1024;
const POSTER_HEIGHT = 1024;
const SIZE_CAP = 1024 * 1024;

const here = dirname(fileURLToPath(import.meta.url));
const posterPath = join(here, POSTER_FILE);

function abort(message) {
  console.error("main.ts: " + message);
  process.exit(1);
}

// Read the poster and check it before anything is emitted.
const poster = readFileSync(posterPath);
const byteCount = statSync(posterPath).size;
if (byteCount !== poster.length) abort("could not read the whole poster");
if (byteCount > SIZE_CAP) {
  abort("poster is " + byteCount + " bytes, over the " + SIZE_CAP + " cap");
}

const PNG_MAGIC = Buffer.from([
  0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
]);
if (!poster.subarray(0, 8).equals(PNG_MAGIC)) abort("poster is not a PNG");
if (poster.subarray(12, 16).toString("ascii") !== "IHDR") {
  abort("poster has no IHDR chunk");
}
const width = poster.readUInt32BE(16);
const height = poster.readUInt32BE(20);
if (width !== POSTER_WIDTH || height !== POSTER_HEIGHT) {
  abort(
    "poster is " + width + "x" + height + ", expected " +
      POSTER_WIDTH + "x" + POSTER_HEIGHT,
  );
}
const tail = poster.subarray(poster.length - 12);
if (
  tail.readUInt32BE(0) !== 0 ||
  tail.subarray(4, 8).toString("ascii") !== "IEND"
) {
  abort("poster is missing its IEND chunk");
}

const digest = createHash("sha256").update(poster).digest("hex");
if (digest !== POSTER_SHA256) abort("poster sha256 mismatch: got " + digest);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.png");
copyFileSync(posterPath, outPath);
console.log("wrote entry.png (" + byteCount + " bytes, sha256 " + digest + ")");
