const {test,expect} = require('@playwright/test')

test('Handle dropdown', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Multiple ways to handle dropdown

    //await page.locator('#country').selectOption({label: 'Japan'})
    //await page.locator('#country').selectOption("India")
    //await page.locator('#country').selectOption({value:'germany'})
    //await page.selectOption('#country',{index:2})
    await page.waitForTimeout(5000)

    //Approach 1
    /* const option = await page.locator('#country option')
    await expect(option).toHaveCount(10) */

    //Approach 2 using length
    //const options = await page.$$('#country option')
    //await expect(options.length).toBe(10)

    //Approach 3-1
    //const content = await page.locator('#country').textContent()
    //await expect(content.includes('Japan')).toBeTruthy()

    //Approach 3-2 using looping
    const options = await page.$$('#country option')
    for(const option of options)
    {
        const value = await option.textContent();
        if(value.includes('India'))
        {
            await page.selectOption('#country',value)
        }
    }

    await page.waitForTimeout(5000)

})