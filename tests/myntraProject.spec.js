// import { test } from '@playwright/test';

// test('Find minimum price', async ({ page }) => {
//     await page.goto("https://www.myntra.com/boy-tshirts");
//     const allPrices = page.locator('//li[@class="product-base"]/descendant::span[@class="product-discountedPrice"]');
//     // await allPrices.first().waitFor({ timeout: 60000 });

//       async function getProductBrandByPrice(price) {
//             const productLocator = page.locator(`//li[@class="product-base"]/descendant::span[@class="product-discountedPrice" and text()="${price}"]/ancestor::div[@class="product-productMetaInfo"]/descendant::h3[@class="product-brand"]`);

//             return await productLocator.textContent();
//         }

//     async function findminPrice() {

//         let priceList = await allPrices.allTextContents();
//         let Price = priceList.map((price) => Number(price.replace(/[^0-9]/g, '')));
//         let minPrice = Math.min(...Price)
//         console.log('Minimumprice ' + minPrice);

//         let result = await getProductBrandByPrice(minPrice);
//         console.log('Total Products ' + result);
//     }

//     await console.log(findminPrice());

// })d
 import { test } from '@playwright/test';
test('Find minimum price', async ({ page }) => {
  await page.goto("https://www.myntra.com/boy-tshirts");

  async function getMinPrice() {
    const allPrices = page.locator('//li[@class="product-base"]/descendant::span[@class="product-discountedPrice"]');
    const priceList = await allPrices.allTextContents();
    console.log("All Prices:", priceList);
    
    const prices = priceList.map(p => Number(p.replace(/\D/g, '')));
    console.log("Parsed Prices:", prices);
    const minimumPrice = Math.min(...prices);
    console.log("Minimum Price:", minimumPrice);
    const brandName = await getProductBrand(minimumPrice);
    console.log("Product BrandName:", brandName);
    console.log("Minimum Price of product :", minimumPrice);
  }

  async function getProductBrand(min) {
    const brand = page.locator(`//span[@class="product-discountedPrice" and text()="${min}"]/ancestor::li[@class="product-base"]//h3[@class="product-brand"]`);
    return await brand.textContent();
  }
  await getMinPrice();
  
})  

//find the remaining product of product price and the discounted price 
    page.locator('//li[@class="product-base" and not(.//span[@class="product-discountedPrice"])] ');
    








