import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export class OrderConfirmationPage {

    readonly page : Page;
    readonly productImage : Locator;
    readonly productName : Locator;
    readonly productSubPrice : Locator;
    readonly confirmButton : Locator;
    readonly orderConfirmationMsg : Locator;
    readonly orderId : Locator;

    constructor(page:Page) {
        this.page = page;

        this.productImage = page.locator('.product-picture img');
        this.productName = page.locator('.product-name');
        this.productSubPrice = page.locator('.product-subtotal');
        this.confirmButton = page.locator('#confirm-order-buttons-container input');
        this.orderConfirmationMsg = page.locator('div.title strong');
        this.orderId = page.locator("//*[@class='details']/li[1]");
    }

    /**
     * verifying order summary from Order Confirmation page..
     * @param pName 
     * @param price 
     */
    async verifyOrderSummary(pName:string,price:string,orderMsg:string) {

        await expect(this.productImage).toBeVisible();
        await expect(this.productName).toHaveText(pName);
        await expect(this.productSubPrice).toHaveText(price);

        await expect(this.confirmButton).toBeEnabled();
        await this.confirmButton.click();

        await expect(this.orderConfirmationMsg).toHaveText(orderMsg);

        console.log(`${await this.orderConfirmationMsg.textContent()} with ${await this.orderId.textContent()}`);
        
    }
}