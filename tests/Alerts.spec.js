import {test} from '@playwright/test'
test ('JS Alerts', async({page}) => {
 await page.goto("https://demoqa.com/alerts");
   page.on("dialog",async (dialog))=> {
      dialog.accept();
 }
    await page.locator('#alertButton').click();




})