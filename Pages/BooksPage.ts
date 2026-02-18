import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export class BooksPage {

    readonly page : Page;
    readonly bookPageLink : Locator;
    readonly booksLink : Locator;
    readonly bookNames : Locator;
    readonly bookPrices : Locator;
    readonly sortByDropdown : Locator;
    readonly displayDropdown : Locator;

    constructor(page:Page) {
        this.page = page;

        this.bookPageLink = page.locator("//*[@class='top-menu']/li[1]/a");
        this.booksLink = page.locator('.product-grid .product-item');
        this.bookNames = page.locator('.product-title');
        this.bookPrices = page.locator('.prices');
        this.sortByDropdown = page.locator('#products-orderby option');
        this.displayDropdown = page.locator('#products-pagesize option');

    }

    async verifyBooksPageTitle(title:string) {
        await this.bookPageLink.click();
        await expect(this.page).toHaveTitle(title);
    }

    async verifyBooksCount() {
        await this.bookPageLink.click();
        await expect(await this.booksLink.count()).toBe(6);
    }

    async verifyBookNames() {
        await this.bookPageLink.click();

        const expectedBookNames : string[] = [
            'Computing and Internet',
            'Copy of Computing and Internet EX',
            'Fiction',
            'Fiction EX',
            'Health Book',
            'Science'
        ];

        const booksCount : number = await this.bookNames.count();

        for(let a=0;a<booksCount;a++) {

            const bookText  :string | null = (await this.bookNames.nth(a).innerText()).trim();

            await expect(bookText).toBe(expectedBookNames[a]);
        }
    }

    async verifyBookPrices() {

        await this.bookPageLink.click();
        
        const expectedBooksPrices = [
            '30.00\n10.00',
            '30.00\n10.00',
            '35.00\n24.00',
            '35.00\n24.00',
            '27.00\n10.00',
            '67.00\n51.00'
        ];

        const priceCount : number = await this.bookPrices.count();

        for(let a=0;a<priceCount;a++) {

            const bookPrice : string | null = (await this.bookPrices.nth(a).innerText());

            await expect(bookPrice).toBe(expectedBooksPrices[a]);
        }
    }

    async verifySortByDropdown() {

        await this.bookPageLink.click();

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

    async verifydisplayDropdown() {

        await this.bookPageLink.click();

        const displayCount : number = await this.displayDropdown.count();

        for(let a=0;a<displayCount;a++) {

            const displaytext : string | null = await this.displayDropdown.nth(a).textContent();
            console.log(displaytext);
        }
    }
 } 