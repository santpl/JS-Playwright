const { test, expect } = require("@playwright/test")

test('Automatic screenshot', async({page}) => {
    await page.goto("https://demoblaze.com/index.html")
    //Login
    await page.click('#login2')
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator("//button[normalize-space()='Log in']").click()
    await expect(page.locator('#logout')).toBeVisible()
    await page.waitForTimeout(5000)
})