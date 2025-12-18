import Login from "../pages/Login";
import CheckLogin from "../pages/CheckLogin";
import ItemCart from "../pages/ItemCart";
import CartCheckout from "../pages/CartCheckout";

describe('QA Automation on SauceDemo page', () => {
    beforeEach(() => {
        Login.visit();
    })

    it('TC-101: FE | Test Scenarios to Automate', () => {
        const countItemsToShop = 3;

        //Valid login with standard user credentials
        Login.login('standard_user', 'secret_sauce');
        CheckLogin.verifyLogin();

        //Add multiple items to the cart
        ItemCart.addItems(countItemsToShop);

        //Remove an item from the cart
        ItemCart.removeItems();

        //Verify cart contents count
        ItemCart.verifyCartBadge(countItemsToShop);

        //Verify cart contents before checkout
        CartCheckout.goToCartCheckoutPage();
        CartCheckout.verifyItemsCount();

        //Initiate checkout
        CartCheckout.checkoutCart();
    });
});