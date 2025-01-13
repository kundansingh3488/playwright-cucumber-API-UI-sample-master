import UIActions from "../../support/playwright/actions/UIActions";
import Assert from "../../support/playwright/asserts/Assert";
import Constants from "../constants/Constants";

export default class HomePage {
    constructor(private web: UIActions) { }

    private ACCEPT_POPUPS = "[id='onetrust-accept-btn-handler']";
    /**
     * async navigateToHomePage
     */
    public async navigateToHomePage() {
        await this.web.goto(process.env.BASE_URL, "Home page");
    }
     /**
     * async navigateToHomePage
     */
    public async navigateToMainPage() {
        await this.web.goto(process.env.BASE_POLESTAR_URL, "Home page");
        await this.web.element(this.ACCEPT_POPUPS, Constants.ACCEPT_POPUP).click();
    }
}