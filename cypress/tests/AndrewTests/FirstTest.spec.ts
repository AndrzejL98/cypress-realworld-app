import { SigninPage } from "../Pages/SignInPage";
import { SignUp } from "../Pages/SignUpPage";

describe("E2E Homepage Real World", () => {
  it("should visit signin panel and login to existing account and logout", () => {
    const signInPage = new SigninPage();
    signInPage.signIn("Katharina_Bernier", "s3cret");
    const rememberAndSubmit = new SigninPage();
    rememberAndSubmit.rememberAndSubmit();
    const logout = new SigninPage();
    logout.logout();
  });
  it("should visit signup panel and complete the form correctly ", () => {
    const signUp = new SignUp();
    signUp.signUp("Andrzej", "Legowik", "Andrzej1", "haslo123", "haslo123");
  });
});
