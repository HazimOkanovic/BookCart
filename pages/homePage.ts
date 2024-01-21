import { Page, Locator } from "@playwright/test";
import { expect } from "../tests/base";

export class HomePage {
    readonly page: Page;
    readonly loginLink: Locator;
    readonly profileNameHeader: Locator;
    readonly harryPotterBook: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginLink = page.getByText("Login");
        this.profileNameHeader = page.getByText("Hazim");
        this.harryPotterBook = page.getByRole('link', { name: 'HP2' });
    }

    async clickLoginLink() {
        await this.loginLink.click();
    };

    async clickOnSecondHarryPotterBook() {
        await this.harryPotterBook.click();
    };
}