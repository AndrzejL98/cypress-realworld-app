import { SigninPage } from "../Pages/SignInPage";

describe("E2E Homepage Real World", () => {
  it("should visit signin panel and login to existing account and logout", () => {
    cy.visit("/");
    const signInPage = new SigninPage();
    signInPage.signIn("Katharina_Bernier", "s3cret");
    const rememberAndSubmit = new SigninPage();
    rememberAndSubmit.rememberAndSubmit();
    const logout = new SigninPage();
    logout.logout();
  });
});
