import {test as baseTest} from '../Fixtures/pom.fixture';

type hooksFixtureType = {
    gotoUrl : void;
    logOut : void;
}

export const test = baseTest.extend<hooksFixtureType> ({

    gotoUrl : async({page,loginPage},use) => {
        await loginPage.openApplication();
        await use();
    },

    logOut : async({page,loginPage},use) => {
        await use();
        await page.close();
    }
})