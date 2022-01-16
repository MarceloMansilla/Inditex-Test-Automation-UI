import { url } from '../../../config'
import GoogleService from '../../service/google/GoogleService'
import GoogleResultService from '../../service/google/GoogleResultService'
import WikipediaService from '../../service/wikipedia/WikipediaService'
import ScreenshotterService from '../../service/screeenshotter/ScreenshotterService'


describe('Google Test', () => {
    const name = "wikipedia"
    const word = "automatización"
    before(function() {
        cy.visit(url)
    })

    it('When I vistit the URL, I see Google page', () => {
        GoogleService.validateGooglePage()
    })

    it('When I add the word and press entress', () => {
        GoogleService.addWord(word)
        GoogleService.pressEnter()
    })


    it(' I should see Result page for the word', () => {
        GoogleResultService.validateGoogleResultPage()
    })

    it(' I click on link to go to Wikipedia page', () => {
        GoogleResultService.clickOnLinkWikipedia()
    })

    it(' The wikipedia page is shown and the year first automation is validated.', () => {
        WikipediaService.validateWikipediaPage()
        WikipediaService.validateDateAutomation()
        ScreenshotterService.takeScreenshotPage(name)
    })

})