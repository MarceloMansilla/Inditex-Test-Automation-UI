import Screenshotter from "../../helper/Screenshotter";
import WikipediaService from "../../service/wikipedia/WikipediaService";

export default class ScreenshotterService {
    static takeScreenshotPage(name) {
        Screenshotter.takeScreenshot(name)
    }
}