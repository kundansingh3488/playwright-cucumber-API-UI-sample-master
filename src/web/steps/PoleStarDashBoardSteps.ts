import { Given, Then, When } from "@cucumber/cucumber";
import CommonPage from "../pages/CommonPage";
import HomePage from "../pages/HomePage";
import SearchResultsPage from "../pages/SearchResultsPage";
import poleStarDashboardPage from "../pages/poleStarDashboardPage";
import  UIElementActions from "../../support/playwright/actions/UIElementActions";
import  UIActions from "../../support/playwright/actions/UIActions";

Given('user is on main page', async function () {
    await new HomePage(this.web).navigateToMainPage();
    await new UIActions(this.web).waitForDomContentLoaded();
    // await new UIActions(this.web).dismissAlertOnElementClick();
});

When('Accept popup of home page', async function () {
  
    await new poleStarDashboardPage(this.web).acceptAllPopup();
});

When('Select menu option {string}', async function (menu: string) {
    await new poleStarDashboardPage(this.web).selectMenueOption(menu);
});

When('Select {string} option', async function (order: string) {
    await new poleStarDashboardPage(this.web).selectDesignOrder(order);
});

When('select exterior {string} of the car', async function (order:string) {
    await new poleStarDashboardPage(this.web).selectDesignOrder(order);
});

Then('Varify colour of the car should be {string}', async function (order:string) {

});

When('Select {string} first check box', async function (order:string) {
    await new poleStarDashboardPage(this.web).selectPilotboxCheckbox(order);
});

When('Select {string} check box', async function (order:string) {
    await new poleStarDashboardPage(this.web).selectElectroMagneticCheckbox(order);
});

