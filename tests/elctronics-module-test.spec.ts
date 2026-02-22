import {test} from '../Fixtures/hooks.fixture';
import electrData from '../data-files/electronics-module-data.json';

test('Electronics Camera page Title Test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test case',
        description : 'Verify Electronics Camera page title'
    }
},async({gotoUrl,ectrPage,logOut}) => {

    await ectrPage.verifyCameraPageTitle(electrData.title_camera);
});

test('Electronics Camera page product count Test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test Case',
        description : 'Verify Electronics camera page product count'
    }
},async({gotoUrl,ectrPage,logOut}) => {

    await ectrPage.verifyCameraCount();
});

test('Electronics Camera page product name Test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test Case',
        description : 'Verify electronics camera page product names'
    }
},async({gotoUrl,ectrPage,logOut}) => {

    await ectrPage.verifyCameraNames();
});

test('Electronics Camera page product prices Test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test Case',
        description : 'Verify electronics camera page product prices'
    }
},async({gotoUrl,ectrPage,logOut}) => {

    await ectrPage.verifyCameraPrices();
});

test('Electronics Camera page product sortBy DropDown Test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test Case',
        description : 'Verify electronics camera page product sortByDropdown'
    }
},async({gotoUrl,ectrPage,logOut}) => {

    await ectrPage.verifySortByDropdown();
});

test('Electronics Camera page product display Dropdown Test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test Case',
        description : 'Verify electronics camera page product display Dropdown'
    }
},async({gotoUrl,ectrPage,logOut}) => {

    await ectrPage.verifydisplayDropdown();
});

test('Electronics cellPhone page Title Test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test case',
        description : 'Verify Electronics cellPhone page title'
    }
},async({gotoUrl,ectrPage,logOut}) => {

    await ectrPage.verifyCellPhonePageTitle(electrData.title_cellPhone);
});

test('Electronics Cell Phone page product count Test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test Case',
        description : 'Verify Electronics Cell Phone page product count'
    }
},async({gotoUrl,ectrPage,logOut}) => {

    await ectrPage.verifyCellPhoneCount();
});

test('Electronics Cell Phone page product names Test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test Case',
        description : 'Verify Electronics Cell Phone page product names'
    }
},async({gotoUrl,ectrPage,logOut}) => {

    await ectrPage.verifycellPhoneNames();
});

test('Electronics Cell Phone page product prices Test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test Case',
        description : 'Verify Electronics Cell Phone page product prices'
    }
},async({gotoUrl,ectrPage,logOut}) => {

    await ectrPage.verifycellPhonePrices();
});

test('Electronics Cell Phone page product sortBy Dropdown Test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test Case',
        description : 'Verify Electronics Cell Phone page product sortByDropDown'
    }
},async({gotoUrl,ectrPage,logOut}) => {

    await ectrPage.verifyCellPhoneSortByDropdown();
});

test('Electronics Cell Phone page product display Dropdown Test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test Case',
        description : 'Verify Electronics Cell Phone page product display DropDown'
    }
},async({gotoUrl,ectrPage,logOut}) => {

    await ectrPage.verifyCellPhonedisplayDropdown();
});