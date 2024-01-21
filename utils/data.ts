import { randomString } from "./randomString";

const randomStr = randomString();

export const data = {
    random: randomString(),
    validUsername: "HazimO",
    validPassword: "Something.123",
    firstName: "Hazim",
    lastName: "Okanovic",
    firstAddress: "First Address",
    secondAddress: "Second Address",
    pinCode: "123456",
    state: "BiH",
    ordersPageTitle: "My Orders",
    userId: 27148,
    okStatus: 200
}

export const pagesURL = {
    homePage: "https://bookcart.azurewebsites.net/",
    ordersURL: "https://bookcart.azurewebsites.net/myorders",
    loginURL: "https://bookcart.azurewebsites.net/login"
}

export const apiURLs = {
    login: "https://bookcart.azurewebsites.net/api/Login",
    register: "https://bookcart.azurewebsites.net/api/user",
    book: "https://bookcart.azurewebsites.net/api/Book",
    checkOut: "https://bookcart.azurewebsites.net/api/Checkout/"
}

export const APIData = {
    loginData: {
        "userId": 0,
        "firstName": "string",
        "lastName": "string",
        "userName": "HazimO",
        "password": "Something.123",
        "gender": "string",
        "userTypeId": 0
    },
    registerData: {
        "firstName": "Hazim",
        "lastName": "Okanovic",
        "userName": "Hazim" + randomStr,
        "password": "Something.123",
        "gender": "Male"
    },
}