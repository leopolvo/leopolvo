import { describe, expect, it } from "vitest";
import { videos } from "@/data/site";

describe("travel videos", () => {
  it("includes the supplied YouTube travel video", () => {
    expect(videos).toContainEqual(expect.objectContaining({
      id: "rWAKNNV-cXM",
      url: "https://www.youtube.com/watch?v=rWAKNNV-cXM",
    }));
  });
});