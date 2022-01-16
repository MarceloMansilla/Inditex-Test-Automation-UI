export default class Screenshotter {

    static takeScreenshot(name) {
        cy.screenshot(name)
    }
}