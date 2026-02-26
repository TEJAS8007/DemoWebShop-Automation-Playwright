import {test} from '../Fixtures/hooks.fixture';
import e2eData from '../data-files/e2e-module-data.json';

test('end to end Test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test Case',
        description : 'Verifying end to end product purchase test.'
    }
},async(
    {
        gotoUrl,
        searchPage,
        cartPage,
        checkOutPage,
        logOut
    }
) => {

    await searchPage.verifyProductsearch(
        e2eData.product_name,
        e2eData.price
    );

    await cartPage.e2eAddtocartProduct(
        e2eData.product_name,
        e2eData.price
    );

    await checkOutPage.addCustomerDetails(
        e2eData.fname,
        e2eData.lname,
        e2eData.company,
        e2eData.city,
        e2eData.address1,
        e2eData.address2,
        e2eData.poCode,
        e2eData.phoneNumber,
        e2eData.faxNumber
    );
});
