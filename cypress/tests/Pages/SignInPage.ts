export class SigninPage {
  signIn(login: string, passoword: string) {
    cy.get(SignInSelectors.loginLabel).click().type(login);
    cy.get(SignInSelectors.passwordLabel).click().type(passoword);
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
