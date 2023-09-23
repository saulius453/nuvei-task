import { test, expect } from '@/fixtures/fixtureSetup';

test('Nuvei page test', async ({ mainPage, integrationsPage, partnerPage }) => {
  const searchItem = 'Commerce';
  const partnerType = 'eCommerce platform';
  const industry = 'Digital goods';
  const countries = {
    first: 'Canada',
    second: 'Great Britain'
  };
  const partner = 'BigCommerce';

  await mainPage.solutionsMenu.hover();
  await mainPage.platformIntegrationsLink.click();

  await expect(integrationsPage.locationDropdown).toBeVisible();
  await integrationsPage.searchField.fill(searchItem);

  await integrationsPage.partnerTypeDropdown.click();
  await integrationsPage.listOption(partnerType).click();

  await integrationsPage.industryDropdown.click();
  await integrationsPage.listOption(industry).click();

  await integrationsPage.locationDropdown.click();
  await integrationsPage.listOption(countries.first).click();
  await integrationsPage.listOption(countries.second).click();

  expect(await integrationsPage.partnerLinks.count()).toBe(4);
  await integrationsPage.partnerLinks.nth(2).click();
  await expect(partnerPage.partnerHeading(partner)).toBeVisible();
});
