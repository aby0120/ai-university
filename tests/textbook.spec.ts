import { test, expect } from "@playwright/test";
import fs from "node:fs";
const book = JSON.parse(fs.readFileSync("packages/content/book.json", "utf8"));
test("every section renders canonical text, a usable diagram and four exercises", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  for (const id of book.lessonIds) {
    await page.goto("/#" + id);
    await expect(page.getByRole("tab", { name: "阅读与理解" })).toBeVisible();
    await expect(page.locator(".katex-error")).toHaveCount(0);
    await page.getByRole("tab", { name: "交互演示", exact: true }).click();
    await expect(page.locator(".plot")).toHaveCount(1);
    for (const slider of await page.getByRole("slider").all())
      await slider.press("End");
    await expect(page.locator('svg [d*="NaN"],svg [cx="NaN"]')).toHaveCount(0);
    await page.getByRole("tab", { name: "练习与解答 4" }).click();
    await expect(page.locator(".exercise")).toHaveCount(4);
  }
  expect(errors).toEqual([]);
});
test("numeric checking, hints, solutions and progress persist", async ({
  page,
}) => {
  await page.goto("/#limit-intuition");
  await page.getByRole("tab", { name: "练习与解答 4" }).click();
  const first = page.locator(".exercise").first();
  await first.getByRole("textbox").fill("5");
  await first.getByRole("button", { name: "检查数值" }).click();
  await expect(first.getByRole("status")).toContainText("数值正确");
  await first.getByRole("button", { name: "给我一点提示" }).click();
  await expect(first.locator(".hint")).toBeVisible();
  await first.getByRole("button", { name: "查看完整解答" }).click();
  await expect(first.locator(".solution")).toBeVisible();
  await page.reload();
  await page.getByRole("tab", { name: "练习与解答 4" }).click();
  await expect(
    page.locator(".exercise").first().locator(".status"),
  ).toContainText("已掌握");
});
test("responsive viewport has no page overflow; book contains every section", async ({
  page,
}) => {
  await page.goto("/");
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await page.goto("/book.html");
  await expect(page.locator(".lesson")).toHaveCount(35);
  await expect(page.locator(".problem")).toHaveCount(175);
  await expect(page.locator(".katex-error")).toHaveCount(0);
});
