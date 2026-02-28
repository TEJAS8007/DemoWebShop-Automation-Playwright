import {test} from '../Fixtures/hooks.fixture';
import cartData from '../data-files/ui-data-files/ui-module-data.json';

test('Product validation test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test Case',
        description : 'Verify product from books module from cart page'
    }
},async({gotoUrl,cartPage,logOut}) => {

    await cartPage.addProductToCart(
        cartData['cart-module'].book_Name,
        cartData['cart-module'].sub_total_Price,
        cartData['cart-module'].total_Price
    );
});