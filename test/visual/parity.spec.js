const { test, expect } = require("@playwright/test");
const { preparePage, compareWithBaseline } = require("./helpers");

// Site-redesigned routes use local screenshot baselines instead of upstream parity.
const routes = [];

test.beforeEach(async ({}, testInfo) => {
  test.skip(!process.env.BASELINE_URL, "BASELINE_URL is not configured for visual parity checks.");
});

for (const theme of ["light", "dark"]) {
  for (const route of routes) {
    test(`visual parity: ${route.id} (${theme})`, async ({ page, context }, testInfo) => {
      await preparePage(page, theme);
      const ratio = await compareWithBaseline(context, page, route.path, theme);
      let threshold = testInfo.project.name === "mobile" ? 0.08 : 0.04;
      if (route.id === "repositories" && testInfo.project.name === "desktop" && theme === "dark") {
        threshold = 0.07;
      }
      if (route.id === "repositories" && testInfo.project.name === "mobile" && theme === "dark") {
        threshold = 0.12;
      }
      expect(ratio).not.toBeNull();
      expect(ratio).toBeLessThan(threshold);
    });
  }
}
