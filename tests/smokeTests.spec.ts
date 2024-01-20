import { expect, test } from "./baseTest";

test.beforeEach(async ({ page, baseURL }, testInfo) => {
  console.log(`Running ${testInfo.title}`);
  await page.goto(`${baseURL}`);
});

test('Login test',async ({page, homePage, loginPage}) => {
   await homePage.clickLoginLink();
   await loginPage.enterUserName("HazimO");
   await loginPage.enterPassword("Something.123");
   await loginPage.clickLoginButton();
   
   expect(await page.url()).toMatch("https://bookcart.azurewebsites.net");
   expect(await homePage.profileNameHeader).toContainText("HazimO")
});