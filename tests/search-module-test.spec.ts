import {test} from '../Fixtures/hooks.fixture';
import searchData from '../data-files/search-module-data.json';

test('searchPage Title Test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test Case',
        description : 'Verifying search page title'
    }
},async({gotoUrl,searchPage,logOut}) => {

    await searchPage.verifySearchPageTitle(searchData.title);
});

test('searchPage product search Test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test Case',
        description : 'Verifying search page product search'
    }
},async({gotoUrl,searchPage,logOut}) => {

    await searchPage.verifyProductsearch(
        searchData.productName,
        searchData.price
    );
});

test('searchPage sortBy Dropdown Test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test Case',
        description : 'Verifying search page sortBy Dropdown'
    }
},async({gotoUrl,searchPage,logOut}) => {

    await searchPage.verifySortByDropdown(searchData.productName);
});

test('searchPage display Dropdown Test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test Case',
        description : 'Verifying search page display Dropdown'
    }
},async({gotoUrl,searchPage,logOut}) => {

    await searchPage.verifydisplayDropdown(searchData.productName);
});

test('searchPage advance product search Test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test Case',
        description : 'Verifying search page advance product search'
    }
},async({gotoUrl,searchPage,logOut}) => {

    await searchPage.verifyAdvanceProductsearch(
        searchData.productName,
        searchData.price
    );
});