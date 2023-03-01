export class SignUp {
  signUp(
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    confirmPassword: string
  ) {
    //Arrange
    cy.visit("/signup");

    //Act
    cy.get(SignUpSelectors.firstNameLabel).type(firstName);
    cy.get(SignUpSelectors.lastNameLabel).type(lastName);
    cy.get(SignUpSelectors.userNameLabel).type(username);
    cy.get(SignUpSelectors.passwordLabel).type(password);
    cy.get(SignUpSelectors.confirmPasswordLabel).type(confirmPassword);

    //Assert
    cy.get(SignUpSelectors.firstNameLabel).should("have.attr", "aria-invalid", "false");
    cy.get(SignUpSelectors.lastNameLabel).should("have.attr", "aria-invalid", "false");
    cy.get(SignUpSelectors.userNameLabel).should("have.attr", "aria-invalid", "false");
    cy.get(SignUpSelectors.passwordLabel).should("have.attr", "aria-invalid", "false");
    cy.get(SignUpSelectors.confirmPasswordLabel).should("have.attr", "aria-invalid", "false");
    cy.get(SignUpSelectors.signUpBtn).click();
    cy.url().should("include", "/signin");
  }
}

export class SignUpSelectors {
  static firstNameLabel = "#firstName";
  static lastNameLabel = "#lastName";
  static userNameLabel = "#username";
  static passwordLabel = "#password";
  static confirmPasswordLabel = "#confirmPassword";
  static signUpBtn = '[data-test="signup-submit"]';
  static confirmPasswordAlert = "#confirmPassword-helper-text";
}
