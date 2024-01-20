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

test('Checkout test',async ({page, homePage, productPage, cartPage, loginPage, checkOutPage, myOrdersPage}) => {
    await homePage.clickHP2();
    await productPage.clickAddToCartButton();
    let price = productPage.productPrice.textContent();
    await productPage.clickCartLink();
    await cartPage.clickCheckOutButton();
    await loginPage.enterUserName("HazimO");
    await loginPage.enterPassword("Something.123");
    await loginPage.clickLoginButton();
    await checkOutPage.enterName("Hazim");
    await checkOutPage.enterFirstAddress("First address");
    await checkOutPage.enterSecondAddress("Second address");
    await checkOutPage.enterPinCode("456464");
    await checkOutPage.enterState("BiH");
    await checkOutPage.clickPlaceOrder();
    
    expect (await myOrdersPage.pageTitle).toHaveText("My Orders");
    expect(await page.url()).toMatch("https://bookcart.azurewebsites.net/myorders");
})