import type { Page, Locator } from '@playwright/test';

export class IntegrationsPage {
  public readonly searchField: Locator;
  public readonly partnerTypeDropdown: Locator;
  public readonly industryDropdown: Locator;
  public readonly locationDropdown: Locator;
  public readonly listOption: (item: string) => Locator;
  public readonly partnerLinks: Locator;

  constructor(public readonly page: Page) {
    this.searchField = this.page.locator('.search-section input');
    this.partnerTypeDropdown = this.page.getByRole('combobox', { name: 'Partner Type' });
    this.industryDropdown = this.page.getByRole('combobox', { name: 'Industry' });
    this.locationDropdown = this.page.getByRole('combobox', { name: 'Location' });
    this.listOption = (item: string) => this.page.locator('li').getByRole('option', { name: item });
    this.partnerLinks = this.page.locator('#partner-list a');
  }
}
