import { describe, expect, it } from "vitest";
import { url } from "@/lib/site-config";

describe("site-config url", () => {
  it("normalizes internal paths without basePath duplication", () => {
    expect(url("projects")).toBe("/projects");
    expect(url("/research/")).toBe("/research/");
  });

  it("keeps external and non-route links unchanged", () => {
    expect(url("https://example.com")).toBe("https://example.com");
    expect(url("mailto:test@example.com")).toBe("mailto:test@example.com");
    expect(url("#top")).toBe("#top");
  });
});
