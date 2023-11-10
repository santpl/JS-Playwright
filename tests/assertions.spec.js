const {test, expect} = require('@playwright/test')

test('Assertions test', async ({page})=> {
    await page.goto('https://demo.nopcommerce.com/register')

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

    //Verify the title
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    //Verify whether logo is visible or not
    const logoText = await page.locator('.header-logo')
    await expect(logoText).toBeVisible();

    // To be enabled or disabled
    const searchBox = await page.getByPlaceholder('Search store')
    await expect(searchBox).toBeEnabled()

    // Verify radio button or checkbox is selected or not
    const maleGenderbox = await page.locator('#gender-male')
    await maleGenderbox.click()
    await expect(maleGenderbox).toBeChecked()

    const Newsletter = await page.locator('#Newsletter')
    await expect(Newsletter).toBeChecked();

    //toHaveAttribute() method
    const Registerbtn = await page.locator('#register-button')
    await expect(Registerbtn).toHaveAttribute('type', 'submit')

    //toHaveText() method
    const text = await page.locator('.page-title h1')
    await expect(text).toHaveText('Register')

    await expect(text).toContainText('Regi')

    // toHaveValue() method
    const EmailField = await page.locator('#Email')
    await EmailField.fill('test@test.com')
    await expect(EmailField).toHaveValue('test@test.com')

    //To know how many options are there in dropdown
    const Daybox = await page.locator('select[name="DateOfBirthDay"] option')
    await expect(Daybox).toHaveCount(32)
})