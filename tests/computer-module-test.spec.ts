import {test} from '../Fixtures/hooks.fixture';
import compData from '../data-files/computer-module-data.json';

test('Computer page product Names Test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test Case',
        description : 'Verify product name from computers page'
    }
},async({gotoUrl,compPage,logOut}) => {

    await compPage.verifyProductNames();
});

test('Computer page product Images Test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test Case',
        description : 'Verify product imgaes from computers page'
    }
},async({gotoUrl,compPage,logOut}) => {

    await compPage.verifyProductImages();
});

test('Computer page product Prices Test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test Case',
        description : 'Verify product prices from computers page'
    }
},async({gotoUrl,compPage,logOut}) => {

    await compPage.verifyProductPrices();
});

test('Computer page sortBy DropDown Test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test Case',
        description : 'Verify Computer page sortBy Dropdown'
    }
},async({gotoUrl,compPage,logOut}) => {

    await compPage.verifySortByDropdown();
});

test('Computer page display dropdown Test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test Case',
        description : 'Verify display dropdwon on Computer Page.'
    }
},async({gotoUrl,compPage,logOut}) => {

    await compPage.verifydisplayDropdown();
});

test('NoteBook page product name Test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test Case',
        description : 'Verify product name on NoteBook Page.'
    }
},async({gotoUrl,compPage,logOut}) => {

    await compPage.verifyNoteBookName(compData.NotebookName);
});

test('NoteBook page product Price Test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test Case',
        description : 'Verify product Price on NoteBook Page.'
    }
},async({gotoUrl,compPage,logOut}) => {

    await compPage.verifyNoteBookPrice(compData.NoteBookPrice);
});

test('NoteBook page product image Test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test Case',
        description : 'Verify product image on NoteBook Page.'
    }
},async({gotoUrl,compPage,logOut}) => {

    await compPage.verifyProductImages();
});

test('Accessories page product name Test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test Case',
        description : 'Verify product name on Accessories Page.'
    }
},async({gotoUrl,compPage,logOut}) => {

    await compPage.verifyAccessoriesName();
});

test('Accessories page product Prices Test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test Case',
        description : 'Verify product Price on Accessories Page.'
    }
},async({gotoUrl,compPage,logOut}) => {

    await compPage.verifyAccessoriesPrice();
});

test('Accessories page product image Test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test Case',
        description : 'Verify product image on Accessories Page.'
    }
},async({gotoUrl,compPage,logOut}) => {

    await compPage.verifyAccesoriesImage();
});

test('Accessories page sortBy DropDown Test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test Case',
        description : 'Verify Accessories page sortBy Dropdown'
    }
},async({gotoUrl,compPage,logOut}) => {

    await compPage.verifyAccessoriesSortByDropdown();
});

test('Accessories page display dropdown Test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test Case',
        description : 'Verify display dropdwon on Accessories Page.'
    }
},async({gotoUrl,compPage,logOut}) => {

    await compPage.verifyAccessoriesdisplayDropdown();
});