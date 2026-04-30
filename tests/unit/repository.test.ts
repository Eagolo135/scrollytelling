import { mkdtemp, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { ContentRepository, ContentValidationError } from "@/lib/content/repository";

describe("ContentRepository", () => {
  it("loads markdown content and frontmatter", async () => {
    const dir = await fsTempDir();
    await writeFile(
      path.join(dir, "sample.md"),
      `---\ntitle: Sample\nlayout: standard\n---\n\nHello`,
    );

    const repo = new ContentRepository(dir);
    const page = await repo.getPageBySlug("sample");
    expect(page.frontmatter.title).toBe("Sample");
    expect(page.content.trim()).toBe("Hello");
  });

  it("throws a clear validation error when markdown file is missing", async () => {
    const dir = await fsTempDir();
    const repo = new ContentRepository(dir);

    await expect(repo.getPageBySlug("missing-page")).rejects.toMatchObject({
      filePath: path.join(dir, "missing-page.md"),
      issues: ["file: markdown file not found"],
    });
  });

  it("throws validation details for invalid frontmatter", async () => {
    const dir = await fsTempDir();
    await writeFile(
      path.join(dir, "bad-schema.md"),
      `---\nlayout: standard\n---\n\nHello`,
    );

    const repo = new ContentRepository(dir);
    await expect(repo.getPageBySlug("bad-schema")).rejects.toBeInstanceOf(ContentValidationError);
    await expect(repo.getPageBySlug("bad-schema")).rejects.toMatchObject({
      filePath: path.join(dir, "bad-schema.md"),
    });
  });

  it("throws validation error for malformed frontmatter", async () => {
    const dir = await fsTempDir();
    await writeFile(
      path.join(dir, "malformed-frontmatter.md"),
      `---\ntitle: Broken\nlayout: standard\nseo: [\n---\n\nHello`,
    );

    const repo = new ContentRepository(dir);
    await expect(repo.getPageBySlug("malformed-frontmatter")).rejects.toBeInstanceOf(ContentValidationError);
  });

  it("returns sorted valid slugs only", async () => {
    const dir = await fsTempDir();
    await writeFile(path.join(dir, "z-page.md"), "---\ntitle: Z\nlayout: standard\n---\n");
    await writeFile(path.join(dir, "a-page.md"), "---\ntitle: A\nlayout: standard\n---\n");
    await writeFile(path.join(dir, "NotKebab.md"), "---\ntitle: Bad\nlayout: standard\n---\n");
    await writeFile(path.join(dir, "ignore.txt"), "hello");

    const repo = new ContentRepository(dir);
    await expect(repo.getAllSlugs()).resolves.toEqual(["a-page", "z-page"]);
  });
});

async function fsTempDir() {
  return mkdtemp(path.join(os.tmpdir(), "scrolly-"));
}
