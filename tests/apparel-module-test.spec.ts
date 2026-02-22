import {test} from '../Fixtures/hooks.fixture';

test('apparel page Title test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test Case',
        description : 'verify apparel page title.'
    }
},async({gotoUrl,appPage,logOut}) => {

    await appPage.verifyApparelPageTitle();
});

test('apparel page product count test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test Case',
        description : 'verify apparel page product count..'
    }
},async({gotoUrl,appPage,logOut}) => {

    await appPage.verifyApparelCount();
});

test('apparel page product name test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test Case',
        description : 'verify apparel page product name.'
    }
},async({gotoUrl,appPage,logOut}) => {

    await appPage.verifyApparelNames();
});

test('apparel page product prices test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test Case',
        description : 'verify apparel page product prices.'
    }
},async({gotoUrl,appPage,logOut}) => {

    await appPage.verifyCameraPrices();
});

test('apparel page product sortBy Dropdown test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test Case',
        description : 'verify apparel page product sortBy Dropdown.'
    }
},async({gotoUrl,appPage,logOut}) => {

    await appPage.verifySortByDropdown();
});

test('apparel page product display Dropdown test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test Case',
        description : 'verify apparel page product display Dropdown.'
    }
},async({gotoUrl,appPage,logOut}) => {

    await appPage.verifydisplayDropdown();
});