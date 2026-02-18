import { expect } from 'playwright/test';
import {test} from '../Fixtures/hooks.fixture';
import loginData from '../data-files/login-module-data.json';

test.use({
    storageState : {
        origins : [],
        cookies : []
    }
});

test('Login for valid User',{
    tag : ['@SMOKE','@UI'],
    annotation : {
        type : 'Test Case',
        description : 'user should able to login with Valid Credentials'
    }
},async({loginPage,logOut})=> {

    const un : string | undefined = process.env.USERNAMES!;
    const ps : string | undefined = process.env.PASSWORD!;

    await loginPage.openApplication();
    await loginPage.verifyApplicationTitle(loginData.title);
    await loginPage.loginIntoApplication(un,ps);
});

test('Login for Invalid user',{
    tag : ['@SMOKE','@UI'],
    annotation : {
        type : 'Test Case',
        description : 'user should not login with Invalid Creadentials'
    }
},async({loginPage,page,logOut})=> {

    await loginPage.openApplication();
    await loginPage.verifyApplicationTitle(loginData.title);
    await loginPage.loginIntoApplication(loginData.Invalid_UserName,loginData.Invalid_Password);

    await expect(loginPage.errorMsg).toHaveText(loginData.error_msg);
});

test('Login with invalid password',{
    tag : ['@SMOKE','@UI'],
    annotation : {
        type : 'Test Case',
        description : 'Login should be completed with invalid password'
    }
},async({loginPage,logOut})=> {

    const un : string | undefined = process.env.USERNAMES!;

    await loginPage.openApplication();
    await loginPage.verifyApplicationTitle(loginData.title);
    await loginPage.loginIntoApplication(un,loginData.Invalid_Password);

    await expect(loginPage.invalidLoginErrorMsg).toHaveText(loginData.Login_error_msg);

});

test('Login with Invalid username',{
    tag : ['@SMOKE','@UI'],
    annotation : {
        type : 'Test Case',
        description : 'User should not login with invalid username'
    }
},async({loginPage,logOut})=> {

    const ps : string | undefined = process.env.PASSWORD!;

    await loginPage.openApplication();
    await loginPage.verifyApplicationTitle(loginData.title);
    await loginPage.loginIntoApplication(loginData.Invalid_UserName,ps);

    await expect(loginPage.invalidUsernameErrorMsg).toHaveText(loginData.Invalid_username_error_msg);

});

test('Login with blank username password',{
    tag : ['@UI','@API'],
    annotation : {
        type : 'Test Case',
        description : 'Verifying login with empty username and password'
    }
},async({loginPage,logOut})=> {

    await loginPage.openApplication();
    await loginPage.loginLink.click();
    await loginPage.loginButton.click();

    await expect(loginPage.invalidLoginErrorMsg).toHaveText(loginData.Login_error_msg);

});

test('Checking username password field',{
    tag : ['@UI','@SMOKE'],
    annotation : {
        type : 'Test case',
        description : 'Verifying username and password filed to be enabled'
    }
},async({loginPage,logOut})=> {

    await loginPage.openApplication();
    
    await loginPage.loginLink.click();
    await expect(loginPage.usernameBox).toBeVisible();
    await expect(loginPage.passwordBox).toBeVisible();
    await expect(loginPage.loginButton).toBeEnabled();

});
