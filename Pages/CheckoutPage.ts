import { Locator, Page } from "playwright";

export class CheckoutPage {

    readonly page : Page;
    readonly firstNameBox : Locator;
    readonly lastNameBox : Locator;
    readonly companyNameBox : Locator;
    readonly countryBox : Locator;
    readonly stateBox : Locator;
    readonly cityBox : Locator;
    readonly addressOneBox : Locator;
    readonly addressTwoBox : Locator;
    readonly postalCodeBox : Locator;
    readonly phoneNumberBox : Locator;
    readonly faxNumberBox : Locator;
    readonly continueButton : Locator;
    readonly shippingContinueButton : Locator;
    readonly shippingMethodContinueButton : Locator;
    readonly paymentMethodContinueButton : Locator;
    readonly paymentInfoContinueButton : Locator;



    constructor(page:Page) {
        this.page=page;

        this.firstNameBox = page.locator('#BillingNewAddress_FirstName');
        this.lastNameBox = page.locator('#BillingNewAddress_LastName');
        this.companyNameBox = page.locator('#BillingNewAddress_Company');
        this.countryBox = page.locator('div #BillingNewAddress_CountryId');
        this.stateBox = page.locator('div #BillingNewAddress_StateProvinceId');
        this.cityBox = page.locator('#BillingNewAddress_City');
        this.addressOneBox = page.locator('#BillingNewAddress_Address1');
        this.addressTwoBox = page.locator('#BillingNewAddress_Address2');
        this.postalCodeBox = page.locator('#BillingNewAddress_ZipPostalCode');
        this.phoneNumberBox = page.locator('#BillingNewAddress_PhoneNumber');
        this.faxNumberBox = page.locator('#BillingNewAddress_FaxNumber');
        this.continueButton = page.locator('#billing-buttons-container input');

        this.shippingContinueButton = page.locator('#shipping-buttons-container input');
        this.shippingMethodContinueButton = page.locator('#shipping-method-buttons-container input');
        this.paymentMethodContinueButton = page.locator('#payment-method-buttons-container input');
        this.paymentInfoContinueButton = page.locator('#payment-info-buttons-container input');
    }

    /**
     * Adding customer dettails on CheckoutPage..
     * @param fn 
     * @param ln 
     * @param co 
     * @param ci 
     * @param ad1 
     * @param ad2 
     * @param po 
     * @param ph 
     * @param fx 
     */
    async addCustomerDetails(fn:string,ln:string,co:string,ci:string,ad1:string,ad2:string,
        po:string,ph:string,fx:string
    ) {
        
        await this.firstNameBox.clear();
        await this.lastNameBox.clear();

        await this.firstNameBox.fill(fn);

        await this.lastNameBox.fill(ln);

        await this.companyNameBox.fill(co);

        await this.countryBox.selectOption('Kenya');
        await this.stateBox.selectOption('Other (Non US)');

        await this.cityBox.fill(ci);

        await this.addressOneBox.fill(ad1);

        await this.addressTwoBox.fill(ad2);

        await this.postalCodeBox.fill(po);

        await this.phoneNumberBox.fill(ph);

        await this.faxNumberBox.fill(fx);

        await this.continueButton.click();

        await this.shippingContinueButton.click();
        await this.shippingMethodContinueButton.click();
        await this.paymentMethodContinueButton.click();
        await this.paymentInfoContinueButton.click();

    }
}