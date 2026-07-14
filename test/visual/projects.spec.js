const { test, expect } = require("@playwright/test");
const { preparePage, stabilizeVisuals } = require("./helpers");

const routes = [
  { path: "al-folio/projects/", id: "index", type: "index" },
  { path: "al-folio/projects/semcom/", id: "wasecom", type: "detail", title: "WaSeCom" },
  { path: "al-folio/projects/goodspeed/", id: "goodspeed", type: "detail", title: "GOODSPEED" },
];

for (const theme of ["light", "dark"]) {
  for (const route of routes) {
    test(`projects ${route.id} design (${theme})`, async ({ page }, testInfo) => {
      await preparePage(page, theme);
      await page.goto(route.path, { waitUntil: "networkidle" });
      await stabilizeVisuals(page);
      if (route.type === "detail") {
        await page.addStyleTag({ content: "body > header { display: none !important; }" });
      }

      if (route.type === "index") {
        await expect(page.locator(".dual-projects")).toBeVisible();
        await expect(page.locator(".dual-projects h1")).toHaveCount(1);

        const cards = page.locator(".dual-projects__card");
        await expect(cards).toHaveCount(2);
        await expect(cards.first()).toContainText("WaSeCom");
        await expect(cards.nth(1)).toContainText("GOODSPEED");
        await expect(cards.first().locator(".dual-projects__topics li")).toHaveCount(3);
        await expect(cards.nth(1).locator(".dual-projects__topics li")).toHaveCount(3);
        await expect(cards.first().locator("h2 a")).toHaveAttribute("href", "/al-folio/projects/semcom/");
        await expect(cards.nth(1).locator("h2 a")).toHaveAttribute("href", "/al-folio/projects/goodspeed/");
        await expect(page.locator(".dual-projects__button")).toHaveAttribute("href", "/al-folio/publications/");

        const closingCopyColor = await page.locator(".dual-projects__closing-copy").evaluate((copy) => getComputedStyle(copy).color);
        expect(closingCopyColor).toBe("rgb(255, 255, 255)");

        const goodspeedImageFit = await page.locator(".dual-projects__media--contain img").evaluate((image) => getComputedStyle(image).objectFit);
        expect(goodspeedImageFit).toBe("contain");
      } else {
        await expect(page.locator(".dual-project-detail")).toBeVisible();
        await expect(page.locator(".dual-project-detail h1")).toHaveText(route.title);
        await expect(page.locator(".dual-project-detail__topics li")).toHaveCount(3);
        await expect(page.locator(".dual-project-detail__back")).toHaveAttribute("href", "/al-folio/projects/");
        await expect(page.locator(".dual-project-nav")).toBeVisible();

        const publicationCards = page.locator(".post > .publications ol.bibliography > li");
        await expect(publicationCards).toHaveCount(1);
        const publicationLabelsAreHidden = await page
          .locator(".post > .publications .abbr")
          .evaluateAll((labels) => labels.every((label) => getComputedStyle(label).display === "none"));
        expect(publicationLabelsAreHidden).toBe(true);
      }

      const hasHorizontalOverflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
      expect(hasHorizontalOverflow).toBe(false);

      await page.evaluate(() => {
        document.documentElement.style.scrollBehavior = "auto";
        document.body.style.scrollBehavior = "auto";
        window.scrollTo(0, 0);
      });
      await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
      await expect(page).toHaveScreenshot(["projects", route.id, `${theme}-${testInfo.project.name}.png`], { fullPage: true });

      if (route.type === "detail") {
        const publicationCard = page.locator(".post > .publications ol.bibliography > li");
        const abstractButton = publicationCard.locator("a.abstract.btn");
        const abstractPanel = publicationCard.locator(".abstract:not(.btn)");
        await abstractButton.click();
        await expect(abstractPanel).toHaveClass(/open/);
        await abstractButton.click();
        await expect(abstractPanel).not.toHaveClass(/open/);
      }
    });
  }
}
