class ItemCart {
    elements = {
        addToCartButtons: () => cy.get('.btn_primary'),
        removeButtons: () => cy.get('.btn_secondary'),
        cartBadge: () => cy.get('.shopping_cart_badge'),
    }

    addItems(count) {
        this.elements.addToCartButtons().each(($btn, index) => {
            if (index < count) {
                cy.wrap($btn).click();
            }
        });
    }

    removeItems() {
        this.elements.removeButtons().first().click();
    }

    verifyCartBadge(count) {
        var itemCountToVerify = count - 1; 
        this.elements.cartBadge().should('have.text', itemCountToVerify.toString());
    }
}

export default new ItemCart();