import { Page, Locator } from "@playwright/test";

export class HomePage {
    readonly page: Page;
    readonly loginLink: Locator;
    readonly profileNameHeader: Locator;

    constructor(page: Page){
        this.page = page;
        this.loginLink = page.getByText("Login");
        this.profileNameHeader = page.getByText("Hazim");
    }

    async clickLoginLink(){
        await this.loginLink.click();
    }
}