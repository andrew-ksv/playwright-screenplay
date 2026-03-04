import { HomePage } from '../pages/homePage';
import { LoginPage } from '../pages/loginPage';

export const loginAs = (email: string, password: string) => {
  return async (actor: any) => {
    await actor.page.click(HomePage.signupLoginLink);
    await actor.page.fill(LoginPage.emailInput, email);
    await actor.page.fill(LoginPage.passwordInput, password);
    await actor.page.click(LoginPage.loginButton);
  };
};