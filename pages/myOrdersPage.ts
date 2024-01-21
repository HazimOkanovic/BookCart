import { Page, Locator } from "@playwright/test";

export class MyOrdersPage {
    readonly page: Page;
    readonly pageTitle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageTitle = page.locator('h2', { hasText: 'Orders' });
    }
}