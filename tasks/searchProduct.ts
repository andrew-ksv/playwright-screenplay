import { HomePage } from '../pages/homePage';

export const searchProduct = (productName: string) => {
  return async (actor: any) => {
    await actor.page.click(HomePage.productsLink);
    await actor.page.fill(HomePage.searchInput, productName);
    await actor.page.click(HomePage.searchButton);
  };
};