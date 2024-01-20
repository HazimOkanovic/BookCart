import { randomString } from "./randomString";

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