import { test, request, expect, APIRequestContext } from "@playwright/test";
import { apiURLs } from "../utils/Data";

export class ApiRegisterPage {
    readonly reqContext: APIRequestContext;
    requestCallResponse: any;

    constructor(request: APIRequestContext) {
        this.reqContext = request;
    }

    public async registerRequest(body: any, expectedStatus: number) {
        let statusResponse: number

        await test.step('Register request', async () => {
            const response = await this.reqContext.post(apiURLs.register, {
                'headers': {
                    'accept': 'application/json',
                    'Content-Type': 'application/json-patch+json',
                },
                data: body
            });
            statusResponse = response.status()
            expect(await statusResponse).toBe(expectedStatus);
        });
    }
}