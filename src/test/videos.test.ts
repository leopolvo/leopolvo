import { describe, expect, it, test } from "vitest";
import { videos } from "@/data/site";

describe("travel videos", () => {
  it("includes the supplied YouTube travel video", () => {
    expect(videos).toContainEqual(expect.objectContaining({
      id: "rWAKNNV-cXM",
      url: "https://www.youtube.com/watch?v=rWAKNNV-cXM",
    }));
  });
});
import { tripPhotos, coverUrl } from "@/data/site";
test("las fotos JPG extra se añaden al final del álbum y pueden ser portada", () => {
  const t = { slug: "x", title: "", places: "", date: "", photos: 2, extra: ["IMG 1.jpg"], cover: "IMG 1.jpg" };
  const p = tripPhotos(t);
  expect(p).toHaveLength(3);
  expect(p[2].full).toBe("/media/x/IMG%201.jpg");
  expect(coverUrl(t)).toBe("/media/x/IMG%201.jpg");
});
