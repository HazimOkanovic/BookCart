import { Page, Locator } from "@playwright/test";
import { expect } from "../tests/base";

export class LoginPage {
    readonly page: Page;
    readonly userNameInputField: Locator;
    readonly passwordInputField: Locator;
    readonly loginButton: Locator;
    readonly registerButton: Locator;
    readonly loginHeader: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userNameInputField = page.locator("//input[@data-placeholder='Username']");
        this.passwordInputField = page.locator("//input[@data-placeholder='Password']");
        this.registerButton = page.locator("//span[contains(text(), 'Register')]");
        this.loginButton = page.locator("(//span[contains(text(), 'Login')])[2]");
        this.loginHeader = page.locator('h3', {hasText: 'Login'});
    }

    async enterUserName(userName: string) {
        await this.userNameInputField.fill(userName);
    };

    async enterPassword(password: string) {
        await this.passwordInputField.fill(password);
    };

    async clickRegisterButton() {
        await this.registerButton.click();
    };

    async clickLoginButton() {
        await this.loginButton.click();
    };
}