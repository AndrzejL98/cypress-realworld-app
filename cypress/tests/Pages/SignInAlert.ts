import { SigninPage } from "./SignInPage";

export class SignInAlert extends SigninPage {
  signInAlert(login: string, password: string): void {
    //Arrange
    cy.visit("/");
    //Act
    cy.get(SignInSelectors.loginLabel).click().type(login);
    cy.get(SignInSelectors.passwordLabel).click().type(password);
    cy.get(SignInSelectors.submitBtn).click();

    //Assert
    cy.get(SignInSelectors.submitBtn).should("not.have.class", "Mui-disabled");
    cy.get(SignInSelectors.passwordLabel).should("have.attr", "type", "password");
    cy.get(SignInSelectors.alertMsg).invoke("text").should("eq", "Username or password is invalid");
  }
}

class SignInSelectors {
  static loginLabel = "#username";
  static passwordLabel = "#password";
  static rememberMeBtn = ".MuiFormControlLabel-root > .MuiTypography-root";
  static submitBtn = "[data-test='signin-submit']";
  static logoutBtn = '[data-test="sidenav-signout"] > .MuiListItemText-root > .MuiTypography-root';
  static alertMsg = '[data-test="signin-error"]';
}
