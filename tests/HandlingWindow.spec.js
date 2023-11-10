const{test, expect, chromium} = require('@playwright/test');

test("Handling Windows", async() => {

    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1 = await context.newPage();
    const page2 = await context.newPage();

    const allpages = await context.pages();
    console.log("No of pages created: ", allpages.length)

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    expect(page1).toHaveTitle("OrangeHRM")

    await page2.goto("https://www.orangehrm.com/")
    expect(page2).toHaveTitle("OrangeHRM HR Software | OrangeHRM")
})

test.only("Handling multiple Windows", async() => {

    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1 = await context.newPage();
    
    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    expect(page1).toHaveTitle("OrangeHRM")

    const pagePromise = context.waitForEvent('page')
    await page1.click("//a[normalize-space()='OrangeHRM, Inc']")
    const newPage = await pagePromise;
    await expect(newPage).toHaveTitle("OrangeHRM HR Software | OrangeHRM")

    await newPage.waitForTimeout(3000)
})