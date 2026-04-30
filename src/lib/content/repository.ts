import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { PageFrontmatterSchema, type PageFrontmatter } from "./schema";

const KEBAB_CASE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export interface PageData {
  slug: string;
  frontmatter: PageFrontmatter;
  content: string;
}

export class ContentValidationError extends Error {
  constructor(
    public filePath: string,
    public issues: string[],
  ) {
    super(`Invalid content in ${filePath}\n${issues.join("\n")}`);
  }
}

export class ContentRepository {
  constructor(private readonly baseDir: string) {}

  async getPageBySlug(slug: string): Promise<PageData> {
    if (!KEBAB_CASE.test(slug)) {
      throw new ContentValidationError(path.join(this.baseDir, `${slug}.md`), ["slug: must be kebab-case"]);
    }

    const filePath = path.join(this.baseDir, `${slug}.md`);
    let source: string;
    try {
      source = await fs.readFile(filePath, "utf8");
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code === "ENOENT") {
        throw new ContentValidationError(filePath, ["file: markdown file not found"]);
      }
      throw error;
    }

    let parsed: matter.GrayMatterFile<string>;
    try {
      parsed = matter(source);
    } catch (error) {
      throw new ContentValidationError(filePath, [`frontmatter: ${(error as Error).message}`]);
    }

    const result = PageFrontmatterSchema.safeParse(parsed.data);
    if (!result.success) {
      throw new ContentValidationError(
        filePath,
        result.error.issues.map((issue) => `${issue.path.length ? issue.path.join(".") : "frontmatter"}: ${issue.message}`),
      );
    }
    return { slug, frontmatter: result.data, content: parsed.content };
  }

  async getAllSlugs(): Promise<string[]> {
    const files = await fs.readdir(this.baseDir);
    return files
      .filter((file) => file.endsWith(".md"))
      .map((file) => file.replace(/\.md$/, ""))
      .filter((slug) => KEBAB_CASE.test(slug))
      .sort((a, b) => a.localeCompare(b));
  }

  async getAllPages(): Promise<PageData[]> {
    const slugs = await this.getAllSlugs();
    return Promise.all(slugs.map((slug) => this.getPageBySlug(slug)));
  }
}

export const getHomeRepo = () => new ContentRepository(path.join(process.cwd(), "content"));
export const getPagesRepo = () => new ContentRepository(path.join(process.cwd(), "content/pages"));
