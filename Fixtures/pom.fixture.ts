import {test as baseTest} from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { BooksPage } from '../Pages/BooksPage';
import { CartPage } from '../Pages/CartPage';
import { ComputersPage } from '../Pages/ComputersPage';
import { ElectronisPage} from '../Pages/ElectronicsPage';
import { RegisterPage } from '../Pages/RegisterPage';
import { ApparelPage } from '../Pages/ApparelPage';
import { SearchPage } from '../Pages/SerchPage';
import { JweleryPage } from '../Pages/JweleryPage';
import { CheckoutPage } from '../Pages/CheckoutPage';
import { OrderConfirmationPage } from '../Pages/OrderConfirmationPage';

type myFixtureType = {
    loginPage : LoginPage;
    booksPage : BooksPage;
    cartPage : CartPage;
    compPage : ComputersPage;
    ectrPage : ElectronisPage;
    registerPage : RegisterPage;
    appPage : ApparelPage;
    searchPage : SearchPage;
    jweleryPage : JweleryPage;
    checkOutPage : CheckoutPage;
    orderPage : OrderConfirmationPage;
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
    },

    ectrPage : async({page},use) => {
        await use(new ElectronisPage(page));
    },

    registerPage : async({page},use) => {
        await use(new RegisterPage(page));
    },

    appPage : async({page},use) => {
        await use(new ApparelPage(page));
    },

    searchPage : async({page},use) => {
        await use(new SearchPage(page));
    },

    jweleryPage : async({page},use) => {
        await use(new JweleryPage(page));
    },

    checkOutPage : async({page},use) => {
        await use(new CheckoutPage(page));
    },

    orderPage : async({page},use) => {
        await use(new OrderConfirmationPage(page));
    }
})