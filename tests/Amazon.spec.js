import {test} from '@playwright/test';

test('Amazon Test', async ({ page }) => {
  // Your test code here
  await page.goto('https://www.amazon.in');
  await  page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('iphone 17 ');
  
  await page.locator('//div[@class="left-pane-results-container"]//div[@id="sac-suggestion-row-1"]').click();
  await page.waitForTimeout(2000);
//    page.locator('//div[data-cy="reviews-block"]/descendant::span[text()="4.6"]')
  
const iphone17 = page.locator('//div[@data-cy="reviews-block"]//span[normalize-space()="4.6"] /ancestor::div[@role="listitem"][1] [.//div[@data-cy="title-recipe"][contains(., "iPhone 17")]');
const countIphone17 = await iphone17.count();
  console.log(countIphone17);


})

