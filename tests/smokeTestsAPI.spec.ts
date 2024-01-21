import { ApiRequests } from "../apiPages/apiRequests";
import { test } from "../tests/base";
import { APIData, apiURLs, data } from "../utils/Data";

test("API smoke test", async ({ request }) => {
    const apiRequests = new ApiRequests(request);
    await apiRequests.getRequest(apiURLs.book, data.okStatus);

    const bookId = apiRequests.getResponse[0].bookId;
    const bookTitle = apiRequests.getResponse[0].title;
    const bookCategory = apiRequests.getResponse[0].category;
    const bookPrice = apiRequests.getResponse[0].price;
    const bookAuthor = apiRequests.getResponse[0].author;

    await apiRequests.postRequestWithoutResponseBody(APIData.registerData, apiURLs.register, data.okStatus)

    await apiRequests.postRequest(APIData.registerData, apiURLs.login, data.okStatus);

    const token = apiRequests.postResponse.token;
    const userId = apiRequests.postResponse.userDetails.userId;

    await apiRequests.checkOutRequest(data.okStatus, token, userId, bookId, bookTitle, bookAuthor, bookCategory, bookPrice);
});