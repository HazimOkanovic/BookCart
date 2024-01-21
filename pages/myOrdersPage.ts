import { Page, Locator } from "@playwright/test";

export class MyOrdersPage {
    readonly page: Page;
    readonly pageTitle: Locator;
    readonly profileLink: Locator;
    readonly logOutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageTitle = page.locator('h2', { hasText: 'Orders' });
        this.profileLink = page.getByText("Hazim");
        this.logOutButton = page.locator("//button[contains(text(), 'Logout')]");
    };

    async clickOnProfile(){
        await this.profileLink.click();
    };

    async clickLogOut(){
        await this.logOutButton.click();
    };
}