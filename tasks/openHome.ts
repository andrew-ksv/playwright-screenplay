import { HomePage } from '../pages/homePage';

export const openHome = async (actor: any) => {
  await actor.page.goto(HomePage.url);
};