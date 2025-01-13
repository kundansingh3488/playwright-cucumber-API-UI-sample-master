import { Given, Then, When, } from "@cucumber/cucumber";
import CommonPage from "../pages/CommonPage";
import HomePage from "../pages/HomePage";
import SearchResultsPage from "../pages/SearchResultsPage";
import poleStarHomePage from "../pages/poleStarHomePage";
import  UIElementActions from "../../support/playwright/actions/UIElementActions";
import  UIActions from "../../support/playwright/actions/UIActions";
import RegisterUserPage from "../pages/RegisterUserPage";
import StringUtil from "../../support/utils/StringUtil";
import { assert } from "console";

Given('user is on main page', async function () {
    await new HomePage(this.web).navigateToMainPage();
    await new UIActions(this.web).waitForDomContentLoaded();
    // await new UIActions(this.web).dismissAlertOnElementClick();
});

When('Select menu option {string}', async function (menu: string) {
    await new poleStarHomePage(this.web).selectMenueOption(menu);
});

When('Select {string} option', async function (order: string) {
    await new poleStarHomePage(this.web).selectConfigure(order);
});

When('Select long range {string} option', async function (order: string) {
    await new poleStarHomePage(this.web).selectRangeOfCar(order);
});
When('select exterior {string} of the car', async function (order: string) {
    await new poleStarHomePage(this.web).selectExteriorColour(order);
});

When('select upgrade {string} check box', async function (order:string) {
    await new poleStarHomePage(this.web).selectUpgradeCheckbox(order);
});

When('Select {string} check box', async function (order:string) {
    await new poleStarHomePage(this.web).selectElectroMagneticCheckbox(order);
});
Then('select {string}', async function (order:string) {
    await new poleStarHomePage(this.web).SaveConfiguration(order);
});

//=================  TEST DRIVE CAR   ================================

When('Select {string} from menus bar', async function (product: string) {
    await new poleStarHomePage(this.web).selectProduct(product);
});

When('Select {string}', async function (product: string) {
    await new poleStarHomePage(this.web).testDrive(product);
});

Then('Verify that the selected model is {string}', async function (product: string) {
    await new poleStarHomePage(this.web).verifySearchResult(product);
});
 
When('select avalible space address for test drive', async function () {
    await new RegisterUserPage(this.web).selectAvalibleSpaceForTestDrive();
});

//2. varify visibility of "Select date and time" sectionf
Then('varify visibility of {string} section', async function (date_Time: string) {
    await new poleStarHomePage(this.web).verifySearchResult(date_Time);
});

When('select avalible date and time from calender', async function () {
    await new RegisterUserPage(this.web).selectAvalibleSpaceForTestDrive();
    await new RegisterUserPage(this.web).dateAndTimeForTestDrive();
});

Then('select {string} from the Private customer dropdown', async function (string) {

  });

When('user enters the contact details {string}, {string}, {string}, {string}, {string}',
    async function (firstName, lastName, email, phone,zipCode) {
        email = StringUtil.formatString(email, StringUtil.randomNumberString(5));
        await new RegisterUserPage(this.web).enterRegistrationForTestDrive(firstName, lastName, email, phone, zipCode);
});
Then('varify selected {string}, {string},{string} details on the page', async function (string, string2, string3) {

  });

When('select test drive Terms and Conditions checkbox', async function () {
   await new RegisterUserPage(this.web).agreePrivacyPolicyTestDrive();
});

When('varify {string} button enabled', async function (button: string) {
    await new RegisterUserPage(this.web).testDriveConfirmBookingButton(button);

});

