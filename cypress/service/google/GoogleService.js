import GoogleHomePage from "../../page-objects/pages/google/GoogleHomePage";
export default class GoogleService {


    static validateGooglePage() {
        cy.fixture('./google/google').then(data => {
            cy.url().should('include', data.url)
            GoogleHomePage.getSearchButton().contains(data.search_with_google_text_button)
            GoogleHomePage.getFeelingLuckyButton().contains(data.feeling_lucky_text_button)
        })
    }

    static addWord(word) {
        GoogleHomePage.getSearchInput().type(word)
    }
    static pressEnter() {
        GoogleHomePage.getSearchInput().type('{enter}')
    }

}