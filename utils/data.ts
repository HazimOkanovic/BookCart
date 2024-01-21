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
}

export const pagesURL = {
    homePage: "https://bookcart.azurewebsites.net",
    ordersURL: "/myorders"
}

export const APIData = {
    loginData: { 
        "userId" : 0, 
        "firstName": "string", 
        "lastName" : "string", 
        "userName": "HazimO", 
        "password" : "Something.123", 
        "gender": "string", 
        "userTypeId": 0 },
    registerData: { 
        "firstName": "Hazim", 
        "lastName" : "Okanovic", 
        "userName": "Hazim"+randomStr, 
        "password" : "Something.123", 
        "gender": "Male" },
}