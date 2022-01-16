import BasePage from "../BasePage";

export default class GoogleHomePage extends BasePage {

    static getSearchInput() {
        return cy.get('input[name="q"]')
    }

    static getSearchButton() {
        return cy.get('input[name="btnK"]')
    }

    static getFeelingLuckyButton() {
        return cy.get('input[name="btnI"]')
    }
}