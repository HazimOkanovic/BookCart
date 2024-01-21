import { test, expect } from "../tests/baseTest";
import { APIData, apiURLs, data } from "../utils/Data";

test("Login test", async ({ request }) => {
    const response = await request.post(apiURLs.login, {
        headers: {
            "Accept": "*/*",
            "Content-Type": "application/json"
        },
        data: APIData.loginData
    });
    const jsonResponse = await response.json();

    expect(await response.status()).toBe(data.okStatus);
    expect(await jsonResponse.userDetails.username).toBe(data.validUsername);
    expect(await jsonResponse.userDetails.userId).toBe(data.userId)
});

test("Register test", async ({ request }) => {
    const response = await request.post(apiURLs.register, {
        headers: {
            "Accept": "*/*",
            "Content-Type": "application/json"
        },
        data: APIData.registerData
    });

    expect(await response.status()).toBe(data.okStatus);
});

test("Checkout test", async ({ request }) => {
    const responseBook = await request.get(apiURLs.book, {
        headers: {
            "Accept": "*/*",
            "Content-Type": "application/json"
        },
        data: APIData.loginData
    });
    const bookResponse = await responseBook.json();
    const bookId = bookResponse[0].bookId;
    const bookTitle = bookResponse[0].title;
    const bookCategory = bookResponse[0].category;
    const bookPrice = bookResponse[0].price;
    const bookAuthor = bookResponse[0].author;

    const responseLogin = await request.post(apiURLs.login, {
        headers: {
            "Accept": "*/*",
            "Content-Type": "application/json"
        },
        data: APIData.loginData
    });

    const loginResponse = await responseLogin.json();
    const token = loginResponse.token;
    const userId = loginResponse.userDetails.userId;

    const responseCheckout = await request.post(apiURLs.checkOut + userId, {
        headers: {
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

    expect(await responseCheckout.status()).toBe(data.okStatus);
});