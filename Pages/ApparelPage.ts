import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export class ApparelPage {

    readonly page : Page;

    //apparel module Locators..
    readonly apparelModuleLink : Locator;
    readonly apparelNames : Locator;
    readonly apparelImages : Locator;
    readonly apparelPrices : Locator;
    readonly apparelSortByDropdown : Locator;
    readonly apparelDisplayDropDown : Locator;

    constructor(page:Page) {
        this.page=page;

        //apparel module Locators..
        this.apparelModuleLink = page.locator("//*[@class='top-menu']/li[4]/a");
        this.apparelNames = page.locator(".product-title");
        this.apparelImages = page.locator(".picture img");
        this.apparelPrices = page.locator("[class='price actual-price']");
        this.apparelSortByDropdown = page.locator('#products-orderby option');
        this.apparelDisplayDropDown = page.locator('#products-pagesize option');
    }

    /**
     * verufying apparel page title 
     * @param title 
     */
    async verifyApparelPageTitle(title:string) {
        await this.apparelModuleLink.click();
        await expect(this.page).toHaveTitle(title);
    }

    /**
     * verifying apparel page product count
     */
    async verifyApparelCount() {
        await this.apparelModuleLink.click();

        await expect(await this.apparelNames.count()).toBe(8);
    }

    /**
     * verifying apparel page product names
     */
    async verifyApparelNames() {
        await this.apparelModuleLink.click();
        
        const expectedBookNames : string[] = [
            "50's Rockabilly Polka Dot Top JR Plus Size",
            'Blue and green Sneaker',
            'Blue Jeans',
            'Casual Golf Belt',
            'Custom T-Shirt',
            'Denim Short with Rhinestones',
            'Genuine Leather Handbag with Cell Phone Holder & Many Pockets',
            'Green and blue Sneaker'
            
        ];

        const actualNames : string[] = await this.apparelNames.allInnerTexts();
        
        await expect(actualNames).toEqual(expectedBookNames);
    }

    /**
     * verifying apparel page product prices
     */
    async verifyApparelPrices() {

        await this.apparelModuleLink.click();
        
        const expectedBooksPrices = [
            '11.00',
            '11.00',
            '1.00',
            '1.00',
            '15.00',
            '10.00',
            '35.00',
            '17.56'
        ];

        const expectedPrices : string[] = await this.apparelPrices.allInnerTexts();
        
        await expect(expectedPrices).toEqual(expectedBooksPrices);
    }

    /**
     * verifying apparel page sortBy dropdown
     */
    async verifySortByDropdown() {

        await this.apparelModuleLink.click();

        const expectedOptions : string[] = [
            'Position',
            'Name: A to Z',
            'Name: Z to A',
            'Price: Low to High',
            'Price: High to Low',
            'Created on'
        ];

        const actualOptions : string[] = await this.apparelSortByDropdown.allInnerTexts();

        await expect(actualOptions).toEqual(expectedOptions);
    }

    /**
     * verifying apparel page display dropdown
     */
    async verifydisplayDropdown() {

        await this.apparelModuleLink.click();

        const expectedOption : string[] = [
            '4',
            '8',
            '12'
        ];
        
        const actualOption : string[] = await this.apparelDisplayDropDown.allInnerTexts();

        await expect(actualOption).toEqual(expectedOption);
    }    
    
}