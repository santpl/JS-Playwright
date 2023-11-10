const {test, expect} = require('@playwright/test')

test('Screenshot ', async({page}) => {
    await page.goto('https://demo.opencart.com/')

    await page.screenshot({path: 'tests/screenshots/' + Date.now() + 'HomePage.png'})
    await page.waitForTimeout(5000)
})

test('Full page screenshot', async({page}) => {
    await page.goto('https://demo.opencart.com/')

    await page.screenshot({path: 'tests/screenshots/' + Date.now() + 'FullPage.png', fullPage: true})
})

test.only('Element screenshot', async({page}) => {
    await page.goto('https://demo.opencart.com/')
    await page.locator('//*[@id="content"]/div[2]/div[2]/form/div').screenshot({path: 'tests/screenshots/' + Date.now() + 'Particularpart.png'})
})
