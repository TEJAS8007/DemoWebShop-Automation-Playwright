import {test} from '../Fixtures/hooks.fixture';
import booksData from '../data-files/book-module-data.json';

test('BooksPage Title Test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test Case',
        description : 'verifying books page title test'
    }
},async({gotoUrl,booksPage,logOut})=> {
    
    // verifying Books Page title
    await booksPage.verifyBooksPageTitle(booksData.title);
});

test('BooksPage Books count test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test Case',
        description : 'Verifying books page product count to be 6'
    }
},async({gotoUrl,booksPage,logOut})=> {

    await booksPage.verifyBooksCount();
});

test('Verifying book names Test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test Case',
        description : 'Verify Books Page book names'
    }
},async({gotoUrl,booksPage,logOut})=> {

    await booksPage.verifyBookNames();
});

test('Verifying book price test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test Case',
        description : 'Verifying Books Page prices'
    }
},async({gotoUrl,booksPage,logOut})=> {

    await booksPage.verifyBookPrices();
});

test('Verify sort by DropDown test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test Case',
        description : 'verifying sortby DropDown on BooksPage'
    }
},async({gotoUrl,booksPage,logOut})=> {

    await booksPage.verifySortByDropdown();
});