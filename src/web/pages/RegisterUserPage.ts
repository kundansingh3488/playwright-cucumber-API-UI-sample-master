import UIActions from "../../support/playwright/actions/UIActions";
import Assert from "../../support/playwright/asserts/Assert";
import StringUtil from "../../support/utils/StringUtil";
import Constants from "../constants/Constants";
import  DropDownActions from "../../support/playwright/actions/DropDownActions";
import  CheckBoxActions from "../../support/playwright/actions/CheckBoxActions";

export default class RegisterUserPage { 

    constructor(private web: UIActions) { }

    private FIRST_NAME_TEXTBOX = "#input-firstname";
    private LAST_NAME_TEXTBOX = "#input-lastname";
    private EMAIL_TEXTBOX = "#input-email";
    private TELEPHONE_TEXTBOX = "#input-telephone";
    private PASSWORD_TEXTBOX = "#input-password";
    private CONFIRM_PASSWORD_TEXTBOX = "#input-confirm";
    private SUBSCRIBE_RADIO = "[for='input-newsletter-{0}']";
    private PRIVACY_POLICY_CHECKBOX = "[for='input-agree']";
    private PRIVACY_POLICY_LINK = "//a/b[text()='Privacy Policy']";
    private CONTINUE_BUTTON = "[value='Continue']";

// For Test Drive Booking
    private FIRST_NAME = "#firstname";
    private LAST_NAME = "#lastname";
    private EMAIL = "#email";
    private PHONE = "#phone";
    private ZIPCODE = "#postal-code";
    private TERM_POLICY_CHECKBOX = "#checkbox-legalDocumentsAccepted";
    private TERM_POLICY_POLESTAR_EMAIL = "input[id='checkbox-purposes[de568ad2-4514-4078-9bd5-d812ea15c4ca]']";
    private TERM_POLICY_POLESTAR_USES = "input[id='checkbox-purposes[65f99275-e447-40aa-9c36-53e44d93adcd]']";
    private TERM_POLICY_POLESTAR_SHARES = "input[id='checkbox-purposes[00294b70-7019-48b5-ae7b-8d88da668b99]']";
    private TESTDRIVE_AVALIBLE_SPACE = "button[data-testid='at-polestar-list-atlanta']";
    private DATEAND_TIME_FOR_TESTDRIVE = "//*[@data-testid='calendar']//*[@data-testid='selectable-date']";
    private NEXT_ARROW_FOR_CALENDER = "button[data-testid='next-page'] span[class='css-1gv0x9v'] svg";
    private AVALIBLE_TIME_FOR_TESTDRIVE = "button[data-testid='at-polestar-list-atlanta']";
    private TESTDRIVE_CONFIRM_BOOKING = "//button[@data-testid='confirm-booking-btn']";
    
    public async enterRegistrationDetails(firstName: string, lastName: string, email: string, telephone: string, password: string, confirmPassword: string, subscribe: string) {
        await this.web.editBox(this.FIRST_NAME_TEXTBOX, Constants.FIRST_NAME).fill(firstName);
        await this.web.editBox(this.LAST_NAME_TEXTBOX, Constants.LAST_NAME).fill(lastName);
        await this.web.editBox(this.EMAIL_TEXTBOX, Constants.EMAIL).fill(email);
        await this.web.editBox(this.TELEPHONE_TEXTBOX, Constants.TELEPHONE).fill(telephone);
        await this.web.editBox(this.PASSWORD_TEXTBOX, Constants.PASSWORD).fill(password);
        await this.web.editBox(this.CONFIRM_PASSWORD_TEXTBOX, Constants.CONFIRM_PASSWORD).fill(confirmPassword);
        await this.web.element(StringUtil.formatString(this.SUBSCRIBE_RADIO, subscribe.toLowerCase()), subscribe.toUpperCase()).click();
    }
    public async agreePrivacyPolicy() {
        await Assert.assertTrue(await this.web.element(this.PRIVACY_POLICY_LINK, Constants.PRIVACY_POLICY).isVisible(1),
            Constants.PRIVACY_POLICY);
        await this.web.element(this.PRIVACY_POLICY_CHECKBOX, Constants.PRIVACY_POLICY).click();
    }

    public async clickContinueButton() {
        await this.web.element(this.CONTINUE_BUTTON, Constants.CONTINUE).click();
    }

    public async enterRegistrationForTestDrive(firstName: string, lastName: string, email: string, phone: string, zipcode: string) {
        await this.web.editBox(this.FIRST_NAME, Constants.FIRST_NAME).scrollIntoView();
        await this.web.editBox(this.FIRST_NAME, Constants.FIRST_NAME).fill(firstName);
        await this.web.editBox(this.LAST_NAME, Constants.LAST_NAME).fill(lastName);
        await this.web.editBox(this.EMAIL, Constants.EMAIL).fill(email);
        await this.web.editBox(this.PHONE, Constants.PHONE).fill(phone);
        await this.web.editBox(this.ZIPCODE, Constants.ZIPCODE).fill(zipcode);
    }

    public async agreePrivacyPolicyTestDrive() {
        await this.web.element(this.TERM_POLICY_CHECKBOX, Constants.PRIVACY_POLICY).click();
        await this.web.element(this.TERM_POLICY_POLESTAR_EMAIL, Constants.PRIVACY_POLICY).click();
        await this.web.element(this.TERM_POLICY_POLESTAR_USES, Constants.PRIVACY_POLICY).click();
        await this.web.element(this.TERM_POLICY_POLESTAR_SHARES, Constants.PRIVACY_POLICY).click();
    }

    public async selectCustomerType() {
        await this.web.element(this.CONTINUE_BUTTON, Constants.CONTINUE).click();
        // await this.web.DropDownActions(await this.web.element(this.CONTINUE_BUTTON, Constants.CONTINUE)).selectByIndex(1);
    }

    public async selectAvalibleSpaceForTestDrive() {
        (await this.web.element(this.TESTDRIVE_AVALIBLE_SPACE, Constants.TESTDRIVE_AVALIBLE_SPACE).scrollIntoView()).click();
    }

    public async dateAndTimeForTestDrive() { 
        if(await this.web.element(this.DATEAND_TIME_FOR_TESTDRIVE, Constants.TESTDRIVE_AVALIBLE_SPACE).isEnabled){
        await this.web.element(this.DATEAND_TIME_FOR_TESTDRIVE, Constants.TESTDRIVE_AVALIBLE_SPACE).click();
        }
    else{
        await this.web.element(this.NEXT_ARROW_FOR_CALENDER, Constants.TESTDRIVE_AVALIBLE_SPACE).doubleClick();
        await this.web.element(this.DATEAND_TIME_FOR_TESTDRIVE, Constants.TESTDRIVE_AVALIBLE_SPACE).click();
    }}

    public async testDriveConfirmBookingButton(button: string) {
        // await this.web.element(this.TESTDRIVE_CONFIRM_BOOKING, Constants.CONTINUE).click();
        const products = await this.web.element(this.TESTDRIVE_CONFIRM_BOOKING, Constants.CONTINUE).getAllTextContent();
        for(const prod of products) {
            await Assert.assertContainsIgnoreCase(prod, button, Constants.PRODUCT);
        }
    }
}