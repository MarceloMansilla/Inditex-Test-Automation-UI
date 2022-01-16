import BasePage from "../BasePage";

export default class WikipediaHomePage extends BasePage {
    static getParagraphs() {
        return cy.get('p')
    }
}