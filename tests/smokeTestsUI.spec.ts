import { expect, test } from "./base";
import { data, pagesURL } from "../utils/Data";

test('Smoke test', async ({ baseURL, page, homePage, loginPage, registerPage, productPage, cartPage, checkOutPage, myOrdersPage }) => {
    await page.goto(`${baseURL}`);
    await homePage.clickLoginLink();
    expect (await loginPage.loginHeader).toHaveText("Login");

    await loginPage.clickRegisterButton();
    expect (await registerPage.registerPageHeader).toHaveText("User Registration");
    
    await registerPage.enterFirstName(data.firstName);
    await registerPage.enterLastName(data.lastName);
    await registerPage.enterUserName(data.firstName + data.random);
    await registerPage.enterPassword(data.validPassword);
    await registerPage.enterConfirmPassword(data.validPassword);
    await registerPage.clickMaleRadio();
    await registerPage.clickRegisterButton();
    expect (await loginPage.loginHeader).toHaveText("Login");
    
    await loginPage.enterUserName(data.firstName + data.random);
    await loginPage.enterPassword(data.validPassword);
    await loginPage.clickLoginButton();
    expect(await page.url()).toBe(pagesURL.homePage);
    
    await homePage.clickOnSecondHarryPotterBook();
    expect (await productPage.bookName).toHaveText("HP2")
    
    await productPage.clickAddToCartButton();
    await productPage.clickCartLink();
    expect (await cartPage.cartPageHeader).toHaveText("Cart Items");
    expect (await cartPage.bookName).toHaveText("HP2");
    
    await cartPage.clickCheckOutButton();
    expect(await checkOutPage.checkOutPageHeader).toHaveText("Check Out");
    
    await checkOutPage.enterName(data.firstName);
    await checkOutPage.enterFirstAddress(data.firstAddress);
    await checkOutPage.enterSecondAddress(data.secondAddress);
    await checkOutPage.enterPinCode(data.pinCode);
    await checkOutPage.enterState(data.state);
    await checkOutPage.clickPlaceOrder();
    expect(await myOrdersPage.pageTitle).toHaveText(data.ordersPageTitle);
    expect(await page.url()).toBe(pagesURL.ordersURL);

    await myOrdersPage.clickOnProfile();
    await myOrdersPage.clickLogOut();
    expect (await loginPage.loginHeader).toHaveText("Login");
    expect(await page.url()).toMatch(pagesURL.loginURL);
});