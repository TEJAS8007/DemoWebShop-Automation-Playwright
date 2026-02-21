import { expect } from 'playwright/test';
import {test} from '../Fixtures/hooks.fixture';
import registerData from '../data-files/register-module-data.json';
import loginData from '../data-files/login-module-data.json';

test('global setup for login',async({page,loginPage,registerPage})=> {

    await loginPage.openApplication();

    const credentialManager = await registerPage.registerUser(
        registerData.first_Name,
        registerData.last_Name,
        registerData.password
    );

    await registerPage.logOutLink.click();
    await loginPage.loginLink.click();
    
    await loginPage.verifyApplicationTitle(loginData.title);
    await loginPage.loginIntoApplication(credentialManager.email,credentialManager.password);

    await expect(loginPage.loginUsername).toHaveText(credentialManager.email);

    await page.context().storageState({path:'./Auth-files/demoWebShop.json'});
})