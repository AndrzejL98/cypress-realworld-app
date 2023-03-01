import { SignUpSelectors } from "../Pages/SignUpPage";
export class SignUpAlert {
  signUpAlert() {
    cy.visit("/signup");
    cy.get(SignUpSelectors.passwordLabel).type("Password123");
    cy.get(SignUpSelectors.confirmPasswordLabel).type("WrongPassword123");
    cy.get(SignUpSelectors.confirmPasswordAlert)
      .should("be.visible")
      .and("have.css", "color", "rgb(244, 67, 54)");
  }
}
