import { SigninPage } from "../Pages/SignInPage";

describe("E2E Homepage Real World", () => {
  it("should visit signin panel and login to existing account", () => {
    cy.visit("/");
    const signInPage = new SigninPage();
    signInPage.signIn("Andrzej", "password123");
    const rememberAndSubmit = new SigninPage();
    rememberAndSubmit.rememberAndSubmit();
  });
});
