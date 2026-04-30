import { test, expect } from "@playwright/test";

test("homepage loads with portfolio title", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 2 }).first()).toBeVisible();
});

test("homepage has site navigation", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("navigation")).toBeVisible();
});

test("homepage navigation links to projects", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("link", { name: "Projects" })).toBeVisible();
});
