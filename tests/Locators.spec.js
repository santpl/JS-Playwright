import {test,expect} from '@playwright/test'

test('Locators hunting', async ({page}) => {

    await page.goto('https://www.demoblaze.com/');

    //click on login button
    await page.click('id=login2');

    // Enter username
    await page.fill('#loginusername','pavanol')

    //Enter password
    await page.type("input[id='loginpassword']", 'test@123')

    await page.click("//button[contains(text(), 'Log in')]")

    //To check the "logout" link

    const logoutLink = await page.locator('#logout2')
    await expect(logoutLink).toBeVisible();

    await page.close();
})