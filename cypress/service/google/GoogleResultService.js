import GoogleResultPage from "../../page-objects/pages/google/results/GoogleResultPage";
export default class GoogleResultService {


    static validateGoogleResultPage() {
        cy.fixture('./google/google').then(data => {
            GoogleResultPage.getSearchResultInput().should('have.value', data.word_to_search)
        })
    }

    static clickOnLinkWikipedia() {
        GoogleResultPage.getWikipediaLink().click()
    }

    static clickOnPreshistoriaSection() {
        GoogleResultPage.getLinkPreistoria().click()
    }

    static validateFirstAutomationDate() {
        cy.fixture('./wikipedia/wikipedia').then(data => {
            GoogleResultPage.getSearchResultInput().should('have.value', data.date)
        })
    }
}