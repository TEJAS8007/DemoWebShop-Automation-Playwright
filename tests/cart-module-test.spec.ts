import {test} from '../Fixtures/hooks.fixture';
import cartData from '../data-files/cart-module-data.json';

test('Product validation test',{
    tag : ['@UI','@reg'],
    annotation : {
        type : 'Test Case',
        description : 'Verify product from books module from cart page'
    }
},async({gotoUrl,cartPage,logOut}) => {

    await cartPage.addProductToCart(
        cartData.book_Name,
        cartData.sub_total_Price,
        cartData.total_Price
    );
});