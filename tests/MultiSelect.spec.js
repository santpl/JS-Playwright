const {test,expect} = require('@playwright/test')

test('Handle Multiselect dropdown', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Select multiple values from dropdown
    await page.selectOption('#colors',['blue', 'white'])

    //check no of options in dropdown
    /* const option = await page.locator('#colors option')
    await expect(option).toHaveCount(5) */

    // using js array
    const option = await page.$$('#colors option')
    await expect(option.length).toBe(5)

    // check presence of value in dropdown
    const color = await page.locator('#colors').textContent()
    await expect(color.includes('Green')).toBeTruthy()

    await page.waitForTimeout(5000)
})