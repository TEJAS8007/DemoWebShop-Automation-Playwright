import { expect } from 'playwright/test';
import {test} from '../Fixtures/hooks.fixture';
import globalData from '../data-files/ui-data-files/ui-module-data.json';

test('global setup for login',async({page,loginPage,registerPage})=> {

    await loginPage.openApplication();

    const credentialManager = await registerPage.registerUser(
        globalData['register-module'].first_Name,
        globalData['register-module'].last_Name,
        globalData['register-module'].password
    );

    await registerPage.logOutLink.click();
    await loginPage.loginLink.click();
    
    await loginPage.verifyApplicationTitle(globalData['login-module'].title);
    await loginPage.loginIntoApplication(credentialManager.email,credentialManager.password);

    await expect(loginPage.loginUsername).toHaveText(credentialManager.email);

    await page.context().storageState({path:'./Auth-files/demoWebShop.json'});
    
});