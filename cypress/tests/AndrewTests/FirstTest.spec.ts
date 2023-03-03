import { SignInAlert } from "../Pages/SignInAlert";
import { SigninPage } from "../Pages/SignInPage";
import { SignUpAlert } from "../Pages/SignUpAlert";
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
  it("should display an error in red when you enter a wrong confirm Password ", () => {
    const signUpAlert = new SignUpAlert();
    signUpAlert.signUpAlert();
  });
  it("should display an error in red when you enter a wrong Login in SignInPanel ", () => {
    const signInAlert = new SignInAlert();
    signInAlert.signInAlert("Wrong_Login", "Good_Password");
  });

  it("should display an error in red when you enter a wrong Password in SignInPanel ", () => {
    const signInAlert = new SignInAlert();
    signInAlert.signInAlert("Good_Login", "Wrong_Password");
  });
});
