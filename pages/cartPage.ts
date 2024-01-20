import { Page, Locator } from "@playwright/test";

export class CartPage{
    readonly page: Page;
    readonly checkoutButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.checkoutButton = page.locator("//span[contains(text(), 'CheckOut')]");
    };

    async clickCheckOutButton(){
        await this.checkoutButton.click();
    }
};