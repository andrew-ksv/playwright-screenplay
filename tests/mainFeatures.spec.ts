import { test, expect } from '@playwright/test';
import { Actor } from '../actors/actor';
import { openHome } from '../tasks/openHome';
import { searchProduct } from '../tasks/searchProduct';
import { loginAs } from '../tasks/login';
import { HomePage } from '../pages/homePage';
import { validEmail, validPassword } from '../playwright.config'

test.describe('Main user flows', () => {

  test('Guest opens home page', async ({ page }) => {
    const guest = new Actor('Guest User', page);

    await guest.attemptsTo(
      openHome
    );

    await expect(page.locator(HomePage.logo)).toBeVisible();
  });

  test('Guest searches for product', async ({ page }) => {
    const guest = new Actor('Guest User', page);

    await guest.attemptsTo(
      openHome,
      searchProduct('Blue Top')
    );

    await expect(page.locator(HomePage.searchedProductsTitle)).toBeVisible();
  });

  test('Registered user can login', async ({ page }) => {

    if (!validEmail || !validPassword) {
        throw new Error('Email or password is not defined in the configuration.');
      }

    const user = new Actor('Registered User', page);

    await user.attemptsTo(
      openHome,
      loginAs(validEmail, validPassword)
    );

    await expect(page.locator(HomePage.loggedInAs)).toBeVisible();
  });

  test('Registered user searches after login', async ({ page }) => {

    if (!validEmail || !validPassword) {
        throw new Error('Email or password is not defined in the configuration.');
      }

    const user = new Actor('Registered User', page);

    await user.attemptsTo(
      openHome,
      loginAs(validEmail, validPassword),
      searchProduct('Blue Top')
    );

    await expect(page.locator(HomePage.searchedProductsTitle)).toBeVisible();
  });

});