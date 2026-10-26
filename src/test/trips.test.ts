import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { trips } from "@/data/site";

describe("static pages", () => {
  it("prerenders a page for every trip album", () => {
    const src = readFileSync("vite.config.ts", "utf8");
    for (const t of trips) expect(src).toContain(`"${t.slug}"`);
  });
});
