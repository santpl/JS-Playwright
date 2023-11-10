const{test, expect} = require('@playwright/test')

test('Keyboard Actions', async({page}) => {
    await page.goto("https://gotranscript.com/text-compare")
    
    await page.locator("[name='text1']").type("Welcome Santhosh")

    //ctrl+A

    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')

    // tab
    await page.keyboard.down('Tab')

    //ctrl+V
    await page.keyboard.press('Control+V')

    await page.waitForTimeout(5000)
})