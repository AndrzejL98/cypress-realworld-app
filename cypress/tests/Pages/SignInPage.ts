export class SigninPage {
  signIn(login: string, password: string) {
    //Arrange
    cy.visit("/");
    //Act
    cy.get(SignInSelectors.loginLabel).click().type(login);
    cy.get(SignInSelectors.passwordLabel).click().type(password);

    //Assert
    cy.get(SignInSelectors.submitBtn).should("not.have.class", "Mui-disabled");
    cy.get(SignInSelectors.passwordLabel).should("have.attr", "type", "password");
  }
  rememberAndSubmit() {
    cy.get(SignInSelectors.rememberMeBtn).click();

    cy.get(SignInSelectors.submitBtn).click();
  }
  logout() {
    cy.get(SignInSelectors.logoutBtn).click();
  }
}

class SignInSelectors {
  static loginLabel = "#username";
  static passwordLabel = "#password";
  static rememberMeBtn = ".MuiFormControlLabel-root > .MuiTypography-root";
  static submitBtn = "[data-test='signin-submit']";
  static logoutBtn = '[data-test="sidenav-signout"] > .MuiListItemText-root > .MuiTypography-root';
}
