import { expect } from 'playwright/test';
import {test} from '../Fixtures/hooks.fixture';
import loginData from '../data-files/login-module-data.json';

test('global setup for login',async({page,loginPage})=> {

    const un : string | undefined = process.env.USERNAMES!;
    const ps : string | undefined = process.env.PASSWORD!;

    await loginPage.openApplication();
    await loginPage.verifyApplicationTitle(loginData.title);
    await loginPage.loginIntoApplication(un,ps);

    await expect(loginPage.loginUsername).toHaveText(un);

    await page.context().storageState({path:'./Auth-files/demoWebShop.json'});
})