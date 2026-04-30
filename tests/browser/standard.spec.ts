import { expect, test } from "@playwright/test";

test("projects page loads", async ({ page }) => {
  await page.goto("/projects/");
  await expect(page.getByRole("heading", { level: 1 }).first()).toHaveText("Projects");
});

test("research page loads", async ({ page }) => {
  await page.goto("/research/");
  await expect(page.getByRole("heading", { level: 1 }).first()).toHaveText("Research");
});

test("credentials page loads", async ({ page }) => {
  await page.goto("/credentials/");
  await expect(page.getByRole("heading", { level: 1 }).first()).toHaveText("Credentials");
});

test("contact page loads", async ({ page }) => {
  await page.goto("/contact/");
  await expect(page.getByRole("heading", { level: 1 }).first()).toHaveText("Contact");
});

test("legacy getting-started route is no longer published", async ({ page }) => {
  const response = await page.goto("/getting-started/");
  expect(response?.status()).toBe(404);
});

test("legacy sticky-slides route is no longer published", async ({ page }) => {
  const response = await page.goto("/sticky-slides/");
  expect(response?.status()).toBe(404);
});
