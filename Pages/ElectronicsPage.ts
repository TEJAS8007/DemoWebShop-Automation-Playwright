import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export class ElectronisPage {

    readonly page : Page;
    
    //Camera Module Locator..
    readonly electronicsPageLink : Locator;
    readonly cameraLink : Locator;
    readonly cameraNames : Locator;
    readonly cameraImages : Locator;
    readonly cameraPrices : Locator;
    readonly cameraSortByDropdown : Locator;
    readonly cameraDisplayDropDown : Locator;

    //cellPhone Module Locator
    readonly cellPhoneLink : Locator;
    readonly cellPhoneNames : Locator;
    readonly cellPhoneImages : Locator;
    readonly cellPhonePrices : Locator;
    readonly cellPhoneSortByDropdown : Locator;
    readonly cellPhoneDisplayDropDown : Locator;

    constructor(page:Page) {
        this.page=page;

        this.electronicsPageLink = page.locator("//*[@class='top-menu']/li[3]/a");
        
        //camera module Locator..
        this.cameraLink = page.locator("//*[@class='top-menu']/li[3]//ul//a[@href='/camera-photo']");
        this.cameraNames = page.locator(".product-title");
        this.cameraImages = page.locator(".picture img");
        this.cameraPrices = page.locator("[class='price actual-price']");
        this.cameraSortByDropdown = page.locator('#products-orderby option');
        this.cameraDisplayDropDown = page.locator('#products-pagesize option');

        //cellPhone module Locator..
        this.cellPhoneLink = page.locator("//*[@class='top-menu']/li[3]//ul//a[@href='/cell-phones']");
        this.cellPhoneNames = page.locator(".product-title");
        this.cellPhoneImages = page.locator(".picture img");
        this.cellPhonePrices = page.locator("[class='price actual-price']");
        this.cellPhoneSortByDropdown = page.locator('#products-orderby option');
        this.cellPhoneDisplayDropDown = page.locator('#products-pagesize option');

    }

    async verifyCameraPageTitle(title:string) {
        await this.electronicsPageLink.hover();
        await this.cameraLink.click();

        await expect(this.page).toHaveTitle(title);
    }

    async verifyCameraCount() {
        await this.electronicsPageLink.hover();
        await this.cameraLink.click();

        await expect(await this.cameraNames.count()).toBe(4);
    }

    async verifyCameraNames() {
        await this.electronicsPageLink.hover();
        await this.cameraLink.click();

        const expectedBookNames : string[] = [
            '1MP 60GB Hard Drive Handycam Camcorder',
            'Camcorder',
            'Digital SLR Camera 12.2 Mpixel',
            'High Definition 3D Camcorder'
            
        ];

        const actualNames : string[] = await this.cameraNames.allInnerTexts();

        await expect(actualNames).toEqual(expectedBookNames);
    }

    async verifyCameraPrices() {

        await this.electronicsPageLink.hover();
        await this.cameraLink.click();

        const expectedBooksPrices = [
            '349.00',
            '530.00',
            'From 500.00',
            '1300.00'
        ];

        const expectedPrices : string[] = await this.cameraPrices.allInnerTexts();

        await expect(expectedPrices).toEqual(expectedBooksPrices);
    }

    async verifySortByDropdown() {

        await this.electronicsPageLink.hover();
        await this.cameraLink.click();

        const expectedOptions : string[] = [
            'Position',
            'Name: A to Z',
            'Name: Z to A',
            'Price: Low to High',
            'Price: High to Low',
            'Created on'
        ];

        const actualOptions : string[] = await this.cameraSortByDropdown.allInnerTexts();

        await expect(actualOptions).toEqual(expectedOptions);
    }

    async verifydisplayDropdown() {

        await this.electronicsPageLink.hover();
        await this.cameraLink.click();

        const expectedOption : string[] = [
            '4',
            '8',
            '12'
        ];
        
        const actualOption : string[] = await this.cameraDisplayDropDown.allInnerTexts();

        await expect(actualOption).toEqual(expectedOption);
    }

    async verifyCellPhonePageTitle(title:string) {
        await this.electronicsPageLink.hover();
        await this.cellPhoneLink.click();
        
        await expect(this.page).toHaveTitle(title);
    }

    async verifyCellPhoneCount() {
        await this.electronicsPageLink.hover();
        await this.cellPhoneLink.click();

        await expect(await this.cellPhoneNames.count()).toBe(3);
    }

    async verifycellPhoneNames() {
        await this.electronicsPageLink.hover();
        await this.cellPhoneLink.click();

        const expectedBookNames : string[] = [
            'Smartphone',
            'Used phone',
            'Phone Cover'
        ];

        await expect(this.cellPhoneNames).toHaveText(expectedBookNames);
    }

    async verifycellPhonePrices() {

        await this.electronicsPageLink.hover();
        await this.cellPhoneLink.click();

        const expectedBooksPrices = [
            '100.00',
            '5.00',
            '10.00'
        ];

        await expect(this.cellPhonePrices).toHaveText(expectedBooksPrices);

    }

    async verifyCellPhoneSortByDropdown() {

        await this.electronicsPageLink.hover();
        await this.cellPhoneLink.click();

        const expectedOptions : string[] = [
            'Position',
            'Name: A to Z',
            'Name: Z to A',
            'Price: Low to High',
            'Price: High to Low',
            'Created on'
        ];
        
        await expect(this.cellPhoneSortByDropdown).toHaveText(expectedOptions);
    }

    async verifyCellPhonedisplayDropdown() {

        await this.electronicsPageLink.hover();
        await this.cameraLink.click();

        const expectedOption : string[] = [
            '4',
            '8',
            '12'
        ];
      
        await expect(this.cellPhoneDisplayDropDown).toHaveText(expectedOption);
    }
}