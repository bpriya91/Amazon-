// import test from'@playwright/test';

// test('Frames handling', async ({ page }) => {
//     await page.goto('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame');
//  const frame =  page.frameLocator('[name="globalSqa]');
//  await frame.getByText("//h3[text()='JMeter Training']").click
// await page.waitForTimeout(3000);

// })



import test from'@playwright/test';

test('Frames handling', async ({ page }) => {
    await page.goto('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame');
 const frame =  page.frameLocator('[name="globalSqa]');
 await frame.getByText("//h3[text()='JMeter Training']").click
await page.waitForTimeout(3000);
console.log("changes in my branch ");

})
