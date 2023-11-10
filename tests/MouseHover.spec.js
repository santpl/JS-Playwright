const {test, expect} = require('@playwright/test')

test('Mouse Hover', async({page}) => {
    await page.goto('https://demo.opencart.com/')

    const Desktop = await page.locator("//a[text()='Desktops']")
    const Macbook = await page.locator("//a[text()='Mac (1)']")

    await Desktop.hover();
    await Macbook.hover();

    await page.waitForTimeout(4000)
})