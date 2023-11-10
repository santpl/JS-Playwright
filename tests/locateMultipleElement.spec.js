import {test,expect} from '@playwright/test'

test('Locate Multiple elements', async ({page}) => {
    await page.goto('https://www.demoblaze.com/');

    /* //Want to print all the links
    const links = await page.$$('a')

    for(const link of links)
    {
        const automate = await link.textContent();
        console.log(`Current links: ${automate}`)
    } */

    await page.waitForSelector("//div[@id='tbodyid']//h4/a")
    const products = await page.$$("//div[@id='tbodyid']//h4/a")

    for(let prduct of products)
    {
        const productLink = await prduct.textContent();
        console.log(productLink)
    }

    await page.close();
})