import {test} from '../Fixtures/hooks.fixture';
import e2eData from '../data-files/ui-data-files/ui-module-data.json';

test('end to end Laptop Test',{
    tag : ['@UI','@e2e'],
    annotation : {
        type : 'Test Case',
        description : 'Verifying end to end Laptop product purchase test.'
    }
},async(
    {
        gotoUrl,
        searchPage,
        cartPage,
        checkOutPage,
        orderPage,
        logOut
    }
) => {

    await searchPage.verifyProductsearch(
        e2eData['e2e-module'].Laptop.productName,
        e2eData['e2e-module'].Laptop.price
    );

    await cartPage.e2eAddtocartProduct(
        e2eData['e2e-module'].Laptop.productName,
        e2eData['e2e-module'].Laptop.price
    );

    await checkOutPage.addCustomerDetails(
        e2eData['e2e-module'].customer.fname,
        e2eData['e2e-module'].customer.lname,
        e2eData['e2e-module'].customer.company,
        e2eData['e2e-module'].customer.city,
        e2eData['e2e-module'].customer.address1,
        e2eData['e2e-module'].customer.address2,
        e2eData['e2e-module'].customer.poCode,
        e2eData['e2e-module'].customer.phoneNumber,
        e2eData['e2e-module'].customer.faxNumber
    );

    await orderPage.verifyOrderSummary(
        e2eData['order-module'].productName,
        e2eData['order-module'].price,
        e2eData['order-module'].orderMsg
    );

});

