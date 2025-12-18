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
        cy.screenshot('1-Hompage');

        //Add multiple items to the cart
        ItemCart.addItems(countItemsToShop);
        cy.screenshot('2-ItemsAdded');

        //Remove an item from the cart
        ItemCart.removeItems();
        cy.screenshot('3-RemoveAItem');

        //Verify cart contents count
        ItemCart.verifyCartBadge(countItemsToShop);
        cy.screenshot('4-VerifyTheCartCount');

        //Verify cart contents before checkout
        CartCheckout.goToCartCheckoutPage();
        CartCheckout.verifyItemsCount();
        cy.screenshot('5-VerifyTheCartBeforeCheckout');

        //Initiate checkout
        CartCheckout.checkoutCart();
        cy.screenshot('6-Checkout');
    });
});