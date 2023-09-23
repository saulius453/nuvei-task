import { test as base } from '@playwright/test';
import { MainPage } from '@/fixtures/MainPage';
import { IntegrationsPage } from '@/fixtures/IntegrationsPage';
import { PartnerPage } from '@/fixtures/PartnerPage';

type MyFixtures = {
  mainPage: MainPage;
  integrationsPage: IntegrationsPage;
  partnerPage: PartnerPage;
};

export const test = base.extend<MyFixtures>({
  page: async ({ page }, use) => {
    await page.goto(process.env.NUVEI_WEBSITE);
    await page.getByRole('button', { name: 'Accept All' }).click();
    await use(page);
  },

  mainPage: async ({ page }, use) => {
    await use(new MainPage(page));
  },

  integrationsPage: async ({ page }, use) => {
    await use(new IntegrationsPage(page));
  },

  partnerPage: async ({ page }, use) => {
    await use(new PartnerPage(page));
  }
});

export { expect } from '@playwright/test';
