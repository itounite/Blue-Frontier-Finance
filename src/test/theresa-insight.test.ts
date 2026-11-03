import { describe, expect, it } from "vitest";
import { getInsight } from "@/content/insights";

describe("Theresa's biotechnology article", () => {
  const article = getInsight("why-biotechnology-is-the-only-long-term-plan-humanity-has-left");

  it("attributes the article to Theresa in her scientific expert role", () => {
    expect(article?.author).toBe("Theresa Rothenbücher");
    expect(article?.authorRole).toBe("Scientific Expert, Beyond Impact");
    expect(article?.authorImage).toMatch(/theresa-rothenbuecher\.png$/);
  });

  it("retains a linked source and open license for both article photos", () => {
    const photos = article?.body.filter((block) => block.type === "img") ?? [];
    expect(photos).toHaveLength(2);
    const facultyPhoto = photos[0];
    expect(facultyPhoto?.type === "img" ? facultyPhoto.credit?.url : undefined).toBe("https://commons.wikimedia.org/wiki/File:Faculty_of_Food_Engineering_and_Biotechnology_1.jpg");
    expect(facultyPhoto?.type === "img" ? facultyPhoto.credit?.licenseUrl : undefined).toBe("https://creativecommons.org/licenses/by/4.0/");
    const seaweedPhoto = photos[1];
    expect(seaweedPhoto?.type === "img" ? seaweedPhoto.credit?.url : undefined).toBe("https://commons.wikimedia.org/wiki/File:Seaweed_farm_uroa_zanzibar.jpg");
    expect(seaweedPhoto?.type === "img" ? seaweedPhoto.credit?.license : undefined).toBe("Public Domain");
  });
});