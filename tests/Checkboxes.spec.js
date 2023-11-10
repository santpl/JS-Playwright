const{test,expect} = require('@playwright/test')

test('Handle checkboxes', async({page})=> {
    await page.goto('https://demoqa.com/checkbox')

    await page.locator('button.rct-collapse.rct-collapse-btn').click();
    await page.waitForTimeout(5000)

    await page.locator("//label[@for='tree-node-desktop']").check();

    await page.waitForTimeout(5000)

    //To uncheck
    if( expect(await page.locator("//label[@for='tree-node-desktop']//span[@class='rct-checkbox']").isChecked()))
    {
        await page.locator("//label[@for='tree-node-desktop']//span[@class='rct-checkbox']").uncheck();
    }
        
    await page.waitForTimeout(5000)

    // Multiple checkboxes
    const checkboxLocators = ["//label[@for='tree-node-desktop']//span[@class='rct-checkbox']",
                              "//label[@for='tree-node-documents']//span[@class='rct-checkbox']",
                              "//label[@for='tree-node-downloads']//span[@class='rct-checkbox']"]

    for(const checkbox of checkboxLocators)
    {
        await page.locator(checkbox).check();
    }

    await page.waitForTimeout(5000)
})