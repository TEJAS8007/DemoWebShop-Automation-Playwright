import {test} from '../Fixtures/hooks.fixture';
import jweleryData from '../data-files/ui-data-files/ui-module-data.json';

test('jwelery page title Test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test Case',
        description : 'verifying jwelery page title'
    }
},async({gotoUrl,jweleryPage,logOut}) => {

    await jweleryPage.verifyJweleryPageTitle(jweleryData['jwellery-module'].titile);
});

test('jwelery page product count Test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test Case',
        description : 'verifying jwelery page product count '
    }
},async({gotoUrl,jweleryPage,logOut}) => {

    await jweleryPage.verifyJweleryCount();
});

test('jwelery page product names Test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test Case',
        description : 'verifying jwelery page product names '
    }
},async({gotoUrl,jweleryPage,logOut}) => {

    await jweleryPage.verifyJweleryNames();
});

test('jwelery page product prices Test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test Case',
        description : 'verifying jwelery page product prices '
    }
},async({gotoUrl,jweleryPage,logOut}) => {

    await jweleryPage.verifyJweleryPrices();
});

test('jwelery page sortBy Dropdown Test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test Case',
        description : 'verifying jwelery page product sortByDropdown'
    }
},async({gotoUrl,jweleryPage,logOut}) => {

    await jweleryPage.verifySortByDropdown();
});

test('jwelery page displayDropdown Test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test Case',
        description : 'verifying jwelery page product prices '
    }
},async({gotoUrl,jweleryPage,logOut}) => {

    await jweleryPage.verifydisplayDropdown();
});

