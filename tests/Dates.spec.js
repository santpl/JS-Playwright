const {test, expect} = require('@playwright/test')

test('Date picker', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    //await page.fill('input#datepicker', '03/15/2024')
    await page.click('input#datepicker')

    const Date = "15"
    const Month = "March"
    const year = "2024"

    while(true)
    {
        const currentMonth = await page.locator('.ui-datepicker-month').textContent()
        const currentYear = await page.locator('.ui-datepicker-year').textContent()
        if((currentMonth == Month) && (currentYear == year))
        {
            break;
        }
        await page.locator("[title='Next']").click()
    }

    /*const dateCalender = await page.$$("//a[@class='ui-state-default']")
    for (const dt of dateCalender)
    {
        if(await dt.textContent() == Date)
        {
            await dt.click()
        }
    }
    */
    
    await page.click(`//a[@class='ui-state-default'][text()='${Date}']`)

    await page.waitForTimeout(3000)
})