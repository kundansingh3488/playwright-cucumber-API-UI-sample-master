import UIActions from "../../support/playwright/actions/UIActions";
import  UIElementActions from "../../support/playwright/actions/UIElementActions";
import Assert from "../../support/playwright/asserts/Assert";
import Constants from "../constants/Constants";

export default class poleStarHomePage {
    constructor(private web: UIActions) { }

    private ACCEPT_POPUPS = "[id='onetrust-accept-btn-handler']";
    private MENU_POLESTAR4 = "//*[@data-type='mega-menu-navigation']//*[text()='Polestar 4']";
    private MENU_POLESTAR3 = "//*[@data-type='mega-menu-navigation']//*[text()='Polestar 3']";
    private MENU_POLESTAR2 = "//*[@data-type='mega-menu-navigation']//*[text()='Polestar 2']";
    private DESIGN_ORDER = "a[aria-label='Konfigurera Polestar 4']";
    private CONFIGURE = "#WSCR7zFvSoC6X0hbHHljXQ";
    // private DUAL_MOTOR_LONG_RANGE = "(//span[@class='css-1uw6oeb'])[2]";
    private DUAL_MOTOR_LONG_RANGE = "button[value='PA'] span[class='css-1uw6oeb']";
    private EXTERIOR_COLOUR = "button[aria-label='Gold'] img[class='css-1bibx2p']";
    private NEXT_ARROW_IMG = "//*[name()='path' and contains(@d,'m5.675 2-1')]";
    private INTERIOR_COLOUR = "button[aria-label='Bio-attributed MicroTech i Charcoal med Charcoal deco'] img[class='css-1bibx2p']";
    private NEXT_IMG = "button[class='css-1esvy6s'] span[class='css-62qso3'] svg";
    private PRO_PACK_CHECKBOX ="input[id='220003']";
    private ELEKTROKROMATICSKT_CHECKBOX ="input[id='221003']";
    private SAVE_CONFIGURATION ="a[class='css-1usc64w'] span[class='css-1lfoa71']";
    private DATE_TIME_TEXT ="//*[text()='Select date and time ']"; 
    private SEARCH_RESULT_PRODUCT_TEXT ="//*[contains(@data-testid,'selectable-card-ps3-title')]";
    private TESTDRIVE ="#RBw8ZjGeRJ2y4-BDFbAUJw";
    private SELECT_MODEL_3 ="[data-dd-action-name='Polestar 3']";
    private SELECT_MODEL_2 ="[data-dd-action-name='Polestar 2']";
    private SELECT_MODEL_4 ="[data-dd-action-name='Polestar 4']";

    public async acceptAllPopup() {
        await this.web.element(this.ACCEPT_POPUPS, Constants.ACCEPT_POPUP).click();
    }
        public async selectProduct(product: string) {
            await this.web.element(this.MENU_POLESTAR3, Constants.PRODUCT).hover();
            // await this.web.element(this.MENU_POLESTAR3, Constants.PRODUCT).click();
        }

    public async selectMenueOption(product: string) {
       await this.web.element(this.MENU_POLESTAR4, Constants.MENU_OPTION).click();
    }
    public async testDrive(product: string) {
      await this.web.element(this.TESTDRIVE, Constants.TEST_DRIVE).click();
   }

    public async selectConfigure(product: string) {
        await this.web.element(this.CONFIGURE, Constants.CONFIGURE).click();
     }

     public async selectRangeOfCar(product: string) {
        await this.web.element(this.DUAL_MOTOR_LONG_RANGE, Constants.LONG_RANGE_DUAL_MOTOR).click();
     }

     public async selectExteriorColour(product: string) {
        await this.web.element(this.EXTERIOR_COLOUR, Constants.EXTERIOR_COLOUR).click();
        await this.web.element(this.NEXT_ARROW_IMG).click();
        await this.web.element(this.NEXT_ARROW_IMG).click();
     }

     public async selectInteriorColour(product: string) {
        await this.web.element(this.INTERIOR_COLOUR, Constants.INTERIOR_COLOUR).click();
     }

    public async selectUpgradeCheckbox(product: string) {
        await this.web.element(this.PRO_PACK_CHECKBOX).click();
     }

     public async selectElectroMagneticCheckbox(product: string) {
        await this.web.element(this.ELEKTROKROMATICSKT_CHECKBOX, Constants.ELEKTROKROMATICSKT_CHECKBOX).click();
     }

     public async SaveConfiguration(product: string) {
        await this.web.element(this.SAVE_CONFIGURATION, Constants.SAVE_CONFIGURATION).click();
     }

     public async varifyVisibilitySection(product: string) {
      await Assert.assertTrue(await this.web.element(this.DATE_TIME_TEXT,Constants.DATE_TIME).isVisible(1),Constants.DATE_TIME);
   }
   
   public async selectAddressForTrstDrive(product: string) {
      await this.web.element(this.MENU_POLESTAR4, Constants.MENU_OPTION).click();
   }
       public async verifySearchResult(product: string) {
           const products = await this.web.element(this.SEARCH_RESULT_PRODUCT_TEXT, Constants.PRODUCT).getAllTextContent();
           for(const prod of products) {
               await Assert.assertContainsIgnoreCase(prod, product, Constants.PRODUCT);
           }
       }
}