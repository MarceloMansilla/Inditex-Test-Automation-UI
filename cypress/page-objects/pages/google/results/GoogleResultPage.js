import BasePage from "../../BasePage";

export default class GoogleResultPage extends BasePage {

    static getSearchResultInput() {
        return cy.get('input.gLFyf')
    }

    static getWikipediaLink(text) {
        return cy.get('[href="https://es.wikipedia.org/wiki/Automatizaci%C3%B3n_industrial"] > .LC20lb')
    }

    static getLinkPrehistoria() {
        return cy.get('')
            //To finish implementation to click on section link
    }

    static getTextSection() {
        return cy.get('')
            //To finish implementation to validate date
    }
}