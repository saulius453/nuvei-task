import type { Page, Locator } from '@playwright/test';

export class MainPage {
  public readonly solutionsMenu: Locator;
  public readonly platformIntegrationsLink: Locator;

  constructor(public readonly page: Page) {
    this.solutionsMenu = this.page.getByRole('button', { name: 'Solutions' });
    this.platformIntegrationsLink = this.page
      .locator('.navbar')
      .getByRole('link', { name: 'Platform integrations' });
  }
}
