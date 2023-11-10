const{test, expect} = require('@playwright/test')

test.skip('Right click action', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    const name = await page.locator('#name')
    await name.click({name : 'right'})
    await page.waitForTimeout(5000)
})

test('Double click', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    const doubleClick = await page.locator("//button[text()='Copy Text']")
    await doubleClick.dblclick()

    const f2 = await page.locator('#field2')
    await expect(f2).toHaveValue('Hello World!')

    await page.waitForTimeout(5000)
})
