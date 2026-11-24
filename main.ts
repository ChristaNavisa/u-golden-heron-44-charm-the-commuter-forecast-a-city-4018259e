import { mkdirSync, writeFileSync } from "node:fs";

function writeEntry(outDir: string, line: string): void {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, line, "utf8");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line = "Bramblewick today: 11°, rain falling upwards, and the 8:04 bus is on time — the timetable apologised in writing.";

writeEntry(outDir, line);
