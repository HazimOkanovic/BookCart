import { test, request, expect, APIRequestContext } from "@playwright/test";
import { apiURLs } from "../data";

export class ApiRequests{
    readonly reqContext: APIRequestContext;
    getResponse: any;
    postResponse: any;

    constructor(request: APIRequestContext) {
        this.reqContext = request;
    }

    public async getRequest(url: string, expectedStatus: number) {
        let statusResponse: number

        await test.step('Get request', async () => {
            const response = await this.reqContext.get(url, {
                'headers': {
                    'accept': 'application/json',
                    'Content-Type': 'application/json-patch+json',
                },
            });

            statusResponse = response.status();
            this.getResponse = await response.json();
            expect(await statusResponse).toBe(expectedStatus);
        })
    }

    public async postRequest(body: any, url: string, expectedStatus: number) {
        let statusResponse: number

        await test.step('Post request', async () => {
            const response = await this.reqContext.post(url, {
                'headers': {
                    'accept': 'application/json',
                    'Content-Type': 'application/json-patch+json',
                },
                data: body
            });

            statusResponse = response.status()
            this.postResponse = await response.json()

            expect(await statusResponse).toBe(expectedStatus);
        })
    }

    public async postRequestWithoutResponseBody(body: any, url: string, expectedStatus: number) {
        let statusResponse: number

        await test.step('Post request', async () => {
            const response = await this.reqContext.post(url, {
                'headers': {
                    'accept': 'application/json',
                    'Content-Type': 'application/json-patch+json',
                },
                data: body
            });

            statusResponse = response.status()

            expect(await statusResponse).toBe(expectedStatus);
        })
    }

    public async checkOutRequest(expectedStatus: number, token: any, userId: number, bookId: number, bookTitle: string, bookAuthor: string, bookCategory: string, bookPrice: number) {
        let statusResponse: number

        await test.step('Login request', async () => {
            const response = await this.reqContext.post(apiURLs.checkOut+userId, {
                'headers': {
                    "Accept": "*/*",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token
                },
                data: {
                    "orderId": "1",
                    "orderDetails": [
                        {
                            "book":
                            {
                                "bookId": bookId,
                                "title": bookTitle,
                                "author": bookAuthor,
                                "category": bookCategory,
                                "price": bookPrice,
                                "coverFileName": "string"
                            },
                            "quantity": 1
                        }
                    ],
                    "cartTotal": 1
                }
            });
            statusResponse = response.status()
            expect(await statusResponse).toBe(expectedStatus);
        });
    }
}