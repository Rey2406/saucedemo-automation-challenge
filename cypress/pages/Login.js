class Login {

    loginElements = {
        usernameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        loginButton: () => cy.get('#login-button'),
    }

    visit() {
        cy.visit("/");
    }

    login(username, password) {
        this.loginElements.usernameInput().type(username);
        this.loginElements.passwordInput().type(password);
        this.loginElements.loginButton().click();
    }
}

export default new Login();