import { Given, Then, When } from "@cucumber/cucumber";
import CommonPage from "../pages/CommonPage";
import HomePage from "../pages/HomePage";
import SearchResultsPage from "../pages/SearchResultsPage";
import poleStarDashboardPage from "../pages/poleStarDashboardPage";
import  UIElementActions from "../../support/playwright/actions/UIElementActions";
import  UIActions from "../../support/playwright/actions/UIActions";

Given('user is on main page', async function () {
    await new HomePage(this.web).navigateToMainPage();
    await new HomePage(this.web).navigateToMainPage();
    // await new UIActions(this.web).dismissAlertOnElementClick();
});

Then('Varify visibility of home page Menu option', async function () {
    // await new UIActions(this.web).acceptAlertOnElementClick();
    
    await new poleStarDashboardPage(this.web).verifyMenuOptions;
});

When('Select menu option {string}', async function (menu: string) {
    await new poleStarDashboardPage(this.web).selectMenueOption;
   
});

When('Select {string} option', async function (order: string) {
    await new poleStarDashboardPage(this.web).selectDesignOrder;
});

When('select exterior {string} of the car', async function (order:string) {
    await new poleStarDashboardPage(this.web).selectDesignOrder;
});

Then('Varify colour of the car should be {string}', async function (order:string) {

});

When('Select {string} first check box', async function (order:string) {
    await new poleStarDashboardPage(this.web).selectPilotboxCheckbox;
});

When('Select {string} check box', async function (order:string) {
    await new poleStarDashboardPage(this.web).selectElectroMagneticCheckbox;
});

