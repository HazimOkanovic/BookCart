import { test, request, expect, APIRequestContext } from "@playwright/test";
import { apiURLs } from "../utils/Data";

export class ApiBookPage {
    readonly reqContext: APIRequestContext;
    bookCallResponse: any;

    constructor(request: APIRequestContext) {
        this.reqContext = request;
    }

    public async getBooksRequest(expectedStatus: number) {
        let statusResponse: number

        await test.step('Get books request', async () => {
            const response = await this.reqContext.get(apiURLs.book, {
                'headers': {
                    'accept': 'application/json',
                    'Content-Type': 'application/json-patch+json',
                },
            });

            statusResponse = response.status();
            this.bookCallResponse = await response.json();
            expect(await statusResponse).toBe(expectedStatus);
        })
    }
}