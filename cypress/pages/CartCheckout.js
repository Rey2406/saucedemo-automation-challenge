class CartCheckout {
    elements = {
        cartIcon: () => cy.get('#shopping_cart_container'),
        cartBadge: () => cy.get('.shopping_cart_badge'),
        cartItems: () => cy.get('.cart_item'),
        checkoutButton: () => cy.get('.checkout_button')
    }

    goToCartCheckoutPage() {
        this.elements.cartIcon().click();
    }

    verifyItemsCount() {
        this.elements.cartBadge()
            .invoke('text')
            .then(t => {
                const countCart = Number(t.trim())

                this.elements.cartItems()
                .should('have.length', countCart)
            })
    }

    checkoutCart() {
        this.elements.checkoutButton().click();
    }
}

export default new CartCheckout();