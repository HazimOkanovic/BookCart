import { Page, Locator } from "@playwright/test";

export class RegisterPage{
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }
}