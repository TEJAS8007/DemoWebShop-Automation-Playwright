import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export class SearchPage {

    readonly page : Page;
    readonly searchStoreBox : Locator;
    readonly searchButton : Locator;
    readonly productName : Locator;
    readonly productImage : Locator;
    readonly productPrice : Locator;
    readonly productSortByDropdown : Locator;
    readonly productDisplayDropDown : Locator;

    readonly advanceSearchBox : Locator;
    readonly advanceSearchButton : Locator;

    constructor(page:Page) {
        this.page=page;

        this.searchStoreBox = page.locator("input#small-searchterms");
        this.searchButton = page.locator("input[value='Search']");
        this.productName = page.locator(".product-title");
        this.productImage = page.locator(".picture img");
        this.productPrice = page.locator("[class='price actual-price']");
        this.productSortByDropdown = page.locator('#products-orderby option');
        this.productDisplayDropDown = page.locator('#products-pagesize option');

        this.advanceSearchBox = page.locator("#Q");
        this.advanceSearchButton = page.locator("input[value='Search']").last();
    }

    /**
     * verify search page title
     * @param title 
     */
    async verifySearchPageTitle(title:string) {
        await expect(this.page).toHaveTitle(title);
    }

    /**
     * verifying product search functionality
     * @param productname 
     * @param price 
     */
    async verifyProductsearch(productname:string,price:string) {

        await this.searchStoreBox.fill(productname);
        await this.searchButton.click();

        await expect(await this.productName).toHaveText(productname);
        await expect(await this.productImage).toBeVisible();
        await expect(await this.productPrice).toHaveText(price);
    }

    /**
     * verifying sortBy Dropdown
     * @param productname 
     */
    async verifySortByDropdown(productname:string) {

        await this.searchStoreBox.fill(productname);
        await this.searchButton.click();

        const expectedOptions : string[] = [
            'Position',
            'Name: A to Z',
            'Name: Z to A',
            'Price: Low to High',
            'Price: High to Low',
            'Created on'
        ];

        const actualOptions : string[] = await this.productSortByDropdown.allInnerTexts();

        await expect(actualOptions).toEqual(expectedOptions);
    }

    /**
     * verifying display dropdown
     * @param productname 
     */
    async verifydisplayDropdown(productname:string) {

        await this.searchStoreBox.fill(productname);
        await this.searchButton.click();

        const expectedOption : string[] = [
            '4',
            '8',
            '12'
        ];
        
        const actualOption : string[] = await this.productDisplayDropDown.allInnerTexts();

        await expect(actualOption).toEqual(expectedOption);
    }

    /**
     * verifying advance product search functionality
     * @param productname 
     * @param price 
     */
    async verifyAdvanceProductsearch(productname:string,price:string) {

        await this.searchStoreBox.fill(productname);
        await this.searchButton.click();

        await this.advanceSearchBox.fill(productname);
        await this.advanceSearchButton.click();

        await expect(await this.productName).toHaveText(productname);
        await expect(await this.productImage).toBeVisible();
        await expect(await this.productPrice).toHaveText(price);
    }
}