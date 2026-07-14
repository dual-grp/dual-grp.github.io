const { test, expect } = require("@playwright/test");
const { preparePage, stabilizeVisuals } = require("./helpers");

for (const theme of ["light", "dark"]) {
  test(`research page design (${theme})`, async ({ page }, testInfo) => {
    await preparePage(page, theme);
    await page.goto("al-folio/publications/", { waitUntil: "networkidle" });
    await stabilizeVisuals(page);

    await expect(page.locator(".dual-research")).toBeVisible();
    await expect(page.locator(".dual-research h1")).toHaveCount(1);
    await expect(page.locator("#bibsearch")).toBeVisible();

    const publicationCards = page.locator(".dual-research ol.bibliography > li");
    expect(await publicationCards.count()).toBeGreaterThan(12);

    const publicationLabelsAreHidden = await page
      .locator(".dual-research ol.bibliography .abbr")
      .evaluateAll((labels) => labels.every((label) => getComputedStyle(label).display === "none"));
    expect(publicationLabelsAreHidden).toBe(true);

    const listsAreSingleColumn = await page
      .locator(".dual-research ol.bibliography")
      .evaluateAll((lists) => lists.every((list) => getComputedStyle(list).gridTemplateColumns.split(" ").length === 1));
    expect(listsAreSingleColumn).toBe(true);

    const hasHorizontalOverflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
    expect(hasHorizontalOverflow).toBe(false);

    await expect(page).toHaveScreenshot(["research", `${theme}-${testInfo.project.name}.png`], { fullPage: true });
  });
}
