import { test as base } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { LoginPage } from "../pages/loginPage";
import { RegisterPage } from "../pages/registerPage";
import { ProductPage } from "../pages/productPage";
import { CartPage } from "../pages/cartPage";
import { CheckOutPage } from "../pages/checkOutPage";
import { MyOrdersPage } from "../pages/myOrdersPage";

type allPages = {
    homePage: HomePage;
    loginPage: LoginPage;
    registerPage: RegisterPage;
    productPage: ProductPage;
    cartPage: CartPage;
    checkOutPage: CheckOutPage;
    myOrdersPage: MyOrdersPage;
};

const pages = base.extend<allPages>({
    homePage:async ({page}, use) => {
        await use(new HomePage(page));
    }, 

    loginPage:async ({page}, use) => {
        await use(new LoginPage(page));
    }, 

    registerPage:async ({page}, use) => {
        await use(new RegisterPage(page));        
    }, 

    productPage:async ({page}, use) => {
        await use(new ProductPage(page));        
    }, 

    cartPage:async ({page}, use) => {
        await use(new CartPage(page));        
    }, 

    checkOutPage:async ({page}, use) => {
        await use(new CheckOutPage(page));        
    }, 

    myOrdersPage: async ({page}, use) => {
        await use(new MyOrdersPage(page));
    }
});

export const test = pages;
export const expect = pages.expect;