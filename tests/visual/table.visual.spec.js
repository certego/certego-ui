import { test, expect } from "@playwright/test";

async function freezeExternalNetwork(page, baseURL) {
  await page.route("**/*", async (route) => {
    const url = route.request().url();

    if (
      url.startsWith(baseURL) ||
      url.startsWith("data:") ||
      url.startsWith("blob:")
    ) {
      await route.continue();
      return;
    }

    await route.abort();
  });
}

async function openTable(page, baseURL) {
  await freezeExternalNetwork(page, baseURL);
  await page.goto("/#/table");
  await expect(page.getByRole("heading", { name: "Table", })).toBeVisible();
  await expect(page.getByTestId("table-visual-interactive")).toBeVisible();
}

test.describe("table visual states", () => {
  test("default state", async ({ page, baseURL, browserName, isMobile, }) => {
    test.skip(browserName !== "chromium");
    test.skip(isMobile);

    await openTable(page, baseURL);

    await expect(page.getByTestId("table-visual-interactive")).toHaveScreenshot(
      "table-default-desktop.png",
      {
        animations: "disabled",
        caret: "hide",
      }
    );
  });

  test("sorted ascending", async ({ page, baseURL, browserName, isMobile, }) => {
    test.skip(browserName !== "chromium");
    test.skip(isMobile);

    await openTable(page, baseURL);

    const section = page.getByTestId("table-visual-interactive");
    await section.getByRole("button", { name: /Title/i, }).click();

    await expect(section).toHaveScreenshot("table-sorted-asc-desktop.png", {
      animations: "disabled",
      caret: "hide",
    });
  });

  test("sorted descending", async ({ page, baseURL, browserName, isMobile, }) => {
    test.skip(browserName !== "chromium");
    test.skip(isMobile);

    await openTable(page, baseURL);

    const section = page.getByTestId("table-visual-interactive");
    const titleHeader = section.getByRole("button", { name: /Title/i, });

    await titleHeader.click();
    await titleHeader.click();

    await expect(section).toHaveScreenshot("table-sorted-desc-desktop.png", {
      animations: "disabled",
      caret: "hide",
    });
  });

  test("active filters", async ({ page, baseURL, browserName, isMobile, }) => {
    test.skip(browserName !== "chromium");
    test.skip(isMobile);

    await openTable(page, baseURL);

    const section = page.getByTestId("table-visual-interactive");
    const titleFilter = section.locator("#datatable-select-title");

    await titleFilter.fill("Alpha Watch");
    await titleFilter.press("Enter");

    await expect(section).toHaveScreenshot("table-filtered-desktop.png", {
      animations: "disabled",
      caret: "hide",
    });
  });

  test("expanded row", async ({ page, baseURL, browserName, isMobile, }) => {
    test.skip(browserName !== "chromium");
    test.skip(isMobile);

    await openTable(page, baseURL);

    const section = page.getByTestId("table-visual-interactive");

    await section.locator("tbody tr [role='button']").first().click();
    await expect(section.getByTestId("expanded-row-1")).toBeVisible();

    await expect(section).toHaveScreenshot("table-expanded-desktop.png", {
      animations: "disabled",
      caret: "hide",
    });
  });

  test("selected rows", async ({ page, baseURL, browserName, isMobile, }) => {
    test.skip(browserName !== "chromium");
    test.skip(isMobile);

    await openTable(page, baseURL);

    const section = page.getByTestId("table-visual-interactive");

    await section.locator("#data-table-checkbox_cell_0").check();
    await section.locator("#data-table-checkbox_cell_2").check();
    await expect(page.getByTestId("table-visual-selected-count")).toHaveText("2 selected");

    await expect(section).toHaveScreenshot("table-selected-desktop.png", {
      animations: "disabled",
      caret: "hide",
    });
  });

  test("disabled row styling", async ({ page, baseURL, browserName, isMobile, }) => {
    test.skip(browserName !== "chromium");
    test.skip(isMobile);

    await openTable(page, baseURL);

    await expect(page.getByTestId("table-visual-disabled")).toHaveScreenshot(
      "table-disabled-row-desktop.png",
      {
        animations: "disabled",
        caret: "hide",
      }
    );
  });

  test("empty state", async ({ page, baseURL, browserName, isMobile, }) => {
    test.skip(browserName !== "chromium");
    test.skip(isMobile);

    await openTable(page, baseURL);

    await expect(page.getByTestId("table-visual-empty")).toHaveScreenshot(
      "table-empty-state-desktop.png",
      {
        animations: "disabled",
        caret: "hide",
      }
    );
  });

  test("paginator ellipsis", async ({ page, baseURL, browserName, isMobile, }) => {
    test.skip(browserName !== "chromium");
    test.skip(isMobile);

    await openTable(page, baseURL);

    await expect(
      page.getByTestId("table-visual-interactive").locator(".table-paginator")
    ).toHaveScreenshot("table-paginator-ellipsis-desktop.png", {
      animations: "disabled",
      caret: "hide",
    });
  });
});

test.describe("table mobile visual state", () => {
  test("default state on mobile", async ({ page, baseURL, browserName, isMobile, }) => {
    test.skip(browserName !== "chromium");
    test.skip(!isMobile);

    await openTable(page, baseURL);

    await expect(page.getByTestId("table-visual-interactive")).toHaveScreenshot(
      "table-default-mobile.png",
      {
        animations: "disabled",
        caret: "hide",
      }
    );
  });
});
