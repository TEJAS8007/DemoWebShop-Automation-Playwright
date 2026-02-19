import {test as baseTest} from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { BooksPage } from '../Pages/BooksPage';
import { CartPage } from '../Pages/CartPage';

type myFixtureType = {
    loginPage : LoginPage;
    booksPage : BooksPage;
    cartPage : CartPage;
}

export const test = baseTest.extend<myFixtureType> ({

    loginPage : async({page},use) => {
        await use(new LoginPage(page));
    },

    booksPage : async({page},use) => {
        await use(new BooksPage(page));
    },

    cartPage : async({page},use) => {
        await use(new CartPage(page));
    }
})