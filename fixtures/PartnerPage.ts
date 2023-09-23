import type { Page, Locator } from '@playwright/test';

export class PartnerPage {
  public readonly partnerHeading: (title: string) => Locator;

  constructor(public readonly page: Page) {
    this.partnerHeading = (title: string) => this.page.getByRole('heading', { name: title });
  }
}
