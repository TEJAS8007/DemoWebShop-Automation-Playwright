import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export class CartPage {

    readonly page : Page;
    readonly addToCartButton : Locator;
    readonly shoppingCartLink : Locator;
    readonly bookName : Locator;
    readonly subTotalPrice : Locator;
    readonly totalPrice : Locator;
    readonly removeCheckbox : Locator;
    readonly updateCartButton : Locator;
    readonly bookPageLink : Locator;
    
    
    constructor(page:Page) {
        this.page=page;

        this.bookPageLink = page.locator("//*[@class='top-menu']/li[1]/a");
        this.addToCartButton = page.getByRole('button', { name: 'Add to cart' }).first();
        this.shoppingCartLink = page.locator('.ico-cart').first();
        this.bookName = page.locator('.product-name');
        this.subTotalPrice = page.locator("//*[@class='cart-total']//tr[1]//td[2]").first();
        this.totalPrice = page.locator('.product-price').last();
        this.removeCheckbox = page.locator("[name='removefromcart']");
        this.updateCartButton = page.locator("[name='updatecart']");
    }

    /**
     * Performing product validation from cart page
     */
    async addProductToCart(bName:string,sbPrice:string,tPrice:string) {
        // opening booksPage
        await this.bookPageLink.waitFor({state:'visible'});
        await this.bookPageLink.click();

        // Adding product to Cart
        await this.addToCartButton.click();
        await this.shoppingCartLink.click();

        // Verifying product name from cart Page
        const bookName : string | null = (await this.bookName.innerText()).trim();
        await expect(bookName).toBe(bName);

        // verifying sub total price from cart page
        const subPrice : string | null = (await this.subTotalPrice.innerText()).trim();
        await expect(subPrice).toBe(sbPrice);

        // verifying total price on Cart page
        const totalPrice : string | null = (await this.totalPrice.innerText()).trim();
        await expect(totalPrice).toBe(tPrice);

        // Removing product from Cart 
        await this.removeCheckbox.waitFor({state:'visible'});
        await this.removeCheckbox.check();
        await this.updateCartButton.waitFor({state:'visible'});
        await this.updateCartButton.click();
    }
}