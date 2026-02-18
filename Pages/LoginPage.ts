import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export class LoginPage {

    readonly page : Page;
    readonly loginLink : Locator;
    readonly usernameBox : Locator;
    readonly passwordBox : Locator;
    readonly rememberMeCheckbox : Locator;
    readonly loginButton : Locator;
    readonly errorMsg : Locator;
    readonly invalidLoginErrorMsg : Locator;
    readonly invalidUsernameErrorMsg : Locator;
    readonly loginUsername : Locator;
    readonly logOutLink : Locator;

    constructor(page:Page) {
        this.page=page;
        
        this.loginLink = page.locator("//a[text()='Log in']");
        this.usernameBox = page.locator("#Email");
        this.passwordBox = page.locator("#Password");
        this.rememberMeCheckbox = page.locator("#RememberMe");
        this.loginButton = page.locator("[class='button-1 login-button']");
        this.errorMsg = page.locator("span[for='Email']");
        this.invalidLoginErrorMsg = page.locator('.validation-summary-errors span');
        this.invalidUsernameErrorMsg = page.locator('.field-validation-error span');
        this.loginUsername = page.locator('a.account').first();
        this.logOutLink = page.locator('.ico-logout');
    }

    /**
     * To open DemowebShop Application
     */
    async openApplication() {
        await this.page.goto(process.env.BASE_URL!);
    }

    /**
     * To Verify application title
     * @param title 
     */
    async verifyApplicationTitle(title:string) {
        await expect(this.page).toHaveTitle(title);
    }

    /**
     * Login into DemowebShop Application
     * @param un 
     * @param ps 
     */
    async loginIntoApplication(un:string,ps:string) {

        await this.loginLink.click();

        await this.usernameBox.fill(un);
        await this.passwordBox.fill(ps);
        await this.rememberMeCheckbox.check();
        await this.loginButton.click();
    }
}