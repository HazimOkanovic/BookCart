import { ApiBookPage } from "../apiPages/apiBookPage";
import { ApiLoginPage } from "../apiPages/apiLoginPage";
import { ApiOrderPage } from "../apiPages/apiOrderPage";
import { ApiRegisterPage } from "../apiPages/apiRegisterPage";
import { test, expect } from "../tests/base";
import { APIData, apiURLs, data } from "../utils/Data";

test("API smoke test", async ({ request }) => {
    const apiBookPage = new ApiBookPage(request);
    await apiBookPage.getBooksRequest(data.okStatus);

    const bookId = apiBookPage.bookCallResponse[0].bookId;
    const bookTitle = apiBookPage.bookCallResponse[0].title;
    const bookCategory = apiBookPage.bookCallResponse[0].category;
    const bookPrice = apiBookPage.bookCallResponse[0].price;
    const bookAuthor = apiBookPage.bookCallResponse[0].author;

    const apiRegisterPage = new ApiRegisterPage(request);
    await apiRegisterPage.registerRequest(APIData.registerData, data.okStatus)

    const apiLoginPage = new ApiLoginPage(request);
    await apiLoginPage.loginRequest(APIData.registerData, data.okStatus);

    const token = apiLoginPage.loginCallResponse.token;
    const userId = apiLoginPage.loginCallResponse.userDetails.userId;

    const apiOrderPage = new ApiOrderPage(request);
    await apiOrderPage.checkOutRequest(data.okStatus, token, userId, bookId, bookTitle, bookAuthor, bookCategory, bookPrice);
});