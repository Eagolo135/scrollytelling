import { expect, test } from "@playwright/test";

test("homepage presentation layout renders slides", async ({ page }) => {
  await page.goto("/");
  // PresentationLayout renders PresentationSlide sections — check for sticky sections
  const sections = page.locator("main section");
  await expect(sections.first()).toBeVisible();
});

test("homepage has navigation header", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("navigation")).toBeVisible();
});
