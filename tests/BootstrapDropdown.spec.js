const {test,expect} = require('@playwright/test')

test('Handle bootstrap dropdown', async({page}) => {
    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2')

    await page.locator('button.multiselect').click();

    await page.waitForTimeout(5000)

    const options = await page.$$('ul>li label')
    for(let option of options)
    {
        const value = await option.textContent()
        if(value.includes('Bootstrap') || value.includes('C#'))
        {
            await option.click()
        }
    }
    await page.waitForTimeout(5000)
})