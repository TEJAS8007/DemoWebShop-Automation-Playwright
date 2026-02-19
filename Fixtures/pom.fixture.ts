import {test as baseTest} from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { BooksPage } from '../Pages/BooksPage';
import { CartPage } from '../Pages/CartPage';
import { ComputersPage } from '../Pages/ComputersPage';

type myFixtureType = {
    loginPage : LoginPage;
    booksPage : BooksPage;
    cartPage : CartPage;
    compPage : ComputersPage;
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
    },

    compPage : async({page},use) => {
        await use(new ComputersPage(page));
    }
})