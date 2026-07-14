const { test, expect } = require("@playwright/test");
const { preparePage, stabilizeVisuals } = require("./helpers");

for (const theme of ["light", "dark"]) {
  test(`homepage design (${theme})`, async ({ page }, testInfo) => {
    await preparePage(page, theme);
    await page.goto("al-folio/", { waitUntil: "networkidle" });
    await stabilizeVisuals(page);

    await expect(page.locator(".dual-home")).toBeVisible();
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator(".dual-home__project-card")).toHaveCount(2);
    await expect(page.locator(".dual-home__theme-card")).toHaveCount(5);
    await expect(page.locator(".dual-home__project-card").first()).toContainText("WaSeCom");
    await expect(page.locator(".dual-home__publications")).toContainText("Computation and Communication Efficient Federated Unlearning");
    await expect(page.locator(".dual-home__publications")).not.toContainText("Distributionally Robust Wireless Semantic Communication");
    const publicationLabelsAreHidden = await page
      .locator(".dual-home__publications .abbr")
      .evaluateAll((labels) => labels.every((label) => getComputedStyle(label).display === "none"));
    expect(publicationLabelsAreHidden).toBe(true);
    const hasHorizontalOverflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
    expect(hasHorizontalOverflow).toBe(false);
    await expect(page).toHaveScreenshot(["homepage", `${theme}-${testInfo.project.name}.png`], { fullPage: true });
  });
}
