import { expect, test } from "./baseTest";
import { randomString } from "../utils/randomString";

test.beforeEach(async ({ page, baseURL }, testInfo) => {
    console.log(`Running ${testInfo.title}`);
    await page.goto(`${baseURL}`);
});

test('Login test', async ({ page, homePage, loginPage }) => {
    await homePage.clickLoginLink();
    await loginPage.enterUserName("HazimO");
    await loginPage.enterPassword("Something.123");
    await loginPage.clickLoginButton();

    expect(await page.url()).toMatch("https://bookcart.azurewebsites.net");
    expect(await homePage.profileNameHeader).toContainText("HazimO")
});

test('Register test', async ({ page, homePage, loginPage, registerPage }) => {
    let random = randomString();
    await homePage.clickLoginLink();
    await loginPage.clickRegisterButton();
    await registerPage.enterFirstName("Hazim");
    await registerPage.enterLastName("Okanovic");
    await registerPage.enterUserName("Hazim"+ random);
    await registerPage.enterPassword("Something.123");
    await registerPage.enterConfirmPassword("Something.123");
    await registerPage.clickMaleRadio();
    await registerPage.clickRegisterButton();
    await loginPage.enterUserName("Hazim"+ random);
    await loginPage.enterPassword("Something.123");
    await loginPage.clickLoginButton();

    expect(await page.url()).toMatch("https://bookcart.azurewebsites.net");
    expect(await homePage.profileNameHeader).toContainText("Hazim")
});