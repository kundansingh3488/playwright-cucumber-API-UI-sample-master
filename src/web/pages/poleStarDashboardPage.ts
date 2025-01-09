import UIActions from "../../support/playwright/actions/UIActions";
import  UIElementActions from "../../support/playwright/actions/UIElementActions";
import Assert from "../../support/playwright/asserts/Assert";
import Constants from "../constants/Constants";

export default class poleStarDashboardPage {
    constructor(private web: UIActions) { }
    
    private ACCEPT_POPUPS = "[id='onetrust-accept-btn-handler']";
   //  private MENU_POLESTAR4 = "button[id='mega-menu-:r1:-secondary-navigation-control-2']";
    private MENU_POLESTAR4 = "button[id='mega-menu-:rk:-secondary-navigation-control-2']";
    private MENU_POLESTAR3 = "#mega-menu-\:rp\:-secondary-navigation-control-1";
    private MENU_POLESTAR2 = "#mega-menu-:r1n:-secondary-navigation-control-0";

    private DESIGN_ORDER = "a[aria-label='Konfigurera Polestar 4']";
    private MOTOR_LONG_RANGE = "(//span[@class='css-1uw6oeb'])[2]";
    private EXTERIOR_COLOUR = "(//img[@class='css-1bibx2p'])[1]";   // nth(1) function use for the selecting option.
    private INTERIOR_COLOUR = "button[aria-label='Bio-attributed MicroTech i Charcoal med Charcoal deco'] img[class='css-1bibx2p']";
    private NEXT_IMG = "button[class='css-1esvy6s'] span[class='css-62qso3'] svg";
    private PILOTBOX_CHECKBOX ="[value='Pilot-paketet']";
    private ELEKTROKROMATICSKT_CHECKBOX ="[value='Elektrokromatiskt glastak']";

   //  private TESTDRIVE ="[aria-label='Test drive Polestar 3']";
    private TESTDRIVE ="//*[contains(text(),'Test drive')]";
    private SELECT_MODEL_3 ="[data-dd-action-name='Polestar 3']";
    private SELECT_MODEL_2 ="[data-dd-action-name='Polestar 2']";
    private SELECT_MODEL_4 ="[data-dd-action-name='Polestar 4']";
    

    public async acceptAllPopup() {
        await this.web.element(this.ACCEPT_POPUPS, Constants.ACCEPT_POPUP).click();

    }
    public async selectMenueOption(product: string) {
       await this.web.element(this.MENU_POLESTAR4, Constants.MENU_OPTION).click();
    }

    public async selectDesignOrder(product: string) {
        await this.web.element(this.DESIGN_ORDER, Constants.DESIGN_ORDER).click();
     }

     public async selectExteriorColour(product: string) {
        (await this.web.element(this.EXTERIOR_COLOUR, Constants.EXTERIOR_COLOUR).scrollIntoView()).click();
     }

     public async selectInteriorColour(product: string) {
        (await this.web.element(this.INTERIOR_COLOUR, Constants.INTERIOR_COLOUR).scrollIntoView()).click();
     }

    public async selectPilotboxCheckbox(product: string) {
        (await this.web.element(this.PILOTBOX_CHECKBOX, Constants.PILOTBOX_CHECKBOX).scrollIntoView()).click();
     }

     public async selectElectroMagneticCheckbox(product: string) {
        (await this.web.element(this.ELEKTROKROMATICSKT_CHECKBOX, Constants.ELEKTROKROMATICSKT_CHECKBOX).scrollIntoView()).click();
     }
}
