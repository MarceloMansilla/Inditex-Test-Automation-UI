import WikipediaHomePage from "../../page-objects/pages/wikipedia/WikipediaHomePage";

export default class WikipediaService {

    static validateWikipediaPage() {
        cy.fixture('./wikipedia/wikipedia').then(data => {
            cy.url().should('include', data.url)
        })
    }

    static validateDateAutomation() {
        cy.fixture('./wikipedia/wikipedia').then(data => {
            WikipediaHomePage.getParagraphs().contains(data.date)
        })
    }
}