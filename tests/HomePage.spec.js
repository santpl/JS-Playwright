const {test, expect} = require('@playwright/test')

test('Home Page', async ({page})=> {
   await page.goto('https://demoqa.com/');

   const pageTitle = await page.title();
   console.log('Page Title: ', pageTitle);

   await expect(page).toHaveTitle('DEMOQA')

   const pageUrl = page.url();
   console.log('Page URL: ', pageUrl);

   await expect(page).toHaveURL('https://demoqa.com/');

   await page.close();
})