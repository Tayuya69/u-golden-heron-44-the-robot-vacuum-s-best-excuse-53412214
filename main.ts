// SPDX-License-Identifier: MIT
// One-line entry for the make.fun "Haunted Spot" bounty:
// the robot vacuum's best excuse for missing a spot.
// Deterministic: writes exactly one fixed line, no randomness,
// no network, no input.

const ENTRY =
  "I didn't miss that spot. My lidar filed it under 'haunted' and my bumper refused to go back.";

await Deno.mkdir("/output", { recursive: true });
await Deno.writeTextFile("/output/entry.txt", ENTRY);

// Post-write read-back verification: re-read /output/entry.txt and
// assert it is exactly the entry line (92 characters, one line,
// no trailing newline).
const EXPECTED =
  "I didn't miss that spot. My lidar filed it under 'haunted' and my bumper refused to go back.";
const actual = await Deno.readTextFile("/output/entry.txt");
if (actual !== EXPECTED) {
  throw new Error(
    `entry.txt mismatch: got ${actual.length} chars, expected 92`,
  );
}
if (actual.length !== 92 || actual.includes("\n") || actual.endsWith("\n")) {
  throw new Error("entry.txt failed shape check (92 chars, one line, no trailing newline)");
}
console.log("verification passed: entry.txt is exactly the 92-character entry line");
