import { expect, test } from "./base";
import { data, pagesURL } from "../data";

test('Smoke test', async ({ baseURL, page, homePage, loginPage, registerPage, productPage, cartPage, checkOutPage, myOrdersPage }) => {
    await page.goto(`${baseURL}`);
    await homePage.clickLoginLink();
    expect (await loginPage.loginHeader).toHaveText(data.loginPageHeader);

    await loginPage.clickRegisterButton();
    expect (await registerPage.registerPageHeader).toHaveText(data.registrationPageHeader);
    
    await registerPage.enterFirstName(data.firstName);
    await registerPage.enterLastName(data.lastName);
    await registerPage.enterUserName(data.firstName + data.random);
    await registerPage.enterPassword(data.validPassword);
    await registerPage.enterConfirmPassword(data.validPassword);
    await registerPage.clickMaleRadio();
    await registerPage.clickRegisterButton();
    expect (await loginPage.loginHeader).toHaveText(data.loginPageHeader);
    
    await loginPage.enterUserName(data.firstName + data.random);
    await loginPage.enterPassword(data.validPassword);
    await loginPage.clickLoginButton();
    expect(await page.url()).toBe(pagesURL.homePage);
    
    await homePage.clickOnSecondHarryPotterBook();
    expect (await productPage.bookName).toHaveText(data.harryPotterBookName)
    
    await productPage.clickAddToCartButton();
    await productPage.clickCartLink();
    expect (await cartPage.cartPageHeader).toHaveText(data.cartPageHeader);
    expect (await cartPage.bookName).toHaveText(data.harryPotterBookName);
    
    await cartPage.clickCheckOutButton();
    expect(await checkOutPage.checkOutPageHeader).toHaveText(data.checkOutPageHeader);
    
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
    expect (await loginPage.loginHeader).toHaveText(data.loginPageHeader);
    expect(await page.url()).toMatch(pagesURL.loginURL);
});