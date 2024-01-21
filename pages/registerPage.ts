import { Page, Locator } from "@playwright/test";
import { expect } from "../tests/base";

export class RegisterPage {
    readonly page: Page;
    readonly firstNameInputField: Locator;
    readonly lastNameInputField: Locator;
    readonly usernameInputField: Locator;
    readonly passwordInputField: Locator;
    readonly confirmPasswordInputField: Locator;
    readonly maleRadio: Locator;
    readonly registerButton: Locator;
    readonly registerPageHeader: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameInputField = page.locator("//input[@data-placeholder='First name']");
        this.lastNameInputField = page.locator("//input[@data-placeholder='Last Name']");
        this.usernameInputField = page.locator("//input[@data-placeholder='User Name']");
        this.passwordInputField = page.locator("//input[@data-placeholder='Password']");
        this.confirmPasswordInputField = page.locator("//input[@data-placeholder='Confirm Password']");
        this.maleRadio = page.locator("(//span//span[@class='mat-radio-outer-circle'])[1]");
        this.registerButton = page.locator("//span[contains(text(), 'Register')]");
        this.registerPageHeader = page.locator('h3', {hasText: 'User'})
    };

    async enterFirstName(firstName: string) {
        await this.firstNameInputField.fill(firstName);
    };

    async enterLastName(lastName: string) {
        await this.lastNameInputField.fill(lastName);
    };

    async enterUserName(userName: string) {
        await this.usernameInputField.fill(userName);
    };

    async enterPassword(password: string) {
        await this.passwordInputField.fill(password);
    };

    async enterConfirmPassword(confirmPassword: string) {
        await this.confirmPasswordInputField.fill(confirmPassword);
    };

    async clickMaleRadio() {
        await this.maleRadio.click();
    };

    async clickRegisterButton() {
        await this.registerButton.click();
    };
}