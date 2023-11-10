const {test,expect} = require('@playwright/test')

test('Soft Assertion', async({page}) => {
    await page.goto('https://www.demoblaze.com/')
    /*
    await expect(page).toHaveTitle('STORE123')
    await expect(page).toHaveURL('https://www.demoblaze.com/')
    await expect(page.locator('a.navbar-brand')).toBeVisible(); */

    //softAssertion
    await expect.soft(page).toHaveTitle('STORE123')
    await expect.soft(page).toHaveURL('https://www.demoblaze.com/')
    await expect.soft(page.locator('a.navbar-brand')).toBeVisible();

})