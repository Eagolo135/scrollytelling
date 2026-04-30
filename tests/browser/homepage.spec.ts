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

test("homepage nav remains usable at mobile viewport", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const nav = page.getByRole("navigation", { name: "Site navigation" });
  await expect(nav).toBeVisible();
  await expect(nav.getByRole("link", { name: "Projects", exact: true })).toBeVisible();
  await expect(nav.getByRole("link", { name: "Contact", exact: true })).toBeVisible();
});

test("keyboard tab reaches key navigation links", async ({ page }) => {
  await page.goto("/");
  const nav = page.getByRole("navigation", { name: "Site navigation" });

  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "NE Portfolio" })).toBeFocused();

  await page.keyboard.press("Tab");
  await expect(nav.getByRole("link", { name: "Projects", exact: true })).toBeFocused();

  await page.keyboard.press("Tab");
  await expect(nav.getByRole("link", { name: "Research", exact: true })).toBeFocused();
});
