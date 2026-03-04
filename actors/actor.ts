import { Page } from '@playwright/test';

export class Actor {
  constructor(
    public name: string,
    public page: Page
  ) {}

  async attemptsTo(...tasks: any[]) {
    for (const task of tasks) {
      await task(this);
    }
  }
}