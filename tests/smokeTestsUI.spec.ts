import { expect, test } from "./baseTest";
import { randomString } from "../utils/randomString";
import { data, pagesURL } from "../utils/Data";
test.beforeEach(async ({ page, baseURL }, testInfo) => {
    console.log(`Running ${testInfo.title}`);
    await page.goto(`${baseURL}`);
});

test('Login test', async ({ page, homePage, loginPage }) => {
    await homePage.clickLoginLink();
    await loginPage.enterUserName(data.validUsername);
    await loginPage.enterPassword(data.validPassword);
    await loginPage.clickLoginButton();

    expect(await page.url()).toMatch(pagesURL.homePage);
    expect(await homePage.profileNameHeader).toContainText(data.validUsername)
});

test('Register test', async ({ page, homePage, loginPage, registerPage }) => {
    await homePage.clickLoginLink();
    await loginPage.clickRegisterButton();
    await registerPage.enterFirstName(data.firstName);
    await registerPage.enterLastName(data.lastName);
    await registerPage.enterUserName(data.firstName+data.random);
    await registerPage.enterPassword(data.validPassword);
    await registerPage.enterConfirmPassword(data.validPassword);
    await registerPage.clickMaleRadio();
    await registerPage.clickRegisterButton();
    await loginPage.enterUserName(data.firstName+data.random);
    await loginPage.enterPassword(data.validPassword);
    await loginPage.clickLoginButton();

    expect(await page.url()).toMatch(pagesURL.homePage);
    expect(await homePage.profileNameHeader).toContainText(data.firstName)
});

test('Checkout test',async ({page, homePage, productPage, cartPage, loginPage, checkOutPage, myOrdersPage}) => {
    await homePage.clickHP2();
    await productPage.clickAddToCartButton();
    let price = productPage.productPrice.textContent();
    await productPage.clickCartLink();
    await cartPage.clickCheckOutButton();
    await loginPage.enterUserName(data.validUsername);
    await loginPage.enterPassword(data.validPassword);
    await loginPage.clickLoginButton();
    await checkOutPage.enterName(data.firstName);
    await checkOutPage.enterFirstAddress(data.firstAddress);
    await checkOutPage.enterSecondAddress(data.secondAddress);
    await checkOutPage.enterPinCode(data.pinCode);
    await checkOutPage.enterState(data.state);
    await checkOutPage.clickPlaceOrder();
    
    expect (await myOrdersPage.pageTitle).toHaveText(data.ordersPageTitle);
    expect(await page.url()).toMatch(pagesURL.ordersURL);
})