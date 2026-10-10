import { test, expect } from "@playwright/test";
import fs from "node:fs";
const book = JSON.parse(fs.readFileSync("packages/content/book.json", "utf8"));
test("every section renders canonical text, boundary-safe diagrams and four exercises", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  for (const id of book.lessonIds) {
    await page.goto("/#/lesson/" + id);
    await expect(page.locator("#lesson-article > section")).toHaveCount(8);
    await expect(page.locator(".worked-example")).toHaveCount(2);
    await expect(page.locator(".katex-error")).toHaveCount(0);
    await page.getByRole("link", { name: "交互演示", exact: true }).click();
    await expect(page.locator(".plot")).toHaveCount(1);
    for (const slider of await page.getByRole("slider").all()) {
      await slider.press("Home");
      await slider.press("End");
    }
    await expect(
      page.locator(
        'svg [d*="NaN"],svg [d*="Infinity"],svg [cx="NaN"],svg [cy="NaN"]',
      ),
    ).toHaveCount(0);
    await page.getByRole("link", { name: "练习与解答 4", exact: true }).click();
    await expect(page.locator(".exercise")).toHaveCount(4);
    await expect(page.locator(".exercise:visible")).toHaveCount(1);
  }
  expect(errors).toEqual([]);
});
test("answer drafts survive question navigation and checked progress survives reload", async ({
  page,
}) => {
  await page.goto("/#/lesson/limit-intuition?view=practice");
  const first = page.locator(".exercise").first();
  await first.getByRole("textbox").fill("5");
  await first.getByRole("button", { name: "检查数值", exact: true }).click();
  await expect(first.getByRole("status")).toContainText("数值正确");
  await first
    .getByRole("button", { name: "给我一点提示", exact: true })
    .click();
  await expect(first.locator(".hint")).toBeVisible();
  await first
    .getByRole("button", { name: "查看完整解答", exact: true })
    .click();
  await expect(first.locator(".solution")).toBeVisible();
  await page.getByRole("button", { name: "下一题", exact: true }).click();
  await expect(first).toBeHidden();
  await page.getByRole("button", { name: "上一题", exact: true }).click();
  await expect(first.getByRole("textbox")).toHaveValue("5");
  await page.reload();
  await expect(first.locator(".status")).toContainText("已掌握");
});
test("lab filtering keeps focus and pagination carries filters", async ({
  page,
}) => {
  await page.goto("/#/lab");
  await expect(page.locator(".lab-card")).toHaveCount(6);
  await page.getByRole("link", { name: "下一页", exact: true }).click();
  await expect(page).toHaveURL(/page=2/);
  await page.getByLabel("筛选章节", { exact: true }).selectOption("limits");
  await expect(page.locator(".lab-card")).toHaveCount(5);
  const input = page.getByRole("textbox", { name: "筛选知识点" });
  await input.pressSequentially("连续");
  await expect(input).toBeFocused();
  await expect(page.locator(".lab-card")).toHaveCount(1);
  await expect(
    page.getByRole("heading", { name: "连续性与介值定理", exact: true }),
  ).toBeVisible();
});
test("search keyboard flow returns full results and saved lessons appear in learning", async ({
  page,
}) => {
  await page.goto("/#/lesson/limit-intuition");
  await page.getByRole("button", { name: "收藏本节", exact: true }).click();
  await page.getByRole("button", { name: "搜索教材", exact: true }).click();
  const search = page.getByRole("textbox", { name: "搜索全文", exact: true });
  await search.fill("极限");
  await search.press("Enter");
  await expect(
    page.getByRole("heading", { name: "搜索教材", exact: true }),
  ).toBeVisible();
  await expect(page.locator(".search-results>a")).toHaveCount(8);
  await page.goto("/#/learning?tab=saved");
  await expect(
    page.getByRole("heading", { name: "极限：靠近时会怎样", exact: true }),
  ).toBeVisible();
});
test("site pages fit the viewport and the print edition includes the full book", async ({
  page,
}) => {
  for (const route of [
    "home",
    "library",
    "book/calculus-1",
    "lab",
    "practice",
    "reference",
    "reference?tab=glossary",
    "reference?tab=appendix",
    "learning",
    "guide",
    "downloads",
    "about",
    ...book.chapters.map((c: { id: string }) => "chapter/" + c.id),
  ]) {
    await page.goto("/#/" + route);
    await expect(page.locator("h1")).toHaveCount(1);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  }
  await page.goto("/book.html");
  await expect(page.locator(".lesson")).toHaveCount(35);
  await expect(page.locator(".problem")).toHaveCount(175);
  await expect(page.locator(".katex-error")).toHaveCount(0);
});
