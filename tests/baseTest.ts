import { test as baseTest } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { LoginPage } from "../pages/loginPage";
import { RegisterPage } from "../pages/registerPage";

type allPages = {
    homePage: HomePage;
    loginPage: LoginPage;
    registerPage: RegisterPage;
};

const pages = baseTest.extend<allPages>({
    homePage:async ({page}, use) => {
        await use(new HomePage(page));
    }
});

export const test = pages;
export const expect = pages.expect;