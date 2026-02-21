import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export class ComputersPage {

    readonly page : Page;
    
    //Desktop module Locators
    readonly computersLink : Locator
    readonly desktopLink : Locator;
    readonly desktopNames : Locator;
    readonly desktopImages : Locator;
    readonly productPrices : Locator;
    readonly sortByDropdown : Locator;
    readonly displayDropdown : Locator;

    //NoteBook Module Locators
    readonly notebooksLink : Locator;
    readonly notebookName : Locator;
    readonly notebookPrices : Locator;
    readonly notebookImage : Locator;

    //Accessories Module Locators
    readonly accessoriesLink : Locator;
    readonly accessoriesNames : Locator;
    readonly accessoriesPrices : Locator;
    readonly accessoriesimages : Locator;

    constructor(page:Page) {
        this.page=page;

        this.computersLink = page.locator("//*[@class='top-menu']/li[2]/a");
        this.desktopLink = page.locator("//*[@class='top-menu']/descendant::a[@href='/desktops']");
        
        // Desktop module locator
        this.desktopNames = page.locator(".product-title");
        this.desktopImages = page.locator(".picture img");
        this.productPrices = page.locator("[class='price actual-price']");
        this.sortByDropdown = page.locator('#products-orderby option');
        this.displayDropdown = page.locator('#products-pagesize option');

        //NoteBook Module Locator
        this.notebooksLink = page.locator("//*[@class='top-menu']/descendant::a[@href='/notebooks']");
        this.notebookName = page.locator('.product-title');
        this.notebookPrices = page.locator("[class='price actual-price']");
        this.notebookImage = page.locator(".picture img");
  
        //Accessories module Locator
        this.accessoriesLink = page.locator("//*[@class='top-menu']/descendant::a[@href='/accessories']");
        this.accessoriesNames = page.locator(".product-title");
        this.accessoriesPrices = page.locator("[class='price actual-price']");
        this.accessoriesimages = page.locator(".picture img");
    }

    /**
     * Verifying product names from Desktop Module
     */
    async verifyProductNames() {

        await this.computersLink.hover();
        await this.desktopLink.click();

        const expectedName : string[] = [
            'Build your own cheap computer',
            'Build your own computer',
            'Build your own expensive computer',
            'Desktop PC with CDRW',
            'Elite Desktop PC',
            'Simple Computer'
        ];
        
        await expect(this.desktopNames).toHaveText(expectedName);
    }

    /**
     * Verifying product Images from Desktop Module
     */
    async verifyProductImages() {

        await this.computersLink.hover();
        await this.desktopLink.click();

        const imageCount : number = await this.desktopImages.count();
        await expect(imageCount).toBe(await this.desktopImages.count());
        
        for(let a=0;a<imageCount;a++) {
            await expect(await this.desktopImages.nth(a)).toBeVisible();
        }
    }

    /**
     * Verifying product Prices from Desktop Module
     */
    async verifyProductPrices() {

        await this.computersLink.hover();
        await this.desktopLink.click();

        const expectedPrices : string[] = [
            '800.00',
            '1200.00',
            '1800.00',
            '500.00',
            '1350.00',
            '800.00'
        ];
        const actualPrices : string[] = await this.productPrices.allInnerTexts();
        
        await expect(actualPrices).toEqual(expectedPrices);

        // for(let price of actualPrices) {
        //     console.log(price);
        // }
    }

    /**
     * Verifying product sortBy DropDown from Desktop Module
     */
    async verifySortByDropdown() {

        await this.computersLink.hover();
        await this.desktopLink.click();

        const expectedOptions : string[] = [
            'Position',
            'Name: A to Z',
            'Name: Z to A',
            'Price: Low to High',
            'Price: High to Low',
            'Created on'
        ];

        const count : number = await this.sortByDropdown.count();

        for(let a=0;a<count;a++) {

            const sortText : string | null = await this.sortByDropdown.nth(a).textContent();

            await expect(sortText).toBe(expectedOptions[a]);
        }
    }

    /**
     * Verifying product Display Dropdown  from Desktop Module
     */
    async verifydisplayDropdown() {

        await this.computersLink.hover();
        await this.desktopLink.click();

        const expectedOption : string[] = [
            '4',
            '8',
            '12'
        ];
        const displayCount : number = await this.displayDropdown.count();

        for(let a=0;a<displayCount;a++) {

            const displaytext : string | null = await this.displayDropdown.nth(a).textContent();

            await expect(displaytext).toBe(expectedOption[a]);
        }
    }

    /**
     * Verifying product name from NoteBook Module
     */
    async verifyNoteBookName(nbName:string) {

        await this.computersLink.hover();
        await this.notebooksLink.click();

        const NotebookName : string | null = (await this.notebookName.innerText()).trim();
        await expect(NotebookName).toBe(nbName);
    }

     /**
     * Verifying product Price from NoteBook Module
     */
    async verifyNoteBookPrice(nbPrice:string) {

        await this.computersLink.hover();
        await this.notebooksLink.click();

        const Notebookprice : string | null = (await this.notebookPrices.innerText()).trim();
        await expect(Notebookprice).toBe(nbPrice);
    }

     /**
     * Verifying product name from NoteBook Module
     */
    async verifyNoteBookImage() {

        await this.computersLink.hover();
        await this.notebooksLink.click();

        await expect(this.notebookImage).toBeVisible();
    }

    /**
     * Verifying product name from Accessories Module
     */
    async verifyAccessoriesName() {

        await this.computersLink.hover();
        await this.accessoriesLink.click();

        const expectedNames : string[] = [
            'TCP Coaching day',
            'TCP Instructor Led Training',
            'TCP Public Complete',
            'TCP Public MT/AT',
            'TCP Public RPA/TCD',
            'TCP Self-Paced Training',
            'TCP Self-Paced Training additional month'
        ];

        const assccNames : string[] = await this.accessoriesNames.allInnerTexts();
        
        await expect(assccNames).toEqual(expectedNames);
    }

     /**
     * Verifying product Price from Accessories Module
     */
    async verifyAccessoriesPrice() {

        await this.computersLink.hover();
        await this.accessoriesLink.click();

        const expectedPrices : string[] = [
            '1000.00',
            '9000.00',
            '3000.00',
            '1700.00',
            '1700.00',
            '400.00',
            '400.00'
        ];

        const assccPrices : string[] = await this.accessoriesPrices.allInnerTexts();
        
        await expect(assccPrices).toEqual(expectedPrices);
    }

     /**
     * Verifying product image from accessories Module
     */
    async verifyAccesoriesImage() {

        await this.computersLink.hover();
        await this.accessoriesLink.click();

        const imageCount : number = await this.accessoriesimages.count();
        await expect(imageCount).toBe(7);

        for(let a=0;a<imageCount;a++) {
            await expect(await this.accessoriesimages.nth(a)).toBeVisible();
        }
    }

    /**
     * Verifying product sortBy DropDown from Desktop Module
     */
    async verifyAccessoriesSortByDropdown() {

        await this.computersLink.hover();
        await this.accessoriesLink.click();

        const expectedOptions : string[] = [
            'Position',
            'Name: A to Z',
            'Name: Z to A',
            'Price: Low to High',
            'Price: High to Low',
            'Created on'
        ];

        const count : number = await this.sortByDropdown.count();

        for(let a=0;a<count;a++) {

            const sortText : string | null = await this.sortByDropdown.nth(a).textContent();

            await expect(sortText).toBe(expectedOptions[a]);
        }
    }

    /**
     * Verifying product Display Dropdown  from Desktop Module
     */
    async verifyAccessoriesdisplayDropdown() {

        await this.computersLink.hover();
        await this.accessoriesLink.click();

        const expectedOption : string[] = [
            '4',
            '8',
            '12'
        ];
        
        const displayCount : number = await this.displayDropdown.count();

        for(let a=0;a<displayCount;a++) {

            const displaytext : string | null = await this.displayDropdown.nth(a).textContent();

            await expect(displaytext).toBe(expectedOption[a]);
        }
    }
}