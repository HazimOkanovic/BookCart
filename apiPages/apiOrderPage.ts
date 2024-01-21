import { test, request, expect, APIRequestContext } from "@playwright/test";
import { apiURLs } from "../utils/Data";

export class ApiOrderPage {
    readonly reqContext: APIRequestContext;
    requestCallResponse: any;

    constructor(request: APIRequestContext) {
        this.reqContext = request;
    };

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