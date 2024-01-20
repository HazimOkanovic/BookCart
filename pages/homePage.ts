import { Page, Locator } from "@playwright/test";

export class HomePage {
    readonly page: Page;
    readonly loginLink: Locator;
    readonly profileNameHeader: Locator;
    readonly hp2Book: Locator;

    constructor(page: Page){
        this.page = page;
        this.loginLink = page.getByText("Login");
        this.profileNameHeader = page.getByText("Hazim");
        this.hp2Book = page.getByRole('link', { name: 'HP2' });
    }

    async clickLoginLink(){
        await this.loginLink.click();
    };

    async clickHP2(){
        await this.hp2Book.click();
    };
}