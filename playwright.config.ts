import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 5 * 60 * 1000,
  use: {
    baseURL: "https://bookcart.azurewebsites.net/",
    headless: false,
    viewport: { width: 1320, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: "on",
    video: "on",
    launchOptions: {
      slowMo: 3000,
    },
  },
  retries: 0,
  reporter: [
    ["list"],
    ["json", { outputFile: "jsonReports/jsonReport.json" }],
    [
      "html",
      {
        open: "never",
      },
    ],
  ],
});