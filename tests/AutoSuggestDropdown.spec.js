const {test, expect} = require('@playwright/test')

test('Handle auto suggestion', async({page}) => {
    await page.goto('https://www.redbus.in/')

    await page.locator('#src').fill('Chennai')
    await page.waitForSelector("//li[contains(@class, 'sc-iwsKbI')]/div/text[@class='placeHolderMainText']")

    const fromCityOption = await page.$$("//li[contains(@class, 'sc-iwsKbI')]/div/text[@class='placeHolderMainText']")
    for(const option of fromCityOption)
    {
        const value = await option.textContent()
        console.log(value)
        if(value.includes('Tambaram'))
        {
            await option.click();
        }
    }

    await page.waitForTimeout(3000)
})