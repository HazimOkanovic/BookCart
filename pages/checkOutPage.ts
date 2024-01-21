import { Page, Locator } from "@playwright/test";

export class CheckOutPage {
    readonly page: Page;
    readonly nameInputField: Locator;
    readonly firstAddressInputField: Locator;
    readonly secondAddressInputField: Locator;
    readonly pinCodeInputField: Locator;
    readonly stateInputField: Locator;
    readonly placeOrderButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameInputField = page.locator("//input[@data-placeholder='Name']");
        this.firstAddressInputField = page.locator("//input[@data-placeholder='Address Line 1']");
        this.secondAddressInputField = page.locator("//input[@data-placeholder='Address Line 2']");
        this.pinCodeInputField = page.locator("//input[@data-placeholder='Pincode']");
        this.stateInputField = page.locator("//input[@data-placeholder='State']");
        this.placeOrderButton = page.locator("//span[contains(text(), 'Place Order')]");
    };

    async enterName(name: string) {
        await this.nameInputField.fill(name);
    };

    async enterFirstAddress(firstAddress: string) {
        await this.firstAddressInputField.fill(firstAddress);
    };

    async enterSecondAddress(secondAddress: string) {
        await this.secondAddressInputField.fill(secondAddress);
    };

    async enterPinCode(pinCode: string) {
        await this.pinCodeInputField.fill(pinCode);
    };

    async enterState(state: string) {
        await this.stateInputField.fill(state);
    };

    async clickPlaceOrder() {
        await this.placeOrderButton.click();
    };
};