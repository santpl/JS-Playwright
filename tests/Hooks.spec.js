const { test, expect } = require("@playwright/test")
let page;

test.beforeEach(async({browser}) => {
    page = await browser.newPage()
    await page.goto("https://demoblaze.com/index.html")
    //Login
    await page.click('#login2')
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator("//button[normalize-space()='Log in']").click()

    await page.waitForTimeout(5000)
});

test('Home Page test', async() => {

    //To check no of products in homepage
    await expect(page.locator(".hrefch")).toHaveCount(9)
    await page.waitForTimeout(5000)
});

test.afterEach(async() => {
    //Logout
    await page.locator('#logout2').click()
    await page.waitForTimeout(5000)
});