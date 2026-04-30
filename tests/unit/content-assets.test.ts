import { access } from "node:fs/promises";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { getHomeRepo, getPagesRepo } from "@/lib/content/repository";

const IMAGE_DIRECTIVE = /!\[[^\]]*\]\((\/images\/[^)]+)\)/g;

function extractImagePaths(markdown: string): string[] {
  return Array.from(markdown.matchAll(IMAGE_DIRECTIVE), (match) => match[1]);
}

describe("content image references", () => {
  it("all /images references in portfolio markdown exist in public/", async () => {
    const home = await getHomeRepo().getPageBySlug("home");
    const pages = await getPagesRepo().getAllPages();

    const markdownBodies = [home.content, ...pages.map((page) => page.content)];
    const imagePaths = markdownBodies.flatMap(extractImagePaths);

    for (const imagePath of imagePaths) {
      const absolutePath = path.join(process.cwd(), "public", imagePath.replace(/^\/images\//, "images/"));
      await expect(access(absolutePath)).resolves.toBeUndefined();
    }
  });
});
