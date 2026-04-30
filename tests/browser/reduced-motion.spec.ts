import { expect, test } from "@playwright/test";

test("reduced motion — homepage still renders content", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.getByRole("navigation")).toBeVisible();
  const sections = page.locator("main section");
  await expect(sections.first()).toBeVisible();
});

test("reduced motion — projects page still renders content", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/projects/");
  await expect(page.getByRole("heading", { level: 1 }).first()).toHaveText("Projects");
});
