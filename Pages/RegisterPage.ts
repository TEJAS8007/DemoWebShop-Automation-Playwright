import { Page, Locator, expect } from '@playwright/test';

export class RegisterPage {

    readonly page: Page;

    // Locators
    readonly registerLink : Locator;
    readonly logOutLink : Locator;
    readonly genderMale: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly email: Locator;
    readonly password: Locator;
    readonly confirmPassword: Locator;
    readonly registerButton: Locator;
    readonly successMessage: Locator;

    constructor(page: Page) {
        this.page = page;

        this.registerLink = page.locator("//a[text()='Register']");
        this.genderMale = page.locator('#gender-male');
        this.firstName = page.locator('#FirstName');
        this.lastName = page.locator('#LastName');
        this.email = page.locator('#Email');
        this.password = page.locator('#Password');
        this.confirmPassword = page.locator('#ConfirmPassword');
        this.registerButton = page.locator('#register-button');
        this.successMessage = page.locator('.result');
        this.logOutLink = page.locator("//a[text()='Log out']");
    }

    /**
     * Generate dynamic email
     */
    generateEmail(): string {
        const timestamp = Date.now();
        return `testuser${timestamp}@gmail.com`;
    }

    /**
     * Registering user with dynamic Data and returning email password
     * @param first 
     * @param last 
     * @param pass 
     * @returns 
     */
    async registerUser(first: string, last: string, pass: string) {

        const dynamicEmail = this.generateEmail();

        await this.registerLink.click();
        await this.genderMale.check();
        await this.firstName.fill(first);
        await this.lastName.fill(last);
        await this.email.fill(dynamicEmail);
        await this.password.fill(pass);
        await this.confirmPassword.fill(pass);
        await this.registerButton.click();

        //await expect(this.successMessage).toHaveText('Your registration completed');

        return {
            email: dynamicEmail,
            password: pass
        };
    }
}