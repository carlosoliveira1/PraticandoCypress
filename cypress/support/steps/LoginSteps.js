/* global Given, Then, When */

import LoginPage from "../pageobjects/LoginPage"
const loginPage = new LoginPage




Given("acesso o site de compras", () => {
    loginPage.acessarSite();
})

