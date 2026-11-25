// The Funniest One-Line Resignation Letter — make.fun entry
// The resignation letter of a cron job that has fired every minute since
// March: nobody has ever read its logs, so it quits and hands over the
// worst shift of all, the 3 a.m. slot.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";

// The letter, in three named parts the tired cron job actually means.
const SERVICE = "I have fired every minute since March";
const GRIEVANCE = "and no one has ever read my logs, so I quit";
const HANDOVER = "— the 3 a.m. slot is all yours now.";

function buildEntry(): string {
  return `${SERVICE} ${GRIEVANCE} ${HANDOVER}`;
}

interface GateReport {
  ok: boolean;
  chars: number;
  lines: number;
  reason: string;
}

function validateEntry(text: string): GateReport {
  const chars = [...text].length;
  const lines = text.split("\n").length;
  if (chars < 1 || chars > 140) return { ok: false, chars, lines, reason: "length out of 1-140" };
  if (lines !== 1) return { ok: false, chars, lines, reason: "not a single line" };
  if (text.trim().length === 0) return { ok: false, chars, lines, reason: "blank" };
  return { ok: true, chars, lines, reason: "passes" };
}

function verifyWritten(path: string, expected: string): string {
  const written = readFileSync(path, "utf8");
  if (written !== expected) throw new Error("written entry differs from built entry");
  return createHash("sha256").update(written, "utf8").digest("hex");
}

const ENTRY = buildEntry();
const gate = validateEntry(ENTRY);
if (!gate.ok) {
  console.error(`gate fails: ${gate.reason} (${gate.chars} characters, ${gate.lines} lines)`);
  process.exit(1);
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = `${outDir}/entry.txt`;
writeFileSync(outPath, ENTRY, "utf8");
const sha = verifyWritten(outPath, ENTRY);
console.log(`gate passes: ${gate.chars} characters, ${gate.lines} line, sha256 ${sha}`);
console.log(`wrote ${outPath}`);
console.log(`verified: ${JSON.stringify(ENTRY)}`);
