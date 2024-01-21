import { test, request, expect, APIRequestContext } from "@playwright/test";
import { apiURLs } from "../utils/Data";

export class ApiLoginPage {
    readonly reqContext: APIRequestContext;
    loginCallResponse: any;

    constructor(request: APIRequestContext) {
        this.reqContext = request;
    }

    public async loginRequest(body: any, expectedStatus) {
        let statusResponse: number

        await test.step('Login request', async () => {
            const response = await this.reqContext.post(apiURLs.login, {
                'headers': {
                    'accept': 'application/json',
                    'Content-Type': 'application/json-patch+json',
                },
                data: body
            });

            statusResponse = response.status()
            this.loginCallResponse = await response.json()

            expect(await statusResponse).toBe(expectedStatus);
        })
    }
}