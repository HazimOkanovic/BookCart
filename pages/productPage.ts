import { Page, Locator } from "@playwright/test";

export class ProductPage {
    readonly page: Page;
    readonly addToCartButton: Locator;
    readonly cartLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addToCartButton = page.locator("(//span[contains(text(), 'Add to Cart')])[1]");
        this.cartLink = page.locator("//span[contains(text(), '1')]//parent::mat-icon");
    };

    async clickAddToCartButton() {
        await this.addToCartButton.click();
    };

    async clickCartLink() {
        await this.cartLink.click();
    }
}