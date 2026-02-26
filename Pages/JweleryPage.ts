import { Page ,Locator} from "playwright";
import { expect } from "playwright/test";

export class JweleryPage {

    readonly page : Page;

    //jwelery module Locators..
    readonly jweleryModuleLink : Locator;
    readonly jweleryNames : Locator;
    readonly jweleryImages : Locator;
    readonly jweleryPrices : Locator;
    readonly jwelerySortByDropdown : Locator;
    readonly jweleryDisplayDropDown : Locator;

    constructor(page:Page) {
        this.page=page;

        //jwelery module Locators..
        this.jweleryModuleLink = page.locator("//*[@class='top-menu']/li[6]/a");
        this.jweleryNames = page.locator(".product-title");
        this.jweleryImages = page.locator(".picture img");
        this.jweleryPrices = page.locator("[class='price actual-price']");
        this.jwelerySortByDropdown = page.locator('#products-orderby option');
        this.jweleryDisplayDropDown = page.locator('#products-pagesize option');

    }

    /**
     * verufying jwelery page title 
     * @param title 
     */
    async verifyJweleryPageTitle(title:string) {
        await this.jweleryModuleLink.click();
        await expect(this.page).toHaveTitle(title);
    }

    /**
     * verifying jwelery page product count
     */
    async verifyJweleryCount() {
        await this.jweleryModuleLink.click();

        await expect(await this.jweleryNames.count()).toBe(5);
    }

    /**
     * verifying jwelery page product names
     */
    async verifyJweleryNames() {
        await this.jweleryModuleLink.click();
        
        const expectedBookNames : string[] = [
            'Create Your Own Jewelry',
            'Black & White Diamond Heart',
            'Diamond Pave Earrings',
            'Diamond Tennis Bracelet',
            'Vintage Style Three Stone Diamond Engagement Ring'
            
        ];

        const actualNames : string[] = await this.jweleryNames.allInnerTexts();
        
        await expect(actualNames).toEqual(expectedBookNames);
    }

    /**
     * verifying jwelery page product prices
     */
    async verifyJweleryPrices() {

        await this.jweleryModuleLink.click();
        
        const expectedBooksPrices = [
            '100.00',
            '130.00',
            'From 350.00',
            '360.00',
            '2100.00'
        ];

        const expectedPrices : string[] = await this.jweleryPrices.allInnerTexts();
    
        await expect(expectedPrices).toEqual(expectedBooksPrices);
    }

    /**
     * verifying jwelery page sortBy dropdown
     */
    async verifySortByDropdown() {

        await this.jweleryModuleLink.click();

        const expectedOptions : string[] = [
            'Position',
            'Name: A to Z',
            'Name: Z to A',
            'Price: Low to High',
            'Price: High to Low',
            'Created on'
        ];

        const actualOptions : string[] = await this.jwelerySortByDropdown.allInnerTexts();

        await expect(actualOptions).toEqual(expectedOptions);
    }

    /**
     * verifying jwelery page display dropdown
     */
    async verifydisplayDropdown() {

        await this.jweleryModuleLink.click();

        const expectedOption : string[] = [
            '4',
            '8',
            '12'
        ];
        
        const actualOption : string[] = await this.jweleryDisplayDropDown.allInnerTexts();

        await expect(actualOption).toEqual(expectedOption);
    }
}