import {test,expect} from '@playwright/test'

test('Built-in locator', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    const logo = await page.getByAltText('company-branding')
    await expect(logo).toBeVisible();

    //username and password by using placeholder

    await page.getByPlaceholder('Username').type('Admin')
    await page.getByPlaceholder('Password').fill('admin123')

    //Using getByRole to perform click action
    await page.getByRole('button', {type:'submit'}).click();

    const text = await page.locator("p[class='oxd-userdropdown-name']").textContent();
    await expect(await page.getByText(text)).toBeVisible()

    await page.close();

})