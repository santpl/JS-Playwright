const{test,expect}=require('@playwright/test')

test('Input Box', async({page}) => {
    await page.goto('https://demoqa.com/radio-button')

    const impressive = await page.locator("//label[@for='impressiveRadio']")
    await expect(impressive).toBeVisible()

    await page.check("//label[@for='impressiveRadio']")
    await expect(await page.locator("//label[@for='impressiveRadio']").isChecked()).toBeTruthy();

})