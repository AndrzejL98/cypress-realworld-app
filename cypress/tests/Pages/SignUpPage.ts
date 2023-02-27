export class SignUp {
  signUp(
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    confirmPassword: string
  ) {
    cy.visit("/signup");
    cy.get(SignUpSelectors.firstNameLabel)
      .type(firstName)
      .should("have.attr", "aria-invalid", "false");
    cy.get(SignUpSelectors.lastNameLabel)
      .type(lastName)
      .should("have.attr", "aria-invalid", "false");
    cy.get(SignUpSelectors.userNameLabel)
      .type(username)
      .should("have.attr", "aria-invalid", "false");
    cy.get(SignUpSelectors.passwordLabel)
      .type(password)
      .should("have.attr", "aria-invalid", "false");
    cy.get(SignUpSelectors.confirmPasswordLabel)
      .type(confirmPassword)
      .should("have.attr", "aria-invalid", "false");
    cy.get(SignUpSelectors.signUpBtn).click();
  }
}

export class SignUpSelectors {
  static firstNameLabel = "#firstName";
  static lastNameLabel = "#lastName";
  static userNameLabel = "#username";
  static passwordLabel = "#password";
  static confirmPasswordLabel = "#confirmPassword";
  static signUpBtn = '[data-test="signup-submit"]';
}
