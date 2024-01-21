import { Page, Locator } from "@playwright/test";

export class CartPage {
    readonly page: Page;
    readonly checkoutButton: Locator;
    readonly cartPageHeader: Locator;
    readonly bookName: Locator;

    constructor(page: Page) {
        this.page = page;
        this.checkoutButton = page.locator("//span[contains(text(), 'CheckOut')]");
        this.cartPageHeader = page.locator('h2', {hasText: 'Cart'});
        this.bookName = page.locator("(//tr//td)[2]");
    };

    async clickCheckOutButton() {
        await this.checkoutButton.click();
    }
};