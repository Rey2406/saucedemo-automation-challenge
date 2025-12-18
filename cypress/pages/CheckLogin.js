class CheckLogin {
    elements = {
        product: () => cy.get('[data-test="title"]')
    }

    verifyLogin() {
        this.elements.product().should('contain', 'Products');
    }
}

export default new CheckLogin();