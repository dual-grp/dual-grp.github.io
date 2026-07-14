const { test, expect } = require("@playwright/test");
const { preparePage, stabilizeVisuals } = require("./helpers");

const routes = [
  { path: "al-folio/people/", id: "people" },
  { path: "al-folio/members/nguyentran/", id: "member" },
  { path: "al-folio/contact/", id: "contact" },
  { path: "al-folio/repositories/", id: "repositories" },
];

const memberPaths = [
  "canhdinh",
  "daotran",
  "eason",
  "hanshu",
  "hoangphuongtran",
  "jiaminlin",
  "jimmy",
  "longle",
  "lucafiori",
  "luhan",
  "nguyentran",
  "nhathuyle",
  "quanla",
  "senura",
  "tia",
  "tunganh",
  "tzuhao-liu",
  "wenli",
  "yuchenli",
  "zerunniu",
];

for (const theme of ["light", "dark"]) {
  for (const route of routes) {
    test(`${route.id} page design (${theme})`, async ({ page }, testInfo) => {
      await preparePage(page, theme);
      await page.goto(route.path, { waitUntil: "networkidle" });

      if (route.id === "people") {
        await page.locator(".dual-person-card img").evaluateAll(async (images) => {
          await Promise.all(
            images.map(async (image) => {
              image.loading = "eager";
              try {
                await image.decode();
              } catch {
                // The assertions below report any image that could not be decoded.
              }
            })
          );
        });
      }

      await stabilizeVisuals(page);

      if (route.id === "people") {
        await expect(page.locator(".dual-people")).toBeVisible();
        await expect(page.locator(".dual-people h1")).toHaveCount(1);
        await expect(page.locator(".dual-people__group")).toHaveCount(5);
        await expect(page.locator(".dual-person-card")).toHaveCount(20);
        await expect
          .poll(() => page.locator(".dual-person-card img").evaluateAll((images) => images.filter((image) => image.naturalWidth > 0).length))
          .toBe(20);
        await expect(page.locator(".dual-person-card h3 a").first()).toHaveAttribute("href", /\/al-folio\/members\//);
      }

      if (route.id === "member") {
        await page.addStyleTag({ content: "body > header { display: none !important; }" });
        await expect(page.locator(".dual-member")).toBeVisible();
        await expect(page.locator(".dual-member h1")).toHaveText("Nguyen Tran");
        await expect(page.locator(".dual-member__portrait img")).toHaveAttribute("alt", "Portrait of Nguyen Tran");
        await expect(page.locator(".dual-member__profile")).toBeVisible();
        await expect(page.locator(".dual-member__back")).toHaveAttribute("href", "/al-folio/people/");
      }

      if (route.id === "contact") {
        await expect(page.locator(".dual-contact")).toBeVisible();
        await expect(page.locator(".dual-contact h1")).toHaveCount(1);
        await expect(page.locator(".dual-contact__primary > a")).toHaveAttribute("href", "mailto:nguyen.tran@sydney.edu.au");
        await expect(page.locator(".dual-contact__details article")).toHaveCount(2);
        await expect(page.locator(".dual-contact__focus li")).toHaveCount(6);
        await expect(page.locator(".dual-contact__gallery figure")).toHaveCount(2);
      }

      if (route.id === "repositories") {
        await expect(page.locator(".dual-repositories")).toBeVisible();
        await expect(page.locator(".dual-repositories h1")).toHaveCount(1);
        await expect(page.locator(".dual-repository-card")).toHaveCount(6);
        await expect(page.locator(".dual-repositories__organization > a")).toHaveAttribute("href", "https://github.com/dual-grp");
        await expect(page.locator(".dual-repository-card .badge")).toHaveCount(0);
      }

      const hasHorizontalOverflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
      expect(hasHorizontalOverflow).toBe(false);

      await expect(page).toHaveScreenshot(["sections", route.id, `${theme}-${testInfo.project.name}.png`], { fullPage: true });
    });
  }
}

test("all member pages use the shared profile layout", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "member collection smoke test runs once on desktop");
  await preparePage(page, "light");

  for (const memberPath of memberPaths) {
    await page.goto(`al-folio/members/${memberPath}/`, { waitUntil: "domcontentloaded" });
    await expect(page.locator(".dual-member")).toBeVisible();
    await expect(page.locator(".dual-member h1")).toHaveCount(1);
    const hasHorizontalOverflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
    expect(hasHorizontalOverflow).toBe(false);
  }
});
